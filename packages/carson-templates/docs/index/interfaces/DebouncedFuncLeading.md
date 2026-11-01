[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: DebouncedFuncLeading()\<T\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:400

## Extends

- [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

## Type Parameters

### T

`T` _extends_ (...`args`) => `any`

## Call Signature

> **DebouncedFuncLeading**(...`args`): `ReturnType`\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:401

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`ReturnType`\<`T`\>

## Call Signature

> **DebouncedFuncLeading**(...`args`): `ReturnType`\<`T`\> \| `undefined`

Defined in: node\_modules/@types/lodash/common/function.d.ts:400

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

### Parameters

#### args

...`Parameters`\<`T`\>

### Returns

`ReturnType`\<`T`\> \| `undefined`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: node\_modules/@types/lodash/common/function.d.ts:389

Throw away any pending invocation of the debounced function.

#### Returns

`void`

#### Inherited from

[`DebouncedFunc`](DebouncedFunc.md).[`cancel`](DebouncedFunc.md#cancel)

---

### flush()

> **flush**(): `ReturnType`\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:402

If there is a pending invocation of the debounced function, invoke it immediately and return its
return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function was
never invoked.

#### Returns

`ReturnType`\<`T`\>

#### Overrides

[`DebouncedFunc`](DebouncedFunc.md).[`flush`](DebouncedFunc.md#flush)
