[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: LoDashStatic()

Defined in: node\_modules/@types/lodash/index.d.ts:20

## Call Signature

> **LoDashStatic**\<`TrapAny`\>(`value`): [`Collection`](Collection.md)\<`any`\> &
> [`Function`](Function.md)\<`any`\> & [`Object`](Object.md)\<`any`\> &
> [`Primitive`](Primitive.md)\<`any`\> & [`String`](String.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:94

Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that
operate on and return arrays, collections, and functions can be chained together. Methods that
retrieve a single value or may return a primitive value will automatically end the chain sequence
and return the unwrapped value. Otherwise, the value must be unwrapped with value().

Explicit chain sequences, which must be unwrapped with value(), may be enabled using _.chain.

The execution of chained methods is lazy, that is, it's deferred until value() is implicitly or
explicitly called.

Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an
optimization to merge iteratee calls; this avoids the creation of intermediate arrays and can
greatly reduce the number of iteratee executions. Sections of a chain sequence qualify for shortcut
fusion if the section is applied to an array and iteratees accept only one argument. The heuristic
for whether a section qualifies for shortcut fusion is subject to change.

Chaining is supported in custom builds as long as the value() method is directly or indirectly
included in the build.

In addition to lodash methods, wrappers have Array and String methods. The wrapper Array methods
are: concat, join, pop, push, shift, sort, splice, and unshift. The wrapper String methods are:
replace and split.

The wrapper methods that support shortcut fusion are: at, compact, drop, dropRight, dropWhile,
filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight,
takeRightWhile, takeWhile, and toArray

The chainable wrapper methods are: after, ary, assign, assignIn, assignInWith, assignWith, at,
before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms,
constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference,
differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill,
filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow,
flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy,
intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys,
mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate,
nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight,
partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt,
push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle,
slice, sort, sortBy, sortedUniq, sortedUniqBy, splice, spread, tail, take, takeRight,
takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject,
transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip,
unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject,
zipObjectDeep, and zipWith.

The wrapper methods that are not chainable by default are: add, attempt, camelCase, capitalize,
ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide,
each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast,
findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn,
forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke,
isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate,
isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap,
isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike,
isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap,
isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean,
meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop,
random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase,
some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith,
stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times,
toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim,
trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words.

### Type Parameters

#### TrapAny

`TrapAny` _extends_ `object`

### Parameters

#### value

`TrapAny`

### Returns

[`Collection`](Collection.md)\<`any`\> & [`Function`](Function.md)\<`any`\> &
[`Object`](Object.md)\<`any`\> & [`Primitive`](Primitive.md)\<`any`\> &
[`String`](String.md)\<`string`\>

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`String`](String.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:95

### Type Parameters

#### T

`T` _extends_ `string`

### Parameters

#### value

`T`

### Returns

[`String`](String.md)\<`T`\>

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`Primitive`](Primitive.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:96

### Type Parameters

#### T

`T` _extends_ `null` \| `undefined`

### Parameters

#### value

`T`

### Returns

[`Primitive`](Primitive.md)\<`T`\>

## Call Signature

> **LoDashStatic**(`value`): [`String`](String.md)

Defined in: node\_modules/@types/lodash/common/common.d.ts:97

### Parameters

#### value

`string` \| `null` \| `undefined`

### Returns

[`String`](String.md)

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`Function`](Function.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:98

### Type Parameters

#### T

`T` _extends_ (...`args`) => `any`

### Parameters

#### value

`T`

### Returns

[`Function`](Function.md)\<`T`\>

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`Collection`](Collection.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:99

### Type Parameters

#### T

`T` = `any`

### Parameters

#### value

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

### Returns

[`Collection`](Collection.md)\<`T`\>

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`Object`](Object.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:100

### Type Parameters

#### T

`T` _extends_ `object`

### Parameters

#### value

`T` \| `null` \| `undefined`

### Returns

[`Object`](Object.md)\<`T`\>

## Call Signature

> **LoDashStatic**\<`T`\>(`value`): [`Primitive`](Primitive.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:101

### Type Parameters

#### T

`T`

### Parameters

#### value

`T`

### Returns

[`Primitive`](Primitive.md)\<`T`\>

## Array

### concat()

> **concat**\<`T`\>(...`values?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:78

Creates a new array concatenating `array` with any additional arrays and/or values.

#### Type Parameters

##### T

`T`

#### Parameters

##### values?

...[`Many`](../type-aliases/Many.md)\<`T`\>[]

The array values to concatenate.

#### Returns

`T`[]

Returns the new concatenated array.

#### Example

```ts
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

---

### differenceWith()

#### Call Signature

> **differenceWith**\<`T1`, `T2`\>(`array`, `values?`, `comparator?`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:213

This method is like _.difference except that it accepts comparator which is invoked to compare
elements of array to values. The order and references of result values are determined by the first
array. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values?

[`List`](../type-aliases/List.md)\<`T2`\>

The arrays to inspect.

###### comparator?

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

The comparator invoked per element.

##### Returns

`T1`[]

Returns the new array of filtered values.

##### Example

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
];

_.differenceWith(objects, [{x: 1, y: 2}], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```

#### Call Signature

> **differenceWith**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:217

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

_.differenceWith

#### Call Signature

> **differenceWith**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:221

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values

...([`List`](../type-aliases/List.md)\<`T4`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

_.differenceWith

#### Call Signature

> **differenceWith**\<`T`\>(`array`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:225

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### values

...[`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

_.differenceWith

---

### fromPairs()

#### Call Signature

> **fromPairs**\<`T`\>(`pairs`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:558

The inverse of `_.toPairs`; this method returns an object composed from key-value `pairs`.

##### Type Parameters

###### T

`T`

##### Parameters

###### pairs

[`List`](../type-aliases/List.md)\<\[[`PropertyName`](../type-aliases/PropertyName.md), `T`\]\> \|
`null` \| `undefined`

The key-value pairs.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new object.

##### Example

```ts
_.fromPairs([
  ['fred', 30],
  ['barney', 40],
]);
// => { 'fred': 30, 'barney': 40 }
```

#### Call Signature

> **fromPairs**(`pairs`): [`Dictionary`](Dictionary.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:562

##### Parameters

###### pairs

[`List`](../type-aliases/List.md)\<`any`[]\> \| `null` \| `undefined`

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

_.fromPairs

---

### indexOf()

> **indexOf**\<`T`\>(`array`, `value`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:639

Gets the index at which the first occurrence of `value` is found in `array` using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons. If `fromIndex` is negative, it's used as the offset from the end of `array`.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### value

`T`

The value to search for.

##### fromIndex?

`number`

The index to search from.

#### Returns

`number`

Returns the index of the matched value, else `-1`.

#### Example

```ts
_.indexOf([1, 2, 1, 2], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

---

### intersectionBy()

#### Call Signature

> **intersectionBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee?`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:715

This method is like `_.intersection` except that it accepts `iteratee` which is invoked for each
element of each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is
invoked with one argument: (value).

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null`

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

The iteratee invoked per element.

##### Returns

`T1`[]

Returns the new array of shared values.

##### Example

```ts
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// using the `_.property` iteratee shorthand
_.intersectionBy([{x: 1}], [{x: 2}, {x: 1}], 'x');
// => [{ 'x': 1 }]
```

#### Call Signature

> **intersectionBy**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:719

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

_.intersectionBy

#### Call Signature

> **intersectionBy**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:723

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values

...([`List`](../type-aliases/List.md)\<`T4`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

_.intersectionBy

#### Call Signature

> **intersectionBy**\<`T`\>(`array?`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:727

##### Type Parameters

###### T

`T`

##### Parameters

###### array?

[`List`](../type-aliases/List.md)\<`T`\> \| `null`

###### values

...[`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

_.intersectionBy

#### Call Signature

> **intersectionBy**\<`T`\>(...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:731

##### Type Parameters

###### T

`T`

##### Parameters

###### values

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

_.intersectionBy

---

### intersectionWith()

#### Call Signature

> **intersectionWith**\<`T1`, `T2`\>(`array`, `values?`, `comparator?`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:771

Creates an array of unique `array` values not included in the other provided arrays using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons.

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values?

[`List`](../type-aliases/List.md)\<`T2`\>

The arrays to inspect.

###### comparator?

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T1` \| `T2`\>

The comparator invoked per element.

##### Returns

`T1`[]

Returns the new array of filtered values.

##### Example

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
];
var others = [
  {x: 1, y: 1},
  {x: 1, y: 2},
];

_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```

#### Call Signature

> **intersectionWith**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:775

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T1` \| `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

_.intersectionWith

#### Call Signature

> **intersectionWith**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:779

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values

...([`List`](../type-aliases/List.md)\<`T4`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T1` \| `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

_.intersectionWith

#### Call Signature

> **intersectionWith**\<`T`\>(`array?`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:783

##### Type Parameters

###### T

`T`

##### Parameters

###### array?

[`List`](../type-aliases/List.md)\<`T`\> \| `null`

###### values

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

_.intersectionWith

---

### pullAll()

#### Call Signature

> **pullAll**\<`T`\>(`array`, `values?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:976

This method is like `_.pull` except that it accepts an array of values to remove.

**Note:** Unlike `_.difference`, this method mutates `array`.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[]

The array to modify.

###### values?

[`List`](../type-aliases/List.md)\<`T`\>

The values to remove.

##### Returns

`T`[]

Returns `array`.

##### Example

```ts
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, [2, 3]);
console.log(array);
// => [1, 1]
```

#### Call Signature

> **pullAll**\<`TList`\>(`array`, `values?`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:980

##### Type Parameters

###### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`TList`\>

###### values?

[`List`](../type-aliases/List.md)\<`TList`\[`0`\]\>

##### Returns

`TList`

##### See

_.pullAll

---

### pullAllBy()

#### Call Signature

> **pullAllBy**\<`T`\>(`array`, `values?`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1015

This method is like `_.pullAll` except that it accepts `iteratee` which is invoked for each element
of `array` and `values` to to generate the criterion by which uniqueness is computed. The iteratee
is invoked with one argument: (value).

**Note:** Unlike `_.differenceBy`, this method mutates `array`.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[]

The array to modify.

###### values?

[`List`](../type-aliases/List.md)\<`T`\>

The values to remove.

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

`T`[]

Returns `array`.

##### Example

```ts
var array = [{x: 1}, {x: 2}, {x: 3}, {x: 1}];

_.pullAllBy(array, [{x: 1}, {x: 3}], 'x');
console.log(array);
// => [{ 'x': 2 }]
```

#### Call Signature

> **pullAllBy**\<`TList`\>(`array`, `values?`, `iteratee?`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1019

##### Type Parameters

###### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`TList`\>

###### values?

[`List`](../type-aliases/List.md)\<`TList`\[`0`\]\>

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`TList`\[`0`\]\>

##### Returns

`TList`

##### See

_.pullAllBy

#### Call Signature

> **pullAllBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1023

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

`T1`[]

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

##### Returns

`T1`[]

##### See

_.pullAllBy

#### Call Signature

> **pullAllBy**\<`T1List`, `T2`\>(`array`, `values`, `iteratee`): `T1List`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1027

##### Type Parameters

###### T1List

`T1List` _extends_ [`MutableList`](MutableList.md)\<`any`\>

###### T2

`T2`

##### Parameters

###### array

`RejectReadonly`\<`T1List`\>

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T2` \| `T1List`\[`0`\]\>

##### Returns

`T1List`

##### See

_.pullAllBy

---

### pullAllWith()

#### Call Signature

> **pullAllWith**\<`T`\>(`array`, `values?`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1062

This method is like `_.pullAll` except that it accepts `comparator` which is invoked to compare
elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

**Note:** Unlike `_.differenceWith`, this method mutates `array`.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[]

The array to modify.

###### values?

[`List`](../type-aliases/List.md)\<`T`\>

The values to remove.

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`T`[]

Returns `array`.

##### Example

```ts
var array = [
  {x: 1, y: 2},
  {x: 3, y: 4},
  {x: 5, y: 6},
];

_.pullAllWith(array, [{x: 3, y: 4}], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

#### Call Signature

> **pullAllWith**\<`TList`\>(`array`, `values?`, `comparator?`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1066

##### Type Parameters

###### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`TList`\>

###### values?

[`List`](../type-aliases/List.md)\<`TList`\[`0`\]\>

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`TList`\[`0`\]\>

##### Returns

`TList`

##### See

_.pullAllWith

#### Call Signature

> **pullAllWith**\<`T1`, `T2`\>(`array`, `values`, `comparator`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1070

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

`T1`[]

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

##### Returns

`T1`[]

##### See

_.pullAllWith

#### Call Signature

> **pullAllWith**\<`T1List`, `T2`\>(`array`, `values`, `comparator`): `T1List`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1074

##### Type Parameters

###### T1List

`T1List` _extends_ [`MutableList`](MutableList.md)\<`any`\>

###### T2

`T2`

##### Parameters

###### array

`RejectReadonly`\<`T1List`\>

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T1List`\[`0`\], `T2`\>

##### Returns

`T1List`

##### See

_.pullAllWith

---

### reverse()

> **reverse**\<`TList`\>(`array`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1162

Reverses `array` so that the first element becomes the last, the second element becomes the second
to last, and so on.

**Note:** This method mutates `array` and is based on
[`Array#reverse`](https://mdn.io/Array/reverse).

#### Type Parameters

##### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

#### Parameters

##### array

`RejectReadonly`\<`TList`\>

#### Returns

`TList`

Returns `array`.

#### Example

```ts
var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

---

### sortedIndex()

#### Call Signature

> **sortedIndex**\<`T`\>(`array`, `value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1204

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The sorted array to inspect.

###### value

`T`

The value to evaluate.

##### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

##### Example

```ts
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
```

#### Call Signature

> **sortedIndex**\<`T`\>(`array`, `value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1235

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The sorted array to inspect.

###### value

`T`

The value to evaluate.

##### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

##### Example

```ts
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
```

---

### sortedIndexBy()

> **sortedIndexBy**\<`T`\>(`array`, `value`, `iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1271

This method is like `_.sortedIndex` except that it accepts `iteratee` which is invoked for `value`
and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The sorted array to inspect.

##### value

`T`

The value to evaluate.

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

#### Example

```ts
var dict = {thirty: 30, forty: 40, fifty: 50};

_.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
// => 1

// using the `_.property` iteratee shorthand
_.sortedIndexBy([{x: 4}, {x: 5}], {x: 4}, 'x');
// => 0
```

---

### sortedIndexOf()

> **sortedIndexOf**\<`T`\>(`array`, `value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1299

This method is like `_.indexOf` except that it performs a binary search on a sorted `array`.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### value

`T`

The value to search for.

#### Returns

`number`

Returns the index of the matched value, else `-1`.

#### Example

```ts
_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2
```

---

### sortedLastIndex()

> **sortedLastIndex**\<`T`\>(`array`, `value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1328

This method is like `_.sortedIndex` except that it returns the highest index at which `value` should
be inserted into `array` in order to maintain its sort order.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The sorted array to inspect.

##### value

`T`

The value to evaluate.

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

#### Example

```ts
_.sortedLastIndex([4, 5], 4);
// => 1
```

---

### sortedLastIndexBy()

> **sortedLastIndexBy**\<`T`\>(`array`, `value`, `iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1359

This method is like `_.sortedLastIndex` except that it accepts `iteratee` which is invoked for
`value` and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The sorted array to inspect.

##### value

`T`

The value to evaluate.

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

#### Example

```ts
// using the `_.property` iteratee shorthand
_.sortedLastIndexBy([{x: 4}, {x: 5}], {x: 4}, 'x');
// => 1
```

---

### sortedLastIndexOf()

> **sortedLastIndexOf**\<`T`\>(`array`, `value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1387

This method is like `_.lastIndexOf` except that it performs a binary search on a sorted `array`.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### value

`T`

The value to search for.

#### Returns

`number`

Returns the index of the matched value, else `-1`.

#### Example

```ts
_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3
```

---

### sortedUniq()

> **sortedUniq**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1414

This method is like `_.uniq` except that it's designed and optimized for sorted arrays.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```

---

### sortedUniqBy()

> **sortedUniqBy**\<`T`\>(`array`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1442

This method is like `_.uniqBy` except that it's designed and optimized for sorted arrays.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```

---

### unionWith()

#### Call Signature

> **unionWith**\<`T`\>(`arrays?`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1656

This method is like `_.union` except that it accepts `comparator` which is invoked to compare
elements of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays?

[`List`](../type-aliases/List.md)\<`T`\> \| `null`

The arrays to inspect.

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

The comparator invoked per element.

##### Returns

`T`[]

Returns the new array of combined values.

##### Example

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
];
var others = [
  {x: 1, y: 1},
  {x: 1, y: 2},
];

_.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

#### Call Signature

> **unionWith**\<`T`\>(`arrays`, `arrays2`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1660

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`T`[]

##### See

_.unionWith

#### Call Signature

> **unionWith**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`comparator`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1664

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator

...([`List`](../type-aliases/List.md)\<`T`\> \| [`Comparator`](../type-aliases/Comparator.md)\<`T`\>
\| `null` \| `undefined`)[]

##### Returns

`T`[]

##### See

_.unionWith

---

### uniq()

> **uniq**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1701

Creates a duplicate-free version of an array, using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons, in which only the first occurrence of each element is kept.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.uniq([2, 1, 2]);
// => [2, 1]
```

---

### uniqBy()

> **uniqBy**\<`T`\>(`array`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1734

This method is like `_.uniq` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// using the `_.property` iteratee shorthand
_.uniqBy([{x: 1}, {x: 2}, {x: 1}], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

---

### uniqWith()

> **uniqWith**\<`T`\>(`array`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1765

This method is like `_.uniq` except that it accepts `comparator` which is invoked to compare
elements of `array`. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

##### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

The comparator invoked per element.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
  {x: 1, y: 2},
];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

---

### xorBy()

#### Call Signature

> **xorBy**\<`T`\>(`arrays?`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1920

This method is like `_.xor` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays?

[`List`](../type-aliases/List.md)\<`T`\> \| `null`

The arrays to inspect.

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

`T`[]

Returns the new array of values.

##### Example

```ts
_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [1.2, 4.3]

// using the `_.property` iteratee shorthand
_.xorBy([{x: 1}], [{x: 2}, {x: 1}], 'x');
// => [{ 'x': 2 }]
```

#### Call Signature

> **xorBy**\<`T`\>(`arrays`, `arrays2`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1924

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

_.xorBy

#### Call Signature

> **xorBy**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`iteratee`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1928

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

`T`[]

##### See

_.xorBy

---

### xorWith()

#### Call Signature

> **xorWith**\<`T`\>(`arrays?`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1968

This method is like `_.xor` except that it accepts `comparator` which is invoked to compare elements
of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays?

[`List`](../type-aliases/List.md)\<`T`\> \| `null`

The arrays to inspect.

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

The comparator invoked per element.

##### Returns

`T`[]

Returns the new array of values.

##### Example

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
];
var others = [
  {x: 1, y: 1},
  {x: 1, y: 2},
];

_.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

#### Call Signature

> **xorWith**\<`T`\>(`arrays`, `arrays2`, `comparator?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1972

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`T`[]

##### See

_.xorWith

#### Call Signature

> **xorWith**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`comparator`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1976

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator

...([`List`](../type-aliases/List.md)\<`T`\> \| [`Comparator`](../type-aliases/Comparator.md)\<`T`\>
\| `null` \| `undefined`)[]

##### Returns

`T`[]

##### See

_.xorWith

## Collection

### flatMapDeep()

#### Call Signature

> **flatMapDeep**\<`T`\>(`collection`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:545

This method is like `_.flatMap` except that it recursively flattens the mapped results.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \| `null` \|
`undefined`

The collection to iterate over.

##### Returns

`T`[]

Returns the new flattened array.

##### Since

4.7.0

##### Example

```ts
function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```

#### Call Signature

> **flatMapDeep**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:549

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:553

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(`collection`, `iteratee`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:557

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`string`

##### Returns

`any`[]

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(`collection`, `iteratee`): `boolean`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:561

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`object`

##### Returns

`boolean`[]

##### See

_.flatMapDeep

---

### flatMapDepth()

#### Call Signature

> **flatMapDepth**\<`T`\>(`collection`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:669

This method is like `_.flatMap` except that it recursively flattens the mapped results up to `depth`
times.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \| `null` \|
`undefined`

The collection to iterate over.

##### Returns

`T`[]

Returns the new flattened array.

##### Since

4.7.0

##### Example

```ts
function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```

#### Call Signature

> **flatMapDepth**\<`T`, `TResult`\>(`collection`, `iteratee`, `depth?`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:673

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

###### depth?

`number`

##### Returns

`TResult`[]

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**\<`T`, `TResult`\>(`collection`, `iteratee`, `depth?`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:677

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

###### depth?

`number`

##### Returns

`TResult`[]

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`collection`, `iteratee`, `depth?`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:681

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`string`

###### depth?

`number`

##### Returns

`any`[]

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`collection`, `iteratee`, `depth?`): `boolean`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:685

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`object`

###### depth?

`number`

##### Returns

`boolean`[]

##### See

_.flatMapDepth

---

### orderBy()

#### Call Signature

> **orderBy**\<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1331

This method is like `_.sortBy` except that it allows specifying the sort orders of the iteratees to
sort by. If `orders` is unspecified, all values are sorted in ascending order. Otherwise, specify an
order of "desc" for descending or "asc" for ascending sort order of corresponding values.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### iteratees?

[`Many`](../type-aliases/Many.md)\<[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
`unknown`\>\>

The iteratees to sort by.

###### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

The sort orders of `iteratees`.

##### Returns

`T`[]

Returns the new sorted array.

##### Example

```ts
var users = [
  {user: 'fred', age: 48},
  {user: 'barney', age: 34},
  {user: 'fred', age: 42},
  {user: 'barney', age: 36},
];

// sort by `user` in ascending order and by `age` in descending order
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```

#### Call Signature

> **orderBy**\<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1335

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratees?

[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>

###### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`[]

##### See

_.orderBy

#### Call Signature

> **orderBy**\<`T`\>(`collection`, `iteratees?`, `orders?`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1339

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratees?

[`Many`](../type-aliases/Many.md)\<[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
`unknown`\>\>

###### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`\[keyof `T`\][]

##### See

_.orderBy

#### Call Signature

> **orderBy**\<`T`\>(`collection`, `iteratees?`, `orders?`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1343

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratees?

[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>

###### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`\[keyof `T`\][]

##### See

_.orderBy

---

### sortBy()

#### Call Signature

> **sortBy**\<`T`\>(`collection`, ...`iteratees?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1908

Creates an array of elements, sorted in ascending order by the results of running each element in a
collection through each iteratee. This method performs a stable sort, that is, it preserves the
original sort order of equal elements. The iteratees are invoked with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### iteratees?

...[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>[]

The iteratees to sort by, specified individually or in arrays.

##### Returns

`T`[]

Returns the new sorted array.

##### Example

```ts
var users = [
  {user: 'fred', age: 48},
  {user: 'barney', age: 36},
  {user: 'fred', age: 42},
  {user: 'barney', age: 34},
];

_.sortBy(users, function (o) {
  return o.user;
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.sortBy(users, 'user', function (o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```

#### Call Signature

> **sortBy**\<`T`\>(`collection`, ...`iteratees`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1912

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratees

...[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>[]

##### Returns

`T`\[keyof `T`\][]

##### See

_.sortBy

## Function

### flip()

> **flip**\<`T`\>(`func`): `T`

Defined in: node\_modules/@types/lodash/common/function.d.ts:516

Creates a function that invokes `func` with arguments reversed.

#### Type Parameters

##### T

`T` _extends_ (...`args`) => `any`

#### Parameters

##### func

`T`

The function to flip arguments for.

#### Returns

`T`

Returns the new function.

#### Example

```ts
var flipped = _.flip(function () {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

---

### unary()

> **unary**\<`T`, `TResult`\>(`func`): (`arg1`) => `TResult`

Defined in: node\_modules/@types/lodash/common/function.d.ts:1417

Creates a function that accepts up to one argument, ignoring any additional arguments.

#### Type Parameters

##### T

`T`

##### TResult

`TResult`

#### Parameters

##### func

(`arg1`, ...`args`) => `TResult`

The function to cap arguments for.

#### Returns

Returns the new function.

(`arg1`) => `TResult`

#### Example

```ts
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
```

## Lang

### eq()

> **eq**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:254

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

#### Example

```ts
var object = {user: 'fred'};
var other = {user: 'fred'};

_.eq(object, object);
// => true

_.eq(object, other);
// => false

_.eq('a', 'a');
// => true

_.eq('a', Object('a'));
// => false

_.eq(NaN, NaN);
// => true
```

---

### isArrayLike()

#### Call Signature

> **isArrayLike**\<`T`\>(`t`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:404

Checks if `value` is array-like. A value is considered array-like if it's not a function and has a
`value.length` that's an integer greater than or equal to `0` and less than or equal to
`Number.MAX_SAFE_INTEGER`.

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### t

`T`

##### Returns

`boolean`

Returns `true` if `value` is array-like, else `false`.

##### Example

```ts
_.isArrayLike([1, 2, 3]);
// => true

_.isArrayLike(document.body.children);
// => true

_.isArrayLike('abc');
// => true

_.isArrayLike(_.noop);
// => false
```

#### Call Signature

> **isArrayLike**(`value`): `value is never`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:408

##### Parameters

###### value

((...`args`) => `any`) \| `null` \| `undefined`

##### Returns

`value is never`

##### See

_.isArrayLike

#### Call Signature

> **isArrayLike**(`value`): `value is { length: number }`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:412

##### Parameters

###### value

`any`

##### Returns

`value is { length: number }`

##### See

_.isArrayLike

---

### isArrayLikeObject()

#### Call Signature

> **isArrayLikeObject**\<`T`\>(`value`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:449

This method is like `_.isArrayLike` except that it also checks if `value` is an object.

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### value

`T`

The value to check.

##### Returns

`boolean`

Returns `true` if `value` is an array-like object, else `false`.

##### Example

```ts
_.isArrayLikeObject([1, 2, 3]);
// => true

_.isArrayLikeObject(document.body.children);
// => true

_.isArrayLikeObject('abc');
// => false

_.isArrayLikeObject(_.noop);
// => false
```

#### Call Signature

> **isArrayLikeObject**(`value`): `value is never`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:453

##### Parameters

###### value

`string` \| `number` \| `boolean` \| `Function` \| ((...`args`) => `any`) \| `null` \| `undefined`

##### Returns

`value is never`

##### See

_.isArrayLikeObject

#### Call Signature

> **isArrayLikeObject**(`value`): `value is object & { length: number }`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:457

##### Parameters

###### value

`any`

##### Returns

`value is object & { length: number }`

##### See

_.isArrayLikeObject

---

### isEqual()

> **isEqual**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:616

Performs a deep comparison between two values to determine if they are equivalent.

**Note:** This method supports comparing arrays, array buffers, booleans, date objects, error
objects, maps, numbers, `Object` objects, regexes, sets, strings, symbols, and typed arrays.
`Object` objects are compared by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

#### Example

```ts
var object = {user: 'fred'};
var other = {user: 'fred'};

_.isEqual(object, other);
// => true

object === other;
// => false
```

---

### isEqualWith()

> **isEqualWith**(`value`, `other`, `customizer?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:662

This method is like `_.isEqual` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with up to seven arguments: (objValue, othValue [, index|key, object, other,
stack]).

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

##### customizer?

[`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

The function to customize comparisons.

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

#### Example

```ts
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}

var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];

_.isEqualWith(array, other, customizer);
// => true
```

---

### isInteger()

> **isInteger**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:769

Checks if `value` is an integer.

**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns `true` if `value` is an integer, else `false`.

#### Example

```ts
_.isInteger(3);
// => true

_.isInteger(Number.MIN_VALUE);
// => false

_.isInteger(Infinity);
// => false

_.isInteger('3');
// => false
```

---

### isLength()

> **isLength**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:807

Checks if `value` is a valid array-like length.

**Note:** This function is loosely based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns `true` if `value` is a valid length, else `false`.

#### Example

```ts
_.isLength(3);
// => true

_.isLength(Number.MIN_VALUE);
// => false

_.isLength(Infinity);
// => false

_.isLength('3');
// => false
```

---

### isMatch()

> **isMatch**(`object`, `source`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:865

Performs a deep comparison between `object` and `source` to determine if `object` contains
equivalent property values.

**Note:** This method supports comparing the same values as `_.isEqual`.

#### Parameters

##### object

`object`

The object to inspect.

##### source

`object`

The object of property values to match.

#### Returns

`boolean`

Returns `true` if `object` is a match, else `false`.

#### Example

```ts
var object = {user: 'fred', age: 40};

_.isMatch(object, {age: 40});
// => true

_.isMatch(object, {age: 36});
// => false
```

---

### isMatchWith()

> **isMatchWith**(`object`, `source`, `customizer?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:911

This method is like `_.isMatch` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with three arguments: (objValue, srcValue, index|key, object, source).

#### Parameters

##### object

`object`

The object to inspect.

##### source

`object`

The object of property values to match.

##### customizer?

[`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

The function to customize comparisons.

#### Returns

`boolean`

Returns `true` if `object` is a match, else `false`.

#### Example

```ts
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}

function customizer(objValue, srcValue) {
  if (isGreeting(objValue) && isGreeting(srcValue)) {
    return true;
  }
}

var object = {greeting: 'hello'};
var source = {greeting: 'hi'};

_.isMatchWith(object, source, customizer);
// => true
```

---

### isNil()

> **isNil**(`value`): value is null \| undefined

Defined in: node\_modules/@types/lodash/common/lang.d.ts:990

Checks if `value` is `null` or `undefined`.

#### Parameters

##### value

`any`

The value to check.

#### Returns

value is null \| undefined

Returns `true` if `value` is nullish, else `false`.

#### Example

```ts
_.isNil(null);
// => true

_.isNil(void 0);
// => true

_.isNil(NaN);
// => false
```

---

### isObjectLike()

> **isObjectLike**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1096

Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof`
result of "object".

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns `true` if `value` is object-like, else `false`.

#### Example

```ts
_.isObjectLike({});
// => true

_.isObjectLike([1, 2, 3]);
// => true

_.isObjectLike(_.noop);
// => false

_.isObjectLike(null);
// => false
```

---

### isSafeInteger()

> **isSafeInteger**(`value`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1182

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754 double precision number
which isn't the result of a rounded unsafe integer.

**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

#### Parameters

##### value

`any`

The value to check.

#### Returns

`boolean`

Returns `true` if `value` is a safe integer, else `false`.

#### Example

```ts
_.isSafeInteger(3);
// => true

_.isSafeInteger(Number.MIN_VALUE);
// => false

_.isSafeInteger(Infinity);
// => false

_.isSafeInteger('3');
// => false
```

---

### isSymbol()

> **isSymbol**(`value`): `value is symbol`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1256

Checks if `value` is classified as a `Symbol` primitive or object.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is symbol`

Returns `true` if `value` is correctly classified, else `false`.

#### Example

```ts
_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false
```

---

### toFinite()

> **toFinite**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1487

Converts `value` to a finite number.

#### Parameters

##### value

`any`

The value to convert.

#### Returns

`number`

Returns the converted number.

#### Since

4.12.0

#### Example

```ts
_.toFinite(3.2);
// => 3.2

_.toFinite(Number.MIN_VALUE);
// => 5e-324

_.toFinite(Infinity);
// => 1.7976931348623157e+308

_.toFinite('3.2');
// => 3.2
```

---

### toInteger()

> **toInteger**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1525

Converts `value` to an integer.

**Note:** This function is loosely based on
[`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

#### Parameters

##### value

`any`

The value to convert.

#### Returns

`number`

Returns the converted integer.

#### Example

```ts
_.toInteger(3);
// => 3

_.toInteger(Number.MIN_VALUE);
// => 0

_.toInteger(Infinity);
// => 1.7976931348623157e+308

_.toInteger('3');
// => 3
```

---

### toLength()

> **toLength**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1564

Converts `value` to an integer suitable for use as the length of an array-like object.

**Note:** This method is based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

##### value

`any`

The value to convert.

#### Returns

`number`

Returns the converted integer.

#### Example

```ts
_.toLength(3);
// => 3

_.toLength(Number.MIN_VALUE);
// => 0

_.toLength(Infinity);
// => 4294967295

_.toLength('3');
// => 3
```

---

### toNumber()

> **toNumber**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1600

Converts `value` to a number.

#### Parameters

##### value

`any`

The value to process.

#### Returns

`number`

Returns the number.

#### Example

```ts
_.toNumber(3);
// => 3

_.toNumber(Number.MIN_VALUE);
// => 5e-324

_.toNumber(Infinity);
// => Infinity

_.toNumber('3');
// => 3
```

---

### toSafeInteger()

> **toSafeInteger**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1660

Converts `value` to a safe integer. A safe integer can be compared and represented correctly.

#### Parameters

##### value

`any`

The value to convert.

#### Returns

`number`

Returns the converted integer.

#### Example

```ts
_.toSafeInteger(3);
// => 3

_.toSafeInteger(Number.MIN_VALUE);
// => 0

_.toSafeInteger(Infinity);
// => 9007199254740991

_.toSafeInteger('3');
// => 3
```

---

### toString()

> **toString**(`value`): `string`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1694

Converts `value` to a string if it's not one. An empty string is returned for `null` and `undefined`
values. The sign of `-0` is preserved.

#### Parameters

##### value

`any`

The value to process.

#### Returns

`string`

Returns the string.

#### Example

```ts
_.toString(null);
// => ''

_.toString(-0);
// => '-0'

_.toString([1, 2, 3]);
// => '1,2,3'
```

## Math

### max()

#### Call Signature

> **max**\<`T`\>(`collection`): `T`

Defined in: node\_modules/@types/lodash/common/math.d.ts:104

Computes the maximum value of `array`. If `array` is empty or falsey `undefined` is returned.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

readonly \[`T`, `T`\]

##### Returns

`T`

Returns the maximum value.

#### Call Signature

> **max**\<`T`\>(`collection`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:105

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T` \| `undefined`

---

### maxBy()

> **maxBy**\<`T`\>(`collection`, `iteratee?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:141

This method is like `_.max` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`T` \| `undefined`

Returns the maximum value.

#### Example

```ts
var objects = [{n: 1}, {n: 2}];

_.maxBy(objects, function (o) {
  return o.n;
});
// => { 'n': 2 }

// using the `_.property` iteratee shorthand
_.maxBy(objects, 'n');
// => { 'n': 2 }
```

---

### mean()

> **mean**(`collection`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:168

Computes the mean of the values in `array`.

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`any`\> \| `null` \| `undefined`

#### Returns

`number`

Returns the mean.

#### Example

```ts
_.mean([4, 2, 8, 6]);
// => 5
```

---

### meanBy()

> **meanBy**\<`T`\>(`collection`, `iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:196

Computes the mean of the provided properties of the objects in the `array`

#### Type Parameters

##### T

`T`

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`number`

Returns the mean.

#### Example

```ts
_.mean([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n');
// => 5
```

---

### min()

#### Call Signature

> **min**\<`T`\>(`collection`): `T`

Defined in: node\_modules/@types/lodash/common/math.d.ts:220

Computes the minimum value of `array`. If `array` is empty or falsey `undefined` is returned.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

readonly \[`T`, `T`\]

##### Returns

`T`

Returns the minimum value.

#### Call Signature

> **min**\<`T`\>(`collection`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:221

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T` \| `undefined`

---

### minBy()

> **minBy**\<`T`\>(`collection`, `iteratee?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:257

This method is like `_.min` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`T` \| `undefined`

Returns the minimum value.

#### Example

```ts
var objects = [{n: 1}, {n: 2}];

_.minBy(objects, function (o) {
  return o.a;
});
// => { 'n': 1 }

// using the `_.property` iteratee shorthand
_.minBy(objects, 'n');
// => { 'n': 1 }
```

---

### subtract()

> **subtract**(`minuend`, `subtrahend`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:330

Subtract two numbers.

#### Parameters

##### minuend

`number`

The first number in a subtraction.

##### subtrahend

`number`

The second number in a subtraction.

#### Returns

`number`

Returns the difference.

#### Example

```ts
_.subtract(6, 4);
// => 2
```

---

### sum()

> **sum**(`collection`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:357

Computes the sum of the values in `array`.

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`any`\> \| `null` \| `undefined`

#### Returns

`number`

Returns the sum.

#### Example

```ts
_.sum([4, 2, 8, 6]);
// => 20
```

---

### sumBy()

> **sumBy**\<`T`\>(`collection`, `iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:393

This method is like `_.sum` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the value to be summed. The iteratee is invoked with one argument: (value).

#### Type Parameters

##### T

`T`

#### Parameters

##### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### iteratee?

`string` \| ((`value`) => `number`)

The iteratee invoked per element.

#### Returns

`number`

Returns the sum.

#### Example

```ts
var objects = [{n: 4}, {n: 2}, {n: 8}, {n: 6}];

_.sumBy(objects, function (o) {
  return o.n;
});
// => 20

// using the `_.property` iteratee shorthand
_.sumBy(objects, 'n');
// => 20
```

## Number

### clamp()

#### Call Signature

> **clamp**(`number`, `lower?`, `upper`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:34

Clamps `number` within the inclusive `lower` and `upper` bounds.

##### Parameters

###### number

`number`

The number to clamp.

###### lower?

`number`

The lower bound.

###### upper

`number`

The upper bound.

##### Returns

`number`

Returns the clamped number.

##### Examples

```ts
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5
Clamps `number` within the inclusive `lower` and `upper` bounds.
```

```ts
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
```

#### Call Signature

> **clamp**(`number`, `upper`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:38

##### Parameters

###### number

`number`

###### upper

`number`

##### Returns

`number`

##### See

_.clamp

## Object

### assign()

#### Call Signature

> **assign**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:33

Assigns own enumerable properties of source objects to the destination object. Source objects are
applied from left to right. Subsequent sources overwrite property assignments of previous sources.

**Note:** This method mutates `object` and is loosely based on
[`Object.assign`](https://mdn.io/Object/assign).

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Example

```ts
function Foo() {
  this.c = 3;
}

function Bar() {
  this.e = 5;
}

Foo.prototype.d = 4;
Bar.prototype.f = 6;

_.assign({a: 1}, new Foo(), new Bar());
// => { 'a': 1, 'c': 3, 'e': 5 }
```

#### Call Signature

> **assign**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:37

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.assign

#### Call Signature

> **assign**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:41

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.assign

#### Call Signature

> **assign**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:45

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.assign

#### Call Signature

> **assign**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:49

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.assign

#### Call Signature

> **assign**(`object`, ...`otherArgs`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:53

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`any`

##### See

_.assign

---

### assignIn()

#### Call Signature

> **assignIn**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:135

This method is like `_.assign` except that it iterates over own and inherited source properties.

**Note:** This method mutates `object`.

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Alias

extend

##### Example

```ts
function Foo() {
  this.b = 2;
}

function Bar() {
  this.d = 4;
}

Foo.prototype.c = 3;
Bar.prototype.e = 5;

_.assignIn({a: 1}, new Foo(), new Bar());
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
```

#### Call Signature

> **assignIn**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:139

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:143

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:147

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:151

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:155

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`TResult`

##### See

_.assignIn

---

### assignInWith()

#### Call Signature

> **assignInWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer?`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:236

This method is like `_.assignIn` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

###### customizer?

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

The function to customize assigned values.

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Alias

extendWith

##### Example

```ts
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignInWith, customizer);

defaults({a: 1}, {b: 2}, {a: 3});
// => { 'a': 1, 'b': 2 }
```

#### Call Signature

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`,
> `customizer`): `TObject` & `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:240

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:244

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:248

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:252

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:256

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`TResult`

##### See

_.assignInWith

---

### assignWith()

#### Call Signature

> **assignWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer?`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:335

This method is like `_.assign` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

###### customizer?

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

The function to customize assigned values.

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Example

```ts
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({a: 1}, {b: 2}, {a: 3});
// => { 'a': 1, 'b': 2 }
```

#### Call Signature

> **assignWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:339

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:343

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:347

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:351

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:355

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`TResult`

##### See

_.assignWith

---

### functions()

> **functions**(`object`): `string`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:975

Creates an array of function property names from own enumerable properties of `object`.

#### Parameters

##### object

`any`

The object to inspect.

#### Returns

`string`[]

Returns the new array of property names.

#### Example

```ts
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo());
// => ['a', 'b']
```

---

### functionsIn()

> **functionsIn**\<`T`\>(`object`): `string`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1009

Creates an array of function property names from own and inherited enumerable properties of
`object`.

#### Type Parameters

##### T

`T` _extends_ `object`

#### Parameters

##### object

`any`

The object to inspect.

#### Returns

`string`[]

Returns the new array of property names.

#### Example

```ts
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo());
// => ['a', 'b', 'c']
```

---

### has()

#### Call Signature

> **has**\<`T`, `K`\>(`object`, `path`):
> `object is T & { [P in PropertyName]: P extends keyof T ? T[P] : Record<string, unknown> extends T ? T[keyof T] : unknown } & { [uniqueSymbol]: unknown }`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1388

Checks if `path` is a direct property of `object`.

##### Type Parameters

###### T

`T`

###### K

`K` _extends_ [`PropertyName`](../type-aliases/PropertyName.md)

##### Parameters

###### object

`T`

The object to query.

###### path

`K`

The path to check.

##### Returns

`object is T & { [P in PropertyName]: P extends keyof T ? T[P] : Record<string, unknown> extends T ? T[keyof T] : unknown } & { [uniqueSymbol]: unknown }`

Returns `true` if `path` exists, else `false`.

##### Example

```ts
var object = {a: {b: {c: 3}}};
var other = _.create({a: _.create({b: _.create({c: 3})})});

_.has(object, 'a');
// => true

_.has(object, 'a.b.c');
// => true

_.has(object, ['a', 'b', 'c']);
// => true

_.has(other, 'a');
// => false
```

#### Call Signature

> **has**\<`T`\>(`object`, `path`): `boolean`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1389

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`boolean`

---

### hasIn()

> **hasIn**\<`T`\>(`object`, `path`): `boolean`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1427

Checks if `path` is a direct or inherited property of `object`.

#### Type Parameters

##### T

`T`

#### Parameters

##### object

`T`

The object to query.

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path to check.

#### Returns

`boolean`

Returns `true` if `path` exists, else `false`.

#### Example

```ts
var object = _.create({a: _.create({b: _.create({c: 3})})});

_.hasIn(object, 'a');
// => true

_.hasIn(object, 'a.b.c');
// => true

_.hasIn(object, ['a', 'b', 'c']);
// => true

_.hasIn(object, 'b');
// => false
```

---

### merge()

#### Call Signature

> **merge**\<`TObject`, `TSource`\>(`object`, `source?`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1838

Recursively merges own and inherited enumerable properties of source objects into the destination
object, skipping source properties that resolve to `undefined`. Array and plain object properties
are merged recursively. Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property assignments of previous
sources.

**Note:** This method mutates `object`.

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source?

`TSource`

The source objects.

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Example

```ts
var users = {
  data: [{user: 'barney'}, {user: 'fred'}],
};

var ages = {
  data: [{age: 36}, {age: 40}],
};

_.merge(users, ages);
// => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
```

#### Call Signature

> **merge**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1842

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.merge

#### Call Signature

> **merge**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1846

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.merge

#### Call Signature

> **merge**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1850

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.merge

#### Call Signature

> **merge**(`object`, ...`otherArgs`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1854

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`any`

##### See

_.merge

---

### mergeWith()

#### Call Signature

> **mergeWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1937

This method is like `_.merge` except that it accepts `customizer` which is invoked to produce the
merged values of the destination and source properties. If `customizer` returns `undefined` merging
is handled by the method instead. The `customizer` is invoked with six arguments: (objValue,
srcValue, key, object, source, stack).

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

The source objects.

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

The function to customize assigned values.

##### Returns

`TObject` & `TSource`

Returns `object`.

##### Example

```ts
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

var object = {
  fruits: ['apple'],
  vegetables: ['beet'],
};

var other = {
  fruits: ['banana'],
  vegetables: ['carrot'],
};

_.mergeWith(object, other, customizer);
// => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
```

#### Call Signature

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1941

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.mergeWith

#### Call Signature

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1945

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.mergeWith

#### Call Signature

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1949

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.mergeWith

#### Call Signature

> **mergeWith**(`object`, ...`otherArgs`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1953

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`any`

##### See

_.mergeWith

---

### omit()

#### Call Signature

> **omit**\<`T`, `K`\>(`object`, ...`paths?`): `Pick`\<`T`, `Exclude`\<keyof `T`,
> `K`\[`number`\]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2016

The opposite of `_.pick`; this method creates an object composed of the own and inherited enumerable
properties of `object` that are not omitted.

##### Type Parameters

###### T

`T` _extends_ `object`

###### K

`K` _extends_ [`PropertyName`](../type-aliases/PropertyName.md)[]

##### Parameters

###### object

`T` \| `null` \| `undefined`

The source object.

###### paths?

...`K`

The property names to omit, specified individually or in arrays..

##### Returns

`Pick`\<`T`, `Exclude`\<keyof `T`, `K`\[`number`\]\>\>

Returns the new object.

##### Example

```ts
var object = {a: 1, b: '2', c: 3};

_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

#### Call Signature

> **omit**\<`T`, `K`\>(`object`, ...`paths`): [`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2023

##### Type Parameters

###### T

`T` _extends_ `object`

###### K

`K` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### paths

...[`Many`](../type-aliases/Many.md)\<`K`\>[]

##### Returns

[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>

##### See

_.omit

#### Call Signature

> **omit**\<`T`\>(`object`, ...`paths`): [`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2027

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### paths

...[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

##### Returns

[`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

##### See

_.omit

---

### omitBy()

#### Call Signature

> **omitBy**\<`T`\>(`object`, `predicate?`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2078

The opposite of `_.pickBy`; this method creates an object composed of the own and inherited
enumerable properties of `object` that `predicate` doesn't return truthy for.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| `null` \| `undefined`

The source object.

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

The function invoked per property.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new object.

##### Example

```ts
var object = {a: 1, b: '2', c: 3};

_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

#### Call Signature

> **omitBy**\<`T`\>(`object`, `predicate?`): [`NumericDictionary`](NumericDictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2082

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### See

_.omitBy

#### Call Signature

> **omitBy**\<`T`\>(`object`, `predicate`):
> [`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2086

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### predicate

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

##### See

_.omitBy

---

### pick()

#### Call Signature

> **pick**\<`T`, `U`\>(`object`, ...`props?`): `Pick`\<`T`, `U`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2128

Creates an object composed of the picked `object` properties.

##### Type Parameters

###### T

`T` _extends_ `object`

###### U

`U` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`T`

The source object.

###### props?

...[`Many`](../type-aliases/Many.md)\<`U`\>[]

The property names to pick, specified individually or in arrays.

##### Returns

`Pick`\<`T`, `U`\>

Returns the new object.

##### Example

```ts
var object = {a: 1, b: '2', c: 3};

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

#### Call Signature

> **pick**\<`T`\>(`object`, ...`props`): [`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2132

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### props

...[`Many`](../type-aliases/Many.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>[]

##### Returns

[`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

##### See

_.pick

---

### pickBy()

#### Call Signature

> **pickBy**\<`T`, `S`\>(`object`, `predicate?`): [`Dictionary`](Dictionary.md)\<`S`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2170

Creates an object composed of the `object` properties `predicate` returns truthy for. The predicate
is invoked with two arguments: (value, key).

##### Type Parameters

###### T

`T`

###### S

`S`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| `null` \| `undefined`

The source object.

###### predicate?

[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`, `S`\>

The function invoked per property.

##### Returns

[`Dictionary`](Dictionary.md)\<`S`\>

Returns the new object.

##### Example

```ts
var object = {a: 1, b: '2', c: 3};

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
```

#### Call Signature

> **pickBy**\<`T`, `S`\>(`object`, `predicate`): [`NumericDictionary`](NumericDictionary.md)\<`S`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2174

##### Type Parameters

###### T

`T`

###### S

`S`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null` \| `undefined`

###### predicate

[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`, `S`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`S`\>

##### See

_.pickBy

#### Call Signature

> **pickBy**\<`T`\>(`object`, `predicate?`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2178

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

##### See

_.pickBy

#### Call Signature

> **pickBy**\<`T`\>(`object`, `predicate?`): [`NumericDictionary`](NumericDictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2182

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### See

_.pickBy

#### Call Signature

> **pickBy**\<`T`\>(`object`, `predicate?`):
> [`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2186

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

##### See

_.pickBy

---

### updateWith()

#### Call Signature

> **updateWith**\<`T`\>(`object`, `path`, `updater`, `customizer?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2527

This method is like `_.update` except that it accepts `customizer` which is invoked to produce the
objects of `path`. If `customizer` returns `undefined` path creation is handled by the method
instead. The `customizer` is invoked with three arguments: (nsValue, key, nsObject).

**Note:** This method mutates `object`.

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T`

The object to modify.

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

###### updater

(`oldValue`) => `any`

The function to produce the updated value.

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

The function to customize assigned values.

##### Returns

`T`

Returns `object`.

##### Since

4.6.0

##### Example

```ts
var object = {};

_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }
```

#### Call Signature

> **updateWith**\<`T`, `TResult`\>(`object`, `path`, `updater`, `customizer?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2531

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### object

`T`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### updater

(`oldValue`) => `any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`TResult`

##### See

_.updateWith

## Other

### bind

> **bind**: [`FunctionBind`](FunctionBind.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:93

Creates a function that invokes func with the this binding of thisArg and prepends any additional
_.bind arguments to those provided to the bound function.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
for partially applied arguments.

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

#### Param

**func**

The function to bind.

#### Param

**thisArg**

The this binding of func.

#### Param

**partials**

The arguments to be partially applied.

#### Returns

Returns the new bound function.

---

### bindKey

> **bindKey**: [`FunctionBindKey`](FunctionBindKey.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:127

Creates a function that invokes the method at object[key] and prepends any additional _.bindKey
arguments to those provided to the bound function.

This method differs from _.bind by allowing bound functions to reference methods that may be
redefined or don’t yet exist. See Peter Michaux’s article for more details.

The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a
placeholder for partially applied arguments.

#### Param

**object**

The object the method belongs to.

#### Param

**key**

The key of the method.

#### Param

**partials**

The arguments to be partially applied.

#### Returns

Returns the new bound function.

---

### curry

> **curry**: [`Curry`](Curry.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:151

---

### curryRight

> **curryRight**: [`CurryRight`](CurryRight.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:331

---

### each

> **each**: \{\<`T`\>(`collection`, `iteratee?`): `T`[]; (`collection`, `iteratee?`): `string`;
> \<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>;
> \<`T`\>(`collection`, `iteratee?`): `T`; \<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`;
> \<`TString`\>(`collection`, `iteratee?`): `TString`; \<`T`, `TList`\>(`collection`, `iteratee?`):
> `TList`; \<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`; \}

Defined in: node\_modules/@types/lodash/common/collection.d.ts:65

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T`[]

Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked
with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by
explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like
arrays. To avoid this behavior _.forIn or _.forOwn may be used for object iteration.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[]

The collection to iterate over.

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`[]

##### Alias

_.each

#### Call Signature

> (`collection`, `iteratee?`): `string`

##### Parameters

###### collection

`string`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

_.forEach

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\>

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

_.forEach

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T`

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

_.forEach

#### Call Signature

> \<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

##### Type Parameters

###### T

`T`

###### TArray

`TArray` _extends_ `T`[] \| `null` \| `undefined`

##### Parameters

###### collection

`TArray` & `T`[] \| `null` \| `undefined`

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

_.forEach

#### Call Signature

> \<`TString`\>(`collection`, `iteratee?`): `TString`

##### Type Parameters

###### TString

`TString` _extends_ `string` \| `null` \| `undefined`

##### Parameters

###### collection

`TString`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

_.forEach

#### Call Signature

> \<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

##### Type Parameters

###### T

`T`

###### TList

`TList` _extends_ [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Parameters

###### collection

`TList` & [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

_.forEach

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forEach

#### See

_.forEach

---

### eachRight

> **eachRight**: \{\<`T`\>(`collection`, `iteratee?`): `T`[]; (`collection`, `iteratee?`): `string`;
> \<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>;
> \<`T`\>(`collection`, `iteratee?`): `T`; \<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`;
> \<`TString`\>(`collection`, `iteratee?`): `TString`; \<`T`, `TList`\>(`collection`, `iteratee?`):
> `TList`; \<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`; \}

Defined in: node\_modules/@types/lodash/common/collection.d.ts:113

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T`[]

This method is like _.forEach except that it iterates over elements of collection from right to
left.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[]

The collection to iterate over.

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function called per iteration.

##### Returns

`T`[]

##### Alias

_.eachRight

#### Call Signature

> (`collection`, `iteratee?`): `string`

##### Parameters

###### collection

`string`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

_.forEachRight

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\>

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

_.forEachRight

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T`

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

_.forEachRight

#### Call Signature

> \<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

##### Type Parameters

###### T

`T`

###### TArray

`TArray` _extends_ `T`[] \| `null` \| `undefined`

##### Parameters

###### collection

`TArray` & `T`[] \| `null` \| `undefined`

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

_.forEachRight

#### Call Signature

> \<`TString`\>(`collection`, `iteratee?`): `TString`

##### Type Parameters

###### TString

`TString` _extends_ `string` \| `null` \| `undefined`

##### Parameters

###### collection

`TString`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

_.forEachRight

#### Call Signature

> \<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

##### Type Parameters

###### T

`T`

###### TList

`TList` _extends_ [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Parameters

###### collection

`TList` & [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

_.forEachRight

#### Call Signature

> \<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forEachRight

#### See

_.forEachRight

---

### first

> **first**: \{\<`T`\>(`array`): `T`; \<`T`\>(`array`): `T` \| `undefined`; \}

Defined in: node\_modules/@types/lodash/common/array.d.ts:426

#### Call Signature

> \<`T`\>(`array`): `T`

Gets the first element of array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

readonly \[`T`, `unknown`\]

The array to query.

##### Returns

`T`

Returns the first element of array.

##### Alias

_.first

#### Call Signature

> \<`T`\>(`array`): `T` \| `undefined`

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T` \| `undefined`

#### See

_.head

---

### memoize

> **memoize**: \{\<`T`\>(`func`, `resolver?`): `T` & [`MemoizedFunction`](MemoizedFunction.md);
> `Cache`: [`MapCacheConstructor`](MapCacheConstructor.md); \}

Defined in: node\_modules/@types/lodash/common/function.d.ts:547

Creates a function that memoizes the result of func. If resolver is provided it determines the cache
key for storing the result based on the arguments provided to the memoized function. By default, the
first argument provided to the memoized function is used as the map cache key. The func is invoked
with the this binding of the memoized function.

#### Type Parameters

##### T

`T` _extends_ (...`args`) => `any`

#### Parameters

##### func

`T`

The function to have its output memoized.

##### resolver?

(...`args`) => `any`

The function to resolve the cache key.

#### Returns

`T` & [`MemoizedFunction`](MemoizedFunction.md)

Returns the new memoizing function.

#### Cache

> **Cache**: [`MapCacheConstructor`](MapCacheConstructor.md)

---

### partial

> **partial**: [`Partial`](Partial.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:640

Creates a function that, when called, invokes func with any additional partial arguments prepended
to those provided to the new function. This method is similar to _.bind except it does not alter the
this binding.

#### Param

**func**

The function to partially apply arguments to.

#### Param

**args**

Arguments to be partially applied.

#### Returns

The new partially applied function.

---

### partialRight

> **partialRight**: [`PartialRight`](PartialRight.md)

Defined in: node\_modules/@types/lodash/common/function.d.ts:912

This method is like _.partial except that partial arguments are appended to those provided to the
new function.

#### Param

**func**

The function to partially apply arguments to.

#### Param

**args**

Arguments to be partially applied.

#### Returns

The new partially applied function.

---

### templateSettings

> **templateSettings**: [`TemplateSettings`](TemplateSettings.md)

Defined in: node\_modules/@types/lodash/common/common.d.ts:110

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

---

### VERSION

> **VERSION**: `string`

Defined in: node\_modules/@types/lodash/common/common.d.ts:105

The semantic version number.

---

### add()

> **add**(`augend`, `addend`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:11

Adds two numbers.

#### Parameters

##### augend

`number`

The first number to add.

##### addend

`number`

The second number to add.

#### Returns

`number`

Returns the sum.

---

### after()

> **after**\<`TFunc`\>(`n`, `func`): `TFunc`

Defined in: node\_modules/@types/lodash/common/function.d.ts:11

The opposite of _.before; this method creates a function that invokes func once it’s called n or
more times.

#### Type Parameters

##### TFunc

`TFunc` _extends_ (...`args`) => `any`

#### Parameters

##### n

`number`

The number of calls before func is invoked.

##### func

`TFunc`

The function to restrict.

#### Returns

`TFunc`

Returns the new restricted function.

---

### ary()

> **ary**(`func`, `n?`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/function.d.ts:33

Creates a function that accepts up to n arguments ignoring any additional arguments.

#### Parameters

##### func

(...`args`) => `any`

The function to cap arguments for.

##### n?

`number`

The arity cap.

#### Returns

Returns the new function.

(...`args`) => `any`

---

### at()

#### Call Signature

> **at**\<`T`\>(`object`, ...`props`): `T`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:418

Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
specified as individual arguments or as arrays of keys.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

The object to iterate over.

###### props

...[`PropertyPath`](../type-aliases/PropertyPath.md)[]

The property names or indexes of elements to pick, specified individually or in arrays.

##### Returns

`T`[]

Returns the new array of picked elements.

#### Call Signature

> **at**\<`T`\>(`object`, ...`props`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:422

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### props

...[`Many`](../type-aliases/Many.md)\<keyof `T`\>[]

##### Returns

`T`\[keyof `T`\][]

##### See

_.at

---

### attempt()

> **attempt**\<`TResult`\>(`func`, ...`args`): `Error` \| `TResult`

Defined in: node\_modules/@types/lodash/common/util.d.ts:11

Attempts to invoke func, returning either the result or the caught error object. Any additional
arguments are provided to func when it’s invoked.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### func

(...`args`) => `TResult`

The function to attempt.

##### args

...`any`[]

#### Returns

`Error` \| `TResult`

Returns the func result or error object.

---

### before()

> **before**\<`TFunc`\>(`n`, `func`): `TFunc`

Defined in: node\_modules/@types/lodash/common/function.d.ts:57

Creates a function that invokes func, with the this binding and arguments of the created function,
while it’s called less than n times. Subsequent calls to the created function return the result of
the last func invocation.

#### Type Parameters

##### TFunc

`TFunc` _extends_ (...`args`) => `any`

#### Parameters

##### n

`number`

The number of calls at which func is no longer invoked.

##### func

`TFunc`

The function to restrict.

#### Returns

`TFunc`

Returns the new restricted function.

---

### bindAll()

> **bindAll**\<`T`\>(`object`, ...`methodNames`): `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:39

Binds methods of an object to the object itself, overwriting the existing method. Method names may
be specified as individual arguments or as arrays of method names. If no method names are provided
all enumerable function properties, own and inherited, of object are bound.

Note: This method does not set the "length" property of bound functions.

#### Type Parameters

##### T

`T`

#### Parameters

##### object

`T`

The object to bind and assign the bound methods to.

##### methodNames

...[`Many`](../type-aliases/Many.md)\<`string`\>[]

The object method names to bind, specified as individual method names or arrays of method names.

#### Returns

`T`

Returns object.

---

### camelCase()

> **camelCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:10

Converts string to camel case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the camel cased string.

---

### capitalize()

> **capitalize**\<`T`\>(`string?`): `string` _extends_ `T` ? `string` :
> `Capitalize`\<`Lowercase`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:32

Converts the first character of string to upper case and the remaining to lower case.

#### Type Parameters

##### T

`T` _extends_ `string`

#### Parameters

##### string?

`T`

The string to capitalize.

#### Returns

`string` _extends_ `T` ? `string` : `Capitalize`\<`Lowercase`\<`T`\>\>

Returns the capitalized string.

---

### castArray()

> **castArray**\<`T`\>(`value?`): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:13

Casts value as an array if it’s not one.

#### Type Parameters

##### T

`T`

#### Parameters

##### value?

[`Many`](../type-aliases/Many.md)\<`T`\>

The value to inspect.

#### Returns

`T`[]

Returns the cast array.

---

### ceil()

> **ceil**(`n`, `precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:34

Calculates n rounded up to precision.

#### Parameters

##### n

`number`

The number to round up.

##### precision?

`number`

The precision to round up to.

#### Returns

`number`

Returns the rounded up number.

---

### chain()

#### Call Signature

> **chain**\<`TrapAny`\>(`value`): [`CollectionChain`](CollectionChain.md)\<`any`\> &
> [`FunctionChain`](FunctionChain.md)\<`any`\> & [`ObjectChain`](ObjectChain.md)\<`any`\> &
> [`PrimitiveChain`](PrimitiveChain.md)\<`any`\> & [`StringChain`](StringChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:11

Creates a lodash object that wraps value with explicit method chaining enabled.

##### Type Parameters

###### TrapAny

`TrapAny` _extends_ `object`

##### Parameters

###### value

`TrapAny`

The value to wrap.

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\> & [`FunctionChain`](FunctionChain.md)\<`any`\> &
[`ObjectChain`](ObjectChain.md)\<`any`\> & [`PrimitiveChain`](PrimitiveChain.md)\<`any`\> &
[`StringChain`](StringChain.md)\<`string`\>

Returns the new lodash wrapper instance.

#### Call Signature

> **chain**\<`T`\>(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:15

##### Type Parameters

###### T

`T` _extends_ `null` \| `undefined`

##### Parameters

###### value

`T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### See

_.chain

#### Call Signature

> **chain**\<`T`\>(`value`): [`StringChain`](StringChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:19

##### Type Parameters

###### T

`T` _extends_ `string`

##### Parameters

###### value

`T`

##### Returns

[`StringChain`](StringChain.md)\<`T`\>

##### See

_.chain

#### Call Signature

> **chain**(`value`): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/seq.d.ts:23

##### Parameters

###### value

`string` \| `null` \| `undefined`

##### Returns

[`StringNullableChain`](StringNullableChain.md)

##### See

_.chain

#### Call Signature

> **chain**\<`T`\>(`value`): [`FunctionChain`](FunctionChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:27

##### Type Parameters

###### T

`T` _extends_ (...`args`) => `any`

##### Parameters

###### value

`T`

##### Returns

[`FunctionChain`](FunctionChain.md)\<`T`\>

##### See

_.chain

#### Call Signature

> **chain**\<`T`\>(`value`): [`CollectionChain`](CollectionChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:31

##### Type Parameters

###### T

`T` = `any`

##### Parameters

###### value

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

_.chain

#### Call Signature

> **chain**\<`T`\>(`value`): [`ObjectChain`](ObjectChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:35

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### value

`T` \| `null` \| `undefined`

##### Returns

[`ObjectChain`](ObjectChain.md)\<`T`\>

##### See

_.chain

#### Call Signature

> **chain**\<`T`\>(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:39

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### See

_.chain

---

### chunk()

> **chunk**\<`T`\>(`array`, `size?`): `T`[][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:20

Creates an array of elements split into groups the length of size. If collection can’t be split
evenly, the final chunk will be the remaining elements.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to process.

##### size?

`number`

The length of each chunk.

#### Returns

`T`[][]

Returns the new array containing chunks.

---

### clone()

> **clone**\<`T`\>(`value`): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:94

Creates a shallow clone of value.

Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings,
symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain
objects. An empty object is returned for uncloneable values such as error objects, functions, DOM
nodes, and WeakMaps.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to clone.

#### Returns

`T`

Returns the cloned value.

---

### cloneDeep()

> **cloneDeep**\<`T`\>(`value`): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:165

This method is like _.clone except that it recursively clones value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to recursively clone.

#### Returns

`T`

Returns the deep cloned value.

---

### cloneDeepWith()

#### Call Signature

> **cloneDeepWith**\<`T`\>(`value`, `customizer`): `any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:176

This method is like _.cloneWith except that it recursively clones value.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

The value to recursively clone.

###### customizer

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

The function to customize cloning.

##### Returns

`any`

Returns the deep cloned value.

#### Call Signature

> **cloneDeepWith**\<`T`\>(`value`): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:180

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

##### Returns

`T`

##### See

_.cloneDeepWith

---

### cloneWith()

#### Call Signature

> **cloneWith**\<`T`, `TResult`\>(`value`, `customizer`): `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:192

This method is like _.clone except that it accepts customizer which is invoked to produce the cloned
value. If customizer returns undefined cloning is handled by the method instead.

##### Type Parameters

###### T

`T`

###### TResult

`TResult` _extends_ `string` \| `number` \| `boolean` \| `object` \| `null`

##### Parameters

###### value

`T`

The value to clone.

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

The function to customize cloning.

##### Returns

`TResult`

Returns the cloned value.

#### Call Signature

> **cloneWith**\<`T`, `TResult`\>(`value`, `customizer`): `T` \| `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:196

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### value

`T`

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult` \| `undefined`\>

##### Returns

`T` \| `TResult`

##### See

_.cloneWith

#### Call Signature

> **cloneWith**\<`T`\>(`value`): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:200

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

##### Returns

`T`

##### See

_.cloneWith

---

### compact()

> **compact**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:42

Creates an array with all falsey values removed. The values false, null, 0, 0n, "", undefined, and
NaN are falsey.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T` \| [`Falsey`](../type-aliases/Falsey.md)\> \| `null` \|
`undefined`

The array to compact.

#### Returns

`T`[]

Returns the new array of filtered values.

---

### conforms()

> **conforms**\<`T`\>(`source`): (`value`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:94

Creates a function that invokes the predicate properties of `source` with the corresponding property
values of a given object, returning true if all predicates return truthy, else false.

#### Type Parameters

##### T

`T`

#### Parameters

##### source

[`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

(`value`) => `boolean`

---

### conformsTo()

> **conformsTo**\<`T`\>(`object`, `source`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:209

Checks if object conforms to source by invoking the predicate properties of source with the
corresponding property values of object.

Note: This method is equivalent to _.conforms when source is partially applied.

#### Type Parameters

##### T

`T`

#### Parameters

##### object

`T`

##### source

[`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

`boolean`

---

### constant()

> **constant**\<`T`\>(`value`): () => `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:116

Creates a function that returns value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to return from the new function.

#### Returns

Returns the new function.

() => `T`

---

### countBy()

#### Call Signature

> **countBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:13

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the number of times the key was returned by
iteratee. The iteratee is invoked with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`number`\>

Returns the composed aggregate object.

#### Call Signature

> **countBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:17

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`number`\>

##### See

_.countBy

---

### create()

> **create**\<`T`, `U`\>(`prototype`, `properties?`): `T` & `U`

Defined in: node\_modules/@types/lodash/common/object.d.ts:457

Creates an object that inherits from the given prototype object. If a properties object is provided
its own enumerable properties are assigned to the created object.

#### Type Parameters

##### T

`T` _extends_ `object`

##### U

`U` _extends_ `object`

#### Parameters

##### prototype

`T`

The object to inherit from.

##### properties?

`U`

The properties to assign to the object.

#### Returns

`T` & `U`

Returns the new object.

---

### debounce()

#### Call Signature

> **debounce**\<`T`\>(`func`, `wait`, `options`):
> [`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:425

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
since the last time the debounced function was invoked. The debounced function comes with a cancel
method to cancel delayed invocations and a flush method to immediately invoke them. Provide an
options object to indicate that func should be invoked on the leading and/or trailing edge of the
wait timeout. Subsequent calls to the debounced function return the result of the last func
invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the debounced function is invoked more than once during the wait timeout.

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

##### Type Parameters

###### T

`T` _extends_ (...`args`) => `any`

##### Parameters

###### func

`T`

The function to debounce.

###### wait

`number` \| `undefined`

The number of milliseconds to delay.

###### options

[`DebounceSettingsLeading`](DebounceSettingsLeading.md)

The options object.

##### Returns

[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Returns the new debounced function.

#### Call Signature

> **debounce**\<`T`\>(`func`, `wait?`, `options?`): [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:426

##### Type Parameters

###### T

`T` _extends_ (...`args`) => `any`

##### Parameters

###### func

`T`

###### wait?

`number`

###### options?

[`DebounceSettings`](DebounceSettings.md)

##### Returns

[`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

---

### deburr()

> **deburr**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:55

Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing
combining diacritical marks.

#### Parameters

##### string?

`string`

The string to deburr.

#### Returns

`string`

Returns the deburred string.

---

### defaults()

#### Call Signature

> **defaults**\<`TObject`, `TSource`\>(`object`, `source`): `NonNullable`\<`TSource` & `TObject`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:483

Assigns own enumerable properties of source object(s) to the destination object for all destination
properties that resolve to undefined. Once a property is set, additional values of the same property
are ignored.

Note: This method mutates object.

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

The destination object.

###### source

`TSource`

##### Returns

`NonNullable`\<`TSource` & `TObject`\>

The destination object.

#### Call Signature

> **defaults**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`):
> `NonNullable`\<`TSource2` & `TSource1` & `TObject`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:487

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`NonNullable`\<`TSource2` & `TSource1` & `TObject`\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:491

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1`
> & `TObject`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:495

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `TObject`\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TObject`\>(`object`): `NonNullable`\<`TObject`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:499

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`NonNullable`\<`TObject`\>

##### See

_.defaults

#### Call Signature

> **defaults**(`object`, ...`sources`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:503

##### Parameters

###### object

`any`

###### sources

...`any`[]

##### Returns

`any`

##### See

_.defaults

---

### defaultsDeep()

> **defaultsDeep**(`object`, ...`sources`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:564

This method is like _.defaults except that it recursively assigns default properties.

#### Parameters

##### object

`any`

The destination object.

##### sources

...`any`[]

The source objects.

#### Returns

`any`

Returns object.

---

### defaultTo()

#### Call Signature

> **defaultTo**\<`T`\>(`value`, `defaultValue`): `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:141

Checks `value` to determine whether a default value should be returned in its place. The
`defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T` \| `null` \| `undefined`

The value to check.

###### defaultValue

`T`

The default value.

##### Returns

`T`

Returns the resolved value.

#### Call Signature

> **defaultTo**\<`T`, `TDefault`\>(`value`, `defaultValue`): `T` \| `TDefault`

Defined in: node\_modules/@types/lodash/common/util.d.ts:145

##### Type Parameters

###### T

`T`

###### TDefault

`TDefault`

##### Parameters

###### value

`T` \| `null` \| `undefined`

###### defaultValue

`TDefault`

##### Returns

`T` \| `TDefault`

##### See

_.defaultTo

---

### defer()

> **defer**(`func`, ...`args`): `number`

Defined in: node\_modules/@types/lodash/common/function.d.ts:463

Defers invoking the func until the current call stack has cleared. Any additional arguments are
provided to func when it’s invoked.

#### Parameters

##### func

(...`args`) => `any`

The function to defer.

##### args

...`any`[]

The arguments to invoke the function with.

#### Returns

`number`

Returns the timer id.

---

### delay()

> **delay**(`func`, `wait`, ...`args`): `number`

Defined in: node\_modules/@types/lodash/common/function.d.ts:486

Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s
invoked.

#### Parameters

##### func

(...`args`) => `any`

The function to delay.

##### wait

`number`

The number of milliseconds to delay invocation.

##### args

...`any`[]

The arguments to invoke the function with.

#### Returns

`number`

Returns the timer id.

---

### difference()

> **difference**\<`T`\>(`array`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:125

Creates an array of `array` values not included in the other provided arrays using SameValueZero for
equality comparisons. The order and references of result values are determined by the first array.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to inspect.

##### values

...[`List`](../type-aliases/List.md)\<`T`\>[]

The arrays of values to exclude.

#### Returns

`T`[]

Returns the new array of filtered values.

---

### differenceBy()

#### Call Signature

> **differenceBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:150

This method is like _.difference except that it accepts iteratee which is invoked for each element
of array and values to generate the criterion by which they're compared. The order and references of
result values are determined by the first array. The iteratee is invoked with one argument: (value).

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

The array to inspect.

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

The values to exclude.

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

The iteratee invoked per element.

##### Returns

`T1`[]

Returns the new array of filtered values.

#### Call Signature

> **differenceBy**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:154

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

_.differenceBy

#### Call Signature

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `values3`, `iteratee`):
> `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:158

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values3

[`List`](../type-aliases/List.md)\<`T4`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4`\>

##### Returns

`T1`[]

##### See

_.differenceBy

#### Call Signature

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`array`, `values1`, `values2`, `values3`,
> `values4`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:162

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values3

[`List`](../type-aliases/List.md)\<`T4`\>

###### values4

[`List`](../type-aliases/List.md)\<`T5`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \| `T5`\>

##### Returns

`T1`[]

##### See

_.differenceBy

#### Call Signature

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`array`, `values1`, `values2`, `values3`,
> `values4`, `values5`, `iteratee`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:166

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values3

[`List`](../type-aliases/List.md)\<`T4`\>

###### values4

[`List`](../type-aliases/List.md)\<`T5`\>

###### values5

[`List`](../type-aliases/List.md)\<`T6`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`\>

##### Returns

`T1`[]

##### See

_.differenceBy

#### Call Signature

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`array`, `values1`, `values2`,
> `values3`, `values4`, `values5`, ...`values`): `T1`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:170

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T1`\> \| `null` \| `undefined`

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### values2

[`List`](../type-aliases/List.md)\<`T3`\>

###### values3

[`List`](../type-aliases/List.md)\<`T4`\>

###### values4

[`List`](../type-aliases/List.md)\<`T5`\>

###### values5

[`List`](../type-aliases/List.md)\<`T6`\>

###### values

...([`List`](../type-aliases/List.md)\<`T7`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \|
`T7`\>)[]

##### Returns

`T1`[]

##### See

_.differenceBy

#### Call Signature

> **differenceBy**\<`T`\>(`array`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:174

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### values

...[`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

_.differenceBy

---

### divide()

> **divide**(`dividend`, `divisor`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:57

Divide two numbers.

#### Parameters

##### dividend

`number`

The first number in a division.

##### divisor

`number`

The second number in a division.

#### Returns

`number`

Returns the quotient.

---

### drop()

> **drop**\<`T`\>(`array`, `n?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:255

Creates a slice of array with n elements dropped from the beginning.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### n?

`number`

The number of elements to drop.

#### Returns

`T`[]

Returns the slice of array.

---

### dropRight()

> **dropRight**\<`T`\>(`array`, `n?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:277

Creates a slice of array with n elements dropped from the end.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### n?

`number`

The number of elements to drop.

#### Returns

`T`[]

Returns the slice of array.

---

### dropRightWhile()

> **dropRightWhile**\<`T`\>(`array`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:300

Creates a slice of array excluding elements dropped from the end. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

---

### dropWhile()

> **dropWhile**\<`T`\>(`array`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:323

Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

---

### endsWith()

> **endsWith**(`string?`, `target?`, `position?`): `boolean`

Defined in: node\_modules/@types/lodash/common/string.d.ts:79

Checks if string ends with the given target string.

#### Parameters

##### string?

`string`

The string to search.

##### target?

`string`

The string to search for.

##### position?

`number`

The position to search from.

#### Returns

`boolean`

Returns true if string ends with target, else false.

---

### entries()

#### Call Signature

> **entries**\<`T`\>(`object?`): \[`string`, `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:582

##### Type Parameters

###### T

`T`

##### Parameters

###### object?

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

\[`string`, `T`\][]

##### See

_.toPairs

#### Call Signature

> **entries**(`object?`): \[`string`, `any`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:586

##### Parameters

###### object?

`object`

##### Returns

\[`string`, `any`\][]

##### See

_.entries

---

### entriesIn()

#### Call Signature

> **entriesIn**\<`T`\>(`object?`): \[`string`, `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:616

##### Type Parameters

###### T

`T`

##### Parameters

###### object?

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

\[`string`, `T`\][]

##### See

_.entriesIn

#### Call Signature

> **entriesIn**(`object?`): \[`string`, `any`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:620

##### Parameters

###### object?

`object`

##### Returns

\[`string`, `any`\][]

##### See

_.entriesIn

---

### escape()

> **escape**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:112

Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML
entities.

Note: No other characters are escaped. To escape additional characters use a third-party library
like he.

Though the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in
HTML and have no special meaning unless they're part of a tag or unquoted attribute value. See
Mathias Bynens’s article (under "semi-related fun fact") for more details.

Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments.
See #59, #102, #108, and #133 of the HTML5 Security Cheatsheet for more details.

When working with HTML you should always quote attribute values to reduce XSS vectors.

#### Parameters

##### string?

`string`

The string to escape.

#### Returns

`string`

Returns the escaped string.

---

### escapeRegExp()

> **escapeRegExp**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:135

Escapes the RegExp special characters "^", "$", "\", ".", "*", "+", "?", "(", ")", "[", "]", "{",
"}", and "|" in string.

#### Parameters

##### string?

`string`

The string to escape.

#### Returns

`string`

Returns the escaped string.

---

### every()

#### Call Signature

> **every**\<`T`\>(`collection`, `predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:166

Checks if predicate returns truthy for all elements of collection. Iteration is stopped once
predicate returns falsey. The predicate is invoked with three arguments: (value, index|key,
collection).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### Returns

`boolean`

Returns true if all elements pass the predicate check, else false.

#### Call Signature

> **every**\<`T`\>(`collection`, `predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:170

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`boolean`

##### See

_.every

---

### extend()

#### Call Signature

> **extend**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:650

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

###### source

`TSource`

##### Returns

`TObject` & `TSource`

##### See

_.extend

#### Call Signature

> **extend**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:654

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.extend

#### Call Signature

> **extend**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:658

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.extend

#### Call Signature

> **extend**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:662

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.extend

#### Call Signature

> **extend**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:666

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.extend

#### Call Signature

> **extend**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:670

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`TResult`

##### See

_.extend

---

### extendWith()

#### Call Signature

> **extendWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

Defined in: node\_modules/@types/lodash/common/object.d.ts:728

##### Type Parameters

###### TObject

`TObject`

###### TSource

`TSource`

##### Parameters

###### object

`TObject`

###### source

`TSource`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource`

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

Defined in: node\_modules/@types/lodash/common/object.d.ts:732

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

Defined in: node\_modules/@types/lodash/common/object.d.ts:736

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

Defined in: node\_modules/@types/lodash/common/object.d.ts:740

##### Type Parameters

###### TObject

`TObject`

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### object

`TObject`

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TObject`\>(`object`): `TObject`

Defined in: node\_modules/@types/lodash/common/object.d.ts:744

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

##### Returns

`TObject`

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:748

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`any`

###### otherArgs

...`any`[]

##### Returns

`TResult`

##### See

_.extendWith

---

### fill()

#### Call Signature

> **fill**\<`T`\>(`array`, `value`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:349

Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`any`[] \| `null` \| `undefined`

The array to fill.

###### value

`T`

The value to fill array with.

##### Returns

`T`[]

Returns array.

#### Call Signature

> **fill**\<`T`, `AnyList`\>(`array`, `value`): [`List`](../type-aliases/List.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:353

##### Type Parameters

###### T

`T`

###### AnyList

`AnyList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`AnyList`\> \| `null` \| `undefined`

###### value

`T`

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

_.fill

#### Call Signature

> **fill**\<`T`, `U`\>(`array`, `value`, `start?`, `end?`): (`T` \| `U`)[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:357

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### array

`U`[] \| `null` \| `undefined`

###### value

`T`

###### start?

`number`

###### end?

`number`

##### Returns

(`T` \| `U`)[]

##### See

_.fill

#### Call Signature

> **fill**\<`T`, `UList`\>(`array`, `value`, `start?`, `end?`):
> [`List`](../type-aliases/List.md)\<`T` \| `UList`\[`0`\]\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:361

##### Type Parameters

###### T

`T`

###### UList

`UList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`UList`\> \| `null` \| `undefined`

###### value

`T`

###### start?

`number`

###### end?

`number`

##### Returns

[`List`](../type-aliases/List.md)\<`T` \| `UList`\[`0`\]\>

##### See

_.fill

---

### filter()

#### Call Signature

> **filter**(`collection`, `predicate?`): `string`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:205

Iterates over elements of collection, returning an array of all elements predicate returns truthy
for. The predicate is invoked with three arguments: (value, index|key, collection).

##### Parameters

###### collection

`string` \| `null` \| `undefined`

The collection to iterate over.

###### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

The function invoked per iteration.

##### Returns

`string`[]

Returns the new filtered array.

#### Call Signature

> **filter**\<`T`, `S`\>(`collection`, `predicate`): `S`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:209

##### Type Parameters

###### T

`T`

###### S

`S`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

`S`[]

##### See

_.filter

#### Call Signature

> **filter**\<`T`\>(`collection`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:213

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`[]

##### See

_.filter

#### Call Signature

> **filter**\<`T`, `S`\>(`collection`, `predicate`): `S`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:217

##### Type Parameters

###### T

`T` _extends_ `object`

###### S

`S`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

`S`[]

##### See

_.filter

#### Call Signature

> **filter**\<`T`\>(`collection`, `predicate?`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:221

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`\[keyof `T`\][]

##### See

_.filter

---

### find()

#### Call Signature

> **find**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:291

Iterates over elements of collection, returning the first element predicate returns truthy for. The
predicate is invoked with three arguments: (value, index|key, collection).

##### Type Parameters

###### T

`T`

###### S

`S`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to search.

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

The function invoked per iteration.

###### fromIndex?

`number`

The index to search from.

##### Returns

`S` \| `undefined`

Returns the matched element, else undefined.

#### Call Signature

> **find**\<`T`\>(`collection`, `predicate?`, `fromIndex?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:295

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T` \| `undefined`

##### See

_.find

#### Call Signature

> **find**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:299

##### Type Parameters

###### T

`T` _extends_ `object`

###### S

`S`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.find

#### Call Signature

> **find**\<`T`\>(`collection`, `predicate?`, `fromIndex?`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:303

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.find

---

### findIndex()

> **findIndex**\<`T`\>(`array`, `predicate?`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:385

This method is like _.find except that it returns the index of the first element predicate returns
truthy for instead of the element itself.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### fromIndex?

`number`

The index to search from.

#### Returns

`number`

Returns the index of the found element, else -1.

---

### findKey()

> **findKey**\<`T`\>(`object`, `predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:811

This method is like _.find except that it returns the key of the first element predicate returns
truthy for instead of the element itself.

#### Type Parameters

##### T

`T`

#### Parameters

##### object

`T` \| `null` \| `undefined`

The object to search.

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`string` \| `undefined`

Returns the key of the matched element, else undefined.

---

### findLast()

#### Call Signature

> **findLast**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:354

This method is like _.find except that it iterates over elements of a collection from right to left.

##### Type Parameters

###### T

`T`

###### S

`S`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

Searches for a value in this list.

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

The function called per iteration.

###### fromIndex?

`number`

The index to search from.

##### Returns

`S` \| `undefined`

The found element, else undefined.

#### Call Signature

> **findLast**\<`T`\>(`collection`, `predicate?`, `fromIndex?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:358

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T` \| `undefined`

##### See

_.findLast

#### Call Signature

> **findLast**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:362

##### Type Parameters

###### T

`T` _extends_ `object`

###### S

`S`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.findLast

#### Call Signature

> **findLast**\<`T`\>(`collection`, `predicate?`, `fromIndex?`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:366

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.findLast

---

### findLastIndex()

> **findLastIndex**\<`T`\>(`array`, `predicate?`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:408

This method is like _.findIndex except that it iterates over elements of collection from right to
left.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### fromIndex?

`number`

The index to search from.

#### Returns

`number`

Returns the index of the found element, else -1.

---

### findLastKey()

> **findLastKey**\<`T`\>(`object`, `predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:833

This method is like _.findKey except that it iterates over elements of a collection in the opposite
order.

#### Type Parameters

##### T

`T`

#### Parameters

##### object

`T` \| `null` \| `undefined`

The object to search.

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`string` \| `undefined`

Returns the key of the matched element, else undefined.

---

### flatMap()

#### Call Signature

> **flatMap**\<`T`\>(`collection`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:418

Creates an array of flattened values by running each element in collection through iteratee and
concating its result to the other mapped values. The iteratee is invoked with three arguments:
(value, index|key, collection).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\> \| `null` \|
`undefined`

The collection to iterate over.

##### Returns

`T`[]

Returns the new flattened array.

#### Call Signature

> **flatMap**(`collection`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:422

##### Parameters

###### collection

`object` \| `null` \| `undefined`

##### Returns

`any`[]

##### See

_.flatMap

#### Call Signature

> **flatMap**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:426

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

_.flatMap

#### Call Signature

> **flatMap**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:430

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

_.flatMap

#### Call Signature

> **flatMap**(`collection`, `iteratee`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:434

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`string`

##### Returns

`any`[]

##### See

_.flatMap

#### Call Signature

> **flatMap**(`collection`, `iteratee`): `boolean`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:438

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### iteratee

`object`

##### Returns

`boolean`[]

##### See

_.flatMap

---

### flatten()

> **flatten**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:467

Flattens `array` a single level deep.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\> \| `null` \|
`undefined`

The array to flatten.

#### Returns

`T`[]

Returns the new flattened array.

---

### flattenDeep()

> **flattenDeep**\<`T`\>(`array`): [`Flat`](../type-aliases/Flat.md)\<`T`\>[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:509

Recursively flattens a nested array.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\> \| `null` \| `undefined`

The array to recursively flatten.

#### Returns

[`Flat`](../type-aliases/Flat.md)\<`T`\>[]

Returns the new flattened array.

---

### flattenDepth()

> **flattenDepth**\<`T`\>(`array`, `depth?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:531

Recursively flatten array up to depth times.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\> \| `null` \| `undefined`

The array to recursively flatten.

##### depth?

`number`

#### Returns

`T`[]

Returns the new flattened array.

---

### floor()

> **floor**(`n`, `precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:80

Calculates n rounded down to precision.

#### Parameters

##### n

`number`

The number to round down.

##### precision?

`number`

The precision to round down to.

#### Returns

`number`

Returns the rounded down number.

---

### flow()

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`,
> `f7`): (...`args`) => `R7`

Defined in: node\_modules/@types/lodash/common/util.d.ts:176

Creates a function that returns the result of invoking the provided functions with the this binding
of the created function, where each successive invocation is supplied the return value of the
previous.

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

###### R6

`R6`

###### R7

`R7`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

###### f4

(`a`) => `R4`

###### f5

(`a`) => `R5`

###### f6

(`a`) => `R6`

###### f7

(`a`) => `R7`

##### Returns

Returns the new function.

(...`args`) => `R7`

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`,
> `f7`, ...`func`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:180

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

###### R6

`R6`

###### R7

`R7`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

###### f4

(`a`) => `R4`

###### f5

(`a`) => `R5`

###### f6

(`a`) => `R6`

###### f7

(`a`) => `R7`

###### func

...[`Many`](../type-aliases/Many.md)\<(`a`) => `any`\>[]

##### Returns

(...`args`) => `any`

##### See

_.flow

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`):
> (...`args`) => `R6`

Defined in: node\_modules/@types/lodash/common/util.d.ts:184

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

###### R6

`R6`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

###### f4

(`a`) => `R4`

###### f5

(`a`) => `R5`

###### f6

(`a`) => `R6`

##### Returns

(...`args`) => `R6`

##### See

_.flow

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f1`, `f2`, `f3`, `f4`, `f5`): (...`args`) => `R5`

Defined in: node\_modules/@types/lodash/common/util.d.ts:188

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

###### f4

(`a`) => `R4`

###### f5

(`a`) => `R5`

##### Returns

(...`args`) => `R5`

##### See

_.flow

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f1`, `f2`, `f3`, `f4`): (...`args`) => `R4`

Defined in: node\_modules/@types/lodash/common/util.d.ts:192

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

###### f4

(`a`) => `R4`

##### Returns

(...`args`) => `R4`

##### See

_.flow

#### Call Signature

> **flow**\<`A`, `R1`, `R2`, `R3`\>(`f1`, `f2`, `f3`): (...`args`) => `R3`

Defined in: node\_modules/@types/lodash/common/util.d.ts:196

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

###### f3

(`a`) => `R3`

##### Returns

(...`args`) => `R3`

##### See

_.flow

#### Call Signature

> **flow**\<`A`, `R1`, `R2`\>(`f1`, `f2`): (...`args`) => `R2`

Defined in: node\_modules/@types/lodash/common/util.d.ts:200

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

##### Parameters

###### f1

(...`args`) => `R1`

###### f2

(`a`) => `R2`

##### Returns

(...`args`) => `R2`

##### See

_.flow

#### Call Signature

> **flow**(...`func`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:204

##### Parameters

###### func

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

(...`args`) => `any`

##### See

_.flow

---

### flowRight()

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f7`, `f6`, `f5`, `f4`, `f3`, `f2`,
> `f1`): (...`args`) => `R7`

Defined in: node\_modules/@types/lodash/common/util.d.ts:283

This method is like _.flow except that it creates a function that invokes the provided functions
from right to left.

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

###### R6

`R6`

###### R7

`R7`

##### Parameters

###### f7

(`a`) => `R7`

###### f6

(`a`) => `R6`

###### f5

(`a`) => `R5`

###### f4

(`a`) => `R4`

###### f3

(`a`) => `R3`

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

Returns the new function.

(...`args`) => `R7`

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f6`, `f5`, `f4`, `f3`, `f2`, `f1`):
> (...`args`) => `R6`

Defined in: node\_modules/@types/lodash/common/util.d.ts:287

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

###### R6

`R6`

##### Parameters

###### f6

(`a`) => `R6`

###### f5

(`a`) => `R5`

###### f4

(`a`) => `R4`

###### f3

(`a`) => `R3`

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

(...`args`) => `R6`

##### See

_.flowRight

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f5`, `f4`, `f3`, `f2`, `f1`): (...`args`) =>
> `R5`

Defined in: node\_modules/@types/lodash/common/util.d.ts:291

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

###### R5

`R5`

##### Parameters

###### f5

(`a`) => `R5`

###### f4

(`a`) => `R4`

###### f3

(`a`) => `R3`

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

(...`args`) => `R5`

##### See

_.flowRight

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f4`, `f3`, `f2`, `f1`): (...`args`) => `R4`

Defined in: node\_modules/@types/lodash/common/util.d.ts:295

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

###### R4

`R4`

##### Parameters

###### f4

(`a`) => `R4`

###### f3

(`a`) => `R3`

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

(...`args`) => `R4`

##### See

_.flowRight

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`, `R3`\>(`f3`, `f2`, `f1`): (...`args`) => `R3`

Defined in: node\_modules/@types/lodash/common/util.d.ts:299

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

###### R3

`R3`

##### Parameters

###### f3

(`a`) => `R3`

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

(...`args`) => `R3`

##### See

_.flowRight

#### Call Signature

> **flowRight**\<`A`, `R1`, `R2`\>(`f2`, `f1`): (...`args`) => `R2`

Defined in: node\_modules/@types/lodash/common/util.d.ts:303

##### Type Parameters

###### A

`A` _extends_ `any`[]

###### R1

`R1`

###### R2

`R2`

##### Parameters

###### f2

(`a`) => `R2`

###### f1

(...`args`) => `R1`

##### Returns

(...`args`) => `R2`

##### See

_.flowRight

#### Call Signature

> **flowRight**(...`func`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:307

##### Parameters

###### func

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

(...`args`) => `any`

##### See

_.flowRight

---

### forEach()

#### Call Signature

> **forEach**\<`T`\>(`collection`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:786

Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked
with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by
explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like
arrays. To avoid this behavior _.forIn or _.forOwn may be used for object iteration.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[]

The collection to iterate over.

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`[]

##### Alias

_.each

#### Call Signature

> **forEach**(`collection`, `iteratee?`): `string`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:790

##### Parameters

###### collection

`string`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

_.forEach

#### Call Signature

> **forEach**\<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:794

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\>

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

_.forEach

#### Call Signature

> **forEach**\<`T`\>(`collection`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:798

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

_.forEach

#### Call Signature

> **forEach**\<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:802

##### Type Parameters

###### T

`T`

###### TArray

`TArray` _extends_ `T`[] \| `null` \| `undefined`

##### Parameters

###### collection

`TArray` & `T`[] \| `null` \| `undefined`

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

_.forEach

#### Call Signature

> **forEach**\<`TString`\>(`collection`, `iteratee?`): `TString`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:806

##### Type Parameters

###### TString

`TString` _extends_ `string` \| `null` \| `undefined`

##### Parameters

###### collection

`TString`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

_.forEach

#### Call Signature

> **forEach**\<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:810

##### Type Parameters

###### T

`T`

###### TList

`TList` _extends_ [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Parameters

###### collection

`TList` & [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

_.forEach

#### Call Signature

> **forEach**\<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:814

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forEach

---

### forEachRight()

#### Call Signature

> **forEachRight**\<`T`\>(`collection`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:867

This method is like _.forEach except that it iterates over elements of collection from right to
left.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[]

The collection to iterate over.

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function called per iteration.

##### Returns

`T`[]

##### Alias

_.eachRight

#### Call Signature

> **forEachRight**(`collection`, `iteratee?`): `string`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:871

##### Parameters

###### collection

`string`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`T`\>(`collection`, `iteratee?`): [`List`](../type-aliases/List.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:875

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\>

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`T`\>(`collection`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:879

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:883

##### Type Parameters

###### T

`T`

###### TArray

`TArray` _extends_ `T`[] \| `null` \| `undefined`

##### Parameters

###### collection

`TArray` & `T`[] \| `null` \| `undefined`

###### iteratee?

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`TString`\>(`collection`, `iteratee?`): `TString`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:887

##### Type Parameters

###### TString

`TString` _extends_ `string` \| `null` \| `undefined`

##### Parameters

###### collection

`TString`

###### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:891

##### Type Parameters

###### T

`T`

###### TList

`TList` _extends_ [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Parameters

###### collection

`TList` & [`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

_.forEachRight

#### Call Signature

> **forEachRight**\<`T`\>(`collection`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:895

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forEachRight

---

### forIn()

#### Call Signature

> **forIn**\<`T`\>(`object`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:857

Iterates over own and inherited enumerable properties of an object invoking iteratee for each
property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
exit iteration early by explicitly returning false.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T`

The object to iterate over.

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

#### Call Signature

> **forIn**\<`T`\>(`object`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:861

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forIn

---

### forInRight()

#### Call Signature

> **forInRight**\<`T`\>(`object`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:883

This method is like _.forIn except that it iterates over properties of object in the opposite order.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T`

The object to iterate over.

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

#### Call Signature

> **forInRight**\<`T`\>(`object`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:887

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forInRight

---

### forOwn()

#### Call Signature

> **forOwn**\<`T`\>(`object`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:911

Iterates over own enumerable properties of an object invoking iteratee for each property. The
iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit
iteration early by explicitly returning false.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T`

The object to iterate over.

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

#### Call Signature

> **forOwn**\<`T`\>(`object`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:915

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forOwn

---

### forOwnRight()

#### Call Signature

> **forOwnRight**\<`T`\>(`object`, `iteratee?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:937

This method is like _.forOwn except that it iterates over properties of object in the opposite
order.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T`

The object to iterate over.

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

#### Call Signature

> **forOwnRight**\<`T`\>(`object`, `iteratee?`): `T` \| `null` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:941

##### Type Parameters

###### T

`T`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T` \| `null` \| `undefined`

##### See

_.forOwnRight

---

### get()

#### Call Signature

> **get**\<`TObject`, `TKey`\>(`object`, `path`): `TObject`\[`TKey`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1127

Gets the property value at path of object. If the resolved value is undefined the defaultValue is
used in its place.

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject`

The object to query.

###### path

`TKey` \| \[`TKey`\]

The path of the property to get.

##### Returns

`TObject`\[`TKey`\]

Returns the resolved value.

#### Call Signature

> **get**\<`TObject`, `TKey`\>(`object`, `path`): `TObject`\[`TKey`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1131

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

`TKey` \| \[`TKey`\]

##### Returns

`TObject`\[`TKey`\] \| `undefined`

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`TObject`\[`TKey`\], `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1135

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

`TKey` \| \[`TKey`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`TObject`\[`TKey`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`): `TObject`\[`TKey1`\]\[`TKey2`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1139

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject`

###### path

\[`TKey1`, `TKey2`\]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`):
> `NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1143

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`\]

##### Returns

`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\] \| `undefined`

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault`
> \| `Exclude`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\], `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1147

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`):
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1151

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject`

###### path

\[`TKey1`, `TKey2`, `TKey3`\]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`):
> `NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1155

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`, `TKey3`\]

##### Returns

`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\] \| `undefined`

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`object`, `path`, `defaultValue`):
> `TDefault` \|
> `Exclude`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\],
> `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1159

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`, `TKey3`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \|
`Exclude`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\],
`undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`):
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1163

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TKey4

`TKey4` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject`

###### path

\[`TKey1`, `TKey2`, `TKey3`, `TKey4`\]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`):
> `NonNullable`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\]\>\[`TKey4`\]
> \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1167

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TKey4

`TKey4` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`, `TKey3`, `TKey4`\]

##### Returns

`NonNullable`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\]\>\[`TKey4`\]
\| `undefined`

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`object`, `path`,
> `defaultValue`): `TDefault` \|
> `Exclude`\<`NonNullable`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\]\>\[`TKey4`\],
> `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1171

##### Type Parameters

###### TObject

`TObject` _extends_ `object`

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TKey4

`TKey4` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### object

`TObject` \| `null` \| `undefined`

###### path

\[`TKey1`, `TKey2`, `TKey3`, `TKey4`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \|
`Exclude`\<`NonNullable`\<`NonNullable`\<`NonNullable`\<`TObject`\[`TKey1`\]\>\[`TKey2`\]\>\[`TKey3`\]\>\[`TKey4`\],
`undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`T`\>(`object`, `path`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1175

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\>

###### path

`number`

##### Returns

`T`

##### See

_.get

#### Call Signature

> **get**\<`T`\>(`object`, `path`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1179

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null` \| `undefined`

###### path

`number`

##### Returns

`T` \| `undefined`

##### See

_.get

#### Call Signature

> **get**\<`T`, `TDefault`\>(`object`, `path`, `defaultValue`): `T` \| `TDefault`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1183

##### Type Parameters

###### T

`T`

###### TDefault

`TDefault`

##### Parameters

###### object

[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null` \| `undefined`

###### path

`number`

###### defaultValue

`TDefault`

##### Returns

`T` \| `TDefault`

##### See

_.get

#### Call Signature

> **get**\<`TDefault`\>(`object`, `path`, `defaultValue`): `TDefault`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1187

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### object

`null` \| `undefined`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### defaultValue

`TDefault`

##### Returns

`TDefault`

##### See

_.get

#### Call Signature

> **get**(`object`, `path`): `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1191

##### Parameters

###### object

`null` \| `undefined`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`undefined`

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TPath`\>(`data`, `path`): `string` _extends_ `TPath` ? `any` :
> [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`, `"Path"`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1195

##### Type Parameters

###### TObject

`TObject`

###### TPath

`TPath` _extends_ `string`

##### Parameters

###### data

`TObject`

###### path

`TPath`

##### Returns

`string` _extends_ `TPath` ? `any` : [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`,
`TPath`, `"Path"`\>

##### See

_.get

#### Call Signature

> **get**\<`TObject`, `TPath`, `TDefault`\>(`data`, `path`, `defaultValue`): `TDefault` \|
> `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`, `"Path"`\>,
> `null` \| `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1199

##### Type Parameters

###### TObject

`TObject`

###### TPath

`TPath` _extends_ `string`

###### TDefault

`TDefault` = [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`, `"Path"`\>

##### Parameters

###### data

`TObject`

###### path

`TPath`

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`,
`"Path"`\>, `null` \| `undefined`\>

##### See

_.get

#### Call Signature

> **get**(`object`, `path`, `defaultValue?`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1203

##### Parameters

###### object

`any`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### defaultValue?

`any`

##### Returns

`any`

##### See

_.get

---

### groupBy()

#### Call Signature

> **groupBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`[]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:949

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is an array of the elements responsible for
generating the key. The iteratee is invoked with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`[]\>

Returns the composed aggregate object.

#### Call Signature

> **groupBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:953

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>

##### See

_.groupBy

---

### gt()

> **gt**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:277

Checks if value is greater than other.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is greater than other, else false.

---

### gte()

> **gte**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:300

Checks if value is greater than or equal to other.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is greater than or equal to other, else false.

---

### head()

#### Call Signature

> **head**\<`T`\>(`array`): `T`

Defined in: node\_modules/@types/lodash/common/array.d.ts:585

Gets the first element of array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

readonly \[`T`, `unknown`\]

The array to query.

##### Returns

`T`

Returns the first element of array.

##### Alias

_.first

#### Call Signature

> **head**\<`T`\>(`array`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:586

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T` \| `undefined`

---

### identity()

#### Call Signature

> **identity**\<`T`\>(`value`): `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:377

This method returns the first argument provided to it.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

Any value.

##### Returns

`T`

Returns value.

#### Call Signature

> **identity**(): `undefined`

Defined in: node\_modules/@types/lodash/common/util.d.ts:381

##### Returns

`undefined`

##### See

_.identity

---

### includes()

> **includes**\<`T`\>(`collection`, `target`, `fromIndex?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1007

Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is
negative, it’s used as the offset from the end of collection.

#### Type Parameters

##### T

`T`

#### Parameters

##### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

The collection to search.

##### target

`T`

The value to search for.

##### fromIndex?

`number`

The index to search from.

#### Returns

`boolean`

True if the target element is found, else false.

---

### initial()

> **initial**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:660

Gets all but the last element of array.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

#### Returns

`T`[]

Returns the slice of array.

---

### inRange()

> **inRange**(`n`, `start`, `end?`): `boolean`

Defined in: node\_modules/@types/lodash/common/number.d.ts:71

Checks if n is between start and up to but not including, end. If end is not specified it’s set to
start with start then set to 0.

#### Parameters

##### n

`number`

The number to check.

##### start

`number`

The start of the range.

##### end?

`number`

The end of the range.

#### Returns

`boolean`

Returns true if n is in the range, else false.

---

### intersection()

> **intersection**\<`T`\>(...`arrays`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:682

Creates an array of unique values that are included in all of the provided arrays using
SameValueZero for equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of shared values.

---

### invert()

> **invert**(`object`): [`Dictionary`](Dictionary.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1450

Creates an object composed of the inverted keys and values of object. If object contains duplicate
values, subsequent values overwrite property assignments of previous values unless multiValue is
true.

#### Parameters

##### object

`object`

The object to invert.

#### Returns

[`Dictionary`](Dictionary.md)\<`string`\>

Returns the new inverted object.

---

### invertBy()

#### Call Signature

> **invertBy**\<`T`\>(`object`, `interatee?`): [`Dictionary`](Dictionary.md)\<`string`[]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1474

This method is like _.invert except that the inverted object is generated from the results of
running each element of object through iteratee. The corresponding inverted value of each inverted
key is an array of keys responsible for generating the inverted value. The iteratee is invoked with
one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

The object to invert.

###### interatee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

[`Dictionary`](Dictionary.md)\<`string`[]\>

Returns the new inverted object.

#### Call Signature

> **invertBy**\<`T`\>(`object`, `interatee?`): [`Dictionary`](Dictionary.md)\<`string`[]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1478

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### interatee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`string`[]\>

##### See

_.invertBy

---

### invoke()

> **invoke**(`object`, `path`, ...`args`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1529

Invokes the method at path of object.

#### Parameters

##### object

`any`

The object to query.

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the method to invoke.

##### args

...`any`[]

The arguments to invoke the method with.

#### Returns

`any`

---

### invokeMap()

#### Call Signature

> **invokeMap**(`collection`, `methodName`, ...`args`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1055

Invokes the method named by methodName on each element in the collection returning an array of the
results of each invoked method. Additional arguments will be provided to each invoked method. If
methodName is a function it will be invoked for, and this bound to, each element in the collection.

##### Parameters

###### collection

`object` \| `null` \| `undefined`

The collection to iterate over.

###### methodName

`string`

The name of the method to invoke.

###### args

...`any`[]

Arguments to invoke the method with.

##### Returns

`any`[]

#### Call Signature

> **invokeMap**\<`TResult`\>(`collection`, `method`, ...`args`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1059

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### collection

`object` \| `null` \| `undefined`

###### method

(...`args`) => `TResult`

###### args

...`any`[]

##### Returns

`TResult`[]

##### See

_.invokeMap

---

### isArguments()

> **isArguments**(`value?`): `value is IArguments`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:322

Checks if value is classified as an arguments object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is IArguments`

Returns true if value is correctly classified, else false.

---

### isArray()

> **isArray**(`value?`): `value is any[]`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:344

Checks if value is classified as an Array object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is any[]`

Returns true if value is correctly classified, else false.

---

### isArrayBuffer()

> **isArrayBuffer**(`value?`): `value is ArrayBuffer`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:366

Checks if value is classified as an ArrayBuffer object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is ArrayBuffer`

Returns true if value is correctly classified, else false.

---

### isBoolean()

> **isBoolean**(`value?`): `value is boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:479

Checks if value is classified as a boolean primitive or object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is boolean`

Returns true if value is correctly classified, else false.

---

### isBuffer()

> **isBuffer**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:501

Checks if value is a buffer.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is a buffer, else false.

---

### isDate()

> **isDate**(`value?`): `value is Date`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:523

Checks if value is classified as a Date object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is Date`

Returns true if value is correctly classified, else false.

---

### isElement()

> **isElement**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:545

Checks if value is a DOM element.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is a DOM element, else false.

---

### isEmpty()

#### Call Signature

> **isEmpty**\<`T`\>(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:570

Checks if value is empty. A value is considered empty unless it’s an arguments object, array,
string, or jQuery-like collection with a length greater than 0 or an object with own enumerable
properties.

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### value?

`T`

The value to inspect.

##### Returns

`boolean`

Returns true if value is empty, else false.

#### Call Signature

> **isEmpty**(`value`): `value is ""`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:571

##### Parameters

###### value

`string`

##### Returns

`value is ""`

#### Call Signature

> **isEmpty**(`value`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:572

##### Parameters

###### value

[`List`](../type-aliases/List.md)\<`any`\> \| `Map`\<`any`, `any`\> \| `Set`\<`any`\> \| `null` \|
`undefined`

##### Returns

`boolean`

#### Call Signature

> **isEmpty**(`value`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:573

##### Parameters

###### value

`object`

##### Returns

`boolean`

#### Call Signature

> **isEmpty**\<`T`\>(`value`): value is EmptyObjectOf\<T\> \| null \| undefined

Defined in: node\_modules/@types/lodash/common/lang.d.ts:574

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### value

`T` \| `null` \| `undefined`

##### Returns

value is EmptyObjectOf\<T\> \| null \| undefined

#### Call Signature

> **isEmpty**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:575

##### Parameters

###### value?

`any`

##### Returns

`boolean`

---

### isError()

> **isError**(`value`): `value is Error`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:685

Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or
URIError object.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is Error`

Returns true if value is an error object, else false.

---

### isFinite()

> **isFinite**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:709

Checks if value is a finite primitive number.

Note: This method is based on Number.isFinite.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is a finite number, else false.

---

### isFunction()

> **isFunction**(`value`): `value is (args: any[]) => any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:731

Checks if value is a callable function.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is (args: any[]) => any`

Returns true if value is correctly classified, else false.

---

### isMap()

> **isMap**(`value?`): `value is Map<any, any>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:829

Checks if value is classified as a Map object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is Map<any, any>`

Returns true if value is correctly classified, else false.

---

### isNaN()

> **isNaN**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:935

Checks if value is NaN.

Note: This method is not the same as isNaN which returns true for undefined and other non-numeric
values.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is NaN, else false.

---

### isNative()

> **isNative**(`value`): `value is (args: any[]) => any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:957

Checks if value is a native function.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is (args: any[]) => any`

Returns true if value is a native function, else false.

---

### isNull()

> **isNull**(`value`): `value is null`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1012

Checks if value is null.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is null`

Returns true if value is null, else false.

---

### isNumber()

> **isNumber**(`value?`): `value is number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1036

Checks if value is classified as a Number primitive or object.

Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the _.isFinite
method.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is number`

Returns true if value is correctly classified, else false.

---

### isObject()

> **isObject**(`value?`): `value is object`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1059

Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new
Number(0), and new String(''))

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is object`

Returns true if value is an object, else false.

---

### isPlainObject()

> **isPlainObject**(`value?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1121

Checks if value is a plain object, that is, an object created by the Object constructor or one with
a [[Prototype]] of null.

Note: This method assumes objects created by the Object constructor have no inherited enumerable
properties.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is a plain object, else false.

---

### isRegExp()

> **isRegExp**(`value?`): `value is RegExp`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1143

Checks if value is classified as a RegExp object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is RegExp`

Returns true if value is correctly classified, else false.

---

### isSet()

> **isSet**(`value?`): `value is Set<any>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1204

Checks if value is classified as a Set object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is Set<any>`

Returns true if value is correctly classified, else false.

---

### isString()

> **isString**(`value?`): `value is string`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1226

Checks if value is classified as a String primitive or object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is string`

Returns true if value is correctly classified, else false.

---

### isTypedArray()

> **isTypedArray**(`value`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1278

Checks if value is classified as a typed array.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`boolean`

Returns true if value is correctly classified, else false.

---

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1300

Checks if value is undefined.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is undefined`

Returns true if value is undefined, else false.

---

### isWeakMap()

> **isWeakMap**(`value?`): `value is WeakMap<object, any>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1322

Checks if value is classified as a WeakMap object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is WeakMap<object, any>`

Returns true if value is correctly classified, else false.

---

### isWeakSet()

> **isWeakSet**(`value?`): `value is WeakSet<object>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1344

Checks if value is classified as a WeakSet object.

#### Parameters

##### value?

`any`

The value to check.

#### Returns

`value is WeakSet<object>`

Returns true if value is correctly classified, else false.

---

### join()

> **join**(`array`, `separator?`): `string`

Defined in: node\_modules/@types/lodash/common/array.d.ts:813

Converts all elements in `array` into a string separated by `separator`.

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`any`\> \| `null` \| `undefined`

The array to convert.

##### separator?

`string`

The element separator.

#### Returns

`string`

Returns the joined string.

---

### kebabCase()

> **kebabCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:157

Converts string to kebab case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the kebab cased string.

---

### keyBy()

#### Call Signature

> **keyBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1091

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the last element responsible for generating
the key. The iteratee function is invoked with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the composed aggregate object.

#### Call Signature

> **keyBy**\<`T`\>(`collection`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1095

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`\[keyof `T`\],
[`PropertyName`](../type-aliases/PropertyName.md)\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### See

_.keyBy

---

### keys()

> **keys**(`object?`): `string`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1552

Creates an array of the own enumerable property names of object.

Note: Non-object values are coerced to objects. See the ES spec for more details.

#### Parameters

##### object?

`any`

The object to query.

#### Returns

`string`[]

Returns the array of property names.

---

### keysIn()

> **keysIn**(`object?`): `string`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1575

Creates an array of the own and inherited enumerable property names of object.

Note: Non-object values are coerced to objects.

#### Parameters

##### object?

`any`

The object to query.

#### Returns

`string`[]

An array of property names.

---

### last()

#### Call Signature

> **last**\<`T`\>(`array`): `T`

Defined in: node\_modules/@types/lodash/common/array.d.ts:852

Gets the last element of array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

readonly \[`unknown`, `T`\]

The array to query.

##### Returns

`T`

Returns the last element of array.

#### Call Signature

> **last**\<`T`\>(`array`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:853

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T` \| `undefined`

---

### lastIndexOf()

> **lastIndexOf**\<`T`\>(`array`, `value`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:894

This method is like _.indexOf except that it iterates over elements of array from right to left.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to search.

##### value

`T`

The value to search for.

##### fromIndex?

`number` \| `true`

The index to search from or true to perform a binary search on a sorted array.

#### Returns

`number`

Returns the index of the matched value, else -1.

---

### lowerCase()

> **lowerCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:179

Converts `string`, as space separated words, to lower case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the lower cased string.

---

### lowerFirst()

> **lowerFirst**\<`T`\>(`string?`): `Uncapitalize`\<`T`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:201

Converts the first character of `string` to lower case.

#### Type Parameters

##### T

`T` _extends_ `string` = `string`

#### Parameters

##### string?

`T`

The string to convert.

#### Returns

`Uncapitalize`\<`T`\>

Returns the converted string.

---

### lt()

> **lt**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1367

Checks if value is less than other.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is less than other, else false.

---

### lte()

> **lte**(`value`, `other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1390

Checks if value is less than or equal to other.

#### Parameters

##### value

`any`

The value to compare.

##### other

`any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is less than or equal to other, else false.

---

### map()

#### Call Signature

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): \{ \[K in string \| number \| symbol\]:
> TResult \}

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1156

Creates an array of values by running each element in collection through iteratee. The iteratee is
invoked with three arguments: (value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map,
_.mapValues, _.reject, and _.some.

The guarded methods are: ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight,
every, fill, flatten, invert, max, min, parseInt, slice, sortBy, take, takeRight, template, trim,
trimLeft, trimRight, trunc, random, range, sample, some, sum, uniq, and words

##### Type Parameters

###### T

`T` _extends_ readonly \[`unknown`, `unknown`\]

###### TResult

`TResult`

##### Parameters

###### collection

`T`

The collection to iterate over.

###### iteratee

[`TupleIterator`](../type-aliases/TupleIterator.md)\<`T`, `TResult`\>

The function invoked per iteration.

##### Returns

\{ \[K in string \| number \| symbol\]: TResult \}

Returns the new mapped array.

#### Call Signature

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1160

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

`T`[] \| `null` \| `undefined`

###### iteratee

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `TResult`\>

##### Returns

`TResult`[]

##### See

_.map

#### Call Signature

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1164

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

`TResult`[]

##### See

_.map

#### Call Signature

> **map**\<`T`\>(`collection`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1168

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

##### Returns

`T`[]

##### See

_.map

#### Call Signature

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1172

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### iteratee

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

`TResult`[]

##### See

_.map

#### Call Signature

> **map**\<`T`, `K`\>(`collection`, `iteratee`): `T`\[`K`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1176

##### Type Parameters

###### T

`T`

###### K

`K` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee

`K`

##### Returns

`T`\[`K`\][]

##### See

_.map

#### Call Signature

> **map**\<`T`\>(`collection`, `iteratee?`): `any`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1180

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee?

`string`

##### Returns

`any`[]

##### See

_.map

#### Call Signature

> **map**\<`T`\>(`collection`, `iteratee?`): `boolean`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1184

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee?

`object`

##### Returns

`boolean`[]

##### See

_.map

---

### mapKeys()

#### Call Signature

> **mapKeys**\<`T`\>(`object`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1598

The opposite of _.mapValues; this method creates an object with the same values as object and keys
generated by running each own enumerable property of object through iteratee.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The object to iterate over.

###### iteratee?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new mapped object.

#### Call Signature

> **mapKeys**\<`T`\>(`object`, `iteratee?`): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1602

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

###### iteratee?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### See

_.mapKeys

---

### mapValues()

#### Call Signature

> **mapValues**\<`TResult`\>(`obj`, `callback`):
> [`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1638

Creates an object with the same keys as object and values generated by running each own enumerable
property of object through iteratee. The iteratee function is invoked with three arguments: (value,
key, object).

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### obj

`string` \| `null` \| `undefined`

###### callback

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Returns the new mapped object.

#### Call Signature

> **mapValues**\<`T`, `TResult`\>(`array`, `callback`):
> [`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1642

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### array

`T`[]

###### callback

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `TResult`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`, `TResult`\>(`obj`, `callback`): \{ \[P in string \| number \| symbol\]:
> TResult \}

Defined in: node\_modules/@types/lodash/common/object.d.ts:1646

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### obj

`T` \| `null` \| `undefined`

###### callback

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

\{ \[P in string \| number \| symbol\]: TResult \}

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1650

##### Type Parameters

###### T

`T`

##### Parameters

###### obj

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee

`object`

##### Returns

[`Dictionary`](Dictionary.md)\<`boolean`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`, `iteratee`): \{ \[P in string \| number \| symbol\]: boolean \}

Defined in: node\_modules/@types/lodash/common/object.d.ts:1654

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### obj

`T` \| `null` \| `undefined`

###### iteratee

`object`

##### Returns

\{ \[P in string \| number \| symbol\]: boolean \}

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`, `TKey`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1658

##### Type Parameters

###### T

`T`

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### obj

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee

`TKey`

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1662

##### Type Parameters

###### T

`T`

##### Parameters

###### obj

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

###### iteratee

`string`

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`, `iteratee`): \{ \[P in string \| number \| symbol\]: any \}

Defined in: node\_modules/@types/lodash/common/object.d.ts:1666

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### obj

`T` \| `null` \| `undefined`

###### iteratee

`string`

##### Returns

\{ \[P in string \| number \| symbol\]: any \}

##### See

_.mapValues

#### Call Signature

> **mapValues**(`obj`): [`NumericDictionary`](NumericDictionary.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1670

##### Parameters

###### obj

`string` \| `null` \| `undefined`

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`string`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1674

##### Type Parameters

###### T

`T`

##### Parameters

###### obj

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1678

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### obj

`T`

##### Returns

`T`

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`T`\>(`obj`): [`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1682

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### obj

`T` \| `null` \| `undefined`

##### Returns

[`PartialObject`](../type-aliases/PartialObject.md)\<`T`\>

##### See

_.mapValues

---

### matches()

#### Call Signature

> **matches**\<`T`\>(`source`): (`value`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:497

Creates a function that performs a deep comparison between a given object and source, returning true
if the given object has equivalent property values, else false.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties. For
comparing a single own or inherited property value see _.matchesProperty.

##### Type Parameters

###### T

`T`

##### Parameters

###### source

`T`

The object of property values to match.

##### Returns

Returns the new function.

(`value`) => `boolean`

#### Call Signature

> **matches**\<`T`, `V`\>(`source`): (`value`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:501

##### Type Parameters

###### T

`T`

###### V

`V`

##### Parameters

###### source

`T`

##### Returns

(`value`) => `boolean`

##### See

_.matches

---

### matchesProperty()

#### Call Signature

> **matchesProperty**\<`T`\>(`path`, `srcValue`): (`value`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:527

Creates a function that compares the property value of path on a given object to value.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties.

##### Type Parameters

###### T

`T`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to get.

###### srcValue

`T`

The value to match.

##### Returns

Returns the new function.

(`value`) => `boolean`

#### Call Signature

> **matchesProperty**\<`T`, `V`\>(`path`, `srcValue`): (`value`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:531

##### Type Parameters

###### T

`T`

###### V

`V`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### srcValue

`T`

##### Returns

(`value`) => `boolean`

##### See

_.matchesProperty

---

### method()

> **method**(`path`, ...`args`): (`object`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:563

Creates a function that invokes the method at path on a given object. Any additional arguments are
provided to the invoked method.

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the method to invoke.

##### args

...`any`[]

The arguments to invoke the method with.

#### Returns

Returns the new function.

(`object`) => `any`

---

### methodOf()

> **methodOf**(`object`, ...`args`): (`path`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:587

The opposite of _.method; this method creates a function that invokes the method at a given path on
object. Any additional arguments are provided to the invoked method.

#### Parameters

##### object

`object`

The object to query.

##### args

...`any`[]

The arguments to invoke the method with.

#### Returns

Returns the new function.

(`path`) => `any`

---

### mixin()

#### Call Signature

> **mixin**\<`TObject`\>(`object`, `source`, `options?`): `TObject`

Defined in: node\_modules/@types/lodash/common/util.d.ts:622

Adds all own enumerable function properties of a source object to the destination object. If object
is a function then methods are added to its prototype as well.

Note: Use _.runInContext to create a pristine lodash function to avoid conflicts caused by modifying
the original.

##### Type Parameters

###### TObject

`TObject`

##### Parameters

###### object

`TObject`

The destination object.

###### source

[`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

The object of functions to add.

###### options?

[`MixinOptions`](MixinOptions.md)

The options object.

##### Returns

`TObject`

Returns object.

#### Call Signature

> **mixin**\<`TResult`\>(`source`, `options?`): `LoDashStatic`

Defined in: node\_modules/@types/lodash/common/util.d.ts:626

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### source

[`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

`LoDashStatic`

##### See

_.mixin

---

### multiply()

> **multiply**(`multiplier`, `multiplicand`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:279

Multiply two numbers.

#### Parameters

##### multiplier

`number`

The first number in a multiplication.

##### multiplicand

`number`

The second number in a multiplication.

#### Returns

`number`

Returns the product.

---

### negate()

> **negate**\<`T`\>(`predicate`): (...`args`) => `boolean`

Defined in: node\_modules/@types/lodash/common/function.d.ts:572

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

#### Type Parameters

##### T

`T` _extends_ `any`[]

#### Parameters

##### predicate

(...`args`) => `boolean`

The predicate to negate.

#### Returns

Returns the new function.

(...`args`) => `boolean`

---

### noConflict()

> **noConflict**(): `LoDashStatic`

Defined in: node\_modules/@types/lodash/common/util.d.ts:655

Reverts the _ variable to its previous value and returns a reference to the lodash function.

#### Returns

`LoDashStatic`

Returns the lodash function.

---

### noop()

> **noop**(...`args`): `void`

Defined in: node\_modules/@types/lodash/common/util.d.ts:676

A no-operation function that returns undefined regardless of the arguments it receives.

#### Parameters

##### args

...`any`[]

#### Returns

`void`

undefined

---

### now()

> **now**(): `number`

Defined in: node\_modules/@types/lodash/common/date.d.ts:9

#### Returns

`number`

---

### nth()

> **nth**\<`T`\>(`array`, `n?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:916

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is
returned.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

array The array to query.

##### n?

`number`

#### Returns

`T` \| `undefined`

Returns the nth element of `array`.

---

### nthArg()

> **nthArg**(`n?`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:698

Creates a function that returns its nth argument.

#### Parameters

##### n?

`number`

The index of the argument to return.

#### Returns

Returns the new function.

(...`args`) => `any`

---

### once()

> **once**\<`T`\>(`func`): `T`

Defined in: node\_modules/@types/lodash/common/function.d.ts:594

Creates a function that is restricted to invoking func once. Repeat calls to the function return the
value of the first call. The func is invoked with the this binding and arguments of the created
function.

#### Type Parameters

##### T

`T` _extends_ (...`args`) => `any`

#### Parameters

##### func

`T`

The function to restrict.

#### Returns

`T`

Returns the new restricted function.

---

### over()

> **over**\<`TResult`\>(...`iteratees`): (...`args`) => `TResult`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:721

Creates a function that invokes iteratees with the arguments provided to the created function and
returns their results.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

The iteratees to invoke.

#### Returns

Returns the new function.

(...`args`) => `TResult`[]

---

### overArgs()

> **overArgs**(`func`, ...`transforms`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/function.d.ts:617

Creates a function that runs each argument through a corresponding transform function.

#### Parameters

##### func

(...`args`) => `any`

The function to wrap.

##### transforms

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

The functions to transform arguments, specified as individual functions or arrays of functions.

#### Returns

Returns the new function.

(...`args`) => `any`

---

### overEvery()

#### Call Signature

> **overEvery**\<`T`, `Result1`, `Result2`\>(...`predicates`): (`arg`) => `arg is Result1 & Result2`

Defined in: node\_modules/@types/lodash/common/util.d.ts:756

Creates a function that checks if all of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Type Parameters

###### T

`T`

###### Result1

`Result1`

###### Result2

`Result2`

##### Parameters

###### predicates

...\[(`arg`) => `arg is Result1`, (`arg`) => `arg is Result2`\]

The predicates to check.

##### Returns

Returns the new function.

(`arg`) => `arg is Result1 & Result2`

#### Call Signature

> **overEvery**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:760

##### Type Parameters

###### T

`T`

##### Parameters

###### predicates

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

##### Returns

(...`args`) => `boolean`

---

### overSome()

#### Call Signature

> **overSome**\<`T`, `Result1`, `Result2`\>(...`predicates`): (`arg`) => arg is Result1 \| Result2

Defined in: node\_modules/@types/lodash/common/util.d.ts:795

Creates a function that checks if any of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Type Parameters

###### T

`T`

###### Result1

`Result1`

###### Result2

`Result2`

##### Parameters

###### predicates

...\[(`arg`) => `arg is Result1`, (`arg`) => `arg is Result2`\]

The predicates to check.

##### Returns

Returns the new function.

(`arg`) => arg is Result1 \| Result2

#### Call Signature

> **overSome**\<`T`\>(...`predicates`): (...`args`) => `boolean`

Defined in: node\_modules/@types/lodash/common/util.d.ts:799

##### Type Parameters

###### T

`T`

##### Parameters

###### predicates

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

##### Returns

(...`args`) => `boolean`

---

### pad()

> **pad**(`string?`, `length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:226

Pads string on the left and right sides if it’s shorter than length. Padding characters are
truncated if they can’t be evenly divided by length.

#### Parameters

##### string?

`string`

The string to pad.

##### length?

`number`

The padding length.

##### chars?

`string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

---

### padEnd()

> **padEnd**(`string?`, `length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:251

Pads string on the right side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

##### string?

`string`

The string to pad.

##### length?

`number`

The padding length.

##### chars?

`string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

---

### padStart()

> **padStart**(`string?`, `length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:276

Pads string on the left side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

##### string?

`string`

The string to pad.

##### length?

`number`

The padding length.

##### chars?

`string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

---

### parseInt()

> **parseInt**(`string`, `radix?`): `number`

Defined in: node\_modules/@types/lodash/common/string.d.ts:302

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is
used unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt.

#### Parameters

##### string

`string`

The string to convert.

##### radix?

`number`

The radix to interpret value by.

#### Returns

`number`

Returns the converted integer.

---

### partition()

#### Call Signature

> **partition**\<`T`, `U`\>(`collection`, `callback`): \[`U`[], `Exclude`\<`T`, `U`\>[]\]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1379

Creates an array of elements split into two groups, the first of which contains elements predicate
returns truthy for, while the second of which contains elements predicate returns falsey for. The
predicate is invoked with three arguments: (value, index|key, collection).

##### Type Parameters

###### T

`T`

###### U

`U`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### callback

[`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

The function called per iteration.

##### Returns

\[`U`[], `Exclude`\<`T`, `U`\>[]\]

Returns the array of grouped elements.

#### Call Signature

> **partition**\<`T`\>(`collection`, `callback`): \[`T`[], `T`[]\]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1383

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### callback

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

\[`T`[], `T`[]\]

##### See

_.partition

#### Call Signature

> **partition**\<`T`\>(`collection`, `callback`): \[`T`\[keyof `T`\][], `T`\[keyof `T`\][]\]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1387

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### callback

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

\[`T`\[keyof `T`\][], `T`\[keyof `T`\][]\]

##### See

_.partition

---

### property()

> **property**\<`TObj`, `TResult`\>(`path`): (`obj`) => `TResult`

Defined in: node\_modules/@types/lodash/common/util.d.ts:833

Creates a function that returns the property value at path on a given object.

#### Type Parameters

##### TObj

`TObj`

##### TResult

`TResult`

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to get.

#### Returns

Returns the new function.

(`obj`) => `TResult`

---

### propertyOf()

> **propertyOf**\<`T`\>(`object`): (`path`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:856

The opposite of _.property; this method creates a function that returns the property value at a
given path on object.

#### Type Parameters

##### T

`T` _extends_ `object`

#### Parameters

##### object

`T`

The object to query.

#### Returns

Returns the new function.

(`path`) => `any`

---

### pull()

#### Call Signature

> **pull**\<`T`\>(`array`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:940

Removes all provided values from array using SameValueZero for equality comparisons.

Note: Unlike _.without, this method mutates array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[]

The array to modify.

###### values

...`T`[]

The values to remove.

##### Returns

`T`[]

Returns array.

#### Call Signature

> **pull**\<`TList`\>(`array`, ...`values`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:944

##### Type Parameters

###### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`TList`\>

###### values

...`TList`\[`0`\][]

##### Returns

`TList`

##### See

_.pull

---

### pullAt()

#### Call Signature

> **pullAt**\<`T`\>(`array`, ...`indexes`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1099

Removes elements from array corresponding to the given indexes and returns an array of the removed
elements. Indexes may be specified as an array of indexes or as individual arguments.

Note: Unlike _.at, this method mutates array.

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[]

The array to modify.

###### indexes

...[`Many`](../type-aliases/Many.md)\<`number`\>[]

The indexes of elements to remove, specified as individual indexes or arrays of indexes.

##### Returns

`T`[]

Returns the new array of removed elements.

#### Call Signature

> **pullAt**\<`TList`\>(`array`, ...`indexes`): `TList`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1103

##### Type Parameters

###### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

##### Parameters

###### array

`RejectReadonly`\<`TList`\>

###### indexes

...[`Many`](../type-aliases/Many.md)\<`number`\>[]

##### Returns

`TList`

##### See

_.pullAt

---

### random()

#### Call Signature

> **random**(`floating?`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:97

Produces a random number between min and max (inclusive). If only one argument is provided a number
between 0 and the given number is returned. If floating is true, or either min or max are floats, a
floating-point number is returned instead of an integer.

##### Parameters

###### floating?

`boolean`

Specify returning a floating-point number.

##### Returns

`number`

Returns the random number.

#### Call Signature

> **random**(`max`, `floating?`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:101

##### Parameters

###### max

`number`

###### floating?

`boolean`

##### Returns

`number`

##### See

_.random

#### Call Signature

> **random**(`min`, `max`, `floating?`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:105

##### Parameters

###### min

`number`

###### max

`number`

###### floating?

`boolean`

##### Returns

`number`

##### See

_.random

#### Call Signature

> **random**(`min`, `index`, `guard`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:109

##### Parameters

###### min

`number`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`number`

##### See

_.random

---

### range()

#### Call Signature

> **range**(`start`, `end?`, `step?`): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:882

Creates an array of numbers (positive and/or negative) progressing from start up to, but not
including, end. If end is not specified it’s set to start with start then set to 0. If end is less
than start a zero-length range is created unless a negative step is specified.

##### Parameters

###### start

`number`

The start of the range.

###### end?

`number`

The end of the range.

###### step?

`number`

The value to increment or decrement by.

##### Returns

`number`[]

Returns a new range array.

#### Call Signature

> **range**(`end`, `index`, `guard`): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:886

##### Parameters

###### end

`number`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`number`[]

##### See

_.range

---

### rearg()

> **rearg**(`func`, ...`indexes`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/function.d.ts:1284

Creates a function that invokes func with arguments arranged according to the specified indexes
where the argument value at the first index is provided as the first argument, the argument value at
the second index is provided as the second argument, and so on.

#### Parameters

##### func

(...`args`) => `any`

The function to rearrange arguments for.

##### indexes

...[`Many`](../type-aliases/Many.md)\<`number`\>[]

The arranged argument indexes, specified as individual indexes or arrays of indexes.

#### Returns

Returns the new function.

(...`args`) => `any`

---

### reduce()

#### Call Signature

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1451

Reduces a collection to a value which is the accumulated result of running each element in the
collection through the callback, where each successive callback execution consumes the return value
of the previous execution. If accumulator is not provided the first element of the collection will
be used as the initial accumulator value. The callback is invoked with four arguments: (accumulator,
value, index|key, collection).

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

`T`[] \| `null` \| `undefined`

The collection to iterate over.

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`, `T`[]\>

The function called per iteration.

###### accumulator

`TResult`

Initial value of the accumulator.

##### Returns

`TResult`

Returns the accumulated value.

#### Call Signature

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1455

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduce

#### Call Signature

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1459

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `TResult`, `T`\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduce

#### Call Signature

> **reduce**\<`T`\>(`collection`, `callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1463

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[] \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`, `T`[]\>

##### Returns

`T` \| `undefined`

##### See

_.reduce

#### Call Signature

> **reduce**\<`T`\>(`collection`, `callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1467

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`T` \| `undefined`

##### See

_.reduce

#### Call Signature

> **reduce**\<`T`\>(`collection`, `callback`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1471

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `T`\[keyof `T`\],
`T`\>

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.reduce

---

### reduceRight()

#### Call Signature

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1522

This method is like _.reduce except that it iterates over elements of a collection from right to
left.

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

`T`[] \| `null` \| `undefined`

The collection to iterate over.

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`, `T`[]\>

The function called per iteration.

###### accumulator

`TResult`

Initial value of the accumulator.

##### Returns

`TResult`

The accumulated value.

#### Call Signature

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1526

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1530

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `TResult`, `T`\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**\<`T`\>(`collection`, `callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1534

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

`T`[] \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`, `T`[]\>

##### Returns

`T` \| `undefined`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**\<`T`\>(`collection`, `callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1538

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`T` \| `undefined`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**\<`T`\>(`collection`, `callback`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1542

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `T`\[keyof `T`\],
`T`\>

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.reduceRight

---

### reject()

#### Call Signature

> **reject**(`collection`, `predicate?`): `string`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1593

The opposite of _.filter; this method returns the elements of collection that predicate does not
return truthy for.

##### Parameters

###### collection

`string` \| `null` \| `undefined`

The collection to iterate over.

###### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

The function invoked per iteration.

##### Returns

`string`[]

Returns the new filtered array.

#### Call Signature

> **reject**\<`T`\>(`collection`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1597

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`[]

##### See

_.reject

#### Call Signature

> **reject**\<`T`\>(`collection`, `predicate?`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1601

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`\[keyof `T`\][]

##### See

_.reject

---

### remove()

> **remove**\<`TList`\>(`array`, `predicate?`): `TList`\[`0`\][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1128

Removes all elements from array that predicate returns truthy for and returns an array of the
removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike _.filter, this method mutates array.

#### Type Parameters

##### TList

`TList` _extends_ [`MutableList`](MutableList.md)\<`any`\>

#### Parameters

##### array

`RejectReadonly`\<`TList`\>

The array to modify.

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`TList`\[`0`\]\>

The function invoked per iteration.

#### Returns

`TList`\[`0`\][]

Returns the new array of removed elements.

---

### repeat()

> **repeat**(`string?`, `n?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:325

Repeats the given string n times.

#### Parameters

##### string?

`string`

The string to repeat.

##### n?

`number`

The number of times to repeat the string.

#### Returns

`string`

Returns the repeated string.

---

### replace()

#### Call Signature

> **replace**(`string`, `pattern`, `replacement`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:349

Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace.

##### Parameters

###### string

`string`

###### pattern

`string` \| `RegExp`

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

Returns the modified string.

#### Call Signature

> **replace**(`pattern`, `replacement`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:353

##### Parameters

###### pattern

`string` \| `RegExp`

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

_.replace

---

### rest()

> **rest**(`func`, `start?`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/function.d.ts:1309

Creates a function that invokes func with the this binding of the created function and arguments
from start and beyond provided as an array.

Note: This method is based on the rest parameter.

#### Parameters

##### func

(...`args`) => `any`

The function to apply a rest parameter to.

##### start?

`number`

The start position of the rest parameter.

#### Returns

Returns the new function.

(...`args`) => `any`

---

### result()

> **result**\<`TResult`\>(`object`, `path`, `defaultValue?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2238

This method is like _.get except that if the resolved value is a function it’s invoked with the this
binding of its parent object and its result is returned.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### object

`any`

The object to query.

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to resolve.

##### defaultValue?

`TResult` \| ((...`args`) => `TResult`)

The value returned if the resolved value is undefined.

#### Returns

`TResult`

Returns the resolved value.

---

### round()

> **round**(`n`, `precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:302

Calculates n rounded to precision.

#### Parameters

##### n

`number`

The number to round.

##### precision?

`number`

The precision to round to.

#### Returns

`number`

Returns the rounded number.

---

### runInContext()

> **runInContext**(`context?`): `LoDashStatic`

Defined in: node\_modules/@types/lodash/common/util.d.ts:960

Create a new pristine lodash function using the given context object.

#### Parameters

##### context?

`object`

The context object.

#### Returns

`LoDashStatic`

Returns a new lodash function.

---

### sample()

#### Call Signature

> **sample**\<`T`\>(`collection`): `T`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1652

Gets a random element from collection.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

readonly \[`T`, `T`\]

The collection to sample.

##### Returns

`T`

Returns the random element.

#### Call Signature

> **sample**\<`T`\>(`collection`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1656

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

##### Returns

`T` \| `undefined`

##### See

_.sample

#### Call Signature

> **sample**\<`T`\>(`collection`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1660

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.sample

---

### sampleSize()

#### Call Signature

> **sampleSize**\<`T`\>(`collection`, `n?`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1712

Gets n random elements at unique keys from collection up to the size of collection.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

The collection to sample.

###### n?

`number`

The number of elements to sample.

##### Returns

`T`[]

Returns the random elements.

#### Call Signature

> **sampleSize**\<`T`\>(`collection`, `n?`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1716

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### n?

`number`

##### Returns

`T`\[keyof `T`\][]

##### See

_.sampleSize

---

### set()

#### Call Signature

> **set**\<`T`\>(`object`, `path`, `value`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2263

Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are
created for missing index properties while objects are created for all other missing properties. Use
_.setWith to customize path creation.

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T`

The object to modify.

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

###### value

`any`

The value to set.

##### Returns

`T`

Returns object.

#### Call Signature

> **set**\<`TResult`\>(`object`, `path`, `value`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2267

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### object

`object`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

##### Returns

`TResult`

##### See

_.set

---

### setWith()

#### Call Signature

> **setWith**\<`T`\>(`object`, `path`, `value`, `customizer?`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2302

This method is like _.set except that it accepts customizer which is invoked to produce the objects
of path. If customizer returns undefined path creation is handled by the method instead. The
customizer is invoked with three arguments: (nsValue, key, nsObject).

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T`

The object to modify.

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

###### value

`any`

The value to set.

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

The function to customize assigned values.

##### Returns

`T`

Returns object.

#### Call Signature

> **setWith**\<`T`, `TResult`\>(`object`, `path`, `value`, `customizer?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2306

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### object

`T`

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`TResult`

##### See

_.setWith

---

### shuffle()

#### Call Signature

> **shuffle**\<`T`\>(`collection`): `T`[]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1767

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to shuffle.

##### Returns

`T`[]

Returns the new shuffled array.

#### Call Signature

> **shuffle**\<`T`\>(`collection`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1771

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

##### Returns

`T`\[keyof `T`\][]

##### See

_.shuffle

---

### size()

> **size**(`collection`): `number`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1823

Gets the size of collection by returning its length for array-like values or the number of own
enumerable properties for objects.

#### Parameters

##### collection

`string` \| `object` \| `null` \| `undefined`

The collection to inspect.

#### Returns

`number`

Returns the size of collection.

---

### slice()

> **slice**\<`T`\>(`array`, `start?`, `end?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1173

Creates a slice of array from start up to, but not including, end.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to slice.

##### start?

`number`

The start position.

##### end?

`number`

The end position.

#### Returns

`T`[]

Returns the slice of array.

---

### snakeCase()

> **snakeCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:383

Converts string to snake case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the snake cased string.

---

### some()

#### Call Signature

> **some**\<`T`\>(`collection`, `predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1846

Checks if predicate returns truthy for any element of collection. Iteration is stopped once
predicate returns truthy. The predicate is invoked with three arguments: (value, index|key,
collection).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The collection to iterate over.

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### Returns

`boolean`

Returns true if any element passes the predicate check, else false.

#### Call Signature

> **some**\<`T`\>(`collection`, `predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1850

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### collection

`T` \| `null` \| `undefined`

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`boolean`

##### See

_.some

---

### split()

#### Call Signature

> **split**(`string`, `separator?`, `limit?`): `string`[]

Defined in: node\_modules/@types/lodash/common/string.d.ts:409

Splits string by separator.

Note: This method is based on String#split.

##### Parameters

###### string

`string` \| `null` \| `undefined`

The string to split.

###### separator?

`string` \| `RegExp`

The separator pattern to split by.

###### limit?

`number`

The length to truncate results to.

##### Returns

`string`[]

Returns the new array of string segments.

#### Call Signature

> **split**(`string`, `index`, `guard`): `string`[]

Defined in: node\_modules/@types/lodash/common/string.d.ts:413

##### Parameters

###### string

`string` \| `null` \| `undefined`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`string`[]

##### See

_.split

---

### spread()

> **spread**\<`TResult`\>(`func`, `start?`): (...`args`) => `TResult`

Defined in: node\_modules/@types/lodash/common/function.d.ts:1333

Creates a function that invokes func with the this binding of the created function and an array of
arguments much like Function#apply.

Note: This method is based on the spread operator.

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### func

(...`args`) => `TResult`

The function to spread arguments over.

##### start?

`number`

#### Returns

Returns the new function.

(...`args`) => `TResult`

---

### startCase()

> **startCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:435

Converts string to start case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the start cased string.

---

### startsWith()

> **startsWith**(`string?`, `target?`, `position?`): `boolean`

Defined in: node\_modules/@types/lodash/common/string.d.ts:459

Checks if string starts with the given target string.

#### Parameters

##### string?

`string`

The string to search.

##### target?

`string`

The string to search for.

##### position?

`number`

The position to search from.

#### Returns

`boolean`

Returns true if string starts with target, else false.

---

### stubArray()

> **stubArray**(): `any`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:975

This method returns a new empty array.

#### Returns

`any`[]

Returns the new empty array.

---

### stubFalse()

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:996

This method returns `false`.

##### Returns

`false`

Returns `false`.

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1204

This method returns false.

##### Returns

`false`

Returns false.

---

### stubObject()

> **stubObject**(): `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1017

This method returns a new empty object.

#### Returns

`any`

Returns the new empty object.

---

### stubString()

> **stubString**(): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1038

This method returns an empty string.

#### Returns

`string`

Returns the empty string.

---

### stubTrue()

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1059

This method returns `true`.

##### Returns

`true`

Returns `true`.

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1179

This method returns true.

##### Returns

`true`

Returns true.

---

### tail()

#### Call Signature

> **tail**\<`T`\>(`array`): `T`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1463

Gets all but the first element of array.

##### Type Parameters

###### T

`T` _extends_ `unknown`[]

##### Parameters

###### array

readonly \[`unknown`, `T`\]

The array to query.

##### Returns

`T`

Returns the slice of array.

#### Call Signature

> **tail**\<`T`\>(`array`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1464

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

##### Returns

`T`[]

---

### take()

> **take**\<`T`\>(`array`, `n?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1486

Creates a slice of array with n elements taken from the beginning.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### n?

`number`

The number of elements to take.

#### Returns

`T`[]

Returns the slice of array.

---

### takeRight()

> **takeRight**\<`T`\>(`array`, `n?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1508

Creates a slice of array with n elements taken from the end.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### n?

`number`

The number of elements to take.

#### Returns

`T`[]

Returns the slice of array.

---

### takeRightWhile()

> **takeRightWhile**\<`T`\>(`array`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1531

Creates a slice of array with elements taken from the end. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

---

### takeWhile()

> **takeWhile**\<`T`\>(`array`, `predicate?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1554

Creates a slice of array with elements taken from the beginning. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to query.

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

---

### tap()

> **tap**\<`T`\>(`value`, `interceptor`): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:173

This method invokes interceptor and returns value. The interceptor is invoked with one argument;
(value). The purpose of this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to provide to interceptor.

##### interceptor

(`value`) => `void`

The function to invoke.

#### Returns

`T`

Returns value.

---

### template()

> **template**(`string?`, `options?`): [`TemplateExecutor`](TemplateExecutor.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:514

Creates a compiled template function that can interpolate data properties in "interpolate"
delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript
in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a
setting object is provided it takes precedence over _.templateSettings values.

Note: In the development build _.template utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for
easier debugging.

For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

#### Parameters

##### string?

`string`

The template string.

##### options?

[`TemplateOptions`](TemplateOptions.md)

The options object.

#### Returns

[`TemplateExecutor`](TemplateExecutor.md)

Returns the compiled template function.

---

### throttle()

#### Call Signature

> **throttle**\<`T`\>(`func`, `wait?`, `options?`):
> [`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:1375

Creates a throttled function that only invokes func at most once per every wait milliseconds. The
throttled function comes with a cancel method to cancel delayed invocations and a flush method to
immediately invoke them. Provide an options object to indicate that func should be invoked on the
leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled function return
the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the throttled function is invoked more than once during the wait timeout.

##### Type Parameters

###### T

`T` _extends_ (...`args`) => `any`

##### Parameters

###### func

`T`

The function to throttle.

###### wait?

`number`

The number of milliseconds to throttle invocations to.

###### options?

[`ThrottleSettingsLeading`](../type-aliases/ThrottleSettingsLeading.md)

The options object.

##### Returns

[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Returns the new throttled function.

#### Call Signature

> **throttle**\<`T`\>(`func`, `wait?`, `options?`): [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:1376

##### Type Parameters

###### T

`T` _extends_ (...`args`) => `any`

##### Parameters

###### func

`T`

###### wait?

`number`

###### options?

[`ThrottleSettings`](ThrottleSettings.md)

##### Returns

[`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

---

### thru()

> **thru**\<`T`, `TResult`\>(`value`, `interceptor`): `TResult`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:196

This method is like _.tap except that it returns the result of interceptor.

#### Type Parameters

##### T

`T`

##### TResult

`TResult`

#### Parameters

##### value

`T`

The value to provide to interceptor.

##### interceptor

(`value`) => `TResult`

The function to invoke.

#### Returns

`TResult`

Returns the result of interceptor.

---

### times()

#### Call Signature

> **times**\<`TResult`\>(`n`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1083

Invokes the iteratee function n times, returning an array of the results of each invocation. The
iteratee is invoked with one argument; (index).

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### n

`number`

The number of times to invoke iteratee.

###### iteratee

(`num`) => `TResult`

The function invoked per iteration.

##### Returns

`TResult`[]

Returns the array of results.

#### Call Signature

> **times**(`n`): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1087

##### Parameters

###### n

`number`

##### Returns

`number`[]

##### See

_.times

---

### toArray()

#### Call Signature

> **toArray**\<`T`\>(`value`): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1412

Converts value to an array.

##### Type Parameters

###### T

`T`

##### Parameters

###### value

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \| `null`
\| `undefined`

The value to convert.

##### Returns

`T`[]

Returns the converted array.

#### Call Signature

> **toArray**\<`T`\>(`value`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1416

##### Type Parameters

###### T

`T`

##### Parameters

###### value

`T`

##### Returns

`T`\[keyof `T`\][]

##### See

_.toArray

#### Call Signature

> **toArray**(): `any`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1420

##### Returns

`any`[]

##### See

_.toArray

---

### toLower()

> **toLower**\<`T`\>(`string?`): `Lowercase`\<`T`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:536

Converts `string`, as a whole, to lower case.

#### Type Parameters

##### T

`T` _extends_ `string` = `string`

#### Parameters

##### string?

`T`

The string to convert.

#### Returns

`Lowercase`\<`T`\>

Returns the lower cased string.

---

### toPairs()

#### Call Signature

> **toPairs**\<`T`\>(`object?`): \[`string`, `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2335

Creates an array of own enumerable key-value pairs for object.

##### Type Parameters

###### T

`T`

##### Parameters

###### object?

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to query.

##### Returns

\[`string`, `T`\][]

Returns the new array of key-value pairs.

#### Call Signature

> **toPairs**(`object?`): \[`string`, `any`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2339

##### Parameters

###### object?

`object`

##### Returns

\[`string`, `any`\][]

##### See

_.toPairs

---

### toPairsIn()

#### Call Signature

> **toPairsIn**\<`T`\>(`object?`): \[`string`, `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2360

Creates an array of own and inherited enumerable key-value pairs for object.

##### Type Parameters

###### T

`T`

##### Parameters

###### object?

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to query.

##### Returns

\[`string`, `T`\][]

Returns the new array of key-value pairs.

#### Call Signature

> **toPairsIn**(`object?`): \[`string`, `any`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2364

##### Parameters

###### object?

`object`

##### Returns

\[`string`, `any`\][]

##### See

_.toPairsIn

---

### toPlainObject()

> **toPlainObject**(`value?`): `any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1623

Converts value to a plain object flattening inherited enumerable properties of value to own
properties of the plain object.

#### Parameters

##### value?

`any`

The value to convert.

#### Returns

`any`

Returns the converted plain object.

---

### toUpper()

> **toUpper**\<`T`\>(`string?`): `Uppercase`\<`T`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:558

Converts `string`, as a whole, to upper case.

#### Type Parameters

##### T

`T` _extends_ `string` = `string`

#### Parameters

##### string?

`T`

The string to convert.

#### Returns

`Uppercase`\<`T`\>

Returns the upper cased string.

---

### transform()

#### Call Signature

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2390

An alternative to _.reduce; this method transforms object to a new accumulator object which is the
result of running each of its own enumerable properties through iteratee, with each invocation
potentially mutating the accumulator object. The iteratee is invoked with four arguments:
(accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly
returning false.

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### object

readonly `T`[]

The object to iterate over.

###### iteratee

[`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`, `TResult`\>

The function invoked per iteration.

###### accumulator?

`TResult`

The custom accumulator value.

##### Returns

`TResult`

Returns the accumulated value.

#### Call Signature

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2394

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\>

###### iteratee

[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`, `string`,
`TResult`\>

###### accumulator?

`TResult`

##### Returns

`TResult`

##### See

_.transform

#### Call Signature

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2398

##### Type Parameters

###### T

`T` _extends_ `object`

###### TResult

`TResult`

##### Parameters

###### object

`T`

###### iteratee

[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
keyof `T`, `TResult`\>

###### accumulator?

`TResult`

##### Returns

`TResult`

##### See

_.transform

#### Call Signature

> **transform**(`object`): `any`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2402

##### Parameters

###### object

`any`[]

##### Returns

`any`[]

##### See

_.transform

#### Call Signature

> **transform**(`object`): [`Dictionary`](Dictionary.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2406

##### Parameters

###### object

`object`

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

_.transform

---

### trim()

#### Call Signature

> **trim**(`string?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:581

Removes leading and trailing whitespace or specified characters from string.

##### Parameters

###### string?

`string`

The string to trim.

###### chars?

`string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

#### Call Signature

> **trim**(`string`, `index`, `guard`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:585

##### Parameters

###### string

`string`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`string`

##### See

_.trim

---

### trimEnd()

#### Call Signature

> **trimEnd**(`string?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:608

Removes trailing whitespace or specified characters from string.

##### Parameters

###### string?

`string`

The string to trim.

###### chars?

`string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

#### Call Signature

> **trimEnd**(`string`, `index`, `guard`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:612

##### Parameters

###### string

`string`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`string`

##### See

_.trimEnd

---

### trimStart()

#### Call Signature

> **trimStart**(`string?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:635

Removes leading whitespace or specified characters from string.

##### Parameters

###### string?

`string`

The string to trim.

###### chars?

`string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

#### Call Signature

> **trimStart**(`string`, `index`, `guard`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:639

##### Parameters

###### string

`string`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`string`

##### See

_.trimStart

---

### truncate()

> **truncate**(`string?`, `options?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:677

Truncates string if it’s longer than the given maximum string length. The last characters of the
truncated string are replaced with the omission string which defaults to "…".

#### Parameters

##### string?

`string`

The string to truncate.

##### options?

[`TruncateOptions`](TruncateOptions.md)

The options object or maximum string length.

#### Returns

`string`

Returns the truncated string.

---

### unescape()

> **unescape**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:703

The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;,
and &#96; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party
library like he.

#### Parameters

##### string?

`string`

The string to unescape.

#### Returns

`string`

Returns the unescaped string.

---

### union()

> **union**\<`T`\>(...`arrays`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1576

Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of combined values.

---

### unionBy()

#### Call Signature

> **unionBy**\<`T`\>(`arrays`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1600

This method is like `_.union` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The arrays to inspect.

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

`T`[]

Returns the new array of combined values.

#### Call Signature

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1604

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

_.unionBy

#### Call Signature

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1608

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

_.unionBy

#### Call Signature

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `iteratee?`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1612

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays4

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

_.unionBy

#### Call Signature

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`, ...`iteratee`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1616

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays3

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays4

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### arrays5

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

`T`[]

##### See

_.unionBy

---

### uniqueId()

> **uniqueId**(`prefix?`): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1156

Generates a unique ID. If prefix is provided the ID is appended to it.

#### Parameters

##### prefix?

`string`

The value to prefix the ID with.

#### Returns

`string`

Returns the unique ID.

---

### unset()

> **unset**(`object`, `path`): `boolean`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2466

Removes the property at path of object.

Note: This method mutates object.

#### Parameters

##### object

`any`

The object to modify.

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to unset.

#### Returns

`boolean`

Returns true if the property is deleted, else false.

---

### unzip()

#### Call Signature

> **unzip**\<`T1`, `T2`\>(`array`): \[`T1`[], `T2`[]\]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1787

This method is like _.zip except that it accepts an array of grouped elements and creates an array
regrouping the elements to their pre-zip configuration.

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### array

\[`T1`, `T2`\][]

The array of grouped elements to process.

##### Returns

\[`T1`[], `T2`[]\]

Returns the new array of regrouped elements.

#### Call Signature

> **unzip**\<`T1`, `T2`, `T3`\>(`array`): \[`T1`[], `T2`[], `T3`[]\]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1791

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### array

\[`T1`, `T2`, `T3`\][]

##### Returns

\[`T1`[], `T2`[], `T3`[]\]

##### See

_.unzip

#### Call Signature

> **unzip**\<`T1`, `T2`, `T3`, `T4`\>(`array`): \[`T1`[], `T2`[], `T3`[], `T4`[]\]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1797

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### array

\[`T1`, `T2`, `T3`, `T4`\][]

##### Returns

\[`T1`[], `T2`[], `T3`[], `T4`[]\]

##### See

_.unzip

#### Call Signature

> **unzip**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`array`): \[`T1`[], `T2`[], `T3`[], `T4`[], `T5`[]\]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1803

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

##### Parameters

###### array

\[`T1`, `T2`, `T3`, `T4`, `T5`\][]

##### Returns

\[`T1`[], `T2`[], `T3`[], `T4`[], `T5`[]\]

##### See

_.unzip

#### Call Signature

> **unzip**\<`T`\>(`array`): `T`[][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1809

##### Type Parameters

###### T

`T`

##### Parameters

###### array

`T`[][] \| [`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\> \| `null`
\| `undefined`

##### Returns

`T`[][]

##### See

_.unzip

---

### unzipWith()

#### Call Signature

> **unzipWith**\<`T`, `TResult`\>(`array`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1832

This method is like _.unzip except that it accepts an iteratee to specify how regrouped values
should be combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\> \| `null` \|
`undefined`

The array of grouped elements to process.

###### iteratee

(...`values`) => `TResult`

The function to combine regrouped values.

##### Returns

`TResult`[]

Returns the new array of regrouped elements.

#### Call Signature

> **unzipWith**\<`T`\>(`array`): `T`[][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1836

##### Type Parameters

###### T

`T`

##### Parameters

###### array

[`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\> \| `null` \|
`undefined`

##### Returns

`T`[][]

##### See

_.unzipWith

---

### update()

> **update**(`object`, `path`, `updater`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2490

This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith
to customize path creation. The updater is invoked with one argument: (value).

#### Parameters

##### object

`object`

The object to modify.

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

##### updater

(`value`) => `any`

The function to produce the updated value.

#### Returns

`any`

Returns object.

---

### upperCase()

> **upperCase**(`string?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:725

Converts `string`, as space separated words, to upper case.

#### Parameters

##### string?

`string`

The string to convert.

#### Returns

`string`

Returns the upper cased string.

---

### upperFirst()

> **upperFirst**\<`T`\>(`string?`): `Capitalize`\<`T`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:747

Converts the first character of `string` to upper case.

#### Type Parameters

##### T

`T` _extends_ `string` = `string`

#### Parameters

##### string?

`T`

The string to convert.

#### Returns

`Capitalize`\<`T`\>

Returns the converted string.

---

### values()

#### Call Signature

> **values**\<`T`\>(`object`): `T`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2560

Creates an array of the own enumerable property values of object.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \|
[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The object to query.

##### Returns

`T`[]

Returns an array of property values.

#### Call Signature

> **values**\<`T`\>(`object`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2564

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

##### Returns

`T`\[keyof `T`\][]

##### See

_.values

#### Call Signature

> **values**(`object`): `any`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2568

##### Parameters

###### object

`any`

##### Returns

`any`[]

##### See

_.values

---

### valuesIn()

#### Call Signature

> **valuesIn**\<`T`\>(`object`): `T`[]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2607

Creates an array of the own and inherited enumerable property values of object.

##### Type Parameters

###### T

`T`

##### Parameters

###### object

[`Dictionary`](Dictionary.md)\<`T`\> \| [`NumericDictionary`](NumericDictionary.md)\<`T`\> \|
[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The object to query.

##### Returns

`T`[]

Returns the array of property values.

#### Call Signature

> **valuesIn**\<`T`\>(`object`): `T`\[keyof `T`\][]

Defined in: node\_modules/@types/lodash/common/object.d.ts:2611

##### Type Parameters

###### T

`T` _extends_ `object`

##### Parameters

###### object

`T` \| `null` \| `undefined`

##### Returns

`T`\[keyof `T`\][]

##### See

_.valuesIn

---

### without()

> **without**\<`T`\>(`array`, ...`values`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1866

Creates an array excluding all provided values using SameValueZero for equality comparisons.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

The array to filter.

##### values

...`T`[]

The values to exclude.

#### Returns

`T`[]

Returns the new array of filtered values.

---

### words()

#### Call Signature

> **words**(`string?`, `pattern?`): `string`[]

Defined in: node\_modules/@types/lodash/common/string.d.ts:770

Splits `string` into an array of its words.

##### Parameters

###### string?

`string`

The string to inspect.

###### pattern?

`string` \| `RegExp`

The pattern to match words.

##### Returns

`string`[]

Returns the words of `string`.

#### Call Signature

> **words**(`string`, `index`, `guard`): `string`[]

Defined in: node\_modules/@types/lodash/common/string.d.ts:774

##### Parameters

###### string

`string`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`string`[]

##### See

_.words

---

### wrap()

> **wrap**\<`T`, `TArgs`, `TResult`\>(`value`, `wrapper`): (...`args`) => `TResult`

Defined in: node\_modules/@types/lodash/common/function.d.ts:1441

Creates a function that provides value to the wrapper function as its first argument. Any additional
arguments provided to the function are appended to those provided to the wrapper function. The
wrapper is invoked with the this binding of the created function.

#### Type Parameters

##### T

`T`

##### TArgs

`TArgs`

##### TResult

`TResult`

#### Parameters

##### value

`T`

The value to wrap.

##### wrapper

(`value`, ...`args`) => `TResult`

The wrapper function.

#### Returns

Returns the new function.

(...`args`) => `TResult`

---

### xor()

> **xor**\<`T`\>(...`arrays`): `T`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:1887

Creates an array of unique values that is the symmetric difference of the provided arrays.

#### Type Parameters

##### T

`T`

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of values.

---

### zip()

#### Call Signature

> **zip**\<`T1`, `T2`\>(`arrays1`, `arrays2`): \[`T1` \| `undefined`, `T2` \| `undefined`\][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2006

Creates an array of grouped elements, the first of which contains the first elements of the given
arrays, the second of which contains the second elements of the given arrays, and so on.

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

\[`T1` \| `undefined`, `T2` \| `undefined`\][]

Returns the new array of grouped elements.

#### Call Signature

> **zip**\<`T1`, `T2`, `T3`\>(`arrays1`, `arrays2`, `arrays3`): \[`T1` \| `undefined`, `T2` \|
> `undefined`, `T3` \| `undefined`\][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2010

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

##### Returns

\[`T1` \| `undefined`, `T2` \| `undefined`, `T3` \| `undefined`\][]

##### See

_.zip

#### Call Signature

> **zip**\<`T1`, `T2`, `T3`, `T4`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`): \[`T1` \|
> `undefined`, `T2` \| `undefined`, `T3` \| `undefined`, `T4` \| `undefined`\][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2014

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### arrays4

[`List`](../type-aliases/List.md)\<`T4`\>

##### Returns

\[`T1` \| `undefined`, `T2` \| `undefined`, `T3` \| `undefined`, `T4` \| `undefined`\][]

##### See

_.zip

#### Call Signature

> **zip**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`):
> \[`T1` \| `undefined`, `T2` \| `undefined`, `T3` \| `undefined`, `T4` \| `undefined`, `T5` \|
> `undefined`\][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2018

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### arrays4

[`List`](../type-aliases/List.md)\<`T4`\>

###### arrays5

[`List`](../type-aliases/List.md)\<`T5`\>

##### Returns

\[`T1` \| `undefined`, `T2` \| `undefined`, `T3` \| `undefined`, `T4` \| `undefined`, `T5` \|
`undefined`\][]

##### See

_.zip

#### Call Signature

> **zip**\<`T`\>(...`arrays`): (`T` \| `undefined`)[][]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2022

##### Type Parameters

###### T

`T`

##### Parameters

###### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

(`T` \| `undefined`)[][]

##### See

_.zip

---

### zipObject()

#### Call Signature

> **zipObject**\<`T`\>(`props`, `values`): [`Dictionary`](Dictionary.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2053

This method is like _.fromPairs except that it accepts two arrays, one of property identifiers and
one of corresponding values.

##### Type Parameters

###### T

`T`

##### Parameters

###### props

[`List`](../type-aliases/List.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>

The property names.

###### values

[`List`](../type-aliases/List.md)\<`T`\>

The property values.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new object.

#### Call Signature

> **zipObject**(`props?`): [`Dictionary`](Dictionary.md)\<`undefined`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2057

##### Parameters

###### props?

[`List`](../type-aliases/List.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>

##### Returns

[`Dictionary`](Dictionary.md)\<`undefined`\>

##### See

_.zipObject

---

### zipObjectDeep()

> **zipObjectDeep**(`paths?`, `values?`): `object`

Defined in: node\_modules/@types/lodash/common/array.d.ts:2087

This method is like _.zipObject except that it supports property paths.

#### Parameters

##### paths?

[`List`](../type-aliases/List.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>

The property names.

##### values?

[`List`](../type-aliases/List.md)\<`any`\>

The property values.

#### Returns

`object`

Returns the new object.

---

### zipWith()

#### Call Signature

> **zipWith**\<`T`, `TResult`\>(`arrays`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2110

This method is like _.zip except that it accepts an iteratee to specify how grouped values should be
combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### arrays

[`List`](../type-aliases/List.md)\<`T`\>

The arrays to process.

###### iteratee

(`value1`) => `TResult`

The function to combine grouped values.

##### Returns

`TResult`[]

Returns the new array of grouped elements.

#### Call Signature

> **zipWith**\<`T1`, `T2`, `TResult`\>(`arrays1`, `arrays2`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2114

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### TResult

`TResult`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee

(`value1`, `value2`) => `TResult`

##### Returns

`TResult`[]

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`T1`, `T2`, `T3`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee`):
> `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2118

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### TResult

`TResult`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### iteratee

(`value1`, `value2`, `value3`) => `TResult`

##### Returns

`TResult`[]

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
> `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2122

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### TResult

`TResult`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### arrays4

[`List`](../type-aliases/List.md)\<`T4`\>

###### iteratee

(`value1`, `value2`, `value3`, `value4`) => `TResult`

##### Returns

`TResult`[]

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
> `arrays5`, `iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2126

##### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### TResult

`TResult`

##### Parameters

###### arrays1

[`List`](../type-aliases/List.md)\<`T1`\>

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### arrays4

[`List`](../type-aliases/List.md)\<`T4`\>

###### arrays5

[`List`](../type-aliases/List.md)\<`T5`\>

###### iteratee

(`value1`, `value2`, `value3`, `value4`, `value5`) => `TResult`

##### Returns

`TResult`[]

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`T`, `TResult`\>(...`iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/array.d.ts:2130

##### Type Parameters

###### T

`T`

###### TResult

`TResult`

##### Parameters

###### iteratee

...(((...`group`) => `TResult`) \| [`List`](../type-aliases/List.md)\<`T`\> \| `null` \|
`undefined`)[]

##### Returns

`TResult`[]

##### See

_.zipWith

## Util

### cond()

#### Call Signature

> **cond**\<`R`\>(`pairs`): () => `R`

Defined in: node\_modules/@types/lodash/common/util.d.ts:82

Creates a function that iterates over `pairs` and invokes the corresponding function of the first
predicate to return truthy. The predicate-function pairs are invoked with the `this` binding and
arguments of the created function.

##### Type Parameters

###### R

`R`

##### Parameters

###### pairs

[`CondPairNullary`](../type-aliases/CondPairNullary.md)\<`R`\>[]

The predicate-function pairs.

##### Returns

Returns the new composite function.

() => `R`

##### Since

4.0.0

##### Example

```ts
var func = _.cond([
  [_.matches({a: 1}), _.constant('matches A')],
  [_.conforms({b: _.isNumber}), _.constant('matches B')],
  [_.stubTrue, _.constant('no match')],
]);

func({a: 1, b: 2});
// => 'matches A'

func({a: 0, b: 1});
// => 'matches B'

func({a: '1', b: '2'});
// => 'no match'
```

#### Call Signature

> **cond**\<`T`, `R`\>(`pairs`): (`Target`) => `R`

Defined in: node\_modules/@types/lodash/common/util.d.ts:83

##### Type Parameters

###### T

`T`

###### R

`R`

##### Parameters

###### pairs

[`CondPairUnary`](../type-aliases/CondPairUnary.md)\<`T`, `R`\>[]

##### Returns

(`Target`) => `R`

---

### iteratee()

#### Call Signature

> **iteratee**\<`TFunction`\>(`func?`): `TFunction`

Defined in: node\_modules/@types/lodash/common/util.d.ts:424

Creates a function that invokes `func` with the arguments of the created function. If `func` is a
property name the created callback returns the property value for a given element. If `func` is an
object the created callback returns `true` for elements that contain the equivalent object
properties, otherwise it returns `false`.

##### Type Parameters

###### TFunction

`TFunction` _extends_ (...`args`) => `any`

##### Parameters

###### func?

`TFunction`

The value to convert to a callback.

##### Returns

`TFunction`

Returns the callback.

##### Example

```ts
var users = [
  {user: 'barney', age: 36},
  {user: 'fred', age: 40},
];

// create custom iteratee shorthands
_.iteratee = _.wrap(_.iteratee, function (callback, func) {
  var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
  return !p ?
      callback(func)
    : function (object) {
        return p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3];
      };
});

_.filter(users, 'age > 36');
// => [{ 'user': 'fred', 'age': 40 }]
```

#### Call Signature

> **iteratee**(`func`): (...`args`) => `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:428

##### Parameters

###### func

`string` \| `number` \| `symbol` \| `object`

##### Returns

(...`args`) => `any`

##### See

_.iteratee

---

### rangeRight()

#### Call Signature

> **rangeRight**(`start`, `end?`, `step?`): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:934

This method is like `_.range` except that it populates values in descending order.

##### Parameters

###### start

`number`

The start of the range.

###### end?

`number`

The end of the range.

###### step?

`number`

The value to increment or decrement by.

##### Returns

`number`[]

Returns the new array of numbers.

##### Example

```ts
_.rangeRight(4);
// => [3, 2, 1, 0]

_.rangeRight(-4);
// => [-3, -2, -1, 0]

_.rangeRight(1, 5);
// => [4, 3, 2, 1]

_.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

_.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

_.rangeRight(1, 4, 0);
// => [1, 1, 1]

_.rangeRight(0);
// => []
```

#### Call Signature

> **rangeRight**(`end`, `index`, `guard`): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:938

##### Parameters

###### end

`number`

###### index

`string` \| `number`

###### guard

`object`

##### Returns

`number`[]

##### See

_.rangeRight

---

### toPath()

> **toPath**(`value`): `string`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1134

Converts `value` to a property path array.

#### Parameters

##### value

`any`

The value to convert.

#### Returns

`string`[]

Returns the new property path array.

#### Example

```ts
_.toPath('a.b.c');
// => ['a', 'b', 'c']

_.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']

var path = ['a', 'b', 'c'],
  newPath = _.toPath(path);

console.log(newPath);
// => ['a', 'b', 'c']

console.log(path === newPath);
// => false
```
