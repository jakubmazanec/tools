# @jakubmazanec/zod-utils

## Table of contents

### Interfaces

- [ReadFileOptions](interfaces/ReadFileOptions.md)
- [ReadJsonOptions](interfaces/ReadJsonOptions.md)
- [ReadPackageJsonOptions](interfaces/ReadPackageJsonOptions.md)

### Type Aliases

- [Json](README.md#json)
- [PackageJson](README.md#packagejson)
- [TsconfigJson](README.md#tsconfigjson)

### Variables

- [jsonSchema](README.md#jsonschema)
- [packageJsonSchema](README.md#packagejsonschema)
- [tsconfigJsonSchema](README.md#tsconfigjsonschema)

### Functions

- [is](README.md#is)
- [isPackageJson](README.md#ispackagejson)
- [isTsconfigJson](README.md#istsconfigjson)
- [readFile](README.md#readfile)
- [readJson](README.md#readjson)
- [readPackageJson](README.md#readpackagejson)
- [zodIssuesToStrings](README.md#zodissuestostrings)

## Type Aliases

### Json

Ƭ **Json**: [`Json`](README.md#json)[] \| `Literal` \| { `[key: string]`: [`Json`](README.md#json);
}

#### Defined in

[packages/zod-utils/src/types/Json.ts:11](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/Json.ts#L11)

---

### PackageJson

Ƭ **PackageJson**: `z.infer`<typeof [`packageJsonSchema`](README.md#packagejsonschema)\>

#### Defined in

[packages/zod-utils/src/types/PackageJson.ts:294](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/PackageJson.ts#L294)

---

### TsconfigJson

Ƭ **TsconfigJson**: `z.infer`<typeof [`tsconfigJsonSchema`](README.md#tsconfigjsonschema)\>

#### Defined in

[packages/zod-utils/src/types/TsconfigJson.ts:346](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/TsconfigJson.ts#L346)

## Variables

### jsonSchema

• `Const` **jsonSchema**: `z.ZodSchema`<[`Json`](README.md#json)\>

#### Defined in

[packages/zod-utils/src/types/Json.ts:7](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/Json.ts#L7)

---

### packageJsonSchema

• `Const` **packageJsonSchema**: `ZodObject`<{ `author`: `ZodOptional`<`ZodUnion`<[`ZodObject`<{
`email`: `ZodOptional`<`ZodString`\> ; `name`: `ZodString` ; `url`: `ZodOptional`<`ZodString`\> },
``"strict"``, `ZodTypeAny`, { `email?`: `string` ; `name`: `string` ; `url?`: `string` }, {
`email?`: `string` ; `name`: `string` ; `url?`: `string` }\>, `ZodString`]\>\> ; `bin`:
`ZodOptional`<`ZodUnion`<[`ZodRecord`<`ZodString`, `ZodString`\>, `ZodString`]\>\> ; `browser`:
`ZodOptional`<`ZodUnion`<[`ZodString`, `ZodRecord`<`ZodString`, `ZodUnion`<[`ZodString`,
`ZodLiteral`<``false``\>]\>\>]\>\> ; `bugs`: `ZodOptional`<`ZodUnion`<[`ZodObject`<{ `email`:
`ZodOptional`<`ZodString`\> ; `url`: `ZodOptional`<`ZodString`\> }, ``"strict"``, `ZodTypeAny`, {
`email?`: `string` ; `url?`: `string` }, { `email?`: `string` ; `url?`: `string` }\>,
`ZodString`]\>\> ; `bundleDependencies`: `ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodString`,
``"many"``\>, `ZodBoolean`]\>\> = packageJsonBundledDependenciesSchema; `bundledDependencies`:
`ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodString`, ``"many"``\>, `ZodBoolean`]\>\> =
packageJsonBundledDependenciesSchema; `config`: `ZodOptional`<`ZodRecord`<`ZodString`,
`ZodUnknown`\>\> ; `contributors`: `ZodOptional`<`ZodArray`<`ZodUnion`<[`ZodObject`<{ `email`:
`ZodOptional`<`ZodString`\> ; `name`: `ZodString` ; `url`: `ZodOptional`<`ZodString`\> },
``"strict"``, `ZodTypeAny`, { `email?`: `string` ; `name`: `string` ; `url?`: `string` }, {
`email?`: `string` ; `name`: `string` ; `url?`: `string` }\>, `ZodString`]\>, `"many"`\>\> ; `cpu`:
`ZodOptional`<`ZodArray`<`ZodUnion`<[`ZodEnum`<[``"!arm"``, ``"!arm64"``, ``"!ia32"``, ``"!mips"``,
``"!mipsel"``, ``"!ppc"``, ``"!ppc64"``, ``"!s390"``, ``"!s390x"``, ``"!x32"``, ``"!x64"``,
``"arm"``, ``"arm64"``, ``"ia32"``, ``"mips"``, ``"mipsel"``, ``"ppc"``, ``"ppc64"``, ``"s390"``,
``"s390x"``, ``"x32"``, ``"x64"``]\>, `ZodString`]\>, `"many"`\>\> ; `dependencies`:
`ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`\>\> ; `description`: `ZodOptional`<`ZodString`\>
; `devDependencies`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`\>\> ; `directories`:
`ZodOptional`<`ZodObject`<{ `bin`: `ZodOptional`<`ZodString`\> ; `doc`: `ZodOptional`<`ZodString`\>
; `example`: `ZodOptional`<`ZodString`\> ; `lib`: `ZodOptional`<`ZodString`\> ; `man`:
`ZodOptional`<`ZodString`\> ; `v`: `ZodOptional`<`ZodString`\> }, `"strict"`, `ZodTypeAny`, {
`bin?`: `string` ; `doc?`: `string` ; `example?`: `string` ; `lib?`: `string` ; `man?`: `string` ;
`v?`: `string` }, { `bin?`: `string` ; `doc?`: `string` ; `example?`: `string` ; `lib?`: `string` ;
`man?`: `string` ; `v?`: `string` }\>\> ; `engines`: `ZodOptional`<`ZodIntersection`<`ZodObject`<{
`node`: `ZodOptional`<`ZodString`\> ; `npm`: `ZodOptional`<`ZodString`\> }, `"strip"`, `ZodTypeAny`,
{ `node?`: `string` ; `npm?`: `string` }, { `node?`: `string` ; `npm?`: `string` }\>,
`ZodRecord`<`ZodString`, `ZodString`\>\>\> ; `esnext`: `ZodOptional`<`ZodUnion`<[`ZodString`,
`ZodRecord`<`ZodString`, `ZodString`\>]\>\> ; `exports`:
`ZodOptional`<`ZodType`<`PackageJsonExports`, `ZodTypeDef`, `PackageJsonExports`\>\> ; `files`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `flat`: `ZodOptional`<`ZodBoolean`\> ;
`funding`: `ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodUnion`<[`ZodObject`<{ `type`:
`ZodOptional`<`ZodUnion`<[`ZodEnum`<[``"corporation"``, ``"foundation"``, ``"github"``,
``"individual"``, ``"opencollective"``, ``"patreon"``]\>, `ZodString`]\>\> ; `url`: `ZodString` },
`"strict"`, `ZodTypeAny`, { `type?`: `string` ; `url`: `string` }, { `type?`: `string` ; `url`:
`string` }\>, `ZodString`]\>, `"many"`\>, `ZodUnion`<[`ZodObject`<{ `type`:
`ZodOptional`<`ZodUnion`<[`ZodEnum`<[``"corporation"``, ``"foundation"``, ``"github"``,
``"individual"``, ``"opencollective"``, ``"patreon"``]\>, `ZodString`]\>\> ; `url`: `ZodString` },
`"strict"`, `ZodTypeAny`, { `type?`: `string` ; `url`: `string` }, { `type?`: `string` ; `url`:
`string` }\>, `ZodString`]\>]\>\> ; `homepage`: `ZodOptional`<`ZodString`\> ; `keywords`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `license`: `ZodOptional`<`ZodString`\> ;
`main`: `ZodOptional`<`ZodString`\> ; `maintainers`:
`ZodOptional`<`ZodArray`<`ZodUnion`<[`ZodObject`<{ `email`: `ZodOptional`<`ZodString`\> ; `name`:
`ZodString` ; `url`: `ZodOptional`<`ZodString`\> }, ``"strict"``, `ZodTypeAny`, { `email?`: `string`
; `name`: `string` ; `url?`: `string` }, { `email?`: `string` ; `name`: `string` ; `url?`: `string`
}\>, `ZodString`]\>, `"many"`\>\> ; `man`: `ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodString`,
``"many"``\>, `ZodString`]\>\> ; `module`: `ZodOptional`<`ZodString`\> ; `name`:
`ZodOptional`<`ZodString`\> ; `optionalDependencies`: `ZodOptional`<`ZodRecord`<`ZodString`,
`ZodString`\>\> ; `os`: `ZodOptional`<`ZodArray`<`ZodUnion`<[`ZodEnum`<[``"!aix"``, ``"!darwin"``,
``"!freebsd"``, ``"!linux"``, ``"!openbsd"``, ``"!sunos"``, ``"!win32"``, ``"aix"``, ``"darwin"``,
``"freebsd"``, ``"linux"``, ``"openbsd"``, ``"sunos"``, ``"win32"``]\>, `ZodString`]\>, `"many"`\>\>
; `overrides`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodUnion`<[`ZodString`,
`ZodRecord`<`ZodString`, `ZodUnion`<[`ZodString`, `ZodRecord`<`ZodString`,
`ZodUnknown`\>]\>\>]\>\>\> ; `packageManager`: `ZodOptional`<`ZodString`\> ; `peerDependencies`:
`ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`\>\> ; `peerDependenciesMeta`:
`ZodOptional`<`ZodRecord`<`ZodString`, `ZodObject`<{ `optional`: `ZodBoolean` }, `"strip"`,
`ZodTypeAny`, { `optional`: `boolean` }, { `optional`: `boolean` }\>\>\> ; `preferGlobal`:
`ZodOptional`<`ZodBoolean`\> ; `private`: `ZodOptional`<`ZodBoolean`\> ; `publishConfig`:
`ZodOptional`<`ZodIntersection`<`ZodObject`<{ `access`: `ZodOptional`<`ZodEnum`<[``"public"``,
``"restricted"``]\>\> ; `registry`: `ZodOptional`<`ZodString`\> ; `tag`: `ZodOptional`<`ZodString`\>
}, `"strip"`, `ZodTypeAny`, { `access?`: `"public"` \| `"restricted"` ; `registry?`: `string` ;
`tag?`: `string` }, { `access?`: `"public"` \| `"restricted"` ; `registry?`: `string` ; `tag?`:
`string` }\>, `ZodRecord`<`ZodString`, `ZodUnknown`\>\>\> ; `repository`:
`ZodOptional`<`ZodUnion`<[`ZodObject`<{ `directory`: `ZodOptional`<`ZodString`\> ; `type`:
`ZodString` ; `url`: `ZodString` }, ``"strict"``, `ZodTypeAny`, { `directory?`: `string` ; `type`:
`string` ; `url`: `string` }, { `directory?`: `string` ; `type`: `string` ; `url`: `string` }\>,
`ZodString`]\>\> ; `resolutions`: `ZodOptional`<`ZodRecord`<`ZodString`, `ZodString`\>\> ;
`scripts`: `ZodOptional`<`ZodIntersection`<`ZodRecord`<`ZodString`, `ZodString`\>, `ZodObject`<{
`install`: `ZodOptional`<`ZodString`\> ; `postinstall`: `ZodOptional`<`ZodString`\> ; `postpack`:
`ZodOptional`<`ZodString`\> ; `postpublish`: `ZodOptional`<`ZodString`\> ; `postrestart`:
`ZodOptional`<`ZodString`\> ; `poststart`: `ZodOptional`<`ZodString`\> ; `poststop`:
`ZodOptional`<`ZodString`\> ; `posttest`: `ZodOptional`<`ZodString`\> ; `postuninstall`:
`ZodOptional`<`ZodString`\> ; `postversion`: `ZodOptional`<`ZodString`\> ; `preinstall`:
`ZodOptional`<`ZodString`\> ; `prepack`: `ZodOptional`<`ZodString`\> ; `prepare`:
`ZodOptional`<`ZodString`\> ; `prepublish`: `ZodOptional`<`ZodString`\> ; `prepublishOnly`:
`ZodOptional`<`ZodString`\> ; `prerestart`: `ZodOptional`<`ZodString`\> ; `prestart`:
`ZodOptional`<`ZodString`\> ; `prestop`: `ZodOptional`<`ZodString`\> ; `pretest`:
`ZodOptional`<`ZodString`\> ; `preuninstall`: `ZodOptional`<`ZodString`\> ; `preversion`:
`ZodOptional`<`ZodString`\> ; `publish`: `ZodOptional`<`ZodString`\> ; `restart`:
`ZodOptional`<`ZodString`\> ; `start`: `ZodOptional`<`ZodString`\> ; `stop`:
`ZodOptional`<`ZodString`\> ; `test`: `ZodOptional`<`ZodString`\> ; `uninstall`:
`ZodOptional`<`ZodString`\> ; `version`: `ZodOptional`<`ZodString`\> }, `"strip"`, `ZodTypeAny`, {
`install?`: `string` ; `postinstall?`: `string` ; `postpack?`: `string` ; `postpublish?`: `string` ;
`postrestart?`: `string` ; `poststart?`: `string` ; `poststop?`: `string` ; `posttest?`: `string` ;
`postuninstall?`: `string` ; `postversion?`: `string` ; `preinstall?`: `string` ; `prepack?`:
`string` ; `prepare?`: `string` ; `prepublish?`: `string` ; `prepublishOnly?`: `string` ;
`prerestart?`: `string` ; `prestart?`: `string` ; `prestop?`: `string` ; `pretest?`: `string` ;
`preuninstall?`: `string` ; `preversion?`: `string` ; `publish?`: `string` ; `restart?`: `string` ;
`start?`: `string` ; `stop?`: `string` ; `test?`: `string` ; `uninstall?`: `string` ; `version?`:
`string` }, { `install?`: `string` ; `postinstall?`: `string` ; `postpack?`: `string` ;
`postpublish?`: `string` ; `postrestart?`: `string` ; `poststart?`: `string` ; `poststop?`: `string`
; `posttest?`: `string` ; `postuninstall?`: `string` ; `postversion?`: `string` ; `preinstall?`:
`string` ; `prepack?`: `string` ; `prepare?`: `string` ; `prepublish?`: `string` ;
`prepublishOnly?`: `string` ; `prerestart?`: `string` ; `prestart?`: `string` ; `prestop?`: `string`
; `pretest?`: `string` ; `preuninstall?`: `string` ; `preversion?`: `string` ; `publish?`: `string`
; `restart?`: `string` ; `start?`: `string` ; `stop?`: `string` ; `test?`: `string` ; `uninstall?`:
`string` ; `version?`: `string` }\>\>\> ; `sideEffects`:
`ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodString`, ``"many"``\>, `ZodBoolean`]\>\> ; `source`:
`ZodOptional`<`ZodString`\> ; `type`: `ZodOptional`<`ZodUnion`<[`ZodLiteral`<``"commonjs"``\>,
`ZodLiteral`<``"module"``\>]\>\> ; `types`: `ZodOptional`<`ZodString`\> ; `typings`:
`ZodOptional`<`ZodString`\> ; `version`: `ZodOptional`<`ZodString`\> ; `workspaces`:
`ZodOptional`<`ZodUnion`<[`ZodArray`<`ZodString`, `"many"`\>, `ZodObject`<{ `nohoist`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `packages`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> }, `"strict"`, `ZodTypeAny`, { `nohoist?`:
`string`[] ; `packages?`: `string`[] }, { `nohoist?`: `string`[] ; `packages?`: `string`[] }\>]\>\>
}, `"strip"`, `ZodTypeAny`, { `author?`: `string` \| { `email?`: `string` ; `name`: `string` ;
`url?`: `string` } ; `bin?`: `string` \| `Record`<`string`, `string`\> ; `browser?`: `string` \|
`Record`<`string`, `string` \| `false`\> ; `bugs?`: `string` \| { `email?`: `string` ; `url?`:
`string` } ; `bundleDependencies?`: `boolean` \| `string`[] = packageJsonBundledDependenciesSchema;
`bundledDependencies?`: `boolean` \| `string`[] = packageJsonBundledDependenciesSchema; `config?`:
`Record`<`string`, `unknown`\> ; `contributors?`: (`string` \| { `email?`: `string` ; `name`:
`string` ; `url?`: `string` })[] ; `cpu?`: `string`[] ; `dependencies?`: `Record`<`string`,
`string`\> ; `description?`: `string` ; `devDependencies?`: `Record`<`string`, `string`\> ;
`directories?`: { `bin?`: `string` ; `doc?`: `string` ; `example?`: `string` ; `lib?`: `string` ;
`man?`: `string` ; `v?`: `string` } ; `engines?`: { node?: string \| undefined; npm?: string \|
undefined; } & `Record`<`string`, `string`\> ; `esnext?`: `string` \| `Record`<`string`, `string`\>
; `exports?`: `PackageJsonExports` ; `files?`: `string`[] ; `flat?`: `boolean` ; `funding?`:
`string` \| { `type?`: `string` ; `url`: `string` } \| (`string` \| { `type?`: `string` ; `url`:
`string` })[] ; `homepage?`: `string` ; `keywords?`: `string`[] ; `license?`: `string` ; `main?`:
`string` ; `maintainers?`: (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`
})[] ; `man?`: `string` \| `string`[] ; `module?`: `string` ; `name?`: `string` ;
`optionalDependencies?`: `Record`<`string`, `string`\> ; `os?`: `string`[] ; `overrides?`:
`Record`<`string`, `string` \| `Record`<`string`, `string` \| `Record`<`string`, `unknown`\>\>\> ;
`packageManager?`: `string` ; `peerDependencies?`: `Record`<`string`, `string`\> ;
`peerDependenciesMeta?`: `Record`<`string`, { optional: boolean; }\> ; `preferGlobal?`: `boolean` ;
`private?`: `boolean` ; `publishConfig?`: { access?: "public" \| "restricted" \| undefined;
registry?: string \| undefined; tag?: string \| undefined; } & `Record`<`string`, `unknown`\> ;
`repository?`: `string` \| { `directory?`: `string` ; `type`: `string` ; `url`: `string` } ;
`resolutions?`: `Record`<`string`, `string`\> ; `scripts?`: `Record`<`string`, `string`\> & {
prepublish?: string \| undefined; prepare?: string \| undefined; prepublishOnly?: string \|
undefined; prepack?: string \| undefined; postpack?: string \| undefined; publish?: string \|
undefined; ... 21 more ...; postrestart?: string \| undefined; } ; `sideEffects?`: `boolean` \|
`string`[] ; `source?`: `string` ; `type?`: `"commonjs"` \| `"module"` ; `types?`: `string` ;
`typings?`: `string` ; `version?`: `string` ; `workspaces?`: `string`[] \| { `nohoist?`: `string`[]
; `packages?`: `string`[] } }, { `author?`: `string` \| { `email?`: `string` ; `name`: `string` ;
`url?`: `string` } ; `bin?`: `string` \| `Record`<`string`, `string`\> ; `browser?`: `string` \|
`Record`<`string`, `string` \| `false`\> ; `bugs?`: `string` \| { `email?`: `string` ; `url?`:
`string` } ; `bundleDependencies?`: `boolean` \| `string`[] = packageJsonBundledDependenciesSchema;
`bundledDependencies?`: `boolean` \| `string`[] = packageJsonBundledDependenciesSchema; `config?`:
`Record`<`string`, `unknown`\> ; `contributors?`: (`string` \| { `email?`: `string` ; `name`:
`string` ; `url?`: `string` })[] ; `cpu?`: `string`[] ; `dependencies?`: `Record`<`string`,
`string`\> ; `description?`: `string` ; `devDependencies?`: `Record`<`string`, `string`\> ;
`directories?`: { `bin?`: `string` ; `doc?`: `string` ; `example?`: `string` ; `lib?`: `string` ;
`man?`: `string` ; `v?`: `string` } ; `engines?`: { node?: string \| undefined; npm?: string \|
undefined; } & `Record`<`string`, `string`\> ; `esnext?`: `string` \| `Record`<`string`, `string`\>
; `exports?`: `PackageJsonExports` ; `files?`: `string`[] ; `flat?`: `boolean` ; `funding?`:
`string` \| { `type?`: `string` ; `url`: `string` } \| (`string` \| { `type?`: `string` ; `url`:
`string` })[] ; `homepage?`: `string` ; `keywords?`: `string`[] ; `license?`: `string` ; `main?`:
`string` ; `maintainers?`: (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string`
})[] ; `man?`: `string` \| `string`[] ; `module?`: `string` ; `name?`: `string` ;
`optionalDependencies?`: `Record`<`string`, `string`\> ; `os?`: `string`[] ; `overrides?`:
`Record`<`string`, `string` \| `Record`<`string`, `string` \| `Record`<`string`, `unknown`\>\>\> ;
`packageManager?`: `string` ; `peerDependencies?`: `Record`<`string`, `string`\> ;
`peerDependenciesMeta?`: `Record`<`string`, { optional: boolean; }\> ; `preferGlobal?`: `boolean` ;
`private?`: `boolean` ; `publishConfig?`: { access?: "public" \| "restricted" \| undefined;
registry?: string \| undefined; tag?: string \| undefined; } & `Record`<`string`, `unknown`\> ;
`repository?`: `string` \| { `directory?`: `string` ; `type`: `string` ; `url`: `string` } ;
`resolutions?`: `Record`<`string`, `string`\> ; `scripts?`: `Record`<`string`, `string`\> & {
prepublish?: string \| undefined; prepare?: string \| undefined; prepublishOnly?: string \|
undefined; prepack?: string \| undefined; postpack?: string \| undefined; publish?: string \|
undefined; ... 21 more ...; postrestart?: string \| undefined; } ; `sideEffects?`: `boolean` \|
`string`[] ; `source?`: `string` ; `type?`: `"commonjs"` \| `"module"` ; `types?`: `string` ;
`typings?`: `string` ; `version?`: `string` ; `workspaces?`: `string`[] \| { `nohoist?`: `string`[]
; `packages?`: `string`[] } }\>

#### Defined in

[packages/zod-utils/src/types/PackageJson.ts:150](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/PackageJson.ts#L150)

---

### tsconfigJsonSchema

• `Const` **tsconfigJsonSchema**: `ZodObject`<{ `compileOnSave`: `ZodOptional`<`ZodBoolean`\> ;
`compilerOptions`: `ZodOptional`<`ZodObject`<{ `allowJs`: `ZodOptional`<`ZodBoolean`\> ;
`allowSyntheticDefaultImports`: `ZodOptional`<`ZodBoolean`\> ; `allowUmdGlobalAccess`:
`ZodOptional`<`ZodBoolean`\> ; `allowUnreachableCode`: `ZodOptional`<`ZodBoolean`\> ;
`allowUnusedLabels`: `ZodOptional`<`ZodBoolean`\> ; `alwaysStrict`: `ZodOptional`<`ZodBoolean`\> ;
`assumeChangesOnlyAffectDirectDependencies`: `ZodOptional`<`ZodBoolean`\> ; `baseUrl`:
`ZodOptional`<`ZodString`\> ; `charset`: `ZodOptional`<`ZodString`\> ; `checkJs`:
`ZodOptional`<`ZodBoolean`\> ; `composite`: `ZodOptional`<`ZodBoolean`\> ; `declaration`:
`ZodOptional`<`ZodBoolean`\> ; `declarationDir`: `ZodOptional`<`ZodString`\> ; `declarationMap`:
`ZodOptional`<`ZodBoolean`\> ; `diagnostics`: `ZodOptional`<`ZodBoolean`\> ;
`disableReferencedProjectLoad`: `ZodOptional`<`ZodBoolean`\> ; `disableSizeLimit`:
`ZodOptional`<`ZodBoolean`\> ; `disableSolutionSearching`: `ZodOptional`<`ZodBoolean`\> ;
`disableSourceOfProjectReferenceRedirect`: `ZodOptional`<`ZodBoolean`\> ; `downlevelIteration`:
`ZodOptional`<`ZodBoolean`\> ; `emitBOM`: `ZodOptional`<`ZodBoolean`\> ; `emitDeclarationOnly`:
`ZodOptional`<`ZodBoolean`\> ; `emitDecoratorMetadata`: `ZodOptional`<`ZodBoolean`\> ;
`esModuleInterop`: `ZodOptional`<`ZodBoolean`\> ; `exactOptionalPropertyTypes`:
`ZodOptional`<`ZodBoolean`\> ; `experimentalDecorators`: `ZodOptional`<`ZodBoolean`\> ;
`explainFiles`: `ZodOptional`<`ZodBoolean`\> ; `extendedDiagnostics`: `ZodOptional`<`ZodBoolean`\> ;
`fallbackPolling`: `ZodOptional`<`ZodEnum`<[``"fixedPollingInterval"``,
``"priorityPollingInterval"``, ``"dynamicPriorityPolling"``, ``"fixedInterval"``,
``"priorityInterval"``, ``"dynamicPriority"``, ``"fixedChunkSize"``]\>\> ;
`forceConsistentCasingInFileNames`: `ZodOptional`<`ZodBoolean`\> ; `generateCpuProfile`:
`ZodOptional`<`ZodString`\> ; `importHelpers`: `ZodOptional`<`ZodBoolean`\> ;
`importsNotUsedAsValues`: `ZodOptional`<`ZodEnum`<[``"remove"``, ``"preserve"``, ``"error"``]\>\> ;
`incremental`: `ZodOptional`<`ZodBoolean`\> ; `inlineSourceMap`: `ZodOptional`<`ZodBoolean`\> ;
`inlineSources`: `ZodOptional`<`ZodBoolean`\> ; `isolatedModules`: `ZodOptional`<`ZodBoolean`\> ;
`jsx`: `ZodOptional`<`ZodEnum`<[``"preserve"``, ``"react"``, ``"react-jsx"``, ``"react-jsxdev"``,
``"react-native"``]\>\> ; `jsxFactory`: `ZodOptional`<`ZodString`\> ; `jsxFragmentFactory`:
`ZodOptional`<`ZodString`\> ; `jsxImportSource`: `ZodOptional`<`ZodString`\> ; `keyofStringsOnly`:
`ZodOptional`<`ZodBoolean`\> ; `lib`: `ZodOptional`<`ZodArray`<`ZodEnum`<[``"ES5"``, ``"ES6"``,
``"ES7"``, ``"ES2015"``, ``"ES2015.Collection"``, ``"ES2015.Core"``, ``"ES2015.Generator"``,
``"ES2015.Iterable"``, ``"ES2015.Promise"``, ``"ES2015.Proxy"``, ``"ES2015.Reflect"``,
``"ES2015.Symbol.WellKnown"``, ``"ES2015.Symbol"``, ``"ES2016"``]\>, `"many"`\>\> ;
`listEmittedFiles`: `ZodOptional`<`ZodBoolean`\> ; `listFiles`: `ZodOptional`<`ZodBoolean`\> ;
`listFilesOnly`: `ZodOptional`<`ZodBoolean`\> ; `mapRoot`: `ZodOptional`<`ZodString`\> ;
`maxNodeModuleJsDepth`: `ZodOptional`<`ZodNumber`\> ; `module`:
`ZodOptional`<`ZodEnum`<[``"CommonJS"``, ``"AMD"``, ``"System"``, ``"UMD"``, ``"ES6"``,
``"ES2015"``, ``"ES2020"``, ``"ESNext"``, ``"None"``, ``"commonjs"``, ``"amd"``, ``"system"``,
``"umd"``, ``"es6"``, ``"es2015"``, ``"es2020"``, ``"esnext"``, ``"none"``]\>\> ;
`moduleResolution`: `ZodOptional`<`ZodEnum`<[``"classic"``, ``"node"``]\>\> ; `newLine`:
`ZodOptional`<`ZodEnum`<[``"CRLF"``, ``"LF"``, ``"crlf"``, ``"lf"``]\>\> ; `noEmit`:
`ZodOptional`<`ZodBoolean`\> ; `noEmitHelpers`: `ZodOptional`<`ZodBoolean`\> ; `noEmitOnError`:
`ZodOptional`<`ZodBoolean`\> ; `noErrorTruncation`: `ZodOptional`<`ZodBoolean`\> ;
`noFallthroughCasesInSwitch`: `ZodOptional`<`ZodBoolean`\> ; `noImplicitAny`:
`ZodOptional`<`ZodBoolean`\> ; `noImplicitOverride`: `ZodOptional`<`ZodBoolean`\> ;
`noImplicitReturns`: `ZodOptional`<`ZodBoolean`\> ; `noImplicitThis`: `ZodOptional`<`ZodBoolean`\> ;
`noImplicitUseStrict`: `ZodOptional`<`ZodBoolean`\> ; `noLib`: `ZodOptional`<`ZodBoolean`\> ;
`noPropertyAccessFromIndexSignature`: `ZodOptional`<`ZodBoolean`\> ; `noResolve`:
`ZodOptional`<`ZodBoolean`\> ; `noStrictGenericChecks`: `ZodOptional`<`ZodBoolean`\> ;
`noUncheckedIndexedAccess`: `ZodOptional`<`ZodBoolean`\> ; `noUnusedLocals`:
`ZodOptional`<`ZodBoolean`\> ; `noUnusedParameters`: `ZodOptional`<`ZodBoolean`\> ; `outDir`:
`ZodOptional`<`ZodString`\> ; `outFile`: `ZodOptional`<`ZodString`\> ; `paths`:
`ZodOptional`<`ZodRecord`<`ZodString`, `ZodArray`<`ZodString`, `"many"`\>\>\> ; `plugins`:
`ZodOptional`<`ZodArray`<`ZodIntersection`<`ZodObject`<{ `name`: `ZodOptional`<`ZodString`\> },
`"strict"`, `ZodTypeAny`, { `name?`: `string` }, { `name?`: `string` }\>, `ZodRecord`<`ZodString`,
`ZodUnknown`\>\>, `"many"`\>\> ; `preserveConstEnums`: `ZodOptional`<`ZodBoolean`\> ;
`preserveSymlinks`: `ZodOptional`<`ZodBoolean`\> ; `preserveWatchOutput`:
`ZodOptional`<`ZodBoolean`\> ; `pretty`: `ZodOptional`<`ZodBoolean`\> ; `reactNamespace`:
`ZodOptional`<`ZodString`\> ; `removeComments`: `ZodOptional`<`ZodBoolean`\> ; `resolveJsonModule`:
`ZodOptional`<`ZodBoolean`\> ; `rootDir`: `ZodOptional`<`ZodString`\> ; `rootDirs`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `skipDefaultLibCheck`:
`ZodOptional`<`ZodBoolean`\> ; `skipLibCheck`: `ZodOptional`<`ZodBoolean`\> ; `sourceMap`:
`ZodOptional`<`ZodBoolean`\> ; `sourceRoot`: `ZodOptional`<`ZodString`\> ; `strict`:
`ZodOptional`<`ZodBoolean`\> ; `strictBindCallApply`: `ZodOptional`<`ZodBoolean`\> ;
`strictFunctionTypes`: `ZodOptional`<`ZodBoolean`\> ; `strictNullChecks`:
`ZodOptional`<`ZodBoolean`\> ; `strictPropertyInitialization`: `ZodOptional`<`ZodBoolean`\> ;
`stripInternal`: `ZodOptional`<`ZodBoolean`\> ; `suppressExcessPropertyErrors`:
`ZodOptional`<`ZodBoolean`\> ; `suppressImplicitAnyIndexErrors`: `ZodOptional`<`ZodBoolean`\> ;
`target`: `ZodOptional`<`ZodEnum`<[``"ES3"``, ``"ES5"``, ``"ES6"``, ``"ES2015"``, ``"ES2016"``,
``"ES2017"``, ``"ES2018"``, ``"ES2019"``, ``"ES2020"``, ``"ES2021"``, ``"ESNext"``, ``"es3"``,
``"es5"``, ``"es6"``, ``"es2015"``, ``"es2016"``, ``"es2017"``, ``"es2018"``, ``"es2019"``,
``"es2020"``, ``"es2021"``, ``"esnext"``]\>\> ; `traceResolution`: `ZodOptional`<`ZodBoolean`\> ;
`tsBuildInfoFile`: `ZodOptional`<`ZodString`\> ; `typeRoots`: `ZodOptional`<`ZodArray`<`ZodString`,
`"many"`\>\> ; `types`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ;
`useDefineForClassFields`: `ZodOptional`<`ZodBoolean`\> ; `useUnknownInCatchVariables`:
`ZodOptional`<`ZodBoolean`\> ; `watch`: `ZodOptional`<`ZodBoolean`\> ; `watchDirectory`:
`ZodOptional`<`ZodEnum`<[``"useFsEvents"``, ``"fixedPollingInterval"``,
``"dynamicPriorityPolling"``, ``"fixedChunkSizePolling"``]\>\> ; `watchFile`:
`ZodOptional`<`ZodEnum`<[``"fixedPollingInterval"``, ``"priorityPollingInterval"``,
``"dynamicPriorityPolling"``, ``"useFsEvents"``, ``"useFsEventsOnParentDirectory"``,
``"fixedChunkSizePolling"``]\>\> }, `"strict"`, `ZodTypeAny`, { `allowJs?`: `boolean` ;
`allowSyntheticDefaultImports?`: `boolean` ; `allowUmdGlobalAccess?`: `boolean` ;
`allowUnreachableCode?`: `boolean` ; `allowUnusedLabels?`: `boolean` ; `alwaysStrict?`: `boolean` ;
`assumeChangesOnlyAffectDirectDependencies?`: `boolean` ; `baseUrl?`: `string` ; `charset?`:
`string` ; `checkJs?`: `boolean` ; `composite?`: `boolean` ; `declaration?`: `boolean` ;
`declarationDir?`: `string` ; `declarationMap?`: `boolean` ; `diagnostics?`: `boolean` ;
`disableReferencedProjectLoad?`: `boolean` ; `disableSizeLimit?`: `boolean` ;
`disableSolutionSearching?`: `boolean` ; `disableSourceOfProjectReferenceRedirect?`: `boolean` ;
`downlevelIteration?`: `boolean` ; `emitBOM?`: `boolean` ; `emitDeclarationOnly?`: `boolean` ;
`emitDecoratorMetadata?`: `boolean` ; `esModuleInterop?`: `boolean` ; `exactOptionalPropertyTypes?`:
`boolean` ; `experimentalDecorators?`: `boolean` ; `explainFiles?`: `boolean` ;
`extendedDiagnostics?`: `boolean` ; `fallbackPolling?`: `"fixedPollingInterval"` \|
`"priorityPollingInterval"` \| `"dynamicPriorityPolling"` \| `"fixedInterval"` \|
`"priorityInterval"` \| `"dynamicPriority"` \| `"fixedChunkSize"` ;
`forceConsistentCasingInFileNames?`: `boolean` ; `generateCpuProfile?`: `string` ; `importHelpers?`:
`boolean` ; `importsNotUsedAsValues?`: `"error"` \| `"preserve"` \| `"remove"` ; `incremental?`:
`boolean` ; `inlineSourceMap?`: `boolean` ; `inlineSources?`: `boolean` ; `isolatedModules?`:
`boolean` ; `jsx?`: `"react-native"` \| `"preserve"` \| `"react"` \| `"react-jsx"` \|
`"react-jsxdev"` ; `jsxFactory?`: `string` ; `jsxFragmentFactory?`: `string` ; `jsxImportSource?`:
`string` ; `keyofStringsOnly?`: `boolean` ; `lib?`: (`"esnext"` \| `"ES6"` \| `"ES2015"` \|
`"ES2020"` \| `"ESNext"` \| `"es6"` \| `"es2015"` \| `"es2020"` \| `"ES5"` \| `"ES2016"` \|
`"ES2017"` \| `"ES2018"` \| `"ES2019"` \| `"ES2021"` \| `"es5"` \| `"es2016"` \| `"es2017"` \|
`"es2018"` \| `"es2019"` \| `"es2021"` \| `"ES7"` \| `"ES2015.Collection"` \| `"ES2015.Core"` \|
`"ES2015.Generator"` \| `"ES2015.Iterable"` \| `"ES2015.Promise"` \| `"ES2015.Proxy"` \|
`"ES2015.Reflect"` \| `"ES2015.Symbol.WellKnown"` \| `"ES2015.Symbol"` \| `"ES2016.Array.Include"`
\| `"ES2017.Intl"` \| `"ES2017.Object"` \| `"ES2017.SharedMemory"` \| `"ES2017.String"` \|
`"ES2017.TypedArrays"` \| `"ES2018.AsyncGenerator"` \| `"ES2018.AsyncIterable"` \| `"ES2018.Intl"`
\| `"ES2018.Promise"` \| `"ES2018.Regexp"` \| `"ES2019.Array"` \| `"ES2019.Object"` \|
`"ES2019.String"` \| `"ES2019.Symbol"` \| `"ES2020.BigInt"` \| `"ES2020.Promise"` \|
`"ES2020.String"` \| `"ES2020.Symbol.WellKnown"` \| `"ES2020.SharedMemory"` \| `"ES2020.Intl"` \|
`"ES2021.Promise"` \| `"ES2021.String"` \| `"ES2021.WeakRef"` \| `"ESNext.Array"` \|
`"ESNext.AsyncIterable"` \| `"ESNext.BigInt"` \| `"ESNext.Intl"` \| `"ESNext.Promise"` \|
`"ESNext.String"` \| `"ESNext.Symbol"` \| `"ESNext.WeakRef"` \| `"DOM"` \| `"DOM.Iterable"` \|
`"ScriptHost"` \| `"WebWorker"` \| `"WebWorker.ImportScripts"` \| `"WebWorker.Iterable"` \| `"es7"`
\| `"es2015.collection"` \| `"es2015.core"` \| `"es2015.generator"` \| `"es2015.iterable"` \|
`"es2015.promise"` \| `"es2015.proxy"` \| `"es2015.reflect"` \| `"es2015.symbol.wellknown"` \|
`"es2015.symbol"` \| `"es2016.array.include"` \| `"es2017.intl"` \| `"es2017.object"` \|
`"es2017.sharedmemory"` \| `"es2017.string"` \| `"es2017.typedarrays"` \| `"es2018.asyncgenerator"`
\| `"es2018.asynciterable"` \| `"es2018.intl"` \| `"es2018.promise"` \| `"es2018.regexp"` \|
`"es2019.array"` \| `"es2019.object"` \| `"es2019.string"` \| `"es2019.symbol"` \| `"es2020.bigint"`
\| `"es2020.promise"` \| `"es2020.string"` \| `"es2020.symbol.wellknown"` \| `"es2020.sharedmemory"`
\| `"es2020.intl"` \| `"es2021.promise"` \| `"es2021.string"` \| `"es2021.weakref"` \|
`"esnext.array"` \| `"esnext.asynciterable"` \| `"esnext.bigint"` \| `"esnext.intl"` \|
`"esnext.promise"` \| `"esnext.string"` \| `"esnext.symbol"` \| `"esnext.weakref"` \| `"dom"` \|
`"dom.iterable"` \| `"scripthost"` \| `"webworker"` \| `"webworker.importscripts"` \|
`"webworker.iterable"`)[] ; `listEmittedFiles?`: `boolean` ; `listFiles?`: `boolean` ;
`listFilesOnly?`: `boolean` ; `mapRoot?`: `string` ; `maxNodeModuleJsDepth?`: `number` ; `module?`:
`"commonjs"` \| `"esnext"` \| `"CommonJS"` \| `"AMD"` \| `"System"` \| `"UMD"` \| `"ES6"` \|
`"ES2015"` \| `"ES2020"` \| `"ESNext"` \| `"None"` \| `"amd"` \| `"system"` \| `"umd"` \| `"es6"` \|
`"es2015"` \| `"es2020"` \| `"none"` ; `moduleResolution?`: `"node"` \| `"classic"` ; `newLine?`:
`"CRLF"` \| `"LF"` \| `"crlf"` \| `"lf"` ; `noEmit?`: `boolean` ; `noEmitHelpers?`: `boolean` ;
`noEmitOnError?`: `boolean` ; `noErrorTruncation?`: `boolean` ; `noFallthroughCasesInSwitch?`:
`boolean` ; `noImplicitAny?`: `boolean` ; `noImplicitOverride?`: `boolean` ; `noImplicitReturns?`:
`boolean` ; `noImplicitThis?`: `boolean` ; `noImplicitUseStrict?`: `boolean` ; `noLib?`: `boolean` ;
`noPropertyAccessFromIndexSignature?`: `boolean` ; `noResolve?`: `boolean` ;
`noStrictGenericChecks?`: `boolean` ; `noUncheckedIndexedAccess?`: `boolean` ; `noUnusedLocals?`:
`boolean` ; `noUnusedParameters?`: `boolean` ; `outDir?`: `string` ; `outFile?`: `string` ;
`paths?`: `Record`<`string`, `string`[]\> ; `plugins?`: { name?: string \| undefined; } &
`Record`<`string`, `unknown`\>[] ; `preserveConstEnums?`: `boolean` ; `preserveSymlinks?`: `boolean`
; `preserveWatchOutput?`: `boolean` ; `pretty?`: `boolean` ; `reactNamespace?`: `string` ;
`removeComments?`: `boolean` ; `resolveJsonModule?`: `boolean` ; `rootDir?`: `string` ; `rootDirs?`:
`string`[] ; `skipDefaultLibCheck?`: `boolean` ; `skipLibCheck?`: `boolean` ; `sourceMap?`:
`boolean` ; `sourceRoot?`: `string` ; `strict?`: `boolean` ; `strictBindCallApply?`: `boolean` ;
`strictFunctionTypes?`: `boolean` ; `strictNullChecks?`: `boolean` ;
`strictPropertyInitialization?`: `boolean` ; `stripInternal?`: `boolean` ;
`suppressExcessPropertyErrors?`: `boolean` ; `suppressImplicitAnyIndexErrors?`: `boolean` ;
`target?`: `"esnext"` \| `"ES6"` \| `"ES2015"` \| `"ES2020"` \| `"ESNext"` \| `"es6"` \| `"es2015"`
\| `"es2020"` \| `"ES3"` \| `"ES5"` \| `"ES2016"` \| `"ES2017"` \| `"ES2018"` \| `"ES2019"` \|
`"ES2021"` \| `"es3"` \| `"es5"` \| `"es2016"` \| `"es2017"` \| `"es2018"` \| `"es2019"` \|
`"es2021"` ; `traceResolution?`: `boolean` ; `tsBuildInfoFile?`: `string` ; `typeRoots?`: `string`[]
; `types?`: `string`[] ; `useDefineForClassFields?`: `boolean` ; `useUnknownInCatchVariables?`:
`boolean` ; `watch?`: `boolean` ; `watchDirectory?`: `"fixedPollingInterval"` \|
`"dynamicPriorityPolling"` \| `"useFsEvents"` \| `"fixedChunkSizePolling"` ; `watchFile?`:
`"fixedPollingInterval"` \| `"priorityPollingInterval"` \| `"dynamicPriorityPolling"` \|
`"useFsEvents"` \| `"fixedChunkSizePolling"` \| `"useFsEventsOnParentDirectory"` }, { `allowJs?`:
`boolean` ; `allowSyntheticDefaultImports?`: `boolean` ; `allowUmdGlobalAccess?`: `boolean` ;
`allowUnreachableCode?`: `boolean` ; `allowUnusedLabels?`: `boolean` ; `alwaysStrict?`: `boolean` ;
`assumeChangesOnlyAffectDirectDependencies?`: `boolean` ; `baseUrl?`: `string` ; `charset?`:
`string` ; `checkJs?`: `boolean` ; `composite?`: `boolean` ; `declaration?`: `boolean` ;
`declarationDir?`: `string` ; `declarationMap?`: `boolean` ; `diagnostics?`: `boolean` ;
`disableReferencedProjectLoad?`: `boolean` ; `disableSizeLimit?`: `boolean` ;
`disableSolutionSearching?`: `boolean` ; `disableSourceOfProjectReferenceRedirect?`: `boolean` ;
`downlevelIteration?`: `boolean` ; `emitBOM?`: `boolean` ; `emitDeclarationOnly?`: `boolean` ;
`emitDecoratorMetadata?`: `boolean` ; `esModuleInterop?`: `boolean` ; `exactOptionalPropertyTypes?`:
`boolean` ; `experimentalDecorators?`: `boolean` ; `explainFiles?`: `boolean` ;
`extendedDiagnostics?`: `boolean` ; `fallbackPolling?`: `"fixedPollingInterval"` \|
`"priorityPollingInterval"` \| `"dynamicPriorityPolling"` \| `"fixedInterval"` \|
`"priorityInterval"` \| `"dynamicPriority"` \| `"fixedChunkSize"` ;
`forceConsistentCasingInFileNames?`: `boolean` ; `generateCpuProfile?`: `string` ; `importHelpers?`:
`boolean` ; `importsNotUsedAsValues?`: `"error"` \| `"preserve"` \| `"remove"` ; `incremental?`:
`boolean` ; `inlineSourceMap?`: `boolean` ; `inlineSources?`: `boolean` ; `isolatedModules?`:
`boolean` ; `jsx?`: `"react-native"` \| `"preserve"` \| `"react"` \| `"react-jsx"` \|
`"react-jsxdev"` ; `jsxFactory?`: `string` ; `jsxFragmentFactory?`: `string` ; `jsxImportSource?`:
`string` ; `keyofStringsOnly?`: `boolean` ; `lib?`: (`"esnext"` \| `"ES6"` \| `"ES2015"` \|
`"ES2020"` \| `"ESNext"` \| `"es6"` \| `"es2015"` \| `"es2020"` \| `"ES5"` \| `"ES2016"` \|
`"ES2017"` \| `"ES2018"` \| `"ES2019"` \| `"ES2021"` \| `"es5"` \| `"es2016"` \| `"es2017"` \|
`"es2018"` \| `"es2019"` \| `"es2021"` \| `"ES7"` \| `"ES2015.Collection"` \| `"ES2015.Core"` \|
`"ES2015.Generator"` \| `"ES2015.Iterable"` \| `"ES2015.Promise"` \| `"ES2015.Proxy"` \|
`"ES2015.Reflect"` \| `"ES2015.Symbol.WellKnown"` \| `"ES2015.Symbol"` \| `"ES2016.Array.Include"`
\| `"ES2017.Intl"` \| `"ES2017.Object"` \| `"ES2017.SharedMemory"` \| `"ES2017.String"` \|
`"ES2017.TypedArrays"` \| `"ES2018.AsyncGenerator"` \| `"ES2018.AsyncIterable"` \| `"ES2018.Intl"`
\| `"ES2018.Promise"` \| `"ES2018.Regexp"` \| `"ES2019.Array"` \| `"ES2019.Object"` \|
`"ES2019.String"` \| `"ES2019.Symbol"` \| `"ES2020.BigInt"` \| `"ES2020.Promise"` \|
`"ES2020.String"` \| `"ES2020.Symbol.WellKnown"` \| `"ES2020.SharedMemory"` \| `"ES2020.Intl"` \|
`"ES2021.Promise"` \| `"ES2021.String"` \| `"ES2021.WeakRef"` \| `"ESNext.Array"` \|
`"ESNext.AsyncIterable"` \| `"ESNext.BigInt"` \| `"ESNext.Intl"` \| `"ESNext.Promise"` \|
`"ESNext.String"` \| `"ESNext.Symbol"` \| `"ESNext.WeakRef"` \| `"DOM"` \| `"DOM.Iterable"` \|
`"ScriptHost"` \| `"WebWorker"` \| `"WebWorker.ImportScripts"` \| `"WebWorker.Iterable"` \| `"es7"`
\| `"es2015.collection"` \| `"es2015.core"` \| `"es2015.generator"` \| `"es2015.iterable"` \|
`"es2015.promise"` \| `"es2015.proxy"` \| `"es2015.reflect"` \| `"es2015.symbol.wellknown"` \|
`"es2015.symbol"` \| `"es2016.array.include"` \| `"es2017.intl"` \| `"es2017.object"` \|
`"es2017.sharedmemory"` \| `"es2017.string"` \| `"es2017.typedarrays"` \| `"es2018.asyncgenerator"`
\| `"es2018.asynciterable"` \| `"es2018.intl"` \| `"es2018.promise"` \| `"es2018.regexp"` \|
`"es2019.array"` \| `"es2019.object"` \| `"es2019.string"` \| `"es2019.symbol"` \| `"es2020.bigint"`
\| `"es2020.promise"` \| `"es2020.string"` \| `"es2020.symbol.wellknown"` \| `"es2020.sharedmemory"`
\| `"es2020.intl"` \| `"es2021.promise"` \| `"es2021.string"` \| `"es2021.weakref"` \|
`"esnext.array"` \| `"esnext.asynciterable"` \| `"esnext.bigint"` \| `"esnext.intl"` \|
`"esnext.promise"` \| `"esnext.string"` \| `"esnext.symbol"` \| `"esnext.weakref"` \| `"dom"` \|
`"dom.iterable"` \| `"scripthost"` \| `"webworker"` \| `"webworker.importscripts"` \|
`"webworker.iterable"`)[] ; `listEmittedFiles?`: `boolean` ; `listFiles?`: `boolean` ;
`listFilesOnly?`: `boolean` ; `mapRoot?`: `string` ; `maxNodeModuleJsDepth?`: `number` ; `module?`:
`"commonjs"` \| `"esnext"` \| `"CommonJS"` \| `"AMD"` \| `"System"` \| `"UMD"` \| `"ES6"` \|
`"ES2015"` \| `"ES2020"` \| `"ESNext"` \| `"None"` \| `"amd"` \| `"system"` \| `"umd"` \| `"es6"` \|
`"es2015"` \| `"es2020"` \| `"none"` ; `moduleResolution?`: `"node"` \| `"classic"` ; `newLine?`:
`"CRLF"` \| `"LF"` \| `"crlf"` \| `"lf"` ; `noEmit?`: `boolean` ; `noEmitHelpers?`: `boolean` ;
`noEmitOnError?`: `boolean` ; `noErrorTruncation?`: `boolean` ; `noFallthroughCasesInSwitch?`:
`boolean` ; `noImplicitAny?`: `boolean` ; `noImplicitOverride?`: `boolean` ; `noImplicitReturns?`:
`boolean` ; `noImplicitThis?`: `boolean` ; `noImplicitUseStrict?`: `boolean` ; `noLib?`: `boolean` ;
`noPropertyAccessFromIndexSignature?`: `boolean` ; `noResolve?`: `boolean` ;
`noStrictGenericChecks?`: `boolean` ; `noUncheckedIndexedAccess?`: `boolean` ; `noUnusedLocals?`:
`boolean` ; `noUnusedParameters?`: `boolean` ; `outDir?`: `string` ; `outFile?`: `string` ;
`paths?`: `Record`<`string`, `string`[]\> ; `plugins?`: { name?: string \| undefined; } &
`Record`<`string`, `unknown`\>[] ; `preserveConstEnums?`: `boolean` ; `preserveSymlinks?`: `boolean`
; `preserveWatchOutput?`: `boolean` ; `pretty?`: `boolean` ; `reactNamespace?`: `string` ;
`removeComments?`: `boolean` ; `resolveJsonModule?`: `boolean` ; `rootDir?`: `string` ; `rootDirs?`:
`string`[] ; `skipDefaultLibCheck?`: `boolean` ; `skipLibCheck?`: `boolean` ; `sourceMap?`:
`boolean` ; `sourceRoot?`: `string` ; `strict?`: `boolean` ; `strictBindCallApply?`: `boolean` ;
`strictFunctionTypes?`: `boolean` ; `strictNullChecks?`: `boolean` ;
`strictPropertyInitialization?`: `boolean` ; `stripInternal?`: `boolean` ;
`suppressExcessPropertyErrors?`: `boolean` ; `suppressImplicitAnyIndexErrors?`: `boolean` ;
`target?`: `"esnext"` \| `"ES6"` \| `"ES2015"` \| `"ES2020"` \| `"ESNext"` \| `"es6"` \| `"es2015"`
\| `"es2020"` \| `"ES3"` \| `"ES5"` \| `"ES2016"` \| `"ES2017"` \| `"ES2018"` \| `"ES2019"` \|
`"ES2021"` \| `"es3"` \| `"es5"` \| `"es2016"` \| `"es2017"` \| `"es2018"` \| `"es2019"` \|
`"es2021"` ; `traceResolution?`: `boolean` ; `tsBuildInfoFile?`: `string` ; `typeRoots?`: `string`[]
; `types?`: `string`[] ; `useDefineForClassFields?`: `boolean` ; `useUnknownInCatchVariables?`:
`boolean` ; `watch?`: `boolean` ; `watchDirectory?`: `"fixedPollingInterval"` \|
`"dynamicPriorityPolling"` \| `"useFsEvents"` \| `"fixedChunkSizePolling"` ; `watchFile?`:
`"fixedPollingInterval"` \| `"priorityPollingInterval"` \| `"dynamicPriorityPolling"` \|
`"useFsEvents"` \| `"fixedChunkSizePolling"` \| `"useFsEventsOnParentDirectory"` }\>\> ; `exclude`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `extends`: `ZodOptional`<`ZodString`\> ;
`files`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `include`:
`ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ; `references`:
`ZodOptional`<`ZodArray`<`ZodObject`<{ `circular`: `ZodOptional`<`ZodBoolean`\> ; `originalPath`:
`ZodOptional`<`ZodString`\> ; `path`: `ZodString` ; `prepend`: `ZodOptional`<`ZodBoolean`\> },
`"strict"`, `ZodTypeAny`, { `circular?`: `boolean` ; `originalPath?`: `string` ; `path`: `string` ;
`prepend?`: `boolean` }, { `circular?`: `boolean` ; `originalPath?`: `string` ; `path`: `string` ;
`prepend?`: `boolean` }\>, `"many"`\>\> ; `typeAcquisition`: `ZodOptional`<`ZodObject`<{ `enable`:
`ZodOptional`<`ZodBoolean`\> ; `exclude`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> ;
`include`: `ZodOptional`<`ZodArray`<`ZodString`, `"many"`\>\> }, `"strict"`, `ZodTypeAny`, {
`enable?`: `boolean` ; `exclude?`: `string`[] ; `include?`: `string`[] }, { `enable?`: `boolean` ;
`exclude?`: `string`[] ; `include?`: `string`[] }\>\> }, `"strict"`, `ZodTypeAny`, {
`compileOnSave?`: `boolean` ; `compilerOptions?`: { allowJs?: boolean \| undefined;
allowSyntheticDefaultImports?: boolean \| undefined; allowUmdGlobalAccess?: boolean \| undefined;
allowUnreachableCode?: boolean \| undefined; allowUnusedLabels?: boolean \| undefined; ... 97 more
...; watchFile?: "fixedPollingInterval" \| ... 5 more ... \| undefined; } ; `exclude?`: `string`[] ;
`extends?`: `string` ; `files?`: `string`[] ; `include?`: `string`[] ; `references?`: { path:
string; originalPath?: string \| undefined; prepend?: boolean \| undefined; circular?: boolean \|
undefined; }[] ; `typeAcquisition?`: { enable?: boolean \| undefined; include?: string[] \|
undefined; exclude?: string[] \| undefined; } }, { `compileOnSave?`: `boolean` ; `compilerOptions?`:
{ allowJs?: boolean \| undefined; allowSyntheticDefaultImports?: boolean \| undefined;
allowUmdGlobalAccess?: boolean \| undefined; allowUnreachableCode?: boolean \| undefined;
allowUnusedLabels?: boolean \| undefined; ... 97 more ...; watchFile?: "fixedPollingInterval" \| ...
5 more ... \| undefined; } ; `exclude?`: `string`[] ; `extends?`: `string` ; `files?`: `string`[] ;
`include?`: `string`[] ; `references?`: { path: string; originalPath?: string \| undefined;
prepend?: boolean \| undefined; circular?: boolean \| undefined; }[] ; `typeAcquisition?`: {
enable?: boolean \| undefined; include?: string[] \| undefined; exclude?: string[] \| undefined; }
}\>

#### Defined in

[packages/zod-utils/src/types/TsconfigJson.ts:333](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/types/TsconfigJson.ts#L333)

## Functions

### is

▸ **is**<`S`\>(`value`, `schema`): value is TypeOf<S\>

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `S`  | extends `ZodType`<`any`, `any`, `any`, `S`\> |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value`  | `unknown` |
| `schema` | `S`       |

#### Returns

value is TypeOf<S\>

#### Defined in

[packages/zod-utils/src/utils/is.ts:3](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/is.ts#L3)

---

### isPackageJson

▸ **isPackageJson**(`value`): value is Object

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is Object

#### Defined in

[packages/zod-utils/src/utils/isPackageJson.ts:3](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/isPackageJson.ts#L3)

---

### isTsconfigJson

▸ **isTsconfigJson**(`value`): value is Object

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

value is Object

#### Defined in

[packages/zod-utils/src/utils/isTsconfigJson.ts:3](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/isTsconfigJson.ts#L3)

---

### readFile

▸ **readFile**<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`<`O` extends `undefined` ?
`z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\> : `If`<`NonNullable`<`O`\>[``"throwOnZodError"``],
`true`, `z.infer`<`S`\>, `z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\>\>\>

#### Type parameters

| Name | Type                                                                                    |
| :--- | :-------------------------------------------------------------------------------------- |
| `S`  | extends `ZodType`<`any`, `any`, `any`, `S`\>                                            |
| `O`  | extends `undefined` \| [`ReadFileOptions`](interfaces/ReadFileOptions.md) = `undefined` |

#### Parameters

| Name       | Type                       |
| :--------- | :------------------------- |
| `path`     | `FileHandle` \| `PathLike` |
| `schema`   | `S`                        |
| `options?` | `O`                        |

#### Returns

`Promise`<`O` extends `undefined` ? `z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\> :
`If`<`NonNullable`<`O`\>[``"throwOnZodError"``], `true`, `z.infer`<`S`\>, `z.infer`<`S`\> \|
`ZodError`<`z.infer`<`S`\>\>\>\>

#### Defined in

[packages/zod-utils/src/utils/readFile.ts:11](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/readFile.ts#L11)

---

### readJson

▸ **readJson**<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`<`O` extends `undefined` ?
`z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\> : `If`<`NonNullable`<`O`\>[``"throwOnZodError"``],
`true`, `z.infer`<`S`\>, `z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\>\>\>

#### Type parameters

| Name | Type                                                                                    |
| :--- | :-------------------------------------------------------------------------------------- |
| `S`  | extends `ZodType`<`any`, `any`, `any`, `S`\>                                            |
| `O`  | extends `undefined` \| [`ReadJsonOptions`](interfaces/ReadJsonOptions.md) = `undefined` |

#### Parameters

| Name       | Type                       |
| :--------- | :------------------------- |
| `path`     | `FileHandle` \| `PathLike` |
| `schema`   | `S`                        |
| `options?` | `O`                        |

#### Returns

`Promise`<`O` extends `undefined` ? `z.infer`<`S`\> \| `ZodError`<`z.infer`<`S`\>\> :
`If`<`NonNullable`<`O`\>[``"throwOnZodError"``], `true`, `z.infer`<`S`\>, `z.infer`<`S`\> \|
`ZodError`<`z.infer`<`S`\>\>\>\>

#### Defined in

[packages/zod-utils/src/utils/readJson.ts:12](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/readJson.ts#L12)

---

### readPackageJson

▸ **readPackageJson**<`O`\>(`path`, `options?`): `Promise`<`O` extends `undefined` ?
[`PackageJson`](README.md#packagejson) \| `ZodError`<[`PackageJson`](README.md#packagejson)\> :
`If`<`NonNullable`<`O`\>[``"throwOnZodError"``], `true`, [`PackageJson`](README.md#packagejson),
[`PackageJson`](README.md#packagejson) \| `ZodError`<[`PackageJson`](README.md#packagejson)\>\>\>

#### Type parameters

| Name | Type                                                                                                  |
| :--- | :---------------------------------------------------------------------------------------------------- |
| `O`  | extends `undefined` \| [`ReadPackageJsonOptions`](interfaces/ReadPackageJsonOptions.md) = `undefined` |

#### Parameters

| Name       | Type                       |
| :--------- | :------------------------- |
| `path`     | `FileHandle` \| `PathLike` |
| `options?` | `O`                        |

#### Returns

`Promise`<`O` extends `undefined` ? [`PackageJson`](README.md#packagejson) \|
`ZodError`<[`PackageJson`](README.md#packagejson)\> :
`If`<`NonNullable`<`O`\>[``"throwOnZodError"``], `true`, [`PackageJson`](README.md#packagejson),
[`PackageJson`](README.md#packagejson) \| `ZodError`<[`PackageJson`](README.md#packagejson)\>\>\>

#### Defined in

[packages/zod-utils/src/utils/readPackageJson.ts:13](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/readPackageJson.ts#L13)

---

### zodIssuesToStrings

▸ **zodIssuesToStrings**(`zodIssues`): `string`[]

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `zodIssues` | `ZodIssue`[] |

#### Returns

`string`[]

#### Defined in

[packages/zod-utils/src/utils/zodIssuesToString.ts:50](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/zod-utils/src/utils/zodIssuesToString.ts#L50)
