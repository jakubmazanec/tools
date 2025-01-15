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
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/dd3219e5c9e39fb2c6c2fa06c4f20acd2118ac84/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`
