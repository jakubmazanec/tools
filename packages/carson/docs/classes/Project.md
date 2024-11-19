[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Class: Project\<M\>

Project represent a self-contained piece of software (e.g. a package, or an app) that is part of a
[Workspace](Workspace.md). Currently only Node.js projects are supported.

## Type Parameters

• **M** _extends_ `boolean` = `true`

If true, the project belongs to a multi-project workspace.

## Constructors

### new Project()

> **new Project**\<`M`\>(`__namedParameters`): [`Project`](Project.md)\<`M`\>

#### Parameters

• **\_\_namedParameters**: [`ProjectOptions`](../type-aliases/ProjectOptions.md)\<`M`\>

#### Returns

[`Project`](Project.md)\<`M`\>

#### Defined in

[packages/carson/source/workspace/Project.ts:51](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L51)

## Properties

### config

> **config**: `objectOutputType`\<`object`, `ZodUnknown`, `"strip"`\>

Project configuration; if it's not found, the default is an empty object.

#### Type declaration

##### template

> **template**: `ZodOptional`\<`ZodString`\>

#### Defined in

[packages/carson/source/workspace/Project.ts:40](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L40)

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
> `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"`, `ProjectErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/source/workspace/Project.ts:49](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L49)

---

### name?

> `optional` **name**: `string`

Project name.

#### Defined in

[packages/carson/source/workspace/Project.ts:31](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L31)

---

### packageJson

> **packageJson**: `object`

Parsed project `package.json` file; if it's not found, the default is an empty object.

#### author?

> `optional` **author**: `string` \| `object`

#### bin?

> `optional` **bin**: `string` \| `Record`\<`string`, `string`\>

#### browser?

> `optional` **browser**: `string` \| `Record`\<`string`, `string` \| `false`\>

#### bugs?

> `optional` **bugs**: `string` \| `object`

#### bundledDependencies?

> `optional` **bundledDependencies**: `boolean` \| `string`[]

#### bundleDependencies?

> `optional` **bundleDependencies**: `boolean` \| `string`[]

#### config?

> `optional` **config**: `Record`\<`string`, `unknown`\>

#### contributors?

> `optional` **contributors**: (`string` \| `object`)[]

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

#### directories.bin?

> `optional` **bin**: `string`

#### directories.doc?

> `optional` **doc**: `string`

#### directories.example?

> `optional` **example**: `string`

#### directories.lib?

> `optional` **lib**: `string`

#### directories.man?

> `optional` **man**: `string`

#### directories.v?

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

> `optional` **funding**: `string` \| `object` \| (`string` \| `object`)[]

#### homepage?

> `optional` **homepage**: `string`

#### keywords?

> `optional` **keywords**: `string`[]

#### license?

> `optional` **license**: `string`

#### main?

> `optional` **main**: `string`

#### maintainers?

> `optional` **maintainers**: (`string` \| `object`)[]

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

> `optional` **peerDependenciesMeta**: `Record`\<`string`, `object`\>

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

> `optional` **repository**: `string` \| `object`

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

> `optional` **workspaces**: `string`[] \| `object`

#### Defined in

[packages/carson/source/workspace/Project.ts:43](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L43)

---

### path

> **path**: `string`

Project path.

#### Defined in

[packages/carson/source/workspace/Project.ts:34](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L34)

---

### relativePath

> **relativePath**: `string`

Project path relative to workspace path.

#### Defined in

[packages/carson/source/workspace/Project.ts:37](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L37)

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)\<`M`\>

Parent [Workspace](Workspace.md) instance.

#### Defined in

[packages/carson/source/workspace/Project.ts:46](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L46)

## Methods

### read()

> **read**(): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Project.ts:164](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L164)

---

### update()

> **update**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Parameters

• **\_\_namedParameters**: [`ProjectUpdateOptions`](../type-aliases/ProjectUpdateOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Project.ts:245](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L245)

---

### create()

> `static` **create**\<`M`\>(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Type Parameters

• **M** _extends_ `boolean`

#### Parameters

• **\_\_namedParameters**: [`ProjectCreateOptions`](../type-aliases/ProjectCreateOptions.md)\<`M`\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Project.ts:91](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L91)

---

### read()

> `static` **read**\<`M`\>(`projectPath`, `workspace`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Type Parameters

• **M** _extends_ `boolean`

#### Parameters

• **projectPath**: `string`

• **workspace**: [`Workspace`](Workspace.md)\<`M`\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Project.ts:150](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/Project.ts#L150)
