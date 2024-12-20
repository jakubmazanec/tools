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

[packages/carson/source/workspace/ProjectOptions.ts:10](https://github.com/jakubmazanec/tools/blob/4809b04453aafb35a917917e0b4964a9ec0cd132/packages/carson/source/workspace/ProjectOptions.ts#L10)
