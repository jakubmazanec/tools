[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: MapCache

Defined in: node\_modules/@types/lodash/common/common.d.ts:141

Creates a cache object to store key/value pairs.

## Properties

### clear?

> `optional` **clear?**: () => `void`

Defined in: node\_modules/@types/lodash/common/common.d.ts:170

Removes all key-value entries from the map.

#### Returns

`void`

## Methods

### delete()

> **delete**(`key`): `boolean`

Defined in: node\_modules/@types/lodash/common/common.d.ts:147

Removes `key` and its value from the cache.

#### Parameters

##### key

`any`

The key of the value to remove.

#### Returns

`boolean`

Returns `true` if the entry was removed successfully, else `false`.

---

### get()

> **get**(`key`): `any`

Defined in: node\_modules/@types/lodash/common/common.d.ts:153

Gets the cached value for `key`.

#### Parameters

##### key

`any`

The key of the value to get.

#### Returns

`any`

Returns the cached value.

---

### has()

> **has**(`key`): `boolean`

Defined in: node\_modules/@types/lodash/common/common.d.ts:159

Checks if a cached value for `key` exists.

#### Parameters

##### key

`any`

The key of the entry to check.

#### Returns

`boolean`

Returns `true` if an entry for `key` exists, else `false`.

---

### set()

> **set**(`key`, `value`): `this`

Defined in: node\_modules/@types/lodash/common/common.d.ts:166

Sets `value` to `key` of the cache.

#### Parameters

##### key

`any`

The key of the value to cache.

##### value

`any`

The value to cache.

#### Returns

`this`

Returns the cache object.
