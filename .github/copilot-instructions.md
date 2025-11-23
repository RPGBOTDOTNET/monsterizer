## Purpose

This file gives concise, actionable guidance to an AI coding agent working on the Monsterizer repository so it can be immediately productive.

## Quick start commands

- **Node:** This project targets Node `v25` (see `package.json` -> `engines`). Use `nvm install 25 && nvm use`.
- **Install deps:** `npm ci` (preferred for CI-consistent installs).
- **Dev server:** `npm run dev` (or `npm start`, both run Vite).
- **Build:** `npm run build` — runs `tsc -b` then `vite build`.
- **Typecheck:** `npm run typecheck` (`tsc -b --noEmit`).
- **Tests (unit):** `npm test` (runs `vitest --run`).
- **Tests (watch/ui):** `npm run test:watch` or `npm run test:ui` (Vitest UI).
- **Storybook (dev):** `npm run storybook` (port 6006). Storybook has its own Vitest integration.

## Testing specifics

- The project uses `vitest` with `jsdom` for most tests. See `vitest.config.ts` — it includes a Storybook test project that runs browser tests via Playwright.
- Playwright-based tests require installed browsers (the repo lists `playwright` in `devDependencies`). When running Storybook/Vitest browser tests expect headless Chromium.
- Coverage is collected with `npm run test:ci` (`vitest --run --coverage`). The Vitest config excludes `**/*.test.{ts,tsx}` from coverage and includes `src/**/*.{ts,tsx}`.
- Unit tests live next to implementation, e.g. `calculators/hit-points.ts` + `calculators/hit-points.test.ts`.

## Key directories & patterns

- `src/` — application code and assets. `main.tsx` is the entrypoint for the SPA.
- `calculators/` — pure calculation modules with heavy test coverage (these are small, composable functions; look for `index.ts` aggregator).
- `components/` — React components grouped by feature (e.g. `components/actions`, `components/defenses`). Follow existing component structure and CSS-in-JS patterns (styled-components + PrimeReact).
- `src/monster-srd/` — canonical monster data. A helper script `scripts/split-monsters-robust.cjs` shows how the `MONSTER_SRD` export is structured and how it can be split into per-monster files.

## Conventions the agent must follow

- Keep functions small and testable — mirror the existing style used by `calculators/*` (one purpose per file, a corresponding `.test.ts`).
- Tests use Vitest globals (no explicit import in many tests). Use the `vitest.config.ts` setup files if you need global fixtures (`vitest-setup.js`).
- Use `tsc -b` for type-aware refactors; the repo uses project references (see `tsconfig.*.json`).
- Formatting and lints: run `npm run prettier` and `npm run lint` to check code style before proposing changes; Husky is configured (`prepare` script) so commits may be validated locally.

## Integration & build notes

- The build step runs `tsc -b` first. If you add or change tsconfig references, update `tsconfig.*.json` accordingly.
- Storybook lives alongside the app (Storybook uses `@storybook/react-vite`). Storybook tests are wired into Vitest using `@storybook/addon-vitest` — see `vitest.config.ts` for how the storybook test project is configured.

## Data and copyright

- The repo contains SRD-derived data. The project README documents licensing restrictions — do not add or suggest copyrighted monsters that are not part of the SRD.

## Debugging tips

- Use `npm run dev` and open the browser console for UI tracing. For unit tests, `npm run test:ui` gives an interactive Vitest UI.
- To reproduce data transformations, inspect `scripts/split-monsters-robust.cjs` and `src/monster-srd/monsterSRD.ts`.

## Examples (how to run common tasks)

- Run unit tests and coverage: `nvm use && npm ci && npm run test:ci`.
- Start Storybook and run story-based tests: `npm run storybook` (in another shell run the vitest storybook project or let CI run it).

## Where to look for context

- Business logic examples: `calculators/` (many small, focused functions + tests).
- Data ingestion / manipulation: `scripts/` and `src/monster-srd/`.
- Test config: `vitest.config.ts` and `vitest-setup.js`.
- Project scripts and dependencies: `package.json`.

## When in doubt

- Prefer following the closest existing example in `calculators/` or `components/` rather than introducing new global patterns.
- Run the project's tests locally (`npm test`) before opening a PR.

---

If you want any section expanded (CI specifics, Storybook test examples, or a checklist to run before committing), tell me which and I'll iterate.
