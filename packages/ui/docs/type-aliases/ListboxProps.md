[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: ListboxProps\<T, V\>

> **ListboxProps**\<`T`, `V`\> = `ComponentProps`\<_typeof_
> [`useListboxTheme`](../variables/useListboxTheme.md)\> & `ComponentPropsWithoutRef`\<`T`\> &
> `ComponentRef`\<`T`\> & `PropsWithChildren` & \{ `as?`: `T`; `className?`: `string`;
> `defaultValue?`: `V`[]; `hideSelected?`: \{ `limit`: `number`; `message?`: `string`; \}; `items?`:
> [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple`: `true`; `name?`: `string`; `onChange?`:
> (`selectedValue`) => `void`; `placeholder?`: `string`; `showFilter?`: `boolean`; `value?`: `V`[];
> \} \| \{ `as?`: `T`; `className?`: `string`; `defaultValue?`: `V`; `hideSelected?`: `never`;
> `items?`: [`ListboxItem`](ListboxItem.md)\<`V`\>[]; `multiple?`: `false`; `name?`: `string`;
> `onChange?`: (`selectedValue`) => `void`; `placeholder?`: `string`; `showFilter?`: `boolean`;
> `value?`: `V`; \}

Defined in:
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/a1a5edf56256b0aa4e209cc73bc7a07f5d7fc236/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
