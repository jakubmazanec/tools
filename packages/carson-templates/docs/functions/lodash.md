[**@jakubmazanec/carson-templates**](../README.md)

---

# Function: lodash()

## Call Signature

> **lodash**\<`TrapAny`\>(`value`): [`Collection`](../../index/interfaces/Collection.md)\<`any`\> &
> [`Function`](../../index/interfaces/Function.md)\<`any`\> &
> [`Object`](../../index/interfaces/Object.md)\<`any`\> &
> [`Primitive`](../../index/interfaces/Primitive.md)\<`any`\> &
> [`String`](../../index/interfaces/String.md)

Defined in: node_modules/@types/lodash/common/common.d.ts:94

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

### Type Parameters

• **TrapAny** _extends_ `object`

### Parameters

#### value

`TrapAny`

### Returns

[`Collection`](../../index/interfaces/Collection.md)\<`any`\> &
[`Function`](../../index/interfaces/Function.md)\<`any`\> &
[`Object`](../../index/interfaces/Object.md)\<`any`\> &
[`Primitive`](../../index/interfaces/Primitive.md)\<`any`\> &
[`String`](../../index/interfaces/String.md)

## Call Signature

> **lodash**\<`T`\>(`value`): [`String`](../../index/interfaces/String.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:95

### Type Parameters

• **T** _extends_ `string`

### Parameters

#### value

`T`

### Returns

[`String`](../../index/interfaces/String.md)\<`T`\>

## Call Signature

> **lodash**\<`T`\>(`value`): [`Primitive`](../../index/interfaces/Primitive.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:96

### Type Parameters

• **T** _extends_ `undefined` \| `null`

### Parameters

#### value

`T`

### Returns

[`Primitive`](../../index/interfaces/Primitive.md)\<`T`\>

## Call Signature

> **lodash**(`value`): [`String`](../../index/interfaces/String.md)

Defined in: node_modules/@types/lodash/common/common.d.ts:97

### Parameters

#### value

`undefined` | `null` | `string`

### Returns

[`String`](../../index/interfaces/String.md)

## Call Signature

> **lodash**\<`T`\>(`value`): [`Function`](../../index/interfaces/Function.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:98

### Type Parameters

• **T** _extends_ (...`args`) => `any`

### Parameters

#### value

`T`

### Returns

[`Function`](../../index/interfaces/Function.md)\<`T`\>

## Call Signature

> **lodash**\<`T`\>(`value`): [`Collection`](../../index/interfaces/Collection.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:99

### Type Parameters

• **T** = `any`

### Parameters

#### value

`undefined` | `null` | [`List`](../../index/type-aliases/List.md)\<`T`\>

### Returns

[`Collection`](../../index/interfaces/Collection.md)\<`T`\>

## Call Signature

> **lodash**\<`T`\>(`value`): [`Object`](../../index/interfaces/Object.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:100

### Type Parameters

• **T** _extends_ `object`

### Parameters

#### value

`undefined` | `null` | `T`

### Returns

[`Object`](../../index/interfaces/Object.md)\<`T`\>

## Call Signature

> **lodash**\<`T`\>(`value`): [`Primitive`](../../index/interfaces/Primitive.md)\<`T`\>

Defined in: node_modules/@types/lodash/common/common.d.ts:101

### Type Parameters

• **T**

### Parameters

#### value

`T`

### Returns

[`Primitive`](../../index/interfaces/Primitive.md)\<`T`\>
