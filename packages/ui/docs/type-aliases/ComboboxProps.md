[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ComboboxProps\<T, V\>

> **ComboboxProps**\<`T`, `V`\> = `ComponentProps`\<_typeof_
> [`useComboboxTheme`](../variables/useComboboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as?`: `T`; `className?`: `string`;
> `customValue?`: `boolean`; `defaultValue?`: `V`[]; `immediate?`: `boolean`; `items?`:
> [`ComboboxItem`](ComboboxItem.md)\<`V`\>[]; `multiple`: `true`; `name?`: `string`; `onChange?`:
> (`selectedValue`) => `void`; `placeholder?`: `string`; `value?`: `V`[]; `virtual?`: `boolean`; \}
> \| \{ `as?`: `T`; `className?`: `string`; `customValue?`: `boolean`; `defaultValue?`: `V`;
> `immediate?`: `boolean`; `items?`: [`ComboboxItem`](ComboboxItem.md)\<`V`\>[]; `multiple?`:
> `false`; `name?`: `string`; `onChange?`: (`selectedValue`) => `void`; `placeholder?`: `string`;
> `value?`: `V`; `virtual?`: `boolean`; \}

Defined in:
[packages/ui/source/components/Combobox.tsx:44](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/ui/source/components/Combobox.tsx#L44)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
