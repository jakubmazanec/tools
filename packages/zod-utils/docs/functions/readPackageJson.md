[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readPackageJson()

> **readPackageJson**\<`O`\>(`path`, `options?`): `Promise`\<`O` _extends_ `undefined` ? \{
> `author?`: `string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \}; `bin?`:
> `string` \| `Record`\<`string`, `string`\>; `browser?`: `string` \| `Record`\<`string`, `string`
> \| `false`\>; `bugs?`: `string` \| \{ `email?`: `string`; `url?`: `string`; \};
> `bundledDependencies?`: `boolean` \| `string`[]; `bundleDependencies?`: `boolean` \| `string`[];
> `config?`: `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \| \{ `email?`: `string`;
> `name`: `string`; `url?`: `string`; \})[]; `cpu?`: `string`[]; `dependencies?`:
> `Record`\<`string`, `string`\>; `description?`: `string`; `devDependencies?`: `Record`\<`string`,
> `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`: `string`; `lib?`:
> `string`; `man?`: `string`; `v?`: `string`; \}; `engines?`: `object` & `Record`\<`string`,
> `string`\>; `esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`:
> `PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{
> `type?`: `string`; `url`: `string`; \} \| (`string` \| \{ `type?`: `string`; `url`: `string`;
> \})[]; `homepage?`: `string`; `keywords?`: `string`[]; `license?`: `string`; `main?`: `string`;
> `maintainers?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
> `man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`; `optionalDependencies?`:
> `Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`: `Record`\<`string`, `string` \|
> `Record`\<`string`, `string` \| `Record`\<`string`, `unknown`\>\>\>; `packageManager?`: `string`;
> `peerDependencies?`: `Record`\<`string`, `string`\>; `peerDependenciesMeta?`: `Record`\<`string`,
> \{ `optional`: `boolean`; \}\>; `preferGlobal?`: `boolean`; `private?`: `boolean`;
> `publishConfig?`: `object` & `Record`\<`string`, `unknown`\>; `repository?`: `string` \| \{
> `directory?`: `string`; `type`: `string`; `url`: `string`; \}; `resolutions?`: `Record`\<`string`,
> `string`\>; `scripts?`: `Record`\<`string`, `string`\> & `object`; `sideEffects?`: `boolean` \|
> `string`[]; `source?`: `string`; `type?`: `"commonjs"` \| `"module"`; `types?`: `string`;
> `typings?`: `string`; `version?`: `string`; `workspaces?`: `string`[] \| \{ `nohoist?`:
> `string`[]; `packages?`: `string`[]; \}; \} \| `ZodError`\<\{ `author?`: `string` \| \{ `email?`:
> `string`; `name`: `string`; `url?`: `string`; \}; `bin?`: `string` \| `Record`\<`string`,
> `string`\>; `browser?`: `string` \| `Record`\<`string`, `string` \| `false`\>; `bugs?`: `string`
> \| \{ `email?`: `string`; `url?`: `string`; \}; `bundledDependencies?`: `boolean` \| `string`[];
> `bundleDependencies?`: `boolean` \| `string`[]; `config?`: `Record`\<`string`, `unknown`\>;
> `contributors?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
> `cpu?`: `string`[]; `dependencies?`: `Record`\<`string`, `string`\>; `description?`: `string`;
> `devDependencies?`: `Record`\<`string`, `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`:
> `string`; `example?`: `string`; `lib?`: `string`; `man?`: `string`; `v?`: `string`; \};
> `engines?`: `object` & `Record`\<`string`, `string`\>; `esnext?`: `string` \| `Record`\<`string`,
> `string`\>; `exports?`: `PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`;
> `funding?`: `string` \| \{ `type?`: `string`; `url`: `string`; \} \| (`string` \| \{ `type?`:
> `string`; `url`: `string`; \})[]; `homepage?`: `string`; `keywords?`: `string`[]; `license?`:
> `string`; `main?`: `string`; `maintainers?`: (`string` \| \{ `email?`: `string`; `name`: `string`;
> `url?`: `string`; \})[]; `man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`;
> `optionalDependencies?`: `Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`:
> `Record`\<`string`, `string` \| `Record`\<`string`, `string` \| `Record`\<..., ...\>\>\>;
> `packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`, `string`\>;
> `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>; `preferGlobal?`:
> `boolean`; `private?`: `boolean`; `publishConfig?`: `object` & `Record`\<`string`, `unknown`\>;
> `repository?`: `string` \| \{ `directory?`: `string`; `type`: `string`; `url`: `string`; \};
> `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`: `Record`\<`string`, `string`\> &
> `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`: `string`; `type?`: `"commonjs"` \|
> `"module"`; `types?`: `string`; `typings?`: `string`; `version?`: `string`; `workspaces?`:
> `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \}\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, \{ `author?`: `string` \| \{ `email?`:
> `string`; `name`: `string`; `url?`: `string`; \}; `bin?`: `string` \| `Record`\<`string`,
> `string`\>; `browser?`: `string` \| `Record`\<`string`, `string` \| `false`\>; `bugs?`: `string`
> \| \{ `email?`: `string`; `url?`: `string`; \}; `bundledDependencies?`: `boolean` \| `string`[];
> `bundleDependencies?`: `boolean` \| `string`[]; `config?`: `Record`\<`string`, `unknown`\>;
> `contributors?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
> `cpu?`: `string`[]; `dependencies?`: `Record`\<`string`, `string`\>; `description?`: `string`;
> `devDependencies?`: `Record`\<`string`, `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`:
> `string`; `example?`: `string`; `lib?`: `string`; `man?`: `string`; `v?`: `string`; \};
> `engines?`: `object` & `Record`\<`string`, `string`\>; `esnext?`: `string` \| `Record`\<`string`,
> `string`\>; `exports?`: `PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`;
> `funding?`: `string` \| \{ `type?`: `string`; `url`: `string`; \} \| (`string` \| \{ `type?`:
> `string`; `url`: `string`; \})[]; `homepage?`: `string`; `keywords?`: `string`[]; `license?`:
> `string`; `main?`: `string`; `maintainers?`: (`string` \| \{ `email?`: `string`; `name`: `string`;
> `url?`: `string`; \})[]; `man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`;
> `optionalDependencies?`: `Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`:
> `Record`\<`string`, `string` \| `Record`\<`string`, `string` \| `Record`\<`string`,
> `unknown`\>\>\>; `packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`, `string`\>;
> `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>; `preferGlobal?`:
> `boolean`; `private?`: `boolean`; `publishConfig?`: `object` & `Record`\<`string`, `unknown`\>;
> `repository?`: `string` \| \{ `directory?`: `string`; `type`: `string`; `url`: `string`; \};
> `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`: `Record`\<`string`, `string`\> &
> `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`: `string`; `type?`: `"commonjs"` \|
> `"module"`; `types?`: `string`; `typings?`: `string`; `version?`: `string`; `workspaces?`:
> `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \}, \{ `author?`: `string`
> \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \}; `bin?`: `string` \|
> `Record`\<`string`, `string`\>; `browser?`: `string` \| `Record`\<`string`, `string` \| `false`\>;
> `bugs?`: `string` \| \{ `email?`: `string`; `url?`: `string`; \}; `bundledDependencies?`:
> `boolean` \| `string`[]; `bundleDependencies?`: `boolean` \| `string`[]; `config?`:
> `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \| \{ `email?`: `string`; `name`:
> `string`; `url?`: `string`; \})[]; `cpu?`: `string`[]; `dependencies?`: `Record`\<`string`,
> `string`\>; `description?`: `string`; `devDependencies?`: `Record`\<`string`, `string`\>;
> `directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`: `string`; `lib?`: `string`;
> `man?`: `string`; `v?`: `string`; \}; `engines?`: `object` & `Record`\<`string`, `string`\>;
> `esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`: `PackageJsonExports`; `files?`:
> `string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{ `type?`: `string`; `url`: `string`; \}
> \| (`string` \| \{ `type?`: `string`; `url`: `string`; \})[]; `homepage?`: `string`; `keywords?`:
> `string`[]; `license?`: `string`; `main?`: `string`; `maintainers?`: (`string` \| \{ `email?`:
> `string`; `name`: `string`; `url?`: `string`; \})[]; `man?`: `string` \| `string`[]; `module?`:
> `string`; `name?`: `string`; `optionalDependencies?`: `Record`\<`string`, `string`\>; `os?`:
> `string`[]; `overrides?`: `Record`\<`string`, `string` \| `Record`\<`string`, `string` \|
> `Record`\<..., ...\>\>\>; `packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`,
> `string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>;
> `preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`: `object` &
> `Record`\<`string`, `unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`; `type`:
> `string`; `url`: `string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`:
> `Record`\<`string`, `string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`:
> `string`; `type?`: `"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`;
> `version?`: `string`; `workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`:
> `string`[]; \}; \} \| `ZodError`\<\{ `author?`: `string` \| \{ `email?`: `string`; `name`:
> `string`; `url?`: `string`; \}; `bin?`: `string` \| `Record`\<`string`, `string`\>; `browser?`:
> `string` \| `Record`\<`string`, `string` \| `false`\>; `bugs?`: `string` \| \{ `email?`: `string`;
> `url?`: `string`; \}; `bundledDependencies?`: `boolean` \| `string`[]; `bundleDependencies?`:
> `boolean` \| `string`[]; `config?`: `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \|
> \{ `email?`: ... \| ...; `name`: `string`; `url?`: ... \| ...; \})[]; `cpu?`: `string`[];
> `dependencies?`: `Record`\<`string`, `string`\>; `description?`: `string`; `devDependencies?`:
> `Record`\<`string`, `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`:
> `string`; `lib?`: `string`; `man?`: `string`; `v?`: `string`; \}; `engines?`: `object` &
> `Record`\<`string`, `string`\>; `esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`:
> `PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{
> `type?`: `string`; `url`: `string`; \} \| (`string` \| \{ `type?`: ... \| ...; `url`: `string`;
> \})[]; `homepage?`: `string`; `keywords?`: `string`[]; `license?`: `string`; `main?`: `string`;
> `maintainers?`: (`string` \| \{ `email?`: ... \| ...; `name`: `string`; `url?`: ... \| ...; \})[];
> `man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`; `optionalDependencies?`:
> `Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`: `Record`\<`string`, `string` \|
> `Record`\<`string`, ... \| ...\>\>; `packageManager?`: `string`; `peerDependencies?`:
> `Record`\<`string`, `string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`:
> `boolean`; \}\>; `preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`: `object` &
> `Record`\<`string`, `unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`; `type`:
> `string`; `url`: `string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`:
> `Record`\<`string`, `string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`:
> `string`; `type?`: `"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`;
> `version?`: `string`; `workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`:
> `string`[]; \}; \}\>\>\>

Defined in:
[packages/zod-utils/source/utils/readPackageJson.ts:13](https://github.com/jakubmazanec/tools/blob/a079c38394d5df8b5048ba81c0c9138a6876bff6/packages/zod-utils/source/utils/readPackageJson.ts#L13)

## Type Parameters

### O

`O` _extends_ `undefined` \| [`ReadPackageJsonOptions`](../interfaces/ReadPackageJsonOptions.md) =
`undefined`

## Parameters

### path

`FileHandle` | `PathLike`

### options?

`O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? \{ `author?`: `string` \| \{ `email?`: `string`; `name`:
`string`; `url?`: `string`; \}; `bin?`: `string` \| `Record`\<`string`, `string`\>; `browser?`:
`string` \| `Record`\<`string`, `string` \| `false`\>; `bugs?`: `string` \| \{ `email?`: `string`;
`url?`: `string`; \}; `bundledDependencies?`: `boolean` \| `string`[]; `bundleDependencies?`:
`boolean` \| `string`[]; `config?`: `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \|
\{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[]; `cpu?`: `string`[];
`dependencies?`: `Record`\<`string`, `string`\>; `description?`: `string`; `devDependencies?`:
`Record`\<`string`, `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`:
`string`; `lib?`: `string`; `man?`: `string`; `v?`: `string`; \}; `engines?`: `object` &
`Record`\<`string`, `string`\>; `esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`:
`PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{ `type?`:
`string`; `url`: `string`; \} \| (`string` \| \{ `type?`: `string`; `url`: `string`; \})[];
`homepage?`: `string`; `keywords?`: `string`[]; `license?`: `string`; `main?`: `string`;
`maintainers?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
`man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`; `optionalDependencies?`:
`Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`: `Record`\<`string`, `string` \|
`Record`\<`string`, `string` \| `Record`\<`string`, `unknown`\>\>\>; `packageManager?`: `string`;
`peerDependencies?`: `Record`\<`string`, `string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{
`optional`: `boolean`; \}\>; `preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`:
`object` & `Record`\<`string`, `unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`;
`type`: `string`; `url`: `string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`:
`Record`\<`string`, `string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`:
`string`; `type?`: `"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`; `version?`:
`string`; `workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \} \|
`ZodError`\<\{ `author?`: `string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \};
`bin?`: `string` \| `Record`\<`string`, `string`\>; `browser?`: `string` \| `Record`\<`string`,
`string` \| `false`\>; `bugs?`: `string` \| \{ `email?`: `string`; `url?`: `string`; \};
`bundledDependencies?`: `boolean` \| `string`[]; `bundleDependencies?`: `boolean` \| `string`[];
`config?`: `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \| \{ `email?`: `string`;
`name`: `string`; `url?`: `string`; \})[]; `cpu?`: `string`[]; `dependencies?`: `Record`\<`string`,
`string`\>; `description?`: `string`; `devDependencies?`: `Record`\<`string`, `string`\>;
`directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`: `string`; `lib?`: `string`;
`man?`: `string`; `v?`: `string`; \}; `engines?`: `object` & `Record`\<`string`, `string`\>;
`esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`: `PackageJsonExports`; `files?`:
`string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{ `type?`: `string`; `url`: `string`; \} \|
(`string` \| \{ `type?`: `string`; `url`: `string`; \})[]; `homepage?`: `string`; `keywords?`:
`string`[]; `license?`: `string`; `main?`: `string`; `maintainers?`: (`string` \| \{ `email?`:
`string`; `name`: `string`; `url?`: `string`; \})[]; `man?`: `string` \| `string`[]; `module?`:
`string`; `name?`: `string`; `optionalDependencies?`: `Record`\<`string`, `string`\>; `os?`:
`string`[]; `overrides?`: `Record`\<`string`, `string` \| `Record`\<`string`, `string` \|
`Record`\<..., ...\>\>\>; `packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`,
`string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>;
`preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`: `object` & `Record`\<`string`,
`unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`; `type`: `string`; `url`:
`string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`: `Record`\<`string`,
`string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`: `string`; `type?`:
`"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`; `version?`: `string`;
`workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \}\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, \{ `author?`: `string` \| \{ `email?`:
`string`; `name`: `string`; `url?`: `string`; \}; `bin?`: `string` \| `Record`\<`string`,
`string`\>; `browser?`: `string` \| `Record`\<`string`, `string` \| `false`\>; `bugs?`: `string` \|
\{ `email?`: `string`; `url?`: `string`; \}; `bundledDependencies?`: `boolean` \| `string`[];
`bundleDependencies?`: `boolean` \| `string`[]; `config?`: `Record`\<`string`, `unknown`\>;
`contributors?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
`cpu?`: `string`[]; `dependencies?`: `Record`\<`string`, `string`\>; `description?`: `string`;
`devDependencies?`: `Record`\<`string`, `string`\>; `directories?`: \{ `bin?`: `string`; `doc?`:
`string`; `example?`: `string`; `lib?`: `string`; `man?`: `string`; `v?`: `string`; \}; `engines?`:
`object` & `Record`\<`string`, `string`\>; `esnext?`: `string` \| `Record`\<`string`, `string`\>;
`exports?`: `PackageJsonExports`; `files?`: `string`[]; `flat?`: `boolean`; `funding?`: `string` \|
\{ `type?`: `string`; `url`: `string`; \} \| (`string` \| \{ `type?`: `string`; `url`: `string`;
\})[]; `homepage?`: `string`; `keywords?`: `string`[]; `license?`: `string`; `main?`: `string`;
`maintainers?`: (`string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \})[];
`man?`: `string` \| `string`[]; `module?`: `string`; `name?`: `string`; `optionalDependencies?`:
`Record`\<`string`, `string`\>; `os?`: `string`[]; `overrides?`: `Record`\<`string`, `string` \|
`Record`\<`string`, `string` \| `Record`\<`string`, `unknown`\>\>\>; `packageManager?`: `string`;
`peerDependencies?`: `Record`\<`string`, `string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{
`optional`: `boolean`; \}\>; `preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`:
`object` & `Record`\<`string`, `unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`;
`type`: `string`; `url`: `string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`:
`Record`\<`string`, `string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`:
`string`; `type?`: `"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`; `version?`:
`string`; `workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \},
\{ `author?`: `string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \}; `bin?`:
`string` \| `Record`\<`string`, `string`\>; `browser?`: `string` \| `Record`\<`string`, `string` \|
`false`\>; `bugs?`: `string` \| \{ `email?`: `string`; `url?`: `string`; \}; `bundledDependencies?`:
`boolean` \| `string`[]; `bundleDependencies?`: `boolean` \| `string`[]; `config?`:
`Record`\<`string`, `unknown`\>; `contributors?`: (`string` \| \{ `email?`: `string`; `name`:
`string`; `url?`: `string`; \})[]; `cpu?`: `string`[]; `dependencies?`: `Record`\<`string`,
`string`\>; `description?`: `string`; `devDependencies?`: `Record`\<`string`, `string`\>;
`directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`: `string`; `lib?`: `string`;
`man?`: `string`; `v?`: `string`; \}; `engines?`: `object` & `Record`\<`string`, `string`\>;
`esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`: `PackageJsonExports`; `files?`:
`string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{ `type?`: `string`; `url`: `string`; \} \|
(`string` \| \{ `type?`: `string`; `url`: `string`; \})[]; `homepage?`: `string`; `keywords?`:
`string`[]; `license?`: `string`; `main?`: `string`; `maintainers?`: (`string` \| \{ `email?`:
`string`; `name`: `string`; `url?`: `string`; \})[]; `man?`: `string` \| `string`[]; `module?`:
`string`; `name?`: `string`; `optionalDependencies?`: `Record`\<`string`, `string`\>; `os?`:
`string`[]; `overrides?`: `Record`\<`string`, `string` \| `Record`\<`string`, `string` \|
`Record`\<..., ...\>\>\>; `packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`,
`string`\>; `peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>;
`preferGlobal?`: `boolean`; `private?`: `boolean`; `publishConfig?`: `object` & `Record`\<`string`,
`unknown`\>; `repository?`: `string` \| \{ `directory?`: `string`; `type`: `string`; `url`:
`string`; \}; `resolutions?`: `Record`\<`string`, `string`\>; `scripts?`: `Record`\<`string`,
`string`\> & `object`; `sideEffects?`: `boolean` \| `string`[]; `source?`: `string`; `type?`:
`"commonjs"` \| `"module"`; `types?`: `string`; `typings?`: `string`; `version?`: `string`;
`workspaces?`: `string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \} \|
`ZodError`\<\{ `author?`: `string` \| \{ `email?`: `string`; `name`: `string`; `url?`: `string`; \};
`bin?`: `string` \| `Record`\<`string`, `string`\>; `browser?`: `string` \| `Record`\<`string`,
`string` \| `false`\>; `bugs?`: `string` \| \{ `email?`: `string`; `url?`: `string`; \};
`bundledDependencies?`: `boolean` \| `string`[]; `bundleDependencies?`: `boolean` \| `string`[];
`config?`: `Record`\<`string`, `unknown`\>; `contributors?`: (`string` \| \{ `email?`: ... \| ...;
`name`: `string`; `url?`: ... \| ...; \})[]; `cpu?`: `string`[]; `dependencies?`:
`Record`\<`string`, `string`\>; `description?`: `string`; `devDependencies?`: `Record`\<`string`,
`string`\>; `directories?`: \{ `bin?`: `string`; `doc?`: `string`; `example?`: `string`; `lib?`:
`string`; `man?`: `string`; `v?`: `string`; \}; `engines?`: `object` & `Record`\<`string`,
`string`\>; `esnext?`: `string` \| `Record`\<`string`, `string`\>; `exports?`: `PackageJsonExports`;
`files?`: `string`[]; `flat?`: `boolean`; `funding?`: `string` \| \{ `type?`: `string`; `url`:
`string`; \} \| (`string` \| \{ `type?`: ... \| ...; `url`: `string`; \})[]; `homepage?`: `string`;
`keywords?`: `string`[]; `license?`: `string`; `main?`: `string`; `maintainers?`: (`string` \| \{
`email?`: ... \| ...; `name`: `string`; `url?`: ... \| ...; \})[]; `man?`: `string` \| `string`[];
`module?`: `string`; `name?`: `string`; `optionalDependencies?`: `Record`\<`string`, `string`\>;
`os?`: `string`[]; `overrides?`: `Record`\<`string`, `string` \| `Record`\<`string`, ... \| ...\>\>;
`packageManager?`: `string`; `peerDependencies?`: `Record`\<`string`, `string`\>;
`peerDependenciesMeta?`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>; `preferGlobal?`:
`boolean`; `private?`: `boolean`; `publishConfig?`: `object` & `Record`\<`string`, `unknown`\>;
`repository?`: `string` \| \{ `directory?`: `string`; `type`: `string`; `url`: `string`; \};
`resolutions?`: `Record`\<`string`, `string`\>; `scripts?`: `Record`\<`string`, `string`\> &
`object`; `sideEffects?`: `boolean` \| `string`[]; `source?`: `string`; `type?`: `"commonjs"` \|
`"module"`; `types?`: `string`; `typings?`: `string`; `version?`: `string`; `workspaces?`:
`string`[] \| \{ `nohoist?`: `string`[]; `packages?`: `string`[]; \}; \}\>\>\>
