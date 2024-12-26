[**@jakubmazanec/zod-utils**](../README.md) • **Docs**

---

# Function: readJson()

> **readJson**\<`S`, `O`\>(`path`, `schema`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> `z.infer`\<`S`\> \| `ZodError`\<`z.infer`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `z.infer`\<`S`\>, `z.infer`\<`S`\> \|
> `ZodError`\<`z.infer`\<`S`\>\>\>\>

## Type Parameters

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

## Defined in

[packages/zod-utils/source/utils/readJson.ts:12](https://github.com/jakubmazanec/tools/blob/3137813ef46c72d3c081751f960a2aa2c61ad567/packages/zod-utils/source/utils/readJson.ts#L12)
