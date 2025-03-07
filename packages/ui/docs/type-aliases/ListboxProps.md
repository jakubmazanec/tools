[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ListboxProps\<T, V\>

> **ListboxProps**\<`T`, `V`\>: `ComponentProps`\<_typeof_
> [`useListboxTheme`](../functions/useListboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as`: `T`; `className`: `string`; `defaultValue`:
> `V`[]; `hideSelected`: \{ `limit`: `number`; `message`: `string`; \}; `items`:
> [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple`: `true`; `name`: `string`; `onChange`:
> (`selectedValue`) => `void`; `placeholder`: `string`; `showFilter`: `boolean`; `value`: `V`[]; \}
> \| \{ `as`: `T`; `className`: `string`; `defaultValue`: `V`; `hideSelected`: `never`; `items`:
> [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple`: `false`; `name`: `string`; `onChange`:
> (`selectedValue`) => `void`; `placeholder`: `string`; `showFilter`: `boolean`; `value`: `V`; \}

Defined in:
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/dcfb3b06be051bf99e23e7e35174b07af0f0fddd/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`
