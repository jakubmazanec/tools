# Design: finish the tsdown and React Compiler migration

Date: 2026-08-09
Branch: `react-compiler` (rebuilt onto `development`), single PR targeting `development`.

## Context

The `react-compiler` branch is five commits ahead of `development` and stale. Meanwhile
`development` shipped its own `@jakubmazanec/eslint-config` update: `eslint-plugin-react-hooks@^7.1.1`
with all compiler-powered rules present but commented out, and the old `eslint-plugin-react-compiler`
rules removed. That supersedes four of the five branch commits; only `5ae24c954` (`Switch to Tsdown`)
still carries unique value.

### Tooling reality (verified 2026-08-09)

- The Rust port of React Compiler is merged into facebook/react (PR #36173) and integrated
  experimentally in `oxc-transform` (`reactCompiler: true`), but its interface is Babel-AST-shaped.
- Rolldown wired it behind `transform.reactCompiler` and withdrew it on 2026-06-09 over a 5.1 MB
  binary-size increase and AST round-trip overhead. The Oxc Q3 2026 plan commits to stabilizing it
  and shipping the Vite integration carefully; it has not shipped.
- The officially supported build-time path for tsdown and Vite today is the Babel bridge:
  `@rolldown/plugin-babel` with `reactCompilerPreset()` from `@vitejs/plugin-react`.
- `eslint-plugin-react-hooks` v7 embeds the compiler analysis as ESLint rules and needs no Babel.

Sources: [facebook/react#36173](https://github.com/facebook/react/pull/36173),
[oxc React Compiler docs](https://oxc.rs/docs/guide/usage/transformer/react-compiler.html),
[Socket: Rolldown pulls Rust React Compiler](https://socket.dev/blog/rolldown-pulls-rust-react-compiler-integration),
[oxc Q3 2026 plan](https://github.com/oxc-project/oxc/issues/23976),
[vite-plugin-react discussion #1240](https://github.com/vitejs/vite-plugin-react/discussions/1240),
[tsdown React recipe](https://tsdown.dev/recipes/react-support).

## Decisions

1. **Babel bridge now.** Build-time compilation uses `@rolldown/plugin-babel` +
   `reactCompilerPreset()`. Swapping to Rolldown's native integration when it ships is a separate
   future PR.
2. **Compile scope: `ui` only.** The compiler lives in the `react-library` template; `carson` and
   `cli` (Ink CLIs built from the `library` template) are not compiled.
3. **Lint severities come from `development`.** The commented block in
   `packages/eslint-config/source/rules/react-hooks.ts` is uncommented as written.
4. **Violations get fixed, not suppressed wholesale.** Each fix in `carson`, `cli` and `ui` is a
   real code change or a justified disable comment, individually approved by Jakub.
5. **Approach A.** Rebuild the branch on `development`, cherry-pick only `Switch to Tsdown`, one PR.

## Section 1: branch rebuild and tsdown refresh

- Backup ref first: `git branch react-compiler-old 665be677c`. Nothing force-pushed until the PR is
  ready.
- Reset `react-compiler` hard to `development`; cherry-pick this design-doc commit and `5ae24c954`.
  The other four commits are dropped as superseded (the `useProgram.ts` cleanup already exists on
  `development`; the per-project rule-off overrides from `Temp` contradict decision 4).
- Conflict policy for the cherry-pick:
  - `packages/*/package.json`: take `development` versions, apply only the esbuild-to-tsdown swap.
  - `package-lock.json`: never hand-merge; take `development`, run `npm install` after package.json
    edits settle.
  - `packages/carson-templates`: re-apply tsdown changes (remove `getBuildToCjsCommand` and
    `getBuildToEsmCommand`, add both `tsdown.config.ts.ejs` templates) onto the current state.
  - `.carson/project.snapshot`: never merge; regenerate with `npm run prepare`, then verify no
    orphaned dependencies were resurrected.
- Bump `tsdown` from `^0.17.2` to the current latest and re-verify the used config surface
  (`platform: 'neutral'`, `unbundle`, `copy`, `outDir`, `entry`) against current docs before
  regenerating.

## Section 2: React Compiler build integration (react-library template)

- Dependencies added to the react-library template `package.json.ejs`: `@rolldown/plugin-babel` and
  `@vitejs/plugin-react`, plus `babel-plugin-react-compiler` if plugin-react declares it as a peer;
  pin the exact set from plugin-react's manifest during implementation.
- `tsdown.config.ts.ejs` (react-library variant only) switches from pure `JSON.stringify` rendering
  to emitting code: imports at top, the JSON-serializable merged options (including
  `overrides.tsdownConfig`) still stringified, and a `plugins` array appended:

  ```ts
  import {babel} from '@rolldown/plugin-babel';
  import {reactCompilerPreset} from '@vitejs/plugin-react';
  import {defineConfig} from 'tsdown';

  export default defineConfig({
    // ...stringified merged options...
    plugins: [babel({include: /\.[jt]sx?$/, babelConfig: reactCompilerPreset()})],
  });
  ```

  The `library` template's `tsdown.config.ts.ejs` stays pure JSON. No opt-out flag; `ui` is the
  only react-library consumer.
- `vite.config.ts.ejs` (react-library) gets the same babel plugin before `tailwindcss()`. This
  covers vitest (tests exercise compiled components) and Storybook (`@storybook/react-vite` merges
  the project vite config; project plugins run before the framework's react plugin, the required
  order). Verify ordering empirically with `storybook build`.
- Compiler constraint honored: the babel plugin sees original `.tsx` source before any JSX
  transform. Target defaults to React 19, matching `ui`'s peer range, so no extra runtime package.
- Proof of compilation: `ui/build/**/*.js` contains `react/compiler-runtime` imports and `_c(`
  memo-cache calls.

## Section 3: lint re-enable, violation fixes, changesets, verification

- In `packages/eslint-config/source/rules/react-hooks.ts`, uncomment the compiler-rule block with
  the severities as written and drop the TODO comment. Deduplicate renamed rules
  (`rules-of-hooks`/`hooks`, `exhaustive-deps`/`exhaustive-effect-dependencies`) against what
  `eslint-plugin-react-hooks@7.1.1` actually ships; `tools/check-rules` is the arbiter. No version
  bumps.
- Run lint across the workspace, collect violations, fix one at a time with individual approval.
- Changesets: keep the two existing ones from `Switch to Tsdown`; add minor for `eslint-config`,
  a second minor for `carson-templates` (compiler in react-library template) and minor for `ui`.
  Patch changesets for `cli`/`carson` only if a fix changes behavior.
- Verification: `npm test` green, `git status --porcelain` empty afterward,
  `npx changeset status --since=origin/development` passes, compiled-output smoke check from
  Section 2. carson-templates smoke tests stay with CI.
- Force-push with `--force-with-lease`, open the PR against `development`, keep the backup ref
  until merge.

## Non-goals

- No native Rust compiler wiring (blocked upstream; future PR when Rolldown ships it).
- No compiler for `carson` and `cli` builds.
- No changes to the `library` template's build config beyond what `Switch to Tsdown` already did.
