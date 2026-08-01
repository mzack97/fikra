# Fikra

Two-sided marketplace for survey responses, built for Uzbekistan.
MVP: frontend only, mock data, no backend.

## Run it

Requires Node 20+.

```bash
npm install
npm run dev            # http://localhost:5173
npm run dev -- --host  # also reachable from your phone on the same Wi-Fi
```

```bash
npm run typecheck      # must stay clean
npm run build          # must succeed before every deploy
npm run preview        # serve the production build locally
```

## Routes

| Route | Screen |
|---|---|
| `/` | Landing |
| `/design-system` | Component reference (not for the demo) |
| `/data-inquiries` | Data inquiry form |
| `/register/taker`, `/register/creator` | Registration |
| `/t/dashboard`, `/t/surveys`, `/t/survey/:id`, `/t/earnings` | Taker |
| `/c/dashboard`, `/c/survey/:id` | Creator |
| `/c/survey/new/questions`, `/new/audience`, `/new/reward` | Builder |

## Structure

```
src/
  api/        mock data layer — the ONLY place localStorage is touched
  data/       canonical reference data (regions, enums, taxonomies)
  lib/        money, duration, reward floor
  pages/
    generated/  auto-converted from the design export — DO NOT hand-edit
  styles/     tokens.css, base.css, layout.css — lifted from the design
tools/
  convert.py  design HTML -> React converter, re-runnable
```

## Rules

1. **Nothing outside `src/api/` touches storage.** That boundary is what lets a
   real backend replace the mock layer without touching a single screen.
2. **Money is an integer count of so'm.** Never a float, never a string.
   Use `Som`, `formatSom`, `calculateCost`.
3. **Labels come from `src/data/reference.ts`.** Never retype one at a call site.
4. **`src/pages/generated/` is machine output.** To change a design, change it in
   Claude Design, re-run the converter, then re-apply logic. Editing generated
   files by hand means losing the work on the next design change.

## Regenerating from a design change

```bash
python3 tools/convert.py /path/to/design/export src/pages/generated
npm run typecheck
```
