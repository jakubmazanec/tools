[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: DebouncedFuncLeading()\<T\>

## Extends

- [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

## Type parameters

• **T** _extends_ (...`args`) => `any`

> **DebouncedFuncLeading**(...`args`): `ReturnType`\<`T`\>

## Parameters

• ...**args**: `Parameters`\<`T`\>

## Returns

`ReturnType`\<`T`\>

## Source

node_modules/@types/lodash/common/function.d.ts:401

> **DebouncedFuncLeading**(...`args`): `undefined` \| `ReturnType`\<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

## Parameters

• ...**args**: `Parameters`\<`T`\>

## Returns

`undefined` \| `ReturnType`\<`T`\>

## Source

node_modules/@types/lodash/common/function.d.ts:400

## Methods

### cancel()

> **cancel**(): `void`

Throw away any pending invocation of the debounced function.

#### Returns

`void`

#### Inherited from

[`DebouncedFunc`](DebouncedFunc.md).[`cancel`](DebouncedFunc.md#cancel)

#### Source

node_modules/@types/lodash/common/function.d.ts:389

---

### flush()

> **flush**(): `ReturnType`\<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return its
return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function was
never invoked.

#### Returns

`ReturnType`\<`T`\>

#### Overrides

[`DebouncedFunc`](DebouncedFunc.md).[`flush`](DebouncedFunc.md#flush)

#### Source

node_modules/@types/lodash/common/function.d.ts:402
