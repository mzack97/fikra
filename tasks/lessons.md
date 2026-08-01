# Lessons

Patterns to avoid repeating. Appended after any correction.

## 2026-08-02 — Design export format
The design tool emits an `x-dc` custom-element wrapper with a React runtime
shim, control-flow tags (`sc-for`, `sc-if`), template bindings (`{{ x }}`), and
DOM event-handler attributes. None of these are valid React. The converter must
strip or unwrap all four. Assuming "static HTML" without inspecting the export
first would have produced hundreds of type errors.

## 2026-08-02 — Automate the conversion
15 files with 74–318 inline style attributes each is not hand-conversion work.
Writing a re-runnable converter cost one iteration cycle and made design changes
cheap forever. Hand-converting would have made every design change expensive.

## 2026-08-02 — Verify distributions, not just types
A typechecked weights table can still sum to 0.97 and silently skew the seeded
panel. Assert the sums in a check, not by reading.

## 2026-08-02 — Breadth before depth was the wrong order
Wiring navigation across all 14 static screens made the app *look* functional
and made every unbuilt feature feel like a bug. One screen working end to end
would have communicated progress honestly. Rule: finish a flow before making the
next one reachable. Reachability is a promise.

## 2026-08-02 — Shared ids across pages are not unique keys
`btn-finish-registration` exists only on the creator page, but I mapped it to
the taker dashboard from memory instead of checking. Result: creators landed in
the taker app. Rule: grep for an id before routing it, and never assume the
element lives where the name suggests.

## 2026-08-02 — Unknown attributes are signals, not noise
The converter silently dropped `style-hover` (150 occurrences of real design
intent) and I then told the user the hovers "were never there". Rule: when a
converter meets an attribute it doesn't recognise, log it and investigate rather
than discarding it.
