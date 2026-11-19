[**@jakubmazanec/carson**](../README.md)

---

# Class: Workspace\<M\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:49](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L49)

Workspace represent a directory, usually a git repository, that contains [Project](Project.md)
instances.

## Type Parameters

### M

`M` _extends_ `boolean` = `true`

If true, the workspace is multi-project workspace (so-called "monorepo").

## Constructors

### Constructor

> **new Workspace**\<`M`\>(`options`): `Workspace`\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:89](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L89)

#### Parameters

##### options

[`WorkspaceOptions`](../type-aliases/WorkspaceOptions.md)\<`M`\>

#### Returns

`Workspace`\<`M`\>

## Properties

### allDependencies

> **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:51](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L51)

All dependencies of all projects and workspace dependencies.

---

### config

> **config**: `object`

Defined in:
[packages/carson/source/workspace/Workspace.ts:54](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L54)

Workspace configuration; if it's not found, the default is an empty object.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### projects?

> `optional` **projects?**: `string`[]

#### template?

> `optional` **template?**: `string`

---

### dependencies

> **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:57](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L57)

Dependencies of all projects.

---

### dependencyVersions

> **dependencyVersions**: `Record`\<`string`, `string`[]\> = `{}`

Defined in:
[packages/carson/source/workspace/Workspace.ts:60](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L60)

Versions of each dependency.

---

### devDependencies

> **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:63](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L63)

Development dependencies of all projects.

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"INVALID_WORKSPACE_CONFIG"` \|
> `"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \|
> `"WORKSPACE_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"DUPLICATE_PROJECT_NAME"` \|
> `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \| `"PROJECT_GLOBS_MISMATCH"` \|
> `"UNKNOWN_ERROR"`, `WorkspaceErrorData`\>[] = `[]`

Defined in:
[packages/carson/source/workspace/Workspace.ts:66](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L66)

Errors found during reading from the file system.

---

### isMultiProject

> `readonly` **isMultiProject**: `M`

Defined in:
[packages/carson/source/workspace/Workspace.ts:69](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L69)

Does the workspace contain a multiple projects?

---

### packageJson

> **packageJson**: [`WorkspacePackageJson`](../type-aliases/WorkspacePackageJson.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:75](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L75)

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

---

### path

> `readonly` **path**: `string`

Defined in:
[packages/carson/source/workspace/Workspace.ts:78](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L78)

Workspace path.

---

### projectGlobs

> **projectGlobs**: [`WorkspaceProjectGlobs`](../type-aliases/WorkspaceProjectGlobs.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:81](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L81)

Globs used to find projects.

---

### projects

> **projects**: [`WorkspaceProjects`](../type-aliases/WorkspaceProjects.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:84](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L84)

Workspace projects.

---

### repository?

> `optional` **repository?**: [`WorkspaceRepository`](../type-aliases/WorkspaceRepository.md)

Defined in:
[packages/carson/source/workspace/Workspace.ts:87](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L87)

Workspace git repository.

## Methods

### addProject()

> **addProject**(`newProject`): `this`

Defined in:
[packages/carson/source/workspace/Workspace.ts:438](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L438)

#### Parameters

##### newProject

[`Project`](Project.md)\<`M`\>

#### Returns

`this`

---

### addProjects()

> **addProjects**(`newProjects`): `this`

Defined in:
[packages/carson/source/workspace/Workspace.ts:464](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L464)

#### Parameters

##### newProjects

[`Project`](Project.md)\<`M`\>[]

#### Returns

`this`

---

### createProject()

> **createProject**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:493](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L493)

#### Parameters

##### \_\_namedParameters

[`WorkspaceCreateProjectOptions`](../type-aliases/WorkspaceCreateProjectOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

---

### getProject()

> **getProject**(`projectName`): [`Project`](Project.md)\<`M`\> \| `undefined`

Defined in:
[packages/carson/source/workspace/Workspace.ts:532](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L532)

#### Parameters

##### projectName

`string` \| [`Project`](Project.md)\<`M`\>

#### Returns

[`Project`](Project.md)\<`M`\> \| `undefined`

---

### read()

> **read**(): `Promise`\<`Workspace`\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:542](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L542)

#### Returns

`Promise`\<`Workspace`\<`M`\>\>

---

### readProjects()

> **readProjects**(): `Promise`\<[`Project`](Project.md)\<`M`\>[]\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:675](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L675)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>[]\>

---

### sortProjects()

> `protected` **sortProjects**(): `void`

Defined in:
[packages/carson/source/workspace/Workspace.ts:707](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L707)

#### Returns

`void`

---

### update()

> **update**(`__namedParameters`): `Promise`\<`Workspace`\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:711](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L711)

#### Parameters

##### \_\_namedParameters

[`WorkspaceUpdateOptions`](../type-aliases/WorkspaceUpdateOptions.md)

#### Returns

`Promise`\<`Workspace`\<`M`\>\>

---

### updateDependencies()

> `protected` **updateDependencies**(): `void`

Defined in:
[packages/carson/source/workspace/Workspace.ts:744](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L744)

#### Returns

`void`

---

### create()

> `static` **create**(`options`): `Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:170](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L170)

Creates new workspace within the file system.

#### Parameters

##### options

[`WorkspaceCreateOptions`](../type-aliases/WorkspaceCreateOptions.md)

Options.

#### Returns

`Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>

The new workspace.

---

### find()

> `static` **find**(`searchPath`): `Promise`\<`string` \| `undefined`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:227](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L227)

Traverses file system up from the search path and tries to find a directory that is a root of a
workspace.

#### Parameters

##### searchPath

`string`

Search path.

#### Returns

`Promise`\<`string` \| `undefined`\>

Workspace path, if found.

---

### findAndRead()

> `static` **findAndRead**\<`O`\>(`searchPath`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `Workspace`\<`true`\> \| `Workspace`\<`false`\> \| `undefined` :
> `NonNullable`\<`O`\>\[`"throwIfNotFound"`\] _extends_ `true` ? `Workspace`\<`true`\> \|
> `Workspace`\<`false`\> : `Workspace`\<`true`\> \| `Workspace`\<`false`\> \| `undefined`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:295](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L295)

Traverses file system up from the search path and tries to find and read a workspace.

#### Type Parameters

##### O

`O` _extends_ [`WorkspaceFindAndReadOptions`](../type-aliases/WorkspaceFindAndReadOptions.md) \|
`undefined` = `undefined`

#### Parameters

##### searchPath

`string`

##### options?

`O`

#### Returns

`Promise`\<`O` _extends_ `undefined` ? `Workspace`\<`true`\> \| `Workspace`\<`false`\> \|
`undefined` : `NonNullable`\<`O`\>\[`"throwIfNotFound"`\] _extends_ `true` ? `Workspace`\<`true`\>
\| `Workspace`\<`false`\> : `Workspace`\<`true`\> \| `Workspace`\<`false`\> \| `undefined`\>

---

### read()

> `static` **read**(`workspacePath`): `Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:327](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/carson/source/workspace/Workspace.ts#L327)

#### Parameters

##### workspacePath

`string`

#### Returns

`Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>
