[**@jakubmazanec/carson**](../README.md)

---

# Class: WorkspaceDependencies\<M\>

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:13](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L13)

A collection of WorkspaceDependency \| workspace dependencies that are installed in
[a workspace](Workspace.md).

## Extends

- `Array`\<`WorkspaceDependency`\>

## Type Parameters

### M

`M` _extends_ `boolean` = `true`

## Indexable

\[`n`: `number`\]: `WorkspaceDependency`

## Constructors

### Constructor

> **new WorkspaceDependencies**\<`M`\>(...`args`): `WorkspaceDependencies`\<`M`\>

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:17](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L17)

#### Parameters

##### args

...\[`...WorkspaceDependency[]`, [`Workspace`](Workspace.md)\<`M`\>\]

#### Returns

`WorkspaceDependencies`\<`M`\>

#### Overrides

`Array<WorkspaceDependency>.constructor`

## Properties

### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

Is an object whose properties have the value 'true' when they will be absent when used in a 'with'
statement.

#### Index Signature

\[`key`: `number`\]: `undefined` \| `boolean`

#### \[iterator\]?

> `optional` **\[iterator\]**: `boolean`

#### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true' when they will be absent when used in a 'with'
statement.

#### at?

> `optional` **at**: `boolean`

#### concat?

> `optional` **concat**: `boolean`

#### copyWithin?

> `optional` **copyWithin**: `boolean`

#### entries?

> `optional` **entries**: `boolean`

#### every?

> `optional` **every**: `boolean`

#### fill?

> `optional` **fill**: `boolean`

#### filter?

> `optional` **filter**: `boolean`

#### find?

> `optional` **find**: `boolean`

#### findIndex?

> `optional` **findIndex**: `boolean`

#### findLast?

> `optional` **findLast**: `boolean`

#### findLastIndex?

> `optional` **findLastIndex**: `boolean`

#### flat?

> `optional` **flat**: `boolean`

#### flatMap?

> `optional` **flatMap**: `boolean`

#### forEach?

> `optional` **forEach**: `boolean`

#### includes?

> `optional` **includes**: `boolean`

#### indexOf?

> `optional` **indexOf**: `boolean`

#### join?

> `optional` **join**: `boolean`

#### keys?

> `optional` **keys**: `boolean`

#### lastIndexOf?

> `optional` **lastIndexOf**: `boolean`

#### length?

> `optional` **length**: `boolean`

Gets or sets the length of the array. This is a number one higher than the highest index in the
array.

#### map?

> `optional` **map**: `boolean`

#### pop?

> `optional` **pop**: `boolean`

#### push?

> `optional` **push**: `boolean`

#### reduce?

> `optional` **reduce**: `boolean`

#### reduceRight?

> `optional` **reduceRight**: `boolean`

#### reverse?

> `optional` **reverse**: `boolean`

#### shift?

> `optional` **shift**: `boolean`

#### slice?

> `optional` **slice**: `boolean`

#### some?

> `optional` **some**: `boolean`

#### sort?

> `optional` **sort**: `boolean`

#### splice?

> `optional` **splice**: `boolean`

#### toLocaleString?

> `optional` **toLocaleString**: `boolean`

#### toReversed?

> `optional` **toReversed**: `boolean`

#### toSorted?

> `optional` **toSorted**: `boolean`

#### toSpliced?

> `optional` **toSpliced**: `boolean`

#### toString?

> `optional` **toString**: `boolean`

#### unshift?

> `optional` **unshift**: `boolean`

#### values?

> `optional` **values**: `boolean`

#### with?

> `optional` **with**: `boolean`

#### Inherited from

`Array.[unscopables]`

---

### length

> **length**: `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1329

Gets or sets the length of the array. This is a number one higher than the highest index in the
array.

#### Inherited from

`Array.length`

---

### workspace

> **workspace**: [`Workspace`](Workspace.md)\<`M`\>

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:15](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L15)

The workspace the dependencies are installed in.

---

### \[species\]

> `readonly` `static` **\[species\]**: `ArrayConstructor`

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

#### Inherited from

`Array.[species]`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`WorkspaceDependency`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:78

Iterator

#### Returns

`ArrayIterator`\<`WorkspaceDependency`\>

#### Inherited from

`Array.[iterator]`

---

### at()

> **at**(`index`): `undefined` \| `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es2022.array.d.ts:24

Returns the item located at the specified index.

#### Parameters

##### index

`number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

`Array.at`

---

### concat()

#### Call Signature

> **concat**(...`items`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1353

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...`ConcatArray`\<`WorkspaceDependency`\>[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`WorkspaceDependency`[]

##### Inherited from

`Array.concat`

#### Call Signature

> **concat**(...`items`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1359

Combines two or more arrays. This method returns a new array without modifying any existing arrays.

##### Parameters

###### items

...(`WorkspaceDependency` \| `ConcatArray`\<`WorkspaceDependency`\>)[]

Additional arrays and/or items to add to the end of the array.

##### Returns

`WorkspaceDependency`[]

##### Inherited from

`Array.concat`

---

### copyWithin()

> **copyWithin**(`target`, `start`, `end?`): `this`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:62

Returns the this object after copying a section of the array identified by start and end to the same
array starting at position target

#### Parameters

##### target

`number`

If target is negative, it is treated as length+target where length is the length of the array.

##### start

`number`

If start is negative, it is treated as length+start. If end is negative, it is treated as
length+end.

##### end?

`number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Array.copyWithin`

---

### entries()

> **entries**(): `ArrayIterator`\<\[`number`, `WorkspaceDependency`\]\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, `WorkspaceDependency`\]\>

#### Inherited from

`Array.entries`

---

### every()

#### Call Signature

> **every**\<`S`\>(`predicate`, `thisArg?`): `this is S[]`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1440

Determines whether all the members of an array satisfy the specified test.

##### Type Parameters

###### S

`S` _extends_ `WorkspaceDependency`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls the predicate function for
each element in the array until the predicate returns a value which is coercible to the Boolean
value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted,
undefined is used as the this value.

##### Returns

`this is S[]`

##### Inherited from

`Array.every`

#### Call Signature

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1449

Determines whether all the members of an array satisfy the specified test.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls the predicate function for
each element in the array until the predicate returns a value which is coercible to the Boolean
value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted,
undefined is used as the this value.

##### Returns

`boolean`

##### Inherited from

`Array.every`

---

### fill()

> **fill**(`value`, `start?`, `end?`): `this`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:51

Changes all array elements from `start` to `end` index to a static `value` and returns the modified
array

#### Parameters

##### value

`WorkspaceDependency`

value to fill array section with

##### start?

`number`

index to start filling the array at. If start is negative, it is treated as length+start where
length is the length of the array.

##### end?

`number`

index to stop filling the array at. If end is negative, it is treated as length+end.

#### Returns

`this`

#### Inherited from

`Array.fill`

---

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1476

Returns the elements of an array that meet the condition specified in a callback function.

##### Type Parameters

###### S

`S` _extends_ `WorkspaceDependency`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one
time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted,
undefined is used as the this value.

##### Returns

`S`[]

##### Inherited from

`Array.filter`

#### Call Signature

> **filter**(`predicate`, `thisArg?`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1482

Returns the elements of an array that meet the condition specified in a callback function.

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one
time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted,
undefined is used as the this value.

##### Returns

`WorkspaceDependency`[]

##### Inherited from

`Array.filter`

---

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:29

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

##### Type Parameters

###### S

`S` _extends_ `WorkspaceDependency`

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending order, until it finds one
where predicate returns true. If such an element is found, find immediately returns that element
value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of predicate. If it is not
provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`Array.find`

#### Call Signature

> **find**(`predicate`, `thisArg?`): `undefined` \| `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:30

##### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

##### Returns

`undefined` \| `WorkspaceDependency`

##### Inherited from

`Array.find`

---

### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:41

Returns the index of the first element in the array where predicate is true, and -1 otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending order, until it finds one
where predicate returns true. If such an element is found, findIndex immediately returns that
element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of predicate. If it is not
provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Array.findIndex`

---

### findLast()

#### Call Signature

> **findLast**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:29

Returns the value of the last element in the array where predicate is true, and undefined otherwise.

##### Type Parameters

###### S

`S` _extends_ `WorkspaceDependency`

##### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

findLast calls predicate once for each element of the array, in descending order, until it finds one
where predicate returns true. If such an element is found, findLast immediately returns that element
value. Otherwise, findLast returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of predicate. If it is not
provided, undefined is used instead.

##### Returns

`undefined` \| `S`

##### Inherited from

`Array.findLast`

#### Call Signature

> **findLast**(`predicate`, `thisArg?`): `undefined` \| `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:30

##### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

###### thisArg?

`any`

##### Returns

`undefined` \| `WorkspaceDependency`

##### Inherited from

`Array.findLast`

---

### findLastIndex()

> **findLastIndex**(`predicate`, `thisArg?`): `number`

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:41

Returns the index of the last element in the array where predicate is true, and -1 otherwise.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

findLastIndex calls predicate once for each element of the array, in descending order, until it
finds one where predicate returns true. If such an element is found, findLastIndex immediately
returns that element index. Otherwise, findLastIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of predicate. If it is not
provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Array.findLastIndex`

---

### flat()

> **flat**\<`A`, `D`\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:75

Returns a new array with all sub-array elements concatenated into it recursively up to the specified
depth.

#### Type Parameters

##### A

`A`

##### D

`D` _extends_ `number` = `1`

#### Parameters

##### this

`A`

##### depth?

`D`

The maximum recursion depth

#### Returns

`FlatArray`\<`A`, `D`\>[]

#### Inherited from

`Array.flat`

---

### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:64

Calls a defined callback function on each element of an array. Then, flattens the result into a new
array. This is identical to a map followed by flat with depth 1.

#### Type Parameters

##### U

`U`

##### This

`This` = `undefined`

#### Parameters

##### callback

(`this`, `value`, `index`, `array`) => `U` \| readonly `U`[]

A function that accepts up to three arguments. The flatMap method calls the callback function one
time for each element in the array.

##### thisArg?

`This`

An object to which the this keyword can refer in the callback function. If thisArg is omitted,
undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`Array.flatMap`

---

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1464

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for
each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,
undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`Array.forEach`

---

### getVersions()

> **getVersions**(`options?`): `Record`\<`string`, `string`[]\>

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:187](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L187)

Creates map of all dependnecies and their installed version.

#### Parameters

##### options?

`WorkspaceDependenciesGetVersionsOptions`

Options.

#### Returns

`Record`\<`string`, `string`[]\>

Object whose keys are dependency names and values are sorted versions.

---

### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: node_modules/typescript/lib/lib.es2016.array.include.d.ts:25

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`WorkspaceDependency`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Array.includes`

---

### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1425

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

##### searchElement

`WorkspaceDependency`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

#### Returns

`number`

#### Inherited from

`Array.indexOf`

---

### join()

> **join**(`separator?`): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1364

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of the array from the next in the resulting string. If
omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Array.join`

---

### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:88

Returns an iterable of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Array.keys`

---

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1431

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not
present.

#### Parameters

##### searchElement

`WorkspaceDependency`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at
the last index in the array.

#### Returns

`number`

#### Inherited from

`Array.lastIndexOf`

---

### map()

> **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1470

Calls a defined callback function on each element of an array, and returns an array that contains
the results.

#### Type Parameters

##### U

`U`

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time
for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted,
undefined is used as the this value.

#### Returns

`U`[]

#### Inherited from

`Array.map`

---

### pop()

> **pop**(): `undefined` \| `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1342

Removes the last element from an array and returns it. If the array is empty, undefined is returned
and the array is not modified.

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

`Array.pop`

---

### push()

> **push**(...`newWorkspaceDependencies`): `number`

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:38](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L38)

Adds one or more new dependencies.

#### Parameters

##### newWorkspaceDependencies

...`WorkspaceDependency`[]

The dependencies to add.

#### Returns

`number`

The new length of the collection.

#### Overrides

`Array.push`

---

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1488

Calls the specified callback function for all the elements in an array. The return value of the
callback function is the accumulated result, and is provided as an argument in the next call to the
callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `WorkspaceDependency`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one
time for each element in the array.

##### Returns

`WorkspaceDependency`

##### Inherited from

`Array.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1489

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `WorkspaceDependency`

###### initialValue

`WorkspaceDependency`

##### Returns

`WorkspaceDependency`

##### Inherited from

`Array.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1495

Calls the specified callback function for all the elements in an array. The return value of the
callback function is the accumulated result, and is provided as an argument in the next call to the
callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one
time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first
call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduce`

---

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1501

Calls the specified callback function for all the elements in an array, in descending order. The
return value of the callback function is the accumulated result, and is provided as an argument in
the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `WorkspaceDependency`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function
one time for each element in the array.

##### Returns

`WorkspaceDependency`

##### Inherited from

`Array.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1502

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `WorkspaceDependency`

###### initialValue

`WorkspaceDependency`

##### Returns

`WorkspaceDependency`

##### Inherited from

`Array.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1508

Calls the specified callback function for all the elements in an array, in descending order. The
return value of the callback function is the accumulated result, and is provided as an argument in
the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function
one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first
call to the callbackfn function provides this value as an argument instead of an array value.

##### Returns

`U`

##### Inherited from

`Array.reduceRight`

---

### reverse()

> **reverse**(): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1369

Reverses the elements in an array in place. This method mutates the array and returns a reference to
the same array.

#### Returns

`WorkspaceDependency`[]

#### Inherited from

`Array.reverse`

---

### shift()

> **shift**(): `undefined` \| `WorkspaceDependency`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1374

Removes the first element from an array and returns it. If the array is empty, undefined is returned
and the array is not modified.

#### Returns

`undefined` \| `WorkspaceDependency`

#### Inherited from

`Array.shift`

---

### slice()

> **slice**(`start?`, `end?`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1384

Returns a copy of a section of an array. For both start and end, a negative index can be used to
indicate an offset from the end of the array. For example, -2 refers to the second to last element
of the array.

#### Parameters

##### start?

`number`

The beginning index of the specified portion of the array. If start is undefined, then the slice
begins at index 0.

##### end?

`number`

The end index of the specified portion of the array. This is exclusive of the element at the index
'end'. If end is undefined, then the slice extends to the end of the array.

#### Returns

`WorkspaceDependency`[]

#### Inherited from

`Array.slice`

---

### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1458

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls the predicate function for each
element in the array until the predicate returns a value which is coercible to the Boolean value
true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted,
undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Array.some`

---

### sort()

> **sort**(`compareFn?`): `this`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1395

Sorts an array in place. This method mutates the array and returns a reference to the same array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return a negative value if
the first argument is less than the second argument, zero if they're equal, and a positive value
otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.

```ts
[11, 2, 22, 1].sort((a, b) => a - b);
```

#### Returns

`this`

#### Inherited from

`Array.sort`

---

### splice()

#### Call Signature

> **splice**(`start`, `deleteCount?`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1404

Removes elements from an array and, if necessary, inserts new elements in their place, returning the
deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove. Omitting this argument will remove all elements from the start
paramater location to end of the array. If value of this argument is either a negative number, zero,
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument
as zero and not remove any elements.

##### Returns

`WorkspaceDependency`[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

#### Call Signature

> **splice**(`start`, `deleteCount`, ...`items`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1414

Removes elements from an array and, if necessary, inserts new elements in their place, returning the
deleted elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove. If value of this argument is either a negative number, zero,
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument
as zero and not remove any elements.

###### items

...`WorkspaceDependency`[]

Elements to insert into the array in place of the deleted elements.

##### Returns

`WorkspaceDependency`[]

An array containing the elements that were deleted.

##### Inherited from

`Array.splice`

---

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1337

Returns a string representation of an array. The elements are converted to string using their
toLocaleString methods.

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:64

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

##### Returns

`string`

##### Inherited from

`Array.toLocaleString`

---

### toReversed()

> **toReversed**(): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:46

Returns a copy of an array with its elements reversed.

#### Returns

`WorkspaceDependency`[]

#### Inherited from

`Array.toReversed`

---

### toSorted()

> **toSorted**(`compareFn?`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:57

Returns a copy of an array with its elements sorted.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return a negative value if
the first argument is less than the second argument, zero if they're equal, and a positive value
otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.

```ts
[11, 2, 22, 1].toSorted((a, b) => a - b); // [1, 2, 11, 22]
```

#### Returns

`WorkspaceDependency`[]

#### Inherited from

`Array.toSorted`

---

### toSpliced()

#### Call Signature

> **toSpliced**(`start`, `deleteCount`, ...`items`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:66

Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns
the copied array.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove.

###### items

...`WorkspaceDependency`[]

Elements to insert into the copied array in place of the deleted elements.

##### Returns

`WorkspaceDependency`[]

The copied array.

##### Inherited from

`Array.toSpliced`

#### Call Signature

> **toSpliced**(`start`, `deleteCount?`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:74

Copies an array and removes elements while returning the remaining elements.

##### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove.

##### Returns

`WorkspaceDependency`[]

A copy of the original array with the remaining elements.

##### Inherited from

`Array.toSpliced`

---

### toString()

> **toString**(): `string`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1333

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Array.toString`

---

### unshift()

> **unshift**(...`items`): `number`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1419

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

##### items

...`WorkspaceDependency`[]

Elements to insert at the start of the array.

#### Returns

`number`

#### Inherited from

`Array.unshift`

---

### values()

> **values**(): `ArrayIterator`\<`WorkspaceDependency`\>

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:93

Returns an iterable of values in the array

#### Returns

`ArrayIterator`\<`WorkspaceDependency`\>

#### Inherited from

`Array.values`

---

### with()

> **with**(`index`, `value`): `WorkspaceDependency`[]

Defined in: node_modules/typescript/lib/lib.es2023.array.d.ts:85

Copies an array, then overwrites the value at the provided index with the given value. If the index
is negative, then it replaces from the end of the array.

#### Parameters

##### index

`number`

The index of the value to overwrite. If the index is negative, then it replaces from the end of the
array.

##### value

`WorkspaceDependency`

The value to write into the copied array.

#### Returns

`WorkspaceDependency`[]

The copied array with the updated value.

#### Inherited from

`Array.with`

---

### from()

#### Call Signature

> `static` **from**\<`T`\>(`arrayLike`): `T`[]

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:72

Creates an array from an array-like object.

##### Type Parameters

###### T

`T`

##### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

##### Returns

`T`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:80

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`\>(`iterable`): `T`[]

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

##### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

##### Returns

`T`[]

##### Inherited from

`Array.from`

#### Call Signature

> `static` **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:109

Creates an array from an iterable object.

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`U`[]

##### Inherited from

`Array.from`

---

### fromWorkspace()

> `static` **fromWorkspace**\<`M`\>(`workspace`, `options?`): `WorkspaceDependencies`\<`M`\>

Defined in:
[packages/carson/source/workspace/WorkspaceDependencies.ts:81](https://github.com/jakubmazanec/tools/blob/dccfe8e5cee218e88ff4db59e4bf460975897c58/packages/carson/source/workspace/WorkspaceDependencies.ts#L81)

Creates new WorkspaceDependencies instance from a [Workspace](Workspace.md) instance and its
dependencies.

#### Type Parameters

##### M

`M` _extends_ `boolean` = `true`

#### Parameters

##### workspace

[`Workspace`](Workspace.md)\<`M`\>

The workspace from which the dependnecies are taken.

##### options?

`WorkspaceDependenciesFromWorkspaceOptions`

Options.

#### Returns

`WorkspaceDependencies`\<`M`\>

The new WorkspaceDependencies instance.

---

### isArray()

> `static` **isArray**(`arg`): `arg is any[]`

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1520

#### Parameters

##### arg

`any`

#### Returns

`arg is any[]`

#### Inherited from

`Array.isArray`

---

### of()

> `static` **of**\<`T`\>(...`items`): `T`[]

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:86

Returns a new array from a set of elements.

#### Type Parameters

##### T

`T`

#### Parameters

##### items

...`T`[]

A set of elements to include in the new array object.

#### Returns

`T`[]

#### Inherited from

`Array.of`
