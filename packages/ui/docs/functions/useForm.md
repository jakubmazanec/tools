[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Function: useForm()

> **useForm**\<`S`\>(`__namedParameters`): `object`

## Type parameters

• **S** _extends_ `ZodTypeAny`

## Parameters

• **\_\_namedParameters**: [`UseFormOptions`](../type-aliases/UseFormOptions.md)\<`S`\>

## Returns

`object`

### fields

> **fields**: `Required`\<\{ \[Key in string \| number \| symbol\]:
> FieldMetadata\<Combine\<input\<S\>\>\[Key\], input\<S\>, string\[\]\> \}\>

### form

> **form**: `FormMetadata`\<`input`\<`S`\>, `string`[]\>

## Source

[packages/ui/source/components/useForm.ts:10](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/ui/source/components/useForm.ts#L10)
