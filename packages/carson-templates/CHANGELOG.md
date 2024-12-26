# @jakubmazanec/carson-templates

## 3.2.0

### Minor Changes

- [#223](https://github.com/jakubmazanec/tools/pull/223)
  [`3137813`](https://github.com/jakubmazanec/tools/commit/3137813ef46c72d3c081751f960a2aa2c61ad567)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates GitHub workflow in the `workspace`
  template: when Renovate bot bumps a dependency that is this package, workflow step that creates a
  changeset for this update now instead creates a changeset for all projects in the workspace that
  use Carson.

## 3.1.3

### Patch Changes

- [#221](https://github.com/jakubmazanec/tools/pull/221)
  [`82ef42b`](https://github.com/jakubmazanec/tools/commit/82ef42ba5805b12f2697827df034592d5c73bd64)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes automatic changset generation in GitHub
  worksflos in the `workspace` template.

## 3.1.2

### Patch Changes

- [#217](https://github.com/jakubmazanec/tools/pull/217)
  [`4809b04`](https://github.com/jakubmazanec/tools/commit/4809b04453aafb35a917917e0b4964a9ec0cd132)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes build tasks in all templates so they
  use correct Node.js version as a target.

- [#217](https://github.com/jakubmazanec/tools/pull/217)
  [`4809b04`](https://github.com/jakubmazanec/tools/commit/4809b04453aafb35a917917e0b4964a9ec0cd132)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates all templates to support
  `@jakubmazanec/eslint-config` v4.

- [#217](https://github.com/jakubmazanec/tools/pull/217)
  [`4809b04`](https://github.com/jakubmazanec/tools/commit/4809b04453aafb35a917917e0b4964a9ec0cd132)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes build task so it uses correct Node.js
  version as a target.

## 3.1.1

### Patch Changes

- [#210](https://github.com/jakubmazanec/tools/pull/210)
  [`043f017`](https://github.com/jakubmazanec/tools/commit/043f017b24789eba8a7eb285e0e1042ac4eaaeea)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes GitHub workflows in the `workspace`
  template, so the correct Node.js version is used.

## 3.1.0

### Minor Changes

- [`eb8c228`](https://github.com/jakubmazanec/tools/commit/eb8c22844f0a0aa0874efeab93afc2bd96c269e6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates all templates to support ESLint v9.

### Patch Changes

- [`eb8c228`](https://github.com/jakubmazanec/tools/commit/eb8c22844f0a0aa0874efeab93afc2bd96c269e6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Smoke tests for the templates were fixed so
  updating ESLint doesn't break them.

- [#201](https://github.com/jakubmazanec/tools/pull/201)
  [`96ebbfd`](https://github.com/jakubmazanec/tools/commit/96ebbfdd53c8b44ed3d509e67e63015602fa8f5f)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@vitest/coverage-v8` updated to
  version `^2.1.5`. Dependency `vitest` updated to version `^2.1.5`.

- [`eb8c228`](https://github.com/jakubmazanec/tools/commit/eb8c22844f0a0aa0874efeab93afc2bd96c269e6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes `.prettierignore` in the
  `projects/react-library` template.

- [`eb8c228`](https://github.com/jakubmazanec/tools/commit/eb8c22844f0a0aa0874efeab93afc2bd96c269e6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates ESLint and ESLint config.

- [#203](https://github.com/jakubmazanec/tools/pull/203)
  [`3a1f239`](https://github.com/jakubmazanec/tools/commit/3a1f2398168b81501d72c6169a5adbcbfcd1c2ee)
  ([@renovate](https://github.com/apps/renovate)) – Updates `@chromatic-com/storybook` to v3 in all
  templates.

- [#204](https://github.com/jakubmazanec/tools/pull/204)
  [`04f3355`](https://github.com/jakubmazanec/tools/commit/04f3355792418e79f590195e4bc821931ccc6243)
  ([@renovate](https://github.com/apps/renovate)) – Updates `@testing-library/react` to v16 in all
  templates.

- [#206](https://github.com/jakubmazanec/tools/pull/206)
  [`2916304`](https://github.com/jakubmazanec/tools/commit/29163046acd1da0224b08fd05ca40f385e9ab4e5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes ESLint config in the
  `projects/remix-app` template.

## 3.0.0

### Major Changes

- [#158](https://github.com/jakubmazanec/tools/pull/158)
  [`0b33ead`](https://github.com/jakubmazanec/tools/commit/0b33eadeffe00f356bfd0bb677cdc0daabb6f4e5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – BREAKING: In all templates, Node.js version
  was updated to `^22.11.0`; related dependencies were also updated. In the template files, Node.js
  and Npm versions are now handled similarly to other dependencies versions.

### Minor Changes

- [#152](https://github.com/jakubmazanec/tools/pull/152)
  [`ff982fb`](https://github.com/jakubmazanec/tools/commit/ff982fbbc1a4d22edeaae8b283ad7d8de4b15bd8)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Turborepo config in the `workspace`
  template to support Turborepo v2.

- [#132](https://github.com/jakubmazanec/tools/pull/132)
  [`bb20df5`](https://github.com/jakubmazanec/tools/commit/bb20df5276ddb119762948adc2cda520aef09f0f)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds loader for `*.woff2` files in the
  `source` directory to Esbuild config in the `projects/react-library` template.

- [#132](https://github.com/jakubmazanec/tools/pull/132)
  [`bb20df5`](https://github.com/jakubmazanec/tools/commit/bb20df5276ddb119762948adc2cda520aef09f0f)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Allow specifying custom Storybook config
  (using `overrides.storybookConfig` project option) in the `projects/react-library` template.

### Patch Changes

- [#171](https://github.com/jakubmazanec/tools/pull/171)
  [`feb68c3`](https://github.com/jakubmazanec/tools/commit/feb68c30671e0ebe2b2b25b0c464dec0e603a2ec)
  ([@renovate](https://github.com/apps/renovate)) – Updates `del-cli` to v6 in all templates.

- [#165](https://github.com/jakubmazanec/tools/pull/165)
  [`8a00a02`](https://github.com/jakubmazanec/tools/commit/8a00a029626e2250a17448b730b113019e58a527)
  ([@renovate](https://github.com/apps/renovate)) – Updates Vitest to v2 in all templates.

- [#172](https://github.com/jakubmazanec/tools/pull/172)
  [`b02a3d5`](https://github.com/jakubmazanec/tools/commit/b02a3d57ad36c5a89a2698fd5131ece7b1f98fd1)
  ([@renovate](https://github.com/apps/renovate)) – Updates `happy-dom` to v15 in all templates.

- [#170](https://github.com/jakubmazanec/tools/pull/170)
  [`7a50642`](https://github.com/jakubmazanec/tools/commit/7a506427e9893f0502790a22b55bad77ca5b08ce)
  ([@renovate](https://github.com/apps/renovate)) – Updates `concurrently` to v9 in all templates.

- [#188](https://github.com/jakubmazanec/tools/pull/188)
  [`5daeced`](https://github.com/jakubmazanec/tools/commit/5daecedbee7aab62bb81b552ba5ba857c9975923)
  ([@renovate](https://github.com/apps/renovate)) – Updates `esbuild` to v0.24 in all templates.

- [#160](https://github.com/jakubmazanec/tools/pull/160)
  [`c2d3450`](https://github.com/jakubmazanec/tools/commit/c2d345092d3f08658d9e8ce9935b5455c38ecbab)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@types/lodash` updated to version
  `^4.17.13`.

- [#176](https://github.com/jakubmazanec/tools/pull/176)
  [`e275f89`](https://github.com/jakubmazanec/tools/commit/e275f89d674f462cceb1fa3c8e470b776655fae1)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier` updated to version
  `^3.3.3`.

- [#171](https://github.com/jakubmazanec/tools/pull/171)
  [`feb68c3`](https://github.com/jakubmazanec/tools/commit/feb68c30671e0ebe2b2b25b0c464dec0e603a2ec)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `del-cli` updated to version
  `^6.0.0`.

- [#188](https://github.com/jakubmazanec/tools/pull/188)
  [`5daeced`](https://github.com/jakubmazanec/tools/commit/5daecedbee7aab62bb81b552ba5ba857c9975923)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version
  `^0.24.0`.

- [#161](https://github.com/jakubmazanec/tools/pull/161)
  [`4ad59c6`](https://github.com/jakubmazanec/tools/commit/4ad59c6b8eb7868ab1902d25f4c1aae28b28a6e4)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typescript` updated to version
  `^5.6.3`.

- [#177](https://github.com/jakubmazanec/tools/pull/177)
  [`05074a1`](https://github.com/jakubmazanec/tools/commit/05074a1dedd887672f015df129961cd35c75acfe)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated
  to version `^2.5.3`.

- [#165](https://github.com/jakubmazanec/tools/pull/165)
  [`8a00a02`](https://github.com/jakubmazanec/tools/commit/8a00a029626e2250a17448b730b113019e58a527)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@vitest/coverage-v8` updated to
  version `^2.1.4`. Dependency `vitest` updated to version `^2.1.4`.

- [#180](https://github.com/jakubmazanec/tools/pull/180)
  [`bc28df8`](https://github.com/jakubmazanec/tools/commit/bc28df80facf79094d9dca2f1be9f9a4416d5553)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `semver` updated to version `^7.6.3`.

- [#158](https://github.com/jakubmazanec/tools/pull/158)
  [`0b33ead`](https://github.com/jakubmazanec/tools/commit/0b33eadeffe00f356bfd0bb677cdc0daabb6f4e5)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Dependency `@types/node` updated to version
  `^22.9.0`. Dependency `node` updated to version `^22.11.0`.

- [#182](https://github.com/jakubmazanec/tools/pull/182)
  [`6907506`](https://github.com/jakubmazanec/tools/commit/6907506c1e2f311818afa2d0f2eaaf3831027ce2)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `execa` updated to version `^9.5.1`.

- [#162](https://github.com/jakubmazanec/tools/pull/162)
  [`6f942d9`](https://github.com/jakubmazanec/tools/commit/6f942d99ee63da4b67f1c91273d73e29f2f52a54)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc` updated to version
  `^0.26.11`.

- [#163](https://github.com/jakubmazanec/tools/pull/163)
  [`1c4f047`](https://github.com/jakubmazanec/tools/commit/1c4f0471e4ca7ee64c14124101a8ac795175e9bf)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc-plugin-markdown` updated to
  version `^4.2.10`.

- [#132](https://github.com/jakubmazanec/tools/pull/132)
  [`bb20df5`](https://github.com/jakubmazanec/tools/commit/bb20df5276ddb119762948adc2cda520aef09f0f)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing plugin
  `prettier-plugin-tailwindcss` to Prettier config in the `projects/react-library` template.

## 2.5.0

### Minor Changes

- [#156](https://github.com/jakubmazanec/js-tools/pull/156)
  [`0a7ca64`](https://github.com/jakubmazanec/js-tools/commit/0a7ca643260718f11723fa4df4f144d2d5a8a885)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Allow specifying custom Tailwind config in
  the `projects/remix-app` template.

- [#156](https://github.com/jakubmazanec/js-tools/pull/156)
  [`0a7ca64`](https://github.com/jakubmazanec/js-tools/commit/0a7ca643260718f11723fa4df4f144d2d5a8a885)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds support for deploying projects with
  Storybook to Chromatic to the `workspace` template.

### Patch Changes

- [#156](https://github.com/jakubmazanec/js-tools/pull/156)
  [`0a7ca64`](https://github.com/jakubmazanec/js-tools/commit/0a7ca643260718f11723fa4df4f144d2d5a8a885)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes dependencies and TypeScript, Storybook
  and Tailwind configs in the `projects/react-library` template.

- [#156](https://github.com/jakubmazanec/js-tools/pull/156)
  [`0a7ca64`](https://github.com/jakubmazanec/js-tools/commit/0a7ca643260718f11723fa4df4f144d2d5a8a885)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes missing Storybook build output in the
  `.gitignore` file in the `workspace` template.

- [#156](https://github.com/jakubmazanec/js-tools/pull/156)
  [`0a7ca64`](https://github.com/jakubmazanec/js-tools/commit/0a7ca643260718f11723fa4df4f144d2d5a8a885)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes how are EdgeDB branch names generated
  to align it with the official GitHub integration.

## 2.4.0

### Minor Changes

- [#153](https://github.com/jakubmazanec/js-tools/pull/153)
  [`51bfc5b`](https://github.com/jakubmazanec/js-tools/commit/51bfc5b913a7a7ef21d8d702a0d87d72983e112a)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates `projects/remix-app` and `workspace`
  templates to support specifying an app URL (available to the apps as `VITE_APP_URL` env variable
  during builds), using new project config option `deployment.appUrl` for production URL; URLs for
  non-production environments are generated using the `deployment.appName` project config option.

## 2.3.0

### Minor Changes

- [#135](https://github.com/jakubmazanec/js-tools/pull/135)
  [`9df49e8`](https://github.com/jakubmazanec/js-tools/commit/9df49e8fef50484c2dcb8326d746a9ee861e6416)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds support for EdgeDB database to the
  `projects/remix-app` and `workspace` templates. New config option `deployment.dbInstance` is used
  for specifying which EdgeDB cloud instance to use.

### Patch Changes

- [#141](https://github.com/jakubmazanec/js-tools/pull/141)
  [`2ddad44`](https://github.com/jakubmazanec/js-tools/commit/2ddad444c276190ccbcfe6949a3f4fe5cccbce71)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version
  `^0.21.4`.

- [#146](https://github.com/jakubmazanec/js-tools/pull/146)
  [`262bfb6`](https://github.com/jakubmazanec/js-tools/commit/262bfb6514367ce13e611e315fbd377df600d1c6)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `execa` updated to version `^9.1.0`.

- [#139](https://github.com/jakubmazanec/js-tools/pull/139)
  [`0cfa1b5`](https://github.com/jakubmazanec/js-tools/commit/0cfa1b598072239bda295c1dc78791b67b8311d4)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `semver` updated to version `^7.6.2`.

- [#147](https://github.com/jakubmazanec/js-tools/pull/147)
  [`d8fb2f4`](https://github.com/jakubmazanec/js-tools/commit/d8fb2f4f9576baa170e480eea0b247af3afdcd86)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc-plugin-markdown` updated to
  version `^4.0.3`.

- [#142](https://github.com/jakubmazanec/js-tools/pull/142)
  [`72449a9`](https://github.com/jakubmazanec/js-tools/commit/72449a9aec9e912cdd5d5eb73053ac9e1a876641)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typescript` updated to version
  `^5.4.5`.

- [#149](https://github.com/jakubmazanec/js-tools/pull/149)
  [`7be96c9`](https://github.com/jakubmazanec/js-tools/commit/7be96c9bc335915647cfe729050b17fe2580309a)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated
  to version `^2.5.0`.

- [#148](https://github.com/jakubmazanec/js-tools/pull/148)
  [`9580d5f`](https://github.com/jakubmazanec/js-tools/commit/9580d5f68de35b95719fd49b679b2d5576d49582)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier` updated to version
  `^3.3.0`.

- [#127](https://github.com/jakubmazanec/js-tools/pull/127)
  [`82da961`](https://github.com/jakubmazanec/js-tools/commit/82da961e3b4406bfbcad38887892e5d63d6bedff)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc` updated to version
  `^0.25.13`.

## 2.2.1

### Patch Changes

- [#136](https://github.com/jakubmazanec/js-tools/pull/136)
  [`4ba566f`](https://github.com/jakubmazanec/js-tools/commit/4ba566f84154f0a8d3a365513ac9776c860637f3)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes Dockerfile in the `project/remix-app`
  template.

- [#136](https://github.com/jakubmazanec/js-tools/pull/136)
  [`4ba566f`](https://github.com/jakubmazanec/js-tools/commit/4ba566f84154f0a8d3a365513ac9776c860637f3)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes release GitHub workflow in the
  `workspace` template; after the release, changed Carson snapshots are also commited.

## 2.2.0

### Minor Changes

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds a new template `projects/react-library`,
  with integrated React and Storybook support.

### Patch Changes

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Removes invalid options from Carson template
  configs, which were not used for anything.

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes missing warning notices in some
  generated files.

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes Turborepo caching settings in the
  `workspace` template.

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes hard-coded package names in the
  `workspace` template.

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes test coverage settings.

- [#133](https://github.com/jakubmazanec/js-tools/pull/133)
  [`cdb028c`](https://github.com/jakubmazanec/js-tools/commit/cdb028c85fdc4057023cd856e1afb957019a981d)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes test coverage settings in
  `projects/carson-templates`, `projects/changesets-changelog`, `projects/library` and
  `projects/remix-app`.

## 2.1.1

### Patch Changes

- [#130](https://github.com/jakubmazanec/js-tools/pull/130)
  [`71dc301`](https://github.com/jakubmazanec/js-tools/commit/71dc301dbe16ba90d1a25317ff9f1bf59fafc3f1)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes project deployments.

## 2.1.0

### Minor Changes

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates possible project paths in the
  `workspace` template so the projects can be located also in `apps` directory, not just `packages`.

### Patch Changes

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fix wrong `@testing-library/jest-dom` version
  used in the templates.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect command for the test task in
  the `projects/remix-app` template.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Removes unnecessary
  `styfle/cancel-workflow-action` steps from GitHub workflow templates.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes `.gitignore` file template in the
  `workspace` template.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes handling of some specific packages in
  the `workspace` template (e.g. package with an ESLint config or a changelog package) when their
  source is located in the same workspace.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes project deployments.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `lodash` and a changelog package
  dependencies to the `projects/remix-app` and `workspace` template respectively.

- [#128](https://github.com/jakubmazanec/js-tools/pull/128)
  [`8426765`](https://github.com/jakubmazanec/js-tools/commit/8426765994c58362b4a05ae81c01ed6d6abe5f86)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes how the command for the build task is
  generated in the `workspace` package.

## 2.0.1

### Patch Changes

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes various bugs in Vitest config in the
  `projects/remix-app` template.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `.editorconfig` file.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing packages Vitest needs for React
  component testing to the `projects/remix-app` template.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing ESLint config development
  dependency.

- [#122](https://github.com/jakubmazanec/js-tools/pull/122)
  [`6495b91`](https://github.com/jakubmazanec/js-tools/commit/6495b91cdb5bb40f4daadd53658009bca8576be8)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@vitest/coverage-v8` updated to
  version `^1.3.1`. Dependency `vitest` updated to version `^1.3.1`.

- [#120](https://github.com/jakubmazanec/js-tools/pull/120)
  [`c0313a2`](https://github.com/jakubmazanec/js-tools/commit/c0313a201053b456a2cef6e13441c03e40e2f8ae)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated
  to version `^2.4.12`.

- [#103](https://github.com/jakubmazanec/js-tools/pull/103)
  [`3c1614b`](https://github.com/jakubmazanec/js-tools/commit/3c1614bb0796a89646061129496c4a40071093b6)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `semver` updated to version `^7.6.0`.

- [#119](https://github.com/jakubmazanec/js-tools/pull/119)
  [`c853783`](https://github.com/jakubmazanec/js-tools/commit/c853783261283025a6ae94f06552fe6b471f180d)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version
  `^0.20.1`.

- [#114](https://github.com/jakubmazanec/js-tools/pull/114)
  [`14a92ae`](https://github.com/jakubmazanec/js-tools/commit/14a92ae46c377e47c314d2ffae935255223571ab)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc` updated to version
  `^0.25.10`.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing ESLint config development
  dependency to the project templates.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Remix config in the
  `projects/remix-app` template, since the Vite plugin is no longer unstable.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing linting task to the
  `projects/remix-app` template.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect port settings in the
  `projects/remix-app` template.

- [#115](https://github.com/jakubmazanec/js-tools/pull/115)
  [`abaebfa`](https://github.com/jakubmazanec/js-tools/commit/abaebfa7bf38639f85ad0466387499669cf8e803)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `.editorconfig` file template to
  all project templates.

## 2.0.0

### Major Changes

- [#44](https://github.com/jakubmazanec/js-tools/pull/44)
  [`01fc14d`](https://github.com/jakubmazanec/js-tools/commit/01fc14de26bcca31e45c8a98aad8edd042575775)
  ([@renovate](https://github.com/apps/renovate)) – BREAKING: Dependency `node` updated to version
  `^20.8.0`. Dependency `@types/node` updated to version `^20.8.5`.

- [#44](https://github.com/jakubmazanec/js-tools/pull/44)
  [`01fc14d`](https://github.com/jakubmazanec/js-tools/commit/01fc14de26bcca31e45c8a98aad8edd042575775)
  ([@renovate](https://github.com/apps/renovate)) – BREAKING: In all templates, Node.js version was
  updated to `^20.8.0`; related dependencies were also updated.

### Minor Changes

- [`1e0b923`](https://github.com/jakubmazanec/js-tools/commit/1e0b923274d28754c179ee56ba430440c3542800)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds support for Renovate bot to the GitHub
  workflows in `workspace` template.

- [`19d381b`](https://github.com/jakubmazanec/js-tools/commit/19d381bacd9daf2d7c347099fd69f9288da3657e)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds support for Npm provenance to the GitHub
  workflows in `workspace` template.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – GitHub workflows were updated: 1) instead of
  releasing from a feature branch, release is now from a pull request commit, 2) actions use Node.js
  v20, 3) concurrency is now properly specified, 4) release is fixed so the commit with updated
  versions and changelogs isn't ammended.

- [#59](https://github.com/jakubmazanec/js-tools/pull/59)
  [`c307a9d`](https://github.com/jakubmazanec/js-tools/commit/c307a9dfc2c53a237530a4c7ccccc752ac848cf8)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Allow users to have higher dependency
  versions of dependencies managed by a Carson template.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Generated files (if their format supports
  comments) now contain a warning notice, so the user is informed not to make changes.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – ESLint ignore patterns were updated.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Add ESLint config to each project template.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Common development dependencies used by
  projects are no longer specified in the workspace `package.json` file, but in the projects that
  actually use them.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Add Prettier config to each project template.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Use Esbuild instead of SWC for building
  projects.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Use Vitest instead of `ts-jest` for testing
  projects.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Project structure was modified: builds are
  always in directory `build`, and source files are expected to be in directory `source`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – TypeScript configs in project templates no
  longer extend workspace TypeScript config.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Add Prettier config (previously it was
  assumed some Prettier config is present in the workspace root).

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – In `workspace` template, field `name` in
  `package.json` now has default value taken from the workspace Git repository URL or filesystem
  path.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Add new `project/remix-app` template, for
  creating apps using Remix.js framework.

### Patch Changes

- [#58](https://github.com/jakubmazanec/js-tools/pull/58)
  [`833790c`](https://github.com/jakubmazanec/js-tools/commit/833790c3cfaa18622f02aafe87eecb2e904f96e6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes missing `plugins` option in Prettier
  config.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Source code was better modularized.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `CONTRIBUTING.md` file template
  to all Carson templates.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `README.md` file template to the
  `project/library` and `workspace` templates.

- [#60](https://github.com/jakubmazanec/js-tools/pull/60)
  [`891cbe6`](https://github.com/jakubmazanec/js-tools/commit/891cbe6073aa9c0a40dc54e2cd2687fb9b20ac64)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Npm scripts in all project templates were
  fixed; `build`, `document` and `test` tasks now clean their output directories beforehand.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds missing `CONTRIBUTING.md` file.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Files generated by Carson now contain a
  warning notice about the fact.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Add ESLint config (previously it was assumed
  some ESLint config is present in the workspace root).

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – All used development dependencies are now
  specified in the `package.json`; previously it was assumed that tools like ESLint, `ts-node`, etc.
  are specified in the workspace `package.json`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Use Esbuild instead of SWC for building.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Use Vitest instead of `ts-jest` for testing.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Project structure was modified: build is in
  directory `build`, and source files are expected to be in directory `source`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – TypeScript configs no longer extend workspace
  TypeScript config with shared compiler options.

- [#74](https://github.com/jakubmazanec/js-tools/pull/74)
  [`4ae872d`](https://github.com/jakubmazanec/js-tools/commit/4ae872dc8a9e60f0a5ea74c6fdc98491697f65af)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `del-cli` updated to version
  `^5.1.0`.

- [#90](https://github.com/jakubmazanec/js-tools/pull/90)
  [`b7897f2`](https://github.com/jakubmazanec/js-tools/commit/b7897f2f821a6b329f7fcb600ed18f62d918c8cf)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@vitest/coverage-v8` updated to
  version `^1.2.2`. Dependency `vitest` updated to version `^1.2.2`.

- [#80](https://github.com/jakubmazanec/js-tools/pull/80)
  [`d2b903c`](https://github.com/jakubmazanec/js-tools/commit/d2b903c7ac3c35829b3fc8f329e0569a88939a9a)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier` updated to version
  `^3.2.5`.

- [#56](https://github.com/jakubmazanec/js-tools/pull/56)
  [`219a48f`](https://github.com/jakubmazanec/js-tools/commit/219a48f738e4d58f95fbbb53e66eb3d65458f29d)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typescript` updated to version
  `^5.3.3`.

- [#76](https://github.com/jakubmazanec/js-tools/pull/76)
  [`80eadab`](https://github.com/jakubmazanec/js-tools/commit/80eadab7fd48b6d8b9e2c5d018bc1b3e3dc7eb3e)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `fast-glob` updated to version
  `^3.3.2`.

- [#83](https://github.com/jakubmazanec/js-tools/pull/83)
  [`290a85d`](https://github.com/jakubmazanec/js-tools/commit/290a85dde632949b2adf6a942323ffb3cab9fe5d)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `semver` updated to version `^7.5.4`.
  Dependency `@types/semver` updated to version `^7.5.6`.

- [#91](https://github.com/jakubmazanec/js-tools/pull/91)
  [`6282aae`](https://github.com/jakubmazanec/js-tools/commit/6282aae60186472c75b77cbe6e9c50f8d5f128f7)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `esbuild` updated to version
  `^0.20.0`.

- [#87](https://github.com/jakubmazanec/js-tools/pull/87)
  [`f2174e5`](https://github.com/jakubmazanec/js-tools/commit/f2174e50534f27088616f2533e5e3b8309e9d9c8)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc-plugin-markdown` updated to
  version `^3.17.1`.

- [#77](https://github.com/jakubmazanec/js-tools/pull/77)
  [`50467cd`](https://github.com/jakubmazanec/js-tools/commit/50467cd33ce8a3feae3d39c4712847c1a6f27606)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `fs-extra` updated to version
  `^10.1.0`.

- [#81](https://github.com/jakubmazanec/js-tools/pull/81)
  [`9151367`](https://github.com/jakubmazanec/js-tools/commit/91513674bac7bb66c69c7b37a8f48604935acf5b)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `prettier-plugin-packagejson` updated
  to version `^2.4.10`.

- [#66](https://github.com/jakubmazanec/js-tools/pull/66)
  [`fc1595b`](https://github.com/jakubmazanec/js-tools/commit/fc1595bbf4c68d5a8ded384b3b78ccaeff8699fa)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@types/lodash` updated to version
  `^4.14.202`.

- [#94](https://github.com/jakubmazanec/js-tools/pull/94)
  [`13f9f17`](https://github.com/jakubmazanec/js-tools/commit/13f9f170e6c5a849919115ef206c487c60e26e40)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `@types/fs-extra` updated to version
  `^11.0.4`. Dependency `fs-extra` updated to version `^11.2.0`.

- [#86](https://github.com/jakubmazanec/js-tools/pull/86)
  [`9a97971`](https://github.com/jakubmazanec/js-tools/commit/9a97971f6e6fc7f245f33df3eef8feacd06cd9c0)
  ([@renovate](https://github.com/apps/renovate)) – Dependency `typedoc` updated to version
  `^0.25.7`.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Wording in license file was fixed.

- [#60](https://github.com/jakubmazanec/js-tools/pull/60)
  [`891cbe6`](https://github.com/jakubmazanec/js-tools/commit/891cbe6073aa9c0a40dc54e2cd2687fb9b20ac64)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Npm scripts were fixed; `build`, `document`
  and `test` tasks now clean their output directories beforehand.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Source code was reformatted because of
  updated ESLint and Prettier configs.

- [#61](https://github.com/jakubmazanec/js-tools/pull/61)
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fix wrong license in `package.json` file
  template in the `project/library` template.

- Updated dependencies
  [[`507c9b9`](https://github.com/jakubmazanec/js-tools/commit/507c9b92241ab484f0727d0b681257d86408fe78),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`9a16bed`](https://github.com/jakubmazanec/js-tools/commit/9a16bed95c5dc4d5485781eedb356827b6ce5eaf),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`4ae872d`](https://github.com/jakubmazanec/js-tools/commit/4ae872dc8a9e60f0a5ea74c6fdc98491697f65af),
  [`b7897f2`](https://github.com/jakubmazanec/js-tools/commit/b7897f2f821a6b329f7fcb600ed18f62d918c8cf),
  [`acb29bf`](https://github.com/jakubmazanec/js-tools/commit/acb29bf8a4297226337ad0f7dc48aca32490ecf9),
  [`19dc0af`](https://github.com/jakubmazanec/js-tools/commit/19dc0af79e4d42b8e868aca9b450b16c9c8e4a12),
  [`d2b903c`](https://github.com/jakubmazanec/js-tools/commit/d2b903c7ac3c35829b3fc8f329e0569a88939a9a),
  [`00a2c38`](https://github.com/jakubmazanec/js-tools/commit/00a2c38ba0dbf49a4bdbcb87b86fac58f74ec658),
  [`219a48f`](https://github.com/jakubmazanec/js-tools/commit/219a48f738e4d58f95fbbb53e66eb3d65458f29d),
  [`80eadab`](https://github.com/jakubmazanec/js-tools/commit/80eadab7fd48b6d8b9e2c5d018bc1b3e3dc7eb3e),
  [`dd4dd26`](https://github.com/jakubmazanec/js-tools/commit/dd4dd2630714dc1e0782ed77e746a04434858921),
  [`89fbd2c`](https://github.com/jakubmazanec/js-tools/commit/89fbd2cdcc006588fb507e96d1589217134ee4ab),
  [`f865764`](https://github.com/jakubmazanec/js-tools/commit/f8657640f1ed20fd6a631e11083a481dec70a317),
  [`7350edb`](https://github.com/jakubmazanec/js-tools/commit/7350edb295ca7686ce365b0ef4947ba7bfed8f74),
  [`290a85d`](https://github.com/jakubmazanec/js-tools/commit/290a85dde632949b2adf6a942323ffb3cab9fe5d),
  [`3b3672d`](https://github.com/jakubmazanec/js-tools/commit/3b3672d2bd1c28329cc3e5a38eed80ba9dde215f),
  [`8d3a13d`](https://github.com/jakubmazanec/js-tools/commit/8d3a13d1958012fa6612fa300282c41f82b1729f),
  [`6282aae`](https://github.com/jakubmazanec/js-tools/commit/6282aae60186472c75b77cbe6e9c50f8d5f128f7),
  [`f2174e5`](https://github.com/jakubmazanec/js-tools/commit/f2174e50534f27088616f2533e5e3b8309e9d9c8),
  [`50467cd`](https://github.com/jakubmazanec/js-tools/commit/50467cd33ce8a3feae3d39c4712847c1a6f27606),
  [`9151367`](https://github.com/jakubmazanec/js-tools/commit/91513674bac7bb66c69c7b37a8f48604935acf5b),
  [`3d4131a`](https://github.com/jakubmazanec/js-tools/commit/3d4131ac735385083294cd267c7826f4a509ac49),
  [`01fc14d`](https://github.com/jakubmazanec/js-tools/commit/01fc14de26bcca31e45c8a98aad8edd042575775),
  [`fc1595b`](https://github.com/jakubmazanec/js-tools/commit/fc1595bbf4c68d5a8ded384b3b78ccaeff8699fa),
  [`a6e1a0e`](https://github.com/jakubmazanec/js-tools/commit/a6e1a0efcb2500a0f88dc1c7ab53f14186b1122d),
  [`4e82e60`](https://github.com/jakubmazanec/js-tools/commit/4e82e605f521c08fe3be1c7cb92e620b2cba531d),
  [`7f856bb`](https://github.com/jakubmazanec/js-tools/commit/7f856bb7349c79bff0046b3a2a67f0305a6cfebb),
  [`13f9f17`](https://github.com/jakubmazanec/js-tools/commit/13f9f170e6c5a849919115ef206c487c60e26e40),
  [`9a97971`](https://github.com/jakubmazanec/js-tools/commit/9a97971f6e6fc7f245f33df3eef8feacd06cd9c0),
  [`891cbe6`](https://github.com/jakubmazanec/js-tools/commit/891cbe6073aa9c0a40dc54e2cd2687fb9b20ac64),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c),
  [`e47deb4`](https://github.com/jakubmazanec/js-tools/commit/e47deb41fca462043e8bc1fcd77310e5add77dd9),
  [`f865764`](https://github.com/jakubmazanec/js-tools/commit/f8657640f1ed20fd6a631e11083a481dec70a317),
  [`015aead`](https://github.com/jakubmazanec/js-tools/commit/015aead928cf2aecf5bdf1380566961f895abb1c)]:
  - @jakubmazanec/carson@1.0.0

## 1.0.0

### Patch Changes

- Updated dependencies
  [[`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448),
  [`26e3dc9`](https://github.com/jakubmazanec/js-tools/commit/26e3dc9e9589b46947cb7b3a017d0a41ab889448)]:
  - @jakubmazanec/carson@0.2.0

## 0.2.0

### Minor Changes

- [#25](https://github.com/jakubmazanec/js-tools/pull/25)
  [`07ff4d8`](https://github.com/jakubmazanec/js-tools/commit/07ff4d8977ad0416322558031e701e226b902301)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Adds smoke tests: each Carson template is
  used for creating a new workspace with new projects, which are then built.

### Patch Changes

- [`d5b3e0f`](https://github.com/jakubmazanec/js-tools/commit/d5b3e0fd94ee4d87e5c06a633b5db123b9d80866)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes definition of `develop` task in
  Turborepo config; the task now has dependency `^build`.

## 0.1.3

### Patch Changes

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes generated SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes incorrect SWC config.

- [#23](https://github.com/jakubmazanec/js-tools/pull/23)
  [`e71beb3`](https://github.com/jakubmazanec/js-tools/commit/e71beb333f6dddcdedbe3b284c8aeaed0d1d0f66)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates generated Prettier config.

## 0.1.2

### Patch Changes

- [#22](https://github.com/jakubmazanec/js-tools/pull/22)
  [`6c3a1f2`](https://github.com/jakubmazanec/js-tools/commit/6c3a1f2decb43f6b19b71d65f536ea59dab289a9)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` now generates
  `@jakubmazanec/carson` version based on what version this template package depends on.

- [#22](https://github.com/jakubmazanec/js-tools/pull/22)
  [`6c3a1f2`](https://github.com/jakubmazanec/js-tools/commit/6c3a1f2decb43f6b19b71d65f536ea59dab289a9)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` no longer adds
  `@jakubmazanec/carson` or `@jakubmazanec/carson-templates` to the workspace `package.json` if the
  workspace already contains them as a project.

## 0.1.1

### Patch Changes

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Updates Carson template.

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Template `workspace` now generates correct
  version of this template package.

- [#21](https://github.com/jakubmazanec/js-tools/pull/21)
  [`dbf0e41`](https://github.com/jakubmazanec/js-tools/commit/dbf0e4108dc43d9ec212c1f4ddea38b2e6d916d4)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Fixes syntax errors in templates.

## 0.1.0

### Minor Changes

- [#20](https://github.com/jakubmazanec/js-tools/pull/20)
  [`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)
  ([@jakubmazanec](https://github.com/jakubmazanec)) – Creates package with collection of Carson
  templates.

### Patch Changes

- Updated dependencies
  [[`d0b9b98`](https://github.com/jakubmazanec/js-tools/commit/d0b9b9880a28e795afce26e68597e5b3d5caafd6)]:
  - @jakubmazanec/carson@0.1.0
