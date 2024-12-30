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

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`

## Defined in

[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/3e339f67fc5b5cd011c28acb315570a2f29efedc/packages/ui/source/components/Listbox.tsx#L46)
