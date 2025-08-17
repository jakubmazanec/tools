[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: CheckboxProps\<T\>

> **CheckboxProps**\<`T`\> = `ComponentProps`\<_typeof_
> [`useCheckboxTheme`](../variables/useCheckboxTheme.md)\> & `ComponentRef`\<`T`\> &
> `Omit`\<`ComponentPropsWithoutRef`\<`T`\>, `"onChange"`\> & `object`

Defined in:
[packages/ui/source/components/Checkbox.tsx:27](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/ui/source/components/Checkbox.tsx#L27)

## Type declaration

### as?

> `optional` **as**: `T`

### autoFocus?

> `optional` **autoFocus**: `boolean`

### checked?

> `optional` **checked**: `boolean`

### className?

> `optional` **className**: `string`

### indeterminate?

> `optional` **indeterminate**: `boolean`

### name?

> `optional` **name**: `string`

### onChange()?

> `optional` **onChange**: (`checked`) => `void`

#### Parameters

##### checked

`boolean`

#### Returns

`void`

## Type Parameters

### T

`T` _extends_ `ElementType`
