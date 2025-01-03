[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ListboxProps\<T, V\>

> **ListboxProps**\<`T`, `V`\>: `PropsWithChildren`\<`ComponentProps`\<_typeof_
> [`useListboxTheme`](../functions/useListboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> & \{
> `as`: `T`; `className`: `string`; `defaultValue`: `V`[]; `hideSelected`: \{ `limit`: `number`;
> `message`: `string`; \}; `items`: [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple`: `true`;
> `name`: `string`; `onChange`: (`selectedValue`) => `void`; `placeholder`: `string`; `showFilter`:
> `boolean`; `value`: `V`[]; \} \| \{ `as`: `T`; `className`: `string`; `defaultValue`: `V`;
> `hideSelected`: `never`; `items`: [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple`: `false`;
> `name`: `string`; `onChange`: (`selectedValue`) => `void`; `placeholder`: `string`; `showFilter`:
> `boolean`; `value`: `V`; \}\>

Defined in:
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/66e975ab265618dba82f8e4c56654145b7ba4db7/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`
