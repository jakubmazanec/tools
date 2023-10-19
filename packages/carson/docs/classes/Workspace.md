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

[packages/carson/src/workspace/Workspace.ts:83](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L83)

## Properties

### allDependencies

• **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

All dependencies of all projects and workspace dependencies.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:75](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L75)

---

### config

• **config**: `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> }, `ZodUnknown`,
`"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:60](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L60)

---

### dependencies

• **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:69](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L69)

---

### dependencyVersions

• **dependencyVersions**: `Record`<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:78](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L78)

---

### devDependencies

• **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Development dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:72](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L72)

---

### errors

• **errors**: `CustomErrorWithData`<`"UNKNOWN_ERROR"` \| `"INVALID_PACKAGE_JSON"` \|
`"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`,
`WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:81](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L81)

---

### isMultiProject

• `Readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Defined in

[packages/carson/src/workspace/Workspace.ts:51](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L51)

---

### packageJson

• **packageJson**: [`WorkspacePackageJson`](../README.md#workspacepackagejson)<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:63](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L63)

---

### path

• `Readonly` **path**: `string`

Workspace path.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:48](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L48)

---

### projectGlobs

• **projectGlobs**: [`WorkspaceProjectGlobs`](../README.md#workspaceprojectglobs)<`M`\>

Globs used to find projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:54](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L54)

---

### projects

• **projects**: [`WorkspaceProjects`](../README.md#workspaceprojects)<`M`\>

Workspace projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:57](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L57)

---

### repository

• `Optional` **repository**: [`WorkspaceRepository`](../README.md#workspacerepository)

Workspace git repository.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:66](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L66)

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

[packages/carson/src/workspace/Workspace.ts:568](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L568)

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

[packages/carson/src/workspace/Workspace.ts:594](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L594)

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

[packages/carson/src/workspace/Workspace.ts:529](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L529)

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

[packages/carson/src/workspace/Workspace.ts:519](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L519)

---

### read

▸ **read**(): `Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:372](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L372)

---

### readProjects

▸ **readProjects**(): `Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:623](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L623)

---

### sortProjects

▸ `Protected` **sortProjects**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:655](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L655)

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

[packages/carson/src/workspace/Workspace.ts:490](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L490)

---

### updateDependencies

▸ `Protected` **updateDependencies**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:659](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L659)

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

[packages/carson/src/workspace/Workspace.ts:164](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L164)

---

### find

▸ `Static` **find**(`searchPath`): `Promise`<`undefined` \| `string`\>

Traverses file system up from the search path and tries to find a directory that is a root of a
workspace.

#### Parameters

| Name         | Type     | Description  |
| :----------- | :------- | :----------- |
| `searchPath` | `string` | Search path. |

#### Returns

`Promise`<`undefined` \| `string`\>

Workspace path, if found.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:288](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L288)

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

[packages/carson/src/workspace/Workspace.ts:334](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L334)

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

[packages/carson/src/workspace/Workspace.ts:207](https://github.com/jakubmazanec/js-tools/blob/833790c/packages/carson/src/workspace/Workspace.ts#L207)
