[**@jakubmazanec/carson**](../README.md) • **Docs**

---

# Type alias: ProjectOptions\<M\>

> **ProjectOptions**\<`M`\>: `object`

[Project constructor](../classes/Project.md#constructors) options parameter.

## Type parameters

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

## Source

[packages/carson/source/workspace/ProjectOptions.ts:10](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/carson/source/workspace/ProjectOptions.ts#L10)
