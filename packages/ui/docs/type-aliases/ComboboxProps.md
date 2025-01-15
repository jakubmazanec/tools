[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ComboboxProps\<T, V\>

> **ComboboxProps**\<`T`, `V`\>: `ComponentProps`\<_typeof_
> [`useComboboxTheme`](../functions/useComboboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as`: `T`; `className`: `string`; `customValue`:
> `boolean`; `defaultValue`: `V`[]; `immediate`: `boolean`; `items`:
> [`ComboboxItem`](ComboboxItem.md)\<`V`\>[]; `multiple`: `true`; `name`: `string`; `onChange`:
> (`selectedValue`) => `void`; `placeholder`: `string`; `value`: `V`[]; `virtual`: `boolean`; \} \|
> \{ `as`: `T`; `className`: `string`; `customValue`: `boolean`; `defaultValue`: `V`; `immediate`:
> `boolean`; `items`: [`ComboboxItem`](ComboboxItem.md)\<`V`\>[]; `multiple`: `false`; `name`:
> `string`; `onChange`: (`selectedValue`) => `void`; `placeholder`: `string`; `value`: `V`;
> `virtual`: `boolean`; \}

Defined in:
[packages/ui/source/components/Combobox.tsx:44](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/ui/source/components/Combobox.tsx#L44)

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`
