[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: LoDashStatic()

> **LoDashStatic**\<`TrapAny`\>(`value`): [`Collection`](Collection.md)\<`any`\> &
> [`Function`](Function.md)\<`any`\> & [`Object`](Object.md)\<`any`\> &
> [`Primitive`](Primitive.md)\<`any`\> & [`String`](String.md)

Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that
operate on and return arrays, collections, and functions can be chained together. Methods that
retrieve a single value or may return a primitive value will automatically end the chain sequence
and return the unwrapped value. Otherwise, the value must be unwrapped with value().

Explicit chain sequences, which must be unwrapped with value(), may be enabled using \_.chain.

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

## Type parameters

• **TrapAny** _extends_ `object`

## Parameters

• **value**: `TrapAny`

## Returns

[`Collection`](Collection.md)\<`any`\> & [`Function`](Function.md)\<`any`\> &
[`Object`](Object.md)\<`any`\> & [`Primitive`](Primitive.md)\<`any`\> & [`String`](String.md)

## Source

node_modules/@types/lodash/common/common.d.ts:95

> **LoDashStatic**\<`T`\>(`value`): [`Primitive`](Primitive.md)\<`T`\>

## Type parameters

• **T** _extends_ `undefined` \| `null`

## Parameters

• **value**: `T`

## Returns

[`Primitive`](Primitive.md)\<`T`\>

## Source

node_modules/@types/lodash/common/common.d.ts:96

> **LoDashStatic**(`value`): [`String`](String.md)

## Parameters

• **value**: `undefined` \| `null` \| `string`

## Returns

[`String`](String.md)

## Source

node_modules/@types/lodash/common/common.d.ts:97

> **LoDashStatic**\<`T`\>(`value`): [`Function`](Function.md)\<`T`\>

## Type parameters

• **T** _extends_ (...`args`) => `any`

## Parameters

• **value**: `T`

## Returns

[`Function`](Function.md)\<`T`\>

## Source

node_modules/@types/lodash/common/common.d.ts:98

> **LoDashStatic**\<`T`\>(`value`): [`Collection`](Collection.md)\<`T`\>

## Type parameters

• **T** = `any`

## Parameters

• **value**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

## Returns

[`Collection`](Collection.md)\<`T`\>

## Source

node_modules/@types/lodash/common/common.d.ts:99

> **LoDashStatic**\<`T`\>(`value`): [`Object`](Object.md)\<`T`\>

## Type parameters

• **T** _extends_ `object`

## Parameters

• **value**: `undefined` \| `null` \| `T`

## Returns

[`Object`](Object.md)\<`T`\>

## Source

node_modules/@types/lodash/common/common.d.ts:100

> **LoDashStatic**\<`T`\>(`value`): [`Primitive`](Primitive.md)\<`T`\>

## Type parameters

• **T**

## Parameters

• **value**: `T`

## Returns

[`Primitive`](Primitive.md)\<`T`\>

## Source

node_modules/@types/lodash/common/common.d.ts:101

## Array

### concat()

> **concat**\<`T`\>(...`values`?): `T`[]

Creates a new array concatenating `array` with any additional arrays and/or values.

#### Type parameters

• **T**

#### Parameters

• ...**values?**: [`Many`](../type-aliases/Many.md)\<`T`\>[]

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

#### Source

node_modules/@types/lodash/common/array.d.ts:70

---

### differenceWith()

#### differenceWith(array, values, comparator)

> **differenceWith**\<`T1`, `T2`\>(`array`, `values`?, `comparator`?): `T1`[]

This method is like \_.difference except that it accepts comparator which is invoked to compare
elements of array to values. The order and references of result values are determined by the first
array. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

The arrays to inspect.

• **comparator?**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:205

#### differenceWith(array, values1, values2, comparator)

> **differenceWith**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

\_.differenceWith

##### Source

node_modules/@types/lodash/common/array.d.ts:209

#### differenceWith(array, values1, values2, values)

> **differenceWith**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• ...**values**: ([`List`](../type-aliases/List.md)\<`T4`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

\_.differenceWith

##### Source

node_modules/@types/lodash/common/array.d.ts:213

#### differenceWith(array, values)

> **differenceWith**\<`T`\>(`array`, ...`values`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

\_.differenceWith

##### Source

node_modules/@types/lodash/common/array.d.ts:217

---

### fromPairs()

#### fromPairs(pairs)

> **fromPairs**\<`T`\>(`pairs`): [`Dictionary`](Dictionary.md)\<`T`\>

The inverse of `_.toPairs`; this method returns an object composed from key-value `pairs`.

##### Type parameters

• **T**

##### Parameters

• **pairs**: `undefined` \| `null` \|
[`List`](../type-aliases/List.md)\<[[`PropertyName`](../type-aliases/PropertyName.md), `T`]\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:550

#### fromPairs(pairs)

> **fromPairs**(`pairs`): [`Dictionary`](Dictionary.md)\<`any`\>

##### Parameters

• **pairs**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`[]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

\_.fromPairs

##### Source

node_modules/@types/lodash/common/array.d.ts:554

---

### indexOf()

> **indexOf**\<`T`\>(`array`, `value`, `fromIndex`?): `number`

Gets the index at which the first occurrence of `value` is found in `array` using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons. If `fromIndex` is negative, it's used as the offset from the end of `array`.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **value**: `T`

The value to search for.

• **fromIndex?**: `number`

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

#### Source

node_modules/@types/lodash/common/array.d.ts:630

---

### intersectionBy()

#### intersectionBy(array, values, iteratee)

> **intersectionBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`?): `T1`[]

This method is like `_.intersection` except that it accepts `iteratee` which is invoked for each
element of each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is
invoked with one argument: (value).

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:706

#### intersectionBy(array, values1, values2, iteratee)

> **intersectionBy**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **array**: `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:710

#### intersectionBy(array, values1, values2, values)

> **intersectionBy**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• ...**values**: ([`List`](../type-aliases/List.md)\<`T4`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:714

#### intersectionBy(array, values)

> **intersectionBy**\<`T`\>(`array`?, ...`values`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **array?**: `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**values?**: [`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:718

#### intersectionBy(values)

> **intersectionBy**\<`T`\>(...`values`): `T`[]

##### Type parameters

• **T**

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:722

---

### intersectionWith()

#### intersectionWith(array, values, comparator)

> **intersectionWith**\<`T1`, `T2`\>(`array`, `values`?, `comparator`?): `T1`[]

Creates an array of unique `array` values not included in the other provided arrays using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons.

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

The arrays to inspect.

• **comparator?**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:762

#### intersectionWith(array, values1, values2, comparator)

> **intersectionWith**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

\_.intersectionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:766

#### intersectionWith(array, values1, values2, values)

> **intersectionWith**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, ...`values`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• ...**values**: ([`List`](../type-aliases/List.md)\<`T4`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2` \| `T3` \| `T4`\>)[]

##### Returns

`T1`[]

##### See

\_.intersectionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:770

#### intersectionWith(array, values)

> **intersectionWith**\<`T`\>(`array`?, ...`values`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **array?**: `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**values?**: ([`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

`T`[]

##### See

\_.intersectionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:774

---

### pullAll()

#### pullAll(array, values)

> **pullAll**\<`T`\>(`array`, `values`?): `T`[]

This method is like `_.pull` except that it accepts an array of values to remove.

**Note:** Unlike `_.difference`, this method mutates `array`.

##### Type parameters

• **T**

##### Parameters

• **array**: `T`[]

The array to modify.

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:966

#### pullAll(array, values)

> **pullAll**\<`T`\>(`array`, `values`?): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.pullAll

##### Source

node_modules/@types/lodash/common/array.d.ts:970

---

### pullAllBy()

#### pullAllBy(array, values, iteratee)

> **pullAllBy**\<`T`\>(`array`, `values`?, `iteratee`?): `T`[]

This method is like `_.pullAll` except that it accepts `iteratee` which is invoked for each element
of `array` and `values` to to generate the criterion by which uniqueness is computed. The iteratee
is invoked with one argument: (value).

**Note:** Unlike `_.differenceBy`, this method mutates `array`.

##### Type parameters

• **T**

##### Parameters

• **array**: `T`[]

The array to modify.

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

The values to remove.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1005

#### pullAllBy(array, values, iteratee)

> **pullAllBy**\<`T`\>(`array`, `values`?, `iteratee`?): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.pullAllBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1009

#### pullAllBy(array, values, iteratee)

> **pullAllBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `T1`[]

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

##### Returns

`T1`[]

##### See

\_.pullAllBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1013

#### pullAllBy(array, values, iteratee)

> **pullAllBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`):
> [`List`](../type-aliases/List.md)\<`T1`\>

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T1`\>

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T1`\>

##### See

\_.pullAllBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1017

---

### pullAllWith()

#### pullAllWith(array, values, comparator)

> **pullAllWith**\<`T`\>(`array`, `values`?, `comparator`?): `T`[]

This method is like `_.pullAll` except that it accepts `comparator` which is invoked to compare
elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

**Note:** Unlike `_.differenceWith`, this method mutates `array`.

##### Type parameters

• **T**

##### Parameters

• **array**: `T`[]

The array to modify.

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

The values to remove.

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1052

#### pullAllWith(array, values, comparator)

> **pullAllWith**\<`T`\>(`array`, `values`?, `comparator`?):
> [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.pullAllWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1056

#### pullAllWith(array, values, comparator)

> **pullAllWith**\<`T1`, `T2`\>(`array`, `values`, `comparator`): `T1`[]

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `T1`[]

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

##### Returns

`T1`[]

##### See

\_.pullAllWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1060

#### pullAllWith(array, values, comparator)

> **pullAllWith**\<`T1`, `T2`\>(`array`, `values`, `comparator`):
> [`List`](../type-aliases/List.md)\<`T1`\>

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T1`\>

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T1`, `T2`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T1`\>

##### See

\_.pullAllWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1064

---

### reverse()

> **reverse**\<`TList`\>(`array`): `TList`

Reverses `array` so that the first element becomes the last, the second element becomes the second
to last, and so on.

**Note:** This method mutates `array` and is based on
[`Array#reverse`](https://mdn.io/Array/reverse).

#### Type parameters

• **TList** _extends_ [`List`](../type-aliases/List.md)\<`any`\>

#### Parameters

• **array**: `TList`

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

#### Source

node_modules/@types/lodash/common/array.d.ts:1152

---

### sortedIndex()

#### sortedIndex(array, value)

> **sortedIndex**\<`T`\>(`array`, `value`): `number`

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The sorted array to inspect.

• **value**: `T`

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1194

#### sortedIndex(array, value)

> **sortedIndex**\<`T`\>(`array`, `value`): `number`

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The sorted array to inspect.

• **value**: `T`

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1225

---

### sortedIndexBy()

> **sortedIndexBy**\<`T`\>(`array`, `value`, `iteratee`?): `number`

This method is like `_.sortedIndex` except that it accepts `iteratee` which is invoked for `value`
and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The sorted array to inspect.

• **value**: `T`

The value to evaluate.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

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

#### Source

node_modules/@types/lodash/common/array.d.ts:1261

---

### sortedIndexOf()

> **sortedIndexOf**\<`T`\>(`array`, `value`): `number`

This method is like `_.indexOf` except that it performs a binary search on a sorted `array`.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **value**: `T`

The value to search for.

#### Returns

`number`

Returns the index of the matched value, else `-1`.

#### Example

```ts
_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1289

---

### sortedLastIndex()

> **sortedLastIndex**\<`T`\>(`array`, `value`): `number`

This method is like `_.sortedIndex` except that it returns the highest index at which `value` should
be inserted into `array` in order to maintain its sort order.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The sorted array to inspect.

• **value**: `T`

The value to evaluate.

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

#### Example

```ts
_.sortedLastIndex([4, 5], 4);
// => 1
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1318

---

### sortedLastIndexBy()

> **sortedLastIndexBy**\<`T`\>(`array`, `value`, `iteratee`?): `number`

This method is like `_.sortedLastIndex` except that it accepts `iteratee` which is invoked for
`value` and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The sorted array to inspect.

• **value**: `T`

The value to evaluate.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

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

#### Source

node_modules/@types/lodash/common/array.d.ts:1349

---

### sortedLastIndexOf()

> **sortedLastIndexOf**\<`T`\>(`array`, `value`): `number`

This method is like `_.lastIndexOf` except that it performs a binary search on a sorted `array`.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **value**: `T`

The value to search for.

#### Returns

`number`

Returns the index of the matched value, else `-1`.

#### Example

```ts
_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1377

---

### sortedUniq()

> **sortedUniq**\<`T`\>(`array`): `T`[]

This method is like `_.uniq` except that it's designed and optimized for sorted arrays.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1404

---

### sortedUniqBy()

> **sortedUniqBy**\<`T`\>(`array`, `iteratee`?): `T`[]

This method is like `_.uniqBy` except that it's designed and optimized for sorted arrays.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1432

---

### unionWith()

#### unionWith(arrays, comparator)

> **unionWith**\<`T`\>(`arrays`?, `comparator`?): `T`[]

This method is like `_.union` except that it accepts `comparator` which is invoked to compare
elements of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type parameters

• **T**

##### Parameters

• **arrays?**: `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The arrays to inspect.

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1645

#### unionWith(arrays, arrays2, comparator)

> **unionWith**\<`T`\>(`arrays`, `arrays2`, `comparator`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.unionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1649

#### unionWith(arrays, arrays2, arrays3, comparator)

> **unionWith**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`comparator`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

\_.unionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1653

---

### uniq()

> **uniq**\<`T`\>(`array`): `T`[]

Creates a duplicate-free version of an array, using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons, in which only the first occurrence of each element is kept.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

#### Returns

`T`[]

Returns the new duplicate free array.

#### Example

```ts
_.uniq([2, 1, 2]);
// => [2, 1]
```

#### Source

node_modules/@types/lodash/common/array.d.ts:1690

---

### uniqBy()

> **uniqBy**\<`T`\>(`array`, `iteratee`?): `T`[]

This method is like `_.uniq` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
argument: (value).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

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

#### Source

node_modules/@types/lodash/common/array.d.ts:1723

---

### uniqWith()

> **uniqWith**\<`T`\>(`array`, `comparator`?): `T`[]

This method is like `_.uniq` except that it accepts `comparator` which is invoked to compare
elements of `array`. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

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

#### Source

node_modules/@types/lodash/common/array.d.ts:1754

---

### xorBy()

#### xorBy(arrays, iteratee)

> **xorBy**\<`T`\>(`arrays`?, `iteratee`?): `T`[]

This method is like `_.xor` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **arrays?**: `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The arrays to inspect.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1887

#### xorBy(arrays, arrays2, iteratee)

> **xorBy**\<`T`\>(`arrays`, `arrays2`, `iteratee`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.xorBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1891

#### xorBy(arrays, arrays2, arrays3, iteratee)

> **xorBy**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`iteratee`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

\_.xorBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1895

---

### xorWith()

#### xorWith(arrays, comparator)

> **xorWith**\<`T`\>(`arrays`?, `comparator`?): `T`[]

This method is like `_.xor` except that it accepts `comparator` which is invoked to compare elements
of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

##### Type parameters

• **T**

##### Parameters

• **arrays?**: `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The arrays to inspect.

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/array.d.ts:1935

#### xorWith(arrays, arrays2, comparator)

> **xorWith**\<`T`\>(`arrays`, `arrays2`, `comparator`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.xorWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1939

#### xorWith(arrays, arrays2, arrays3, comparator)

> **xorWith**\<`T`\>(`arrays`, `arrays2`, `arrays3`, ...`comparator`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

\_.xorWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1943

## Collection

### flatMapDeep()

#### flatMapDeep(collection)

> **flatMapDeep**\<`T`\>(`collection`): `T`[]

This method is like `_.flatMap` except that it recursively flattens the mapped results.

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\>

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

##### Source

node_modules/@types/lodash/common/collection.d.ts:545

#### flatMapDeep(collection, iteratee)

> **flatMapDeep**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:549

#### flatMapDeep(collection, iteratee)

> **flatMapDeep**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:553

#### flatMapDeep(collection, iteratee)

> **flatMapDeep**(`collection`, `iteratee`): `any`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `string`

##### Returns

`any`[]

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:557

#### flatMapDeep(collection, iteratee)

> **flatMapDeep**(`collection`, `iteratee`): `boolean`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `object`

##### Returns

`boolean`[]

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:561

---

### flatMapDepth()

#### flatMapDepth(collection)

> **flatMapDepth**\<`T`\>(`collection`): `T`[]

This method is like `_.flatMap` except that it recursively flattens the mapped results up to `depth`
times.

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>\>

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

##### Source

node_modules/@types/lodash/common/collection.d.ts:669

#### flatMapDepth(collection, iteratee, depth)

> **flatMapDepth**\<`T`, `TResult`\>(`collection`, `iteratee`, `depth`?): `TResult`[]

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

`TResult`[]

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:673

#### flatMapDepth(collection, iteratee, depth)

> **flatMapDepth**\<`T`, `TResult`\>(`collection`, `iteratee`, `depth`?): `TResult`[]

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

`TResult`[]

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:677

#### flatMapDepth(collection, iteratee, depth)

> **flatMapDepth**(`collection`, `iteratee`, `depth`?): `any`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `string`

• **depth?**: `number`

##### Returns

`any`[]

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:681

#### flatMapDepth(collection, iteratee, depth)

> **flatMapDepth**(`collection`, `iteratee`, `depth`?): `boolean`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `object`

• **depth?**: `number`

##### Returns

`boolean`[]

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:685

---

### orderBy()

#### orderBy(collection, iteratees, orders)

> **orderBy**\<`T`\>(`collection`, `iteratees`?, `orders`?): `T`[]

This method is like `_.sortBy` except that it allows specifying the sort orders of the iteratees to
sort by. If `orders` is unspecified, all values are sorted in ascending order. Otherwise, specify an
order of "desc" for descending or "asc" for ascending sort order of corresponding values.

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
`unknown`\>\>

The iteratees to sort by.

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

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

##### Source

node_modules/@types/lodash/common/collection.d.ts:1327

#### orderBy(collection, iteratees, orders)

> **orderBy**\<`T`\>(`collection`, `iteratees`?, `orders`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`[]

##### See

\_.orderBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:1331

#### orderBy(collection, iteratees, orders)

> **orderBy**\<`T`\>(`collection`, `iteratees`?, `orders`?): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
`unknown`\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`\[keyof `T`\][]

##### See

\_.orderBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:1335

#### orderBy(collection, iteratees, orders)

> **orderBy**\<`T`\>(`collection`, `iteratees`?, `orders`?): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

##### Returns

`T`\[keyof `T`\][]

##### See

\_.orderBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:1339

---

### sortBy()

#### sortBy(collection, iteratees)

> **sortBy**\<`T`\>(`collection`, ...`iteratees`?): `T`[]

Creates an array of elements, sorted in ascending order by the results of running each element in a
collection through each iteratee. This method performs a stable sort, that is, it preserves the
original sort order of equal elements. The iteratees are invoked with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• ...**iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>[]

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

##### Source

node_modules/@types/lodash/common/collection.d.ts:1904

#### sortBy(collection, iteratees)

> **sortBy**\<`T`\>(`collection`, ...`iteratees`): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• ...**iteratees**:
[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>[]

##### Returns

`T`\[keyof `T`\][]

##### See

\_.sortBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:1908

## Function

### flip()

> **flip**\<`T`\>(`func`): `T`

Creates a function that invokes `func` with arguments reversed.

#### Type parameters

• **T** _extends_ (...`args`) => `any`

#### Parameters

• **func**: `T`

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

#### Source

node_modules/@types/lodash/common/function.d.ts:516

---

### unary()

> **unary**\<`T`, `TResult`\>(`func`): (`arg1`) => `TResult`

Creates a function that accepts up to one argument, ignoring any additional arguments.

#### Type parameters

• **T**

• **TResult**

#### Parameters

• **func**

The function to cap arguments for.

#### Returns

`Function`

Returns the new function.

##### Parameters

• **arg1**: `T`

##### Returns

`TResult`

#### Example

```ts
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
```

#### Source

node_modules/@types/lodash/common/function.d.ts:1417

## Lang

### eq()

> **eq**(`value`, `other`): `boolean`

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:254

---

### isArrayLike()

#### isArrayLike(t)

> **isArrayLike**\<`T`\>(`t`): `boolean`

Checks if `value` is array-like. A value is considered array-like if it's not a function and has a
`value.length` that's an integer greater than or equal to `0` and less than or equal to
`Number.MAX_SAFE_INTEGER`.

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **t**: `T`

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

##### Source

node_modules/@types/lodash/common/lang.d.ts:408

#### isArrayLike(value)

> **isArrayLike**(`value`): `value is never`

##### Parameters

• **value**: `undefined` \| `null` \| (...`args`) => `any`

##### Returns

`value is never`

##### See

\_.isArrayLike

##### Source

node_modules/@types/lodash/common/lang.d.ts:412

#### isArrayLike(value)

> **isArrayLike**(`value`): `value is Object`

##### Parameters

• **value**: `any`

##### Returns

`value is Object`

##### See

\_.isArrayLike

##### Source

node_modules/@types/lodash/common/lang.d.ts:416

---

### isArrayLikeObject()

#### isArrayLikeObject(value)

> **isArrayLikeObject**\<`T`\>(`value`): `boolean`

This method is like `_.isArrayLike` except that it also checks if `value` is an object.

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **value**: `T`

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

##### Source

node_modules/@types/lodash/common/lang.d.ts:453

#### isArrayLikeObject(value)

> **isArrayLikeObject**(`value`): `value is never`

##### Parameters

• **value**: `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `Function` \| (...`args`)
=> `any`

##### Returns

`value is never`

##### See

\_.isArrayLikeObject

##### Source

node_modules/@types/lodash/common/lang.d.ts:457

#### isArrayLikeObject(value)

> **isArrayLikeObject**(`value`): `value is object & Object`

##### Parameters

• **value**: `any`

##### Returns

`value is object & Object`

##### See

\_.isArrayLikeObject

##### Source

node_modules/@types/lodash/common/lang.d.ts:461

---

### isEqual()

> **isEqual**(`value`, `other`): `boolean`

Performs a deep comparison between two values to determine if they are equivalent.

**Note:** This method supports comparing arrays, array buffers, booleans, date objects, error
objects, maps, numbers, `Object` objects, regexes, sets, strings, symbols, and typed arrays.
`Object` objects are compared by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:620

---

### isEqualWith()

> **isEqualWith**(`value`, `other`, `customizer`?): `boolean`

This method is like `_.isEqual` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with up to seven arguments: (objValue, othValue [, index|key, object,
other, stack]).

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

• **customizer?**: [`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:666

---

### isInteger()

> **isInteger**(`value`?): `boolean`

Checks if `value` is an integer.

**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).

#### Parameters

• **value?**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:773

---

### isLength()

> **isLength**(`value`?): `boolean`

Checks if `value` is a valid array-like length.

**Note:** This function is loosely based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

• **value?**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:811

---

### isMatch()

> **isMatch**(`object`, `source`): `boolean`

Performs a deep comparison between `object` and `source` to determine if `object` contains
equivalent property values.

**Note:** This method supports comparing the same values as `_.isEqual`.

#### Parameters

• **object**: `object`

The object to inspect.

• **source**: `object`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:869

---

### isMatchWith()

> **isMatchWith**(`object`, `source`, `customizer`?): `boolean`

This method is like `_.isMatch` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with three arguments: (objValue, srcValue, index|key, object, source).

#### Parameters

• **object**: `object`

The object to inspect.

• **source**: `object`

The object of property values to match.

• **customizer?**: [`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:915

---

### isNil()

> **isNil**(`value`): value is undefined \| null

Checks if `value` is `null` or `undefined`.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

value is undefined \| null

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:994

---

### isObjectLike()

> **isObjectLike**(`value`?): `boolean`

Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof`
result of "object".

#### Parameters

• **value?**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1100

---

### isSafeInteger()

> **isSafeInteger**(`value`): `boolean`

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754 double precision number
which isn't the result of a rounded unsafe integer.

**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1186

---

### isSymbol()

> **isSymbol**(`value`): `value is symbol`

Checks if `value` is classified as a `Symbol` primitive or object.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1260

---

### toFinite()

> **toFinite**(`value`): `number`

Converts `value` to a finite number.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1491

---

### toInteger()

> **toInteger**(`value`): `number`

Converts `value` to an integer.

**Note:** This function is loosely based on
[`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1529

---

### toLength()

> **toLength**(`value`): `number`

Converts `value` to an integer suitable for use as the length of an array-like object.

**Note:** This method is based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1568

---

### toNumber()

> **toNumber**(`value`): `number`

Converts `value` to a number.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1604

---

### toSafeInteger()

> **toSafeInteger**(`value`): `number`

Converts `value` to a safe integer. A safe integer can be compared and represented correctly.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1664

---

### toString()

> **toString**(`value`): `string`

Converts `value` to a string if it's not one. An empty string is returned for `null` and `undefined`
values. The sign of `-0` is preserved.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:1698

## Math

### max()

> **max**\<`T`\>(`collection`): `undefined` \| `T`

Computes the maximum value of `array`. If `array` is empty or falsey `undefined` is returned.

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

#### Returns

`undefined` \| `T`

Returns the maximum value.

#### Source

node_modules/@types/lodash/common/math.d.ts:104

---

### maxBy()

> **maxBy**\<`T`\>(`collection`, `iteratee`?): `undefined` \| `T`

This method is like `_.max` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`undefined` \| `T`

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

#### Source

node_modules/@types/lodash/common/math.d.ts:140

---

### mean()

> **mean**(`collection`): `number`

Computes the mean of the values in `array`.

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`\>

#### Returns

`number`

Returns the mean.

#### Example

```ts
_.mean([4, 2, 8, 6]);
// => 5
```

#### Source

node_modules/@types/lodash/common/math.d.ts:167

---

### meanBy()

> **meanBy**\<`T`\>(`collection`, `iteratee`?): `number`

Computes the mean of the provided properties of the objects in the `array`

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`number`

Returns the mean.

#### Example

```ts
_.mean([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n');
// => 5
```

#### Source

node_modules/@types/lodash/common/math.d.ts:195

---

### min()

> **min**\<`T`\>(`collection`): `undefined` \| `T`

Computes the minimum value of `array`. If `array` is empty or falsey `undefined` is returned.

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

#### Returns

`undefined` \| `T`

Returns the minimum value.

#### Source

node_modules/@types/lodash/common/math.d.ts:219

---

### minBy()

> **minBy**\<`T`\>(`collection`, `iteratee`?): `undefined` \| `T`

This method is like `_.min` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

#### Returns

`undefined` \| `T`

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

#### Source

node_modules/@types/lodash/common/math.d.ts:255

---

### subtract()

> **subtract**(`minuend`, `subtrahend`): `number`

Subtract two numbers.

#### Parameters

• **minuend**: `number`

The first number in a subtraction.

• **subtrahend**: `number`

The second number in a subtraction.

#### Returns

`number`

Returns the difference.

#### Example

```ts
_.subtract(6, 4);
// => 2
```

#### Source

node_modules/@types/lodash/common/math.d.ts:328

---

### sum()

> **sum**(`collection`): `number`

Computes the sum of the values in `array`.

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`\>

#### Returns

`number`

Returns the sum.

#### Example

```ts
_.sum([4, 2, 8, 6]);
// => 20
```

#### Source

node_modules/@types/lodash/common/math.d.ts:355

---

### sumBy()

> **sumBy**\<`T`\>(`collection`, `iteratee`?): `number`

This method is like `_.sum` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the value to be summed. The iteratee is invoked with one argument: (value).

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: `string` \| (`value`) => `number`

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

#### Source

node_modules/@types/lodash/common/math.d.ts:391

## Number

### clamp()

#### clamp(number, lower, upper)

> **clamp**(`number`, `lower`?, `upper`?): `number`

Clamps `number` within the inclusive `lower` and `upper` bounds.

##### Parameters

• **number**: `number`

The number to clamp.

• **lower?**: `number`

The lower bound.

• **upper?**: `number`

The upper bound.

##### Returns

`number`

Returns the clamped number.

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

##### Source

node_modules/@types/lodash/common/number.d.ts:34

#### clamp(number, upper)

> **clamp**(`number`, `upper`): `number`

##### Parameters

• **number**: `number`

• **upper**: `number`

##### Returns

`number`

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:38

## Object

### assign()

#### assign(object, source)

> **assign**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Assigns own enumerable properties of source objects to the destination object. Source objects are
applied from left to right. Subsequent sources overwrite property assignments of previous sources.

**Note:** This method mutates `object` and is loosely based on
[`Object.assign`](https://mdn.io/Object/assign).

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

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

##### Source

node_modules/@types/lodash/common/object.d.ts:33

#### assign(object, source1, source2)

> **assign**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:37

#### assign(object, source1, source2, source3)

> **assign**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:41

#### assign(object, source1, source2, source3, source4)

> **assign**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:45

#### assign(object)

> **assign**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:49

#### assign(object, otherArgs)

> **assign**(`object`, ...`otherArgs`): `any`

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`any`

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:53

---

### assignIn()

#### assignIn(object, source)

> **assignIn**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

This method is like `_.assign` except that it iterates over own and inherited source properties.

**Note:** This method mutates `object`.

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

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

##### Source

node_modules/@types/lodash/common/object.d.ts:135

#### assignIn(object, source1, source2)

> **assignIn**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:139

#### assignIn(object, source1, source2, source3)

> **assignIn**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:143

#### assignIn(object, source1, source2, source3, source4)

> **assignIn**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:147

#### assignIn(object)

> **assignIn**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:151

#### assignIn(object, otherArgs)

> **assignIn**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`TResult`

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:155

---

### assignInWith()

#### assignInWith(object, source, customizer)

> **assignInWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`?): `TObject` & `TSource`

This method is like `_.assignIn` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

• **customizer?**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

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

##### Source

node_modules/@types/lodash/common/object.d.ts:236

#### assignInWith(object, source1, source2, customizer)

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`,
> `customizer`): `TObject` & `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:240

#### assignInWith(object, source1, source2, source3, customizer)

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:244

#### assignInWith(object, source1, source2, source3, source4, customizer)

> **assignInWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:248

#### assignInWith(object)

> **assignInWith**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:252

#### assignInWith(object, otherArgs)

> **assignInWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`TResult`

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:256

---

### assignWith()

#### assignWith(object, source, customizer)

> **assignWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`?): `TObject` & `TSource`

This method is like `_.assign` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

• **customizer?**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

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

##### Source

node_modules/@types/lodash/common/object.d.ts:335

#### assignWith(object, source1, source2, customizer)

> **assignWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:339

#### assignWith(object, source1, source2, source3, customizer)

> **assignWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:343

#### assignWith(object, source1, source2, source3, source4, customizer)

> **assignWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:347

#### assignWith(object)

> **assignWith**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:351

#### assignWith(object, otherArgs)

> **assignWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`TResult`

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:355

---

### functions()

> **functions**(`object`): `string`[]

Creates an array of function property names from own enumerable properties of `object`.

#### Parameters

• **object**: `any`

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

#### Source

node_modules/@types/lodash/common/object.d.ts:975

---

### functionsIn()

> **functionsIn**\<`T`\>(`object`): `string`[]

Creates an array of function property names from own and inherited enumerable properties of
`object`.

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **object**: `any`

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

#### Source

node_modules/@types/lodash/common/object.d.ts:1009

---

### has()

#### has(object, path)

> **has**\<`T`, `K`\>(`object`, `path`):
> `object is T & { [P in PropertyName]: P extends keyof T ? T[P<P>] : Record<string, unknown> extends T ? T[keyof T] : unknown } & Object`

Checks if `path` is a direct property of `object`.

##### Type parameters

• **T**

• **K** _extends_ [`PropertyName`](../type-aliases/PropertyName.md)

##### Parameters

• **object**: `T`

The object to query.

• **path**: `K`

The path to check.

##### Returns

`object is T & { [P in PropertyName]: P extends keyof T ? T[P<P>] : Record<string, unknown> extends T ? T[keyof T] : unknown } & Object`

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

##### Source

node_modules/@types/lodash/common/object.d.ts:1331

#### has(object, path)

> **has**\<`T`\>(`object`, `path`): `boolean`

##### Type parameters

• **T**

##### Parameters

• **object**: `T`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/object.d.ts:1332

---

### hasIn()

> **hasIn**\<`T`\>(`object`, `path`): `boolean`

Checks if `path` is a direct or inherited property of `object`.

#### Type parameters

• **T**

#### Parameters

• **object**: `T`

The object to query.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

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

#### Source

node_modules/@types/lodash/common/object.d.ts:1370

---

### merge()

#### merge(object, source)

> **merge**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Recursively merges own and inherited enumerable properties of source objects into the destination
object, skipping source properties that resolve to `undefined`. Array and plain object properties
are merged recursively. Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property assignments of previous
sources.

**Note:** This method mutates `object`.

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

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

##### Source

node_modules/@types/lodash/common/object.d.ts:1777

#### merge(object, source1, source2)

> **merge**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1781

#### merge(object, source1, source2, source3)

> **merge**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1785

#### merge(object, source1, source2, source3, source4)

> **merge**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1789

#### merge(object, otherArgs)

> **merge**(`object`, ...`otherArgs`): `any`

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`any`

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1793

---

### mergeWith()

#### mergeWith(object, source, customizer)

> **mergeWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

This method is like `_.merge` except that it accepts `customizer` which is invoked to produce the
merged values of the destination and source properties. If `customizer` returns `undefined` merging
is handled by the method instead. The `customizer` is invoked with seven arguments: (objValue,
srcValue, key, object, source, stack).

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

• **customizer**

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

##### Source

node_modules/@types/lodash/common/object.d.ts:1876

#### mergeWith(object, source1, source2, customizer)

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1880

#### mergeWith(object, source1, source2, source3, customizer)

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1884

#### mergeWith(object, source1, source2, source3, source4, customizer)

> **mergeWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1888

#### mergeWith(object, otherArgs)

> **mergeWith**(`object`, ...`otherArgs`): `any`

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`any`

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1892

---

### omit()

#### omit(object, paths)

> **omit**\<`T`, `K`\>(`object`, ...`paths`?): `Pick`\<`T`, `Exclude`\<keyof `T`,
> `K`\[`number`\]\>\>

The opposite of `_.pick`; this method creates an object composed of the own and inherited enumerable
properties of `object` that are not omitted.

##### Type parameters

• **T** _extends_ `object`

• **K** _extends_ [`PropertyName`](../type-aliases/PropertyName.md)[]

##### Parameters

• **object**: `undefined` \| `null` \| `T`

The source object.

• ...**paths?**: `K`

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

##### Source

node_modules/@types/lodash/common/object.d.ts:1955

#### omit(object, paths)

> **omit**\<`T`, `K`\>(`object`, ...`paths`): [`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>

##### Type parameters

• **T** _extends_ `object`

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• ...**paths**: [`Many`](../type-aliases/Many.md)\<`K`\>[]

##### Returns

[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>

##### See

\_.omit

##### Source

node_modules/@types/lodash/common/object.d.ts:1962

#### omit(object, paths)

> **omit**\<`T`\>(`object`, ...`paths`): `Partial`\<`T`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• ...**paths**:
[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

##### Returns

`Partial`\<`T`\>

##### See

\_.omit

##### Source

node_modules/@types/lodash/common/object.d.ts:1966

---

### omitBy()

#### omitBy(object, predicate)

> **omitBy**\<`T`\>(`object`, `predicate`?): [`Dictionary`](Dictionary.md)\<`T`\>

The opposite of `_.pickBy`; this method creates an object composed of the own and inherited
enumerable properties of `object` that `predicate` doesn't return truthy for.

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\>

The source object.

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/object.d.ts:2017

#### omitBy(object, predicate)

> **omitBy**\<`T`\>(`object`, `predicate`?): [`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### See

\_.omitBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2021

#### omitBy(object, predicate)

> **omitBy**\<`T`\>(`object`, `predicate`): `Partial`\<`T`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **predicate**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

`Partial`\<`T`\>

##### See

\_.omitBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2025

---

### pick()

#### pick(object, props)

> **pick**\<`T`, `U`\>(`object`, ...`props`?): `Pick`\<`T`, `U`\>

Creates an object composed of the picked `object` properties.

##### Type parameters

• **T** _extends_ `object`

• **U** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `T`

The source object.

• ...**props?**: [`Many`](../type-aliases/Many.md)\<`U`\>[]

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

##### Source

node_modules/@types/lodash/common/object.d.ts:2067

#### pick(object, props)

> **pick**\<`T`\>(`object`, ...`props`): `Partial`\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• ...**props**:
[`Many`](../type-aliases/Many.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>[]

##### Returns

`Partial`\<`T`\>

##### See

\_.pick

##### Source

node_modules/@types/lodash/common/object.d.ts:2071

---

### pickBy()

#### pickBy(object, predicate)

> **pickBy**\<`T`, `S`\>(`object`, `predicate`?): [`Dictionary`](Dictionary.md)\<`S`\>

Creates an object composed of the `object` properties `predicate` returns truthy for. The predicate
is invoked with two arguments: (value, key).

##### Type parameters

• **T**

• **S**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\>

The source object.

• **predicate?**: [`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`,
`S`\>

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

##### Source

node_modules/@types/lodash/common/object.d.ts:2109

#### pickBy(object, predicate)

> **pickBy**\<`T`, `S`\>(`object`, `predicate`): [`NumericDictionary`](NumericDictionary.md)\<`S`\>

##### Type parameters

• **T**

• **S**

##### Parameters

• **object**: `undefined` \| `null` \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **predicate**: [`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`,
`S`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`S`\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2113

#### pickBy(object, predicate)

> **pickBy**\<`T`\>(`object`, `predicate`?): [`Dictionary`](Dictionary.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\>

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2117

#### pickBy(object, predicate)

> **pickBy**\<`T`\>(`object`, `predicate`?): [`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2121

#### pickBy(object, predicate)

> **pickBy**\<`T`\>(`object`, `predicate`?): `Partial`\<`T`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

`Partial`\<`T`\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2125

---

### updateWith()

#### updateWith(object, path, updater, customizer)

> **updateWith**\<`T`\>(`object`, `path`, `updater`, `customizer`?): `T`

This method is like `_.update` except that it accepts `customizer` which is invoked to produce the
objects of `path`. If `customizer` returns `undefined` path creation is handled by the method
instead. The `customizer` is invoked with three arguments: (nsValue, key, nsObject).

**Note:** This method mutates `object`.

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `T`

The object to modify.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

• **updater**

The function to produce the updated value.

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

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

##### Source

node_modules/@types/lodash/common/object.d.ts:2466

#### updateWith(object, path, updater, customizer)

> **updateWith**\<`T`, `TResult`\>(`object`, `path`, `updater`, `customizer`?): `TResult`

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **object**: `T`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`TResult`

##### See

\_.updateWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2470

## Other

### VERSION

> **VERSION**: `string`

The semantic version number.

#### Source

node_modules/@types/lodash/common/common.d.ts:105

---

### bind

> **bind**: [`FunctionBind`](FunctionBind.md)

Creates a function that invokes func with the this binding of thisArg and prepends any additional
\_.bind arguments to those provided to the bound function.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
for partially applied arguments.

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

#### Param

The function to bind.

#### Param

The this binding of func.

#### Param

The arguments to be partially applied.

#### Source

node_modules/@types/lodash/common/function.d.ts:93

---

### bindKey

> **bindKey**: [`FunctionBindKey`](FunctionBindKey.md)

Creates a function that invokes the method at object[key] and prepends any additional \_.bindKey
arguments to those provided to the bound function.

This method differs from \_.bind by allowing bound functions to reference methods that may be
redefined or don’t yet exist. See Peter Michaux’s article for more details.

The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a
placeholder for partially applied arguments.

#### Param

The object the method belongs to.

#### Param

The key of the method.

#### Param

The arguments to be partially applied.

#### Source

node_modules/@types/lodash/common/function.d.ts:127

---

### curry

> **curry**: [`Curry`](Curry.md)

#### Source

node_modules/@types/lodash/common/function.d.ts:151

---

### curryRight

> **curryRight**: [`CurryRight`](CurryRight.md)

#### Source

node_modules/@types/lodash/common/function.d.ts:331

---

### each()

> **each**: \<`T`\>(`collection`, `iteratee`?) => `T`[](`collection`, `iteratee`?) =>
> `string`\<`T`\>(`collection`, `iteratee`?) =>
> [`List`](../type-aliases/List.md)\<`T`\>\<`T`\>(`collection`, `iteratee`?) => `T`\<`T`,
> `TArray`\>(`collection`, `iteratee`?) => `TArray`\<`TString`\>(`collection`, `iteratee`?) =>
> `TString`\<`T`, `TList`\>(`collection`, `iteratee`?) => `TList`\<`T`\>(`collection`, `iteratee`?)
> => `undefined` \| `null` \| `T`

#### See

\_.forEach

#### Type parameters

• **T**

#### Parameters

• **collection**: `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

#### Returns

`T`[]

#### Parameters

• **collection**: `string`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`string`

#### Type parameters

• **T**

#### Parameters

• **collection**: [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`List`](../type-aliases/List.md)\<`T`\>

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **collection**: `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`T`

#### Type parameters

• **T**

• **TArray** _extends_ `undefined` \| `null` \| `T`[]

#### Parameters

• **collection**: `TArray` & `undefined` \| `null` \| `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

#### Returns

`TArray`

#### Type parameters

• **TString** _extends_ `undefined` \| `null` \| `string`

#### Parameters

• **collection**: `TString`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`TString`

#### Type parameters

• **T**

• **TList** _extends_ `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

#### Parameters

• **collection**: `TList` & `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`TList`

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`undefined` \| `null` \| `T`

#### Source

node_modules/@types/lodash/common/collection.d.ts:65

---

### eachRight()

> **eachRight**: \<`T`\>(`collection`, `iteratee`?) => `T`[](`collection`, `iteratee`?) =>
> `string`\<`T`\>(`collection`, `iteratee`?) =>
> [`List`](../type-aliases/List.md)\<`T`\>\<`T`\>(`collection`, `iteratee`?) => `T`\<`T`,
> `TArray`\>(`collection`, `iteratee`?) => `TArray`\<`TString`\>(`collection`, `iteratee`?) =>
> `TString`\<`T`, `TList`\>(`collection`, `iteratee`?) => `TList`\<`T`\>(`collection`, `iteratee`?)
> => `undefined` \| `null` \| `T`

#### See

\_.forEachRight

#### Type parameters

• **T**

#### Parameters

• **collection**: `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

#### Returns

`T`[]

#### Parameters

• **collection**: `string`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`string`

#### Type parameters

• **T**

#### Parameters

• **collection**: [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`List`](../type-aliases/List.md)\<`T`\>

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **collection**: `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`T`

#### Type parameters

• **T**

• **TArray** _extends_ `undefined` \| `null` \| `T`[]

#### Parameters

• **collection**: `TArray` & `undefined` \| `null` \| `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

#### Returns

`TArray`

#### Type parameters

• **TString** _extends_ `undefined` \| `null` \| `string`

#### Parameters

• **collection**: `TString`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`TString`

#### Type parameters

• **T**

• **TList** _extends_ `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

#### Parameters

• **collection**: `TList` & `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`TList`

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`undefined` \| `null` \| `T`

#### Source

node_modules/@types/lodash/common/collection.d.ts:113

---

### first()

> **first**: \<`T`\>(`array`) => `undefined` \| `T`

#### See

\_.head

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

#### Returns

`undefined` \| `T`

#### Source

node_modules/@types/lodash/common/array.d.ts:418

---

### memoize()

> **memoize**: \<`T`\>(`func`, `resolver`?) => `T` & [`MemoizedFunction`](MemoizedFunction.md)

Creates a function that memoizes the result of func. If resolver is provided it determines the cache
key for storing the result based on the arguments provided to the memoized function. By default, the
first argument provided to the memoized function is coerced to a string and used as the cache key.
The func is invoked with the this binding of the memoized function.

#### Type parameters

• **T** _extends_ (...`args`) => `any`

#### Parameters

• **func**: `T`

The function to have its output memoized.

• **resolver?**

The function to resolve the cache key.

#### Returns

`T` & [`MemoizedFunction`](MemoizedFunction.md)

#### Cache

> **Cache**: [`MapCacheConstructor`](MapCacheConstructor.md)

#### Source

node_modules/@types/lodash/common/function.d.ts:547

---

### partial

> **partial**: [`Partial`](Partial.md)

Creates a function that, when called, invokes func with any additional partial arguments prepended
to those provided to the new function. This method is similar to \_.bind except it does not alter
the this binding.

#### Param

The function to partially apply arguments to.

#### Param

Arguments to be partially applied.

#### Source

node_modules/@types/lodash/common/function.d.ts:640

---

### partialRight

> **partialRight**: [`PartialRight`](PartialRight.md)

This method is like \_.partial except that partial arguments are appended to those provided to the
new function.

#### Param

The function to partially apply arguments to.

#### Param

Arguments to be partially applied.

#### Source

node_modules/@types/lodash/common/function.d.ts:912

---

### templateSettings

> **templateSettings**: [`TemplateSettings`](TemplateSettings.md)

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

#### Source

node_modules/@types/lodash/common/common.d.ts:110

---

### add()

> **add**(`augend`, `addend`): `number`

Adds two numbers.

#### Parameters

• **augend**: `number`

The first number to add.

• **addend**: `number`

The second number to add.

#### Returns

`number`

Returns the sum.

#### Source

node_modules/@types/lodash/common/math.d.ts:11

---

### after()

> **after**\<`TFunc`\>(`n`, `func`): `TFunc`

The opposite of \_.before; this method creates a function that invokes func once it’s called n or
more times.

#### Type parameters

• **TFunc** _extends_ (...`args`) => `any`

#### Parameters

• **n**: `number`

The number of calls before func is invoked.

• **func**: `TFunc`

The function to restrict.

#### Returns

`TFunc`

Returns the new restricted function.

#### Source

node_modules/@types/lodash/common/function.d.ts:11

---

### ary()

> **ary**(`func`, `n`?): (...`args`) => `any`

Creates a function that accepts up to n arguments ignoring any additional arguments.

#### Parameters

• **func**

The function to cap arguments for.

• **n?**: `number`

The arity cap.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/function.d.ts:33

---

### at()

#### at(object, props)

> **at**\<`T`\>(`object`, ...`props`): `T`[]

Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
specified as individual arguments or as arrays of keys.

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to iterate over.

• ...**props**: [`PropertyPath`](../type-aliases/PropertyPath.md)[]

The property names or indexes of elements to pick, specified individually or in arrays.

##### Returns

`T`[]

Returns the new array of picked elements.

##### Source

node_modules/@types/lodash/common/object.d.ts:418

#### at(object, props)

> **at**\<`T`\>(`object`, ...`props`): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• ...**props**: [`Many`](../type-aliases/Many.md)\<keyof `T`\>[]

##### Returns

`T`\[keyof `T`\][]

##### See

\_.at

##### Source

node_modules/@types/lodash/common/object.d.ts:422

---

### attempt()

> **attempt**\<`TResult`\>(`func`, ...`args`): `Error` \| `TResult`

Attempts to invoke func, returning either the result or the caught error object. Any additional
arguments are provided to func when it’s invoked.

#### Type parameters

• **TResult**

#### Parameters

• **func**

The function to attempt.

• ...**args**: `any`[]

#### Returns

`Error` \| `TResult`

Returns the func result or error object.

#### Source

node_modules/@types/lodash/common/util.d.ts:11

---

### before()

> **before**\<`TFunc`\>(`n`, `func`): `TFunc`

Creates a function that invokes func, with the this binding and arguments of the created function,
while it’s called less than n times. Subsequent calls to the created function return the result of
the last func invocation.

#### Type parameters

• **TFunc** _extends_ (...`args`) => `any`

#### Parameters

• **n**: `number`

The number of calls at which func is no longer invoked.

• **func**: `TFunc`

The function to restrict.

#### Returns

`TFunc`

Returns the new restricted function.

#### Source

node_modules/@types/lodash/common/function.d.ts:57

---

### bindAll()

> **bindAll**\<`T`\>(`object`, ...`methodNames`): `T`

Binds methods of an object to the object itself, overwriting the existing method. Method names may
be specified as individual arguments or as arrays of method names. If no method names are provided
all enumerable function properties, own and inherited, of object are bound.

Note: This method does not set the "length" property of bound functions.

#### Type parameters

• **T**

#### Parameters

• **object**: `T`

The object to bind and assign the bound methods to.

• ...**methodNames**: [`Many`](../type-aliases/Many.md)\<`string`\>[]

The object method names to bind, specified as individual method names or arrays of method names.

#### Returns

`T`

Returns object.

#### Source

node_modules/@types/lodash/common/util.d.ts:39

---

### camelCase()

> **camelCase**(`string`?): `string`

Converts string to camel case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the camel cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:10

---

### capitalize()

> **capitalize**(`string`?): `string`

Converts the first character of string to upper case and the remaining to lower case.

#### Parameters

• **string?**: `string`

The string to capitalize.

#### Returns

`string`

Returns the capitalized string.

#### Source

node_modules/@types/lodash/common/string.d.ts:32

---

### castArray()

> **castArray**\<`T`\>(`value`?): `T`[]

Casts value as an array if it’s not one.

#### Type parameters

• **T**

#### Parameters

• **value?**: [`Many`](../type-aliases/Many.md)\<`T`\>

The value to inspect.

#### Returns

`T`[]

Returns the cast array.

#### Source

node_modules/@types/lodash/common/lang.d.ts:13

---

### ceil()

> **ceil**(`n`, `precision`?): `number`

Calculates n rounded up to precision.

#### Parameters

• **n**: `number`

The number to round up.

• **precision?**: `number`

The precision to round up to.

#### Returns

`number`

Returns the rounded up number.

#### Source

node_modules/@types/lodash/common/math.d.ts:34

---

### chain()

#### chain(value)

> **chain**\<`TrapAny`\>(`value`): [`CollectionChain`](CollectionChain.md)\<`any`\> &
> [`FunctionChain`](FunctionChain.md)\<`any`\> & [`ObjectChain`](ObjectChain.md)\<`any`\> &
> [`PrimitiveChain`](PrimitiveChain.md)\<`any`\> & [`StringChain`](StringChain.md)

Creates a lodash object that wraps value with explicit method chaining enabled.

##### Type parameters

• **TrapAny** _extends_ `object`

##### Parameters

• **value**: `TrapAny`

The value to wrap.

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\> & [`FunctionChain`](FunctionChain.md)\<`any`\> &
[`ObjectChain`](ObjectChain.md)\<`any`\> & [`PrimitiveChain`](PrimitiveChain.md)\<`any`\> &
[`StringChain`](StringChain.md)

Returns the new lodash wrapper instance.

##### Source

node_modules/@types/lodash/common/seq.d.ts:11

#### chain(value)

> **chain**\<`T`\>(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### Type parameters

• **T** _extends_ `undefined` \| `null`

##### Parameters

• **value**: `T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:15

#### chain(value)

> **chain**(`value`): [`StringChain`](StringChain.md)

##### Parameters

• **value**: `string`

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:19

#### chain(value)

> **chain**(`value`): [`StringNullableChain`](StringNullableChain.md)

##### Parameters

• **value**: `undefined` \| `null` \| `string`

##### Returns

[`StringNullableChain`](StringNullableChain.md)

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:23

#### chain(value)

> **chain**\<`T`\>(`value`): [`FunctionChain`](FunctionChain.md)\<`T`\>

##### Type parameters

• **T** _extends_ (...`args`) => `any`

##### Parameters

• **value**: `T`

##### Returns

[`FunctionChain`](FunctionChain.md)\<`T`\>

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:27

#### chain(value)

> **chain**\<`T`\>(`value`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type parameters

• **T** = `any`

##### Parameters

• **value**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:31

#### chain(value)

> **chain**\<`T`\>(`value`): [`ObjectChain`](ObjectChain.md)\<`T`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **value**: `undefined` \| `null` \| `T`

##### Returns

[`ObjectChain`](ObjectChain.md)\<`T`\>

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:35

#### chain(value)

> **chain**\<`T`\>(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`T`\>

##### See

\_.chain

##### Source

node_modules/@types/lodash/common/seq.d.ts:39

---

### chunk()

> **chunk**\<`T`\>(`array`, `size`?): `T`[][]

Creates an array of elements split into groups the length of size. If collection can’t be split
evenly, the final chunk will be the remaining elements.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to process.

• **size?**: `number`

The length of each chunk.

#### Returns

`T`[][]

Returns the new array containing chunks.

#### Source

node_modules/@types/lodash/common/array.d.ts:12

---

### clone()

> **clone**\<`T`\>(`value`): `T`

Creates a shallow clone of value.

Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings,
symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain
objects. An empty object is returned for uncloneable values such as error objects, functions, DOM
nodes, and WeakMaps.

#### Type parameters

• **T**

#### Parameters

• **value**: `T`

The value to clone.

#### Returns

`T`

Returns the cloned value.

#### Source

node_modules/@types/lodash/common/lang.d.ts:94

---

### cloneDeep()

> **cloneDeep**\<`T`\>(`value`): `T`

This method is like \_.clone except that it recursively clones value.

#### Type parameters

• **T**

#### Parameters

• **value**: `T`

The value to recursively clone.

#### Returns

`T`

Returns the deep cloned value.

#### Source

node_modules/@types/lodash/common/lang.d.ts:165

---

### cloneDeepWith()

#### cloneDeepWith(value, customizer)

> **cloneDeepWith**\<`T`\>(`value`, `customizer`): `any`

This method is like \_.cloneWith except that it recursively clones value.

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

The value to recursively clone.

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

The function to customize cloning.

##### Returns

`any`

Returns the deep cloned value.

##### Source

node_modules/@types/lodash/common/lang.d.ts:176

#### cloneDeepWith(value)

> **cloneDeepWith**\<`T`\>(`value`): `T`

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

##### Returns

`T`

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:180

---

### cloneWith()

#### cloneWith(value, customizer)

> **cloneWith**\<`T`, `TResult`\>(`value`, `customizer`): `TResult`

This method is like \_.clone except that it accepts customizer which is invoked to produce the
cloned value. If customizer returns undefined cloning is handled by the method instead.

##### Type parameters

• **T**

• **TResult** _extends_ `null` \| `string` \| `number` \| `boolean` \| `object`

##### Parameters

• **value**: `T`

The value to clone.

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

The function to customize cloning.

##### Returns

`TResult`

Returns the cloned value.

##### Source

node_modules/@types/lodash/common/lang.d.ts:192

#### cloneWith(value, customizer)

> **cloneWith**\<`T`, `TResult`\>(`value`, `customizer`): `T` \| `TResult`

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **value**: `T`

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `undefined`
\| `TResult`\>

##### Returns

`T` \| `TResult`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:196

#### cloneWith(value)

> **cloneWith**\<`T`\>(`value`): `T`

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

##### Returns

`T`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:200

---

### compact()

> **compact**\<`T`\>(`array`): `T`[]

Creates an array with all falsey values removed. The values false, null, 0, 0n, "", undefined, and
NaN are falsey.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T` \|
[`Falsey`](../type-aliases/Falsey.md)\>

The array to compact.

#### Returns

`T`[]

Returns the new array of filtered values.

#### Source

node_modules/@types/lodash/common/array.d.ts:34

---

### conforms()

> **conforms**\<`T`\>(`source`): (`value`) => `boolean`

Creates a function that invokes the predicate properties of `source` with the corresponding property
values of a given object, returning true if all predicates return truthy, else false.

#### Type parameters

• **T**

#### Parameters

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

`Function`

##### Parameters

• **value**: `T`

##### Returns

`boolean`

#### Source

node_modules/@types/lodash/common/util.d.ts:94

---

### conformsTo()

> **conformsTo**\<`T`\>(`object`, `source`): `boolean`

Checks if object conforms to source by invoking the predicate properties of source with the
corresponding property values of object.

Note: This method is equivalent to \_.conforms when source is partially applied.

#### Type parameters

• **T**

#### Parameters

• **object**: `T`

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

`boolean`

#### Source

node_modules/@types/lodash/common/lang.d.ts:209

---

### constant()

> **constant**\<`T`\>(`value`): () => `T`

Creates a function that returns value.

#### Type parameters

• **T**

#### Parameters

• **value**: `T`

The value to return from the new function.

#### Returns

`Function`

Returns the new function.

##### Returns

`T`

#### Source

node_modules/@types/lodash/common/util.d.ts:116

---

### countBy()

#### countBy(collection, iteratee)

> **countBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`number`\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the number of times the key was returned by
iteratee. The iteratee is invoked with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`number`\>

Returns the composed aggregate object.

##### Source

node_modules/@types/lodash/common/collection.d.ts:13

#### countBy(collection, iteratee)

> **countBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`number`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`number`\>

##### See

\_.countBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:17

---

### create()

> **create**\<`T`, `U`\>(`prototype`, `properties`?): `T` & `U`

Creates an object that inherits from the given prototype object. If a properties object is provided
its own enumerable properties are assigned to the created object.

#### Type parameters

• **T** _extends_ `object`

• **U** _extends_ `object`

#### Parameters

• **prototype**: `T`

The object to inherit from.

• **properties?**: `U`

The properties to assign to the object.

#### Returns

`T` & `U`

Returns the new object.

#### Source

node_modules/@types/lodash/common/object.d.ts:457

---

### debounce()

#### debounce(func, wait, options)

> **debounce**\<`T`\>(`func`, `wait`, `options`):
> [`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
since the last time the debounced function was invoked. The debounced function comes with a cancel
method to cancel delayed invocations and a flush method to immediately invoke them. Provide an
options object to indicate that func should be invoked on the leading and/or trailing edge of the
wait timeout. Subsequent calls to the debounced function return the result of the last func
invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the debounced function is invoked more than once during the wait timeout.

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

##### Type parameters

• **T** _extends_ (...`args`) => `any`

##### Parameters

• **func**: `T`

The function to debounce.

• **wait**: `undefined` \| `number`

The number of milliseconds to delay.

• **options**: [`DebounceSettingsLeading`](DebounceSettingsLeading.md)

The options object.

##### Returns

[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Returns the new debounced function.

##### Source

node_modules/@types/lodash/common/function.d.ts:425

#### debounce(func, wait, options)

> **debounce**\<`T`\>(`func`, `wait`?, `options`?): [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

##### Type parameters

• **T** _extends_ (...`args`) => `any`

##### Parameters

• **func**: `T`

• **wait?**: `number`

• **options?**: [`DebounceSettings`](DebounceSettings.md)

##### Returns

[`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

##### Source

node_modules/@types/lodash/common/function.d.ts:426

---

### deburr()

> **deburr**(`string`?): `string`

Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing
combining diacritical marks.

#### Parameters

• **string?**: `string`

The string to deburr.

#### Returns

`string`

Returns the deburred string.

#### Source

node_modules/@types/lodash/common/string.d.ts:55

---

### defaultTo()

#### defaultTo(value, defaultValue)

> **defaultTo**\<`T`\>(`value`, `defaultValue`): `T`

Checks `value` to determine whether a default value should be returned in its place. The
`defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

##### Type parameters

• **T**

##### Parameters

• **value**: `undefined` \| `null` \| `T`

The value to check.

• **defaultValue**: `T`

The default value.

##### Returns

`T`

Returns the resolved value.

##### Source

node_modules/@types/lodash/common/util.d.ts:141

#### defaultTo(value, defaultValue)

> **defaultTo**\<`T`, `TDefault`\>(`value`, `defaultValue`): `T` \| `TDefault`

##### Type parameters

• **T**

• **TDefault**

##### Parameters

• **value**: `undefined` \| `null` \| `T`

• **defaultValue**: `TDefault`

##### Returns

`T` \| `TDefault`

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:145

---

### defaults()

#### defaults(object, source)

> **defaults**\<`TObject`, `TSource`\>(`object`, `source`): `NonNullable`\<`TSource` & `TObject`\>

Assigns own enumerable properties of source object(s) to the destination object for all destination
properties that resolve to undefined. Once a property is set, additional values of the same property
are ignored.

Note: This method mutates object.

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: `TSource`

##### Returns

`NonNullable`\<`TSource` & `TObject`\>

The destination object.

##### Source

node_modules/@types/lodash/common/object.d.ts:483

#### defaults(object, source1, source2)

> **defaults**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`):
> `NonNullable`\<`TSource2` & `TSource1` & `TObject`\>

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

`NonNullable`\<`TSource2` & `TSource1` & `TObject`\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:487

#### defaults(object, source1, source2, source3)

> **defaults**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:491

#### defaults(object, source1, source2, source3, source4)

> **defaults**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1`
> & `TObject`\>

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

`NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `TObject`\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:495

#### defaults(object)

> **defaults**\<`TObject`\>(`object`): `NonNullable`\<`TObject`\>

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`NonNullable`\<`TObject`\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:499

#### defaults(object, sources)

> **defaults**(`object`, ...`sources`): `any`

##### Parameters

• **object**: `any`

• ...**sources**: `any`[]

##### Returns

`any`

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:503

---

### defaultsDeep()

> **defaultsDeep**(`object`, ...`sources`): `any`

This method is like \_.defaults except that it recursively assigns default properties.

#### Parameters

• **object**: `any`

The destination object.

• ...**sources**: `any`[]

The source objects.

#### Returns

`any`

Returns object.

#### Source

node_modules/@types/lodash/common/object.d.ts:564

---

### defer()

> **defer**(`func`, ...`args`): `number`

Defers invoking the func until the current call stack has cleared. Any additional arguments are
provided to func when it’s invoked.

#### Parameters

• **func**

The function to defer.

• ...**args**: `any`[]

The arguments to invoke the function with.

#### Returns

`number`

Returns the timer id.

#### Source

node_modules/@types/lodash/common/function.d.ts:463

---

### delay()

> **delay**(`func`, `wait`, ...`args`): `number`

Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s
invoked.

#### Parameters

• **func**

The function to delay.

• **wait**: `number`

The number of milliseconds to delay invocation.

• ...**args**: `any`[]

The arguments to invoke the function with.

#### Returns

`number`

Returns the timer id.

#### Source

node_modules/@types/lodash/common/function.d.ts:486

---

### difference()

> **difference**\<`T`\>(`array`, ...`values`): `T`[]

Creates an array of `array` values not included in the other provided arrays using SameValueZero for
equality comparisons. The order and references of result values are determined by the first array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to inspect.

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

The arrays of values to exclude.

#### Returns

`T`[]

Returns the new array of filtered values.

#### Source

node_modules/@types/lodash/common/array.d.ts:117

---

### differenceBy()

#### differenceBy(array, values, iteratee)

> **differenceBy**\<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

This method is like \_.difference except that it accepts iteratee which is invoked for each element
of array and values to generate the criterion by which they're compared. The order and references of
result values are determined by the first array. The iteratee is invoked with one argument: (value).

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

The array to inspect.

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

The values to exclude.

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2`\>

The iteratee invoked per element.

##### Returns

`T1`[]

Returns the new array of filtered values.

##### Source

node_modules/@types/lodash/common/array.d.ts:142

#### differenceBy(array, values1, values2, iteratee)

> **differenceBy**\<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3`\>

##### Returns

`T1`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:146

#### differenceBy(array, values1, values2, values3, iteratee)

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `values3`, `iteratee`):
> `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **values3**: [`List`](../type-aliases/List.md)\<`T4`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4`\>

##### Returns

`T1`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:150

#### differenceBy(array, values1, values2, values3, values4, iteratee)

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`array`, `values1`, `values2`, `values3`,
> `values4`, `iteratee`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **values3**: [`List`](../type-aliases/List.md)\<`T4`\>

• **values4**: [`List`](../type-aliases/List.md)\<`T5`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \|
`T5`\>

##### Returns

`T1`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:154

#### differenceBy(array, values1, values2, values3, values4, values5, iteratee)

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`array`, `values1`, `values2`, `values3`,
> `values4`, `values5`, `iteratee`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **values3**: [`List`](../type-aliases/List.md)\<`T4`\>

• **values4**: [`List`](../type-aliases/List.md)\<`T5`\>

• **values5**: [`List`](../type-aliases/List.md)\<`T6`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \|
`T5` \| `T6`\>

##### Returns

`T1`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:158

#### differenceBy(array, values1, values2, values3, values4, values5, values)

> **differenceBy**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`array`, `values1`, `values2`,
> `values3`, `values4`, `values5`, ...`values`): `T1`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

• **T7**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T1`\>

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **values2**: [`List`](../type-aliases/List.md)\<`T3`\>

• **values3**: [`List`](../type-aliases/List.md)\<`T4`\>

• **values4**: [`List`](../type-aliases/List.md)\<`T5`\>

• **values5**: [`List`](../type-aliases/List.md)\<`T6`\>

• ...**values**: ([`List`](../type-aliases/List.md)\<`T7`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T1` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \|
`T7`\>)[]

##### Returns

`T1`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:162

#### differenceBy(array, values)

> **differenceBy**\<`T`\>(`array`, ...`values`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

##### Returns

`T`[]

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:166

---

### divide()

> **divide**(`dividend`, `divisor`): `number`

Divide two numbers.

#### Parameters

• **dividend**: `number`

The first number in a division.

• **divisor**: `number`

The second number in a division.

#### Returns

`number`

Returns the quotient.

#### Source

node_modules/@types/lodash/common/math.d.ts:57

---

### drop()

> **drop**\<`T`\>(`array`, `n`?): `T`[]

Creates a slice of array with n elements dropped from the beginning.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **n?**: `number`

The number of elements to drop.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:247

---

### dropRight()

> **dropRight**\<`T`\>(`array`, `n`?): `T`[]

Creates a slice of array with n elements dropped from the end.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **n?**: `number`

The number of elements to drop.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:269

---

### dropRightWhile()

> **dropRightWhile**\<`T`\>(`array`, `predicate`?): `T`[]

Creates a slice of array excluding elements dropped from the end. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:292

---

### dropWhile()

> **dropWhile**\<`T`\>(`array`, `predicate`?): `T`[]

Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:315

---

### endsWith()

> **endsWith**(`string`?, `target`?, `position`?): `boolean`

Checks if string ends with the given target string.

#### Parameters

• **string?**: `string`

The string to search.

• **target?**: `string`

The string to search for.

• **position?**: `number`

The position to search from.

#### Returns

`boolean`

Returns true if string ends with target, else false.

#### Source

node_modules/@types/lodash/common/string.d.ts:79

---

### entries()

#### entries(object)

> **entries**\<`T`\>(`object`?): [`string`, `T`][]

##### Type parameters

• **T**

##### Parameters

• **object?**: [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

[`string`, `T`][]

##### See

\_.toPairs

##### Source

node_modules/@types/lodash/common/object.d.ts:582

#### entries(object)

> **entries**(`object`?): [`string`, `any`][]

##### Parameters

• **object?**: `object`

##### Returns

[`string`, `any`][]

##### See

\_.entries

##### Source

node_modules/@types/lodash/common/object.d.ts:586

---

### entriesIn()

#### entriesIn(object)

> **entriesIn**\<`T`\>(`object`?): [`string`, `T`][]

##### Type parameters

• **T**

##### Parameters

• **object?**: [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

[`string`, `T`][]

##### See

\_.entriesIn

##### Source

node_modules/@types/lodash/common/object.d.ts:616

#### entriesIn(object)

> **entriesIn**(`object`?): [`string`, `any`][]

##### Parameters

• **object?**: `object`

##### Returns

[`string`, `any`][]

##### See

\_.entriesIn

##### Source

node_modules/@types/lodash/common/object.d.ts:620

---

### escape()

> **escape**(`string`?): `string`

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

• **string?**: `string`

The string to escape.

#### Returns

`string`

Returns the escaped string.

#### Source

node_modules/@types/lodash/common/string.d.ts:112

---

### escapeRegExp()

> **escapeRegExp**(`string`?): `string`

Escapes the RegExp special characters "^", "$", "\", ".", "\*", "+", "?", "(", ")", "[", "]", "{", "}",
and "|" in string.

#### Parameters

• **string?**: `string`

The string to escape.

#### Returns

`string`

Returns the escaped string.

#### Source

node_modules/@types/lodash/common/string.d.ts:135

---

### every()

#### every(collection, predicate)

> **every**\<`T`\>(`collection`, `predicate`?): `boolean`

Checks if predicate returns truthy for all elements of collection. Iteration is stopped once
predicate returns falsey. The predicate is invoked with three arguments: (value, index|key,
collection).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### Returns

`boolean`

Returns true if all elements pass the predicate check, else false.

##### Source

node_modules/@types/lodash/common/collection.d.ts:166

#### every(collection, predicate)

> **every**\<`T`\>(`collection`, `predicate`?): `boolean`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

##### Returns

`boolean`

##### See

\_.every

##### Source

node_modules/@types/lodash/common/collection.d.ts:170

---

### extend()

#### extend(object, source)

> **extend**\<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

• **source**: `TSource`

##### Returns

`TObject` & `TSource`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:650

#### extend(object, source1, source2)

> **extend**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
> `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:654

#### extend(object, source1, source2, source3)

> **extend**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:658

#### extend(object, source1, source2, source3, source4)

> **extend**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:662

#### extend(object)

> **extend**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:666

#### extend(object, otherArgs)

> **extend**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`TResult`

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:670

---

### extendWith()

#### extendWith(object, source, customizer)

> **extendWith**\<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

##### Type parameters

• **TObject**

• **TSource**

##### Parameters

• **object**: `TObject`

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:728

#### extendWith(object, source1, source2, customizer)

> **extendWith**\<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
> `TObject` & `TSource1` & `TSource2`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:732

#### extendWith(object, source1, source2, source3, customizer)

> **extendWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
> `source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:736

#### extendWith(object, source1, source2, source3, source4, customizer)

> **extendWith**\<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
> `source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`

##### Type parameters

• **TObject**

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **object**: `TObject`

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:740

#### extendWith(object)

> **extendWith**\<`TObject`\>(`object`): `TObject`

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

##### Returns

`TObject`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:744

#### extendWith(object, otherArgs)

> **extendWith**\<`TResult`\>(`object`, ...`otherArgs`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `any`

• ...**otherArgs**: `any`[]

##### Returns

`TResult`

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:748

---

### fill()

#### fill(array, value)

> **fill**\<`T`\>(`array`, `value`): `T`[]

Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| `any`[]

The array to fill.

• **value**: `T`

The value to fill array with.

##### Returns

`T`[]

Returns array.

##### Source

node_modules/@types/lodash/common/array.d.ts:341

#### fill(array, value)

> **fill**\<`T`\>(`array`, `value`): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`\>

• **value**: `T`

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.fill

##### Source

node_modules/@types/lodash/common/array.d.ts:345

#### fill(array, value, start, end)

> **fill**\<`T`, `U`\>(`array`, `value`, `start`?, `end`?): (`T` \| `U`)[]

##### Type parameters

• **T**

• **U**

##### Parameters

• **array**: `undefined` \| `null` \| `U`[]

• **value**: `T`

• **start?**: `number`

• **end?**: `number`

##### Returns

(`T` \| `U`)[]

##### See

\_.fill

##### Source

node_modules/@types/lodash/common/array.d.ts:349

#### fill(array, value, start, end)

> **fill**\<`T`, `U`\>(`array`, `value`, `start`?, `end`?): [`List`](../type-aliases/List.md)\<`T`
> \| `U`\>

##### Type parameters

• **T**

• **U**

##### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`U`\>

• **value**: `T`

• **start?**: `number`

• **end?**: `number`

##### Returns

[`List`](../type-aliases/List.md)\<`T` \| `U`\>

##### See

\_.fill

##### Source

node_modules/@types/lodash/common/array.d.ts:353

---

### filter()

#### filter(collection, predicate)

> **filter**(`collection`, `predicate`?): `string`[]

Iterates over elements of collection, returning an array of all elements predicate returns truthy
for. The predicate is invoked with three arguments: (value, index|key, collection).

##### Parameters

• **collection**: `undefined` \| `null` \| `string`

The collection to iterate over.

• **predicate?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

The function invoked per iteration.

##### Returns

`string`[]

Returns the new filtered array.

##### Source

node_modules/@types/lodash/common/collection.d.ts:205

#### filter(collection, predicate)

> **filter**\<`T`, `S`\>(`collection`, `predicate`): `S`[]

##### Type parameters

• **T**

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

`S`[]

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:209

#### filter(collection, predicate)

> **filter**\<`T`\>(`collection`, `predicate`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`[]

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:213

#### filter(collection, predicate)

> **filter**\<`T`, `S`\>(`collection`, `predicate`): `S`[]

##### Type parameters

• **T** _extends_ `object`

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

`S`[]

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:217

#### filter(collection, predicate)

> **filter**\<`T`\>(`collection`, `predicate`?): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

##### Returns

`T`\[keyof `T`\][]

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:221

---

### find()

#### find(collection, predicate, fromIndex)

> **find**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex`?): `undefined` \| `S`

Iterates over elements of collection, returning the first element predicate returns truthy for. The
predicate is invoked with three arguments: (value, index|key, collection).

##### Type parameters

• **T**

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to search.

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

The function invoked per iteration.

• **fromIndex?**: `number`

The index to search from.

##### Returns

`undefined` \| `S`

Returns the matched element, else undefined.

##### Source

node_modules/@types/lodash/common/collection.d.ts:291

#### find(collection, predicate, fromIndex)

> **find**\<`T`\>(`collection`, `predicate`?, `fromIndex`?): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:295

#### find(collection, predicate, fromIndex)

> **find**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **T** _extends_ `object`

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:299

#### find(collection, predicate, fromIndex)

> **find**\<`T`\>(`collection`, `predicate`?, `fromIndex`?): `undefined` \| `T`\[keyof `T`\]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:303

---

### findIndex()

> **findIndex**\<`T`\>(`array`, `predicate`?, `fromIndex`?): `number`

This method is like \_.find except that it returns the index of the first element predicate returns
truthy for instead of the element itself.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

• **fromIndex?**: `number`

The index to search from.

#### Returns

`number`

Returns the index of the found element, else -1.

#### Source

node_modules/@types/lodash/common/array.d.ts:377

---

### findKey()

> **findKey**\<`T`\>(`object`, `predicate`?): `undefined` \| `string`

This method is like \_.find except that it returns the key of the first element predicate returns
truthy for instead of the element itself.

#### Type parameters

• **T**

#### Parameters

• **object**: `undefined` \| `null` \| `T`

The object to search.

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`undefined` \| `string`

Returns the key of the matched element, else undefined.

#### Source

node_modules/@types/lodash/common/object.d.ts:811

---

### findLast()

#### findLast(collection, predicate, fromIndex)

> **findLast**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex`?): `undefined` \| `S`

This method is like \_.find except that it iterates over elements of a collection from right to
left.

##### Type parameters

• **T**

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

Searches for a value in this list.

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

The function called per iteration.

• **fromIndex?**: `number`

The index to search from.

##### Returns

`undefined` \| `S`

The found element, else undefined.

##### Source

node_modules/@types/lodash/common/collection.d.ts:354

#### findLast(collection, predicate, fromIndex)

> **findLast**\<`T`\>(`collection`, `predicate`?, `fromIndex`?): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:358

#### findLast(collection, predicate, fromIndex)

> **findLast**\<`T`, `S`\>(`collection`, `predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **T** _extends_ `object`

• **S**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:362

#### findLast(collection, predicate, fromIndex)

> **findLast**\<`T`\>(`collection`, `predicate`?, `fromIndex`?): `undefined` \| `T`\[keyof `T`\]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:366

---

### findLastIndex()

> **findLastIndex**\<`T`\>(`array`, `predicate`?, `fromIndex`?): `number`

This method is like \_.findIndex except that it iterates over elements of collection from right to
left.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

• **fromIndex?**: `number`

The index to search from.

#### Returns

`number`

Returns the index of the found element, else -1.

#### Source

node_modules/@types/lodash/common/array.d.ts:400

---

### findLastKey()

> **findLastKey**\<`T`\>(`object`, `predicate`?): `undefined` \| `string`

This method is like \_.findKey except that it iterates over elements of a collection in the opposite
order.

#### Type parameters

• **T**

#### Parameters

• **object**: `undefined` \| `null` \| `T`

The object to search.

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`undefined` \| `string`

Returns the key of the matched element, else undefined.

#### Source

node_modules/@types/lodash/common/object.d.ts:833

---

### flatMap()

#### flatMap(collection)

> **flatMap**\<`T`\>(`collection`): `T`[]

Creates an array of flattened values by running each element in collection through iteratee and
concating its result to the other mapped values. The iteratee is invoked with three arguments:
(value, index|key, collection).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \|
[`Dictionary`](Dictionary.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\> \|
[`NumericDictionary`](NumericDictionary.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\>

The collection to iterate over.

##### Returns

`T`[]

Returns the new flattened array.

##### Source

node_modules/@types/lodash/common/collection.d.ts:418

#### flatMap(collection)

> **flatMap**(`collection`): `any`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

##### Returns

`any`[]

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:422

#### flatMap(collection, iteratee)

> **flatMap**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:426

#### flatMap(collection, iteratee)

> **flatMap**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

`TResult`[]

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:430

#### flatMap(collection, iteratee)

> **flatMap**(`collection`, `iteratee`): `any`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `string`

##### Returns

`any`[]

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:434

#### flatMap(collection, iteratee)

> **flatMap**(`collection`, `iteratee`): `boolean`[]

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **iteratee**: `object`

##### Returns

`boolean`[]

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:438

---

### flatten()

> **flatten**\<`T`\>(`array`): `T`[]

Flattens `array` a single level deep.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \|
[`List`](../type-aliases/List.md)\<[`Many`](../type-aliases/Many.md)\<`T`\>\>

The array to flatten.

#### Returns

`T`[]

Returns the new flattened array.

#### Source

node_modules/@types/lodash/common/array.d.ts:459

---

### flattenDeep()

> **flattenDeep**\<`T`\>(`array`): [`Flat`](../type-aliases/Flat.md)\<`T`\>[]

Recursively flattens a nested array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>

The array to recursively flatten.

#### Returns

[`Flat`](../type-aliases/Flat.md)\<`T`\>[]

Returns the new flattened array.

#### Source

node_modules/@types/lodash/common/array.d.ts:501

---

### flattenDepth()

> **flattenDepth**\<`T`\>(`array`, `depth`?): `T`[]

Recursively flatten array up to depth times.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`T`\>

The array to recursively flatten.

• **depth?**: `number`

#### Returns

`T`[]

Returns the new flattened array.

#### Source

node_modules/@types/lodash/common/array.d.ts:523

---

### floor()

> **floor**(`n`, `precision`?): `number`

Calculates n rounded down to precision.

#### Parameters

• **n**: `number`

The number to round down.

• **precision?**: `number`

The precision to round down to.

#### Returns

`number`

Returns the rounded down number.

#### Source

node_modules/@types/lodash/common/math.d.ts:80

---

### flow()

#### flow(f1, f2, f3, f4, f5, f6, f7)

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`,
> `f7`): (...`args`) => `R7`

Creates a function that returns the result of invoking the provided functions with the this binding
of the created function, where each successive invocation is supplied the return value of the
previous.

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

• **R7**

##### Parameters

• **f1**

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

• **f7**

##### Returns

`Function`

Returns the new function.

###### Parameters

• ...**args**: `A`

###### Returns

`R7`

##### Source

node_modules/@types/lodash/common/util.d.ts:176

#### flow(f1, f2, f3, f4, f5, f6, f7, func)

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`,
> `f7`, ...`func`): (...`args`) => `any`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

• **R7**

##### Parameters

• **f1**

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

• **f7**

• ...**func**: [`Many`](../type-aliases/Many.md)\<(`a`) => `any`\>[]

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`any`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:180

#### flow(f1, f2, f3, f4, f5, f6)

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`):
> (...`args`) => `R6`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

##### Parameters

• **f1**

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R6`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:184

#### flow(f1, f2, f3, f4, f5)

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f1`, `f2`, `f3`, `f4`, `f5`): (...`args`) => `R5`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

##### Parameters

• **f1**

• **f2**

• **f3**

• **f4**

• **f5**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R5`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:188

#### flow(f1, f2, f3, f4)

> **flow**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f1`, `f2`, `f3`, `f4`): (...`args`) => `R4`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

##### Parameters

• **f1**

• **f2**

• **f3**

• **f4**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R4`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:192

#### flow(f1, f2, f3)

> **flow**\<`A`, `R1`, `R2`, `R3`\>(`f1`, `f2`, `f3`): (...`args`) => `R3`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

##### Parameters

• **f1**

• **f2**

• **f3**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R3`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:196

#### flow(f1, f2)

> **flow**\<`A`, `R1`, `R2`\>(`f1`, `f2`): (...`args`) => `R2`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

##### Parameters

• **f1**

• **f2**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R2`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:200

#### flow(func)

> **flow**(...`func`): (...`args`) => `any`

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

`Function`

###### Parameters

• ...**args**: `any`[]

###### Returns

`any`

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:204

---

### flowRight()

#### flowRight(f7, f6, f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f7`, `f6`, `f5`, `f4`, `f3`, `f2`,
> `f1`): (...`args`) => `R7`

This method is like \_.flow except that it creates a function that invokes the provided functions
from right to left.

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

• **R7**

##### Parameters

• **f7**

• **f6**

• **f5**

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

`Function`

Returns the new function.

###### Parameters

• ...**args**: `A`

###### Returns

`R7`

##### Source

node_modules/@types/lodash/common/util.d.ts:283

#### flowRight(f6, f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f6`, `f5`, `f4`, `f3`, `f2`, `f1`):
> (...`args`) => `R6`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

##### Parameters

• **f6**

• **f5**

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R6`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:287

#### flowRight(f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f5`, `f4`, `f3`, `f2`, `f1`): (...`args`) =>
> `R5`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

##### Parameters

• **f5**

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R5`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:291

#### flowRight(f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f4`, `f3`, `f2`, `f1`): (...`args`) => `R4`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

##### Parameters

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R4`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:295

#### flowRight(f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`\>(`f3`, `f2`, `f1`): (...`args`) => `R3`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

##### Parameters

• **f3**

• **f2**

• **f1**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R3`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:299

#### flowRight(f2, f1)

> **flowRight**\<`A`, `R1`, `R2`\>(`f2`, `f1`): (...`args`) => `R2`

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

##### Parameters

• **f2**

• **f1**

##### Returns

`Function`

###### Parameters

• ...**args**: `A`

###### Returns

`R2`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:303

#### flowRight(func)

> **flowRight**(...`func`): (...`args`) => `any`

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

`Function`

###### Parameters

• ...**args**: `any`[]

###### Returns

`any`

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:307

---

### forEach()

#### forEach(collection, iteratee)

> **forEach**\<`T`\>(`collection`, `iteratee`?): `T`[]

Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked
with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by
explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like
arrays. To avoid this behavior _.forIn or _.forOwn may be used for object iteration.

##### Type parameters

• **T**

##### Parameters

• **collection**: `T`[]

The collection to iterate over.

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`[]

##### Alias

\_.each

##### Source

node_modules/@types/lodash/common/collection.d.ts:786

#### forEach(collection, iteratee)

> **forEach**(`collection`, `iteratee`?): `string`

##### Parameters

• **collection**: `string`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:790

#### forEach(collection, iteratee)

> **forEach**\<`T`\>(`collection`, `iteratee`?): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **collection**: [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:794

#### forEach(collection, iteratee)

> **forEach**\<`T`\>(`collection`, `iteratee`?): `T`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:798

#### forEach(collection, iteratee)

> **forEach**\<`T`, `TArray`\>(`collection`, `iteratee`?): `TArray`

##### Type parameters

• **T**

• **TArray** _extends_ `undefined` \| `null` \| `T`[]

##### Parameters

• **collection**: `TArray` & `undefined` \| `null` \| `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:802

#### forEach(collection, iteratee)

> **forEach**\<`TString`\>(`collection`, `iteratee`?): `TString`

##### Type parameters

• **TString** _extends_ `undefined` \| `null` \| `string`

##### Parameters

• **collection**: `TString`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:806

#### forEach(collection, iteratee)

> **forEach**\<`T`, `TList`\>(`collection`, `iteratee`?): `TList`

##### Type parameters

• **T**

• **TList** _extends_ `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

##### Parameters

• **collection**: `TList` & `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:810

#### forEach(collection, iteratee)

> **forEach**\<`T`\>(`collection`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forEach

##### Source

node_modules/@types/lodash/common/collection.d.ts:814

---

### forEachRight()

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`\>(`collection`, `iteratee`?): `T`[]

This method is like \_.forEach except that it iterates over elements of collection from right to
left.

##### Type parameters

• **T**

##### Parameters

• **collection**: `T`[]

The collection to iterate over.

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

The function called per iteration.

##### Returns

`T`[]

##### Alias

\_.eachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:867

#### forEachRight(collection, iteratee)

> **forEachRight**(`collection`, `iteratee`?): `string`

##### Parameters

• **collection**: `string`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`string`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:871

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`\>(`collection`, `iteratee`?): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **collection**: [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:875

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`\>(`collection`, `iteratee`?): `T`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`T`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:879

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`, `TArray`\>(`collection`, `iteratee`?): `TArray`

##### Type parameters

• **T**

• **TArray** _extends_ `undefined` \| `null` \| `T`[]

##### Parameters

• **collection**: `TArray` & `undefined` \| `null` \| `T`[]

• **iteratee?**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `any`\>

##### Returns

`TArray`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:883

#### forEachRight(collection, iteratee)

> **forEachRight**\<`TString`\>(`collection`, `iteratee`?): `TString`

##### Type parameters

• **TString** _extends_ `undefined` \| `null` \| `string`

##### Parameters

• **collection**: `TString`

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

##### Returns

`TString`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:887

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`, `TList`\>(`collection`, `iteratee`?): `TList`

##### Type parameters

• **T**

• **TList** _extends_ `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

##### Parameters

• **collection**: `TList` & `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

##### Returns

`TList`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:891

#### forEachRight(collection, iteratee)

> **forEachRight**\<`T`\>(`collection`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forEachRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:895

---

### forIn()

#### forIn(object, iteratee)

> **forIn**\<`T`\>(`object`, `iteratee`?): `T`

Iterates over own and inherited enumerable properties of an object invoking iteratee for each
property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
exit iteration early by explicitly returning false.

##### Type parameters

• **T**

##### Parameters

• **object**: `T`

The object to iterate over.

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:857

#### forIn(object, iteratee)

> **forIn**\<`T`\>(`object`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forIn

##### Source

node_modules/@types/lodash/common/object.d.ts:861

---

### forInRight()

#### forInRight(object, iteratee)

> **forInRight**\<`T`\>(`object`, `iteratee`?): `T`

This method is like \_.forIn except that it iterates over properties of object in the opposite
order.

##### Type parameters

• **T**

##### Parameters

• **object**: `T`

The object to iterate over.

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:883

#### forInRight(object, iteratee)

> **forInRight**\<`T`\>(`object`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forInRight

##### Source

node_modules/@types/lodash/common/object.d.ts:887

---

### forOwn()

#### forOwn(object, iteratee)

> **forOwn**\<`T`\>(`object`, `iteratee`?): `T`

Iterates over own enumerable properties of an object invoking iteratee for each property. The
iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit
iteration early by explicitly returning false.

##### Type parameters

• **T**

##### Parameters

• **object**: `T`

The object to iterate over.

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:911

#### forOwn(object, iteratee)

> **forOwn**\<`T`\>(`object`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forOwn

##### Source

node_modules/@types/lodash/common/object.d.ts:915

---

### forOwnRight()

#### forOwnRight(object, iteratee)

> **forOwnRight**\<`T`\>(`object`, `iteratee`?): `T`

This method is like \_.forOwn except that it iterates over properties of object in the opposite
order.

##### Type parameters

• **T**

##### Parameters

• **object**: `T`

The object to iterate over.

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

The function invoked per iteration.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:937

#### forOwnRight(object, iteratee)

> **forOwnRight**\<`T`\>(`object`, `iteratee`?): `undefined` \| `null` \| `T`

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

##### Returns

`undefined` \| `null` \| `T`

##### See

\_.forOwnRight

##### Source

node_modules/@types/lodash/common/object.d.ts:941

---

### get()

#### get(object, path)

> **get**\<`TObject`, `TKey`\>(`object`, `path`): `TObject`\[`TKey`\]

Gets the property value at path of object. If the resolved value is undefined the defaultValue is
used in its place.

##### Type parameters

• **TObject** _extends_ `object`

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `TObject`

The object to query.

• **path**: `TKey` \| [`TKey`]

The path of the property to get.

##### Returns

`TObject`\[`TKey`\]

Returns the resolved value.

##### Source

node_modules/@types/lodash/common/object.d.ts:1070

#### get(object, path)

> **get**\<`TObject`, `TKey`\>(`object`, `path`): `undefined` \| `TObject`\[`TKey`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: `TKey` \| [`TKey`]

##### Returns

`undefined` \| `TObject`\[`TKey`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1074

#### get(object, path, defaultValue)

> **get**\<`TObject`, `TKey`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`TObject`\[`TKey`\], `undefined`\>

##### Type parameters

• **TObject** _extends_ `object`

• **TKey** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: `TKey` \| [`TKey`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`TObject`\[`TKey`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1078

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`): `TObject`\[`TKey1`\]\[`TKey2`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `TObject`

• **path**: [`TKey1`, `TKey2`]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1082

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`): `undefined` \|
> `TObject`\[`TKey1`\]\[`TKey2`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`]

##### Returns

`undefined` \| `TObject`\[`TKey1`\]\[`TKey2`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1086

#### get(object, path, defaultValue)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault`
> \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1090

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`):
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1094

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`): `undefined` \|
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`]

##### Returns

`undefined` \| `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1098

#### get(object, path, defaultValue)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`object`, `path`, `defaultValue`):
> `TDefault` \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1102

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`):
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TKey4** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`, `TKey4`]

##### Returns

`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1106

#### get(object, path)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`): `undefined` \|
> `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TKey4** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`, `TKey4`]

##### Returns

`undefined` \| `TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1110

#### get(object, path, defaultValue)

> **get**\<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`object`, `path`,
> `defaultValue`): `TDefault` \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\],
> `undefined`\>

##### Type parameters

• **TObject** _extends_ `object`

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TKey4** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null` \| `TObject`

• **path**: [`TKey1`, `TKey2`, `TKey3`, `TKey4`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`TObject`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1114

#### get(object, path)

> **get**\<`T`\>(`object`, `path`): `T`

##### Type parameters

• **T**

##### Parameters

• **object**: [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **path**: `number`

##### Returns

`T`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1118

#### get(object, path)

> **get**\<`T`\>(`object`, `path`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **path**: `number`

##### Returns

`undefined` \| `T`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1122

#### get(object, path, defaultValue)

> **get**\<`T`, `TDefault`\>(`object`, `path`, `defaultValue`): `T` \| `TDefault`

##### Type parameters

• **T**

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null` \| [`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **path**: `number`

• **defaultValue**: `TDefault`

##### Returns

`T` \| `TDefault`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1126

#### get(object, path, defaultValue)

> **get**\<`TDefault`\>(`object`, `path`, `defaultValue`): `TDefault`

##### Type parameters

• **TDefault**

##### Parameters

• **object**: `undefined` \| `null`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue**: `TDefault`

##### Returns

`TDefault`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1130

#### get(object, path)

> **get**(`object`, `path`): `undefined`

##### Parameters

• **object**: `undefined` \| `null`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`undefined`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1134

#### get(data, path)

> **get**\<`TObject`, `TPath`\>(`data`, `path`): `string` _extends_ `TPath` ? `any` :
> [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`\>

##### Type parameters

• **TObject**

• **TPath** _extends_ `string`

##### Parameters

• **data**: `TObject`

• **path**: `TPath`

##### Returns

`string` _extends_ `TPath` ? `any` : [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`,
`TPath`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1138

#### get(data, path, defaultValue)

> **get**\<`TObject`, `TPath`, `TDefault`\>(`data`, `path`, `defaultValue`): `TDefault` \|
> `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`\>, `undefined` \|
> `null`\>

##### Type parameters

• **TObject**

• **TPath** _extends_ `string`

• **TDefault** = [`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`\>

##### Parameters

• **data**: `TObject`

• **path**: `TPath`

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`TObject`, `TPath`\>,
`undefined` \| `null`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1142

#### get(object, path, defaultValue)

> **get**(`object`, `path`, `defaultValue`?): `any`

##### Parameters

• **object**: `any`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `any`

##### Returns

`any`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1146

---

### groupBy()

#### groupBy(collection, iteratee)

> **groupBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`[]\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is an array of the elements responsible for
generating the key. The iteratee is invoked with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`[]\>

Returns the composed aggregate object.

##### Source

node_modules/@types/lodash/common/collection.d.ts:949

#### groupBy(collection, iteratee)

> **groupBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>

##### See

\_.groupBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:953

---

### gt()

> **gt**(`value`, `other`): `boolean`

Checks if value is greater than other.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is greater than other, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:277

---

### gte()

> **gte**(`value`, `other`): `boolean`

Checks if value is greater than or equal to other.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is greater than or equal to other, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:300

---

### head()

> **head**\<`T`\>(`array`): `undefined` \| `T`

Gets the first element of array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

#### Returns

`undefined` \| `T`

Returns the first element of array.

#### Alias

\_.first

#### Source

node_modules/@types/lodash/common/array.d.ts:577

---

### identity()

#### identity(value)

> **identity**\<`T`\>(`value`): `T`

This method returns the first argument provided to it.

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

Any value.

##### Returns

`T`

Returns value.

##### Source

node_modules/@types/lodash/common/util.d.ts:377

#### identity()

> **identity**(): `undefined`

##### Returns

`undefined`

##### See

\_.identity

##### Source

node_modules/@types/lodash/common/util.d.ts:381

---

### inRange()

> **inRange**(`n`, `start`, `end`?): `boolean`

Checks if n is between start and up to but not including, end. If end is not specified it’s set to
start with start then set to 0.

#### Parameters

• **n**: `number`

The number to check.

• **start**: `number`

The start of the range.

• **end?**: `number`

The end of the range.

#### Returns

`boolean`

Returns true if n is in the range, else false.

#### Source

node_modules/@types/lodash/common/number.d.ts:71

---

### includes()

> **includes**\<`T`\>(`collection`, `target`, `fromIndex`?): `boolean`

Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is
negative, it’s used as the offset from the end of collection.

#### Type parameters

• **T**

#### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The collection to search.

• **target**: `T`

The value to search for.

• **fromIndex?**: `number`

The index to search from.

#### Returns

`boolean`

True if the target element is found, else false.

#### Source

node_modules/@types/lodash/common/collection.d.ts:1007

---

### initial()

> **initial**\<`T`\>(`array`): `T`[]

Gets all but the last element of array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:651

---

### intersection()

> **intersection**\<`T`\>(...`arrays`): `T`[]

Creates an array of unique values that are included in all of the provided arrays using
SameValueZero for equality comparisons.

#### Type parameters

• **T**

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of shared values.

#### Source

node_modules/@types/lodash/common/array.d.ts:673

---

### invert()

> **invert**(`object`): [`Dictionary`](Dictionary.md)\<`string`\>

Creates an object composed of the inverted keys and values of object. If object contains duplicate
values, subsequent values overwrite property assignments of previous values unless multiValue is
true.

#### Parameters

• **object**: `object`

The object to invert.

#### Returns

[`Dictionary`](Dictionary.md)\<`string`\>

Returns the new inverted object.

#### Source

node_modules/@types/lodash/common/object.d.ts:1393

---

### invertBy()

#### invertBy(object, interatee)

> **invertBy**\<`T`\>(`object`, `interatee`?): [`Dictionary`](Dictionary.md)\<`string`[]\>

This method is like \_.invert except that the inverted object is generated from the results of
running each element of object through iteratee. The corresponding inverted value of each inverted
key is an array of keys responsible for generating the inverted value. The iteratee is invoked with
one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to invert.

• **interatee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

[`Dictionary`](Dictionary.md)\<`string`[]\>

Returns the new inverted object.

##### Source

node_modules/@types/lodash/common/object.d.ts:1417

#### invertBy(object, interatee)

> **invertBy**\<`T`\>(`object`, `interatee`?): [`Dictionary`](Dictionary.md)\<`string`[]\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **interatee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Dictionary`](Dictionary.md)\<`string`[]\>

##### See

\_.invertBy

##### Source

node_modules/@types/lodash/common/object.d.ts:1421

---

### invoke()

> **invoke**(`object`, `path`, ...`args`): `any`

Invokes the method at path of object.

#### Parameters

• **object**: `any`

The object to query.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the method to invoke.

• ...**args**: `any`[]

The arguments to invoke the method with.

#### Returns

`any`

#### Source

node_modules/@types/lodash/common/object.d.ts:1472

---

### invokeMap()

#### invokeMap(collection, methodName, args)

> **invokeMap**(`collection`, `methodName`, ...`args`): `any`[]

Invokes the method named by methodName on each element in the collection returning an array of the
results of each invoked method. Additional arguments will be provided to each invoked method. If
methodName is a function it will be invoked for, and this bound to, each element in the collection.

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

The collection to iterate over.

• **methodName**: `string`

The name of the method to invoke.

• ...**args**: `any`[]

Arguments to invoke the method with.

##### Returns

`any`[]

##### Source

node_modules/@types/lodash/common/collection.d.ts:1055

#### invokeMap(collection, method, args)

> **invokeMap**\<`TResult`\>(`collection`, `method`, ...`args`): `TResult`[]

##### Type parameters

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `object`

• **method**

• ...**args**: `any`[]

##### Returns

`TResult`[]

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1059

---

### isArguments()

> **isArguments**(`value`?): `value is IArguments`

Checks if value is classified as an arguments object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is IArguments`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:322

---

### isArray()

#### isArray(value)

> **isArray**(`value`?): `value is any[]`

Checks if value is classified as an Array object.

##### Parameters

• **value?**: `any`

The value to check.

##### Returns

`value is any[]`

Returns true if value is correctly classified, else false.

##### Source

node_modules/@types/lodash/common/lang.d.ts:344

#### isArray(value)

> **isArray**\<`T`\>(`value`?): `value is any[]`

##### Type parameters

• **T**

##### Parameters

• **value?**: `any`

##### Returns

`value is any[]`

##### See

\_.isArray

##### Source

node_modules/@types/lodash/common/lang.d.ts:348

---

### isArrayBuffer()

> **isArrayBuffer**(`value`?): `value is ArrayBuffer`

Checks if value is classified as an ArrayBuffer object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is ArrayBuffer`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:370

---

### isBoolean()

> **isBoolean**(`value`?): `value is boolean`

Checks if value is classified as a boolean primitive or object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is boolean`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:483

---

### isBuffer()

> **isBuffer**(`value`?): `boolean`

Checks if value is a buffer.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is a buffer, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:505

---

### isDate()

> **isDate**(`value`?): `value is Date`

Checks if value is classified as a Date object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is Date`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:527

---

### isElement()

> **isElement**(`value`?): `boolean`

Checks if value is a DOM element.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is a DOM element, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:549

---

### isEmpty()

#### isEmpty(value)

> **isEmpty**\<`T`\>(`value`?): `boolean`

Checks if value is empty. A value is considered empty unless it’s an arguments object, array,
string, or jQuery-like collection with a length greater than 0 or an object with own enumerable
properties.

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **value?**: `T`

The value to inspect.

##### Returns

`boolean`

Returns true if value is empty, else false.

##### Source

node_modules/@types/lodash/common/lang.d.ts:574

#### isEmpty(value)

> **isEmpty**(`value`): `value is ""`

##### Parameters

• **value**: `string`

##### Returns

`value is ""`

##### Source

node_modules/@types/lodash/common/lang.d.ts:575

#### isEmpty(value)

> **isEmpty**(`value`): `boolean`

##### Parameters

• **value**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`\> \| `Map`\<`any`,
`any`\> \| `Set`\<`any`\>

##### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/lang.d.ts:576

#### isEmpty(value)

> **isEmpty**(`value`): `boolean`

##### Parameters

• **value**: `object`

##### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/lang.d.ts:577

#### isEmpty(value)

> **isEmpty**\<`T`\>(`value`): value is undefined \| null \| EmptyObjectOf\<T\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **value**: `undefined` \| `null` \| `T`

##### Returns

value is undefined \| null \| EmptyObjectOf\<T\>

##### Source

node_modules/@types/lodash/common/lang.d.ts:578

#### isEmpty(value)

> **isEmpty**(`value`?): `boolean`

##### Parameters

• **value?**: `any`

##### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/lang.d.ts:579

---

### isError()

> **isError**(`value`): `value is Error`

Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or
URIError object.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`value is Error`

Returns true if value is an error object, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:689

---

### isFinite()

> **isFinite**(`value`?): `boolean`

Checks if value is a finite primitive number.

Note: This method is based on Number.isFinite.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is a finite number, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:713

---

### isFunction()

> **isFunction**(`value`): `value is Function`

Checks if value is a callable function.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`value is Function`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:735

---

### isMap()

> **isMap**(`value`?): `value is Map<any, any>`

Checks if value is classified as a Map object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is Map<any, any>`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:833

---

### isNaN()

> **isNaN**(`value`?): `boolean`

Checks if value is NaN.

Note: This method is not the same as isNaN which returns true for undefined and other non-numeric
values.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is NaN, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:939

---

### isNative()

> **isNative**(`value`): `value is Function`

Checks if value is a native function.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`value is Function`

Returns true if value is a native function, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:961

---

### isNull()

> **isNull**(`value`): `value is null`

Checks if value is null.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`value is null`

Returns true if value is null, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1016

---

### isNumber()

> **isNumber**(`value`?): `value is number`

Checks if value is classified as a Number primitive or object.

Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the \_.isFinite
method.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is number`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1040

---

### isObject()

> **isObject**(`value`?): `value is object`

Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new
Number(0), and new String(''))

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is object`

Returns true if value is an object, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1063

---

### isPlainObject()

> **isPlainObject**(`value`?): `boolean`

Checks if value is a plain object, that is, an object created by the Object constructor or one with
a [[Prototype]] of null.

Note: This method assumes objects created by the Object constructor have no inherited enumerable
properties.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is a plain object, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1125

---

### isRegExp()

> **isRegExp**(`value`?): `value is RegExp`

Checks if value is classified as a RegExp object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is RegExp`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1147

---

### isSet()

> **isSet**(`value`?): `value is Set<any>`

Checks if value is classified as a Set object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is Set<any>`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1208

---

### isString()

> **isString**(`value`?): `value is string`

Checks if value is classified as a String primitive or object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is string`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1230

---

### isTypedArray()

> **isTypedArray**(`value`): `boolean`

Checks if value is classified as a typed array.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`boolean`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1282

---

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

Checks if value is undefined.

#### Parameters

• **value**: `any`

The value to check.

#### Returns

`value is undefined`

Returns true if value is undefined, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1304

---

### isWeakMap()

> **isWeakMap**(`value`?): `value is WeakMap<object, any>`

Checks if value is classified as a WeakMap object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is WeakMap<object, any>`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1326

---

### isWeakSet()

> **isWeakSet**(`value`?): `value is WeakSet<object>`

Checks if value is classified as a WeakSet object.

#### Parameters

• **value?**: `any`

The value to check.

#### Returns

`value is WeakSet<object>`

Returns true if value is correctly classified, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1348

---

### join()

> **join**(`array`, `separator`?): `string`

Converts all elements in `array` into a string separated by `separator`.

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`any`\>

The array to convert.

• **separator?**: `string`

The element separator.

#### Returns

`string`

Returns the joined string.

#### Source

node_modules/@types/lodash/common/array.d.ts:804

---

### kebabCase()

> **kebabCase**(`string`?): `string`

Converts string to kebab case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the kebab cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:157

---

### keyBy()

#### keyBy(collection, iteratee)

> **keyBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the last element responsible for generating
the key. The iteratee function is invoked with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the composed aggregate object.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1091

#### keyBy(collection, iteratee)

> **keyBy**\<`T`\>(`collection`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`\[keyof `T`\],
[`PropertyName`](../type-aliases/PropertyName.md)\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### See

\_.keyBy

##### Source

node_modules/@types/lodash/common/collection.d.ts:1095

---

### keys()

> **keys**(`object`?): `string`[]

Creates an array of the own enumerable property names of object.

Note: Non-object values are coerced to objects. See the ES spec for more details.

#### Parameters

• **object?**: `any`

The object to query.

#### Returns

`string`[]

Returns the array of property names.

#### Source

node_modules/@types/lodash/common/object.d.ts:1495

---

### keysIn()

> **keysIn**(`object`?): `string`[]

Creates an array of the own and inherited enumerable property names of object.

Note: Non-object values are coerced to objects.

#### Parameters

• **object?**: `any`

The object to query.

#### Returns

`string`[]

An array of property names.

#### Source

node_modules/@types/lodash/common/object.d.ts:1518

---

### last()

> **last**\<`T`\>(`array`): `undefined` \| `T`

Gets the last element of array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

#### Returns

`undefined` \| `T`

Returns the last element of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:843

---

### lastIndexOf()

> **lastIndexOf**\<`T`\>(`array`, `value`, `fromIndex`?): `number`

This method is like \_.indexOf except that it iterates over elements of array from right to left.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to search.

• **value**: `T`

The value to search for.

• **fromIndex?**: `number` \| `true`

The index to search from or true to perform a binary search on a sorted array.

#### Returns

`number`

Returns the index of the matched value, else -1.

#### Source

node_modules/@types/lodash/common/array.d.ts:884

---

### lowerCase()

> **lowerCase**(`string`?): `string`

Converts `string`, as space separated words, to lower case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the lower cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:179

---

### lowerFirst()

> **lowerFirst**(`string`?): `string`

Converts the first character of `string` to lower case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the converted string.

#### Source

node_modules/@types/lodash/common/string.d.ts:201

---

### lt()

> **lt**(`value`, `other`): `boolean`

Checks if value is less than other.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is less than other, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1371

---

### lte()

> **lte**(`value`, `other`): `boolean`

Checks if value is less than or equal to other.

#### Parameters

• **value**: `any`

The value to compare.

• **other**: `any`

The other value to compare.

#### Returns

`boolean`

Returns true if value is less than or equal to other, else false.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1394

---

### map()

#### map(collection, iteratee)

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Creates an array of values by running each element in collection through iteratee. The iteratee is
invoked with three arguments: (value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map,
_.mapValues, _.reject, and _.some.

The guarded methods are: ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight,
every, fill, flatten, invert, max, min, parseInt, slice, sortBy, take, takeRight, template, trim,
trimLeft, trimRight, trunc, random, range, sample, some, sum, uniq, and words

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`[]

The collection to iterate over.

• **iteratee**: [`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `TResult`\>

The function invoked per iteration.

##### Returns

`TResult`[]

Returns the new mapped array.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1156

#### map(collection, iteratee)

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

`TResult`[]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1160

#### map(collection)

> **map**\<`T`\>(`collection`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1164

#### map(collection, iteratee)

> **map**\<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

`TResult`[]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1168

#### map(collection, iteratee)

> **map**\<`T`, `K`\>(`collection`, `iteratee`): `T`\[`K`\][]

##### Type parameters

• **T**

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee**: `K`

##### Returns

`T`\[`K`\][]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1172

#### map(collection, iteratee)

> **map**\<`T`\>(`collection`, `iteratee`?): `any`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee?**: `string`

##### Returns

`any`[]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1176

#### map(collection, iteratee)

> **map**\<`T`\>(`collection`, `iteratee`?): `boolean`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee?**: `object`

##### Returns

`boolean`[]

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1180

---

### mapKeys()

#### mapKeys(object, iteratee)

> **mapKeys**\<`T`\>(`object`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`\>

The opposite of \_.mapValues; this method creates an object with the same values as object and keys
generated by running each own enumerable property of object through iteratee.

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The object to iterate over.

• **iteratee?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new mapped object.

##### Source

node_modules/@types/lodash/common/object.d.ts:1541

#### mapKeys(object, iteratee)

> **mapKeys**\<`T`\>(`object`, `iteratee`?): [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

• **iteratee?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>

##### See

\_.mapKeys

##### Source

node_modules/@types/lodash/common/object.d.ts:1545

---

### mapValues()

#### mapValues(obj, callback)

> **mapValues**\<`TResult`\>(`obj`, `callback`):
> [`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Creates an object with the same keys as object and values generated by running each own enumerable
property of object through iteratee. The iteratee function is invoked with three arguments: (value,
key, object).

##### Type parameters

• **TResult**

##### Parameters

• **obj**: `undefined` \| `null` \| `string`

• **callback**: [`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Returns the new mapped object.

##### Source

node_modules/@types/lodash/common/object.d.ts:1581

#### mapValues(obj, callback)

> **mapValues**\<`T`, `TResult`\>(`obj`, `callback`): \{ \[P in string \| number \| symbol\]:
> TResult \}

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **obj**: `undefined` \| `null` \| `T`

• **callback**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

\{ \[P in string \| number \| symbol\]: TResult \}

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1585

#### mapValues(obj, iteratee)

> **mapValues**\<`T`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`boolean`\>

##### Type parameters

• **T**

##### Parameters

• **obj**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee**: `object`

##### Returns

[`Dictionary`](Dictionary.md)\<`boolean`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1589

#### mapValues(obj, iteratee)

> **mapValues**\<`T`\>(`obj`, `iteratee`): \{ \[P in string \| number \| symbol\]: boolean \}

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **obj**: `undefined` \| `null` \| `T`

• **iteratee**: `object`

##### Returns

\{ \[P in string \| number \| symbol\]: boolean \}

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1593

#### mapValues(obj, iteratee)

> **mapValues**\<`T`, `TKey`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>

##### Type parameters

• **T**

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **obj**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee**: `TKey`

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1597

#### mapValues(obj, iteratee)

> **mapValues**\<`T`\>(`obj`, `iteratee`): [`Dictionary`](Dictionary.md)\<`any`\>

##### Type parameters

• **T**

##### Parameters

• **obj**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

• **iteratee**: `string`

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1601

#### mapValues(obj, iteratee)

> **mapValues**\<`T`\>(`obj`, `iteratee`): \{ \[P in string \| number \| symbol\]: any \}

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **obj**: `undefined` \| `null` \| `T`

• **iteratee**: `string`

##### Returns

\{ \[P in string \| number \| symbol\]: any \}

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1605

#### mapValues(obj)

> **mapValues**(`obj`): [`NumericDictionary`](NumericDictionary.md)\<`string`\>

##### Parameters

• **obj**: `undefined` \| `null` \| `string`

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`string`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1609

#### mapValues(obj)

> **mapValues**\<`T`\>(`obj`): [`Dictionary`](Dictionary.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **obj**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1613

#### mapValues(obj)

> **mapValues**\<`T`\>(`obj`): `T`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **obj**: `T`

##### Returns

`T`

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1617

#### mapValues(obj)

> **mapValues**\<`T`\>(`obj`): `Partial`\<`T`\>

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **obj**: `undefined` \| `null` \| `T`

##### Returns

`Partial`\<`T`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1621

---

### matches()

#### matches(source)

> **matches**\<`T`\>(`source`): (`value`) => `boolean`

Creates a function that performs a deep comparison between a given object and source, returning true
if the given object has equivalent property values, else false.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties. For
comparing a single own or inherited property value see \_.matchesProperty.

##### Type parameters

• **T**

##### Parameters

• **source**: `T`

The object of property values to match.

##### Returns

`Function`

Returns the new function.

###### Parameters

• **value**: `any`

###### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/util.d.ts:497

#### matches(source)

> **matches**\<`T`, `V`\>(`source`): (`value`) => `boolean`

##### Type parameters

• **T**

• **V**

##### Parameters

• **source**: `T`

##### Returns

`Function`

###### Parameters

• **value**: `V`

###### Returns

`boolean`

##### See

\_.matches

##### Source

node_modules/@types/lodash/common/util.d.ts:501

---

### matchesProperty()

#### matchesProperty(path, srcValue)

> **matchesProperty**\<`T`\>(`path`, `srcValue`): (`value`) => `boolean`

Creates a function that compares the property value of path on a given object to value.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties.

##### Type parameters

• **T**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to get.

• **srcValue**: `T`

The value to match.

##### Returns

`Function`

Returns the new function.

###### Parameters

• **value**: `any`

###### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/util.d.ts:527

#### matchesProperty(path, srcValue)

> **matchesProperty**\<`T`, `V`\>(`path`, `srcValue`): (`value`) => `boolean`

##### Type parameters

• **T**

• **V**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **srcValue**: `T`

##### Returns

`Function`

###### Parameters

• **value**: `V`

###### Returns

`boolean`

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:531

---

### method()

> **method**(`path`, ...`args`): (`object`) => `any`

Creates a function that invokes the method at path on a given object. Any additional arguments are
provided to the invoked method.

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the method to invoke.

• ...**args**: `any`[]

The arguments to invoke the method with.

#### Returns

`Function`

Returns the new function.

##### Parameters

• **object**: `any`

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/util.d.ts:563

---

### methodOf()

> **methodOf**(`object`, ...`args`): (`path`) => `any`

The opposite of \_.method; this method creates a function that invokes the method at a given path on
object. Any additional arguments are provided to the invoked method.

#### Parameters

• **object**: `object`

The object to query.

• ...**args**: `any`[]

The arguments to invoke the method with.

#### Returns

`Function`

Returns the new function.

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/util.d.ts:587

---

### mixin()

#### mixin(object, source, options)

> **mixin**\<`TObject`\>(`object`, `source`, `options`?): `TObject`

Adds all own enumerable function properties of a source object to the destination object. If object
is a function then methods are added to its prototype as well.

Note: Use \_.runInContext to create a pristine lodash function to avoid conflicts caused by
modifying the original.

##### Type parameters

• **TObject**

##### Parameters

• **object**: `TObject`

The destination object.

• **source**: [`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

The object of functions to add.

• **options?**: [`MixinOptions`](MixinOptions.md)

The options object.

##### Returns

`TObject`

Returns object.

##### Source

node_modules/@types/lodash/common/util.d.ts:622

#### mixin(source, options)

> **mixin**\<`TResult`\>(`source`, `options`?): [`LoDashStatic`](LoDashStatic.md)

##### Type parameters

• **TResult**

##### Parameters

• **source**: [`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

• **options?**: [`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashStatic`](LoDashStatic.md)

##### See

\_.mixin

##### Source

node_modules/@types/lodash/common/util.d.ts:626

---

### multiply()

> **multiply**(`multiplier`, `multiplicand`): `number`

Multiply two numbers.

#### Parameters

• **multiplier**: `number`

The first number in a multiplication.

• **multiplicand**: `number`

The second number in a multiplication.

#### Returns

`number`

Returns the product.

#### Source

node_modules/@types/lodash/common/math.d.ts:277

---

### negate()

> **negate**\<`T`\>(`predicate`): (...`args`) => `boolean`

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

#### Type parameters

• **T** _extends_ `any`[]

#### Parameters

• **predicate**

The predicate to negate.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `T`

##### Returns

`boolean`

#### Source

node_modules/@types/lodash/common/function.d.ts:572

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

Reverts the \_ variable to its previous value and returns a reference to the lodash function.

#### Returns

[`LoDashStatic`](LoDashStatic.md)

Returns the lodash function.

#### Source

node_modules/@types/lodash/common/util.d.ts:655

---

### noop()

> **noop**(...`args`): `void`

A no-operation function that returns undefined regardless of the arguments it receives.

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

undefined

#### Source

node_modules/@types/lodash/common/util.d.ts:676

---

### now()

> **now**(): `number`

#### Returns

`number`

#### Source

node_modules/@types/lodash/common/date.d.ts:9

---

### nth()

> **nth**\<`T`\>(`array`, `n`?): `undefined` \| `T`

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is
returned.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

array The array to query.

• **n?**: `number`

#### Returns

`undefined` \| `T`

Returns the nth element of `array`.

#### Source

node_modules/@types/lodash/common/array.d.ts:906

---

### nthArg()

> **nthArg**(`n`?): (...`args`) => `any`

Creates a function that returns its nth argument.

#### Parameters

• **n?**: `number`

The index of the argument to return.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/util.d.ts:698

---

### once()

> **once**\<`T`\>(`func`): `T`

Creates a function that is restricted to invoking func once. Repeat calls to the function return the
value of the first call. The func is invoked with the this binding and arguments of the created
function.

#### Type parameters

• **T** _extends_ (...`args`) => `any`

#### Parameters

• **func**: `T`

The function to restrict.

#### Returns

`T`

Returns the new restricted function.

#### Source

node_modules/@types/lodash/common/function.d.ts:594

---

### over()

> **over**\<`TResult`\>(...`iteratees`): (...`args`) => `TResult`[]

Creates a function that invokes iteratees with the arguments provided to the created function and
returns their results.

#### Type parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

The iteratees to invoke.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`TResult`[]

#### Source

node_modules/@types/lodash/common/util.d.ts:721

---

### overArgs()

> **overArgs**(`func`, ...`transforms`): (...`args`) => `any`

Creates a function that runs each argument through a corresponding transform function.

#### Parameters

• **func**

The function to wrap.

• ...**transforms**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

The functions to transform arguments, specified as individual functions or arrays of functions.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/function.d.ts:617

---

### overEvery()

#### overEvery(predicates)

> **overEvery**\<`T`, `Result1`, `Result2`\>(...`predicates`): (`arg`) => `arg is Result1 & Result2`

Creates a function that checks if all of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Type parameters

• **T**

• **Result1**

• **Result2**

##### Parameters

• ...**predicates**: [(`arg`) => `arg is Result1`, (`arg`) => `arg is Result2`]

The predicates to check.

##### Returns

`Function`

Returns the new function.

###### Parameters

• **arg**: `T`

###### Returns

`arg is Result1 & Result2`

##### Source

node_modules/@types/lodash/common/util.d.ts:756

#### overEvery(predicates)

> **overEvery**\<`T`\>(...`predicates`): (...`args`) => `boolean`

##### Type parameters

• **T**

##### Parameters

• ...**predicates**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

##### Returns

`Function`

###### Parameters

• ...**args**: `T`[]

###### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/util.d.ts:760

---

### overSome()

#### overSome(predicates)

> **overSome**\<`T`, `Result1`, `Result2`\>(...`predicates`): (`arg`) => arg is Result1 \| Result2

Creates a function that checks if any of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Type parameters

• **T**

• **Result1**

• **Result2**

##### Parameters

• ...**predicates**: [(`arg`) => `arg is Result1`, (`arg`) => `arg is Result2`]

The predicates to check.

##### Returns

`Function`

Returns the new function.

###### Parameters

• **arg**: `T`

###### Returns

arg is Result1 \| Result2

##### Source

node_modules/@types/lodash/common/util.d.ts:795

#### overSome(predicates)

> **overSome**\<`T`\>(...`predicates`): (...`args`) => `boolean`

##### Type parameters

• **T**

##### Parameters

• ...**predicates**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

##### Returns

`Function`

###### Parameters

• ...**args**: `T`[]

###### Returns

`boolean`

##### Source

node_modules/@types/lodash/common/util.d.ts:799

---

### pad()

> **pad**(`string`?, `length`?, `chars`?): `string`

Pads string on the left and right sides if it’s shorter than length. Padding characters are
truncated if they can’t be evenly divided by length.

#### Parameters

• **string?**: `string`

The string to pad.

• **length?**: `number`

The padding length.

• **chars?**: `string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

#### Source

node_modules/@types/lodash/common/string.d.ts:226

---

### padEnd()

> **padEnd**(`string`?, `length`?, `chars`?): `string`

Pads string on the right side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

• **string?**: `string`

The string to pad.

• **length?**: `number`

The padding length.

• **chars?**: `string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

#### Source

node_modules/@types/lodash/common/string.d.ts:251

---

### padStart()

> **padStart**(`string`?, `length`?, `chars`?): `string`

Pads string on the left side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

• **string?**: `string`

The string to pad.

• **length?**: `number`

The padding length.

• **chars?**: `string`

The string used as padding.

#### Returns

`string`

Returns the padded string.

#### Source

node_modules/@types/lodash/common/string.d.ts:276

---

### parseInt()

> **parseInt**(`string`, `radix`?): `number`

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is
used unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt.

#### Parameters

• **string**: `string`

The string to convert.

• **radix?**: `number`

The radix to interpret value by.

#### Returns

`number`

Returns the converted integer.

#### Source

node_modules/@types/lodash/common/string.d.ts:302

---

### partition()

#### partition(collection, callback)

> **partition**\<`T`, `U`\>(`collection`, `callback`): [`U`[], `Exclude`\<`T`, `U`\>[]]

Creates an array of elements split into two groups, the first of which contains elements predicate
returns truthy for, while the second of which contains elements predicate returns falsey for. The
predicate is invoked with three arguments: (value, index|key, collection).

##### Type parameters

• **T**

• **U**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **callback**: [`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

The function called per iteration.

##### Returns

[`U`[], `Exclude`\<`T`, `U`\>[]]

Returns the array of grouped elements.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1375

#### partition(collection, callback)

> **partition**\<`T`\>(`collection`, `callback`): [`T`[], `T`[]]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`T`[], `T`[]]

##### See

\_.partition

##### Source

node_modules/@types/lodash/common/collection.d.ts:1379

#### partition(collection, callback)

> **partition**\<`T`\>(`collection`, `callback`): [`T`\[keyof `T`\][], `T`\[keyof `T`\][]]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`T`\[keyof `T`\][], `T`\[keyof `T`\][]]

##### See

\_.partition

##### Source

node_modules/@types/lodash/common/collection.d.ts:1383

---

### property()

> **property**\<`TObj`, `TResult`\>(`path`): (`obj`) => `TResult`

Creates a function that returns the property value at path on a given object.

#### Type parameters

• **TObj**

• **TResult**

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to get.

#### Returns

`Function`

Returns the new function.

##### Parameters

• **obj**: `TObj`

##### Returns

`TResult`

#### Source

node_modules/@types/lodash/common/util.d.ts:833

---

### propertyOf()

> **propertyOf**\<`T`\>(`object`): (`path`) => `any`

The opposite of \_.property; this method creates a function that returns the property value at a
given path on object.

#### Type parameters

• **T** _extends_ `object`

#### Parameters

• **object**: `T`

The object to query.

#### Returns

`Function`

Returns the new function.

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/util.d.ts:856

---

### pull()

#### pull(array, values)

> **pull**\<`T`\>(`array`, ...`values`): `T`[]

Removes all provided values from array using SameValueZero for equality comparisons.

Note: Unlike \_.without, this method mutates array.

##### Type parameters

• **T**

##### Parameters

• **array**: `T`[]

The array to modify.

• ...**values**: `T`[]

The values to remove.

##### Returns

`T`[]

Returns array.

##### Source

node_modules/@types/lodash/common/array.d.ts:930

#### pull(array, values)

> **pull**\<`T`\>(`array`, ...`values`): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

• ...**values**: `T`[]

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.pull

##### Source

node_modules/@types/lodash/common/array.d.ts:934

---

### pullAt()

#### pullAt(array, indexes)

> **pullAt**\<`T`\>(`array`, ...`indexes`): `T`[]

Removes elements from array corresponding to the given indexes and returns an array of the removed
elements. Indexes may be specified as an array of indexes or as individual arguments.

Note: Unlike \_.at, this method mutates array.

##### Type parameters

• **T**

##### Parameters

• **array**: `T`[]

The array to modify.

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

The indexes of elements to remove, specified as individual indexes or arrays of indexes.

##### Returns

`T`[]

Returns the new array of removed elements.

##### Source

node_modules/@types/lodash/common/array.d.ts:1089

#### pullAt(array, indexes)

> **pullAt**\<`T`\>(`array`, ...`indexes`): [`List`](../type-aliases/List.md)\<`T`\>

##### Type parameters

• **T**

##### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

##### Returns

[`List`](../type-aliases/List.md)\<`T`\>

##### See

\_.pullAt

##### Source

node_modules/@types/lodash/common/array.d.ts:1093

---

### random()

#### random(floating)

> **random**(`floating`?): `number`

Produces a random number between min and max (inclusive). If only one argument is provided a number
between 0 and the given number is returned. If floating is true, or either min or max are floats, a
floating-point number is returned instead of an integer.

##### Parameters

• **floating?**: `boolean`

Specify returning a floating-point number.

##### Returns

`number`

Returns the random number.

##### Source

node_modules/@types/lodash/common/number.d.ts:97

#### random(max, floating)

> **random**(`max`, `floating`?): `number`

##### Parameters

• **max**: `number`

• **floating?**: `boolean`

##### Returns

`number`

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:101

#### random(min, max, floating)

> **random**(`min`, `max`, `floating`?): `number`

##### Parameters

• **min**: `number`

• **max**: `number`

• **floating?**: `boolean`

##### Returns

`number`

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:105

#### random(min, index, guard)

> **random**(`min`, `index`, `guard`): `number`

##### Parameters

• **min**: `number`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`number`

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:109

---

### range()

#### range(start, end, step)

> **range**(`start`, `end`?, `step`?): `number`[]

Creates an array of numbers (positive and/or negative) progressing from start up to, but not
including, end. If end is not specified it’s set to start with start then set to 0. If end is less
than start a zero-length range is created unless a negative step is specified.

##### Parameters

• **start**: `number`

The start of the range.

• **end?**: `number`

The end of the range.

• **step?**: `number`

The value to increment or decrement by.

##### Returns

`number`[]

Returns a new range array.

##### Source

node_modules/@types/lodash/common/util.d.ts:882

#### range(end, index, guard)

> **range**(`end`, `index`, `guard`): `number`[]

##### Parameters

• **end**: `number`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`number`[]

##### See

\_.range

##### Source

node_modules/@types/lodash/common/util.d.ts:886

---

### rearg()

> **rearg**(`func`, ...`indexes`): (...`args`) => `any`

Creates a function that invokes func with arguments arranged according to the specified indexes
where the argument value at the first index is provided as the first argument, the argument value at
the second index is provided as the second argument, and so on.

#### Parameters

• **func**

The function to rearrange arguments for.

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

The arranged argument indexes, specified as individual indexes or arrays of indexes.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/function.d.ts:1284

---

### reduce()

#### reduce(collection, callback, accumulator)

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Reduces a collection to a value which is the accumulated result of running each element in the
collection through the callback, where each successive callback execution consumes the return value
of the previous execution. If accumulator is not provided the first element of the collection will
be used as the initial accumulator value. The callback is invoked with four arguments: (accumulator,
value, index|key, collection).

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`[]

The collection to iterate over.

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`, `T`[]\>

The function called per iteration.

• **accumulator**: `TResult`

Initial value of the accumulator.

##### Returns

`TResult`

Returns the accumulated value.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1447

#### reduce(collection, callback, accumulator)

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1451

#### reduce(collection, callback, accumulator)

> **reduce**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1455

#### reduce(collection, callback)

> **reduce**\<`T`\>(`collection`, `callback`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`[]

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`, `T`[]\>

##### Returns

`undefined` \| `T`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1459

#### reduce(collection, callback)

> **reduce**\<`T`\>(`collection`, `callback`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`undefined` \| `T`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1463

#### reduce(collection, callback)

> **reduce**\<`T`\>(`collection`, `callback`): `undefined` \| `T`\[keyof `T`\]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`T`\[keyof `T`\], `T`\>

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1467

---

### reduceRight()

#### reduceRight(collection, callback, accumulator)

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

This method is like \_.reduce except that it iterates over elements of a collection from right to
left.

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`[]

The collection to iterate over.

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`, `T`[]\>

The function called per iteration.

• **accumulator**: `TResult`

Initial value of the accumulator.

##### Returns

`TResult`

The accumulated value.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1518

#### reduceRight(collection, callback, accumulator)

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1522

#### reduceRight(collection, callback, accumulator)

> **reduceRight**\<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1526

#### reduceRight(collection, callback)

> **reduceRight**\<`T`\>(`collection`, `callback`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| `T`[]

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`, `T`[]\>

##### Returns

`undefined` \| `T`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1530

#### reduceRight(collection, callback)

> **reduceRight**\<`T`\>(`collection`, `callback`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`undefined` \| `T`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1534

#### reduceRight(collection, callback)

> **reduceRight**\<`T`\>(`collection`, `callback`): `undefined` \| `T`\[keyof `T`\]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`T`\[keyof `T`\], `T`\>

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1538

---

### reject()

#### reject(collection, predicate)

> **reject**(`collection`, `predicate`?): `string`[]

The opposite of \_.filter; this method returns the elements of collection that predicate does not
return truthy for.

##### Parameters

• **collection**: `undefined` \| `null` \| `string`

The collection to iterate over.

• **predicate?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

The function invoked per iteration.

##### Returns

`string`[]

Returns the new filtered array.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1589

#### reject(collection, predicate)

> **reject**\<`T`\>(`collection`, `predicate`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`T`[]

##### See

\_.reject

##### Source

node_modules/@types/lodash/common/collection.d.ts:1593

#### reject(collection, predicate)

> **reject**\<`T`\>(`collection`, `predicate`?): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

##### Returns

`T`\[keyof `T`\][]

##### See

\_.reject

##### Source

node_modules/@types/lodash/common/collection.d.ts:1597

---

### remove()

> **remove**\<`T`\>(`array`, `predicate`?): `T`[]

Removes all elements from array that predicate returns truthy for and returns an array of the
removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike \_.filter, this method mutates array.

#### Type parameters

• **T**

#### Parameters

• **array**: [`List`](../type-aliases/List.md)\<`T`\>

The array to modify.

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the new array of removed elements.

#### Source

node_modules/@types/lodash/common/array.d.ts:1118

---

### repeat()

> **repeat**(`string`?, `n`?): `string`

Repeats the given string n times.

#### Parameters

• **string?**: `string`

The string to repeat.

• **n?**: `number`

The number of times to repeat the string.

#### Returns

`string`

Returns the repeated string.

#### Source

node_modules/@types/lodash/common/string.d.ts:325

---

### replace()

#### replace(string, pattern, replacement)

> **replace**(`string`, `pattern`, `replacement`): `string`

Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace.

##### Parameters

• **string**: `string`

• **pattern**: `string` \| `RegExp`

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

Returns the modified string.

##### Source

node_modules/@types/lodash/common/string.d.ts:349

#### replace(pattern, replacement)

> **replace**(`pattern`, `replacement`): `string`

##### Parameters

• **pattern**: `string` \| `RegExp`

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

\_.replace

##### Source

node_modules/@types/lodash/common/string.d.ts:353

---

### rest()

> **rest**(`func`, `start`?): (...`args`) => `any`

Creates a function that invokes func with the this binding of the created function and arguments
from start and beyond provided as an array.

Note: This method is based on the rest parameter.

#### Parameters

• **func**

The function to apply a rest parameter to.

• **start?**: `number`

The start position of the rest parameter.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`any`

#### Source

node_modules/@types/lodash/common/function.d.ts:1309

---

### result()

> **result**\<`TResult`\>(`object`, `path`, `defaultValue`?): `TResult`

This method is like \_.get except that if the resolved value is a function it’s invoked with the
this binding of its parent object and its result is returned.

#### Type parameters

• **TResult**

#### Parameters

• **object**: `any`

The object to query.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to resolve.

• **defaultValue?**: `TResult` \| (...`args`) => `TResult`

The value returned if the resolved value is undefined.

#### Returns

`TResult`

Returns the resolved value.

#### Source

node_modules/@types/lodash/common/object.d.ts:2177

---

### round()

> **round**(`n`, `precision`?): `number`

Calculates n rounded to precision.

#### Parameters

• **n**: `number`

The number to round.

• **precision?**: `number`

The precision to round to.

#### Returns

`number`

Returns the rounded number.

#### Source

node_modules/@types/lodash/common/math.d.ts:300

---

### runInContext()

> **runInContext**(`context`?): [`LoDashStatic`](LoDashStatic.md)

Create a new pristine lodash function using the given context object.

#### Parameters

• **context?**: `object`

The context object.

#### Returns

[`LoDashStatic`](LoDashStatic.md)

Returns a new lodash function.

#### Source

node_modules/@types/lodash/common/util.d.ts:960

---

### sample()

#### sample(collection)

> **sample**\<`T`\>(`collection`): `T`

Gets a random element from collection.

##### Type parameters

• **T**

##### Parameters

• **collection**: readonly [`T`, `T`]

The collection to sample.

##### Returns

`T`

Returns the random element.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1648

#### sample(collection)

> **sample**\<`T`\>(`collection`): `undefined` \| `T`

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

##### Returns

`undefined` \| `T`

##### See

\_.sample

##### Source

node_modules/@types/lodash/common/collection.d.ts:1652

#### sample(collection)

> **sample**\<`T`\>(`collection`): `undefined` \| `T`\[keyof `T`\]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.sample

##### Source

node_modules/@types/lodash/common/collection.d.ts:1656

---

### sampleSize()

#### sampleSize(collection, n)

> **sampleSize**\<`T`\>(`collection`, `n`?): `T`[]

Gets n random elements at unique keys from collection up to the size of collection.

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The collection to sample.

• **n?**: `number`

The number of elements to sample.

##### Returns

`T`[]

Returns the random elements.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1708

#### sampleSize(collection, n)

> **sampleSize**\<`T`\>(`collection`, `n`?): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **n?**: `number`

##### Returns

`T`\[keyof `T`\][]

##### See

\_.sampleSize

##### Source

node_modules/@types/lodash/common/collection.d.ts:1712

---

### set()

#### set(object, path, value)

> **set**\<`T`\>(`object`, `path`, `value`): `T`

Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are
created for missing index properties while objects are created for all other missing properties. Use
\_.setWith to customize path creation.

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `T`

The object to modify.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

• **value**: `any`

The value to set.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:2202

#### set(object, path, value)

> **set**\<`TResult`\>(`object`, `path`, `value`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **object**: `object`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

`TResult`

##### See

\_.set

##### Source

node_modules/@types/lodash/common/object.d.ts:2206

---

### setWith()

#### setWith(object, path, value, customizer)

> **setWith**\<`T`\>(`object`, `path`, `value`, `customizer`?): `T`

This method is like \_.set except that it accepts customizer which is invoked to produce the objects
of path. If customizer returns undefined path creation is handled by the method instead. The
customizer is invoked with three arguments: (nsValue, key, nsObject).

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `T`

The object to modify.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

• **value**: `any`

The value to set.

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

The function to customize assigned values.

##### Returns

`T`

Returns object.

##### Source

node_modules/@types/lodash/common/object.d.ts:2241

#### setWith(object, path, value, customizer)

> **setWith**\<`T`, `TResult`\>(`object`, `path`, `value`, `customizer`?): `TResult`

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **object**: `T`

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`TResult`

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2245

---

### shuffle()

#### shuffle(collection)

> **shuffle**\<`T`\>(`collection`): `T`[]

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to shuffle.

##### Returns

`T`[]

Returns the new shuffled array.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1763

#### shuffle(collection)

> **shuffle**\<`T`\>(`collection`): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

##### Returns

`T`\[keyof `T`\][]

##### See

\_.shuffle

##### Source

node_modules/@types/lodash/common/collection.d.ts:1767

---

### size()

> **size**(`collection`): `number`

Gets the size of collection by returning its length for array-like values or the number of own
enumerable properties for objects.

#### Parameters

• **collection**: `undefined` \| `null` \| `string` \| `object`

The collection to inspect.

#### Returns

`number`

Returns the size of collection.

#### Source

node_modules/@types/lodash/common/collection.d.ts:1819

---

### slice()

> **slice**\<`T`\>(`array`, `start`?, `end`?): `T`[]

Creates a slice of array from start up to, but not including, end.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to slice.

• **start?**: `number`

The start position.

• **end?**: `number`

The end position.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1163

---

### snakeCase()

> **snakeCase**(`string`?): `string`

Converts string to snake case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the snake cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:383

---

### some()

#### some(collection, predicate)

> **some**\<`T`\>(`collection`, `predicate`?): `boolean`

Checks if predicate returns truthy for any element of collection. Iteration is stopped once
predicate returns truthy. The predicate is invoked with three arguments: (value, index|key,
collection).

##### Type parameters

• **T**

##### Parameters

• **collection**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The collection to iterate over.

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

The function invoked per iteration.

##### Returns

`boolean`

Returns true if any element passes the predicate check, else false.

##### Source

node_modules/@types/lodash/common/collection.d.ts:1842

#### some(collection, predicate)

> **some**\<`T`\>(`collection`, `predicate`?): `boolean`

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **collection**: `undefined` \| `null` \| `T`

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

##### Returns

`boolean`

##### See

\_.some

##### Source

node_modules/@types/lodash/common/collection.d.ts:1846

---

### split()

#### split(string, separator, limit)

> **split**(`string`, `separator`?, `limit`?): `string`[]

Splits string by separator.

Note: This method is based on String#split.

##### Parameters

• **string**: `undefined` \| `null` \| `string`

The string to split.

• **separator?**: `string` \| `RegExp`

The separator pattern to split by.

• **limit?**: `number`

The length to truncate results to.

##### Returns

`string`[]

Returns the new array of string segments.

##### Source

node_modules/@types/lodash/common/string.d.ts:409

#### split(string, index, guard)

> **split**(`string`, `index`, `guard`): `string`[]

##### Parameters

• **string**: `undefined` \| `null` \| `string`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`string`[]

##### See

\_.split

##### Source

node_modules/@types/lodash/common/string.d.ts:413

---

### spread()

> **spread**\<`TResult`\>(`func`, `start`?): (...`args`) => `TResult`

Creates a function that invokes func with the this binding of the created function and an array of
arguments much like Function#apply.

Note: This method is based on the spread operator.

#### Type parameters

• **TResult**

#### Parameters

• **func**

The function to spread arguments over.

• **start?**: `number`

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `any`[]

##### Returns

`TResult`

#### Source

node_modules/@types/lodash/common/function.d.ts:1333

---

### startCase()

> **startCase**(`string`?): `string`

Converts string to start case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the start cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:435

---

### startsWith()

> **startsWith**(`string`?, `target`?, `position`?): `boolean`

Checks if string starts with the given target string.

#### Parameters

• **string?**: `string`

The string to search.

• **target?**: `string`

The string to search for.

• **position?**: `number`

The position to search from.

#### Returns

`boolean`

Returns true if string starts with target, else false.

#### Source

node_modules/@types/lodash/common/string.d.ts:459

---

### stubArray()

> **stubArray**(): `any`[]

This method returns a new empty array.

#### Returns

`any`[]

Returns the new empty array.

#### Source

node_modules/@types/lodash/common/util.d.ts:975

---

### stubFalse()

#### stubFalse()

> **stubFalse**(): `false`

This method returns `false`.

##### Returns

`false`

Returns `false`.

##### Source

node_modules/@types/lodash/common/util.d.ts:996

#### stubFalse()

> **stubFalse**(): `false`

This method returns false.

##### Returns

`false`

Returns false.

##### Source

node_modules/@types/lodash/common/util.d.ts:1204

---

### stubObject()

> **stubObject**(): `any`

This method returns a new empty object.

#### Returns

`any`

Returns the new empty object.

#### Source

node_modules/@types/lodash/common/util.d.ts:1017

---

### stubString()

> **stubString**(): `string`

This method returns an empty string.

#### Returns

`string`

Returns the empty string.

#### Source

node_modules/@types/lodash/common/util.d.ts:1038

---

### stubTrue()

#### stubTrue()

> **stubTrue**(): `true`

This method returns `true`.

##### Returns

`true`

Returns `true`.

##### Source

node_modules/@types/lodash/common/util.d.ts:1059

#### stubTrue()

> **stubTrue**(): `true`

This method returns true.

##### Returns

`true`

Returns true.

##### Source

node_modules/@types/lodash/common/util.d.ts:1179

---

### tail()

> **tail**\<`T`\>(`array`): `T`[]

Gets all but the first element of array.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1453

---

### take()

> **take**\<`T`\>(`array`, `n`?): `T`[]

Creates a slice of array with n elements taken from the beginning.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **n?**: `number`

The number of elements to take.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1475

---

### takeRight()

> **takeRight**\<`T`\>(`array`, `n`?): `T`[]

Creates a slice of array with n elements taken from the end.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **n?**: `number`

The number of elements to take.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1497

---

### takeRightWhile()

> **takeRightWhile**\<`T`\>(`array`, `predicate`?): `T`[]

Creates a slice of array with elements taken from the end. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1520

---

### takeWhile()

> **takeWhile**\<`T`\>(`array`, `predicate`?): `T`[]

Creates a slice of array with elements taken from the beginning. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to query.

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

The function invoked per iteration.

#### Returns

`T`[]

Returns the slice of array.

#### Source

node_modules/@types/lodash/common/array.d.ts:1543

---

### tap()

> **tap**\<`T`\>(`value`, `interceptor`): `T`

This method invokes interceptor and returns value. The interceptor is invoked with one argument;
(value). The purpose of this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

#### Type parameters

• **T**

#### Parameters

• **value**: `T`

The value to provide to interceptor.

• **interceptor**

The function to invoke.

#### Returns

`T`

Returns value.

#### Source

node_modules/@types/lodash/common/seq.d.ts:173

---

### template()

> **template**(`string`?, `options`?): [`TemplateExecutor`](TemplateExecutor.md)

Creates a compiled template function that can interpolate data properties in "interpolate"
delimiters, HTML-escape interpolated data properties in "escape" delimiters, and execute JavaScript
in "evaluate" delimiters. Data properties may be accessed as free variables in the template. If a
setting object is provided it takes precedence over \_.templateSettings values.

Note: In the development build \_.template utilizes
[sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl) for
easier debugging.

For more information on precompiling templates see
[lodash's custom builds documentation](https://lodash.com/custom-builds).

For more information on Chrome extension sandboxes see
[Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).

#### Parameters

• **string?**: `string`

The template string.

• **options?**: [`TemplateOptions`](TemplateOptions.md)

The options object.

#### Returns

[`TemplateExecutor`](TemplateExecutor.md)

Returns the compiled template function.

#### Source

node_modules/@types/lodash/common/string.d.ts:514

---

### throttle()

#### throttle(func, wait, options)

> **throttle**\<`T`\>(`func`, `wait`?, `options`?):
> [`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Creates a throttled function that only invokes func at most once per every wait milliseconds. The
throttled function comes with a cancel method to cancel delayed invocations and a flush method to
immediately invoke them. Provide an options object to indicate that func should be invoked on the
leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled function return
the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the throttled function is invoked more than once during the wait timeout.

##### Type parameters

• **T** _extends_ (...`args`) => `any`

##### Parameters

• **func**: `T`

The function to throttle.

• **wait?**: `number`

The number of milliseconds to throttle invocations to.

• **options?**: [`ThrottleSettingsLeading`](../type-aliases/ThrottleSettingsLeading.md)

The options object.

##### Returns

[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\>

Returns the new throttled function.

##### Source

node_modules/@types/lodash/common/function.d.ts:1375

#### throttle(func, wait, options)

> **throttle**\<`T`\>(`func`, `wait`?, `options`?): [`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

##### Type parameters

• **T** _extends_ (...`args`) => `any`

##### Parameters

• **func**: `T`

• **wait?**: `number`

• **options?**: [`ThrottleSettings`](ThrottleSettings.md)

##### Returns

[`DebouncedFunc`](DebouncedFunc.md)\<`T`\>

##### Source

node_modules/@types/lodash/common/function.d.ts:1376

---

### thru()

> **thru**\<`T`, `TResult`\>(`value`, `interceptor`): `TResult`

This method is like \_.tap except that it returns the result of interceptor.

#### Type parameters

• **T**

• **TResult**

#### Parameters

• **value**: `T`

The value to provide to interceptor.

• **interceptor**

The function to invoke.

#### Returns

`TResult`

Returns the result of interceptor.

#### Source

node_modules/@types/lodash/common/seq.d.ts:196

---

### times()

#### times(n, iteratee)

> **times**\<`TResult`\>(`n`, `iteratee`): `TResult`[]

Invokes the iteratee function n times, returning an array of the results of each invocation. The
iteratee is invoked with one argument; (index).

##### Type parameters

• **TResult**

##### Parameters

• **n**: `number`

The number of times to invoke iteratee.

• **iteratee**

The function invoked per iteration.

##### Returns

`TResult`[]

Returns the array of results.

##### Source

node_modules/@types/lodash/common/util.d.ts:1083

#### times(n)

> **times**(`n`): `number`[]

##### Parameters

• **n**: `number`

##### Returns

`number`[]

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1087

---

### toArray()

#### toArray(value)

> **toArray**\<`T`\>(`value`): `T`[]

Converts value to an array.

##### Type parameters

• **T**

##### Parameters

• **value**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The value to convert.

##### Returns

`T`[]

Returns the converted array.

##### Source

node_modules/@types/lodash/common/lang.d.ts:1416

#### toArray(value)

> **toArray**\<`T`\>(`value`): `T`\[keyof `T`\][]

##### Type parameters

• **T**

##### Parameters

• **value**: `T`

##### Returns

`T`\[keyof `T`\][]

##### See

\_.toArray

##### Source

node_modules/@types/lodash/common/lang.d.ts:1420

#### toArray()

> **toArray**(): `any`[]

##### Returns

`any`[]

##### See

\_.toArray

##### Source

node_modules/@types/lodash/common/lang.d.ts:1424

---

### toLower()

> **toLower**(`string`?): `string`

Converts `string`, as a whole, to lower case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the lower cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:536

---

### toPairs()

#### toPairs(object)

> **toPairs**\<`T`\>(`object`?): [`string`, `T`][]

Creates an array of own enumerable key-value pairs for object.

##### Type parameters

• **T**

##### Parameters

• **object?**: [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to query.

##### Returns

[`string`, `T`][]

Returns the new array of key-value pairs.

##### Source

node_modules/@types/lodash/common/object.d.ts:2274

#### toPairs(object)

> **toPairs**(`object`?): [`string`, `any`][]

##### Parameters

• **object?**: `object`

##### Returns

[`string`, `any`][]

##### See

\_.toPairs

##### Source

node_modules/@types/lodash/common/object.d.ts:2278

---

### toPairsIn()

#### toPairsIn(object)

> **toPairsIn**\<`T`\>(`object`?): [`string`, `T`][]

Creates an array of own and inherited enumerable key-value pairs for object.

##### Type parameters

• **T**

##### Parameters

• **object?**: [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\>

The object to query.

##### Returns

[`string`, `T`][]

Returns the new array of key-value pairs.

##### Source

node_modules/@types/lodash/common/object.d.ts:2299

#### toPairsIn(object)

> **toPairsIn**(`object`?): [`string`, `any`][]

##### Parameters

• **object?**: `object`

##### Returns

[`string`, `any`][]

##### See

\_.toPairsIn

##### Source

node_modules/@types/lodash/common/object.d.ts:2303

---

### toPlainObject()

> **toPlainObject**(`value`?): `any`

Converts value to a plain object flattening inherited enumerable properties of value to own
properties of the plain object.

#### Parameters

• **value?**: `any`

The value to convert.

#### Returns

`any`

Returns the converted plain object.

#### Source

node_modules/@types/lodash/common/lang.d.ts:1627

---

### toUpper()

> **toUpper**(`string`?): `string`

Converts `string`, as a whole, to upper case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the upper cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:558

---

### transform()

#### transform(object, iteratee, accumulator)

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator`?): `TResult`

An alternative to \_.reduce; this method transforms object to a new accumulator object which is the
result of running each of its own enumerable properties through iteratee, with each invocation
potentially mutating the accumulator object. The iteratee is invoked with four arguments:
(accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly
returning false.

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **object**: readonly `T`[]

The object to iterate over.

• **iteratee**: [`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`,
`TResult`\>

The function invoked per iteration.

• **accumulator?**: `TResult`

The custom accumulator value.

##### Returns

`TResult`

Returns the accumulated value.

##### Source

node_modules/@types/lodash/common/object.d.ts:2329

#### transform(object, iteratee, accumulator)

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator`?): `TResult`

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **object**: [`Dictionary`](Dictionary.md)\<`T`\>

• **iteratee**: [`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`,
`string`, `TResult`\>

• **accumulator?**: `TResult`

##### Returns

`TResult`

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2333

#### transform(object, iteratee, accumulator)

> **transform**\<`T`, `TResult`\>(`object`, `iteratee`, `accumulator`?): `TResult`

##### Type parameters

• **T** _extends_ `object`

• **TResult**

##### Parameters

• **object**: `T`

• **iteratee**:
[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
keyof `T`, `TResult`\>

• **accumulator?**: `TResult`

##### Returns

`TResult`

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2337

#### transform(object)

> **transform**(`object`): `any`[]

##### Parameters

• **object**: `any`[]

##### Returns

`any`[]

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2341

#### transform(object)

> **transform**(`object`): [`Dictionary`](Dictionary.md)\<`any`\>

##### Parameters

• **object**: `object`

##### Returns

[`Dictionary`](Dictionary.md)\<`any`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2345

---

### trim()

#### trim(string, chars)

> **trim**(`string`?, `chars`?): `string`

Removes leading and trailing whitespace or specified characters from string.

##### Parameters

• **string?**: `string`

The string to trim.

• **chars?**: `string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

##### Source

node_modules/@types/lodash/common/string.d.ts:581

#### trim(string, index, guard)

> **trim**(`string`, `index`, `guard`): `string`

##### Parameters

• **string**: `string`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`string`

##### See

\_.trim

##### Source

node_modules/@types/lodash/common/string.d.ts:585

---

### trimEnd()

#### trimEnd(string, chars)

> **trimEnd**(`string`?, `chars`?): `string`

Removes trailing whitespace or specified characters from string.

##### Parameters

• **string?**: `string`

The string to trim.

• **chars?**: `string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

##### Source

node_modules/@types/lodash/common/string.d.ts:608

#### trimEnd(string, index, guard)

> **trimEnd**(`string`, `index`, `guard`): `string`

##### Parameters

• **string**: `string`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`string`

##### See

\_.trimEnd

##### Source

node_modules/@types/lodash/common/string.d.ts:612

---

### trimStart()

#### trimStart(string, chars)

> **trimStart**(`string`?, `chars`?): `string`

Removes leading whitespace or specified characters from string.

##### Parameters

• **string?**: `string`

The string to trim.

• **chars?**: `string`

The characters to trim.

##### Returns

`string`

Returns the trimmed string.

##### Source

node_modules/@types/lodash/common/string.d.ts:635

#### trimStart(string, index, guard)

> **trimStart**(`string`, `index`, `guard`): `string`

##### Parameters

• **string**: `string`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`string`

##### See

\_.trimStart

##### Source

node_modules/@types/lodash/common/string.d.ts:639

---

### truncate()

> **truncate**(`string`?, `options`?): `string`

Truncates string if it’s longer than the given maximum string length. The last characters of the
truncated string are replaced with the omission string which defaults to "…".

#### Parameters

• **string?**: `string`

The string to truncate.

• **options?**: [`TruncateOptions`](TruncateOptions.md)

The options object or maximum string length.

#### Returns

`string`

Returns the truncated string.

#### Source

node_modules/@types/lodash/common/string.d.ts:677

---

### unescape()

> **unescape**(`string`?): `string`

The inverse of \_.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;,
and &#96; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party
library like he.

#### Parameters

• **string?**: `string`

The string to unescape.

#### Returns

`string`

Returns the unescaped string.

#### Source

node_modules/@types/lodash/common/string.d.ts:703

---

### union()

> **union**\<`T`\>(...`arrays`): `T`[]

Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
equality comparisons.

#### Type parameters

• **T**

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of combined values.

#### Source

node_modules/@types/lodash/common/array.d.ts:1565

---

### unionBy()

#### unionBy(arrays, iteratee)

> **unionBy**\<`T`\>(`arrays`, `iteratee`?): `T`[]

This method is like `_.union` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

##### Type parameters

• **T**

##### Parameters

• **arrays**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The arrays to inspect.

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

The iteratee invoked per element.

##### Returns

`T`[]

Returns the new array of combined values.

##### Source

node_modules/@types/lodash/common/array.d.ts:1589

#### unionBy(arrays1, arrays2, iteratee)

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `iteratee`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays1**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1593

#### unionBy(arrays1, arrays2, arrays3, iteratee)

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays1**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1597

#### unionBy(arrays1, arrays2, arrays3, arrays4, iteratee)

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `iteratee`?): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays1**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays4**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`T`[]

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1601

#### unionBy(arrays1, arrays2, arrays3, arrays4, arrays5, iteratee)

> **unionBy**\<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`, ...`iteratee`): `T`[]

##### Type parameters

• **T**

##### Parameters

• **arrays1**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays3**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays4**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **arrays5**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`T`[]

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1605

---

### uniqueId()

> **uniqueId**(`prefix`?): `string`

Generates a unique ID. If prefix is provided the ID is appended to it.

#### Parameters

• **prefix?**: `string`

The value to prefix the ID with.

#### Returns

`string`

Returns the unique ID.

#### Source

node_modules/@types/lodash/common/util.d.ts:1156

---

### unset()

> **unset**(`object`, `path`): `boolean`

Removes the property at path of object.

Note: This method mutates object.

#### Parameters

• **object**: `any`

The object to modify.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to unset.

#### Returns

`boolean`

Returns true if the property is deleted, else false.

#### Source

node_modules/@types/lodash/common/object.d.ts:2405

---

### unzip()

> **unzip**\<`T`\>(`array`): `T`[][]

This method is like \_.zip except that it accepts an array of grouped elements and creates an array
regrouping the elements to their pre-zip configuration.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| `T`[][] \|
[`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\>

The array of grouped elements to process.

#### Returns

`T`[][]

Returns the new array of regrouped elements.

#### Source

node_modules/@types/lodash/common/array.d.ts:1776

---

### unzipWith()

#### unzipWith(array, iteratee)

> **unzipWith**\<`T`, `TResult`\>(`array`, `iteratee`): `TResult`[]

This method is like \_.unzip except that it accepts an iteratee to specify how regrouped values
should be combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **array**: `undefined` \| `null` \|
[`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\>

The array of grouped elements to process.

• **iteratee**

The function to combine regrouped values.

##### Returns

`TResult`[]

Returns the new array of regrouped elements.

##### Source

node_modules/@types/lodash/common/array.d.ts:1799

#### unzipWith(array)

> **unzipWith**\<`T`\>(`array`): `T`[][]

##### Type parameters

• **T**

##### Parameters

• **array**: `undefined` \| `null` \|
[`List`](../type-aliases/List.md)\<[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`T`[][]

##### See

\_.unzipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1803

---

### update()

> **update**(`object`, `path`, `updater`): `any`

This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith
to customize path creation. The updater is invoked with one argument: (value).

#### Parameters

• **object**: `object`

The object to modify.

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

The path of the property to set.

• **updater**

The function to produce the updated value.

#### Returns

`any`

Returns object.

#### Source

node_modules/@types/lodash/common/object.d.ts:2429

---

### upperCase()

> **upperCase**(`string`?): `string`

Converts `string`, as space separated words, to upper case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the upper cased string.

#### Source

node_modules/@types/lodash/common/string.d.ts:725

---

### upperFirst()

> **upperFirst**(`string`?): `string`

Converts the first character of `string` to upper case.

#### Parameters

• **string?**: `string`

The string to convert.

#### Returns

`string`

Returns the converted string.

#### Source

node_modules/@types/lodash/common/string.d.ts:747

---

### values()

#### values(object)

> **values**\<`T`\>(`object`): `T`[]

Creates an array of the own enumerable property values of object.

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| [`List`](../type-aliases/List.md)\<`T`\>

The object to query.

##### Returns

`T`[]

Returns an array of property values.

##### Source

node_modules/@types/lodash/common/object.d.ts:2499

#### values(object)

> **values**\<`T`\>(`object`): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

##### Returns

`T`\[keyof `T`\][]

##### See

\_.values

##### Source

node_modules/@types/lodash/common/object.d.ts:2503

#### values(object)

> **values**(`object`): `any`[]

##### Parameters

• **object**: `any`

##### Returns

`any`[]

##### See

\_.values

##### Source

node_modules/@types/lodash/common/object.d.ts:2507

---

### valuesIn()

#### valuesIn(object)

> **valuesIn**\<`T`\>(`object`): `T`[]

Creates an array of the own and inherited enumerable property values of object.

##### Type parameters

• **T**

##### Parameters

• **object**: `undefined` \| `null` \| [`Dictionary`](Dictionary.md)\<`T`\> \|
[`NumericDictionary`](NumericDictionary.md)\<`T`\> \| [`List`](../type-aliases/List.md)\<`T`\>

The object to query.

##### Returns

`T`[]

Returns the array of property values.

##### Source

node_modules/@types/lodash/common/object.d.ts:2546

#### valuesIn(object)

> **valuesIn**\<`T`\>(`object`): `T`\[keyof `T`\][]

##### Type parameters

• **T** _extends_ `object`

##### Parameters

• **object**: `undefined` \| `null` \| `T`

##### Returns

`T`\[keyof `T`\][]

##### See

\_.valuesIn

##### Source

node_modules/@types/lodash/common/object.d.ts:2550

---

### without()

> **without**\<`T`\>(`array`, ...`values`): `T`[]

Creates an array excluding all provided values using SameValueZero for equality comparisons.

#### Type parameters

• **T**

#### Parameters

• **array**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

The array to filter.

• ...**values**: `T`[]

The values to exclude.

#### Returns

`T`[]

Returns the new array of filtered values.

#### Source

node_modules/@types/lodash/common/array.d.ts:1833

---

### words()

#### words(string, pattern)

> **words**(`string`?, `pattern`?): `string`[]

Splits `string` into an array of its words.

##### Parameters

• **string?**: `string`

The string to inspect.

• **pattern?**: `string` \| `RegExp`

The pattern to match words.

##### Returns

`string`[]

Returns the words of `string`.

##### Source

node_modules/@types/lodash/common/string.d.ts:770

#### words(string, index, guard)

> **words**(`string`, `index`, `guard`): `string`[]

##### Parameters

• **string**: `string`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`string`[]

##### See

\_.words

##### Source

node_modules/@types/lodash/common/string.d.ts:774

---

### wrap()

> **wrap**\<`T`, `TArgs`, `TResult`\>(`value`, `wrapper`): (...`args`) => `TResult`

Creates a function that provides value to the wrapper function as its first argument. Any additional
arguments provided to the function are appended to those provided to the wrapper function. The
wrapper is invoked with the this binding of the created function.

#### Type parameters

• **T**

• **TArgs**

• **TResult**

#### Parameters

• **value**: `T`

The value to wrap.

• **wrapper**

The wrapper function.

#### Returns

`Function`

Returns the new function.

##### Parameters

• ...**args**: `TArgs`[]

##### Returns

`TResult`

#### Source

node_modules/@types/lodash/common/function.d.ts:1441

---

### xor()

> **xor**\<`T`\>(...`arrays`): `T`[]

Creates an array of unique values that is the symmetric difference of the provided arrays.

#### Type parameters

• **T**

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

The arrays to inspect.

#### Returns

`T`[]

Returns the new array of values.

#### Source

node_modules/@types/lodash/common/array.d.ts:1854

---

### zip()

#### zip(arrays1, arrays2)

> **zip**\<`T1`, `T2`\>(`arrays1`, `arrays2`): [`undefined` \| `T1`, `undefined` \| `T2`][]

Creates an array of grouped elements, the first of which contains the first elements of the given
arrays, the second of which contains the second elements of the given arrays, and so on.

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

[`undefined` \| `T1`, `undefined` \| `T2`][]

Returns the new array of grouped elements.

##### Source

node_modules/@types/lodash/common/array.d.ts:1973

#### zip(arrays1, arrays2, arrays3)

> **zip**\<`T1`, `T2`, `T3`\>(`arrays1`, `arrays2`, `arrays3`): [`undefined` \| `T1`, `undefined` \|
> `T2`, `undefined` \| `T3`][]

##### Type parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

##### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`][]

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1977

#### zip(arrays1, arrays2, arrays3, arrays4)

> **zip**\<`T1`, `T2`, `T3`, `T4`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`): [`undefined`
> \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`][]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **arrays4**: [`List`](../type-aliases/List.md)\<`T4`\>

##### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`][]

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1981

#### zip(arrays1, arrays2, arrays3, arrays4, arrays5)

> **zip**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`):
> [`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`, `undefined`
> \| `T5`][]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **arrays4**: [`List`](../type-aliases/List.md)\<`T4`\>

• **arrays5**: [`List`](../type-aliases/List.md)\<`T5`\>

##### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`, `undefined`
\| `T5`][]

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1985

#### zip(arrays)

> **zip**\<`T`\>(...`arrays`): (`undefined` \| `T`)[][]

##### Type parameters

• **T**

##### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

##### Returns

(`undefined` \| `T`)[][]

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1989

---

### zipObject()

#### zipObject(props, values)

> **zipObject**\<`T`\>(`props`, `values`): [`Dictionary`](Dictionary.md)\<`T`\>

This method is like \_.fromPairs except that it accepts two arrays, one of property identifiers and
one of corresponding values.

##### Type parameters

• **T**

##### Parameters

• **props**: [`List`](../type-aliases/List.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>

The property names.

• **values**: [`List`](../type-aliases/List.md)\<`T`\>

The property values.

##### Returns

[`Dictionary`](Dictionary.md)\<`T`\>

Returns the new object.

##### Source

node_modules/@types/lodash/common/array.d.ts:2020

#### zipObject(props)

> **zipObject**(`props`?): [`Dictionary`](Dictionary.md)\<`undefined`\>

##### Parameters

• **props?**: [`List`](../type-aliases/List.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>

##### Returns

[`Dictionary`](Dictionary.md)\<`undefined`\>

##### See

\_.zipObject

##### Source

node_modules/@types/lodash/common/array.d.ts:2024

---

### zipObjectDeep()

> **zipObjectDeep**(`paths`?, `values`?): `object`

This method is like \_.zipObject except that it supports property paths.

#### Parameters

• **paths?**: [`List`](../type-aliases/List.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>

The property names.

• **values?**: [`List`](../type-aliases/List.md)\<`any`\>

The property values.

#### Returns

`object`

Returns the new object.

#### Source

node_modules/@types/lodash/common/array.d.ts:2054

---

### zipWith()

#### zipWith(arrays, iteratee)

> **zipWith**\<`T`, `TResult`\>(`arrays`, `iteratee`): `TResult`[]

This method is like \_.zip except that it accepts an iteratee to specify how grouped values should
be combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

##### Type parameters

• **T**

• **TResult**

##### Parameters

• **arrays**: [`List`](../type-aliases/List.md)\<`T`\>

The arrays to process.

• **iteratee**

The function to combine grouped values.

##### Returns

`TResult`[]

Returns the new array of grouped elements.

##### Source

node_modules/@types/lodash/common/array.d.ts:2077

#### zipWith(arrays1, arrays2, iteratee)

> **zipWith**\<`T1`, `T2`, `TResult`\>(`arrays1`, `arrays2`, `iteratee`): `TResult`[]

##### Type parameters

• **T1**

• **T2**

• **TResult**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**

##### Returns

`TResult`[]

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2081

#### zipWith(arrays1, arrays2, arrays3, iteratee)

> **zipWith**\<`T1`, `T2`, `T3`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee`):
> `TResult`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **TResult**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **iteratee**

##### Returns

`TResult`[]

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2085

#### zipWith(arrays1, arrays2, arrays3, arrays4, iteratee)

> **zipWith**\<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
> `iteratee`): `TResult`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **TResult**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **arrays4**: [`List`](../type-aliases/List.md)\<`T4`\>

• **iteratee**

##### Returns

`TResult`[]

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2089

#### zipWith(arrays1, arrays2, arrays3, arrays4, arrays5, iteratee)

> **zipWith**\<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
> `arrays5`, `iteratee`): `TResult`[]

##### Type parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **TResult**

##### Parameters

• **arrays1**: [`List`](../type-aliases/List.md)\<`T1`\>

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **arrays4**: [`List`](../type-aliases/List.md)\<`T4`\>

• **arrays5**: [`List`](../type-aliases/List.md)\<`T5`\>

• **iteratee**

##### Returns

`TResult`[]

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2093

#### zipWith(iteratee)

> **zipWith**\<`T`, `TResult`\>(...`iteratee`): `TResult`[]

##### Type parameters

• **T**

• **TResult**

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| (...`group`) => `TResult` \|
[`List`](../type-aliases/List.md)\<`T`\>)[]

##### Returns

`TResult`[]

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2097

## Util

### cond()

#### cond(pairs)

> **cond**\<`R`\>(`pairs`): () => `R`

Creates a function that iterates over `pairs` and invokes the corresponding function of the first
predicate to return truthy. The predicate-function pairs are invoked with the `this` binding and
arguments of the created function.

##### Type parameters

• **R**

##### Parameters

• **pairs**: [`CondPairNullary`](../type-aliases/CondPairNullary.md)\<`R`\>[]

The predicate-function pairs.

##### Returns

`Function`

Returns the new composite function.

###### Returns

`R`

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

##### Source

node_modules/@types/lodash/common/util.d.ts:82

#### cond(pairs)

> **cond**\<`T`, `R`\>(`pairs`): (`Target`) => `R`

##### Type parameters

• **T**

• **R**

##### Parameters

• **pairs**: [`CondPairUnary`](../type-aliases/CondPairUnary.md)\<`T`, `R`\>[]

##### Returns

`Function`

###### Parameters

• **Target**: `T`

###### Returns

`R`

##### Source

node_modules/@types/lodash/common/util.d.ts:83

---

### iteratee()

#### iteratee(func)

> **iteratee**\<`TFunction`\>(`func`?): `TFunction`

Creates a function that invokes `func` with the arguments of the created function. If `func` is a
property name the created callback returns the property value for a given element. If `func` is an
object the created callback returns `true` for elements that contain the equivalent object
properties, otherwise it returns `false`.

##### Type parameters

• **TFunction** _extends_ (...`args`) => `any`

##### Parameters

• **func?**: `TFunction`

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

##### Source

node_modules/@types/lodash/common/util.d.ts:424

#### iteratee(func)

> **iteratee**(`func`): (...`args`) => `any`

##### Parameters

• **func**: `string` \| `number` \| `symbol` \| `object`

##### Returns

`Function`

###### Parameters

• ...**args**: `any`[]

###### Returns

`any`

##### See

\_.iteratee

##### Source

node_modules/@types/lodash/common/util.d.ts:428

---

### rangeRight()

#### rangeRight(start, end, step)

> **rangeRight**(`start`, `end`?, `step`?): `number`[]

This method is like `_.range` except that it populates values in descending order.

##### Parameters

• **start**: `number`

The start of the range.

• **end?**: `number`

The end of the range.

• **step?**: `number`

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

##### Source

node_modules/@types/lodash/common/util.d.ts:934

#### rangeRight(end, index, guard)

> **rangeRight**(`end`, `index`, `guard`): `number`[]

##### Parameters

• **end**: `number`

• **index**: `string` \| `number`

• **guard**: `object`

##### Returns

`number`[]

##### See

\_.rangeRight

##### Source

node_modules/@types/lodash/common/util.d.ts:938

---

### toPath()

> **toPath**(`value`): `string`[]

Converts `value` to a property path array.

#### Parameters

• **value**: `any`

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

#### Source

node_modules/@types/lodash/common/util.d.ts:1134
