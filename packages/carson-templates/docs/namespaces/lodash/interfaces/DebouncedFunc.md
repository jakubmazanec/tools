[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: DebouncedFunc()\<T\>

## Extended by

- [`DebouncedFuncLeading`](DebouncedFuncLeading.md)

## Type Parameters

• **T** _extends_ (...`args`) => `any`

> **DebouncedFunc**(...`args`): `undefined` \| `ReturnType`\<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

## Parameters

• ...**args**: `Parameters`\<`T`\>

## Returns

`undefined` \| `ReturnType`\<`T`\>

## Defined in

node_modules/@types/lodash/common/function.d.ts:384

## Methods

### cancel()

> **cancel**(): `void`

Throw away any pending invocation of the debounced function.

#### Returns

`void`

#### Defined in

node_modules/@types/lodash/common/function.d.ts:389

---

### flush()

> **flush**(): `undefined` \| `ReturnType`\<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return its
return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function was
never invoked.

#### Returns

`undefined` \| `ReturnType`\<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:398
