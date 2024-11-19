[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Type Alias: ProjectOptions\<M\>

> **ProjectOptions**\<`M`\>: `object`

[Project constructor](../classes/Project.md#constructors) options parameter.

## Type Parameters

• **M** _extends_ `boolean`

## Type declaration

### config?

> `optional` **config**: [`ProjectConfig`](ProjectConfig.md)

### errors?

> `optional` **errors**: `InstanceType`\<_typeof_ [`ProjectError`](../variables/ProjectError.md)\>[]

### name?

> `optional` **name**: `string`

### packageJson?

> `optional` **packageJson**: `PackageJson`

### path

> **path**: `string`

### workspace

> **workspace**: [`Workspace`](../classes/Workspace.md)\<`M`\>

## Defined in

[packages/carson/source/workspace/ProjectOptions.ts:10](https://github.com/jakubmazanec/tools/blob/28bd44b020b25cf8f9b96b5a385bb7c918cf32ab/packages/carson/source/workspace/ProjectOptions.ts#L10)
