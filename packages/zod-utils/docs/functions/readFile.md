[**@jakubmazanec/zod-utils**](../README.md) • **Docs**

---

# Function: readFile()

> **readFile**\<`S`, `O`\>(`path`, `schema`, `options`?): `Promise`\<`O` _extends_ `undefined` ?
> `z.infer`\<`S`\> \| `ZodError`\<`z.infer`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `z.infer`\<`S`\>, `z.infer`\<`S`\> \|
> `ZodError`\<`z.infer`\<`S`\>\>\>\>

## Type parameters

• **S** _extends_ `ZodTypeAny`

• **O** _extends_ `undefined` \| [`ReadFileOptions`](../interfaces/ReadFileOptions.md) = `undefined`

## Parameters

• **path**: `FileHandle` \| `PathLike`

• **schema**: `S`

• **options?**: `O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? `z.infer`\<`S`\> \| `ZodError`\<`z.infer`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `z.infer`\<`S`\>, `z.infer`\<`S`\> \|
`ZodError`\<`z.infer`\<`S`\>\>\>\>

## Source

[packages/zod-utils/source/utils/readFile.ts:11](https://github.com/jakubmazanec/tools/blob/2f8bfe433bf76006231c1e3b5197238029672b8c/packages/zod-utils/source/utils/readFile.ts#L11)
