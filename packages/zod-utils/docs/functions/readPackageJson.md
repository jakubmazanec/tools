[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readPackageJson()

> **readPackageJson**\<`O`\>(`path`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> [`PackageJson`](../type-aliases/PackageJson.md) \|
> `ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`,
> [`PackageJson`](../type-aliases/PackageJson.md), [`PackageJson`](../type-aliases/PackageJson.md)
> \| `ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\>\>\>

Defined in:
[packages/zod-utils/source/utils/readPackageJson.ts:13](https://github.com/jakubmazanec/tools/blob/dcfb3b06be051bf99e23e7e35174b07af0f0fddd/packages/zod-utils/source/utils/readPackageJson.ts#L13)

## Type Parameters

• **O** _extends_ `undefined` \| [`ReadPackageJsonOptions`](../interfaces/ReadPackageJsonOptions.md)
= `undefined`

## Parameters

### path

`FileHandle` | `PathLike`

### options?

`O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? [`PackageJson`](../type-aliases/PackageJson.md) \|
`ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`,
[`PackageJson`](../type-aliases/PackageJson.md), [`PackageJson`](../type-aliases/PackageJson.md) \|
`ZodError`\<[`PackageJson`](../type-aliases/PackageJson.md)\>\>\>
