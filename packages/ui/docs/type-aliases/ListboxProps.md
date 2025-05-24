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
[packages/ui/source/components/Listbox.tsx:46](https://github.com/jakubmazanec/tools/blob/74fa88a6249b3d486436ae7655f4962bc4a86e11/packages/ui/source/components/Listbox.tsx#L46)

## Type Parameters

### T

`T` _extends_ `ElementType`

### V

`V` _extends_ `boolean` \| `number` \| `string`
