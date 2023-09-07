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

[packages/carson/src/workspace/Workspace.ts:77](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L77)

## Properties

### allDependencies

• **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

All dependencies of all projects and workspace dependencies.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:69](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L69)

---

### config

• **config**: `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> }, `ZodUnknown`,
`"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:54](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L54)

---

### dependencies

• **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:63](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L63)

---

### dependencyVersions

• **dependencyVersions**: `Record`<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:72](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L72)

---

### devDependencies

• **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)<`M`\>

Development dependencies of all projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:66](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L66)

---

### errors

• **errors**: `CustomErrorWithData`<`"UNKNOWN_ERROR"` \| `"INVALID_PACKAGE_JSON"` \|
`"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
`"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
`"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`,
`WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:75](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L75)

---

### isMultiProject

• `Readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Defined in

[packages/carson/src/workspace/Workspace.ts:45](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L45)

---

### packageJson

• **packageJson**: [`WorkspacePackageJson`](../README.md#workspacepackagejson)<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:57](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L57)

---

### path

• `Readonly` **path**: `string`

Workspace path.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:42](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L42)

---

### projectGlobs

• **projectGlobs**: [`WorkspaceProjectGlobs`](../README.md#workspaceprojectglobs)<`M`\>

Globs used to find projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:48](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L48)

---

### projects

• **projects**: [`WorkspaceProjects`](../README.md#workspaceprojects)<`M`\>

Workspace projects.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:51](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L51)

---

### repository

• `Optional` **repository**: [`WorkspaceRepository`](../README.md#workspacerepository)

Workspace git repository.

#### Defined in

[packages/carson/src/workspace/Workspace.ts:60](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L60)

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

[packages/carson/src/workspace/Workspace.ts:554](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L554)

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

[packages/carson/src/workspace/Workspace.ts:580](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L580)

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

[packages/carson/src/workspace/Workspace.ts:515](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L515)

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

[packages/carson/src/workspace/Workspace.ts:505](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L505)

---

### read

▸ **read**(): `Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Returns

`Promise`<[`Workspace`](Workspace.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:359](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L359)

---

### readProjects

▸ **readProjects**(): `Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>[]\>

#### Defined in

[packages/carson/src/workspace/Workspace.ts:609](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L609)

---

### sortProjects

▸ `Protected` **sortProjects**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:638](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L638)

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

[packages/carson/src/workspace/Workspace.ts:477](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L477)

---

### updateDependencies

▸ `Protected` **updateDependencies**(): `void`

#### Returns

`void`

#### Defined in

[packages/carson/src/workspace/Workspace.ts:642](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L642)

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

[packages/carson/src/workspace/Workspace.ts:158](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L158)

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

[packages/carson/src/workspace/Workspace.ts:278](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L278)

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

[packages/carson/src/workspace/Workspace.ts:321](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L321)

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

[packages/carson/src/workspace/Workspace.ts:200](https://github.com/jakubmazanec/js-tools/blob/26e3dc9/packages/carson/src/workspace/Workspace.ts#L200)
