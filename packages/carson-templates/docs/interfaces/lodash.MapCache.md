# Interface: MapCache

[lodash](../modules/lodash.md).MapCache

Creates a cache object to store key/value pairs.

## Table of contents

### Properties

- [clear](lodash.MapCache.md#clear)

### Methods

- [delete](lodash.MapCache.md#delete)
- [get](lodash.MapCache.md#get)
- [has](lodash.MapCache.md#has)
- [set](lodash.MapCache.md#set)

## Properties

### clear

• `Optional` **clear**: () => `void`

#### Type declaration

▸ (): `void`

Removes all key-value entries from the map.

##### Returns

`void`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:169

## Methods

### delete

▸ **delete**(`key`): `boolean`

Removes `key` and its value from the cache.

#### Parameters

| Name  | Type  | Description                     |
| :---- | :---- | :------------------------------ |
| `key` | `any` | The key of the value to remove. |

#### Returns

`boolean`

Returns `true` if the entry was removed successfully, else `false`.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:146

---

### get

▸ **get**(`key`): `any`

Gets the cached value for `key`.

#### Parameters

| Name  | Type  | Description                  |
| :---- | :---- | :--------------------------- |
| `key` | `any` | The key of the value to get. |

#### Returns

`any`

Returns the cached value.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:152

---

### has

▸ **has**(`key`): `boolean`

Checks if a cached value for `key` exists.

#### Parameters

| Name  | Type  | Description                    |
| :---- | :---- | :----------------------------- |
| `key` | `any` | The key of the entry to check. |

#### Returns

`boolean`

Returns `true` if an entry for `key` exists, else `false`.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:158

---

### set

▸ **set**(`key`, `value`): [`MapCache`](lodash.MapCache.md)

Sets `value` to `key` of the cache.

#### Parameters

| Name    | Type  | Description                    |
| :------ | :---- | :----------------------------- |
| `key`   | `any` | The key of the value to cache. |
| `value` | `any` | The value to cache.            |

#### Returns

[`MapCache`](lodash.MapCache.md)

Returns the cache object.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:165
