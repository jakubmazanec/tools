[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: DebouncedFunc()\<T\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:374

## Extended by

- [`DebouncedFuncLeading`](DebouncedFuncLeading.md)

## Type Parameters

### T

`T` _extends_ (...`args`) => `any`

> **DebouncedFunc**(...`args`): `ReturnType`\<`T`\> \| `undefined`

Defined in: node\_modules/@types/lodash/common/function.d.ts:384

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

## Parameters

### args

...`Parameters`\<`T`\>

## Returns

`ReturnType`\<`T`\> \| `undefined`

## Methods

### cancel()

> **cancel**(): `void`

Defined in: node\_modules/@types/lodash/common/function.d.ts:389

Throw away any pending invocation of the debounced function.

#### Returns

`void`

---

### flush()

> **flush**(): `ReturnType`\<`T`\> \| `undefined`

Defined in: node\_modules/@types/lodash/common/function.d.ts:398

If there is a pending invocation of the debounced function, invoke it immediately and return its
return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function was
never invoked.

#### Returns

`ReturnType`\<`T`\> \| `undefined`
