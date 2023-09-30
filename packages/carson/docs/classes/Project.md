# Class: Project<M\>

Project represent a self-contained piece of software (e.g. a package, or an app) that is part of a
[Workspace](Workspace.md). Currently only Node.js projects are supported.

## Type parameters

| Name | Type                       | Description                                                |
| :--- | :------------------------- | :--------------------------------------------------------- |
| `M`  | extends `boolean` = `true` | If true, the project belongs to a multi-project workspace. |

## Table of contents

### Constructors

- [constructor](Project.md#constructor)

### Properties

- [config](Project.md#config)
- [errors](Project.md#errors)
- [name](Project.md#name)
- [packageJson](Project.md#packagejson)
- [path](Project.md#path)
- [relativePath](Project.md#relativepath)
- [workspace](Project.md#workspace)

### Methods

- [read](Project.md#read)
- [update](Project.md#update)
- [create](Project.md#create)
- [read](Project.md#read-1)

## Constructors

### constructor

• **new Project**<`M`\>(`«destructured»`)

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

#### Parameters

| Name             | Type                                                  |
| :--------------- | :---------------------------------------------------- |
| `«destructured»` | [`ProjectOptions`](../README.md#projectoptions)<`M`\> |

#### Defined in

[packages/carson/src/workspace/Project.ts:50](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L50)

## Properties

### config

• **config**: `objectOutputType`<{ `template`: `ZodOptional`<`ZodString`\> }, `ZodUnknown`,
`"strip"`\>

Project configuration; if it's not found, the default is an empty object.

#### Defined in

[packages/carson/src/workspace/Project.ts:39](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L39)

---

### errors

• **errors**: `CustomErrorWithData`<`"UNKNOWN_ERROR"` \| `"INVALID_PACKAGE_JSON"` \|
`"INVALID_PROJECT_CONFIG"` \| `"NO_SUCH_PROJECT_PATH"` \| `"PROJECT_PATH_NOT_EMPTY"` \|
`"MISSING_CARSON_TEMPLATE_ID"`, `ProjectErrorData`\>[] = `[]`

Errors found during reading from the file system.

#### Defined in

[packages/carson/src/workspace/Project.ts:48](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L48)

---

### name

• `Optional` **name**: `string`

Project name.

#### Defined in

[packages/carson/src/workspace/Project.ts:30](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L30)

---

### packageJson

• **packageJson**: `Object`

Parsed project `package.json` file; if it's not found, the default is an empty object.

#### Type declaration

| Name                    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `author?`               | `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `bin?`                  | `string` \| `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `browser?`              | `string` \| `Record`<`string`, `string` \| `false`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `bugs?`                 | `string` \| { `email?`: `string` ; `url?`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `bundleDependencies?`   | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `bundledDependencies?`  | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `config?`               | `Record`<`string`, `unknown`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `contributors?`         | (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `cpu?`                  | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `dependencies?`         | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `description?`          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `devDependencies?`      | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `directories?`          | { `bin?`: `string` ; `doc?`: `string` ; `example?`: `string` ; `lib?`: `string` ; `man?`: `string` ; `v?`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `directories.bin?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `directories.doc?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `directories.example?`  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `directories.lib?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `directories.man?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `directories.v?`        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `engines?`              | { `node?`: `string` ; `npm?`: `string` } & `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `esnext?`               | `string` \| `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `exports?`              | `PackageJsonExports`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `files?`                | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `flat?`                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `funding?`              | `string` \| { `type?`: `string` ; `url`: `string` } \| (`string` \| { `type?`: `string` ; `url`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `homepage?`             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `keywords?`             | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `license?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `main?`                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `maintainers?`          | (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `man?`                  | `string` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `module?`               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `name?`                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `optionalDependencies?` | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `os?`                   | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `overrides?`            | `Record`<`string`, `string` \| `Record`<`string`, `string` \| `Record`<`string`, `unknown`\>\>\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `packageManager?`       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `peerDependencies?`     | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `peerDependenciesMeta?` | `Record`<`string`, { `optional`: `boolean` }\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `preferGlobal?`         | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `private?`              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `publishConfig?`        | { `access?`: `"public"` \| `"restricted"` ; `registry?`: `string` ; `tag?`: `string` } & `Record`<`string`, `unknown`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `repository?`           | `string` \| { `directory?`: `string` ; `type`: `string` ; `url`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `resolutions?`          | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `scripts?`              | `Record`<`string`, `string`\> & { `install?`: `string` ; `postinstall?`: `string` ; `postpack?`: `string` ; `postpublish?`: `string` ; `postrestart?`: `string` ; `poststart?`: `string` ; `poststop?`: `string` ; `posttest?`: `string` ; `postuninstall?`: `string` ; `postversion?`: `string` ; `preinstall?`: `string` ; `prepack?`: `string` ; `prepare?`: `string` ; `prepublish?`: `string` ; `prepublishOnly?`: `string` ; `prerestart?`: `string` ; `prestart?`: `string` ; `prestop?`: `string` ; `pretest?`: `string` ; `preuninstall?`: `string` ; `preversion?`: `string` ; `publish?`: `string` ; `restart?`: `string` ; `start?`: `string` ; `stop?`: `string` ; `test?`: `string` ; `uninstall?`: `string` ; `version?`: `string` } |
| `sideEffects?`          | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `source?`               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `type?`                 | `"commonjs"` \| `"module"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `types?`                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `typings?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `version?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `workspaces?`           | `string`[] \| { `nohoist?`: `string`[] ; `packages?`: `string`[] }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Defined in

[packages/carson/src/workspace/Project.ts:42](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L42)

---

### path

• **path**: `string`

Project path.

#### Defined in

[packages/carson/src/workspace/Project.ts:33](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L33)

---

### relativePath

• **relativePath**: `string`

Project path relative to workspace path.

#### Defined in

[packages/carson/src/workspace/Project.ts:36](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L36)

---

### workspace

• **workspace**: [`Workspace`](Workspace.md)<`M`\>

Parent [Workspace](Workspace.md) instance.

#### Defined in

[packages/carson/src/workspace/Project.ts:45](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L45)

## Methods

### read

▸ **read**(): `Promise`<[`Project`](Project.md)<`M`\>\>

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Project.ts:157](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L157)

---

### update

▸ **update**(`«destructured»`): `Promise`<[`Project`](Project.md)<`M`\>\>

#### Parameters

| Name             | Type                                                        |
| :--------------- | :---------------------------------------------------------- |
| `«destructured»` | [`ProjectUpdateOptions`](../README.md#projectupdateoptions) |

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Project.ts:238](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L238)

---

### create

▸ `Static` **create**<`M`\>(`«destructured»`): `Promise`<[`Project`](Project.md)<`M`\>\>

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Parameters

| Name             | Type                                                              |
| :--------------- | :---------------------------------------------------------------- |
| `«destructured»` | [`ProjectCreateOptions`](../README.md#projectcreateoptions)<`M`\> |

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Project.ts:90](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L90)

---

### read

▸ `Static` **read**<`M`\>(`projectPath`, `workspace`): `Promise`<[`Project`](Project.md)<`M`\>\>

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `M`  | extends `boolean` |

#### Parameters

| Name          | Type                              |
| :------------ | :-------------------------------- |
| `projectPath` | `string`                          |
| `workspace`   | [`Workspace`](Workspace.md)<`M`\> |

#### Returns

`Promise`<[`Project`](Project.md)<`M`\>\>

#### Defined in

[packages/carson/src/workspace/Project.ts:143](https://github.com/jakubmazanec/js-tools/blob/9306f5b/packages/carson/src/workspace/Project.ts#L143)
