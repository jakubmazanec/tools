[**@jakubmazanec/ui**](../README.md) • **Docs**

---

# Function: useForm()

> **useForm**\<`S`\>(`__namedParameters`): `object`

## Type Parameters

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

## Defined in

[packages/ui/source/components/useForm.ts:10](https://github.com/jakubmazanec/tools/blob/6ed2cc9bf798455a62cfc34def34fef748169fa2/packages/ui/source/components/useForm.ts#L10)
