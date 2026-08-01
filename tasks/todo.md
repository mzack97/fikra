# Fikra — build todo

## Milestone 0 — Design intake  ✅ DONE
- [x] Open all 15 Phase 1 files, read the CSS rather than eyeballing screens
- [x] Verify token consistency across pages (md5 identical on all 14 — zero drift)
- [x] Extract `tokens.css` (verbatim), `base.css`, `layout.css`
- [x] Place logo assets in `public/`
- [x] Scaffold Vite + React + TS + Router; `npm install` clean
- [x] Write `tools/convert.py` — re-runnable HTML→JSX converter
- [x] Convert all 14 screens; `npm run typecheck` clean; `npm run build` succeeds
- [x] Route every screen
- [x] `lib/money.ts` — branded `Som`, `formatSom`, `calculateCost`
- [x] `lib/duration.ts` — estimate, `minimumReward` floor
- [x] `data/reference.ts` — 14 regions, enums, categories, study types
- [x] Verify every distribution weight sums to 1.000

## Milestone 0b — Intake fixes  ✅ DONE
- [x] Logo missing: design referenced `uploads/Logo-full.png`; converter now
      rewrites asset paths to the ones Vite serves from `public/`
- [x] No hover states anywhere: the design declared 54 `transition:` properties
      inline but inline styles cannot hold `:hover`, so nothing ever triggered.
      Added `styles/interactions.css` supplying the missing half, using the
      durations the design already specified
- [ ] Remove the "Panel holatlari" reference block from the audience screen —
      it is a spec artifact showing three panel states side by side, not part of
      the product. Disappears when the page is wired in Milestone 3.
- [ ] Same check on every other screen: the stacked, labelled state variants
      (registration steps, survey flow states) are reference layouts. Each
      becomes one live screen with real state, not a scrolling list.

## Milestone 1 — Data layer  ← NEXT
- [ ] `api/client.ts` — versioned store, artificial latency, error simulation
- [ ] Domain types: User, TakerProfile, Survey, Question, Response, LedgerEntry
- [ ] Quiz content from the content pack → `data/quizzes.ts` (10 quizzes)
- [ ] Survey pool from the content pack → `data/surveys.ts` (18 studies)
- [ ] Seed generator: 2 000 panelists with the correlations held
- [ ] `api/targeting.ts` — match count over the seeded panel
- [ ] Verify: match counts move correctly and plausibly across filter changes

## Milestone 2 — Taker loop
- [ ] Shared shell (sidebar, tabbar, header) extracted from generated pages
- [ ] Registration wired: steps, fake OTP, fake OneID, persistence across refresh
- [ ] Quiz engine (reused by registration, profile, and survey-taking)
- [ ] Dashboard live off the store
- [ ] Survey list: filters, URL state, eligibility reasons on locked cards
- [ ] Taking flow: slot claim, timing capture, attention check, quality scoring
- [ ] Earnings + withdrawal with threshold enforcement

## Milestone 3 — Creator loop
- [ ] Registration, dashboard
- [ ] Builder steps 1–2
- [ ] Builder step 3 — live match count (the signature screen)
- [ ] Builder step 4 — cost breakdown, reward floor enforcement
- [ ] Publish: reserve funds, write ledger entries
- [ ] Billing + fake deposit

## Milestone 4 — Analytics
- [ ] Summary row + per-question charts (Recharts)
- [ ] Cross-tab segment filter
- [ ] CSV + JSON export
- [ ] Respondent breakdown + quality summary

## Milestone 5 — Ship
- [ ] Mobile pass on the taking flow
- [ ] Accessibility pass
- [ ] Demo reset control
- [ ] Git repo public
- [ ] Deploy + SPA routing fallback verified on a deep link
- [ ] Demo script rehearsed twice on the deployed URL

## Open decisions
- [ ] `interview_screener` in the MVP, or roadmap only?
- [ ] Build the two missing screens (creator billing, taker profile) or cut them?
- [ ] Content pack Uzbek reviewed and corrected?
