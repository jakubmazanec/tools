[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ComboboxProps\<T, V\>

> **ComboboxProps**\<`T`, `V`\>: `PropsWithChildren`\<`ComponentProps`\<_typeof_
> [`useComboboxTheme`](../functions/useComboboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> & \{
> `as`: `T`; `className`: `string`; `customValue`: `boolean`; `defaultValue`: `V`[]; `immediate`:
> `boolean`; `items`: [`ComboboxItem`](ComboboxItem.md)\<`V`\>[]; `multiple`: `true`; `name`:
> `string`; `onChange`: (`selectedValue`) => `void`; `placeholder`: `string`; `value`: `V`[];
> `virtual`: `boolean`; \} \| \{ `as`: `T`; `className`: `string`; `customValue`: `boolean`;
> `defaultValue`: `V`; `immediate`: `boolean`; `items`: [`ComboboxItem`](ComboboxItem.md)\<`V`\>[];
> `multiple`: `false`; `name`: `string`; `onChange`: (`selectedValue`) => `void`; `placeholder`:
> `string`; `value`: `V`; `virtual`: `boolean`; \}\>

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`

## Defined in

[packages/ui/source/components/Combobox.tsx:44](https://github.com/jakubmazanec/tools/blob/92d3fc1374d1ad6d45198d05d061e0f856a89434/packages/ui/source/components/Combobox.tsx#L44)
