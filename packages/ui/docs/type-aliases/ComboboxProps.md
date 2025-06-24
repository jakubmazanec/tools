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
[packages/ui/source/components/Combobox.tsx:44](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/ui/source/components/Combobox.tsx#L44)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
