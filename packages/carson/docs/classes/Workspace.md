[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Class: Workspace\<M\>

Workspace represent a directory, usually a git repository, that contains [Project](Project.md)
instances.

## Type parameters

• **M** _extends_ `boolean` = `true`

If true, the workspace is multi-project workspace (so-called "monorepo").

## Constructors

### new Workspace()

> **new Workspace**\<`M`\>(`options`): [`Workspace`](Workspace.md)\<`M`\>

#### Parameters

• **options**: [`WorkspaceOptions`](../type-aliases/WorkspaceOptions.md)\<`M`\>

#### Returns

[`Workspace`](Workspace.md)\<`M`\>

#### Source

[packages/carson/source/workspace/Workspace.ts:84](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L84)

## Properties

### allDependencies

> **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

All dependencies of all projects and workspace dependencies.

#### Source

[packages/carson/source/workspace/Workspace.ts:76](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L76)

---

### config

> **config**: `objectOutputType`\<`object`, `ZodUnknown`, `"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Type declaration

##### template

> **template**: `ZodOptional`\<`ZodString`\>

#### Source

[packages/carson/source/workspace/Workspace.ts:61](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L61)

---

### dependencies

> **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Dependencies of all projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:70](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L70)

---

### dependencyVersions

> **dependencyVersions**: `Record`\<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Source

[packages/carson/source/workspace/Workspace.ts:79](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L79)

---

### devDependencies

> **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Development dependencies of all projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:73](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L73)

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
> `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
> `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`,
> `WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Source

[packages/carson/source/workspace/Workspace.ts:82](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L82)

---

### isMultiProject

> `readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Source

[packages/carson/source/workspace/Workspace.ts:52](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L52)

---

### packageJson

> **packageJson**: [`WorkspacePackageJson`](../type-aliases/WorkspacePackageJson.md)\<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Source

[packages/carson/source/workspace/Workspace.ts:64](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L64)

---

### path

> `readonly` **path**: `string`

Workspace path.

#### Source

[packages/carson/source/workspace/Workspace.ts:49](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L49)

---

### projectGlobs

> **projectGlobs**: [`WorkspaceProjectGlobs`](../type-aliases/WorkspaceProjectGlobs.md)\<`M`\>

Globs used to find projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:55](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L55)

---

### projects

> **projects**: [`WorkspaceProjects`](../type-aliases/WorkspaceProjects.md)\<`M`\>

Workspace projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:58](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L58)

---

### repository?

> `optional` **repository**: [`WorkspaceRepository`](../type-aliases/WorkspaceRepository.md)

Workspace git repository.

#### Source

[packages/carson/source/workspace/Workspace.ts:67](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L67)

## Methods

### addProject()

> **addProject**(`newProject`): `this`

#### Parameters

• **newProject**: [`Project`](Project.md)\<`M`\>

#### Returns

`this`

#### Source

[packages/carson/source/workspace/Workspace.ts:573](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L573)

---

### addProjects()

> **addProjects**(`newProjects`): `this`

#### Parameters

• **newProjects**: [`Project`](Project.md)\<`M`\>[]

#### Returns

`this`

#### Source

[packages/carson/source/workspace/Workspace.ts:599](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L599)

---

### createProject()

> **createProject**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Parameters

• **\_\_namedParameters**:
[`WorkspaceCreateProjectOptions`](../type-aliases/WorkspaceCreateProjectOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:534](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L534)

---

### getProject()

> **getProject**(`projectName`): `undefined` \| [`Project`](Project.md)\<`M`\>

#### Parameters

• **projectName**: `string` \| [`Project`](Project.md)\<`M`\>

#### Returns

`undefined` \| [`Project`](Project.md)\<`M`\>

#### Source

[packages/carson/source/workspace/Workspace.ts:524](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L524)

---

### read()

> **read**(): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:373](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L373)

---

### readProjects()

> **readProjects**(): `Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Source

[packages/carson/source/workspace/Workspace.ts:628](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L628)

---

### sortProjects()

> `protected` **sortProjects**(): `void`

#### Returns

`void`

#### Source

[packages/carson/source/workspace/Workspace.ts:660](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L660)

---

### update()

> **update**(`__namedParameters`): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Parameters

• **\_\_namedParameters**: [`WorkspaceUpdateOptions`](../type-aliases/WorkspaceUpdateOptions.md)

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:491](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L491)

---

### updateDependencies()

> `protected` **updateDependencies**(): `void`

#### Returns

`void`

#### Source

[packages/carson/source/workspace/Workspace.ts:664](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L664)

---

### create()

> `static` **create**(`options`): `Promise`\<[`Workspace`](Workspace.md)\<`true`\> \|
> [`Workspace`](Workspace.md)\<`false`\>\>

Creates new workspace within the file system.

#### Parameters

• **options**: [`WorkspaceCreateOptions`](../type-aliases/WorkspaceCreateOptions.md)

Options.

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

The new workspace.

#### Source

[packages/carson/source/workspace/Workspace.ts:165](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L165)

---

### find()

> `static` **find**(`searchPath`): `Promise`\<`undefined` \| `string`\>

Traverses file system up from the search path and tries to find a directory that is a root of a
workspace.

#### Parameters

• **searchPath**: `string`

Search path.

#### Returns

`Promise`\<`undefined` \| `string`\>

Workspace path, if found.

#### Source

[packages/carson/source/workspace/Workspace.ts:295](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L295)

---

### findAndRead()

> `static` **findAndRead**\<`O`\>(`searchPath`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> `undefined` \| [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\> :
> `NonNullable`\<`O`\>\[`"throwIfNotFound"`\] _extends_ `true` ?
> [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\> : `undefined` \|
> [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

Traverses file system up from the search path and tries to find and read a workspace.

#### Type parameters

• **O** _extends_ `undefined` \|
[`WorkspaceFindAndReadOptions`](../type-aliases/WorkspaceFindAndReadOptions.md) = `undefined`

#### Parameters

• **searchPath**: `string`

• **options?**: `O`

#### Returns

`Promise`\<`O` _extends_ `undefined` ? `undefined` \| [`Workspace`](Workspace.md)\<`true`\> \|
[`Workspace`](Workspace.md)\<`false`\> : `NonNullable`\<`O`\>\[`"throwIfNotFound"`\] _extends_
`true` ? [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\> :
`undefined` \| [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:341](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L341)

---

### read()

> `static` **read**(`workspacePath`): `Promise`\<[`Workspace`](Workspace.md)\<`true`\> \|
> [`Workspace`](Workspace.md)\<`false`\>\>

#### Parameters

• **workspacePath**: `string`

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:214](https://github.com/jakubmazanec/js-tools/blob/51bfc5b913a7a7ef21d8d702a0d87d72983e112a/packages/carson/source/workspace/Workspace.ts#L214)
