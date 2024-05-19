# Class: Workspace\<M\>

Workspace represent a directory, usually a git repository, that contains [Project](Project.md)
instances.

## Type parameters

| Name | Type                       | Description                                                               |
| :--- | :------------------------- | :------------------------------------------------------------------------ |
| `M`  | extends `boolean` = `true` | If true, the workspace is multi-project workspace (so-called "monorepo"). |

## Table of contents

### Constructors

- [constructor](Workspace.md#constructor)

### Properties

- [allDependencies](Workspace.md#alldependencies)
- [config](Workspace.md#config)
- [dependencies](Workspace.md#dependencies)
- [dependencyVersions](Workspace.md#dependencyversions)
- [devDependencies](Workspace.md#devdependencies)
- [errors](Workspace.md#errors)
- [isMultiProject](Workspace.md#ismultiproject)
- [packageJson](Workspace.md#packagejson)
- [path](Workspace.md#path)
- [projectGlobs](Workspace.md#projectglobs)
- [projects](Workspace.md#projects)
- [repository](Workspace.md#repository)

### Methods

- [addProject](Workspace.md#addproject)
- [addProjects](Workspace.md#addprojects)
- [createProject](Workspace.md#createproject)
- [getProject](Workspace.md#getproject)
- [read](Workspace.md#read)
- [readProjects](Workspace.md#readprojects)
- [sortProjects](Workspace.md#sortprojects)
- [update](Workspace.md#update)
- [updateDependencies](Workspace.md#updatedependencies)
- [create](Workspace.md#create)
- [find](Workspace.md#find)
- [findAndRead](Workspace.md#findandread)
- [read](Workspace.md#read-1)

## Constructors

### constructor

• **new Workspace**\<`M`\>(`options`): [`Workspace`](Workspace.md)\<`M`\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                       |
| :-------- | :--------------------------------------------------------- |
| `options` | [`WorkspaceOptions`](../README.md#workspaceoptions)\<`M`\> |

#### Returns

[`Workspace`](Workspace.md)\<`M`\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:84](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L84)

## Properties

### allDependencies

• **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

All dependencies of all projects and workspace dependencies.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:76](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L76)

---

### config

• **config**: `objectOutputType`\<\{ `template`: `ZodOptional`\<`ZodString`\> }, `ZodUnknown`,
`"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:61](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L61)

---

### dependencies

• **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Dependencies of all projects.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:70](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L70)

---

### dependencyVersions

• **dependencyVersions**: `Record`\<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:79](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L79)

---

### devDependencies

• **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Development dependencies of all projects.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:73](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L73)

---

### errors

• **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`,
`WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:82](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L82)

---

### isMultiProject

• `Readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Defined in

[packages/carson/source/workspace/Workspace.ts:52](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L52)

---

### packageJson

• **packageJson**: [`WorkspacePackageJson`](../README.md#workspacepackagejson)\<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:64](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L64)

---

### path

• `Readonly` **path**: `string`

Workspace path.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:49](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L49)

---

### projectGlobs

• **projectGlobs**: [`WorkspaceProjectGlobs`](../README.md#workspaceprojectglobs)\<`M`\>

Globs used to find projects.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:55](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L55)

---

### projects

• **projects**: [`WorkspaceProjects`](../README.md#workspaceprojects)\<`M`\>

Workspace projects.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:58](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L58)

---

### repository

• `Optional` **repository**: [`WorkspaceRepository`](../README.md#workspacerepository)

Workspace git repository.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:67](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L67)

## Methods

### addProject

▸ **addProject**(`newProject`): `this`

#### Parameters

| Name         | Type                           |
| :----------- | :----------------------------- |
| `newProject` | [`Project`](Project.md)\<`M`\> |

#### Returns

`this`

#### Defined in

[packages/carson/source/workspace/Workspace.ts:573](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L573)

---

### addProjects

▸ **addProjects**(`newProjects`): `this`

#### Parameters

| Name          | Type                             |
| :------------ | :------------------------------- |
| `newProjects` | [`Project`](Project.md)\<`M`\>[] |

#### Returns

`this`

#### Defined in

[packages/carson/source/workspace/Workspace.ts:599](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L599)

---

### createProject

▸ **createProject**(`«destructured»`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Parameters

| Name             | Type                                                                          |
| :--------------- | :---------------------------------------------------------------------------- |
| `«destructured»` | [`WorkspaceCreateProjectOptions`](../README.md#workspacecreateprojectoptions) |

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:534](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L534)

---

### getProject

▸ **getProject**(`projectName`): `undefined` \| [`Project`](Project.md)\<`M`\>

#### Parameters

| Name          | Type                                       |
| :------------ | :----------------------------------------- |
| `projectName` | `string` \| [`Project`](Project.md)\<`M`\> |

#### Returns

`undefined` \| [`Project`](Project.md)\<`M`\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:524](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L524)

---

### read

▸ **read**(): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:373](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L373)

---

### readProjects

▸ **readProjects**(): `Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:628](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L628)

---

### sortProjects

▸ **sortProjects**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/source/workspace/Workspace.ts:660](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L660)

---

### update

▸ **update**(`«destructured»`): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `«destructured»` | [`WorkspaceUpdateOptions`](../README.md#workspaceupdateoptions) |

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:491](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L491)

---

### updateDependencies

▸ **updateDependencies**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/source/workspace/Workspace.ts:664](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L664)

---

### create

▸ **create**(`options`): `Promise`\<[`Workspace`](Workspace.md)\<`true`\> \|
[`Workspace`](Workspace.md)\<`false`\>\>

Creates new workspace within the file system.

#### Parameters

| Name      | Type                                                            | Description |
| :-------- | :-------------------------------------------------------------- | :---------- |
| `options` | [`WorkspaceCreateOptions`](../README.md#workspacecreateoptions) | Options.    |

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

The new workspace.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:165](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L165)

---

### find

▸ **find**(`searchPath`): `Promise`\<`undefined` \| `string`\>

Traverses file system up from the search path and tries to find a directory that is a root of a
workspace.

#### Parameters

| Name         | Type     | Description  |
| :----------- | :------- | :----------- |
| `searchPath` | `string` | Search path. |

#### Returns

`Promise`\<`undefined` \| `string`\>

Workspace path, if found.

#### Defined in

[packages/carson/source/workspace/Workspace.ts:295](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L295)

---

### findAndRead

▸ **findAndRead**\<`O`\>(`searchPath`, `options?`): `Promise`\<`O` extends `undefined` ? `undefined`
\| [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\> :
`NonNullable`\<`O`\>[``"throwIfNotFound"``] extends `true` ? [`Workspace`](Workspace.md)\<`true`\>
\| [`Workspace`](Workspace.md)\<`false`\> : `undefined` \| [`Workspace`](Workspace.md)\<`true`\> \|
[`Workspace`](Workspace.md)\<`false`\>\>

Traverses file system up from the search path and tries to find and read a workspace.

#### Type parameters

| Name | Type                                                                                                           |
| :--- | :------------------------------------------------------------------------------------------------------------- |
| `O`  | extends `undefined` \| [`WorkspaceFindAndReadOptions`](../README.md#workspacefindandreadoptions) = `undefined` |

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `searchPath` | `string` |
| `options?`   | `O`      |

#### Returns

`Promise`\<`O` extends `undefined` ? `undefined` \| [`Workspace`](Workspace.md)\<`true`\> \|
[`Workspace`](Workspace.md)\<`false`\> : `NonNullable`\<`O`\>[``"throwIfNotFound"``] extends `true`
? [`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\> : `undefined` \|
[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:341](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L341)

---

### read

▸ **read**(`workspacePath`): `Promise`\<[`Workspace`](Workspace.md)\<`true`\> \|
[`Workspace`](Workspace.md)\<`false`\>\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `workspacePath` | `string` |

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

#### Defined in

[packages/carson/source/workspace/Workspace.ts:214](https://github.com/jakubmazanec/js-tools/blob/4ba566f/packages/carson/source/workspace/Workspace.ts#L214)
