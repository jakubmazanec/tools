[**@jakubmazanec/zod-utils**](../README.md) • **Docs**

---

# Function: readPackageJson()

> **readPackageJson**\<`O`\>(`path`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> [`PackageJson`](../type-aliases/PackageJson.md) \|
> `ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`,
> [`PackageJson`](../type-aliases/PackageJson.md), [`PackageJson`](../type-aliases/PackageJson.md)
> \| `ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\>\>\>

## Type Parameters

• **O** _extends_ `undefined` \| [`ReadPackageJsonOptions`](../interfaces/ReadPackageJsonOptions.md)
= `undefined`

## Parameters

• **path**: `FileHandle` \| `PathLike`

• **options?**: `O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? [`PackageJson`](../type-aliases/PackageJson.md) \|
`ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`,
[`PackageJson`](../type-aliases/PackageJson.md), [`PackageJson`](../type-aliases/PackageJson.md) \|
`ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\>\>\>

## Defined in

[packages/zod-utils/source/utils/readPackageJson.ts:13](https://github.com/jakubmazanec/tools/blob/d628f137f5fc7b1bea261e1e59d468d8339ed884/packages/zod-utils/source/utils/readPackageJson.ts#L13)
