[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: RadioGroupProps\<T, V\>

> **RadioGroupProps**\<`T`, `V`\> = `ComponentProps`\<_typeof_
> [`useRadioGroupTheme`](../variables/useRadioGroupTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as?`: `T`; `className?`: `string`;
> `defaultValue?`: `V`; `field?`: `FieldMetadata`\<`any`\>; `name?`: `undefined`; `onChange?`:
> (`value`) => `void`; `value?`: `V`; \} \| \{ `as?`: `T`; `className?`: `string`; `defaultValue?`:
> `V`; `field?`: `undefined`; `name?`: `FieldName`\<`any`, `any`\> \| `string`; `onChange?`:
> (`value`) => `void`; `value?`: `V`; \}

Defined in:
[packages/ui/source/components/RadioGroup.tsx:26](https://github.com/jakubmazanec/tools/blob/77af8fc6f94d0ddce4ffb0d7fbfc7006c5b3d620/packages/ui/source/components/RadioGroup.tsx#L26)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
