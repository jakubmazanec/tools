[**@jakubmazanec/carson**](../README.md)

---

# Type Alias: ProjectOptions\<M\>

> **ProjectOptions**\<`M`\>: `object`

Defined in:
[packages/carson/source/workspace/ProjectOptions.ts:10](https://github.com/jakubmazanec/tools/blob/40ba1fb8bbde716fbe797d7886fffe14521e098a/packages/carson/source/workspace/ProjectOptions.ts#L10)

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
