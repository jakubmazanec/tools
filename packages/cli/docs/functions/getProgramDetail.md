[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Function: getProgramDetail()

> **getProgramDetail**(`packageJson`): [`ProgramDetail`](../type-aliases/ProgramDetail.md)

Creates detailed information about a {@lincode Program}.

## Parameters

• **packageJson**

• **packageJson.author?**: `string` \| `object`

• **packageJson.bin?**: `string` \| `Record`\<`string`, `string`\>

• **packageJson.browser?**: `string` \| `Record`\<`string`, `string` \| `false`\>

• **packageJson.bugs?**: `string` \| `object`

• **packageJson.bundledDependencies?**: `boolean` \| `string`[]

• **packageJson.bundleDependencies?**: `boolean` \| `string`[]

• **packageJson.config?**: `Record`\<`string`, `unknown`\>

• **packageJson.contributors?**: (`string` \| `object`)[]

• **packageJson.cpu?**: `string`[]

• **packageJson.dependencies?**: `Record`\<`string`, `string`\>

• **packageJson.description?**: `string`

• **packageJson.devDependencies?**: `Record`\<`string`, `string`\>

• **packageJson.directories?**

• **packageJson.directories.bin?**: `string`

• **packageJson.directories.doc?**: `string`

• **packageJson.directories.example?**: `string`

• **packageJson.directories.lib?**: `string`

• **packageJson.directories.man?**: `string`

• **packageJson.directories.v?**: `string`

• **packageJson.engines?**: `object` & `Record`\<`string`, `string`\>

• **packageJson.esnext?**: `string` \| `Record`\<`string`, `string`\>

• **packageJson.exports?**: `PackageJsonExports`

• **packageJson.files?**: `string`[]

• **packageJson.flat?**: `boolean`

• **packageJson.funding?**: `string` \| `object` \| (`string` \| `object`)[]

• **packageJson.homepage?**: `string`

• **packageJson.keywords?**: `string`[]

• **packageJson.license?**: `string`

• **packageJson.main?**: `string`

• **packageJson.maintainers?**: (`string` \| `object`)[]

• **packageJson.man?**: `string` \| `string`[]

• **packageJson.module?**: `string`

• **packageJson.name?**: `string`

• **packageJson.optionalDependencies?**: `Record`\<`string`, `string`\>

• **packageJson.os?**: `string`[]

• **packageJson.overrides?**: `Record`\<`string`, `string` \| `Record`\<`string`, `string` \|
`Record`\<`string`, `unknown`\>\>\>

• **packageJson.packageManager?**: `string`

• **packageJson.peerDependencies?**: `Record`\<`string`, `string`\>

• **packageJson.peerDependenciesMeta?**: `Record`\<`string`, `object`\>

• **packageJson.preferGlobal?**: `boolean`

• **packageJson.private?**: `boolean`

• **packageJson.publishConfig?**: `object` & `Record`\<`string`, `unknown`\>

• **packageJson.repository?**: `string` \| `object`

• **packageJson.resolutions?**: `Record`\<`string`, `string`\>

• **packageJson.scripts?**: `Record`\<`string`, `string`\> & `object`

• **packageJson.sideEffects?**: `boolean` \| `string`[]

• **packageJson.source?**: `string`

• **packageJson.type?**: `"commonjs"` \| `"module"`

• **packageJson.types?**: `string`

• **packageJson.typings?**: `string`

• **packageJson.version?**: `string`

• **packageJson.workspaces?**: `string`[] \| `object`

## Returns

[`ProgramDetail`](../type-aliases/ProgramDetail.md)

## Defined in

[cli/source/program/getProgramDetail.ts:8](https://github.com/jakubmazanec/tools/blob/6ed2cc9bf798455a62cfc34def34fef748169fa2/packages/cli/source/program/getProgramDetail.ts#L8)
