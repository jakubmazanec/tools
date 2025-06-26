[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: RadioGroupProps\<T, V\>

> **RadioGroupProps**\<`T`, `V`\> = `ComponentProps`\<_typeof_
> [`useRadioGroupTheme`](../variables/useRadioGroupTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as?`: `T`; `className?`: `string`;
> `defaultValue?`: `V`; `field?`: `FieldMetadata`\<`any`, `any`\>; `name?`: `undefined`;
> `onChange?`: (`value`) => `void`; `value?`: `V`; \} \| \{ `as?`: `T`; `className?`: `string`;
> `defaultValue?`: `V`; `field?`: `undefined`; `name?`: `FieldName`\<`any`, `any`\> \| `string`;
> `onChange?`: (`value`) => `void`; `value?`: `V`; \}

Defined in:
[packages/ui/source/components/RadioGroup.tsx:26](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/ui/source/components/RadioGroup.tsx#L26)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
