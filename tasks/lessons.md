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
