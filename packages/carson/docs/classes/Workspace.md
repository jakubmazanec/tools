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

[packages/carson/source/workspace/Workspace.ts:85](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L85)

## Properties

### allDependencies

> **allDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

All dependencies of all projects and workspace dependencies.

#### Source

[packages/carson/source/workspace/Workspace.ts:77](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L77)

---

### config

> **config**: `objectOutputType`\<`object`, `ZodUnknown`, `"strip"`\>

Workspace configuration; if it's not found, the default is an empty object.

#### Type declaration

##### projects

> **projects**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

##### template

> **template**: `ZodOptional`\<`ZodString`\>

#### Source

[packages/carson/source/workspace/Workspace.ts:62](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L62)

---

### dependencies

> **dependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Dependencies of all projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:71](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L71)

---

### dependencyVersions

> **dependencyVersions**: `Record`\<`string`, `string`[]\> = `{}`

Versions of each dependency.

#### Source

[packages/carson/source/workspace/Workspace.ts:80](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L80)

---

### devDependencies

> **devDependencies**: [`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Development dependencies of all projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:74](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L74)

---

### errors

> **errors**: `CustomErrorWithData`\<`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
> `"UNKNOWN_ERROR"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \|
> `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \|
> `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` \|
> `"PROJECT_GLOBS_MISMATCH"`, `WorkspaceErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Source

[packages/carson/source/workspace/Workspace.ts:83](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L83)

---

### isMultiProject

> `readonly` **isMultiProject**: `M`

Does the workspace contain a multiple projects?

#### Source

[packages/carson/source/workspace/Workspace.ts:53](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L53)

---

### packageJson

> **packageJson**: [`WorkspacePackageJson`](../type-aliases/WorkspacePackageJson.md)\<`M`\>

Parsed workspace `package.json` file (if the workspace contains multiple projects); if it's not
found, the default is an empty object.

#### Source

[packages/carson/source/workspace/Workspace.ts:65](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L65)

---

### path

> `readonly` **path**: `string`

Workspace path.

#### Source

[packages/carson/source/workspace/Workspace.ts:50](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L50)

---

### projectGlobs

> **projectGlobs**: [`WorkspaceProjectGlobs`](../type-aliases/WorkspaceProjectGlobs.md)\<`M`\>

Globs used to find projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:56](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L56)

---

### projects

> **projects**: [`WorkspaceProjects`](../type-aliases/WorkspaceProjects.md)\<`M`\>

Workspace projects.

#### Source

[packages/carson/source/workspace/Workspace.ts:59](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L59)

---

### repository?

> `optional` **repository**: [`WorkspaceRepository`](../type-aliases/WorkspaceRepository.md)

Workspace git repository.

#### Source

[packages/carson/source/workspace/Workspace.ts:68](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L68)

## Methods

### addProject()

> **addProject**(`newProject`): `this`

#### Parameters

• **newProject**: [`Project`](Project.md)\<`M`\>

#### Returns

`this`

#### Source

[packages/carson/source/workspace/Workspace.ts:646](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L646)

---

### addProjects()

> **addProjects**(`newProjects`): `this`

#### Parameters

• **newProjects**: [`Project`](Project.md)\<`M`\>[]

#### Returns

`this`

#### Source

[packages/carson/source/workspace/Workspace.ts:672](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L672)

---

### createProject()

> **createProject**(`__namedParameters`): `Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Parameters

• **\_\_namedParameters**:
[`WorkspaceCreateProjectOptions`](../type-aliases/WorkspaceCreateProjectOptions.md)

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:607](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L607)

---

### getProject()

> **getProject**(`projectName`): `undefined` \| [`Project`](Project.md)\<`M`\>

#### Parameters

• **projectName**: `string` \| [`Project`](Project.md)\<`M`\>

#### Returns

`undefined` \| [`Project`](Project.md)\<`M`\>

#### Source

[packages/carson/source/workspace/Workspace.ts:597](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L597)

---

### read()

> **read**(): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:430](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L430)

---

### readProjects()

> **readProjects**(): `Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Returns

`Promise`\<[`Project`](Project.md)\<`M`\>[]\>

#### Source

[packages/carson/source/workspace/Workspace.ts:701](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L701)

---

### sortProjects()

> `protected` **sortProjects**(): `void`

#### Returns

`void`

#### Source

[packages/carson/source/workspace/Workspace.ts:733](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L733)

---

### update()

> **update**(`__namedParameters`): `Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Parameters

• **\_\_namedParameters**: [`WorkspaceUpdateOptions`](../type-aliases/WorkspaceUpdateOptions.md)

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`M`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:564](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L564)

---

### updateDependencies()

> `protected` **updateDependencies**(): `void`

#### Returns

`void`

#### Source

[packages/carson/source/workspace/Workspace.ts:737](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L737)

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

[packages/carson/source/workspace/Workspace.ts:166](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L166)

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

[packages/carson/source/workspace/Workspace.ts:332](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L332)

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

[packages/carson/source/workspace/Workspace.ts:398](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L398)

---

### read()

> `static` **read**(`workspacePath`): `Promise`\<[`Workspace`](Workspace.md)\<`true`\> \|
> [`Workspace`](Workspace.md)\<`false`\>\>

#### Parameters

• **workspacePath**: `string`

#### Returns

`Promise`\<[`Workspace`](Workspace.md)\<`true`\> \| [`Workspace`](Workspace.md)\<`false`\>\>

#### Source

[packages/carson/source/workspace/Workspace.ts:215](https://github.com/jakubmazanec/js-tools/blob/45932621a19c677851f8bf60e4a28d217617972b/packages/carson/source/workspace/Workspace.ts#L215)
