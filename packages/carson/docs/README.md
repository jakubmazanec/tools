# @jakubmazanec/carson

## Table of contents

### Classes

- [Project](classes/Project.md)
- [Workspace](classes/Workspace.md)
- [WorkspaceDependencies](classes/WorkspaceDependencies.md)

### Type Aliases

- [ApplyTemplateRendersOptions](README.md#applytemplaterendersoptions)
- [CarsonTemplate](README.md#carsontemplate)
- [CarsonTemplateConfig](README.md#carsontemplateconfig)
- [CreateProjectInputResult](README.md#createprojectinputresult)
- [CreateProjectOptions](README.md#createprojectoptions)
- [CreateProjectProps](README.md#createprojectprops)
- [CreateProjectStatus](README.md#createprojectstatus)
- [CreateWorkspaceInputResult](README.md#createworkspaceinputresult)
- [CreateWorkspaceOptions](README.md#createworkspaceoptions)
- [CreateWorkspaceProps](README.md#createworkspaceprops)
- [CreateWorkspaceStatus](README.md#createworkspacestatus)
- [ProjectConfig](README.md#projectconfig)
- [ProjectCreateOptions](README.md#projectcreateoptions)
- [ProjectOptions](README.md#projectoptions)
- [ProjectUpdateOptions](README.md#projectupdateoptions)
- [RenderCarsonTemplateOptions](README.md#rendercarsontemplateoptions)
- [SaveProjectConfigOptions](README.md#saveprojectconfigoptions)
- [SaveWorkspaceConfigOptions](README.md#saveworkspaceconfigoptions)
- [TemplateAttributes](README.md#templateattributes)
- [TemplateData](README.md#templatedata)
- [TemplateRender](README.md#templaterender)
- [TemplateRenders](README.md#templaterenders)
- [UpdateWorkspaceAndProjectsOptions](README.md#updateworkspaceandprojectsoptions)
- [UpdateWorkspaceAndProjectsStatus](README.md#updateworkspaceandprojectsstatus)
- [UpdateWorkspaceProps](README.md#updateworkspaceprops)
- [WorkspaceConfig](README.md#workspaceconfig)
- [WorkspaceCreateOptions](README.md#workspacecreateoptions)
- [WorkspaceCreateProjectOptions](README.md#workspacecreateprojectoptions)
- [WorkspaceFindAndReadOptions](README.md#workspacefindandreadoptions)
- [WorkspaceOptions](README.md#workspaceoptions)
- [WorkspaceOptionsProject](README.md#workspaceoptionsproject)
- [WorkspacePackageJson](README.md#workspacepackagejson)
- [WorkspaceProjectGlobs](README.md#workspaceprojectglobs)
- [WorkspaceProjects](README.md#workspaceprojects)
- [WorkspaceRepository](README.md#workspacerepository)
- [WorkspaceUpdateOptions](README.md#workspaceupdateoptions)

### Variables

- [CarsonTemplateError](README.md#carsontemplateerror)
- [ProjectError](README.md#projecterror)
- [WorkspaceError](README.md#workspaceerror)
- [carsonTemplateConfigSchema](README.md#carsontemplateconfigschema)
- [createProjectCommand](README.md#createprojectcommand)
- [createWorkspaceCommand](README.md#createworkspacecommand)
- [projectConfigSchema](README.md#projectconfigschema)
- [templateAttributesSchema](README.md#templateattributesschema)
- [templateDataSchema](README.md#templatedataschema)
- [updateWorkspaceCommand](README.md#updateworkspacecommand)
- [workspaceConfigSchema](README.md#workspaceconfigschema)

### Functions

- [CreateProject](README.md#createproject)
- [CreateProjectInput](README.md#createprojectinput)
- [CreateWorkspace](README.md#createworkspace)
- [CreateWorkspaceInput](README.md#createworkspaceinput)
- [UpdateWorkspace](README.md#updateworkspace)
- [applyTemplateRenders](README.md#applytemplaterenders)
- [renderCarsonTemplate](README.md#rendercarsontemplate)
- [runCreateProject](README.md#runcreateproject)
- [runCreateWorkspace](README.md#runcreateworkspace)
- [runUpdateWorkspace](README.md#runupdateworkspace)
- [saveProjectConfig](README.md#saveprojectconfig)
- [saveWorkspaceConfig](README.md#saveworkspaceconfig)

## Type Aliases

### ApplyTemplateRendersOptions

Ƭ **ApplyTemplateRendersOptions**: `Object`

#### Type declaration

| Name               | Type                                           |
| :----------------- | :--------------------------------------------- |
| `ignoreStrategies` | `string`[]                                     |
| `snapshotPath`     | `string`                                       |
| `targetPath`       | `string`                                       |
| `templateRenders`  | [`TemplateRenders`](README.md#templaterenders) |

#### Defined in

[packages/carson/src/template/applyTemplateRenders.ts:22](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/applyTemplateRenders.ts#L22)

---

### CarsonTemplate

Ƭ **CarsonTemplate**: `Object`

Carson template.

#### Type declaration

| Name     | Type                                                                                                                                                | Description                                            |
| :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------- |
| `config` | [`CarsonTemplateConfig`](README.md#carsontemplateconfig)                                                                                            | Carson template config.                                |
| `files`  | `Template`<typeof [`templateAttributesSchema`](README.md#templateattributesschema), typeof [`templateDataSchema`](README.md#templatedataschema)\>[] | Carson template files, actually instances of Template. |
| `name`   | `string`                                                                                                                                            | Carson template name.                                  |

#### Defined in

[packages/carson/src/template/CarsonTemplate.ts:10](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/CarsonTemplate.ts#L10)

---

### CarsonTemplateConfig

Ƭ **CarsonTemplateConfig**: `z.infer`<typeof
[`carsonTemplateConfigSchema`](README.md#carsontemplateconfigschema)\>

Carson template config.

#### Defined in

[packages/carson/src/template/CarsonTemplateConfig.ts:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/CarsonTemplateConfig.ts#L15)

---

### CreateProjectInputResult

Ƭ **CreateProjectInputResult**: `FormResult`<typeof
[`CreateProjectInput`](README.md#createprojectinput)\>

#### Defined in

[packages/carson/src/commands/create-project/CreateProjectInput.ts:37](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/CreateProjectInput.ts#L37)

---

### CreateProjectOptions

Ƭ **CreateProjectOptions**: `Object`

#### Type declaration

| Name          | Type                                                                                 |
| :------------ | :----------------------------------------------------------------------------------- |
| `args`        | `CommandArguments`<typeof [`createProjectCommand`](README.md#createprojectcommand)\> |
| `projectName` | `string`                                                                             |
| `projectPath` | `string`                                                                             |
| `templateId`  | `string`                                                                             |
| `workspace`   | [`Workspace`](classes/Workspace.md) \| [`Workspace`](classes/Workspace.md)<`false`\> |

#### Defined in

[packages/carson/src/commands/create-project/runCreateProject.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/runCreateProject.ts#L7)

---

### CreateProjectProps

Ƭ **CreateProjectProps**: `Object`

#### Type declaration

| Name        | Type                                                                                 |
| :---------- | :----------------------------------------------------------------------------------- |
| `args`      | `CommandArguments`<typeof [`createProjectCommand`](README.md#createprojectcommand)\> |
| `workspace` | [`Workspace`](classes/Workspace.md) \| [`Workspace`](classes/Workspace.md)<`false`\> |

#### Defined in

[packages/carson/src/commands/create-project/CreateProject.tsx:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/CreateProject.tsx#L15)

---

### CreateProjectStatus

Ƭ **CreateProjectStatus**: `string`

#### Defined in

[packages/carson/src/commands/create-project/runCreateProject.ts:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/runCreateProject.ts#L15)

---

### CreateWorkspaceInputResult

Ƭ **CreateWorkspaceInputResult**: `FormResult`<typeof
[`CreateWorkspaceInput`](README.md#createworkspaceinput)\>

#### Defined in

[packages/carson/src/commands/create-workspace/CreateWorkspaceInput.ts:21](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/CreateWorkspaceInput.ts#L21)

---

### CreateWorkspaceOptions

Ƭ **CreateWorkspaceOptions**: `Object`

#### Type declaration

| Name            | Type                                                                                     |
| :-------------- | :--------------------------------------------------------------------------------------- |
| `args`          | `CommandArguments`<typeof [`createWorkspaceCommand`](README.md#createworkspacecommand)\> |
| `templateId`    | `string`                                                                                 |
| `workspacePath` | `string`                                                                                 |

#### Defined in

[packages/carson/src/commands/create-workspace/runCreateWorkspace.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/runCreateWorkspace.ts#L7)

---

### CreateWorkspaceProps

Ƭ **CreateWorkspaceProps**: `Object`

#### Type declaration

| Name   | Type                                                                                     |
| :----- | :--------------------------------------------------------------------------------------- |
| `args` | `CommandArguments`<typeof [`createWorkspaceCommand`](README.md#createworkspacecommand)\> |

#### Defined in

[packages/carson/src/commands/create-workspace/CreateWorkspace.tsx:12](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/CreateWorkspace.tsx#L12)

---

### CreateWorkspaceStatus

Ƭ **CreateWorkspaceStatus**: `string`

#### Defined in

[packages/carson/src/commands/create-workspace/runCreateWorkspace.ts:13](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/runCreateWorkspace.ts#L13)

---

### ProjectConfig

Ƭ **ProjectConfig**: `z.infer`<typeof [`projectConfigSchema`](README.md#projectconfigschema)\>

A project configuration.

#### Defined in

[packages/carson/src/workspace/ProjectConfig.ts:12](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectConfig.ts#L12)

---

### ProjectCreateOptions

Ƭ **ProjectCreateOptions**<`M`\>: `Object`

[Project.create](classes/Project.md#create) options parameter.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Type declaration

| Name          | Type                                      |
| :------------ | :---------------------------------------- |
| `args`        | `Record`<`string`, `unknown`\>            |
| `projectName` | `string`                                  |
| `projectPath` | `string`                                  |
| `templateId`  | `string`                                  |
| `workspace`   | [`Workspace`](classes/Workspace.md)<`M`\> |

#### Defined in

[packages/carson/src/workspace/ProjectCreateOptions.ts:6](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectCreateOptions.ts#L6)

---

### ProjectOptions

Ƭ **ProjectOptions**<`M`\>: `Object`

[Project constructor](classes/Project.md#constructor) options parameter.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Type declaration

| Name           | Type                                                               |
| :------------- | :----------------------------------------------------------------- |
| `config?`      | [`ProjectConfig`](README.md#projectconfig)                         |
| `errors?`      | `InstanceType`<typeof [`ProjectError`](README.md#projecterror)\>[] |
| `name?`        | `string`                                                           |
| `packageJson?` | `PackageJson`                                                      |
| `path`         | `string`                                                           |
| `workspace`    | [`Workspace`](classes/Workspace.md)<`M`\>                          |

#### Defined in

[packages/carson/src/workspace/ProjectOptions.ts:10](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectOptions.ts#L10)

---

### ProjectUpdateOptions

Ƭ **ProjectUpdateOptions**: `Object`

[Project.update](classes/Project.md#update) options parameter.

#### Type declaration

| Name   | Type                           |
| :----- | :----------------------------- |
| `args` | `Record`<`string`, `unknown`\> |

#### Defined in

[packages/carson/src/workspace/ProjectUpdateOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectUpdateOptions.ts#L4)

---

### RenderCarsonTemplateOptions

Ƭ **RenderCarsonTemplateOptions**: `Object`

#### Type declaration

| Name           | Type                                     |
| :------------- | :--------------------------------------- |
| `templateData` | [`TemplateData`](README.md#templatedata) |
| `templateId`   | `string`                                 |

#### Defined in

[packages/carson/src/template/renderCarsonTemplate.ts:14](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/renderCarsonTemplate.ts#L14)

---

### SaveProjectConfigOptions

Ƭ **SaveProjectConfigOptions**: `Object`

[saveProjectConfig](README.md#saveprojectconfig) options parameter.

#### Type declaration

| Name            | Type                                       |
| :-------------- | :----------------------------------------- |
| `projectConfig` | [`ProjectConfig`](README.md#projectconfig) |
| `projectPath`   | `string`                                   |

#### Defined in

[packages/carson/src/workspace/saveProjectConfig.ts:11](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/saveProjectConfig.ts#L11)

---

### SaveWorkspaceConfigOptions

Ƭ **SaveWorkspaceConfigOptions**: `Object`

[saveWorkspaceConfig](README.md#saveworkspaceconfig) options parameter.

#### Type declaration

| Name              | Type                                           |
| :---------------- | :--------------------------------------------- |
| `workspaceConfig` | [`WorkspaceConfig`](README.md#workspaceconfig) |
| `workspacePath`   | `string`                                       |

#### Defined in

[packages/carson/src/workspace/saveWorkspaceConfig.ts:11](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/saveWorkspaceConfig.ts#L11)

---

### TemplateAttributes

Ƭ **TemplateAttributes**: `z.infer`<typeof
[`templateAttributesSchema`](README.md#templateattributesschema)\>

#### Defined in

[packages/carson/src/template/TemplateAttributes.ts:19](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateAttributes.ts#L19)

---

### TemplateData

Ƭ **TemplateData**: `z.infer`<typeof [`templateDataSchema`](README.md#templatedataschema)\>

#### Defined in

[packages/carson/src/template/TemplateData.ts:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateData.ts#L15)

---

### TemplateRender

Ƭ **TemplateRender**: `BaseTemplateRender`<typeof
[`templateAttributesSchema`](README.md#templateattributesschema), typeof
[`templateDataSchema`](README.md#templatedataschema)\> & { `template`: { `path`: `string` } }

A result of rendering a Carson template file.

#### Defined in

[packages/carson/src/template/TemplateRender.ts:9](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateRender.ts#L9)

---

### TemplateRenders

Ƭ **TemplateRenders**: [`TemplateRender`](README.md#templaterender)[]

A [TemplateRender](README.md#templaterender) collection.

#### Defined in

[packages/carson/src/template/TemplateRenders.ts:6](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateRenders.ts#L6)

---

### UpdateWorkspaceAndProjectsOptions

Ƭ **UpdateWorkspaceAndProjectsOptions**: `Object`

#### Type declaration

| Name        | Type                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| `args`      | `CommandArguments`<typeof [`updateWorkspaceCommand`](README.md#updateworkspacecommand)\> |
| `workspace` | [`Workspace`](classes/Workspace.md) \| [`Workspace`](classes/Workspace.md)<`false`\>     |

#### Defined in

[packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts#L7)

---

### UpdateWorkspaceAndProjectsStatus

Ƭ **UpdateWorkspaceAndProjectsStatus**: `string`

#### Defined in

[packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts:12](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts#L12)

---

### UpdateWorkspaceProps

Ƭ **UpdateWorkspaceProps**: `Object`

#### Type declaration

| Name        | Type                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| `args`      | `CommandArguments`<typeof [`updateWorkspaceCommand`](README.md#updateworkspacecommand)\> |
| `workspace` | [`Workspace`](classes/Workspace.md) \| [`Workspace`](classes/Workspace.md)<`false`\>     |

#### Defined in

[packages/carson/src/commands/update-workspace/UpdateWorkspace.tsx:10](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/UpdateWorkspace.tsx#L10)

---

### WorkspaceConfig

Ƭ **WorkspaceConfig**: `z.infer`<typeof [`workspaceConfigSchema`](README.md#workspaceconfigschema)\>

A workspace configuration.

#### Defined in

[packages/carson/src/workspace/WorkspaceConfig.ts:12](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceConfig.ts#L12)

---

### WorkspaceCreateOptions

Ƭ **WorkspaceCreateOptions**: `Object`

[create](classes/Workspace.md#create) options parameter.

#### Type declaration

| Name         | Type                           |
| :----------- | :----------------------------- |
| `args`       | `Record`<`string`, `unknown`\> |
| `path`       | `string`                       |
| `templateId` | `string`                       |

#### Defined in

[packages/carson/src/workspace/WorkspaceCreateOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceCreateOptions.ts#L4)

---

### WorkspaceCreateProjectOptions

Ƭ **WorkspaceCreateProjectOptions**: `Object`

[Workspace.createProject](classes/Workspace.md#createproject) options parameter.

#### Type declaration

| Name          | Type                           |
| :------------ | :----------------------------- |
| `args`        | `Record`<`string`, `unknown`\> |
| `projectName` | `string`                       |
| `projectPath` | `string`                       |
| `templateId`  | `string`                       |

#### Defined in

[packages/carson/src/workspace/WorkspaceCreateProjectOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceCreateProjectOptions.ts#L4)

---

### WorkspaceFindAndReadOptions

Ƭ **WorkspaceFindAndReadOptions**: `Object`

[Workspace.findAndRead](classes/Workspace.md#findandread) options parameter.

#### Type declaration

| Name               | Type      |
| :----------------- | :-------- |
| `throwIfNotFound?` | `boolean` |

#### Defined in

[packages/carson/src/workspace/WorkspaceFindAndReadOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceFindAndReadOptions.ts#L4)

---

### WorkspaceOptions

Ƭ **WorkspaceOptions**<`M`\>: `M` extends `true` ? { `config?`:
[`WorkspaceConfig`](README.md#workspaceconfig) ; `errors?`: `InstanceType`<typeof
[`WorkspaceError`](README.md#workspaceerror)\>[] ; `isMultiProject?`: `M` ; `packageJson?`:
`PackageJson` ; `path`: `string` ; `projectGlobs?`: `string`[] ; `projects?`:
[`WorkspaceOptionsProject`](README.md#workspaceoptionsproject)[] ; `repository?`:
[`WorkspaceRepository`](README.md#workspacerepository) } : { `config?`:
[`WorkspaceConfig`](README.md#workspaceconfig) ; `errors?`: `InstanceType`<typeof
[`WorkspaceError`](README.md#workspaceerror)\>[] ; `isMultiProject?`: `M` ; `path`: `string` ;
`projects?`: [[`WorkspaceOptionsProject`](README.md#workspaceoptionsproject)] ; `repository?`:
[`WorkspaceRepository`](README.md#workspacerepository) }

[Workspace constructor](classes/Workspace.md#constructor) options parameter.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Defined in

[packages/carson/src/workspace/WorkspaceOptions.ts:11](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceOptions.ts#L11)

---

### WorkspaceOptionsProject

Ƭ **WorkspaceOptionsProject**: `Object`

Type alias for WorkspaceOptions.projects | WorkspaceOptions.projects property.

#### Type declaration

| Name           | Type                                       |
| :------------- | :----------------------------------------- |
| `config?`      | [`ProjectConfig`](README.md#projectconfig) |
| `packageJson?` | `PackageJson`                              |
| `path`         | `string`                                   |

#### Defined in

[packages/carson/src/workspace/WorkspaceOptionsProject.ts:8](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceOptionsProject.ts#L8)

---

### WorkspacePackageJson

Ƭ **WorkspacePackageJson**<`M`\>: `M` extends `true` ? `PackageJson` : `null`

Type alias for [Workspace.packageJson](classes/Workspace.md#packagejson) property.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Defined in

[packages/carson/src/workspace/WorkspacePackageJson.ts:6](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspacePackageJson.ts#L6)

---

### WorkspaceProjectGlobs

Ƭ **WorkspaceProjectGlobs**<`M`\>: `M` extends `true` ? `string`[] : `null`

Type alias for [Workspace.projectGlobs](classes/Workspace.md#projectglobs) property.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Defined in

[packages/carson/src/workspace/WorkspaceProjectGlobs.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceProjectGlobs.ts#L4)

---

### WorkspaceProjects

Ƭ **WorkspaceProjects**<`M`\>: [`Project`](classes/Project.md)<`M`\>[]

Type alias for [Workspace.projects](classes/Workspace.md#projects) property.

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Defined in

[packages/carson/src/workspace/WorkspaceProjects.ts:6](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceProjects.ts#L6)

---

### WorkspaceRepository

Ƭ **WorkspaceRepository**: `Object`

A workspace repository.

#### Type declaration

| Name       | Type       |
| :--------- | :--------- |
| `branches` | `string`[] |
| `url?`     | `string`   |

#### Defined in

[packages/carson/src/workspace/WorkspaceRepository.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceRepository.ts#L4)

---

### WorkspaceUpdateOptions

Ƭ **WorkspaceUpdateOptions**: `Object`

[Workspace.update](classes/Workspace.md#update) options parameter.

#### Type declaration

| Name   | Type                           |
| :----- | :----------------------------- |
| `args` | `Record`<`string`, `unknown`\> |

#### Defined in

[packages/carson/src/workspace/WorkspaceUpdateOptions.ts:4](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceUpdateOptions.ts#L4)

## Variables

### CarsonTemplateError

• `Const` **CarsonTemplateError**: (`code`: `"INVALID_CARSON_TEMPLATE_ID"` \|
`"CARSON_TEMPLATE_NOT_FOUND"` \| `"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"`,
`options?`: `CustomErrorWithDataOptions`<`CarsonTemplateErrorData`\>) =>
`CustomErrorWithData`<`"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \|
`"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` \| `"UNKNOWN_ERROR"`,
`CarsonTemplateErrorData`\>

#### Type declaration

• **new CarsonTemplateError**(`code`, `options?`)

A subclass of `Error` that indicates a Carson template failure.

##### Parameters

| Name       | Type                                                                                                                               |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `code`     | `"INVALID_CARSON_TEMPLATE_ID"` \| `"CARSON_TEMPLATE_NOT_FOUND"` \| `"STRATEGY_UNSUPPORTED_EXTENSION"` \| `"STRATEGY_MISSING_FILE"` |
| `options?` | `CustomErrorWithDataOptions`<`CarsonTemplateErrorData`\>                                                                           |

#### Defined in

[packages/carson/src/template/CarsonTemplateError.ts:6](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/CarsonTemplateError.ts#L6)

---

### ProjectError

• `Const` **ProjectError**: (`code`: `"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
`"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"`,
`options?`: `CustomErrorWithDataOptions`<`ProjectErrorData`\>) =>
`CustomErrorWithData`<`"UNKNOWN_ERROR"` \| `"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \|
`"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"`,
`ProjectErrorData`\>

#### Type declaration

• **new ProjectError**(`code`, `options?`)

A subclass of `Error` that indicates a project failure.

##### Parameters

| Name       | Type                                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`     | `"INVALID_PACKAGE_JSON"` \| `"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \| `"MISSING_CARSON_TEMPLATE_ID"` |
| `options?` | `CustomErrorWithDataOptions`<`ProjectErrorData`\>                                                                                                  |

#### Defined in

[packages/carson/src/workspace/ProjectError.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectError.ts#L7)

---

### WorkspaceError

• `Const` **WorkspaceError**: (`code`: `"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \|
`"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \|
`"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \| `"DUPLICATE_PROJECT_NAME"` \|
`"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"`, `options?`:
`CustomErrorWithDataOptions`<`WorkspaceErrorData`\>) => `CustomErrorWithData`<`"UNKNOWN_ERROR"` \|
`"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_WORKSPACE_CONFIG"` \|
`"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \|
`"WORKSPACE_PATH_NOT_EMPTY"` \| `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \|
`"TOO_MANY_PROJECTS"`, `WorkspaceErrorData`\>

#### Type declaration

• **new WorkspaceError**(`code`, `options?`)

A subclass of `Error` that indicates a workspace failure.

##### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `code`     | `"INVALID_PACKAGE_JSON"` \| `"MISSING_CARSON_TEMPLATE_ID"` \| `"INVALID_WORKSPACE_CONFIG"` \| `"NO_SUCH_WORKSPACE_PATH"` \| `"NO_WORKSPACE_FOUND"` \| `"PATH_MISMATCH"` \| `"WORKSPACE_PATH_NOT_EMPTY"` \| `"DUPLICATE_PROJECT_NAME"` \| `"DUPLICATE_PROJECT_PATH"` \| `"TOO_MANY_PROJECTS"` |
| `options?` | `CustomErrorWithDataOptions`<`WorkspaceErrorData`\>                                                                                                                                                                                                                                          |

#### Defined in

[packages/carson/src/workspace/WorkspaceError.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceError.ts#L7)

---

### carsonTemplateConfigSchema

• `Const` **carsonTemplateConfigSchema**: `ZodObject`<{ `disallowMultiProjectWorkspace`:
`ZodOptional`<`ZodBoolean`\> ; `disallowSingleProjectWorkspace`: `ZodOptional`<`ZodBoolean`\> },
`"strict"`, `ZodTypeAny`, { `disallowMultiProjectWorkspace?`: `boolean` ;
`disallowSingleProjectWorkspace?`: `boolean` }, { `disallowMultiProjectWorkspace?`: `boolean` ;
`disallowSingleProjectWorkspace?`: `boolean` }\>

#### Defined in

[packages/carson/src/template/CarsonTemplateConfig.ts:3](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/CarsonTemplateConfig.ts#L3)

---

### createProjectCommand

• `Const` **createProjectCommand**: `Command`<`"create project"`, `undefined`, { `name`: { `type`:
`"string"` = 'string' } ; `path`: { `type`: `"string"` = 'string' } ; `template`: { `type`:
`"string"` = 'string' } }, `false`, `false`\>

#### Defined in

[packages/carson/src/commands/create-project/createProjectCommand.tsx:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/createProjectCommand.tsx#L7)

---

### createWorkspaceCommand

• `Const` **createWorkspaceCommand**: `Command`<`"create workspace"`, `undefined`, { `path`: {
`type`: `"string"` = 'string' } ; `template`: { `type`: `"string"` = 'string' } }, `false`,
`false`\>

#### Defined in

[packages/carson/src/commands/create-workspace/createWorkspaceCommand.tsx:5](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/createWorkspaceCommand.tsx#L5)

---

### projectConfigSchema

• `Const` **projectConfigSchema**: `ZodObject`<{ `template`: `ZodOptional`<`ZodString`\> },
`"strip"`, `ZodUnknown`, `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> },
`ZodUnknown`, `"strip"`\>, `objectInputType`<{ `template`: `ZodOptional`<`ZodString`\> },
`ZodUnknown`, `"strip"`\>\>

#### Defined in

[packages/carson/src/workspace/ProjectConfig.ts:3](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/ProjectConfig.ts#L3)

---

### templateAttributesSchema

• `Const` **templateAttributesSchema**: `ZodObject`<{ `strategy`:
`ZodUnion`<[`ZodLiteral`<`"create"`\>, `ZodLiteral`<`"ensure"`\>, `ZodLiteral`<`"overwrite"`\>,
`ZodLiteral`<`"merge"`\>, `ZodLiteral`<`"check"`\>, `ZodTuple`<[`ZodLiteral`<``"insert"``\>,
`ZodString`], `null`\>]\> = strategyTemplateAttributeSchema }, `"strict"`, `ZodTypeAny`, {
`strategy`: `Object` = strategyTemplateAttributeSchema }, { `strategy`: `Object` =
strategyTemplateAttributeSchema }\>

#### Defined in

[packages/carson/src/template/TemplateAttributes.ts:13](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateAttributes.ts#L13)

---

### templateDataSchema

• `Const` **templateDataSchema**: `ZodObject`<{ `args`: `ZodOptional`<`ZodRecord`<`ZodString`,
`ZodUnknown`\>\> ; `project`: `ZodOptional`<`ZodType`<[`Project`](classes/Project.md)<`boolean`\>,
`ZodTypeDef`, [`Project`](classes/Project.md)<`boolean`\>\>\> ; `workspace`:
`ZodOptional`<`ZodType`<[`Workspace`](classes/Workspace.md)<`boolean`\>, `ZodTypeDef`,
[`Workspace`](classes/Workspace.md)<`boolean`\>\>\> }, `"strict"`, `ZodTypeAny`, { `args?`:
`Record`<`string`, `unknown`\> ; `project?`: [`Project`](classes/Project.md)<`boolean`\> ;
`workspace?`: [`Workspace`](classes/Workspace.md)<`boolean`\> }, { `args?`: `Record`<`string`,
`unknown`\> ; `project?`: [`Project`](classes/Project.md)<`boolean`\> ; `workspace?`:
[`Workspace`](classes/Workspace.md)<`boolean`\> }\>

#### Defined in

[packages/carson/src/template/TemplateData.ts:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/TemplateData.ts#L7)

---

### updateWorkspaceCommand

• `Const` **updateWorkspaceCommand**: `Command`<`"update workspace"`, `undefined`, { `path`: {
`type`: `"string"` = 'string' } }, `false`, `false`\>

#### Defined in

[packages/carson/src/commands/update-workspace/updateWorkspaceCommand.tsx:7](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/updateWorkspaceCommand.tsx#L7)

---

### workspaceConfigSchema

• `Const` **workspaceConfigSchema**: `ZodObject`<{ `template`: `ZodOptional`<`ZodString`\> },
`"strip"`, `ZodUnknown`, `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> },
`ZodUnknown`, `"strip"`\>, `objectInputType`<{ `template`: `ZodOptional`<`ZodString`\> },
`ZodUnknown`, `"strip"`\>\>

#### Defined in

[packages/carson/src/workspace/WorkspaceConfig.ts:3](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/WorkspaceConfig.ts#L3)

## Functions

### CreateProject

▸ **CreateProject**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                 |
| :--------------- | :--------------------------------------------------- |
| `«destructured»` | [`CreateProjectProps`](README.md#createprojectprops) |

#### Returns

`Element`

#### Defined in

[packages/carson/src/commands/create-project/CreateProject.tsx:20](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/CreateProject.tsx#L20)

---

### CreateProjectInput

▸ **CreateProjectInput**(`props`, `context?`): `ReactNode`

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props`    | `Except`<`Styles`, `"textWrap"`\> & { `margin?`: `number` ; `marginX?`: `number` ; `marginY?`: `number` ; `padding?`: `number` ; `paddingX?`: `number` ; `paddingY?`: `number` } & { `onChange?`: (`formResult`: `FormValues`<{ `rows`: { `projectName`: { `label`: `string` = 'What is the project name?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } ; `projectPath`: { `label`: `string` = 'What is the project location?'; `type`: `"select"` = 'select' } ; `templateId`: { `label`: `string` = 'What template do you want to use?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\>) => `void` ; `onComplete`: (`formResult`: `FormValues`<{ `rows`: { `projectName`: { `label`: `string` = 'What is the project name?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } ; `projectPath`: { `label`: `string` = 'What is the project location?'; `type`: `"select"` = 'select' } ; `templateId`: { `label`: `string` = 'What template do you want to use?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\>) => `void` ; `rows`: `FormPropsRows`<{ `rows`: { `projectName`: { `label`: `string` = 'What is the project name?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } ; `projectPath`: { `label`: `string` = 'What is the project location?'; `type`: `"select"` = 'select' } ; `templateId`: { `label`: `string` = 'What template do you want to use?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\> ; `values`: `FormValues`<{ `rows`: { `projectName`: { `label`: `string` = 'What is the project name?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } ; `projectPath`: { `label`: `string` = 'What is the project location?'; `type`: `"select"` = 'select' } ; `templateId`: { `label`: `string` = 'What template do you want to use?'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\> } |
| `context?` | `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:563

---

### CreateWorkspace

▸ **CreateWorkspace**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                     |
| :--------------- | :------------------------------------------------------- |
| `«destructured»` | [`CreateWorkspaceProps`](README.md#createworkspaceprops) |

#### Returns

`Element`

#### Defined in

[packages/carson/src/commands/create-workspace/CreateWorkspace.tsx:16](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/CreateWorkspace.tsx#L16)

---

### CreateWorkspaceInput

▸ **CreateWorkspaceInput**(`props`, `context?`): `ReactNode`

#### Parameters

| Name       | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `props`    | `Except`<`Styles`, `"textWrap"`\> & { `margin?`: `number` ; `marginX?`: `number` ; `marginY?`: `number` ; `padding?`: `number` ; `paddingX?`: `number` ; `paddingY?`: `number` } & { `onChange?`: (`formResult`: `FormValues`<{ `rows`: { `templateId`: { `label`: `string` = 'Enter template ID:'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\>) => `void` ; `onComplete`: (`formResult`: `FormValues`<{ `rows`: { `templateId`: { `label`: `string` = 'Enter template ID:'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\>) => `void` ; `rows?`: `null` ; `values`: `FormValues`<{ `rows`: { `templateId`: { `label`: `string` = 'Enter template ID:'; `type`: `"text"` = 'text'; `validate`: (`value`: `string`) => `void` } } }\> } |
| `context?` | `any`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Returns

`ReactNode`

#### Defined in

node_modules/@types/react/index.d.ts:563

---

### UpdateWorkspace

▸ **UpdateWorkspace**(`«destructured»`): `Element`

#### Parameters

| Name             | Type                                                     |
| :--------------- | :------------------------------------------------------- |
| `«destructured»` | [`UpdateWorkspaceProps`](README.md#updateworkspaceprops) |

#### Returns

`Element`

#### Defined in

[packages/carson/src/commands/update-workspace/UpdateWorkspace.tsx:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/UpdateWorkspace.tsx#L15)

---

### applyTemplateRenders

▸ **applyTemplateRenders**(`«destructured»`): `Promise`<`void`\>

Applies rendered Carson template to a specified path, i.e. creates and updates files based on the
result of rendering each Carson template file.

#### Parameters

| Name             | Type                                                                   |
| :--------------- | :--------------------------------------------------------------------- |
| `«destructured»` | [`ApplyTemplateRendersOptions`](README.md#applytemplaterendersoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/carson/src/template/applyTemplateRenders.ts:32](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/applyTemplateRenders.ts#L32)

---

### renderCarsonTemplate

▸ **renderCarsonTemplate**(`options`): `Promise`<[`TemplateRenders`](README.md#templaterenders)\>

Renders a Carson template with provided template data.

#### Parameters

| Name      | Type                                                                   |
| :-------- | :--------------------------------------------------------------------- |
| `options` | [`RenderCarsonTemplateOptions`](README.md#rendercarsontemplateoptions) |

#### Returns

`Promise`<[`TemplateRenders`](README.md#templaterenders)\>

#### Defined in

[packages/carson/src/template/renderCarsonTemplate.ts:22](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/template/renderCarsonTemplate.ts#L22)

---

### runCreateProject

▸ **runCreateProject**(`«destructured»`): `Observable`<`string`\>

#### Parameters

| Name             | Type                                                     |
| :--------------- | :------------------------------------------------------- |
| `«destructured»` | [`CreateProjectOptions`](README.md#createprojectoptions) |

#### Returns

`Observable`<`string`\>

#### Defined in

[packages/carson/src/commands/create-project/runCreateProject.ts:17](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-project/runCreateProject.ts#L17)

---

### runCreateWorkspace

▸ **runCreateWorkspace**(`«destructured»`): `Observable`<`string`\>

#### Parameters

| Name             | Type                                                         |
| :--------------- | :----------------------------------------------------------- |
| `«destructured»` | [`CreateWorkspaceOptions`](README.md#createworkspaceoptions) |

#### Returns

`Observable`<`string`\>

#### Defined in

[packages/carson/src/commands/create-workspace/runCreateWorkspace.ts:15](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/create-workspace/runCreateWorkspace.ts#L15)

---

### runUpdateWorkspace

▸ **runUpdateWorkspace**(`«destructured»`): `Observable`<`string`\>

#### Parameters

| Name             | Type                                                                               |
| :--------------- | :--------------------------------------------------------------------------------- |
| `«destructured»` | [`UpdateWorkspaceAndProjectsOptions`](README.md#updateworkspaceandprojectsoptions) |

#### Returns

`Observable`<`string`\>

#### Defined in

[packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts:14](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/commands/update-workspace/runUpdateWorkspace.ts#L14)

---

### saveProjectConfig

▸ **saveProjectConfig**(`options`): `Promise`<`void`\>

Saves project configuration to the config file.

#### Parameters

| Name      | Type                                                             | Description |
| :-------- | :--------------------------------------------------------------- | :---------- |
| `options` | [`SaveProjectConfigOptions`](README.md#saveprojectconfigoptions) | Options.    |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/carson/src/workspace/saveProjectConfig.ts:21](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/saveProjectConfig.ts#L21)

---

### saveWorkspaceConfig

▸ **saveWorkspaceConfig**(`options`): `Promise`<`void`\>

Saves workspace configuration to the config file.

#### Parameters

| Name      | Type                                                                 | Description |
| :-------- | :------------------------------------------------------------------- | :---------- |
| `options` | [`SaveWorkspaceConfigOptions`](README.md#saveworkspaceconfigoptions) | Options.    |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/carson/src/workspace/saveWorkspaceConfig.ts:21](https://github.com/jakubmazanec/js-tools/blob/d35ef4d/packages/carson/src/workspace/saveWorkspaceConfig.ts#L21)
