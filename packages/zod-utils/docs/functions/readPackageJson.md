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
[packages/zod-utils/source/utils/readPackageJson.ts:13](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/zod-utils/source/utils/readPackageJson.ts#L13)

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
