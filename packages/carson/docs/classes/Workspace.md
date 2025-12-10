[**@jakubmazanec/carson**](../README.md)

---

# Class: Workspace\<M\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:48](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L48)

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
[packages/carson/source/workspace/Workspace.ts:85](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L85)

#### Parameters

##### options

[`WorkspaceOptions`](../type-aliases/WorkspaceOptions.md)\<`M`\>

#### Returns

`Workspace`\<`M`\>

## Properties

### allDependencies

> **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:77](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L77)

All dependencies of all projects and workspace dependencies.

---

### config

> **config**: `object`

Defined in:
[packages/carson/source/workspace/Workspace.ts:62](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L62)

Workspace configuration; if it's not found, the default is an empty object.

#### Index Signature

\[`key`: `string`\]: `unknown`

#### projects?

> `optional` **projects**: `string`[]

#### template?

> `optional` **template**: `string`

---

### dependencies

> **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:71](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L71)

Dependencies of all projects.

---

### dependencyVersions

> **dependencyVersions**: `Record`\<`string`, `string`[]\> = `{}`

Defined in:
[packages/carson/source/workspace/Workspace.ts:80](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L80)

Versions of each dependency.

---

### devDependencies

> **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:74](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L74)

Development dependencies of all projects.

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
> `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
> `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
> `"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>[] = `[]`

Defined in:
[packages/carson/source/workspace/Workspace.ts:83](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L83)

Errors found during reading from the file system.

---

### isMultiProject

> `readonly` **isMultiProject**: `M`

Defined in:
[packages/carson/source/workspace/Workspace.ts:53](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L53)

Does the workspace contain a multiple projects?

---

### packageJson

> **packageJson**: [`WorkspacePackageJson`](../type-aliases/WorkspacePackageJson.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:65](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L65)

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

---

### path

> `readonly` **path**: `string`

Defined in:
[packages/carson/source/workspace/Workspace.ts:50](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L50)

Workspace path.

---

### projectGlobs

> **projectGlobs**: [`WorkspaceProjectGlobs`](../type-aliases/WorkspaceProjectGlobs.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:56](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L56)

Globs used to find projects.

---

### projects

> **projects**: [`WorkspaceProjects`](../type-aliases/WorkspaceProjects.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:59](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L59)

Workspace projects.

---

### repository?

> `optional` **repository**: [`WorkspaceRepository`](../type-aliases/WorkspaceRepository.md)

Defined in:
[packages/carson/source/workspace/Workspace.ts:68](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L68)

Workspace git repository.

## Methods

### addProject()

> **addProject**(`newProject`): `this`

Defined in:
[packages/carson/source/workspace/Workspace.ts:646](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L646)

#### Parameters

##### newProject

[`Project`](Project.md)\<`M`\>

#### Returns

`this`

---

### addProjects()

> **addProjects**(`newProjects`): `this`

Defined in:
[packages/carson/source/workspace/Workspace.ts:672](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L672)

#### Parameters

##### newProjects

[`Project`](Project.md)\<`M`\>[]

#### Returns

`this`

---

### createProject()

> **createProject**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:607](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L607)

#### Parameters

##### \_\_namedParameters

[`WorkspaceCreateProjectOptions`](../type-aliases/WorkspaceCreateProjectOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

---

### getProject()

> **getProject**(`projectName`): [`Project`](Project.md)\<`M`\> \| `undefined`

Defined in:
[packages/carson/source/workspace/Workspace.ts:597](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L597)

#### Parameters

##### projectName

`string` | [`Project`](Project.md)\<`M`\>

#### Returns

[`Project`](Project.md)\<`M`\> \| `undefined`

---

### read()

> **read**(): `Promise`\<`Workspace`\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:430](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L430)

#### Returns

`Promise`\<`Workspace`\<`M`\>\>

---

### readProjects()

> **readProjects**(): `Promise`\<[`Project`](Project.md)\<`M`\>[]\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:701](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L701)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>[]\>

---

### sortProjects()

> `protected` **sortProjects**(): `void`

Defined in:
[packages/carson/source/workspace/Workspace.ts:733](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L733)

#### Returns

`void`

---

### update()

> **update**(`__namedParameters`): `Promise`\<`Workspace`\<`M`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:564](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L564)

#### Parameters

##### \_\_namedParameters

[`WorkspaceUpdateOptions`](../type-aliases/WorkspaceUpdateOptions.md)

#### Returns

`Promise`\<`Workspace`\<`M`\>\>

---

### updateDependencies()

> `protected` **updateDependencies**(): `void`

Defined in:
[packages/carson/source/workspace/Workspace.ts:737](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L737)

#### Returns

`void`

---

### create()

> `static` **create**(`options`): `Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>

Defined in:
[packages/carson/source/workspace/Workspace.ts:166](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L166)

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
[packages/carson/source/workspace/Workspace.ts:332](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L332)

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
[packages/carson/source/workspace/Workspace.ts:398](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L398)

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
[packages/carson/source/workspace/Workspace.ts:215](https://github.com/jakubmazanec/tools/blob/41b90f78a6cdd100265d6cc83fa0c8987adba075/packages/carson/source/workspace/Workspace.ts#L215)

#### Parameters

##### workspacePath

`string`

#### Returns

`Promise`\<`Workspace`\<`true`\> \| `Workspace`\<`false`\>\>
