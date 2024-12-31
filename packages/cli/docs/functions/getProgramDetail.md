[**@jakubmazanec/cli**](../README.md)

---

# Function: getProgramDetail()

> **getProgramDetail**(`packageJson`): [`ProgramDetail`](../type-aliases/ProgramDetail.md)

Creates detailed information about a {@lincode Program}.

## Parameters

### packageJson

#### author

`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \}

#### bin

`string` \| `Record`\<`string`, `string`\>

#### browser

`string` \| `Record`\<`string`, `string` \| `false`\>

#### bugs

`string` \| \{ `email`: `string`; `url`: `string`; \}

#### bundledDependencies

`boolean` \| `string`[]

#### bundleDependencies

`boolean` \| `string`[]

#### config

`Record`\<`string`, `unknown`\>

#### contributors

(`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \})[]

#### cpu

`string`[]

#### dependencies

`Record`\<`string`, `string`\>

#### description

`string`

#### devDependencies

`Record`\<`string`, `string`\>

#### directories

\{ `bin`: `string`; `doc`: `string`; `example`: `string`; `lib`: `string`; `man`: `string`; `v`:
`string`; \}

#### directories.bin

`string`

#### directories.doc

`string`

#### directories.example

`string`

#### directories.lib

`string`

#### directories.man

`string`

#### directories.v

`string`

#### engines

`object` & `Record`\<`string`, `string`\>

#### esnext

`string` \| `Record`\<`string`, `string`\>

#### exports

`PackageJsonExports`

#### files

`string`[]

#### flat

`boolean`

#### funding

`string` \| \{ `type`: `string`; `url`: `string`; \} \| (`string` \| \{ `type`: `string`; `url`:
`string`; \})[]

#### homepage

`string`

#### keywords

`string`[]

#### license

`string`

#### main

`string`

#### maintainers

(`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \})[]

#### man

`string` \| `string`[]

#### module

`string`

#### name

`string`

#### optionalDependencies

`Record`\<`string`, `string`\>

#### os

`string`[]

#### overrides

`Record`\<`string`, `string` \| `Record`\<`string`, `string` \| `Record`\<`string`, `unknown`\>\>\>

#### packageManager

`string`

#### peerDependencies

`Record`\<`string`, `string`\>

#### peerDependenciesMeta

`Record`\<`string`, \{ `optional`: `boolean`; \}\>

#### preferGlobal

`boolean`

#### private

`boolean`

#### publishConfig

`object` & `Record`\<`string`, `unknown`\>

#### repository

`string` \| \{ `directory`: `string`; `type`: `string`; `url`: `string`; \}

#### resolutions

`Record`\<`string`, `string`\>

#### scripts

`Record`\<`string`, `string`\> & `object`

#### sideEffects

`boolean` \| `string`[]

#### source

`string`

#### type

`"commonjs"` \| `"module"`

#### types

`string`

#### typings

`string`

#### version

`string`

#### workspaces

`string`[] \| \{ `nohoist`: `string`[]; `packages`: `string`[]; \}

## Returns

[`ProgramDetail`](../type-aliases/ProgramDetail.md)

## Defined in

[cli/source/program/getProgramDetail.ts:8](https://github.com/jakubmazanec/tools/blob/077fa4993ebe623b1c463499cc41912353ae6eb1/packages/cli/source/program/getProgramDetail.ts#L8)
