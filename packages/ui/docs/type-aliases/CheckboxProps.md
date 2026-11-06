[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: CheckboxProps\<T\>

> **CheckboxProps**\<`T`\> = `ComponentProps`\<_typeof_
> [`useCheckboxTheme`](../variables/useCheckboxTheme.md)\> & `ComponentRef`\<`T`\> &
> `Omit`\<`ComponentPropsWithoutRef`\<`T`\>, `"onChange"`\> & `object`

Defined in:
[packages/ui/source/components/Checkbox.tsx:27](https://github.com/jakubmazanec/tools/blob/77af8fc6f94d0ddce4ffb0d7fbfc7006c5b3d620/packages/ui/source/components/Checkbox.tsx#L27)

## Type Parameters

### T

`T` _extends_ `ElementType`

## Type Declaration

### as?

> `optional` **as?**: `T`

### autoFocus?

> `optional` **autoFocus?**: `boolean`

### checked?

> `optional` **checked?**: `boolean`

### className?

> `optional` **className?**: `string`

### indeterminate?

> `optional` **indeterminate?**: `boolean`

### name?

> `optional` **name?**: `string`

### onChange?

> `optional` **onChange?**: (`checked`) => `void`

#### Parameters

##### checked

`boolean`

#### Returns

`void`
