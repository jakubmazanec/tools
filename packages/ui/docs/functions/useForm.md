[**@jakubmazanec/ui**](../README.md)

---

# Function: useForm()

> **useForm**\<`S`\>(`__namedParameters`): `object`

Defined in:
[packages/ui/source/components/useForm.ts:10](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/ui/source/components/useForm.ts#L10)

## Type Parameters

• **S** _extends_ `ZodTypeAny`

## Parameters

### \_\_namedParameters

[`UseFormOptions`](../type-aliases/UseFormOptions.md)\<`S`\>

## Returns

`object`

### fields

> **fields**: `Required`\<\{ \[Key in string \| number \| symbol\]:
> FieldMetadata\<Combine\<input\<S\>\>\[Key\], input\<S\>, string\[\]\> \}\>

### form

> **form**: `FormMetadata`\<`input`\<`S`\>, `string`[]\>
