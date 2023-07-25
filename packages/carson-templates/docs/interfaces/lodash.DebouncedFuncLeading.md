# Interface: DebouncedFuncLeading<T\>

[lodash](../modules/lodash.md).DebouncedFuncLeading

## Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `T`  | extends (...`args`: `any`[]) => `any` |

## Hierarchy

- [`DebouncedFunc`](lodash.DebouncedFunc.md)<`T`\>

  ↳ **`DebouncedFuncLeading`**

## Callable

### DebouncedFuncLeading

▸ **DebouncedFuncLeading**(`...args`): `ReturnType`<`T`\>

#### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `...args` | `Parameters`<`T`\> |

#### Returns

`ReturnType`<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:401

### DebouncedFuncLeading

▸ **DebouncedFuncLeading**(`...args`): `undefined` \| `ReturnType`<`T`\>

Call the original function, but applying the debounce rules.

If the debounced function can be run immediately, this calls it and returns its return value.

Otherwise, it returns the return value of the last invocation, or undefined if the debounced
function was not invoked yet.

#### Parameters

| Name      | Type               |
| :-------- | :----------------- |
| `...args` | `Parameters`<`T`\> |

#### Returns

`undefined` \| `ReturnType`<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:384

## Table of contents

### Methods

- [cancel](lodash.DebouncedFuncLeading.md#cancel)
- [flush](lodash.DebouncedFuncLeading.md#flush)

## Methods

### cancel

▸ **cancel**(): `void`

Throw away any pending invocation of the debounced function.

#### Returns

`void`

#### Inherited from

[DebouncedFunc](lodash.DebouncedFunc.md).[cancel](lodash.DebouncedFunc.md#cancel)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:389

---

### flush

▸ **flush**(): `ReturnType`<`T`\>

If there is a pending invocation of the debounced function, invoke it immediately and return its
return value.

Otherwise, return the value from the last invocation, or undefined if the debounced function was
never invoked.

#### Returns

`ReturnType`<`T`\>

#### Overrides

[DebouncedFunc](lodash.DebouncedFunc.md).[flush](lodash.DebouncedFunc.md#flush)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:402
