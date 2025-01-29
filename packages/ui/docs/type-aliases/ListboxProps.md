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
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/4a8f82fa13ce52bb52e412e9ac98b543cce14fc2/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

• **T** _extends_ `ElementType`

• **V** _extends_ `boolean` \| `number` \| `string`
