# Class: WorkspaceDependencies\<M\>

A collection of WorkspaceDependency | workspace dependencies that are installed in
[a workspace](Workspace.md).

## Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

## Hierarchy

- `Array`\<`WorkspaceDependency`\>

  ↳ **`WorkspaceDependencies`**

## Table of contents

### Constructors

- [constructor](WorkspaceDependencies.md#constructor)

### Properties

- [[unscopables]](WorkspaceDependencies.md#[unscopables])
- [length](WorkspaceDependencies.md#length)
- [workspace](WorkspaceDependencies.md#workspace)
- [[species]](WorkspaceDependencies.md#[species])

### Methods

- [[iterator]](WorkspaceDependencies.md#[iterator])
- [at](WorkspaceDependencies.md#at)
- [concat](WorkspaceDependencies.md#concat)
- [copyWithin](WorkspaceDependencies.md#copywithin)
- [entries](WorkspaceDependencies.md#entries)
- [every](WorkspaceDependencies.md#every)
- [fill](WorkspaceDependencies.md#fill)
- [filter](WorkspaceDependencies.md#filter)
- [find](WorkspaceDependencies.md#find)
- [findIndex](WorkspaceDependencies.md#findindex)
- [findLast](WorkspaceDependencies.md#findlast)
- [findLastIndex](WorkspaceDependencies.md#findlastindex)
- [flat](WorkspaceDependencies.md#flat)
- [flatMap](WorkspaceDependencies.md#flatmap)
- [forEach](WorkspaceDependencies.md#foreach)
- [getVersions](WorkspaceDependencies.md#getversions)
- [includes](WorkspaceDependencies.md#includes)
- [indexOf](WorkspaceDependencies.md#indexof)
- [join](WorkspaceDependencies.md#join)
- [keys](WorkspaceDependencies.md#keys)
- [lastIndexOf](WorkspaceDependencies.md#lastindexof)
- [map](WorkspaceDependencies.md#map)
- [pop](WorkspaceDependencies.md#pop)
- [push](WorkspaceDependencies.md#push)
- [reduce](WorkspaceDependencies.md#reduce)
- [reduceRight](WorkspaceDependencies.md#reduceright)
- [reverse](WorkspaceDependencies.md#reverse)
- [shift](WorkspaceDependencies.md#shift)
- [slice](WorkspaceDependencies.md#slice)
- [some](WorkspaceDependencies.md#some)
- [sort](WorkspaceDependencies.md#sort)
- [splice](WorkspaceDependencies.md#splice)
- [toLocaleString](WorkspaceDependencies.md#tolocalestring)
- [toReversed](WorkspaceDependencies.md#toreversed)
- [toSorted](WorkspaceDependencies.md#tosorted)
- [toSpliced](WorkspaceDependencies.md#tospliced)
- [toString](WorkspaceDependencies.md#tostring)
- [unshift](WorkspaceDependencies.md#unshift)
- [values](WorkspaceDependencies.md#values)
- [with](WorkspaceDependencies.md#with)
- [from](WorkspaceDependencies.md#from)
- [fromWorkspace](WorkspaceDependencies.md#fromworkspace)
- [isArray](WorkspaceDependencies.md#isarray)
- [of](WorkspaceDependencies.md#of)

## Constructors

### constructor

• **new WorkspaceDependencies**\<`M`\>(`...args`):
[`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

#### Parameters

| Name      | Type                                                           |
| :-------- | :------------------------------------------------------------- |
| `...args` | [...WorkspaceDependency[], [`Workspace`](Workspace.md)\<`M`\>] |

#### Returns

[`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

#### Overrides

Array\&lt;WorkspaceDependency\&gt;.constructor

#### Defined in

[packages/carson/source/workspace/WorkspaceDependencies.ts:19](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/carson/source/workspace/WorkspaceDependencies.ts#L19)

## Properties

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true' when they will be absent when used in a 'with'
statement.

#### Type declaration

| Name              | Type                            | Description                                                                                                   |
| :---------------- | :------------------------------ | :------------------------------------------------------------------------------------------------------------ |
| `[unscopables]?`  | `boolean`                       | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?`         | `boolean`                       | Gets or sets the length of the array. This is a number one higher than the highest index in the array.        |
| `[iterator]?`     | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `at?`             | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `concat?`         | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `copyWithin?`     | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `entries?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `every?`          | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `fill?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `filter?`         | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `find?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `findIndex?`      | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `findLast?`       | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `findLastIndex?`  | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `flat?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `flatMap?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `forEach?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `includes?`       | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `indexOf?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `join?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `keys?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `lastIndexOf?`    | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `map?`            | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `pop?`            | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `push?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `reduce?`         | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `reduceRight?`    | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `reverse?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `shift?`          | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `slice?`          | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `some?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `sort?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `splice?`         | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `toLocaleString?` | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `toReversed?`     | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `toSorted?`       | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `toSpliced?`      | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `toString?`       | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `unshift?`        | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `values?`         | \{ `valueOf`: () => `boolean` } | -                                                                                                             |
| `with?`           | \{ `valueOf`: () => `boolean` } | -                                                                                                             |

#### Inherited from

Array.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

---

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the
array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1325

---

### workspace

• **workspace**: [`Workspace`](Workspace.md)\<`M`\>

The workspace the dependencies are installed in.

#### Defined in

[packages/carson/source/workspace/WorkspaceDependencies.ts:17](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/carson/source/workspace/WorkspaceDependencies.ts#L17)

---

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`WorkspaceDependency`\>

Iterator

#### Returns

`IterableIterator`\<`WorkspaceDependency`\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:58

---

### at

▸ **at**(`index`): `undefined` \| `WorkspaceDependency`

Returns the item located at the specified index.

#### Parameters

| Name    | Type     | Description                                                                                         |
| :------ | :------- | :-------------------------------------------------------------------------------------------------- |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

Array.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:24

---

### concat

▸ **concat**(`...items`): `WorkspaceDependency`[]

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

#### Parameters

| Name       | Type                                     | Description                                                    |
| :--------- | :--------------------------------------- | :------------------------------------------------------------- |
| `...items` | `ConcatArray`\<`WorkspaceDependency`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1349

▸ **concat**(`...items`): `WorkspaceDependency`[]

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

#### Parameters

| Name       | Type                                                                | Description                                                    |
| :--------- | :------------------------------------------------------------------ | :------------------------------------------------------------- |
| `...items` | (`WorkspaceDependency` \| `ConcatArray`\<`WorkspaceDependency`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1355

---

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): `this`

Returns the this object after copying a section of the array identified by start and end to the same
array starting at position target

#### Parameters

| Name     | Type     | Description                                                                                           |
| :------- | :------- | :---------------------------------------------------------------------------------------------------- |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array.        |
| `start`  | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?`   | `number` | If not specified, length of the this object is used as its default value.                             |

#### Returns

`this`

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:62

---

### entries

▸ **entries**(): `IterableIterator`\<[`number`, `WorkspaceDependency`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, `WorkspaceDependency`]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:63

---

### every

▸ **every**\<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `S`  | extends `WorkspaceDependency` |

#### Parameters

| Name        | Type                                                                                                | Description                                                                                                                                                                                                                                  |
| :---------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?`  | `any`                                                                                               | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.                                                                                                         |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1432

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name        | Type                                                                                               | Description                                                                                                                                                                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?`  | `any`                                                                                              | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.                                                                                                         |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

---

### fill

▸ **fill**(`value`, `start?`, `end?`): `this`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified
array

#### Parameters

| Name     | Type                  | Description                                                                                                                       |
| :------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `value`  | `WorkspaceDependency` | value to fill array section with                                                                                                  |
| `start?` | `number`              | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?`   | `number`              | index to stop filling the array at. If end is negative, it is treated as length+end.                                              |

#### Returns

`this`

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:51

---

### filter

▸ **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `S`  | extends `WorkspaceDependency` |

#### Parameters

| Name        | Type                                                                                                | Description                                                                                                                           |
| :---------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?`  | `any`                                                                                               | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.  |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1468

▸ **filter**(`predicate`, `thisArg?`): `WorkspaceDependency`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name        | Type                                                                                               | Description                                                                                                                           |
| :---------- | :------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?`  | `any`                                                                                              | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.  |

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1474

---

### find

▸ **find**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `S`  | extends `WorkspaceDependency` |

#### Parameters

| Name        | Type                                                                                              | Description                                                                                                                                                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `obj`: `WorkspaceDependency`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?`  | `any`                                                                                             | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.                                                                                                         |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:29

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `WorkspaceDependency`

#### Parameters

| Name        | Type                                                                                             |
| :---------- | :----------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `obj`: `WorkspaceDependency`[]) => `unknown` |
| `thisArg?`  | `any`                                                                                            |

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:30

---

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

#### Parameters

| Name        | Type                                                                                             | Description                                                                                                                                                                                                                                   |
| :---------- | :----------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `obj`: `WorkspaceDependency`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?`  | `any`                                                                                            | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.                                                                                                            |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:41

---

### findLast

▸ **findLast**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the last element in the array where predicate is true, and undefined otherwise.

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `S`  | extends `WorkspaceDependency` |

#### Parameters

| Name        | Type                                                                                                | Description                                                                                                                                                                                                                                             |
| :---------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => value is S | findLast calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLast immediately returns that element value. Otherwise, findLast returns undefined. |
| `thisArg?`  | `any`                                                                                               | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.                                                                                                                      |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.findLast

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:29

▸ **findLast**(`predicate`, `thisArg?`): `undefined` \| `WorkspaceDependency`

#### Parameters

| Name        | Type                                                                                               |
| :---------- | :------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `unknown` |
| `thisArg?`  | `any`                                                                                              |

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

Array.findLast

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:30

---

### findLastIndex

▸ **findLastIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the last element in the array where predicate is true, and -1 otherwise.

#### Parameters

| Name        | Type                                                                                               | Description                                                                                                                                                                                                                                                     |
| :---------- | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `unknown` | findLastIndex calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1. |
| `thisArg?`  | `any`                                                                                              | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.                                                                                                                              |

#### Returns

`number`

#### Inherited from

Array.findLastIndex

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:41

---

### flat

▸ **flat**\<`A`, `D`\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the specified
depth.

#### Type parameters

| Name | Type                   |
| :--- | :--------------------- |
| `A`  | `A`                    |
| `D`  | extends `number` = `1` |

#### Parameters

| Name     | Type | Description                 |
| :------- | :--- | :-------------------------- |
| `this`   | `A`  | -                           |
| `depth?` | `D`  | The maximum recursion depth |

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:75

---

### flatMap

▸ **flatMap**\<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into a new
array. This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name   | Type        |
| :----- | :---------- |
| `U`    | `U`         |
| `This` | `undefined` |

#### Parameters

| Name       | Type                                                                                                                           | Description                                                                                                                           |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `callback` | (`this`: `This`, `value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This`                                                                                                                         | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value.   |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:64

---

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name         | Type                                                                                            | Description                                                                                                                           |
| :----------- | :---------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `callbackfn` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.          |
| `thisArg?`   | `any`                                                                                           | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1456

---

### getVersions

▸ **getVersions**(`options?`): `Record`\<`string`, `string`[]\>

Creates map of all dependnecies and their installed version.

#### Parameters

| Name       | Type                                      | Description |
| :--------- | :---------------------------------------- | :---------- |
| `options?` | `WorkspaceDependenciesGetVersionsOptions` | Options.    |

#### Returns

`Record`\<`string`, `string`[]\>

Object whose keys are dependency names and values are sorted versions.

#### Defined in

[packages/carson/source/workspace/WorkspaceDependencies.ts:187](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/carson/source/workspace/WorkspaceDependencies.ts#L187)

---

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name            | Type                  | Description                                                               |
| :-------------- | :-------------------- | :------------------------------------------------------------------------ |
| `searchElement` | `WorkspaceDependency` | The element to search for.                                                |
| `fromIndex?`    | `number`              | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:25

---

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name            | Type                  | Description                                                                                          |
| :-------------- | :-------------------- | :--------------------------------------------------------------------------------------------------- |
| `searchElement` | `WorkspaceDependency` | The value to locate in the array.                                                                    |
| `fromIndex?`    | `number`              | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1417

---

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name         | Type     | Description                                                                                                                                          |
| :----------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1360

---

### keys

▸ **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:68

---

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not
present.

#### Parameters

| Name            | Type                  | Description                                                                                                                      |
| :-------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `searchElement` | `WorkspaceDependency` | The value to locate in the array.                                                                                                |
| `fromIndex?`    | `number`              | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1423

---

### map

▸ **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains
the results.

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name         | Type                                                                                         | Description                                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `callbackfn` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.   |
| `thisArg?`   | `any`                                                                                        | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1462

---

### pop

▸ **pop**(): `undefined` \| `WorkspaceDependency`

Removes the last element from an array and returns it. If the array is empty, undefined is returned
and the array is not modified.

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1338

---

### push

▸ **push**(`...newWorkspaceDependencies`): `number`

Adds one or more new dependencies.

#### Parameters

| Name                          | Type                    | Description              |
| :---------------------------- | :---------------------- | :----------------------- |
| `...newWorkspaceDependencies` | `WorkspaceDependency`[] | The dependencies to add. |

#### Returns

`number`

The new length of the collection.

#### Overrides

Array.push

#### Defined in

[packages/carson/source/workspace/WorkspaceDependencies.ts:40](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/carson/source/workspace/WorkspaceDependencies.ts#L40)

---

### reduce

▸ **reduce**(`callbackfn`): `WorkspaceDependency`

Calls the specified callback function for all the elements in an array. The return value of the
callback function is the accumulated result, and is provided as an argument in the next call to the
callback function.

#### Parameters

| Name         | Type                                                                                                                                                                 | Description                                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `callbackfn` | (`previousValue`: `WorkspaceDependency`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `WorkspaceDependency` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`WorkspaceDependency`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1480

▸ **reduce**(`callbackfn`, `initialValue`): `WorkspaceDependency`

#### Parameters

| Name           | Type                                                                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackfn`   | (`previousValue`: `WorkspaceDependency`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `WorkspaceDependency` |
| `initialValue` | `WorkspaceDependency`                                                                                                                                                |

#### Returns

`WorkspaceDependency`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1481

▸ **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the
callback function is the accumulated result, and is provided as an argument in the next call to the
callback function.

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name           | Type                                                                                                                             | Description                                                                                                                                                                                      |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackfn`   | (`previousValue`: `U`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.                                                            |
| `initialValue` | `U`                                                                                                                              | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1487

---

### reduceRight

▸ **reduceRight**(`callbackfn`): `WorkspaceDependency`

Calls the specified callback function for all the elements in an array, in descending order. The
return value of the callback function is the accumulated result, and is provided as an argument in
the next call to the callback function.

#### Parameters

| Name         | Type                                                                                                                                                                 | Description                                                                                                                                |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackfn` | (`previousValue`: `WorkspaceDependency`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `WorkspaceDependency` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`WorkspaceDependency`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1493

▸ **reduceRight**(`callbackfn`, `initialValue`): `WorkspaceDependency`

#### Parameters

| Name           | Type                                                                                                                                                                 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackfn`   | (`previousValue`: `WorkspaceDependency`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `WorkspaceDependency` |
| `initialValue` | `WorkspaceDependency`                                                                                                                                                |

#### Returns

`WorkspaceDependency`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1494

▸ **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The
return value of the callback function is the accumulated result, and is provided as an argument in
the next call to the callback function.

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name           | Type                                                                                                                             | Description                                                                                                                                                                                      |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbackfn`   | (`previousValue`: `U`, `currentValue`: `WorkspaceDependency`, `currentIndex`: `number`, `array`: `WorkspaceDependency`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.                                                       |
| `initialValue` | `U`                                                                                                                              | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1500

---

### reverse

▸ **reverse**(): `WorkspaceDependency`[]

Reverses the elements in an array in place. This method mutates the array and returns a reference to
the same array.

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

---

### shift

▸ **shift**(): `undefined` \| `WorkspaceDependency`

Removes the first element from an array and returns it. If the array is empty, undefined is returned
and the array is not modified.

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1370

---

### slice

▸ **slice**(`start?`, `end?`): `WorkspaceDependency`[]

Returns a copy of a section of an array. For both start and end, a negative index can be used to
indicate an offset from the end of the array. For example, -2 refers to the second to last element
of the array.

#### Parameters

| Name     | Type     | Description                                                                                                                                                                    |
| :------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.                                                            |
| `end?`   | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

---

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name        | Type                                                                                               | Description                                                                                                                                                                                                                                |
| :---------- | :------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `predicate` | (`value`: `WorkspaceDependency`, `index`: `number`, `array`: `WorkspaceDependency`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?`  | `any`                                                                                              | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.                                                                                                       |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1450

---

### sort

▸ **sort**(`compareFn?`): `this`

Sorts an array in place. This method mutates the array and returns a reference to the same array.

#### Parameters

| Name         | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                     |
| :----------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `compareFn?` | (`a`: `WorkspaceDependency`, `b`: `WorkspaceDependency`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. `ts [11,2,22,1].sort((a, b) => a - b) ` |

#### Returns

`this`

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1391

---

### splice

▸ **splice**(`start`, `deleteCount?`): `WorkspaceDependency`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the
deleted elements.

#### Parameters

| Name           | Type     | Description                                                                 |
| :------------- | :------- | :-------------------------------------------------------------------------- |
| `start`        | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove.                                           |

#### Returns

`WorkspaceDependency`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1398

▸ **splice**(`start`, `deleteCount`, `...items`): `WorkspaceDependency`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the
deleted elements.

#### Parameters

| Name          | Type                    | Description                                                                 |
| :------------ | :---------------------- | :-------------------------------------------------------------------------- |
| `start`       | `number`                | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number`                | The number of elements to remove.                                           |
| `...items`    | `WorkspaceDependency`[] | Elements to insert into the array in place of the deleted elements.         |

#### Returns

`WorkspaceDependency`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1406

---

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their
toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1333

---

### toReversed

▸ **toReversed**(): `WorkspaceDependency`[]

Returns a copy of an array with its elements reversed.

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.toReversed

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:46

---

### toSorted

▸ **toSorted**(`compareFn?`): `WorkspaceDependency`[]

Returns a copy of an array with its elements sorted.

#### Parameters

| Name         | Type                                                                 | Description                                                                                                                                                                                                                                                                                                                                              |
| :----------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `compareFn?` | (`a`: `WorkspaceDependency`, `b`: `WorkspaceDependency`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. `ts [11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22] ` |

#### Returns

`WorkspaceDependency`[]

#### Inherited from

Array.toSorted

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:57

---

### toSpliced

▸ **toSpliced**(`start`, `deleteCount`, `...items`): `WorkspaceDependency`[]

Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns
the copied array.

#### Parameters

| Name          | Type                    | Description                                                                 |
| :------------ | :---------------------- | :-------------------------------------------------------------------------- |
| `start`       | `number`                | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number`                | The number of elements to remove.                                           |
| `...items`    | `WorkspaceDependency`[] | Elements to insert into the copied array in place of the deleted elements.  |

#### Returns

`WorkspaceDependency`[]

The copied array.

#### Inherited from

Array.toSpliced

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:66

▸ **toSpliced**(`start`, `deleteCount?`): `WorkspaceDependency`[]

Copies an array and removes elements while returning the remaining elements.

#### Parameters

| Name           | Type     | Description                                                                 |
| :------------- | :------- | :-------------------------------------------------------------------------- |
| `start`        | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove.                                           |

#### Returns

`WorkspaceDependency`[]

A copy of the original array with the remaining elements.

#### Inherited from

Array.toSpliced

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:74

---

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1329

---

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name       | Type                    | Description                                   |
| :--------- | :---------------------- | :-------------------------------------------- |
| `...items` | `WorkspaceDependency`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1411

---

### values

▸ **values**(): `IterableIterator`\<`WorkspaceDependency`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<`WorkspaceDependency`\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:73

---

### with

▸ **with**(`index`, `value`): `WorkspaceDependency`[]

Copies an array, then overwrites the value at the provided index with the given value. If the index
is negative, then it replaces from the end of the array.

#### Parameters

| Name    | Type                  | Description                                                                                                |
| :------ | :-------------------- | :--------------------------------------------------------------------------------------------------------- |
| `index` | `number`              | The index of the value to overwrite. If the index is negative, then it replaces from the end of the array. |
| `value` | `WorkspaceDependency` | The value to write into the copied array.                                                                  |

#### Returns

`WorkspaceDependency`[]

The copied array with the updated value.

#### Inherited from

Array.with

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:85

---

### from

▸ **from**\<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type               | Description                                  |
| :---------- | :----------------- | :------------------------------------------- |
| `arrayLike` | `ArrayLike`\<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:70

▸ **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name        | Type                             | Description                                               |
| :---------- | :------------------------------- | :-------------------------------------------------------- |
| `arrayLike` | `ArrayLike`\<`T`\>               | An array-like object to convert to an array.              |
| `mapfn`     | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?`  | `any`                            | Value of 'this' used to invoke the mapfn.                 |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:78

▸ **from**\<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                    | Description                                |
| :--------- | :-------------------------------------- | :----------------------------------------- |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:81

▸ **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name       | Type                                    | Description                                               |
| :--------- | :-------------------------------------- | :-------------------------------------------------------- |
| `iterable` | `Iterable`\<`T`\> \| `ArrayLike`\<`T`\> | An iterable object to convert to an array.                |
| `mapfn`    | (`v`: `T`, `k`: `number`) => `U`        | A mapping function to call on every element of the array. |
| `thisArg?` | `any`                                   | Value of 'this' used to invoke the mapfn.                 |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:89

---

### fromWorkspace

▸ **fromWorkspace**\<`M`\>(`workspace`, `options?`):
[`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

Creates new [WorkspaceDependencies](WorkspaceDependencies.md) instance from a
[Workspace](Workspace.md) instance and its dependencies.

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `M`  | extends `boolean` = `true` |

#### Parameters

| Name        | Type                                        | Description                                          |
| :---------- | :------------------------------------------ | :--------------------------------------------------- |
| `workspace` | [`Workspace`](Workspace.md)\<`M`\>          | The workspace from which the dependnecies are taken. |
| `options?`  | `WorkspaceDependenciesFromWorkspaceOptions` | Options.                                             |

#### Returns

[`WorkspaceDependencies`](WorkspaceDependencies.md)\<`M`\>

The new [WorkspaceDependencies](WorkspaceDependencies.md) instance.

#### Defined in

[packages/carson/source/workspace/WorkspaceDependencies.ts:83](https://github.com/jakubmazanec/js-tools/blob/abe95ab/packages/carson/source/workspace/WorkspaceDependencies.ts#L83)

---

### isArray

▸ **isArray**(`arg`): arg is any[]

#### Parameters

| Name  | Type  |
| :---- | :---- |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1512

---

### of

▸ **of**\<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type  | Description                                           |
| :--------- | :---- | :---------------------------------------------------- |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:84
