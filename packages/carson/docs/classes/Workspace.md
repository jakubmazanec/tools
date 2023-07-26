# Class: Workspace<M\>

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

• **new Workspace**<`M`\>(`options`)

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `options` | [`WorkspaceOptions`](../README.md#workspaceoptions)<`M`\> |

#### Defined in

[packages/carson/src/workspace/Workspace.ts:76](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L76)

## Properties

### allDependencies

• **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

All dependencies of all projects and workspace dependencies.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:68](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L68)

---

### config

• **config**: `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> }, `ZodUnknown`,
`"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:53](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L53)

---

### dependencies

• **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:62](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L62)

---

### dependencyVersions

• **dependencyVersions**: `Record`<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:71](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L71)

---

### devDependencies

• **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Development dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:65](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L65)

---

### errors

• **errors**: `CustomErrorWithData`<`"UNKNOWN_ERROR"` \| `"INVALID_PACKAGE_JSON"` \|
`"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`,
`WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:74](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L74)

---

### isMultiProject

• `Readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Defined in

[packages/carson/src/workspace/Workspace.ts:44](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L44)

---

### packageJson

• **packageJson**: [`WorkspacePackageJson`](../README.md#workspacepackagejson)<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:56](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L56)

---

### path

• `Readonly` **path**: `string`

Workspace path.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:41](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L41)

---

### projectGlobs

• **projectGlobs**: [`WorkspaceProjectGlobs`](../README.md#workspaceprojectglobs)<`M`\>

Globs used to find projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:47](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L47)

---

### projects

• **projects**: [`WorkspaceProjects`](../README.md#workspaceprojects)<`M`\>

Workspace projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:50](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L50)

---

### repository

• `Optional` **repository**: [`WorkspaceRepository`](../README.md#workspacerepository)

Workspace git repository.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:59](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L59)

## Methods

### addProject

▸ **addProject**(`newProject`): [`Workspace`](Workspace.md)<`M`\>

#### Parameters

| Name         | Type                          |
| :----------- | :---------------------------- |
| `newProject` | [`Project`](Project.md)<`M`\> |

#### Returns

[`Workspace`](Workspace.md)<`M`\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:537](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L537)

---

### addProjects

▸ **addProjects**(`newProjects`): [`Workspace`](Workspace.md)<`M`\>

#### Parameters

| Name          | Type                            |
| :------------ | :------------------------------ |
| `newProjects` | [`Project`](Project.md)<`M`\>[] |

#### Returns

[`Workspace`](Workspace.md)<`M`\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:563](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L563)

---

### createProject

▸ **createProject**(`«destructured»`): `Promise`<[`Project`](Project.md)<`M`\>\>

#### Parameters

| Name             | Type                                                                          |
| :--------------- | :---------------------------------------------------------------------------- |
| `«destructured»` | [`WorkspaceCreateProjectOptions`](../README.md#workspacecreateprojectoptions) |

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:498](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L498)

---

### getProject

▸ **getProject**(`projectName`): `undefined` \| [`Project`](Project.md)<`M`\>

#### Parameters

| Name          | Type                                      |
| :------------ | :---------------------------------------- |
| `projectName` | `string` \| [`Project`](Project.md)<`M`\> |

#### Returns

`undefined` \| [`Project`](Project.md)<`M`\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:488](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L488)

---

### read

▸ **read**(): `Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:342](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L342)

---

### readProjects

▸ **readProjects**(): `Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:592](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L592)

---

### sortProjects

▸ `Protected` **sortProjects**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:617](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L617)

---

### update

▸ **update**(`«destructured»`): `Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Parameters

| Name             | Type                                                            |
| :--------------- | :-------------------------------------------------------------- |
| `«destructured»` | [`WorkspaceUpdateOptions`](../README.md#workspaceupdateoptions) |

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:460](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L460)

---

### updateDependencies

▸ `Protected` **updateDependencies**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:621](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L621)

---

### create

▸ `Static` **create**(`options`): `Promise`<[`Workspace`](Workspace.md)<`true`\> \|
[`Workspace`](Workspace.md)<`false`\>\>

Creates new workspace within the file system.

#### Parameters

| Name      | Type                                                            | Description |
| :-------- | :-------------------------------------------------------------- | :---------- |
| `options` | [`WorkspaceCreateOptions`](../README.md#workspacecreateoptions) | Options.    |

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`true`\> \| [`Workspace`](Workspace.md)<`false`\>\>

The new workspace.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:157](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L157)

---

### find

▸ `Static` **find**(`searchPath`): `Promise`<`undefined` \| `string`\>

Traverses file system up from the search path and tries to find a directory that is a root of a
workspace.

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `searchPath` | `string` |

#### Returns

`Promise`<`undefined` \| `string`\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:261](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L261)

---

### findAndRead

▸ `Static` **findAndRead**<`O`\>(`searchPath`, `options?`): `Promise`<`O` extends `undefined` ?
`undefined` \| [`Workspace`](Workspace.md)<`true`\> \| [`Workspace`](Workspace.md)<`false`\> :
`NonNullable`<`O`\>[``"throwIfNotFound"``] extends `true` ? [`Workspace`](Workspace.md)<`true`\> \|
[`Workspace`](Workspace.md)<`false`\> : `undefined` \| [`Workspace`](Workspace.md)<`true`\> \|
[`Workspace`](Workspace.md)<`false`\>\>

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

`Promise`<`O` extends `undefined` ? `undefined` \| [`Workspace`](Workspace.md)<`true`\> \|
[`Workspace`](Workspace.md)<`false`\> : `NonNullable`<`O`\>[``"throwIfNotFound"``] extends `true` ?
[`Workspace`](Workspace.md)<`true`\> \| [`Workspace`](Workspace.md)<`false`\> : `undefined` \|
[`Workspace`](Workspace.md)<`true`\> \| [`Workspace`](Workspace.md)<`false`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:304](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L304)

---

### read

▸ `Static` **read**(`workspacePath`): `Promise`<[`Workspace`](Workspace.md)<`true`\> \|
[`Workspace`](Workspace.md)<`false`\>\>

#### Parameters

| Name            | Type     |
| :-------------- | :------- |
| `workspacePath` | `string` |

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`true`\> \| [`Workspace`](Workspace.md)<`false`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:199](https://github.com/jakubmazanec/js-tools/blob/6c3a1f2/packages/carson/src/workspace/Workspace.ts#L199)
