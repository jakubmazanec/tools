[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: readJson()

> **readJson**\<`S`, `O`\>(`path`, `schema`, `options?`): `Promise`\<`O` _extends_ `undefined` ?
> `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
> `If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
> `ZodError`\<`TypeOf`\<`S`\>\>\>\>

Defined in:
[packages/zod-utils/source/utils/readJson.ts:12](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/zod-utils/source/utils/readJson.ts#L12)

## Type Parameters

### S

`S` _extends_ `ZodTypeAny`

### O

`O` _extends_ `undefined` \| [`ReadJsonOptions`](../interfaces/ReadJsonOptions.md) = `undefined`

## Parameters

### path

`FileHandle` | `PathLike`

### schema

`S`

### options?

`O`

## Returns

`Promise`\<`O` _extends_ `undefined` ? `TypeOf`\<`S`\> \| `ZodError`\<`TypeOf`\<`S`\>\> :
`If`\<`NonNullable`\<`O`\>\[`"throwOnZodError"`\], `true`, `TypeOf`\<`S`\>, `TypeOf`\<`S`\> \|
`ZodError`\<`TypeOf`\<`S`\>\>\>\>
