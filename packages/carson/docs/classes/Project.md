[**@jakubmazanec/carson**](../README.md)

---

# Class: Project\<M\>

Defined in:
[packages/carson/source/workspace/Project.ts:29](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L29)

Project represent a self-contained piece of software (e.g. a package, or an app) that is part of a
[Workspace](Workspace.md). Currently only Node.js projects are supported.

## Type Parameters

• **M** _extends_ `boolean` = `true`

If true, the project belongs to a multi-project workspace.

## Constructors

### new Project()

> **new Project**\<`M`\>(`__namedParameters`): [`Project`](Project.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Project.ts:51](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L51)

#### Parameters

##### \_\_namedParameters

[`ProjectOptions`](../type-aliases/ProjectOptions.md)\<`M`\>

#### Returns

[`Project`](Project.md)\<`M`\>

## Properties

### config

> **config**: `objectOutputType`\<\{ `template`: `ZodOptional`\<`ZodString`\>; \}, `ZodUnknown`,
> `"strip"`\>

Defined in:
[packages/carson/source/workspace/Project.ts:40](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L40)

Project configuration; if it's not found, the default is an empty object.

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
> `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"`, `ProjectErrorData`\>[] = `[]`

Defined in:
[packages/carson/source/workspace/Project.ts:49](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L49)

Errors found during reading from the file system.

---

### name?

> `optional` **name**: `string`

Defined in:
[packages/carson/source/workspace/Project.ts:31](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L31)

Project name.

---

### packageJson

> **packageJson**: `object`

Defined in:
[packages/carson/source/workspace/Project.ts:43](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L43)

Parsed project `package.json` file; if it's not found, the default is an empty object.

#### author?

> `optional` **author**: `string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \}

#### bin?

> `optional` **bin**: `string` \| `Record`\<`string`, `string`\>

#### browser?

> `optional` **browser**: `string` \| `Record`\<`string`, `string` \| `false`\>

#### bugs?

> `optional` **bugs**: `string` \| \{ `email`: `string`; `url`: `string`; \}

#### bundledDependencies?

> `optional` **bundledDependencies**: `boolean` \| `string`[]

#### bundleDependencies?

> `optional` **bundleDependencies**: `boolean` \| `string`[]

#### config?

> `optional` **config**: `Record`\<`string`, `unknown`\>

#### contributors?

> `optional` **contributors**: (`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`;
> \})[]

#### cpu?

> `optional` **cpu**: `string`[]

#### dependencies?

> `optional` **dependencies**: `Record`\<`string`, `string`\>

#### description?

> `optional` **description**: `string`

#### devDependencies?

> `optional` **devDependencies**: `Record`\<`string`, `string`\>

#### directories?

> `optional` **directories**: `object`

##### directories.bin?

> `optional` **bin**: `string`

##### directories.doc?

> `optional` **doc**: `string`

##### directories.example?

> `optional` **example**: `string`

##### directories.lib?

> `optional` **lib**: `string`

##### directories.man?

> `optional` **man**: `string`

##### directories.v?

> `optional` **v**: `string`

#### engines?

> `optional` **engines**: `object` & `Record`\<`string`, `string`\>

##### Type declaration

###### node?

> `optional` **node**: `string`

###### npm?

> `optional` **npm**: `string`

#### esnext?

> `optional` **esnext**: `string` \| `Record`\<`string`, `string`\>

#### exports?

> `optional` **exports**: `PackageJsonExports`

#### files?

> `optional` **files**: `string`[]

#### flat?

> `optional` **flat**: `boolean`

#### funding?

> `optional` **funding**: `string` \| \{ `type`: `string`; `url`: `string`; \} \| (`string` \| \{
> `type`: `string`; `url`: `string`; \})[]

#### homepage?

> `optional` **homepage**: `string`

#### keywords?

> `optional` **keywords**: `string`[]

#### license?

> `optional` **license**: `string`

#### main?

> `optional` **main**: `string`

#### maintainers?

> `optional` **maintainers**: (`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`;
> \})[]

#### man?

> `optional` **man**: `string` \| `string`[]

#### module?

> `optional` **module**: `string`

#### name?

> `optional` **name**: `string`

#### optionalDependencies?

> `optional` **optionalDependencies**: `Record`\<`string`, `string`\>

#### os?

> `optional` **os**: `string`[]

#### overrides?

> `optional` **overrides**: `Record`\<`string`, `string` \| `Record`\<`string`, `string` \|
> `Record`\<`string`, `unknown`\>\>\>

#### packageManager?

> `optional` **packageManager**: `string`

#### peerDependencies?

> `optional` **peerDependencies**: `Record`\<`string`, `string`\>

#### peerDependenciesMeta?

> `optional` **peerDependenciesMeta**: `Record`\<`string`, \{ `optional`: `boolean`; \}\>

#### preferGlobal?

> `optional` **preferGlobal**: `boolean`

#### private?

> `optional` **private**: `boolean`

#### publishConfig?

> `optional` **publishConfig**: `object` & `Record`\<`string`, `unknown`\>

##### Type declaration

###### access?

> `optional` **access**: `"public"` \| `"restricted"`

###### registry?

> `optional` **registry**: `string`

###### tag?

> `optional` **tag**: `string`

#### repository?

> `optional` **repository**: `string` \| \{ `directory`: `string`; `type`: `string`; `url`:
> `string`; \}

#### resolutions?

> `optional` **resolutions**: `Record`\<`string`, `string`\>

#### scripts?

> `optional` **scripts**: `Record`\<`string`, `string`\> & `object`

##### Type declaration

###### install?

> `optional` **install**: `string`

###### postinstall?

> `optional` **postinstall**: `string`

###### postpack?

> `optional` **postpack**: `string`

###### postpublish?

> `optional` **postpublish**: `string`

###### postrestart?

> `optional` **postrestart**: `string`

###### poststart?

> `optional` **poststart**: `string`

###### poststop?

> `optional` **poststop**: `string`

###### posttest?

> `optional` **posttest**: `string`

###### postuninstall?

> `optional` **postuninstall**: `string`

###### postversion?

> `optional` **postversion**: `string`

###### preinstall?

> `optional` **preinstall**: `string`

###### prepack?

> `optional` **prepack**: `string`

###### prepare?

> `optional` **prepare**: `string`

###### prepublish?

> `optional` **prepublish**: `string`

###### prepublishOnly?

> `optional` **prepublishOnly**: `string`

###### prerestart?

> `optional` **prerestart**: `string`

###### prestart?

> `optional` **prestart**: `string`

###### prestop?

> `optional` **prestop**: `string`

###### pretest?

> `optional` **pretest**: `string`

###### preuninstall?

> `optional` **preuninstall**: `string`

###### preversion?

> `optional` **preversion**: `string`

###### publish?

> `optional` **publish**: `string`

###### restart?

> `optional` **restart**: `string`

###### start?

> `optional` **start**: `string`

###### stop?

> `optional` **stop**: `string`

###### test?

> `optional` **test**: `string`

###### uninstall?

> `optional` **uninstall**: `string`

###### version?

> `optional` **version**: `string`

#### sideEffects?

> `optional` **sideEffects**: `boolean` \| `string`[]

#### source?

> `optional` **source**: `string`

#### type?

> `optional` **type**: `"commonjs"` \| `"module"`

#### types?

> `optional` **types**: `string`

#### typings?

> `optional` **typings**: `string`

#### version?

> `optional` **version**: `string`

#### workspaces?

> `optional` **workspaces**: `string`[] \| \{ `nohoist`: `string`[]; `packages`: `string`[]; \}

---

### path

> **path**: `string`

Defined in:
[packages/carson/source/workspace/Project.ts:34](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L34)

Project path.

---

### relativePath

> **relativePath**: `string`

Defined in:
[packages/carson/source/workspace/Project.ts:37](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L37)

Project path relative to workspace path.

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Project.ts:46](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L46)

Parent [Workspace](Workspace.md) instance.

## Methods

### read()

> **read**(): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Project.ts:164](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L164)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

---

### update()

> **update**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Project.ts:245](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L245)

#### Parameters

##### \_\_namedParameters

[`ProjectUpdateOptions`](../type-aliases/ProjectUpdateOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

---

### create()

> `static` **create**\<`M`\>(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Project.ts:91](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L91)

#### Type Parameters

• **M** _extends_ `boolean`

#### Parameters

##### \_\_namedParameters

[`ProjectCreateOptions`](../type-aliases/ProjectCreateOptions.md)\<`M`\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

---

### read()

> `static` **read**\<`M`\>(`projectPath`, `workspace`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Project.ts:150](https://github.com/jakubmazanec/tools/blob/b189bd808f93a39eacbf7e401a82a754c5ce3b63/packages/carson/source/workspace/Project.ts#L150)

#### Type Parameters

• **M** _extends_ `boolean`

#### Parameters

##### projectPath

`string`

##### workspace

[`Workspace`](Workspace.md)\<`M`\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>
