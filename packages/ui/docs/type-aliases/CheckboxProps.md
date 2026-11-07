[**@jakubmazanec/ui**](../README.md)

---

# Type Alias: CheckboxProps\<T\>

> **CheckboxProps**\<`T`\> = `ComponentProps`\<_typeof_
> [`useCheckboxTheme`](../variables/useCheckboxTheme.md)\> & `ComponentRef`\<`T`\> &
> `Omit`\<`ComponentPropsWithoutRef`\<`T`\>, `"onChange"`\> & `object`

Defined in:
[packages/ui/source/components/Checkbox.tsx:27](https://github.com/jakubmazanec/tools/blob/36b3404d1b71114f1d5127b86dcfe4cb029f111f/packages/ui/source/components/Checkbox.tsx#L27)

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
