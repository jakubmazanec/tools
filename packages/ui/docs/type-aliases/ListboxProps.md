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
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/db0bf84472e7335ce80a73176c6b844cbee1d751/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
