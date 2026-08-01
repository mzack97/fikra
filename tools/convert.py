#!/usr/bin/env python3
"""
Convert Claude Design x-dc HTML exports into draft React components.

This is mechanical translation only. It does NOT add logic — every converted
page is a static render of the design. Logic is added afterwards, page by page,
per the build plan. Re-runnable: rerun after a design change and re-diff.

Usage: python3 tools/convert.py <uploads_dir> <out_dir>
"""
import html
import os
import re
import sys

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}

# Design filename -> React component name
NAMES = {
    "landing": "Landing",
    "design-system": "DesignSystem",
    "register-taker": "RegisterTaker",
    "register-creator": "RegisterCreator",
    "taker-dashboard": "TakerDashboard",
    "taker-surveys": "TakerSurveys",
    "taker-survey-flow": "TakerSurveyFlow",
    "taker-earnings": "TakerEarnings",
    "creator-dashboard": "CreatorDashboard",
    "creator-analytics": "CreatorAnalytics",
    "builder-questions": "BuilderQuestions",
    "builder-audience": "BuilderAudience",
    "builder-reward": "BuilderReward",
    "data-inquiries": "DataInquiries",
}

ATTR_MAP = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "colspan": "colSpan",
    "rowspan": "rowSpan",
    "maxlength": "maxLength",
    "minlength": "minLength",
    "readonly": "readOnly",
    "autocomplete": "autoComplete",
    "autofocus": "autoFocus",
    "spellcheck": "spellCheck",
    "contenteditable": "contentEditable",
    "srcset": "srcSet",
    "inputmode": "inputMode",
    "enterkeyhint": "enterKeyHint",
    "crossorigin": "crossOrigin",
    "novalidate": "noValidate",
    "formaction": "formAction",
    "datetime": "dateTime",
    "accesskey": "accessKey",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-dasharray": "strokeDasharray",
    "stroke-dashoffset": "strokeDashoffset",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "clip-path": "clipPath",
    "stop-color": "stopColor",
    "stop-opacity": "stopOpacity",
    "text-anchor": "textAnchor",
    "dominant-baseline": "dominantBaseline",
    "font-size": "fontSize",
    "font-family": "fontFamily",
    "font-weight": "fontWeight",
    "letter-spacing": "letterSpacing",
    "shape-rendering": "shapeRendering",
    "vector-effect": "vectorEffect",
    "xmlns:xlink": "xmlnsXlink",
    "xlink:href": "xlinkHref",
    "aria-labelledby": "aria-labelledby",
}

BOOLEAN_ATTRS = {"checked", "disabled", "selected", "readonly", "required",
                 "autofocus", "multiple", "hidden", "open"}

BOOLEANISH_ARIA = {"aria-selected", "aria-checked", "aria-expanded",
                   "aria-pressed", "aria-hidden", "aria-disabled",
                   "aria-busy", "aria-required", "aria-invalid"}

NUMERIC_PROPS = {"maxlength", "minlength", "size", "rows", "cols", "span",
                 "start", "tabindex", "colspan", "rowspan", "width", "height"}

NUMERIC_ARIA = {"aria-valuenow", "aria-valuemin", "aria-valuemax",
                "aria-level", "aria-posinset", "aria-setsize", "aria-colcount",
                "aria-rowcount", "aria-colindex", "aria-rowindex"}

# Design-runtime control-flow elements. They are not real DOM: unwrap them and
# keep the children, leaving a marker where iteration/conditionals belong.
CONTROL_TAGS = {"sc-for", "sc-if", "sc-else", "sc-elseif", "sc-show", "sc-slot"}


def css_prop_to_js(prop: str) -> str:
    prop = prop.strip()
    if prop.startswith("--"):
        return f"'{prop}'"
    parts = prop.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def style_to_jsx(style: str) -> str:
    """Convert a CSS declaration string into a JSX style object literal."""
    out = []
    depth = 0
    buf = ""
    # split on ';' that are not inside parentheses (gradients, calc, etc.)
    for ch in style:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == ";" and depth == 0:
            out.append(buf)
            buf = ""
        else:
            buf += ch
    if buf.strip():
        out.append(buf)

    pairs = []
    for decl in out:
        if ":" not in decl:
            continue
        prop, _, value = decl.partition(":")
        value = value.strip().replace("\\", "\\\\").replace("'", "\\'")
        if not value:
            continue
        pairs.append(f"{css_prop_to_js(prop)}: '{value}'")
    return "{{ " + ", ".join(pairs) + " }}"


def convert_attrs(attr_str: str, tag_name: str = "") -> str:
    """Rewrite an HTML attribute string into JSX attributes."""
    parts = []
    pattern = re.compile(r'([:@a-zA-Z_][-:.\w]*)(?:\s*=\s*"([^"]*)"|\s*=\s*\'([^\']*)\')?')
    for m in pattern.finditer(attr_str):
        name = m.group(1)
        value = m.group(2) if m.group(2) is not None else m.group(3)

        # Design-runtime bindings (:foo, @click) and DOM event handler strings
        # carry no meaning in React — real handlers are added in the build phase.
        if name.startswith((":", "@", "x-")) or re.match(r"on[a-z]+$", name.lower()):
            continue

        if value is None:
            if name.lower() in BOOLEAN_ATTRS:
                parts.append(f"{ATTR_MAP.get(name.lower(), name)}")
            continue

        if name.lower() == "style":
            parts.append(f"style={style_to_jsx(html.unescape(value))}")
            continue

        jsx_name = ATTR_MAP.get(name.lower(), name)

        # A design binding inside a strictly-typed attribute cannot be expressed
        # as a string. Drop it here; the build phase re-adds it with real state.
        if "{{" in value and name.lower() in (
                NUMERIC_ARIA | NUMERIC_PROPS | BOOLEANISH_ARIA):
            continue

        # Inputs carrying a value but no handler must be uncontrolled until the
        # build phase wires state, or React logs a controlled-input warning.
        if name.lower() == "value" and tag_name in ("input", "textarea"):
            jsx_name = "defaultValue"

        # React types these props as numbers, not strings
        if (name.lower() in NUMERIC_ARIA or name.lower() in NUMERIC_PROPS) \
                and re.fullmatch(r"-?\d+(\.\d+)?", value.strip()):
            parts.append(f"{jsx_name}={{{value.strip()}}}")
            continue

        if name.lower() in BOOLEAN_ATTRS:
            parts.append(f"{jsx_name}")
            continue

        v = html.unescape(value)
        # Design template bindings inside attribute values -> leave a visible marker
        v = re.sub(r"\{\{\s*([^}]+?)\s*\}\}", r"[\1]", v)
        v = v.replace("\\", "\\\\").replace('"', "&quot;")
        parts.append(f'{jsx_name}="{v}"')

    return (" " + " ".join(parts)) if parts else ""


def escape_text(text: str) -> str:
    """JSX-safe text: braces must be escaped, entities decoded then re-expressed."""
    text = html.unescape(text)
    # Design bindings {{ x }} become {/* x */} placeholders the build phase fills in
    text = re.sub(r"\{\{\s*([^}]+?)\s*\}\}", lambda m: "{/* BIND: " + m.group(1) + " */}", text)
    # any remaining literal braces need escaping
    def esc(chunk: str) -> str:
        return chunk.replace("{", "&#123;").replace("}", "&#125;")
    out, last = [], 0
    for m in re.finditer(r"\{/\* BIND: .*? \*/\}", text):
        out.append(esc(text[last:m.start()]))
        out.append(m.group(0))
        last = m.end()
    out.append(esc(text[last:]))
    return "".join(out)


def convert_body(body: str) -> str:
    """Walk the HTML string, rewriting tags and escaping text."""
    result = []
    pos = 0
    tag_re = re.compile(r"<(/?)([a-zA-Z][-\w]*)((?:\s+[^<>]*?)?)(/?)>", re.S)
    for m in tag_re.finditer(body):
        text = body[pos:m.start()]
        if text.strip():
            result.append(escape_text(text))
        elif text:
            result.append(text if "\n" in text else " ")

        closing, tag, attrs, selfclose = m.groups()

        if tag.lower() in CONTROL_TAGS:
            # Unwrap: emit nothing for the tag itself, keep its children.
            if not closing:
                cond = re.search(r'(?:each|of|in|cond|if)\s*=\s*"([^"]*)"', attrs or "")
                label = cond.group(1) if cond else tag.lower()
                result.append("{/* " + tag.lower().upper() + ": " + label + " */}")
            pos = m.end()
            continue

        if closing:
            result.append(f"</{tag}>")
        else:
            jsx_attrs = convert_attrs(attrs or "", tag.lower())
            if tag.lower() in VOID or selfclose:
                result.append(f"<{tag}{jsx_attrs} />")
            else:
                result.append(f"<{tag}{jsx_attrs}>")
        pos = m.end()

    tail = body[pos:]
    if tail.strip():
        result.append(escape_text(tail))
    return "".join(result)


# The design export references assets by its own relative path. Rewrite to the
# paths Vite serves them from in public/.
ASSET_PATHS = {
    "uploads/Logo-full.png": "/logo-full.png",
    "uploads/logo-icon.png": "/logo-icon.png",
    "./uploads/Logo-full.png": "/logo-full.png",
    "./uploads/logo-icon.png": "/logo-icon.png",
}


def extract_body(raw: str) -> str:
    """Pull the renderable markup out of the x-dc wrapper."""
    for old, new in ASSET_PATHS.items():
        raw = raw.replace(f'src="{old}"', f'src="{new}"')
    raw = re.sub(r"<helmet>.*?</helmet>", "", raw, flags=re.S)
    raw = re.sub(r"<style>.*?</style>", "", raw, flags=re.S)
    raw = re.sub(r"<script.*?</script>", "", raw, flags=re.S)
    raw = re.sub(r"<!--.*?-->", "", raw, flags=re.S)
    m = re.search(r"<x-dc[^>]*>(.*?)</x-dc>", raw, re.S)
    if m:
        return m.group(1)
    m = re.search(r"<body[^>]*>(.*?)</body>", raw, re.S)
    return m.group(1) if m else raw


def convert_file(src_path: str, out_dir: str) -> tuple[str, int]:
    stem = os.path.basename(src_path).replace("_dc.html", "")
    name = NAMES.get(stem)
    if not name:
        return "", 0

    body = extract_body(open(src_path, encoding="utf-8").read())
    jsx = convert_body(body).strip()

    src = (
        "// AUTO-GENERATED from the Phase 1 design export by tools/convert.py\n"
        "// Static render of the design. Logic is added in the build phase.\n"
        "// {/* BIND: x */} markers show where the design expected dynamic data.\n"
        "// Re-runnable: regenerate after a design change, then re-apply logic.\n\n"
        f"export default function {name}() {{\n"
        "  return (\n"
        "    <>\n"
        f"{jsx}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )
    out_path = os.path.join(out_dir, f"{name}.tsx")
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(src)
    binds = len(re.findall(r"BIND:", src))
    return out_path, binds


def main() -> None:
    uploads, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)
    total = 0
    for fn in sorted(os.listdir(uploads)):
        if not fn.endswith("_dc.html"):
            continue
        path, binds = convert_file(os.path.join(uploads, fn), out_dir)
        if path:
            size = os.path.getsize(path)
            print(f"  {os.path.basename(path):26} {size:>7,} bytes  {binds:>3} bindings")
            total += 1
    print(f"\n{total} components generated in {out_dir}")


if __name__ == "__main__":
    main()
