[**@jakubmazanec/zod-utils**](../README.md) • **Docs**

---

# Function: readJson()

> **readJson**\<`S`, `O`\>(`path`, `schema`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> `z.infer`\<`S`\> \| `ZodError`\<`z.infer`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `z.infer`\<`S`\>, `z.infer`\<`S`\> \|
> `ZodError`\<`z.infer`\<`S`\>\>\>\>

## Type parameters

• **S** _extends_ `ZodTypeAny`

• **O** _extends_ `undefined` \| [`ReadJsonOptions`](../interfaces/ReadJsonOptions.md) = `undefined`

## Parameters

• **path**: `FileHandle` \| `PathLike`

• **schema**: `S`

• **options?**: `O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? `z.infer`\<`S`\> \| `ZodError`\<`z.infer`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `z.infer`\<`S`\>, `z.infer`\<`S`\> \|
`ZodError`\<`z.infer`\<`S`\>\>\>\>

## Source

[packages/zod-utils/source/utils/readJson.ts:12](https://github.com/jakubmazanec/js-tools/blob/9580d5f68de35b95719fd49b679b2d5576d49582/packages/zod-utils/source/utils/readJson.ts#L12)
