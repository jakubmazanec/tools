# Interface: LoDashStatic

[lodash](../modules/lodash.md).LoDashStatic

## Callable

### LoDashStatic

▸ **LoDashStatic**<`TrapAny`\>(`value`): [`Collection`](lodash.Collection.md)<`any`\> &
[`Function`](lodash.Function.md)<`any`\> & [`Object`](lodash.Object.md)<`any`\> &
[`Primitive`](lodash.Primitive.md)<`any`\> & [`String`](lodash.String.md)

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

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `TrapAny` | extends `Object` |

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `TrapAny` |

#### Returns

[`Collection`](lodash.Collection.md)<`any`\> & [`Function`](lodash.Function.md)<`any`\> &
[`Object`](lodash.Object.md)<`any`\> & [`Primitive`](lodash.Primitive.md)<`any`\> &
[`String`](lodash.String.md)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:94

### LoDashStatic

▸ **LoDashStatic**<`T`\>(`value`): [`Primitive`](lodash.Primitive.md)<`T`\>

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `T`  | extends `undefined` \| `null` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Primitive`](lodash.Primitive.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:95

### LoDashStatic

▸ **LoDashStatic**(`value`): [`String`](lodash.String.md)

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `value` | `undefined` \| `null` \| `string` |

#### Returns

[`String`](lodash.String.md)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:96

### LoDashStatic

▸ **LoDashStatic**<`T`\>(`value`): [`Function`](lodash.Function.md)<`T`\>

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Function`](lodash.Function.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:97

### LoDashStatic

▸ **LoDashStatic**<`T`\>(`value`): [`Collection`](lodash.Collection.md)<`T`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                               |
| :------ | :----------------------------------------------------------------- |
| `value` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

[`Collection`](lodash.Collection.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:98

### LoDashStatic

▸ **LoDashStatic**<`T`\>(`value`): [`Object`](lodash.Object.md)<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `value` | `undefined` \| `null` \| `T` |

#### Returns

[`Object`](lodash.Object.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:99

### LoDashStatic

▸ **LoDashStatic**<`T`\>(`value`): [`Primitive`](lodash.Primitive.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Primitive`](lodash.Primitive.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:100

## Table of contents

### Properties

- [VERSION](lodash.LoDashStatic.md#version)
- [bind](lodash.LoDashStatic.md#bind)
- [bindKey](lodash.LoDashStatic.md#bindkey)
- [curry](lodash.LoDashStatic.md#curry)
- [curryRight](lodash.LoDashStatic.md#curryright)
- [each](lodash.LoDashStatic.md#each)
- [eachRight](lodash.LoDashStatic.md#eachright)
- [first](lodash.LoDashStatic.md#first)
- [memoize](lodash.LoDashStatic.md#memoize)
- [partial](lodash.LoDashStatic.md#partial)
- [partialRight](lodash.LoDashStatic.md#partialright)
- [templateSettings](lodash.LoDashStatic.md#templatesettings)

### Array Methods

- [concat](lodash.LoDashStatic.md#concat)
- [differenceWith](lodash.LoDashStatic.md#differencewith)
- [fromPairs](lodash.LoDashStatic.md#frompairs)
- [indexOf](lodash.LoDashStatic.md#indexof)
- [intersectionBy](lodash.LoDashStatic.md#intersectionby)
- [intersectionWith](lodash.LoDashStatic.md#intersectionwith)
- [pullAll](lodash.LoDashStatic.md#pullall)
- [pullAllBy](lodash.LoDashStatic.md#pullallby)
- [pullAllWith](lodash.LoDashStatic.md#pullallwith)
- [reverse](lodash.LoDashStatic.md#reverse)
- [sortedIndex](lodash.LoDashStatic.md#sortedindex)
- [sortedIndexBy](lodash.LoDashStatic.md#sortedindexby)
- [sortedIndexOf](lodash.LoDashStatic.md#sortedindexof)
- [sortedLastIndex](lodash.LoDashStatic.md#sortedlastindex)
- [sortedLastIndexBy](lodash.LoDashStatic.md#sortedlastindexby)
- [sortedLastIndexOf](lodash.LoDashStatic.md#sortedlastindexof)
- [sortedUniq](lodash.LoDashStatic.md#sorteduniq)
- [sortedUniqBy](lodash.LoDashStatic.md#sorteduniqby)
- [unionWith](lodash.LoDashStatic.md#unionwith)
- [uniq](lodash.LoDashStatic.md#uniq)
- [uniqBy](lodash.LoDashStatic.md#uniqby)
- [uniqWith](lodash.LoDashStatic.md#uniqwith)
- [xorBy](lodash.LoDashStatic.md#xorby)
- [xorWith](lodash.LoDashStatic.md#xorwith)

### Collection Methods

- [flatMapDeep](lodash.LoDashStatic.md#flatmapdeep)
- [flatMapDepth](lodash.LoDashStatic.md#flatmapdepth)
- [orderBy](lodash.LoDashStatic.md#orderby)
- [sortBy](lodash.LoDashStatic.md#sortby)

### Function Methods

- [flip](lodash.LoDashStatic.md#flip)
- [unary](lodash.LoDashStatic.md#unary)

### Lang Methods

- [eq](lodash.LoDashStatic.md#eq)
- [isArrayLike](lodash.LoDashStatic.md#isarraylike)
- [isArrayLikeObject](lodash.LoDashStatic.md#isarraylikeobject)
- [isEqual](lodash.LoDashStatic.md#isequal)
- [isEqualWith](lodash.LoDashStatic.md#isequalwith)
- [isInteger](lodash.LoDashStatic.md#isinteger)
- [isLength](lodash.LoDashStatic.md#islength)
- [isMatch](lodash.LoDashStatic.md#ismatch)
- [isMatchWith](lodash.LoDashStatic.md#ismatchwith)
- [isNil](lodash.LoDashStatic.md#isnil)
- [isObjectLike](lodash.LoDashStatic.md#isobjectlike)
- [isSafeInteger](lodash.LoDashStatic.md#issafeinteger)
- [isSymbol](lodash.LoDashStatic.md#issymbol)
- [toFinite](lodash.LoDashStatic.md#tofinite)
- [toInteger](lodash.LoDashStatic.md#tointeger)
- [toLength](lodash.LoDashStatic.md#tolength)
- [toNumber](lodash.LoDashStatic.md#tonumber)
- [toSafeInteger](lodash.LoDashStatic.md#tosafeinteger)
- [toString](lodash.LoDashStatic.md#tostring)

### Math Methods

- [max](lodash.LoDashStatic.md#max)
- [maxBy](lodash.LoDashStatic.md#maxby)
- [mean](lodash.LoDashStatic.md#mean)
- [meanBy](lodash.LoDashStatic.md#meanby)
- [min](lodash.LoDashStatic.md#min)
- [minBy](lodash.LoDashStatic.md#minby)
- [subtract](lodash.LoDashStatic.md#subtract)
- [sum](lodash.LoDashStatic.md#sum)
- [sumBy](lodash.LoDashStatic.md#sumby)

### Number Methods

- [clamp](lodash.LoDashStatic.md#clamp)

### Object Methods

- [assign](lodash.LoDashStatic.md#assign)
- [assignIn](lodash.LoDashStatic.md#assignin)
- [assignInWith](lodash.LoDashStatic.md#assigninwith)
- [assignWith](lodash.LoDashStatic.md#assignwith)
- [functions](lodash.LoDashStatic.md#functions)
- [functionsIn](lodash.LoDashStatic.md#functionsin)
- [has](lodash.LoDashStatic.md#has)
- [hasIn](lodash.LoDashStatic.md#hasin)
- [merge](lodash.LoDashStatic.md#merge)
- [mergeWith](lodash.LoDashStatic.md#mergewith)
- [omit](lodash.LoDashStatic.md#omit)
- [omitBy](lodash.LoDashStatic.md#omitby)
- [pick](lodash.LoDashStatic.md#pick)
- [pickBy](lodash.LoDashStatic.md#pickby)
- [updateWith](lodash.LoDashStatic.md#updatewith)

### Other Methods

- [add](lodash.LoDashStatic.md#add)
- [after](lodash.LoDashStatic.md#after)
- [ary](lodash.LoDashStatic.md#ary)
- [at](lodash.LoDashStatic.md#at)
- [attempt](lodash.LoDashStatic.md#attempt)
- [before](lodash.LoDashStatic.md#before)
- [bindAll](lodash.LoDashStatic.md#bindall)
- [camelCase](lodash.LoDashStatic.md#camelcase)
- [capitalize](lodash.LoDashStatic.md#capitalize)
- [castArray](lodash.LoDashStatic.md#castarray)
- [ceil](lodash.LoDashStatic.md#ceil)
- [chain](lodash.LoDashStatic.md#chain)
- [chunk](lodash.LoDashStatic.md#chunk)
- [clone](lodash.LoDashStatic.md#clone)
- [cloneDeep](lodash.LoDashStatic.md#clonedeep)
- [cloneDeepWith](lodash.LoDashStatic.md#clonedeepwith)
- [cloneWith](lodash.LoDashStatic.md#clonewith)
- [compact](lodash.LoDashStatic.md#compact)
- [conforms](lodash.LoDashStatic.md#conforms)
- [conformsTo](lodash.LoDashStatic.md#conformsto)
- [constant](lodash.LoDashStatic.md#constant)
- [countBy](lodash.LoDashStatic.md#countby)
- [create](lodash.LoDashStatic.md#create)
- [debounce](lodash.LoDashStatic.md#debounce)
- [deburr](lodash.LoDashStatic.md#deburr)
- [defaultTo](lodash.LoDashStatic.md#defaultto)
- [defaults](lodash.LoDashStatic.md#defaults)
- [defaultsDeep](lodash.LoDashStatic.md#defaultsdeep)
- [defer](lodash.LoDashStatic.md#defer)
- [delay](lodash.LoDashStatic.md#delay)
- [difference](lodash.LoDashStatic.md#difference)
- [differenceBy](lodash.LoDashStatic.md#differenceby)
- [divide](lodash.LoDashStatic.md#divide)
- [drop](lodash.LoDashStatic.md#drop)
- [dropRight](lodash.LoDashStatic.md#dropright)
- [dropRightWhile](lodash.LoDashStatic.md#droprightwhile)
- [dropWhile](lodash.LoDashStatic.md#dropwhile)
- [endsWith](lodash.LoDashStatic.md#endswith)
- [entries](lodash.LoDashStatic.md#entries)
- [entriesIn](lodash.LoDashStatic.md#entriesin)
- [escape](lodash.LoDashStatic.md#escape)
- [escapeRegExp](lodash.LoDashStatic.md#escaperegexp)
- [every](lodash.LoDashStatic.md#every)
- [extend](lodash.LoDashStatic.md#extend)
- [extendWith](lodash.LoDashStatic.md#extendwith)
- [fill](lodash.LoDashStatic.md#fill)
- [filter](lodash.LoDashStatic.md#filter)
- [find](lodash.LoDashStatic.md#find)
- [findIndex](lodash.LoDashStatic.md#findindex)
- [findKey](lodash.LoDashStatic.md#findkey)
- [findLast](lodash.LoDashStatic.md#findlast)
- [findLastIndex](lodash.LoDashStatic.md#findlastindex)
- [findLastKey](lodash.LoDashStatic.md#findlastkey)
- [flatMap](lodash.LoDashStatic.md#flatmap)
- [flatten](lodash.LoDashStatic.md#flatten)
- [flattenDeep](lodash.LoDashStatic.md#flattendeep)
- [flattenDepth](lodash.LoDashStatic.md#flattendepth)
- [floor](lodash.LoDashStatic.md#floor)
- [flow](lodash.LoDashStatic.md#flow)
- [flowRight](lodash.LoDashStatic.md#flowright)
- [forEach](lodash.LoDashStatic.md#foreach)
- [forEachRight](lodash.LoDashStatic.md#foreachright)
- [forIn](lodash.LoDashStatic.md#forin)
- [forInRight](lodash.LoDashStatic.md#forinright)
- [forOwn](lodash.LoDashStatic.md#forown)
- [forOwnRight](lodash.LoDashStatic.md#forownright)
- [get](lodash.LoDashStatic.md#get)
- [groupBy](lodash.LoDashStatic.md#groupby)
- [gt](lodash.LoDashStatic.md#gt)
- [gte](lodash.LoDashStatic.md#gte)
- [head](lodash.LoDashStatic.md#head)
- [identity](lodash.LoDashStatic.md#identity)
- [inRange](lodash.LoDashStatic.md#inrange)
- [includes](lodash.LoDashStatic.md#includes)
- [initial](lodash.LoDashStatic.md#initial)
- [intersection](lodash.LoDashStatic.md#intersection)
- [invert](lodash.LoDashStatic.md#invert)
- [invertBy](lodash.LoDashStatic.md#invertby)
- [invoke](lodash.LoDashStatic.md#invoke)
- [invokeMap](lodash.LoDashStatic.md#invokemap)
- [isArguments](lodash.LoDashStatic.md#isarguments)
- [isArray](lodash.LoDashStatic.md#isarray)
- [isArrayBuffer](lodash.LoDashStatic.md#isarraybuffer)
- [isBoolean](lodash.LoDashStatic.md#isboolean)
- [isBuffer](lodash.LoDashStatic.md#isbuffer)
- [isDate](lodash.LoDashStatic.md#isdate)
- [isElement](lodash.LoDashStatic.md#iselement)
- [isEmpty](lodash.LoDashStatic.md#isempty)
- [isError](lodash.LoDashStatic.md#iserror)
- [isFinite](lodash.LoDashStatic.md#isfinite)
- [isFunction](lodash.LoDashStatic.md#isfunction)
- [isMap](lodash.LoDashStatic.md#ismap)
- [isNaN](lodash.LoDashStatic.md#isnan)
- [isNative](lodash.LoDashStatic.md#isnative)
- [isNull](lodash.LoDashStatic.md#isnull)
- [isNumber](lodash.LoDashStatic.md#isnumber)
- [isObject](lodash.LoDashStatic.md#isobject)
- [isPlainObject](lodash.LoDashStatic.md#isplainobject)
- [isRegExp](lodash.LoDashStatic.md#isregexp)
- [isSet](lodash.LoDashStatic.md#isset)
- [isString](lodash.LoDashStatic.md#isstring)
- [isTypedArray](lodash.LoDashStatic.md#istypedarray)
- [isUndefined](lodash.LoDashStatic.md#isundefined)
- [isWeakMap](lodash.LoDashStatic.md#isweakmap)
- [isWeakSet](lodash.LoDashStatic.md#isweakset)
- [join](lodash.LoDashStatic.md#join)
- [kebabCase](lodash.LoDashStatic.md#kebabcase)
- [keyBy](lodash.LoDashStatic.md#keyby)
- [keys](lodash.LoDashStatic.md#keys)
- [keysIn](lodash.LoDashStatic.md#keysin)
- [last](lodash.LoDashStatic.md#last)
- [lastIndexOf](lodash.LoDashStatic.md#lastindexof)
- [lowerCase](lodash.LoDashStatic.md#lowercase)
- [lowerFirst](lodash.LoDashStatic.md#lowerfirst)
- [lt](lodash.LoDashStatic.md#lt)
- [lte](lodash.LoDashStatic.md#lte)
- [map](lodash.LoDashStatic.md#map)
- [mapKeys](lodash.LoDashStatic.md#mapkeys)
- [mapValues](lodash.LoDashStatic.md#mapvalues)
- [matches](lodash.LoDashStatic.md#matches)
- [matchesProperty](lodash.LoDashStatic.md#matchesproperty)
- [method](lodash.LoDashStatic.md#method)
- [methodOf](lodash.LoDashStatic.md#methodof)
- [mixin](lodash.LoDashStatic.md#mixin)
- [multiply](lodash.LoDashStatic.md#multiply)
- [negate](lodash.LoDashStatic.md#negate)
- [noConflict](lodash.LoDashStatic.md#noconflict)
- [noop](lodash.LoDashStatic.md#noop)
- [now](lodash.LoDashStatic.md#now)
- [nth](lodash.LoDashStatic.md#nth)
- [nthArg](lodash.LoDashStatic.md#ntharg)
- [once](lodash.LoDashStatic.md#once)
- [over](lodash.LoDashStatic.md#over)
- [overArgs](lodash.LoDashStatic.md#overargs)
- [overEvery](lodash.LoDashStatic.md#overevery)
- [overSome](lodash.LoDashStatic.md#oversome)
- [pad](lodash.LoDashStatic.md#pad)
- [padEnd](lodash.LoDashStatic.md#padend)
- [padStart](lodash.LoDashStatic.md#padstart)
- [parseInt](lodash.LoDashStatic.md#parseint)
- [partition](lodash.LoDashStatic.md#partition)
- [property](lodash.LoDashStatic.md#property)
- [propertyOf](lodash.LoDashStatic.md#propertyof)
- [pull](lodash.LoDashStatic.md#pull)
- [pullAt](lodash.LoDashStatic.md#pullat)
- [random](lodash.LoDashStatic.md#random)
- [range](lodash.LoDashStatic.md#range)
- [rearg](lodash.LoDashStatic.md#rearg)
- [reduce](lodash.LoDashStatic.md#reduce)
- [reduceRight](lodash.LoDashStatic.md#reduceright)
- [reject](lodash.LoDashStatic.md#reject)
- [remove](lodash.LoDashStatic.md#remove)
- [repeat](lodash.LoDashStatic.md#repeat)
- [replace](lodash.LoDashStatic.md#replace)
- [rest](lodash.LoDashStatic.md#rest)
- [result](lodash.LoDashStatic.md#result)
- [round](lodash.LoDashStatic.md#round)
- [runInContext](lodash.LoDashStatic.md#runincontext)
- [sample](lodash.LoDashStatic.md#sample)
- [sampleSize](lodash.LoDashStatic.md#samplesize)
- [set](lodash.LoDashStatic.md#set)
- [setWith](lodash.LoDashStatic.md#setwith)
- [shuffle](lodash.LoDashStatic.md#shuffle)
- [size](lodash.LoDashStatic.md#size)
- [slice](lodash.LoDashStatic.md#slice)
- [snakeCase](lodash.LoDashStatic.md#snakecase)
- [some](lodash.LoDashStatic.md#some)
- [split](lodash.LoDashStatic.md#split)
- [spread](lodash.LoDashStatic.md#spread)
- [startCase](lodash.LoDashStatic.md#startcase)
- [startsWith](lodash.LoDashStatic.md#startswith)
- [stubArray](lodash.LoDashStatic.md#stubarray)
- [stubFalse](lodash.LoDashStatic.md#stubfalse)
- [stubObject](lodash.LoDashStatic.md#stubobject)
- [stubString](lodash.LoDashStatic.md#stubstring)
- [stubTrue](lodash.LoDashStatic.md#stubtrue)
- [tail](lodash.LoDashStatic.md#tail)
- [take](lodash.LoDashStatic.md#take)
- [takeRight](lodash.LoDashStatic.md#takeright)
- [takeRightWhile](lodash.LoDashStatic.md#takerightwhile)
- [takeWhile](lodash.LoDashStatic.md#takewhile)
- [tap](lodash.LoDashStatic.md#tap)
- [template](lodash.LoDashStatic.md#template)
- [throttle](lodash.LoDashStatic.md#throttle)
- [thru](lodash.LoDashStatic.md#thru)
- [times](lodash.LoDashStatic.md#times)
- [toArray](lodash.LoDashStatic.md#toarray)
- [toLower](lodash.LoDashStatic.md#tolower)
- [toPairs](lodash.LoDashStatic.md#topairs)
- [toPairsIn](lodash.LoDashStatic.md#topairsin)
- [toPlainObject](lodash.LoDashStatic.md#toplainobject)
- [toUpper](lodash.LoDashStatic.md#toupper)
- [transform](lodash.LoDashStatic.md#transform)
- [trim](lodash.LoDashStatic.md#trim)
- [trimEnd](lodash.LoDashStatic.md#trimend)
- [trimStart](lodash.LoDashStatic.md#trimstart)
- [truncate](lodash.LoDashStatic.md#truncate)
- [unescape](lodash.LoDashStatic.md#unescape)
- [union](lodash.LoDashStatic.md#union)
- [unionBy](lodash.LoDashStatic.md#unionby)
- [uniqueId](lodash.LoDashStatic.md#uniqueid)
- [unset](lodash.LoDashStatic.md#unset)
- [unzip](lodash.LoDashStatic.md#unzip)
- [unzipWith](lodash.LoDashStatic.md#unzipwith)
- [update](lodash.LoDashStatic.md#update)
- [upperCase](lodash.LoDashStatic.md#uppercase)
- [upperFirst](lodash.LoDashStatic.md#upperfirst)
- [values](lodash.LoDashStatic.md#values)
- [valuesIn](lodash.LoDashStatic.md#valuesin)
- [without](lodash.LoDashStatic.md#without)
- [words](lodash.LoDashStatic.md#words)
- [wrap](lodash.LoDashStatic.md#wrap)
- [xor](lodash.LoDashStatic.md#xor)
- [zip](lodash.LoDashStatic.md#zip)
- [zipObject](lodash.LoDashStatic.md#zipobject)
- [zipObjectDeep](lodash.LoDashStatic.md#zipobjectdeep)
- [zipWith](lodash.LoDashStatic.md#zipwith)

### Util Methods

- [cond](lodash.LoDashStatic.md#cond)
- [iteratee](lodash.LoDashStatic.md#iteratee)
- [rangeRight](lodash.LoDashStatic.md#rangeright)
- [toPath](lodash.LoDashStatic.md#topath)

## Properties

### VERSION

• **VERSION**: `string`

The semantic version number.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:104

---

### bind

• **bind**: [`FunctionBind`](lodash.FunctionBind.md)

Creates a function that invokes func with the this binding of thisArg and prepends any additional
\_.bind arguments to those provided to the bound function.

The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder
for partially applied arguments.

Note: Unlike native Function#bind this method does not set the "length" property of bound functions.

**`Param`**

The function to bind.

**`Param`**

The this binding of func.

**`Param`**

The arguments to be partially applied.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:93

---

### bindKey

• **bindKey**: [`FunctionBindKey`](lodash.FunctionBindKey.md)

Creates a function that invokes the method at object[key] and prepends any additional \_.bindKey
arguments to those provided to the bound function.

This method differs from \_.bind by allowing bound functions to reference methods that may be
redefined or don’t yet exist. See Peter Michaux’s article for more details.

The _.bindKey.placeholder value, which defaults to _ in monolithic builds, may be used as a
placeholder for partially applied arguments.

**`Param`**

The object the method belongs to.

**`Param`**

The key of the method.

**`Param`**

The arguments to be partially applied.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:127

---

### curry

• **curry**: [`Curry`](lodash.Curry.md)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:151

---

### curryRight

• **curryRight**: [`CurryRight`](lodash.CurryRight.md)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:331

---

### each

• **each**: <T\>(`collection`: `T`[], `iteratee?`:
[`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\>) => `T`[](`collection`: `string`,
`iteratee?`: [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\>) =>
`string`<T\>(`collection`: [`List`](../modules/lodash.md#list)<`T`\>, `iteratee?`:
[`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) =>
[`List`](../modules/lodash.md#list)<`T`\><T\>(`collection`: `T`, `iteratee?`:
[`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\>) => `T`<T,
TArray\>(`collection`: `Object`, `iteratee?`:
[`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\>) =>
`TArray`<TString\>(`collection`: `TString`, `iteratee?`:
[`StringIterator`](../modules/lodash.md#stringiterator)<`any`\>) => `TString`<T,
TList\>(`collection`: `Object`, `iteratee?`:
[`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) => `TList`<T\>(`collection`:
`undefined` \| `null` \| `T`, `iteratee?`:
[`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\>) => `undefined` \| `null` \|
`T`

#### Type declaration

▸ <`T`\>(`collection`, `iteratee?`): `T`[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `T`[]                                                              |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

##### Returns

`T`[]

**`See`**

\_.forEach

▸ (`collection`, `iteratee?`): `string`

##### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `string`                                                        |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

##### Returns

`string`

**`See`**

\_.forEach

▸ <`T`\>(`collection`, `iteratee?`): [`List`](../modules/lodash.md#list)<`T`\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | [`List`](../modules/lodash.md#list)<`T`\>                        |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.forEach

▸ <`T`\>(`collection`, `iteratee?`): `T`

##### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

##### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `T`                                                                  |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

##### Returns

`T`

**`See`**

\_.forEach

▸ <`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

##### Type parameters

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `T`      | `T`                                    |
| `TArray` | extends `undefined` \| `null` \| `T`[] |

##### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `Object`                                                           |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

##### Returns

`TArray`

**`See`**

\_.forEach

▸ <`TString`\>(`collection`, `iteratee?`): `TString`

##### Type parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `TString` | extends `undefined` \| `null` \| `string` |

##### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `TString`                                                       |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

##### Returns

`TString`

**`See`**

\_.forEach

▸ <`T`, `TList`\>(`collection`, `iteratee?`): `TList`

##### Type parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `T`     | `T`                                                                        |
| `TList` | extends `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

##### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | `Object`                                                         |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

`TList`

**`See`**

\_.forEach

▸ <`T`\>(`collection`, `iteratee?`): `undefined` \| `null` \| `T`

##### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

##### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                         |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

##### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:65

---

### eachRight

• **eachRight**: <T\>(`collection`: `T`[], `iteratee?`:
[`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\>) => `T`[](`collection`: `string`,
`iteratee?`: [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\>) =>
`string`<T\>(`collection`: [`List`](../modules/lodash.md#list)<`T`\>, `iteratee?`:
[`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) =>
[`List`](../modules/lodash.md#list)<`T`\><T\>(`collection`: `T`, `iteratee?`:
[`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\>) => `T`<T,
TArray\>(`collection`: `Object`, `iteratee?`:
[`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\>) =>
`TArray`<TString\>(`collection`: `TString`, `iteratee?`:
[`StringIterator`](../modules/lodash.md#stringiterator)<`any`\>) => `TString`<T,
TList\>(`collection`: `Object`, `iteratee?`:
[`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) => `TList`<T\>(`collection`:
`undefined` \| `null` \| `T`, `iteratee?`:
[`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\>) => `undefined` \| `null` \|
`T`

#### Type declaration

▸ <`T`\>(`collection`, `iteratee?`): `T`[]

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `T`[]                                                              |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

##### Returns

`T`[]

**`See`**

\_.forEachRight

▸ (`collection`, `iteratee?`): `string`

##### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `string`                                                        |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

##### Returns

`string`

**`See`**

\_.forEachRight

▸ <`T`\>(`collection`, `iteratee?`): [`List`](../modules/lodash.md#list)<`T`\>

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | [`List`](../modules/lodash.md#list)<`T`\>                        |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.forEachRight

▸ <`T`\>(`collection`, `iteratee?`): `T`

##### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

##### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `T`                                                                  |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

##### Returns

`T`

**`See`**

\_.forEachRight

▸ <`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

##### Type parameters

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `T`      | `T`                                    |
| `TArray` | extends `undefined` \| `null` \| `T`[] |

##### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `Object`                                                           |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

##### Returns

`TArray`

**`See`**

\_.forEachRight

▸ <`TString`\>(`collection`, `iteratee?`): `TString`

##### Type parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `TString` | extends `undefined` \| `null` \| `string` |

##### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `TString`                                                       |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

##### Returns

`TString`

**`See`**

\_.forEachRight

▸ <`T`, `TList`\>(`collection`, `iteratee?`): `TList`

##### Type parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `T`     | `T`                                                                        |
| `TList` | extends `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

##### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | `Object`                                                         |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

`TList`

**`See`**

\_.forEachRight

▸ <`T`\>(`collection`, `iteratee?`): `undefined` \| `null` \| `T`

##### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

##### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                         |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

##### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:113

---

### first

• **first**: <T\>(`array`: `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>) =>
`undefined` \| `T`

#### Type declaration

▸ <`T`\>(`array`): `undefined` \| `T`

##### Type parameters

| Name |
| :--- |
| `T`  |

##### Parameters

| Name    | Type                                                               |
| :------ | :----------------------------------------------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

##### Returns

`undefined` \| `T`

**`See`**

\_.head

#### Defined in

node_modules/@types/lodash/common/array.d.ts:418

---

### memoize

• **memoize**: `Object`

#### Call signature

▸ <`T`\>(`func`, `resolver?`): `T` & [`MemoizedFunction`](lodash.MemoizedFunction.md)

Creates a function that memoizes the result of func. If resolver is provided it determines the cache
key for storing the result based on the arguments provided to the memoized function. By default, the
first argument provided to the memoized function is coerced to a string and used as the cache key.
The func is invoked with the this binding of the memoized function.

##### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

##### Parameters

| Name        | Type                                     | Description                               |
| :---------- | :--------------------------------------- | :---------------------------------------- |
| `func`      | `T`                                      | The function to have its output memoized. |
| `resolver?` | (...`args`: `Parameters`<`T`\>) => `any` | The function to resolve the cache key.    |

##### Returns

`T` & [`MemoizedFunction`](lodash.MemoizedFunction.md)

Returns the new memoizing function.

#### Type declaration

| Name    | Type                                                   |
| :------ | :----------------------------------------------------- |
| `Cache` | [`MapCacheConstructor`](lodash.MapCacheConstructor.md) |

#### Defined in

node_modules/@types/lodash/common/function.d.ts:547

---

### partial

• **partial**: [`Partial`](lodash.Partial.md)

Creates a function that, when called, invokes func with any additional partial arguments prepended
to those provided to the new function. This method is similar to \_.bind except it does not alter
the this binding.

**`Param`**

The function to partially apply arguments to.

**`Param`**

Arguments to be partially applied.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:640

---

### partialRight

• **partialRight**: [`PartialRight`](lodash.PartialRight.md)

This method is like \_.partial except that partial arguments are appended to those provided to the
new function.

**`Param`**

The function to partially apply arguments to.

**`Param`**

Arguments to be partially applied.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:913

---

### templateSettings

• **templateSettings**: [`TemplateSettings`](lodash.TemplateSettings.md)

By default, the template delimiters used by Lo-Dash are similar to those in embedded Ruby (ERB).
Change the following template settings to use alternative delimiters.

#### Defined in

node_modules/@types/lodash/common/common.d.ts:109

## Array Methods

### concat

▸ **concat**<`T`\>(`...values?`): `T`[]

Creates a new array concatenating `array` with any additional arrays and/or values.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                        | Description                      |
| :----------- | :------------------------------------------ | :------------------------------- |
| `...values?` | [`Many`](../modules/lodash.md#many)<`T`\>[] | The array values to concatenate. |

#### Returns

`T`[]

Returns the new concatenated array.

**`Example`**

```ts
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:70

---

### differenceWith

▸ **differenceWith**<`T1`, `T2`\>(`array`, `values?`, `comparator?`): `T1`[]

This method is like \_.difference except that it accepts comparator which is invoked to compare
elements of array to values. The order and references of result values are determined by the first
array. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name          | Type                                                                | Description                         |
| :------------ | :------------------------------------------------------------------ | :---------------------------------- |
| `array`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\> | -                                   |
| `values?`     | [`List`](../modules/lodash.md#list)<`T2`\>                          | The arrays to inspect.              |
| `comparator?` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2`\>      | The comparator invoked per element. |

#### Returns

`T1`[]

Returns the new array of filtered values.

**`Example`**

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
];

_.differenceWith(objects, [{x: 1, y: 2}], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:205

▸ **differenceWith**<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>    |
| `values1`    | [`List`](../modules/lodash.md#list)<`T2`\>                             |
| `values2`    | [`List`](../modules/lodash.md#list)<`T3`\>                             |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2` \| `T3`\> |

#### Returns

`T1`[]

**`See`**

\_.differenceWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:209

▸ **differenceWith**<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `...values`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name        | Type                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                                                              |
| `values1`   | [`List`](../modules/lodash.md#list)<`T2`\>                                                                                       |
| `values2`   | [`List`](../modules/lodash.md#list)<`T3`\>                                                                                       |
| `...values` | ([`List`](../modules/lodash.md#list)<`T4`\> \| [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2` \| `T3` \| `T4`\>)[] |

#### Returns

`T1`[]

**`See`**

\_.differenceWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:213

▸ **differenceWith**<`T`\>(`array`, `...values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `...values` | [`List`](../modules/lodash.md#list)<`T`\>[]                        |

#### Returns

`T`[]

**`See`**

\_.differenceWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:217

---

### fromPairs

▸ **fromPairs**<`T`\>(`pairs`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

The inverse of `_.toPairs`; this method returns an object composed from key-value `pairs`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                                      | Description          |
| :------ | :------------------------------------------------------------------------------------------------------------------------ | :------------------- |
| `pairs` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<[[`PropertyName`](../modules/lodash.md#propertyname), `T`]\> | The key-value pairs. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

Returns the new object.

**`Example`**

```ts
_.fromPairs([
  ['fred', 30],
  ['barney', 40],
]);
// => { 'fred': 30, 'barney': 40 }
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:550

▸ **fromPairs**(`pairs`): [`Dictionary`](lodash.Dictionary.md)<`any`\>

#### Parameters

| Name    | Type                                                                   |
| :------ | :--------------------------------------------------------------------- |
| `pairs` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`[]\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`any`\>

**`See`**

\_.fromPairs

#### Defined in

node_modules/@types/lodash/common/array.d.ts:554

---

### indexOf

▸ **indexOf**<`T`\>(`array`, `value`, `fromIndex?`): `number`

Gets the index at which the first occurrence of `value` is found in `array` using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons. If `fromIndex` is negative, it's used as the offset from the end of `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description               |
| :----------- | :----------------------------------------------------------------- | :------------------------ |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to search.      |
| `value`      | `T`                                                                | The value to search for.  |
| `fromIndex?` | `number`                                                           | The index to search from. |

#### Returns

`number`

Returns the index of the matched value, else `-1`.

**`Example`**

```ts
_.indexOf([1, 2, 1, 2], 2);
// => 1

// using `fromIndex`
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:630

---

### intersectionBy

▸ **intersectionBy**<`T1`, `T2`\>(`array`, `values`, `iteratee?`): `T1`[]

This method is like `_.intersection` except that it accepts `iteratee` which is invoked for each
element of each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is
invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name        | Type                                                                 | Description                       |
| :---------- | :------------------------------------------------------------------- | :-------------------------------- |
| `array`     | `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                 | -                                 |
| `values`    | [`List`](../modules/lodash.md#list)<`T2`\>                           | -                                 |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2`\> | The iteratee invoked per element. |

#### Returns

`T1`[]

Returns the new array of shared values.

**`Example`**

```ts
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]

// using the `_.property` iteratee shorthand
_.intersectionBy([{x: 1}], [{x: 2}, {x: 1}], 'x');
// => [{ 'x': 1 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:706

▸ **intersectionBy**<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `array`    | `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                         |
| `values1`  | [`List`](../modules/lodash.md#list)<`T2`\>                                   |
| `values2`  | [`List`](../modules/lodash.md#list)<`T3`\>                                   |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3`\> |

#### Returns

`T1`[]

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:710

▸ **intersectionBy**<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `...values`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name        | Type                                                                                                                                   |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                                                                    |
| `values1`   | [`List`](../modules/lodash.md#list)<`T2`\>                                                                                             |
| `values2`   | [`List`](../modules/lodash.md#list)<`T3`\>                                                                                             |
| `...values` | ([`List`](../modules/lodash.md#list)<`T4`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3` \| `T4`\>)[] |

#### Returns

`T1`[]

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:714

▸ **intersectionBy**<`T`\>(`array?`, `...values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                |
| :---------- | :-------------------------------------------------- |
| `array?`    | `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `...values` | [`List`](../modules/lodash.md#list)<`T`\>[]         |

#### Returns

`T`[]

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:718

▸ **intersectionBy**<`T`\>(`...values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                                                         |
| :---------- | :----------------------------------------------------------------------------------------------------------- |
| `...values` | ([`List`](../modules/lodash.md#list)<`T`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

`T`[]

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:722

---

### intersectionWith

▸ **intersectionWith**<`T1`, `T2`\>(`array`, `values?`, `comparator?`): `T1`[]

Creates an array of unique `array` values not included in the other provided arrays using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons.

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name          | Type                                                                | Description                         |
| :------------ | :------------------------------------------------------------------ | :---------------------------------- |
| `array`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\> | -                                   |
| `values?`     | [`List`](../modules/lodash.md#list)<`T2`\>                          | The arrays to inspect.              |
| `comparator?` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2`\>      | The comparator invoked per element. |

#### Returns

`T1`[]

Returns the new array of filtered values.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:762

▸ **intersectionWith**<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `comparator`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>    |
| `values1`    | [`List`](../modules/lodash.md#list)<`T2`\>                             |
| `values2`    | [`List`](../modules/lodash.md#list)<`T3`\>                             |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2` \| `T3`\> |

#### Returns

`T1`[]

**`See`**

\_.intersectionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:766

▸ **intersectionWith**<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `...values`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name        | Type                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                                                              |
| `values1`   | [`List`](../modules/lodash.md#list)<`T2`\>                                                                                       |
| `values2`   | [`List`](../modules/lodash.md#list)<`T3`\>                                                                                       |
| `...values` | ([`List`](../modules/lodash.md#list)<`T4`\> \| [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2` \| `T3` \| `T4`\>)[] |

#### Returns

`T1`[]

**`See`**

\_.intersectionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:770

▸ **intersectionWith**<`T`\>(`array?`, `...values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                                                              |
| :---------- | :---------------------------------------------------------------------------------------------------------------- |
| `array?`    | `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                               |
| `...values` | ([`List`](../modules/lodash.md#list)<`T`\> \| [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `never`\>)[] |

#### Returns

`T`[]

**`See`**

\_.intersectionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:774

---

### pullAll

▸ **pullAll**<`T`\>(`array`, `values?`): `T`[]

This method is like `_.pull` except that it accepts an array of values to remove.

**Note:** Unlike `_.difference`, this method mutates `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                      | Description           |
| :-------- | :---------------------------------------- | :-------------------- |
| `array`   | `T`[]                                     | The array to modify.  |
| `values?` | [`List`](../modules/lodash.md#list)<`T`\> | The values to remove. |

#### Returns

`T`[]

Returns `array`.

**`Example`**

```ts
var array = [1, 2, 3, 1, 2, 3];

_.pull(array, [2, 3]);
console.log(array);
// => [1, 1]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:966

▸ **pullAll**<`T`\>(`array`, `values?`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `array`   | [`List`](../modules/lodash.md#list)<`T`\> |
| `values?` | [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.pullAll

#### Defined in

node_modules/@types/lodash/common/array.d.ts:970

---

### pullAllBy

▸ **pullAllBy**<`T`\>(`array`, `values?`, `iteratee?`): `T`[]

This method is like `_.pullAll` except that it accepts `iteratee` which is invoked for each element
of `array` and `values` to to generate the criterion by which uniqueness is computed. The iteratee
is invoked with one argument: (value).

**Note:** Unlike `_.differenceBy`, this method mutates `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                        | Description                       |
| :---------- | :---------------------------------------------------------- | :-------------------------------- |
| `array`     | `T`[]                                                       | The array to modify.              |
| `values?`   | [`List`](../modules/lodash.md#list)<`T`\>                   | The values to remove.             |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> | The iteratee invoked per element. |

#### Returns

`T`[]

Returns `array`.

**`Example`**

```ts
var array = [{x: 1}, {x: 2}, {x: 3}, {x: 1}];

_.pullAllBy(array, [{x: 1}, {x: 3}], 'x');
console.log(array);
// => [{ 'x': 2 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1005

▸ **pullAllBy**<`T`\>(`array`, `values?`, `iteratee?`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `array`     | [`List`](../modules/lodash.md#list)<`T`\>                   |
| `values?`   | [`List`](../modules/lodash.md#list)<`T`\>                   |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1009

▸ **pullAllBy**<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `array`    | `T1`[]                                                               |
| `values`   | [`List`](../modules/lodash.md#list)<`T2`\>                           |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2`\> |

#### Returns

`T1`[]

**`See`**

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1013

▸ **pullAllBy**<`T1`, `T2`\>(`array`, `values`, `iteratee`):
[`List`](../modules/lodash.md#list)<`T1`\>

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `array`    | [`List`](../modules/lodash.md#list)<`T1`\>                           |
| `values`   | [`List`](../modules/lodash.md#list)<`T2`\>                           |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T1`\>

**`See`**

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1017

---

### pullAllWith

▸ **pullAllWith**<`T`\>(`array`, `values?`, `comparator?`): `T`[]

This method is like `_.pullAll` except that it accepts `comparator` which is invoked to compare
elements of array to values. The comparator is invoked with two arguments: (arrVal, othVal).

**Note:** Unlike `_.differenceWith`, this method mutates `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                  | Description           |
| :------------ | :---------------------------------------------------- | :-------------------- |
| `array`       | `T`[]                                                 | The array to modify.  |
| `values?`     | [`List`](../modules/lodash.md#list)<`T`\>             | The values to remove. |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\> | -                     |

#### Returns

`T`[]

Returns `array`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1052

▸ **pullAllWith**<`T`\>(`array`, `values?`, `comparator?`):
[`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                  |
| :------------ | :---------------------------------------------------- |
| `array`       | [`List`](../modules/lodash.md#list)<`T`\>             |
| `values?`     | [`List`](../modules/lodash.md#list)<`T`\>             |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.pullAllWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1056

▸ **pullAllWith**<`T1`, `T2`\>(`array`, `values`, `comparator`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name         | Type                                                           |
| :----------- | :------------------------------------------------------------- |
| `array`      | `T1`[]                                                         |
| `values`     | [`List`](../modules/lodash.md#list)<`T2`\>                     |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2`\> |

#### Returns

`T1`[]

**`See`**

\_.pullAllWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1060

▸ **pullAllWith**<`T1`, `T2`\>(`array`, `values`, `comparator`):
[`List`](../modules/lodash.md#list)<`T1`\>

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name         | Type                                                           |
| :----------- | :------------------------------------------------------------- |
| `array`      | [`List`](../modules/lodash.md#list)<`T1`\>                     |
| `values`     | [`List`](../modules/lodash.md#list)<`T2`\>                     |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T1`, `T2`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T1`\>

**`See`**

\_.pullAllWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1064

---

### reverse

▸ **reverse**<`TList`\>(`array`): `TList`

Reverses `array` so that the first element becomes the last, the second element becomes the second
to last, and so on.

**Note:** This method mutates `array` and is based on
[`Array#reverse`](https://mdn.io/Array/reverse).

#### Type parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `TList` | extends [`List`](../modules/lodash.md#list)<`any`\> |

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `array` | `TList` |

#### Returns

`TList`

Returns `array`.

**`Example`**

```ts
var array = [1, 2, 3];

_.reverse(array);
// => [3, 2, 1]

console.log(array);
// => [3, 2, 1]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1152

---

### sortedIndex

▸ **sortedIndex**<`T`\>(`array`, `value`): `number`

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                  |
| :------ | :----------------------------------------------------------------- | :--------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The sorted array to inspect. |
| `value` | `T`                                                                | The value to evaluate.       |

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

**`Example`**

```ts
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1194

▸ **sortedIndex**<`T`\>(`array`, `value`): `number`

Uses a binary search to determine the lowest index at which `value` should be inserted into `array`
in order to maintain its sort order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                  |
| :------ | :----------------------------------------------------------------- | :--------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The sorted array to inspect. |
| `value` | `T`                                                                | The value to evaluate.       |

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

**`Example`**

```ts
_.sortedIndex([30, 50], 40);
// => 1

_.sortedIndex([4, 5], 4);
// => 0
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1225

---

### sortedIndexBy

▸ **sortedIndexBy**<`T`\>(`array`, `value`, `iteratee?`): `number`

This method is like `_.sortedIndex` except that it accepts `iteratee` which is invoked for `value`
and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                       |
| :---------- | :----------------------------------------------------------------- | :-------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The sorted array to inspect.      |
| `value`     | `T`                                                                | The value to evaluate.            |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

**`Example`**

```ts
var dict = {thirty: 30, forty: 40, fifty: 50};

_.sortedIndexBy(['thirty', 'fifty'], 'forty', _.propertyOf(dict));
// => 1

// using the `_.property` iteratee shorthand
_.sortedIndexBy([{x: 4}, {x: 5}], {x: 4}, 'x');
// => 0
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1261

---

### sortedIndexOf

▸ **sortedIndexOf**<`T`\>(`array`, `value`): `number`

This method is like `_.indexOf` except that it performs a binary search on a sorted `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description              |
| :------ | :----------------------------------------------------------------- | :----------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to search.     |
| `value` | `T`                                                                | The value to search for. |

#### Returns

`number`

Returns the index of the matched value, else `-1`.

**`Example`**

```ts
_.sortedIndexOf([1, 1, 2, 2], 2);
// => 2
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1289

---

### sortedLastIndex

▸ **sortedLastIndex**<`T`\>(`array`, `value`): `number`

This method is like `_.sortedIndex` except that it returns the highest index at which `value` should
be inserted into `array` in order to maintain its sort order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                  |
| :------ | :----------------------------------------------------------------- | :--------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The sorted array to inspect. |
| `value` | `T`                                                                | The value to evaluate.       |

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

**`Example`**

```ts
_.sortedLastIndex([4, 5], 4);
// => 1
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1318

---

### sortedLastIndexBy

▸ **sortedLastIndexBy**<`T`\>(`array`, `value`, `iteratee?`): `number`

This method is like `_.sortedLastIndex` except that it accepts `iteratee` which is invoked for
`value` and each element of `array` to compute their sort ranking. The iteratee is invoked with one
argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                       |
| :---------- | :----------------------------------------------------------------- | :-------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The sorted array to inspect.      |
| `value`     | `T`                                                                | The value to evaluate.            |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`number`

Returns the index at which `value` should be inserted into `array`.

**`Example`**

```ts
// using the `_.property` iteratee shorthand
_.sortedLastIndexBy([{x: 4}, {x: 5}], {x: 4}, 'x');
// => 1
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1349

---

### sortedLastIndexOf

▸ **sortedLastIndexOf**<`T`\>(`array`, `value`): `number`

This method is like `_.lastIndexOf` except that it performs a binary search on a sorted `array`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description              |
| :------ | :----------------------------------------------------------------- | :----------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to search.     |
| `value` | `T`                                                                | The value to search for. |

#### Returns

`number`

Returns the index of the matched value, else `-1`.

**`Example`**

```ts
_.sortedLastIndexOf([1, 1, 2, 2], 2);
// => 3
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1377

---

### sortedUniq

▸ **sortedUniq**<`T`\>(`array`): `T`[]

This method is like `_.uniq` except that it's designed and optimized for sorted arrays.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description           |
| :------ | :----------------------------------------------------------------- | :-------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect. |

#### Returns

`T`[]

Returns the new duplicate free array.

**`Example`**

```ts
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1404

---

### sortedUniqBy

▸ **sortedUniqBy**<`T`\>(`array`, `iteratee?`): `T`[]

This method is like `_.uniqBy` except that it's designed and optimized for sorted arrays.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                       |
| :---------- | :----------------------------------------------------------------- | :-------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect.             |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`T`[]

Returns the new duplicate free array.

**`Example`**

```ts
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1432

---

### unionWith

▸ **unionWith**<`T`\>(`arrays?`, `comparator?`): `T`[]

This method is like `_.union` except that it accepts `comparator` which is invoked to compare
elements of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                  | Description                         |
| :------------ | :---------------------------------------------------- | :---------------------------------- |
| `arrays?`     | `null` \| [`List`](../modules/lodash.md#list)<`T`\>   | The arrays to inspect.              |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\> | The comparator invoked per element. |

#### Returns

`T`[]

Returns the new array of combined values.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1645

▸ **unionWith**<`T`\>(`arrays`, `arrays2`, `comparator?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                               |
| :------------ | :----------------------------------------------------------------- |
| `arrays`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\>              |

#### Returns

`T`[]

**`See`**

\_.unionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1649

▸ **unionWith**<`T`\>(`arrays`, `arrays2`, `arrays3`, `...comparator`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `arrays`        | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `arrays2`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `arrays3`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `...comparator` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`Comparator`](../modules/lodash.md#comparator)<`T`\>)[] |

#### Returns

`T`[]

**`See`**

\_.unionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1653

---

### uniq

▸ **uniq**<`T`\>(`array`): `T`[]

Creates a duplicate-free version of an array, using
[`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero) for equality
comparisons, in which only the first occurrence of each element is kept.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description           |
| :------ | :----------------------------------------------------------------- | :-------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect. |

#### Returns

`T`[]

Returns the new duplicate free array.

**`Example`**

```ts
_.uniq([2, 1, 2]);
// => [2, 1]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1690

---

### uniqBy

▸ **uniqBy**<`T`\>(`array`, `iteratee?`): `T`[]

This method is like `_.uniq` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which uniqueness is computed. The iteratee is invoked with one
argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                       |
| :---------- | :----------------------------------------------------------------- | :-------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect.             |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`T`[]

Returns the new duplicate free array.

**`Example`**

```ts
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// using the `_.property` iteratee shorthand
_.uniqBy([{x: 1}, {x: 2}, {x: 1}], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1723

---

### uniqWith

▸ **uniqWith**<`T`\>(`array`, `comparator?`): `T`[]

This method is like `_.uniq` except that it accepts `comparator` which is invoked to compare
elements of `array`. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                               | Description                         |
| :------------ | :----------------------------------------------------------------- | :---------------------------------- |
| `array`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect.               |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\>              | The comparator invoked per element. |

#### Returns

`T`[]

Returns the new duplicate free array.

**`Example`**

```ts
var objects = [
  {x: 1, y: 2},
  {x: 2, y: 1},
  {x: 1, y: 2},
];

_.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1754

---

### xorBy

▸ **xorBy**<`T`\>(`arrays?`, `iteratee?`): `T`[]

This method is like `_.xor` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                        | Description                       |
| :---------- | :---------------------------------------------------------- | :-------------------------------- |
| `arrays?`   | `null` \| [`List`](../modules/lodash.md#list)<`T`\>         | The arrays to inspect.            |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> | The iteratee invoked per element. |

#### Returns

`T`[]

Returns the new array of values.

**`Example`**

```ts
_.xorBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [1.2, 4.3]

// using the `_.property` iteratee shorthand
_.xorBy([{x: 1}], [{x: 2}, {x: 1}], 'x');
// => [{ 'x': 2 }]
```

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1887

▸ **xorBy**<`T`\>(`arrays`, `arrays2`, `iteratee?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

`T`[]

**`See`**

\_.xorBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1891

▸ **xorBy**<`T`\>(`arrays`, `arrays2`, `arrays3`, `...iteratee`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                                                                                                  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `arrays`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays3`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `...iteratee` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

`T`[]

**`See`**

\_.xorBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1895

---

### xorWith

▸ **xorWith**<`T`\>(`arrays?`, `comparator?`): `T`[]

This method is like `_.xor` except that it accepts `comparator` which is invoked to compare elements
of `arrays`. The comparator is invoked with two arguments: (arrVal, othVal).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                  | Description                         |
| :------------ | :---------------------------------------------------- | :---------------------------------- |
| `arrays?`     | `null` \| [`List`](../modules/lodash.md#list)<`T`\>   | The arrays to inspect.              |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\> | The comparator invoked per element. |

#### Returns

`T`[]

Returns the new array of values.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1935

▸ **xorWith**<`T`\>(`arrays`, `arrays2`, `comparator?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                               |
| :------------ | :----------------------------------------------------------------- |
| `arrays`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\>              |

#### Returns

`T`[]

**`See`**

\_.xorWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1939

▸ **xorWith**<`T`\>(`arrays`, `arrays2`, `arrays3`, `...comparator`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `arrays`        | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `arrays2`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `arrays3`       | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                              |
| `...comparator` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`Comparator`](../modules/lodash.md#comparator)<`T`\>)[] |

#### Returns

`T`[]

**`See`**

\_.xorWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1943

---

## Collection Methods

### flatMapDeep

▸ **flatMapDeep**<`T`\>(`collection`): `T`[]

This method is like `_.flatMap` except that it recursively flattens the mapped results.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                                                                                                                                                                                                    | Description                     |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\>\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\>\> | The collection to iterate over. |

#### Returns

`T`[]

Returns the new flattened array.

**`Since`**

4.7.0

**`Example`**

```ts
function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
```

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:545

▸ **flatMapDeep**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                                             |
| `iteratee`   | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |

#### Returns

`TResult`[]

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:549

▸ **flatMapDeep**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name         | Type                                                                                                                                                               |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                                                                                       |
| `iteratee`   | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |

#### Returns

`TResult`[]

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:553

▸ **flatMapDeep**(`collection`, `iteratee`): `any`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `string`                          |

#### Returns

`any`[]

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:557

▸ **flatMapDeep**(`collection`, `iteratee`): `boolean`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `object`                          |

#### Returns

`boolean`[]

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:561

---

### flatMapDepth

▸ **flatMapDepth**<`T`\>(`collection`): `T`[]

This method is like `_.flatMap` except that it recursively flattens the mapped results up to `depth`
times.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                                                                                                                                                                                                    | Description                     |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\>\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\>\> | The collection to iterate over. |

#### Returns

`T`[]

Returns the new flattened array.

**`Since`**

4.7.0

**`Example`**

```ts
function duplicate(n) {
  return [[[n, n]]];
}

_.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
```

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:669

▸ **flatMapDepth**<`T`, `TResult`\>(`collection`, `iteratee`, `depth?`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                                             |
| `iteratee`   | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |
| `depth?`     | `number`                                                                                                                                                       |

#### Returns

`TResult`[]

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:673

▸ **flatMapDepth**<`T`, `TResult`\>(`collection`, `iteratee`, `depth?`): `TResult`[]

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name         | Type                                                                                                                                                               |
| :----------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                                                                                       |
| `iteratee`   | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |
| `depth?`     | `number`                                                                                                                                                           |

#### Returns

`TResult`[]

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:677

▸ **flatMapDepth**(`collection`, `iteratee`, `depth?`): `any`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `string`                          |
| `depth?`     | `number`                          |

#### Returns

`any`[]

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:681

▸ **flatMapDepth**(`collection`, `iteratee`, `depth?`): `boolean`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `object`                          |
| `depth?`     | `number`                          |

#### Returns

`boolean`[]

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:685

---

### orderBy

▸ **orderBy**<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[]

This method is like `_.sortBy` except that it allows specifying the sort orders of the iteratees to
sort by. If `orders` is unspecified, all values are sorted in ascending order. Otherwise, specify an
order of "desc" for descending or "asc" for ascending sort order of corresponding values.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                       | Description                     |
| :----------- | :--------------------------------------------------------------------------------------------------------- | :------------------------------ |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                         | The collection to iterate over. |
| `iteratees?` | [`Many`](../modules/lodash.md#many)<[`ListIterator`](../modules/lodash.md#listiterator)<`T`, `unknown`\>\> | The iteratees to sort by.       |
| `orders?`    | [`Many`](../modules/lodash.md#many)<`boolean` \| `"asc"` \| `"desc"`\>                                     | The sort orders of `iteratees`. |

#### Returns

`T`[]

Returns the new sorted array.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1327

▸ **orderBy**<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                              |
| `iteratees?` | [`Many`](../modules/lodash.md#many)<[`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>\> |
| `orders?`    | [`Many`](../modules/lodash.md#many)<`boolean` \| `"asc"` \| `"desc"`\>                          |

#### Returns

`T`[]

**`See`**

\_.orderBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1331

▸ **orderBy**<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                                   |
| `iteratees?` | [`Many`](../modules/lodash.md#many)<[`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `unknown`\>\> |
| `orders?`    | [`Many`](../modules/lodash.md#many)<`boolean` \| `"asc"` \| `"desc"`\>                                         |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.orderBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1335

▸ **orderBy**<`T`\>(`collection`, `iteratees?`, `orders?`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                        |
| `iteratees?` | [`Many`](../modules/lodash.md#many)<[`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\>\> |
| `orders?`    | [`Many`](../modules/lodash.md#many)<`boolean` \| `"asc"` \| `"desc"`\>                              |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.orderBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1339

---

### sortBy

▸ **sortBy**<`T`\>(`collection`, `...iteratees?`): `T`[]

Creates an array of elements, sorted in ascending order by the results of running each element in a
collection through each iteratee. This method performs a stable sort, that is, it preserves the
original sort order of equal elements. The iteratees are invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                                                                              | Description                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------ | :------------------------------------------------------------- |
| `collection`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                | The collection to iterate over.                                |
| `...iteratees?` | [`Many`](../modules/lodash.md#many)<[`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>\>[] | The iteratees to sort by, specified individually or in arrays. |

#### Returns

`T`[]

Returns the new sorted array.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1900

▸ **sortBy**<`T`\>(`collection`, `...iteratees`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name           | Type                                                                                                  |
| :------------- | :---------------------------------------------------------------------------------------------------- |
| `collection`   | `undefined` \| `null` \| `T`                                                                          |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<[`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\>\>[] |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.sortBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1904

---

## Function Methods

### flip

▸ **flip**<`T`\>(`func`): `T`

Creates a function that invokes `func` with arguments reversed.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name   | Type | Description                         |
| :----- | :--- | :---------------------------------- |
| `func` | `T`  | The function to flip arguments for. |

#### Returns

`T`

Returns the new function.

**`Example`**

```ts
var flipped = _.flip(function () {
  return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

#### Defined in

node_modules/@types/lodash/common/function.d.ts:516

---

### unary

▸ **unary**<`T`, `TResult`\>(`func`): (`arg1`: `T`) => `TResult`

Creates a function that accepts up to one argument, ignoring any additional arguments.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name   | Type                                           | Description                        |
| :----- | :--------------------------------------------- | :--------------------------------- |
| `func` | (`arg1`: `T`, ...`args`: `any`[]) => `TResult` | The function to cap arguments for. |

#### Returns

`fn`

Returns the new function.

▸ (`arg1`): `TResult`

Creates a function that accepts up to one argument, ignoring any additional arguments.

##### Parameters

| Name   | Type |
| :----- | :--- |
| `arg1` | `T`  |

##### Returns

`TResult`

Returns the new function.

**`Category`**

Function

**`Example`**

```ts
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
```

**`Example`**

```ts
_.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
```

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1408

---

## Lang Methods

### eq

▸ **eq**(`value`, `other`): `boolean`

Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
comparison between two values to determine if they are equivalent.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:254

---

### isArrayLike

▸ **isArrayLike**<`T`\>(`t`): `boolean`

Checks if `value` is array-like. A value is considered array-like if it's not a function and has a
`value.length` that's an integer greater than or equal to `0` and less than or equal to
`Number.MAX_SAFE_INTEGER`.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name | Type |
| :--- | :--- |
| `t`  | `T`  |

#### Returns

`boolean`

Returns `true` if `value` is array-like, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:408

▸ **isArrayLike**(`value`): value is never

#### Parameters

| Name    | Type                                                   |
| :------ | :----------------------------------------------------- |
| `value` | `undefined` \| `null` \| (...`args`: `any`[]) => `any` |

#### Returns

value is never

**`See`**

\_.isArrayLike

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:412

▸ **isArrayLike**(`value`): value is Object

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

value is Object

**`See`**

\_.isArrayLike

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:416

---

### isArrayLikeObject

▸ **isArrayLikeObject**<`T`\>(`value`): `boolean`

This method is like `_.isArrayLike` except that it also checks if `value` is an object.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name    | Type | Description         |
| :------ | :--- | :------------------ |
| `value` | `T`  | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is an array-like object, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:453

▸ **isArrayLikeObject**(`value`): value is never

#### Parameters

| Name    | Type                                                                                                      |
| :------ | :-------------------------------------------------------------------------------------------------------- |
| `value` | `undefined` \| `null` \| `string` \| `number` \| `boolean` \| `Function` \| (...`args`: `any`[]) => `any` |

#### Returns

value is never

**`See`**

\_.isArrayLikeObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:457

▸ **isArrayLikeObject**(`value`): value is object & Object

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

#### Returns

value is object & Object

**`See`**

\_.isArrayLikeObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:461

---

### isEqual

▸ **isEqual**(`value`, `other`): `boolean`

Performs a deep comparison between two values to determine if they are equivalent.

**Note:** This method supports comparing arrays, array buffers, booleans, date objects, error
objects, maps, numbers, `Object` objects, regexes, sets, strings, symbols, and typed arrays.
`Object` objects are compared by their own, not inherited, enumerable properties. Functions and DOM
nodes are **not** supported.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

**`Example`**

```ts
var object = {user: 'fred'};
var other = {user: 'fred'};

_.isEqual(object, other);
// => true

object === other;
// => false
```

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:620

---

### isEqualWith

▸ **isEqualWith**(`value`, `other`, `customizer?`): `boolean`

This method is like `_.isEqual` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with up to seven arguments: (objValue, othValue [, index|key, object, other,
stack]).

#### Parameters

| Name          | Type                                                          | Description                            |
| :------------ | :------------------------------------------------------------ | :------------------------------------- |
| `value`       | `any`                                                         | The value to compare.                  |
| `other`       | `any`                                                         | The other value to compare.            |
| `customizer?` | [`IsEqualCustomizer`](../modules/lodash.md#isequalcustomizer) | The function to customize comparisons. |

#### Returns

`boolean`

Returns `true` if the values are equivalent, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:666

---

### isInteger

▸ **isInteger**(`value?`): `boolean`

Checks if `value` is an integer.

**Note:** This method is based on [`Number.isInteger`](https://mdn.io/Number/isInteger).

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is an integer, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:773

---

### isLength

▸ **isLength**(`value?`): `boolean`

Checks if `value` is a valid array-like length.

**Note:** This function is loosely based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is a valid length, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:811

---

### isMatch

▸ **isMatch**(`object`, `source`): `boolean`

Performs a deep comparison between `object` and `source` to determine if `object` contains
equivalent property values.

**Note:** This method supports comparing the same values as `_.isEqual`.

#### Parameters

| Name     | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| `object` | `object` | The object to inspect.                  |
| `source` | `object` | The object of property values to match. |

#### Returns

`boolean`

Returns `true` if `object` is a match, else `false`.

**`Example`**

```ts
var object = {user: 'fred', age: 40};

_.isMatch(object, {age: 40});
// => true

_.isMatch(object, {age: 36});
// => false
```

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:869

---

### isMatchWith

▸ **isMatchWith**(`object`, `source`, `customizer?`): `boolean`

This method is like `_.isMatch` except that it accepts `customizer` which is invoked to compare
values. If `customizer` returns `undefined` comparisons are handled by the method instead. The
`customizer` is invoked with three arguments: (objValue, srcValue, index|key, object, source).

#### Parameters

| Name          | Type                                                                  | Description                             |
| :------------ | :-------------------------------------------------------------------- | :-------------------------------------- |
| `object`      | `object`                                                              | The object to inspect.                  |
| `source`      | `object`                                                              | The object of property values to match. |
| `customizer?` | [`isMatchWithCustomizer`](../modules/lodash.md#ismatchwithcustomizer) | The function to customize comparisons.  |

#### Returns

`boolean`

Returns `true` if `object` is a match, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:915

---

### isNil

▸ **isNil**(`value`): value is undefined \| null

Checks if `value` is `null` or `undefined`.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is undefined \| null

Returns `true` if `value` is nullish, else `false`.

**`Example`**

```ts
_.isNil(null);
// => true

_.isNil(void 0);
// => true

_.isNil(NaN);
// => false
```

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:994

---

### isObjectLike

▸ **isObjectLike**(`value?`): `boolean`

Checks if `value` is object-like. A value is object-like if it's not `null` and has a `typeof`
result of "object".

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is object-like, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1100

---

### isSafeInteger

▸ **isSafeInteger**(`value`): `boolean`

Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754 double precision number
which isn't the result of a rounded unsafe integer.

**Note:** This method is based on [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

`boolean`

Returns `true` if `value` is a safe integer, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1186

---

### isSymbol

▸ **isSymbol**(`value`): value is symbol

Checks if `value` is classified as a `Symbol` primitive or object.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is symbol

Returns `true` if `value` is correctly classified, else `false`.

**`Example`**

```ts
_.isSymbol(Symbol.iterator);
// => true

_.isSymbol('abc');
// => false
```

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1260

---

### toFinite

▸ **toFinite**(`value`): `number`

Converts `value` to a finite number.

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to convert. |

#### Returns

`number`

Returns the converted number.

**`Since`**

4.12.0

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1491

---

### toInteger

▸ **toInteger**(`value`): `number`

Converts `value` to an integer.

**Note:** This function is loosely based on
[`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to convert. |

#### Returns

`number`

Returns the converted integer.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1529

---

### toLength

▸ **toLength**(`value`): `number`

Converts `value` to an integer suitable for use as the length of an array-like object.

**Note:** This method is based on
[`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to convert. |

#### Returns

`number`

Returns the converted integer.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1568

---

### toNumber

▸ **toNumber**(`value`): `number`

Converts `value` to a number.

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to process. |

#### Returns

`number`

Returns the number.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1604

---

### toSafeInteger

▸ **toSafeInteger**(`value`): `number`

Converts `value` to a safe integer. A safe integer can be compared and represented correctly.

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to convert. |

#### Returns

`number`

Returns the converted integer.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1664

---

### toString

▸ **toString**(`value`): `string`

Converts `value` to a string if it's not one. An empty string is returned for `null` and `undefined`
values. The sign of `-0` is preserved.

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to process. |

#### Returns

`string`

Returns the string.

**`Example`**

```ts
_.toString(null);
// => ''

_.toString(-0);
// => '-0'

_.toString([1, 2, 3]);
// => '1,2,3'
```

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1698

---

## Math Methods

### max

▸ **max**<`T`\>(`collection`): `undefined` \| `T`

Computes the maximum value of `array`. If `array` is empty or falsey `undefined` is returned.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

`undefined` \| `T`

Returns the maximum value.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:104

---

### maxBy

▸ **maxBy**<`T`\>(`collection`, `iteratee?`): `undefined` \| `T`

This method is like `_.max` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                       |
| :----------- | :----------------------------------------------------------------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | -                                 |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`undefined` \| `T`

Returns the maximum value.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/math.d.ts:140

---

### mean

▸ **mean**(`collection`): `number`

Computes the mean of the values in `array`.

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`\> |

#### Returns

`number`

Returns the mean.

**`Example`**

```ts
_.mean([4, 2, 8, 6]);
// => 5
```

#### Defined in

node_modules/@types/lodash/common/math.d.ts:167

---

### meanBy

▸ **meanBy**<`T`\>(`collection`, `iteratee?`): `number`

Computes the mean of the provided properties of the objects in the `array`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                       |
| :----------- | :----------------------------------------------------------------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | -                                 |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`number`

Returns the mean.

**`Example`**

```ts
_.mean([{n: 4}, {n: 2}, {n: 8}, {n: 6}], 'n');
// => 5
```

#### Defined in

node_modules/@types/lodash/common/math.d.ts:195

---

### min

▸ **min**<`T`\>(`collection`): `undefined` \| `T`

Computes the minimum value of `array`. If `array` is empty or falsey `undefined` is returned.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

`undefined` \| `T`

Returns the minimum value.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:219

---

### minBy

▸ **minBy**<`T`\>(`collection`, `iteratee?`): `undefined` \| `T`

This method is like `_.min` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the criterion by which the value is ranked. The iteratee is invoked with one
argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                       |
| :----------- | :----------------------------------------------------------------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | -                                 |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`undefined` \| `T`

Returns the minimum value.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/math.d.ts:255

---

### subtract

▸ **subtract**(`minuend`, `subtrahend`): `number`

Subtract two numbers.

#### Parameters

| Name         | Type     | Description                         |
| :----------- | :------- | :---------------------------------- |
| `minuend`    | `number` | The first number in a subtraction.  |
| `subtrahend` | `number` | The second number in a subtraction. |

#### Returns

`number`

Returns the difference.

**`Example`**

```ts
_.subtract(6, 4);
// => 2
```

#### Defined in

node_modules/@types/lodash/common/math.d.ts:328

---

### sum

▸ **sum**(`collection`): `number`

Computes the sum of the values in `array`.

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`\> |

#### Returns

`number`

Returns the sum.

**`Example`**

```ts
_.sum([4, 2, 8, 6]);
// => 20
```

#### Defined in

node_modules/@types/lodash/common/math.d.ts:355

---

### sumBy

▸ **sumBy**<`T`\>(`collection`, `iteratee?`): `number`

This method is like `_.sum` except that it accepts `iteratee` which is invoked for each element in
`array` to generate the value to be summed. The iteratee is invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                       |
| :----------- | :----------------------------------------------------------------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | -                                 |
| `iteratee?`  | `string` \| (`value`: `T`) => `number`                             | The iteratee invoked per element. |

#### Returns

`number`

Returns the sum.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/math.d.ts:391

---

## Number Methods

### clamp

▸ **clamp**(`number`, `lower?`, `upper`): `number`

Clamps `number` within the inclusive `lower` and `upper` bounds.

#### Parameters

| Name     | Type     | Description          |
| :------- | :------- | :------------------- |
| `number` | `number` | The number to clamp. |
| `lower?` | `number` | The lower bound.     |
| `upper`  | `number` | The upper bound.     |

#### Returns

`number`

Returns the clamped number.

Returns the clamped number.

**`Example`**

```ts
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
// => 5
Clamps `number` within the inclusive `lower` and `upper` bounds.
```

**`Example`**

```ts
_.clamp(-10, -5, 5);
// => -5

_.clamp(10, -5, 5);
```

#### Defined in

node_modules/@types/lodash/common/number.d.ts:34

▸ **clamp**(`number`, `upper`): `number`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `number` | `number` |
| `upper`  | `number` |

#### Returns

`number`

**`See`**

\_.clamp

#### Defined in

node_modules/@types/lodash/common/number.d.ts:38

---

## Object Methods

### assign

▸ **assign**<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Assigns own enumerable properties of source objects to the destination object. Source objects are
applied from left to right. Subsequent sources overwrite property assignments of previous sources.

**Note:** This method mutates `object` and is loosely based on
[`Object.assign`](https://mdn.io/Object/assign).

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name     | Type      | Description             |
| :------- | :-------- | :---------------------- |
| `object` | `TObject` | The destination object. |
| `source` | `TSource` | -                       |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:32

▸ **assign**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
`TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.assign

#### Defined in

node_modules/@types/lodash/common/object.d.ts:36

▸ **assign**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.assign

#### Defined in

node_modules/@types/lodash/common/object.d.ts:40

▸ **assign**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.assign

#### Defined in

node_modules/@types/lodash/common/object.d.ts:44

▸ **assign**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.assign

#### Defined in

node_modules/@types/lodash/common/object.d.ts:48

▸ **assign**(`object`, `...otherArgs`): `any`

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`any`

**`See`**

\_.assign

#### Defined in

node_modules/@types/lodash/common/object.d.ts:52

---

### assignIn

▸ **assignIn**<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

This method is like `_.assign` except that it iterates over own and inherited source properties.

**Note:** This method mutates `object`.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name     | Type      | Description             |
| :------- | :-------- | :---------------------- |
| `object` | `TObject` | The destination object. |
| `source` | `TSource` | -                       |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Alias`**

extend

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:134

▸ **assignIn**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
`TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.assignIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:138

▸ **assignIn**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.assignIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:142

▸ **assignIn**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.assignIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:146

▸ **assignIn**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.assignIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:150

▸ **assignIn**<`TResult`\>(`object`, `...otherArgs`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`TResult`

**`See`**

\_.assignIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:154

---

### assignInWith

▸ **assignInWith**<`TObject`, `TSource`\>(`object`, `source`, `customizer?`): `TObject` & `TSource`

This method is like `_.assignIn` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name          | Type                                                        | Description                                |
| :------------ | :---------------------------------------------------------- | :----------------------------------------- |
| `object`      | `TObject`                                                   | The destination object.                    |
| `source`      | `TSource`                                                   | -                                          |
| `customizer?` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) | The function to customize assigned values. |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Alias`**

extendWith

**`Example`**

```ts
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignInWith, customizer);

defaults({a: 1}, {b: 2}, {a: 3});
// => { 'a': 1, 'b': 2 }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:235

▸ **assignInWith**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`,
`customizer`): `TObject` & `TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.assignInWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:239

▸ **assignInWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.assignInWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:243

▸ **assignInWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
`TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `source4`    | `TSource4`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.assignInWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:247

▸ **assignInWith**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.assignInWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:251

▸ **assignInWith**<`TResult`\>(`object`, `...otherArgs`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`TResult`

**`See`**

\_.assignInWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:255

---

### assignWith

▸ **assignWith**<`TObject`, `TSource`\>(`object`, `source`, `customizer?`): `TObject` & `TSource`

This method is like `_.assign` except that it accepts `customizer` which is invoked to produce the
assigned values. If `customizer` returns `undefined` assignment is handled by the method instead.
The `customizer` is invoked with five arguments: (objValue, srcValue, key, object, source).

**Note:** This method mutates `object`.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name          | Type                                                        | Description                                |
| :------------ | :---------------------------------------------------------- | :----------------------------------------- |
| `object`      | `TObject`                                                   | The destination object.                    |
| `source`      | `TSource`                                                   | -                                          |
| `customizer?` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) | The function to customize assigned values. |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Example`**

```ts
function customizer(objValue, srcValue) {
  return _.isUndefined(objValue) ? srcValue : objValue;
}

var defaults = _.partialRight(_.assignWith, customizer);

defaults({a: 1}, {b: 2}, {a: 3});
// => { 'a': 1, 'b': 2 }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:334

▸ **assignWith**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
`TObject` & `TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.assignWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:338

▸ **assignWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.assignWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:342

▸ **assignWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
`TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `source4`    | `TSource4`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.assignWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:346

▸ **assignWith**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.assignWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:350

▸ **assignWith**<`TResult`\>(`object`, `...otherArgs`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`TResult`

**`See`**

\_.assignWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:354

---

### functions

▸ **functions**(`object`): `string`[]

Creates an array of function property names from own enumerable properties of `object`.

#### Parameters

| Name     | Type  | Description            |
| :------- | :---- | :--------------------- |
| `object` | `any` | The object to inspect. |

#### Returns

`string`[]

Returns the new array of property names.

**`Example`**

```ts
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functions(new Foo());
// => ['a', 'b']
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:974

---

### functionsIn

▸ **functionsIn**<`T`\>(`object`): `string`[]

Creates an array of function property names from own and inherited enumerable properties of
`object`.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name     | Type  | Description            |
| :------- | :---- | :--------------------- |
| `object` | `any` | The object to inspect. |

#### Returns

`string`[]

Returns the new array of property names.

**`Example`**

```ts
function Foo() {
  this.a = _.constant('a');
  this.b = _.constant('b');
}

Foo.prototype.c = _.constant('c');

_.functionsIn(new Foo());
// => ['a', 'b', 'c']
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1008

---

### has

▸ **has**<`T`\>(`object`, `path`): `boolean`

Checks if `path` is a direct property of `object`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                | Description          |
| :------- | :-------------------------------------------------- | :------------------- |
| `object` | `T`                                                 | The object to query. |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) | The path to check.   |

#### Returns

`boolean`

Returns `true` if `path` exists, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1330

---

### hasIn

▸ **hasIn**<`T`\>(`object`, `path`): `boolean`

Checks if `path` is a direct or inherited property of `object`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                | Description          |
| :------- | :-------------------------------------------------- | :------------------- |
| `object` | `T`                                                 | The object to query. |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) | The path to check.   |

#### Returns

`boolean`

Returns `true` if `path` exists, else `false`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1368

---

### merge

▸ **merge**<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

Recursively merges own and inherited enumerable properties of source objects into the destination
object, skipping source properties that resolve to `undefined`. Array and plain object properties
are merged recursively. Other objects and value types are overridden by assignment. Source objects
are applied from left to right. Subsequent sources overwrite property assignments of previous
sources.

**Note:** This method mutates `object`.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name     | Type      | Description             |
| :------- | :-------- | :---------------------- |
| `object` | `TObject` | The destination object. |
| `source` | `TSource` | -                       |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1775

▸ **merge**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
`TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.merge

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1779

▸ **merge**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.merge

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1783

▸ **merge**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.merge

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1787

▸ **merge**(`object`, `...otherArgs`): `any`

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`any`

**`See`**

\_.merge

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1791

---

### mergeWith

▸ **mergeWith**<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

This method is like `_.merge` except that it accepts `customizer` which is invoked to produce the
merged values of the destination and source properties. If `customizer` returns `undefined` merging
is handled by the method instead. The `customizer` is invoked with seven arguments: (objValue,
srcValue, key, object, source, stack).

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name         | Type                                                                                            | Description                                |
| :----------- | :---------------------------------------------------------------------------------------------- | :----------------------------------------- |
| `object`     | `TObject`                                                                                       | The destination object.                    |
| `source`     | `TSource`                                                                                       | -                                          |
| `customizer` | (`value`: `any`, `srcValue`: `any`, `key`: `string`, `object`: `any`, `source`: `any`) => `any` | The function to customize assigned values. |

#### Returns

`TObject` & `TSource`

Returns `object`.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1874

▸ **mergeWith**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
`TObject` & `TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name         | Type                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------- |
| `object`     | `TObject`                                                                                       |
| `source1`    | `TSource1`                                                                                      |
| `source2`    | `TSource2`                                                                                      |
| `customizer` | (`value`: `any`, `srcValue`: `any`, `key`: `string`, `object`: `any`, `source`: `any`) => `any` |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.mergeWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1878

▸ **mergeWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name         | Type                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------- |
| `object`     | `TObject`                                                                                       |
| `source1`    | `TSource1`                                                                                      |
| `source2`    | `TSource2`                                                                                      |
| `source3`    | `TSource3`                                                                                      |
| `customizer` | (`value`: `any`, `srcValue`: `any`, `key`: `string`, `object`: `any`, `source`: `any`) => `any` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.mergeWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1882

▸ **mergeWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
`TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name         | Type                                                                                            |
| :----------- | :---------------------------------------------------------------------------------------------- |
| `object`     | `TObject`                                                                                       |
| `source1`    | `TSource1`                                                                                      |
| `source2`    | `TSource2`                                                                                      |
| `source3`    | `TSource3`                                                                                      |
| `source4`    | `TSource4`                                                                                      |
| `customizer` | (`value`: `any`, `srcValue`: `any`, `key`: `string`, `object`: `any`, `source`: `any`) => `any` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.mergeWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1886

▸ **mergeWith**(`object`, `...otherArgs`): `any`

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`any`

**`See`**

\_.mergeWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1890

---

### omit

▸ **omit**<`T`, `K`\>(`object`, `...paths?`): `Pick`<`T`, `Exclude`<keyof `T`, `K`[`number`]\>\>

The opposite of `_.pick`; this method creates an object composed of the own and inherited enumerable
properties of `object` that are not omitted.

#### Type parameters

| Name | Type                                                          |
| :--- | :------------------------------------------------------------ |
| `T`  | extends `object`                                              |
| `K`  | extends [`PropertyName`](../modules/lodash.md#propertyname)[] |

#### Parameters

| Name        | Type                         | Description                                                       |
| :---------- | :--------------------------- | :---------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T` | The source object.                                                |
| `...paths?` | `K`                          | The property names to omit, specified individually or in arrays.. |

#### Returns

`Pick`<`T`, `Exclude`<keyof `T`, `K`[`number`]\>\>

Returns the new object.

**`Example`**

```ts
var object = {a: 1, b: '2', c: 3};

_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1953

▸ **omit**<`T`, `K`\>(`object`, `...paths`): [`Omit`](../modules/lodash.md#omit)<`T`, `K`\>

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | extends `object`                         |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name       | Type                                        |
| :--------- | :------------------------------------------ |
| `object`   | `undefined` \| `null` \| `T`                |
| `...paths` | [`Many`](../modules/lodash.md#many)<`K`\>[] |

#### Returns

[`Omit`](../modules/lodash.md#omit)<`T`, `K`\>

**`See`**

\_.omit

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1960

▸ **omit**<`T`\>(`object`, `...paths`): `Partial`<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `object`   | `undefined` \| `null` \| `T`                                                                |
| `...paths` | [`Many`](../modules/lodash.md#many)<[`PropertyName`](../modules/lodash.md#propertyname)\>[] |

#### Returns

`Partial`<`T`\>

**`See`**

\_.omit

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1964

---

### omitBy

▸ **omitBy**<`T`\>(`object`, `predicate?`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

The opposite of `_.pickBy`; this method creates an object composed of the own and inherited
enumerable properties of `object` that `predicate` doesn't return truthy for.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                | Description                        |
| :----------- | :------------------------------------------------------------------ | :--------------------------------- |
| `object`     | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> | The source object.                 |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\>   | The function invoked per property. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

Returns the new object.

**`Example`**

```ts
var object = {a: 1, b: '2', c: 3};

_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2015

▸ **omitBy**<`T`\>(`object`, `predicate?`): [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                              |
| :----------- | :-------------------------------------------------------------------------------- |
| `object`     | `undefined` \| `null` \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\>                 |

#### Returns

[`NumericDictionary`](lodash.NumericDictionary.md)<`T`\>

**`See`**

\_.omitBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2019

▸ **omitBy**<`T`\>(`object`, `predicate`): `Partial`<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name        | Type                                                                         |
| :---------- | :--------------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T`                                                 |
| `predicate` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`[keyof `T`]\> |

#### Returns

`Partial`<`T`\>

**`See`**

\_.omitBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2023

---

### pick

▸ **pick**<`T`, `U`\>(`object`, `...props?`): `Pick`<`T`, `U`\>

Creates an object composed of the picked `object` properties.

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | extends `object`                         |
| `U`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name        | Type                                        | Description                                                      |
| :---------- | :------------------------------------------ | :--------------------------------------------------------------- |
| `object`    | `T`                                         | The source object.                                               |
| `...props?` | [`Many`](../modules/lodash.md#many)<`U`\>[] | The property names to pick, specified individually or in arrays. |

#### Returns

`Pick`<`T`, `U`\>

Returns the new object.

**`Example`**

```ts
var object = {a: 1, b: '2', c: 3};

_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2065

▸ **pick**<`T`\>(`object`, `...props`): `Partial`<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `object`   | `undefined` \| `null` \| `T`                                                                |
| `...props` | [`Many`](../modules/lodash.md#many)<[`PropertyPath`](../modules/lodash.md#propertypath)\>[] |

#### Returns

`Partial`<`T`\>

**`See`**

\_.pick

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2069

---

### pickBy

▸ **pickBy**<`T`, `S`\>(`object`, `predicate?`): [`Dictionary`](lodash.Dictionary.md)<`S`\>

Creates an object composed of the `object` properties `predicate` returns truthy for. The predicate
is invoked with two arguments: (value, key).

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

#### Parameters

| Name         | Type                                                                                     | Description                        |
| :----------- | :--------------------------------------------------------------------------------------- | :--------------------------------- |
| `object`     | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\>                      | The source object.                 |
| `predicate?` | [`ValueKeyIterateeTypeGuard`](../modules/lodash.md#valuekeyiterateetypeguard)<`T`, `S`\> | The function invoked per property. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`S`\>

Returns the new object.

**`Example`**

```ts
var object = {a: 1, b: '2', c: 3};

_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2107

▸ **pickBy**<`T`, `S`\>(`object`, `predicate`):
[`NumericDictionary`](lodash.NumericDictionary.md)<`S`\>

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

#### Parameters

| Name        | Type                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\>        |
| `predicate` | [`ValueKeyIterateeTypeGuard`](../modules/lodash.md#valuekeyiterateetypeguard)<`T`, `S`\> |

#### Returns

[`NumericDictionary`](lodash.NumericDictionary.md)<`S`\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2111

▸ **pickBy**<`T`\>(`object`, `predicate?`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                |
| :----------- | :------------------------------------------------------------------ |
| `object`     | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\>   |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2115

▸ **pickBy**<`T`\>(`object`, `predicate?`): [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                              |
| :----------- | :-------------------------------------------------------------------------------- |
| `object`     | `undefined` \| `null` \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\>                 |

#### Returns

[`NumericDictionary`](lodash.NumericDictionary.md)<`T`\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2119

▸ **pickBy**<`T`\>(`object`, `predicate?`): `Partial`<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                         |
| :----------- | :--------------------------------------------------------------------------- |
| `object`     | `undefined` \| `null` \| `T`                                                 |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`[keyof `T`]\> |

#### Returns

`Partial`<`T`\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2123

---

### updateWith

▸ **updateWith**<`T`\>(`object`, `path`, `updater`, `customizer?`): `T`

This method is like `_.update` except that it accepts `customizer` which is invoked to produce the
objects of `path`. If `customizer` returns `undefined` path creation is handled by the method
instead. The `customizer` is invoked with three arguments: (nsValue, key, nsObject).

**Note:** This method mutates `object`.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name          | Type                                                                | Description                                |
| :------------ | :------------------------------------------------------------------ | :----------------------------------------- |
| `object`      | `T`                                                                 | The object to modify.                      |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 | The path of the property to set.           |
| `updater`     | (`oldValue`: `any`) => `any`                                        | The function to produce the updated value. |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> | The function to customize assigned values. |

#### Returns

`T`

Returns `object`.

**`Since`**

4.6.0

**`Example`**

```ts
var object = {};

_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }
```

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2464

▸ **updateWith**<`T`, `TResult`\>(`object`, `path`, `updater`, `customizer?`): `TResult`

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `object`      | `T`                                                                 |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 |
| `updater`     | (`oldValue`: `any`) => `any`                                        |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> |

#### Returns

`TResult`

**`See`**

\_.updateWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2468

---

## Other Methods

### add

▸ **add**(`augend`, `addend`): `number`

Adds two numbers.

#### Parameters

| Name     | Type     | Description               |
| :------- | :------- | :------------------------ |
| `augend` | `number` | The first number to add.  |
| `addend` | `number` | The second number to add. |

#### Returns

`number`

Returns the sum.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:11

---

### after

▸ **after**<`TFunc`\>(`n`, `func`): `TFunc`

The opposite of \_.before; this method creates a function that invokes func once it’s called n or
more times.

#### Type parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `TFunc` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name   | Type     | Description                                 |
| :----- | :------- | :------------------------------------------ |
| `n`    | `number` | The number of calls before func is invoked. |
| `func` | `TFunc`  | The function to restrict.                   |

#### Returns

`TFunc`

Returns the new restricted function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:11

---

### ary

▸ **ary**(`func`, `n?`): (...`args`: `any`[]) => `any`

Creates a function that accepts up to n arguments ignoring any additional arguments.

#### Parameters

| Name   | Type                          | Description                        |
| :----- | :---------------------------- | :--------------------------------- |
| `func` | (...`args`: `any`[]) => `any` | The function to cap arguments for. |
| `n?`   | `number`                      | The arity cap.                     |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `any`

Creates a function that accepts up to n arguments ignoring any additional arguments.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:33

---

### at

▸ **at**<`T`\>(`object`, `...props`): `T`[]

Creates an array of elements corresponding to the given keys, or indexes, of collection. Keys may be
specified as individual arguments or as arrays of keys.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                                                                                            | Description                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------- |
| `object`   | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The object to iterate over.                                                             |
| `...props` | [`PropertyPath`](../modules/lodash.md#propertypath)[]                                                                           | The property names or indexes of elements to pick, specified individually or in arrays. |

#### Returns

`T`[]

Returns the new array of picked elements.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:417

▸ **at**<`T`\>(`object`, `...props`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name       | Type                                              |
| :--------- | :------------------------------------------------ |
| `object`   | `undefined` \| `null` \| `T`                      |
| `...props` | [`Many`](../modules/lodash.md#many)<keyof `T`\>[] |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.at

#### Defined in

node_modules/@types/lodash/common/object.d.ts:421

---

### attempt

▸ **attempt**<`TResult`\>(`func`, `...args`): `Error` \| `TResult`

Attempts to invoke func, returning either the result or the caught error object. Any additional
arguments are provided to func when it’s invoked.

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name      | Type                              | Description              |
| :-------- | :-------------------------------- | :----------------------- |
| `func`    | (...`args`: `any`[]) => `TResult` | The function to attempt. |
| `...args` | `any`[]                           | -                        |

#### Returns

`Error` \| `TResult`

Returns the func result or error object.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:11

---

### before

▸ **before**<`TFunc`\>(`n`, `func`): `TFunc`

Creates a function that invokes func, with the this binding and arguments of the created function,
while it’s called less than n times. Subsequent calls to the created function return the result of
the last func invocation.

#### Type parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `TFunc` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name   | Type     | Description                                             |
| :----- | :------- | :------------------------------------------------------ |
| `n`    | `number` | The number of calls at which func is no longer invoked. |
| `func` | `TFunc`  | The function to restrict.                               |

#### Returns

`TFunc`

Returns the new restricted function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:57

---

### bindAll

▸ **bindAll**<`T`\>(`object`, `...methodNames`): `T`

Binds methods of an object to the object itself, overwriting the existing method. Method names may
be specified as individual arguments or as arrays of method names. If no method names are provided
all enumerable function properties, own and inherited, of object are bound.

Note: This method does not set the "length" property of bound functions.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name             | Type                                             | Description                                                                                      |
| :--------------- | :----------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `object`         | `T`                                              | The object to bind and assign the bound methods to.                                              |
| `...methodNames` | [`Many`](../modules/lodash.md#many)<`string`\>[] | The object method names to bind, specified as individual method names or arrays of method names. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:39

---

### camelCase

▸ **camelCase**(`string?`): `string`

Converts string to camel case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the camel cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:10

---

### capitalize

▸ **capitalize**(`string?`): `string`

Converts the first character of string to upper case and the remaining to lower case.

#### Parameters

| Name      | Type     | Description               |
| :-------- | :------- | :------------------------ |
| `string?` | `string` | The string to capitalize. |

#### Returns

`string`

Returns the capitalized string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:32

---

### castArray

▸ **castArray**<`T`\>(`value?`): `T`[]

Casts value as an array if it’s not one.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                      | Description           |
| :------- | :---------------------------------------- | :-------------------- |
| `value?` | [`Many`](../modules/lodash.md#many)<`T`\> | The value to inspect. |

#### Returns

`T`[]

Returns the cast array.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:13

---

### ceil

▸ **ceil**(`n`, `precision?`): `number`

Calculates n rounded up to precision.

#### Parameters

| Name         | Type     | Description                   |
| :----------- | :------- | :---------------------------- |
| `n`          | `number` | The number to round up.       |
| `precision?` | `number` | The precision to round up to. |

#### Returns

`number`

Returns the rounded up number.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:34

---

### chain

▸ **chain**<`TrapAny`\>(`value`): [`CollectionChain`](lodash.CollectionChain.md)<`any`\> &
[`FunctionChain`](lodash.FunctionChain.md)<`any`\> & [`ObjectChain`](lodash.ObjectChain.md)<`any`\>
& [`PrimitiveChain`](lodash.PrimitiveChain.md)<`any`\> & [`StringChain`](lodash.StringChain.md)

Creates a lodash object that wraps value with explicit method chaining enabled.

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `TrapAny` | extends `Object` |

#### Parameters

| Name    | Type      | Description        |
| :------ | :-------- | :----------------- |
| `value` | `TrapAny` | The value to wrap. |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\> &
[`FunctionChain`](lodash.FunctionChain.md)<`any`\> & [`ObjectChain`](lodash.ObjectChain.md)<`any`\>
& [`PrimitiveChain`](lodash.PrimitiveChain.md)<`any`\> & [`StringChain`](lodash.StringChain.md)

Returns the new lodash wrapper instance.

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:11

▸ **chain**<`T`\>(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `T`  | extends `undefined` \| `null` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:15

▸ **chain**(`value`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:19

▸ **chain**(`value`): [`StringNullableChain`](lodash.StringNullableChain.md)

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `value` | `undefined` \| `null` \| `string` |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:23

▸ **chain**<`T`\>(`value`): [`FunctionChain`](lodash.FunctionChain.md)<`T`\>

#### Type parameters

| Name | Type                                  |
| :--- | :------------------------------------ |
| `T`  | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<`T`\>

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:27

▸ **chain**<`T`\>(`value`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                               |
| :------ | :----------------------------------------------------------------- |
| `value` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:31

▸ **chain**<`T`\>(`value`): [`ObjectChain`](lodash.ObjectChain.md)<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `value` | `undefined` \| `null` \| `T` |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`T`\>

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:35

▸ **chain**<`T`\>(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:39

---

### chunk

▸ **chunk**<`T`\>(`array`, `size?`): `T`[][]

Creates an array of elements split into groups the length of size. If collection can’t be split
evenly, the final chunk will be the remaining elements.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description               |
| :------ | :----------------------------------------------------------------- | :------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to process.     |
| `size?` | `number`                                                           | The length of each chunk. |

#### Returns

`T`[][]

Returns the new array containing chunks.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:12

---

### clone

▸ **clone**<`T`\>(`value`): `T`

Creates a shallow clone of value.

Note: This method is loosely based on the structured clone algorithm and supports cloning arrays,
array buffers, booleans, date objects, maps, numbers, Object objects, regexes, sets, strings,
symbols, and typed arrays. The own enumerable properties of arguments objects are cloned as plain
objects. An empty object is returned for uncloneable values such as error objects, functions, DOM
nodes, and WeakMaps.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type | Description         |
| :------ | :--- | :------------------ |
| `value` | `T`  | The value to clone. |

#### Returns

`T`

Returns the cloned value.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:94

---

### cloneDeep

▸ **cloneDeep**<`T`\>(`value`): `T`

This method is like \_.clone except that it recursively clones value.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type | Description                     |
| :------ | :--- | :------------------------------ |
| `value` | `T`  | The value to recursively clone. |

#### Returns

`T`

Returns the deep cloned value.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:165

---

### cloneDeepWith

▸ **cloneDeepWith**<`T`\>(`value`, `customizer`): `any`

This method is like \_.cloneWith except that it recursively clones value.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                            | Description                        |
| :----------- | :------------------------------------------------------------------------------ | :--------------------------------- |
| `value`      | `T`                                                                             | The value to recursively clone.    |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)<`T`\> | The function to customize cloning. |

#### Returns

`any`

Returns the deep cloned value.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:176

▸ **cloneDeepWith**<`T`\>(`value`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`

**`See`**

\_.cloneDeepWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:180

---

### cloneWith

▸ **cloneWith**<`T`, `TResult`\>(`value`, `customizer`): `TResult`

This method is like \_.clone except that it accepts customizer which is invoked to produce the
cloned value. If customizer returns undefined cloning is handled by the method instead.

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `T`       | `T`                                                             |
| `TResult` | extends `null` \| `string` \| `number` \| `boolean` \| `object` |

#### Parameters

| Name         | Type                                                                               | Description                        |
| :----------- | :--------------------------------------------------------------------------------- | :--------------------------------- |
| `value`      | `T`                                                                                | The value to clone.                |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`, `TResult`\> | The function to customize cloning. |

#### Returns

`TResult`

Returns the cloned value.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:192

▸ **cloneWith**<`T`, `TResult`\>(`value`, `customizer`): `T` \| `TResult`

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                                              |
| :----------- | :------------------------------------------------------------------------------------------------ |
| `value`      | `T`                                                                                               |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`, `undefined` \| `TResult`\> |

#### Returns

`T` \| `TResult`

**`See`**

\_.cloneWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:196

▸ **cloneWith**<`T`\>(`value`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`

**`See`**

\_.cloneWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:200

---

### compact

▸ **compact**<`T`\>(`array`): `T`[]

Creates an array with all falsey values removed. The values false, null, 0, 0n, "", undefined, and
NaN are falsey.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                          | Description           |
| :------ | :------------------------------------------------------------------------------------------------------------ | :-------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T` \| [`Falsey`](../modules/lodash.md#falsey)\> | The array to compact. |

#### Returns

`T`[]

Returns the new array of filtered values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:34

---

### conforms

▸ **conforms**<`T`\>(`source`): (`value`: `T`) => `boolean`

Creates a function that invokes the predicate properties of `source` with the corresponding property
values of a given object, returning true if all predicates return truthy, else false.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`T`\> |

#### Returns

`fn`

▸ (`value`): `boolean`

Creates a function that invokes the predicate properties of `source` with the corresponding property
values of a given object, returning true if all predicates return truthy, else false.

##### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

##### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:94

---

### conformsTo

▸ **conformsTo**<`T`\>(`object`, `source`): `boolean`

Checks if object conforms to source by invoking the predicate properties of source with the
corresponding property values of object.

Note: This method is equivalent to \_.conforms when source is partially applied.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `object` | `T`                                                                             |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`T`\> |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:209

---

### constant

▸ **constant**<`T`\>(`value`): () => `T`

Creates a function that returns value.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type | Description                                |
| :------ | :--- | :----------------------------------------- |
| `value` | `T`  | The value to return from the new function. |

#### Returns

`fn`

Returns the new function.

▸ (): `T`

Creates a function that returns value.

##### Returns

`T`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:116

---

### countBy

▸ **countBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`number`\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the number of times the key was returned by
iteratee. The iteratee is invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The collection to iterate over.     |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The function invoked per iteration. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`number`\>

Returns the composed aggregate object.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:13

▸ **countBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`number`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                           |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`[keyof `T`]\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`number`\>

**`See`**

\_.countBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:17

---

### create

▸ **create**<`T`, `U`\>(`prototype`, `properties?`): `T` & `U`

Creates an object that inherits from the given prototype object. If a properties object is provided
its own enumerable properties are assigned to the created object.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |
| `U`  | extends `object` |

#### Parameters

| Name          | Type | Description                             |
| :------------ | :--- | :-------------------------------------- |
| `prototype`   | `T`  | The object to inherit from.             |
| `properties?` | `U`  | The properties to assign to the object. |

#### Returns

`T` & `U`

Returns the new object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:456

---

### debounce

▸ **debounce**<`T`\>(`func`, `wait`, `options`):
[`DebouncedFuncLeading`](lodash.DebouncedFuncLeading.md)<`T`\>

Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
since the last time the debounced function was invoked. The debounced function comes with a cancel
method to cancel delayed invocations and a flush method to immediately invoke them. Provide an
options object to indicate that func should be invoked on the leading and/or trailing edge of the
wait timeout. Subsequent calls to the debounced function return the result of the last func
invocation.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the debounced function is invoked more than once during the wait timeout.

See David Corbacho’s article for details over the differences between _.debounce and _.throttle.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name      | Type                                                           | Description                          |
| :-------- | :------------------------------------------------------------- | :----------------------------------- |
| `func`    | `T`                                                            | The function to debounce.            |
| `wait`    | `undefined` \| `number`                                        | The number of milliseconds to delay. |
| `options` | [`DebounceSettingsLeading`](lodash.DebounceSettingsLeading.md) | The options object.                  |

#### Returns

[`DebouncedFuncLeading`](lodash.DebouncedFuncLeading.md)<`T`\>

Returns the new debounced function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:425

▸ **debounce**<`T`\>(`func`, `wait?`, `options?`): [`DebouncedFunc`](lodash.DebouncedFunc.md)<`T`\>

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name       | Type                                             |
| :--------- | :----------------------------------------------- |
| `func`     | `T`                                              |
| `wait?`    | `number`                                         |
| `options?` | [`DebounceSettings`](lodash.DebounceSettings.md) |

#### Returns

[`DebouncedFunc`](lodash.DebouncedFunc.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:426

---

### deburr

▸ **deburr**(`string?`): `string`

Deburrs string by converting latin-1 supplementary letters to basic latin letters and removing
combining diacritical marks.

#### Parameters

| Name      | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `string?` | `string` | The string to deburr. |

#### Returns

`string`

Returns the deburred string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:55

---

### defaultTo

▸ **defaultTo**<`T`\>(`value`, `defaultValue`): `T`

Checks `value` to determine whether a default value should be returned in its place. The
`defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name           | Type                         | Description         |
| :------------- | :--------------------------- | :------------------ |
| `value`        | `undefined` \| `null` \| `T` | The value to check. |
| `defaultValue` | `T`                          | The default value.  |

#### Returns

`T`

Returns the resolved value.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:141

▸ **defaultTo**<`T`, `TDefault`\>(`value`, `defaultValue`): `T` \| `TDefault`

#### Type parameters

| Name       |
| :--------- |
| `T`        |
| `TDefault` |

#### Parameters

| Name           | Type                         |
| :------------- | :--------------------------- |
| `value`        | `undefined` \| `null` \| `T` |
| `defaultValue` | `TDefault`                   |

#### Returns

`T` \| `TDefault`

**`See`**

\_.defaultTo

#### Defined in

node_modules/@types/lodash/common/util.d.ts:145

---

### defaults

▸ **defaults**<`TObject`, `TSource`\>(`object`, `source`): `NonNullable`<`TSource` & `TObject`\>

Assigns own enumerable properties of source object(s) to the destination object for all destination
properties that resolve to undefined. Once a property is set, additional values of the same property
are ignored.

Note: This method mutates object.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name     | Type      | Description             |
| :------- | :-------- | :---------------------- |
| `object` | `TObject` | The destination object. |
| `source` | `TSource` | -                       |

#### Returns

`NonNullable`<`TSource` & `TObject`\>

The destination object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:482

▸ **defaults**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`):
`NonNullable`<`TSource2` & `TSource1` & `TObject`\>

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`NonNullable`<`TSource2` & `TSource1` & `TObject`\>

**`See`**

\_.defaults

#### Defined in

node_modules/@types/lodash/common/object.d.ts:486

▸ **defaults**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`): `NonNullable`<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`NonNullable`<`TSource3` & `TSource2` & `TSource1` & `TObject`\>

**`See`**

\_.defaults

#### Defined in

node_modules/@types/lodash/common/object.d.ts:490

▸ **defaults**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`): `NonNullable`<`TSource4` & `TSource3` & `TSource2` & `TSource1` &
`TObject`\>

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`NonNullable`<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `TObject`\>

**`See`**

\_.defaults

#### Defined in

node_modules/@types/lodash/common/object.d.ts:494

▸ **defaults**<`TObject`\>(`object`): `NonNullable`<`TObject`\>

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`NonNullable`<`TObject`\>

**`See`**

\_.defaults

#### Defined in

node_modules/@types/lodash/common/object.d.ts:498

▸ **defaults**(`object`, `...sources`): `any`

#### Parameters

| Name         | Type    |
| :----------- | :------ |
| `object`     | `any`   |
| `...sources` | `any`[] |

#### Returns

`any`

**`See`**

\_.defaults

#### Defined in

node_modules/@types/lodash/common/object.d.ts:502

---

### defaultsDeep

▸ **defaultsDeep**(`object`, `...sources`): `any`

This method is like \_.defaults except that it recursively assigns default properties.

#### Parameters

| Name         | Type    | Description             |
| :----------- | :------ | :---------------------- |
| `object`     | `any`   | The destination object. |
| `...sources` | `any`[] | The source objects.     |

#### Returns

`any`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:563

---

### defer

▸ **defer**(`func`, `...args`): `number`

Defers invoking the func until the current call stack has cleared. Any additional arguments are
provided to func when it’s invoked.

#### Parameters

| Name      | Type                          | Description                                |
| :-------- | :---------------------------- | :----------------------------------------- |
| `func`    | (...`args`: `any`[]) => `any` | The function to defer.                     |
| `...args` | `any`[]                       | The arguments to invoke the function with. |

#### Returns

`number`

Returns the timer id.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:463

---

### delay

▸ **delay**(`func`, `wait`, `...args`): `number`

Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s
invoked.

#### Parameters

| Name      | Type                          | Description                                     |
| :-------- | :---------------------------- | :---------------------------------------------- |
| `func`    | (...`args`: `any`[]) => `any` | The function to delay.                          |
| `wait`    | `number`                      | The number of milliseconds to delay invocation. |
| `...args` | `any`[]                       | The arguments to invoke the function with.      |

#### Returns

`number`

Returns the timer id.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:486

---

### difference

▸ **difference**<`T`\>(`array`, `...values`): `T`[]

Creates an array of `array` values not included in the other provided arrays using SameValueZero for
equality comparisons. The order and references of result values are determined by the first array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                      |
| :---------- | :----------------------------------------------------------------- | :------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to inspect.            |
| `...values` | [`List`](../modules/lodash.md#list)<`T`\>[]                        | The arrays of values to exclude. |

#### Returns

`T`[]

Returns the new array of filtered values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:117

---

### differenceBy

▸ **differenceBy**<`T1`, `T2`\>(`array`, `values`, `iteratee`): `T1`[]

This method is like \_.difference except that it accepts iteratee which is invoked for each element
of array and values to generate the criterion by which they're compared. The order and references of
result values are determined by the first array. The iteratee is invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name       | Type                                                                 | Description                       |
| :--------- | :------------------------------------------------------------------- | :-------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>  | The array to inspect.             |
| `values`   | [`List`](../modules/lodash.md#list)<`T2`\>                           | The values to exclude.            |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2`\> | The iteratee invoked per element. |

#### Returns

`T1`[]

Returns the new array of filtered values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:142

▸ **differenceBy**<`T1`, `T2`, `T3`\>(`array`, `values1`, `values2`, `iteratee`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name       | Type                                                                         |
| :--------- | :--------------------------------------------------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>          |
| `values1`  | [`List`](../modules/lodash.md#list)<`T2`\>                                   |
| `values2`  | [`List`](../modules/lodash.md#list)<`T3`\>                                   |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3`\> |

#### Returns

`T1`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:146

▸ **differenceBy**<`T1`, `T2`, `T3`, `T4`\>(`array`, `values1`, `values2`, `values3`, `iteratee`):
`T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name       | Type                                                                                 |
| :--------- | :----------------------------------------------------------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                  |
| `values1`  | [`List`](../modules/lodash.md#list)<`T2`\>                                           |
| `values2`  | [`List`](../modules/lodash.md#list)<`T3`\>                                           |
| `values3`  | [`List`](../modules/lodash.md#list)<`T4`\>                                           |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3` \| `T4`\> |

#### Returns

`T1`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:150

▸ **differenceBy**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`array`, `values1`, `values2`, `values3`,
`values4`, `iteratee`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name       | Type                                                                                         |
| :--------- | :------------------------------------------------------------------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                          |
| `values1`  | [`List`](../modules/lodash.md#list)<`T2`\>                                                   |
| `values2`  | [`List`](../modules/lodash.md#list)<`T3`\>                                                   |
| `values3`  | [`List`](../modules/lodash.md#list)<`T4`\>                                                   |
| `values4`  | [`List`](../modules/lodash.md#list)<`T5`\>                                                   |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3` \| `T4` \| `T5`\> |

#### Returns

`T1`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:154

▸ **differenceBy**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`array`, `values1`, `values2`, `values3`,
`values4`, `values5`, `iteratee`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |

#### Parameters

| Name       | Type                                                                                                 |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                                  |
| `values1`  | [`List`](../modules/lodash.md#list)<`T2`\>                                                           |
| `values2`  | [`List`](../modules/lodash.md#list)<`T3`\>                                                           |
| `values3`  | [`List`](../modules/lodash.md#list)<`T4`\>                                                           |
| `values4`  | [`List`](../modules/lodash.md#list)<`T5`\>                                                           |
| `values5`  | [`List`](../modules/lodash.md#list)<`T6`\>                                                           |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6`\> |

#### Returns

`T1`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:158

▸ **differenceBy**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`array`, `values1`, `values2`,
`values3`, `values4`, `values5`, `...values`): `T1`[]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |
| `T6` |
| `T7` |

#### Parameters

| Name        | Type                                                                                                                                                           |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T1`\>                                                                                            |
| `values1`   | [`List`](../modules/lodash.md#list)<`T2`\>                                                                                                                     |
| `values2`   | [`List`](../modules/lodash.md#list)<`T3`\>                                                                                                                     |
| `values3`   | [`List`](../modules/lodash.md#list)<`T4`\>                                                                                                                     |
| `values4`   | [`List`](../modules/lodash.md#list)<`T5`\>                                                                                                                     |
| `values5`   | [`List`](../modules/lodash.md#list)<`T6`\>                                                                                                                     |
| `...values` | ([`List`](../modules/lodash.md#list)<`T7`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T1` \| `T2` \| `T3` \| `T4` \| `T5` \| `T6` \| `T7`\>)[] |

#### Returns

`T1`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:162

▸ **differenceBy**<`T`\>(`array`, `...values`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `...values` | [`List`](../modules/lodash.md#list)<`T`\>[]                        |

#### Returns

`T`[]

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:166

---

### divide

▸ **divide**(`dividend`, `divisor`): `number`

Divide two numbers.

#### Parameters

| Name       | Type     | Description                      |
| :--------- | :------- | :------------------------------- |
| `dividend` | `number` | The first number in a division.  |
| `divisor`  | `number` | The second number in a division. |

#### Returns

`number`

Returns the quotient.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:57

---

### drop

▸ **drop**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of array with n elements dropped from the beginning.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                     |
| :------ | :----------------------------------------------------------------- | :------------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.             |
| `n?`    | `number`                                                           | The number of elements to drop. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:247

---

### dropRight

▸ **dropRight**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of array with n elements dropped from the end.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                     |
| :------ | :----------------------------------------------------------------- | :------------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.             |
| `n?`    | `number`                                                           | The number of elements to drop. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:269

---

### dropRightWhile

▸ **dropRightWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a slice of array excluding elements dropped from the end. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.                 |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>          | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:292

---

### dropWhile

▸ **dropWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until
predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.                 |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>          | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:315

---

### endsWith

▸ **endsWith**(`string?`, `target?`, `position?`): `boolean`

Checks if string ends with the given target string.

#### Parameters

| Name        | Type     | Description                  |
| :---------- | :------- | :--------------------------- |
| `string?`   | `string` | The string to search.        |
| `target?`   | `string` | The string to search for.    |
| `position?` | `number` | The position to search from. |

#### Returns

`boolean`

Returns true if string ends with target, else false.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:79

---

### entries

▸ **entries**<`T`\>(`object?`): [`string`, `T`][]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                                                                                   |
| :-------- | :----------------------------------------------------------------------------------------------------- |
| `object?` | [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |

#### Returns

[`string`, `T`][]

**`See`**

\_.toPairs

#### Defined in

node_modules/@types/lodash/common/object.d.ts:581

▸ **entries**(`object?`): [`string`, `any`][]

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `object?` | `object` |

#### Returns

[`string`, `any`][]

**`See`**

\_.entries

#### Defined in

node_modules/@types/lodash/common/object.d.ts:585

---

### entriesIn

▸ **entriesIn**<`T`\>(`object?`): [`string`, `T`][]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                                                                                   |
| :-------- | :----------------------------------------------------------------------------------------------------- |
| `object?` | [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |

#### Returns

[`string`, `T`][]

**`See`**

\_.entriesIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:615

▸ **entriesIn**(`object?`): [`string`, `any`][]

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `object?` | `object` |

#### Returns

[`string`, `any`][]

**`See`**

\_.entriesIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:619

---

### escape

▸ **escape**(`string?`): `string`

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

| Name      | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `string?` | `string` | The string to escape. |

#### Returns

`string`

Returns the escaped string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:112

---

### escapeRegExp

▸ **escapeRegExp**(`string?`): `string`

Escapes the RegExp special characters "^", "$", "\", ".", "\*", "+", "?", "(", ")", "[", "]", "{",
"}", and "|" in string.

#### Parameters

| Name      | Type     | Description           |
| :-------- | :------- | :-------------------- |
| `string?` | `string` | The string to escape. |

#### Returns

`string`

Returns the escaped string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:135

---

### every

▸ **every**<`T`\>(`collection`, `predicate?`): `boolean`

Checks if predicate returns truthy for all elements of collection. Iteration is stopped once
predicate returns falsey. The predicate is invoked with three arguments: (value, index|key,
collection).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             | Description                         |
| :----------- | :------------------------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | The collection to iterate over.     |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> | The function invoked per iteration. |

#### Returns

`boolean`

Returns true if all elements pass the predicate check, else false.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:166

▸ **every**<`T`\>(`collection`, `predicate?`): `boolean`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |

#### Returns

`boolean`

**`See`**

\_.every

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:170

---

### extend

▸ **extend**<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |
| `source` | `TSource` |

#### Returns

`TObject` & `TSource`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:649

▸ **extend**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` &
`TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:653

▸ **extend**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:657

▸ **extend**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `object`  | `TObject`  |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:661

▸ **extend**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:665

▸ **extend**<`TResult`\>(`object`, `...otherArgs`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`TResult`

**`See`**

\_.extend

#### Defined in

node_modules/@types/lodash/common/object.d.ts:669

---

### extendWith

▸ **extendWith**<`TObject`, `TSource`\>(`object`, `source`, `customizer`): `TObject` & `TSource`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |
| `TSource` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source`     | `TSource`                                                   |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:727

▸ **extendWith**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`, `customizer`):
`TObject` & `TSource1` & `TSource2`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:731

▸ **extendWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`,
`source3`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:735

▸ **extendWith**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`,
`source2`, `source3`, `source4`, `customizer`): `TObject` & `TSource1` & `TSource2` & `TSource3` &
`TSource4`

#### Type parameters

| Name       |
| :--------- |
| `TObject`  |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name         | Type                                                        |
| :----------- | :---------------------------------------------------------- |
| `object`     | `TObject`                                                   |
| `source1`    | `TSource1`                                                  |
| `source2`    | `TSource2`                                                  |
| `source3`    | `TSource3`                                                  |
| `source4`    | `TSource4`                                                  |
| `customizer` | [`AssignCustomizer`](../modules/lodash.md#assigncustomizer) |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:739

▸ **extendWith**<`TObject`\>(`object`): `TObject`

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `object` | `TObject` |

#### Returns

`TObject`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:743

▸ **extendWith**<`TResult`\>(`object`, `...otherArgs`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type    |
| :------------- | :------ |
| `object`       | `any`   |
| `...otherArgs` | `any`[] |

#### Returns

`TResult`

**`See`**

\_.extendWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:747

---

### fill

▸ **fill**<`T`\>(`array`, `value`): `T`[]

Fills elements of array with value from start up to, but not including, end.

Note: This method mutates array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                             | Description                   |
| :------ | :------------------------------- | :---------------------------- |
| `array` | `undefined` \| `null` \| `any`[] | The array to fill.            |
| `value` | `T`                              | The value to fill array with. |

#### Returns

`T`[]

Returns array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:341

▸ **fill**<`T`\>(`array`, `value`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                 |
| :------ | :------------------------------------------------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`\> |
| `value` | `T`                                                                  |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:345

▸ **fill**<`T`, `U`\>(`array`, `value`, `start?`, `end?`): (`T` \| `U`)[]

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name     | Type                           |
| :------- | :----------------------------- |
| `array`  | `undefined` \| `null` \| `U`[] |
| `value`  | `T`                            |
| `start?` | `number`                       |
| `end?`   | `number`                       |

#### Returns

(`T` \| `U`)[]

**`See`**

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:349

▸ **fill**<`T`, `U`\>(`array`, `value`, `start?`, `end?`): [`List`](../modules/lodash.md#list)<`T`
\| `U`\>

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name     | Type                                                               |
| :------- | :----------------------------------------------------------------- |
| `array`  | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`U`\> |
| `value`  | `T`                                                                |
| `start?` | `number`                                                           |
| `end?`   | `number`                                                           |

#### Returns

[`List`](../modules/lodash.md#list)<`T` \| `U`\>

**`See`**

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:353

---

### filter

▸ **filter**(`collection`, `predicate?`): `string`[]

Iterates over elements of collection, returning an array of all elements predicate returns truthy
for. The predicate is invoked with three arguments: (value, index|key, collection).

#### Parameters

| Name         | Type                                                                | Description                         |
| :----------- | :------------------------------------------------------------------ | :---------------------------------- |
| `collection` | `undefined` \| `null` \| `string`                                   | The collection to iterate over.     |
| `predicate?` | [`StringIterator`](../modules/lodash.md#stringiterator)<`boolean`\> | The function invoked per iteration. |

#### Returns

`string`[]

Returns the new filtered array.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:205

▸ **filter**<`T`, `S`\>(`collection`, `predicate`): `S`[]

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               |
| `predicate`  | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> |

#### Returns

`S`[]

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:209

▸ **filter**<`T`\>(`collection`, `predicate?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

`T`[]

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:213

▸ **filter**<`T`, `S`\>(`collection`, `predicate`): `S`[]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |
| `S`  | `S`              |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate`  | [`ObjectIteratorTypeGuard`](../modules/lodash.md#objectiteratortypeguard)<`T`, `S`\> |

#### Returns

`S`[]

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:217

▸ **filter**<`T`\>(`collection`, `predicate?`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:221

---

### find

▸ **find**<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `undefined` \| `S`

Iterates over elements of collection, returning the first element predicate returns truthy for. The
predicate is invoked with three arguments: (value, index|key, collection).

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

#### Parameters

| Name         | Type                                                                             | Description                         |
| :----------- | :------------------------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | The collection to search.           |
| `predicate`  | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> | The function invoked per iteration. |
| `fromIndex?` | `number`                                                                         | The index to search from.           |

#### Returns

`undefined` \| `S`

Returns the matched element, else undefined.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:291

▸ **find**<`T`\>(`collection`, `predicate?`, `fromIndex?`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

`undefined` \| `T`

**`See`**

\_.find

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:295

▸ **find**<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `undefined` \| `S`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |
| `S`  | `S`              |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate`  | [`ObjectIteratorTypeGuard`](../modules/lodash.md#objectiteratortypeguard)<`T`, `S`\> |
| `fromIndex?` | `number`                                                                             |

#### Returns

`undefined` \| `S`

**`See`**

\_.find

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:299

▸ **find**<`T`\>(`collection`, `predicate?`, `fromIndex?`): `undefined` \| `T`[keyof `T`]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                             |

#### Returns

`undefined` \| `T`[keyof `T`]

**`See`**

\_.find

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:303

---

### findIndex

▸ **findIndex**<`T`\>(`array`, `predicate?`, `fromIndex?`): `number`

This method is like \_.find except that it returns the index of the first element predicate returns
truthy for instead of the element itself.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             | Description                         |
| :----------- | :------------------------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | The array to search.                |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> | The function invoked per iteration. |
| `fromIndex?` | `number`                                                                         | The index to search from.           |

#### Returns

`number`

Returns the index of the found element, else -1.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:377

---

### findKey

▸ **findKey**<`T`\>(`object`, `predicate?`): `undefined` \| `string`

This method is like \_.find except that it returns the key of the first element predicate returns
truthy for instead of the element itself.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                          | Description                         |
| :----------- | :------------------------------------------------------------ | :---------------------------------- |
| `object`     | `undefined` \| `null` \| `T`                                  | The object to search.               |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\> | The function invoked per iteration. |

#### Returns

`undefined` \| `string`

Returns the key of the matched element, else undefined.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:810

---

### findLast

▸ **findLast**<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `undefined` \| `S`

This method is like \_.find except that it iterates over elements of a collection from right to
left.

#### Type parameters

| Name |
| :--- |
| `T`  |
| `S`  |

#### Parameters

| Name         | Type                                                                             | Description                        |
| :----------- | :------------------------------------------------------------------------------- | :--------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | Searches for a value in this list. |
| `predicate`  | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> | The function called per iteration. |
| `fromIndex?` | `number`                                                                         | The index to search from.          |

#### Returns

`undefined` \| `S`

The found element, else undefined.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:354

▸ **findLast**<`T`\>(`collection`, `predicate?`, `fromIndex?`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

`undefined` \| `T`

**`See`**

\_.findLast

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:358

▸ **findLast**<`T`, `S`\>(`collection`, `predicate`, `fromIndex?`): `undefined` \| `S`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |
| `S`  | `S`              |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate`  | [`ObjectIteratorTypeGuard`](../modules/lodash.md#objectiteratortypeguard)<`T`, `S`\> |
| `fromIndex?` | `number`                                                                             |

#### Returns

`undefined` \| `S`

**`See`**

\_.findLast

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:362

▸ **findLast**<`T`\>(`collection`, `predicate?`, `fromIndex?`): `undefined` \| `T`[keyof `T`]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                             |

#### Returns

`undefined` \| `T`[keyof `T`]

**`See`**

\_.findLast

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:366

---

### findLastIndex

▸ **findLastIndex**<`T`\>(`array`, `predicate?`, `fromIndex?`): `number`

This method is like \_.findIndex except that it iterates over elements of collection from right to
left.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             | Description                         |
| :----------- | :------------------------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | The array to search.                |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> | The function invoked per iteration. |
| `fromIndex?` | `number`                                                                         | The index to search from.           |

#### Returns

`number`

Returns the index of the found element, else -1.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:400

---

### findLastKey

▸ **findLastKey**<`T`\>(`object`, `predicate?`): `undefined` \| `string`

This method is like \_.findKey except that it iterates over elements of a collection in the opposite
order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                          | Description                         |
| :----------- | :------------------------------------------------------------ | :---------------------------------- |
| `object`     | `undefined` \| `null` \| `T`                                  | The object to search.               |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\> | The function invoked per iteration. |

#### Returns

`undefined` \| `string`

Returns the key of the matched element, else undefined.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:832

---

### flatMap

▸ **flatMap**<`T`\>(`collection`): `T`[]

Creates an array of flattened values by running each element in collection through iteratee and
concating its result to the other mapped values. The iteratee is invoked with three arguments:
(value, index|key, collection).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                                                                                                        | Description                     |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<[`Many`](../modules/lodash.md#many)<`T`\>\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<[`Many`](../modules/lodash.md#many)<`T`\>\> | The collection to iterate over. |

#### Returns

`T`[]

Returns the new flattened array.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:418

▸ **flatMap**(`collection`): `any`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |

#### Returns

`any`[]

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:422

▸ **flatMap**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                       |
| :----------- | :--------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                         |
| `iteratee`   | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, [`Many`](../modules/lodash.md#many)<`TResult`\>\> |

#### Returns

`TResult`[]

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:426

▸ **flatMap**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name         | Type                                                                                                           |
| :----------- | :------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                                   |
| `iteratee`   | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, [`Many`](../modules/lodash.md#many)<`TResult`\>\> |

#### Returns

`TResult`[]

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:430

▸ **flatMap**(`collection`, `iteratee`): `any`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `string`                          |

#### Returns

`any`[]

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:434

▸ **flatMap**(`collection`, `iteratee`): `boolean`[]

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `iteratee`   | `object`                          |

#### Returns

`boolean`[]

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:438

---

### flatten

▸ **flatten**<`T`\>(`array`): `T`[]

Flattens `array` a single level deep.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                     | Description           |
| :------ | :------------------------------------------------------------------------------------------------------- | :-------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<[`Many`](../modules/lodash.md#many)<`T`\>\> | The array to flatten. |

#### Returns

`T`[]

Returns the new flattened array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:459

---

### flattenDeep

▸ **flattenDeep**<`T`\>(`array`): [`Flat`](../modules/lodash.md#flat)<`T`\>[]

Recursively flattens a nested array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                      | Description                       |
| :------ | :-------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| `array` | `undefined` \| `null` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\> | The array to recursively flatten. |

#### Returns

[`Flat`](../modules/lodash.md#flat)<`T`\>[]

Returns the new flattened array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:501

---

### flattenDepth

▸ **flattenDepth**<`T`\>(`array`, `depth?`): `T`[]

Recursively flatten array up to depth times.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                                                      | Description                       |
| :------- | :-------------------------------------------------------------------------------------------------------- | :-------------------------------- |
| `array`  | `undefined` \| `null` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`T`\> | The array to recursively flatten. |
| `depth?` | `number`                                                                                                  | -                                 |

#### Returns

`T`[]

Returns the new flattened array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:523

---

### floor

▸ **floor**(`n`, `precision?`): `number`

Calculates n rounded down to precision.

#### Parameters

| Name         | Type     | Description                     |
| :----------- | :------- | :------------------------------ |
| `n`          | `number` | The number to round down.       |
| `precision?` | `number` | The precision to round down to. |

#### Returns

`number`

Returns the rounded down number.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:80

---

### flow

▸ **flow**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`,
`f7`): (...`args`: `A`) => `R7`

Creates a function that returns the result of invoking the provided functions with the this binding
of the created function, where each successive invocation is supplied the return value of the
previous.

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |
| `R6` | `R6`            |
| `R7` | `R7`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f5` | (`a`: `R4`) => `R5`      |
| `f6` | (`a`: `R5`) => `R6`      |
| `f7` | (`a`: `R6`) => `R7`      |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `R7`

Creates a function that returns the result of invoking the provided functions with the this binding
of the created function, where each successive invocation is supplied the return value of the
previous.

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R7`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:176

▸ **flow**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`, `f7`,
`...func`): (...`args`: `A`) => `any`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |
| `R6` | `R6`            |
| `R7` | `R7`            |

#### Parameters

| Name      | Type                                                          |
| :-------- | :------------------------------------------------------------ |
| `f1`      | (...`args`: `A`) => `R1`                                      |
| `f2`      | (`a`: `R1`) => `R2`                                           |
| `f3`      | (`a`: `R2`) => `R3`                                           |
| `f4`      | (`a`: `R3`) => `R4`                                           |
| `f5`      | (`a`: `R4`) => `R5`                                           |
| `f6`      | (`a`: `R5`) => `R6`                                           |
| `f7`      | (`a`: `R6`) => `R7`                                           |
| `...func` | [`Many`](../modules/lodash.md#many)<(`a`: `any`) => `any`\>[] |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`any`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:180

▸ **flow**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f1`, `f2`, `f3`, `f4`, `f5`, `f6`):
(...`args`: `A`) => `R6`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |
| `R6` | `R6`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f5` | (`a`: `R4`) => `R5`      |
| `f6` | (`a`: `R5`) => `R6`      |

#### Returns

`fn`

▸ (`...args`): `R6`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R6`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:184

▸ **flow**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f1`, `f2`, `f3`, `f4`, `f5`): (...`args`: `A`) =>
`R5`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f5` | (`a`: `R4`) => `R5`      |

#### Returns

`fn`

▸ (`...args`): `R5`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R5`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:188

▸ **flow**<`A`, `R1`, `R2`, `R3`, `R4`\>(`f1`, `f2`, `f3`, `f4`): (...`args`: `A`) => `R4`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f4` | (`a`: `R3`) => `R4`      |

#### Returns

`fn`

▸ (`...args`): `R4`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R4`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:192

▸ **flow**<`A`, `R1`, `R2`, `R3`\>(`f1`, `f2`, `f3`): (...`args`: `A`) => `R3`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |
| `f3` | (`a`: `R2`) => `R3`      |

#### Returns

`fn`

▸ (`...args`): `R3`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R3`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:196

▸ **flow**<`A`, `R1`, `R2`\>(`f1`, `f2`): (...`args`: `A`) => `R2`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f1` | (...`args`: `A`) => `R1` |
| `f2` | (`a`: `R1`) => `R2`      |

#### Returns

`fn`

▸ (`...args`): `R2`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R2`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:200

▸ **flow**(`...func`): (...`args`: `any`[]) => `any`

#### Parameters

| Name      | Type                                                                  |
| :-------- | :-------------------------------------------------------------------- |
| `...func` | [`Many`](../modules/lodash.md#many)<(...`args`: `any`[]) => `any`\>[] |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

**`See`**

\_.flow

**`See`**

\_.flow

#### Defined in

node_modules/@types/lodash/common/util.d.ts:204

---

### flowRight

▸ **flowRight**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f7`, `f6`, `f5`, `f4`, `f3`, `f2`,
`f1`): (...`args`: `A`) => `R7`

This method is like \_.flow except that it creates a function that invokes the provided functions
from right to left.

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |
| `R6` | `R6`            |
| `R7` | `R7`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f7` | (`a`: `R6`) => `R7`      |
| `f6` | (`a`: `R5`) => `R6`      |
| `f5` | (`a`: `R4`) => `R5`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `R7`

This method is like \_.flow except that it creates a function that invokes the provided functions
from right to left.

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R7`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:283

▸ **flowRight**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`, `R6`\>(`f6`, `f5`, `f4`, `f3`, `f2`, `f1`):
(...`args`: `A`) => `R6`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |
| `R6` | `R6`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f6` | (`a`: `R5`) => `R6`      |
| `f5` | (`a`: `R4`) => `R5`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

▸ (`...args`): `R6`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R6`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:287

▸ **flowRight**<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f5`, `f4`, `f3`, `f2`, `f1`): (...`args`: `A`)
=> `R5`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |
| `R5` | `R5`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f5` | (`a`: `R4`) => `R5`      |
| `f4` | (`a`: `R3`) => `R4`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

▸ (`...args`): `R5`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R5`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:291

▸ **flowRight**<`A`, `R1`, `R2`, `R3`, `R4`\>(`f4`, `f3`, `f2`, `f1`): (...`args`: `A`) => `R4`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |
| `R4` | `R4`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f4` | (`a`: `R3`) => `R4`      |
| `f3` | (`a`: `R2`) => `R3`      |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

▸ (`...args`): `R4`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R4`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:295

▸ **flowRight**<`A`, `R1`, `R2`, `R3`\>(`f3`, `f2`, `f1`): (...`args`: `A`) => `R3`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |
| `R3` | `R3`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f3` | (`a`: `R2`) => `R3`      |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

▸ (`...args`): `R3`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R3`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:299

▸ **flowRight**<`A`, `R1`, `R2`\>(`f2`, `f1`): (...`args`: `A`) => `R2`

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `A`  | extends `any`[] |
| `R1` | `R1`            |
| `R2` | `R2`            |

#### Parameters

| Name | Type                     |
| :--- | :----------------------- |
| `f2` | (`a`: `R1`) => `R2`      |
| `f1` | (...`args`: `A`) => `R1` |

#### Returns

`fn`

▸ (`...args`): `R2`

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `A`  |

##### Returns

`R2`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:303

▸ **flowRight**(`...func`): (...`args`: `any`[]) => `any`

#### Parameters

| Name      | Type                                                                  |
| :-------- | :-------------------------------------------------------------------- |
| `...func` | [`Many`](../modules/lodash.md#many)<(...`args`: `any`[]) => `any`\>[] |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

**`See`**

\_.flowRight

**`See`**

\_.flowRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:307

---

### forEach

▸ **forEach**<`T`\>(`collection`, `iteratee?`): `T`[]

Iterates over elements of collection invoking iteratee for each element. The iteratee is invoked
with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by
explicitly returning false.

Note: As with other "Collections" methods, objects with a "length" property are iterated like
arrays. To avoid this behavior _.forIn or _.forOwn may be used for object iteration.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `collection` | `T`[]                                                              | The collection to iterate over.     |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> | The function invoked per iteration. |

#### Returns

`T`[]

**`Alias`**

\_.each

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:786

▸ **forEach**(`collection`, `iteratee?`): `string`

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `string`                                                        |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

#### Returns

`string`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:790

▸ **forEach**<`T`\>(`collection`, `iteratee?`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | [`List`](../modules/lodash.md#list)<`T`\>                        |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:794

▸ **forEach**<`T`\>(`collection`, `iteratee?`): `T`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `T`                                                                  |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`T`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:798

▸ **forEach**<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

#### Type parameters

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `T`      | `T`                                    |
| `TArray` | extends `undefined` \| `null` \| `T`[] |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `Object`                                                           |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

#### Returns

`TArray`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:802

▸ **forEach**<`TString`\>(`collection`, `iteratee?`): `TString`

#### Type parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `TString` | extends `undefined` \| `null` \| `string` |

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `TString`                                                       |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

#### Returns

`TString`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:806

▸ **forEach**<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

#### Type parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `T`     | `T`                                                                        |
| `TList` | extends `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | `Object`                                                         |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

`TList`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:810

▸ **forEach**<`T`\>(`collection`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                         |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:814

---

### forEachRight

▸ **forEachRight**<`T`\>(`collection`, `iteratee?`): `T`[]

This method is like \_.forEach except that it iterates over elements of collection from right to
left.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                        |
| :----------- | :----------------------------------------------------------------- | :--------------------------------- |
| `collection` | `T`[]                                                              | The collection to iterate over.    |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> | The function called per iteration. |

#### Returns

`T`[]

**`Alias`**

\_.eachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:867

▸ **forEachRight**(`collection`, `iteratee?`): `string`

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `string`                                                        |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

#### Returns

`string`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:871

▸ **forEachRight**<`T`\>(`collection`, `iteratee?`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | [`List`](../modules/lodash.md#list)<`T`\>                        |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:875

▸ **forEachRight**<`T`\>(`collection`, `iteratee?`): `T`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `T`                                                                  |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`T`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:879

▸ **forEachRight**<`T`, `TArray`\>(`collection`, `iteratee?`): `TArray`

#### Type parameters

| Name     | Type                                   |
| :------- | :------------------------------------- |
| `T`      | `T`                                    |
| `TArray` | extends `undefined` \| `null` \| `T`[] |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `Object`                                                           |
| `iteratee?`  | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `any`\> |

#### Returns

`TArray`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:883

▸ **forEachRight**<`TString`\>(`collection`, `iteratee?`): `TString`

#### Type parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `TString` | extends `undefined` \| `null` \| `string` |

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `collection` | `TString`                                                       |
| `iteratee?`  | [`StringIterator`](../modules/lodash.md#stringiterator)<`any`\> |

#### Returns

`TString`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:887

▸ **forEachRight**<`T`, `TList`\>(`collection`, `iteratee?`): `TList`

#### Type parameters

| Name    | Type                                                                       |
| :------ | :------------------------------------------------------------------------- |
| `T`     | `T`                                                                        |
| `TList` | extends `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |

#### Parameters

| Name         | Type                                                             |
| :----------- | :--------------------------------------------------------------- |
| `collection` | `Object`                                                         |
| `iteratee?`  | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

`TList`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:891

▸ **forEachRight**<`T`\>(`collection`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                         |
| `iteratee?`  | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:895

---

### forIn

▸ **forIn**<`T`\>(`object`, `iteratee?`): `T`

Iterates over own and inherited enumerable properties of an object invoking iteratee for each
property. The iteratee is invoked with three arguments: (value, key, object). Iteratee functions may
exit iteration early by explicitly returning false.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 | Description                         |
| :---------- | :------------------------------------------------------------------- | :---------------------------------- |
| `object`    | `T`                                                                  | The object to iterate over.         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> | The function invoked per iteration. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:856

▸ **forIn**<`T`\>(`object`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T`                                         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:860

---

### forInRight

▸ **forInRight**<`T`\>(`object`, `iteratee?`): `T`

This method is like \_.forIn except that it iterates over properties of object in the opposite
order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 | Description                         |
| :---------- | :------------------------------------------------------------------- | :---------------------------------- |
| `object`    | `T`                                                                  | The object to iterate over.         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> | The function invoked per iteration. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:882

▸ **forInRight**<`T`\>(`object`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T`                                         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forInRight

#### Defined in

node_modules/@types/lodash/common/object.d.ts:886

---

### forOwn

▸ **forOwn**<`T`\>(`object`, `iteratee?`): `T`

Iterates over own enumerable properties of an object invoking iteratee for each property. The
iteratee is invoked with three arguments: (value, key, object). Iteratee functions may exit
iteration early by explicitly returning false.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 | Description                         |
| :---------- | :------------------------------------------------------------------- | :---------------------------------- |
| `object`    | `T`                                                                  | The object to iterate over.         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> | The function invoked per iteration. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:910

▸ **forOwn**<`T`\>(`object`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T`                                         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forOwn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:914

---

### forOwnRight

▸ **forOwnRight**<`T`\>(`object`, `iteratee?`): `T`

This method is like \_.forOwn except that it iterates over properties of object in the opposite
order.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 | Description                         |
| :---------- | :------------------------------------------------------------------- | :---------------------------------- |
| `object`    | `T`                                                                  | The object to iterate over.         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> | The function invoked per iteration. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:936

▸ **forOwnRight**<`T`\>(`object`, `iteratee?`): `undefined` \| `null` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `object`    | `undefined` \| `null` \| `T`                                         |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

`undefined` \| `null` \| `T`

**`See`**

\_.forOwnRight

#### Defined in

node_modules/@types/lodash/common/object.d.ts:940

---

### get

▸ **get**<`TObject`, `TKey`\>(`object`, `path`): `TObject`[`TKey`]

Gets the property value at path of object. If the resolved value is undefined the defaultValue is
used in its place.

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey`    | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type               | Description                      |
| :------- | :----------------- | :------------------------------- |
| `object` | `TObject`          | The object to query.             |
| `path`   | `TKey` \| [`TKey`] | The path of the property to get. |

#### Returns

`TObject`[`TKey`]

Returns the resolved value.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1069

▸ **get**<`TObject`, `TKey`\>(`object`, `path`): `undefined` \| `TObject`[`TKey`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey`    | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                               |
| :------- | :--------------------------------- |
| `object` | `undefined` \| `null` \| `TObject` |
| `path`   | `TKey` \| [`TKey`]                 |

#### Returns

`undefined` \| `TObject`[`TKey`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1073

▸ **get**<`TObject`, `TKey`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault` \|
`Exclude`<`TObject`[`TKey`], `undefined`\>

#### Type parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `TObject`  | extends `object`                         |
| `TKey`     | extends `string` \| `number` \| `symbol` |
| `TDefault` | `TDefault`                               |

#### Parameters

| Name           | Type                               |
| :------------- | :--------------------------------- |
| `object`       | `undefined` \| `null` \| `TObject` |
| `path`         | `TKey` \| [`TKey`]                 |
| `defaultValue` | `TDefault`                         |

#### Returns

`TDefault` \| `Exclude`<`TObject`[`TKey`], `undefined`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1077

▸ **get**<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`): `TObject`[`TKey1`][`TKey2`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type               |
| :------- | :----------------- |
| `object` | `TObject`          |
| `path`   | [`TKey1`, `TKey2`] |

#### Returns

`TObject`[`TKey1`][`TKey2`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1081

▸ **get**<`TObject`, `TKey1`, `TKey2`\>(`object`, `path`): `undefined` \|
`TObject`[`TKey1`][`TKey2`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                               |
| :------- | :--------------------------------- |
| `object` | `undefined` \| `null` \| `TObject` |
| `path`   | [`TKey1`, `TKey2`]                 |

#### Returns

`undefined` \| `TObject`[`TKey1`][`TKey2`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1085

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TDefault`\>(`object`, `path`, `defaultValue`): `TDefault` \|
`Exclude`<`TObject`[`TKey1`][`TKey2`], `undefined`\>

#### Type parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `TObject`  | extends `object`                         |
| `TKey1`    | extends `string` \| `number` \| `symbol` |
| `TKey2`    | extends `string` \| `number` \| `symbol` |
| `TDefault` | `TDefault`                               |

#### Parameters

| Name           | Type                               |
| :------------- | :--------------------------------- |
| `object`       | `undefined` \| `null` \| `TObject` |
| `path`         | [`TKey1`, `TKey2`]                 |
| `defaultValue` | `TDefault`                         |

#### Returns

`TDefault` \| `Exclude`<`TObject`[`TKey1`][`TKey2`], `undefined`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1089

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`):
`TObject`[`TKey1`][`TKey2`][`TKey3`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |
| `TKey3`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                        |
| :------- | :-------------------------- |
| `object` | `TObject`                   |
| `path`   | [`TKey1`, `TKey2`, `TKey3`] |

#### Returns

`TObject`[`TKey1`][`TKey2`][`TKey3`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1093

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`\>(`object`, `path`): `undefined` \|
`TObject`[`TKey1`][`TKey2`][`TKey3`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |
| `TKey3`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                               |
| :------- | :--------------------------------- |
| `object` | `undefined` \| `null` \| `TObject` |
| `path`   | [`TKey1`, `TKey2`, `TKey3`]        |

#### Returns

`undefined` \| `TObject`[`TKey1`][`TKey2`][`TKey3`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1097

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`object`, `path`, `defaultValue`):
`TDefault` \| `Exclude`<`TObject`[`TKey1`][`TKey2`][`TKey3`], `undefined`\>

#### Type parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `TObject`  | extends `object`                         |
| `TKey1`    | extends `string` \| `number` \| `symbol` |
| `TKey2`    | extends `string` \| `number` \| `symbol` |
| `TKey3`    | extends `string` \| `number` \| `symbol` |
| `TDefault` | `TDefault`                               |

#### Parameters

| Name           | Type                               |
| :------------- | :--------------------------------- |
| `object`       | `undefined` \| `null` \| `TObject` |
| `path`         | [`TKey1`, `TKey2`, `TKey3`]        |
| `defaultValue` | `TDefault`                         |

#### Returns

`TDefault` \| `Exclude`<`TObject`[`TKey1`][`TKey2`][`TKey3`], `undefined`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1101

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`):
`TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |
| `TKey3`   | extends `string` \| `number` \| `symbol` |
| `TKey4`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                                 |
| :------- | :----------------------------------- |
| `object` | `TObject`                            |
| `path`   | [`TKey1`, `TKey2`, `TKey3`, `TKey4`] |

#### Returns

`TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1105

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`object`, `path`): `undefined` \|
`TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`]

#### Type parameters

| Name      | Type                                     |
| :-------- | :--------------------------------------- |
| `TObject` | extends `object`                         |
| `TKey1`   | extends `string` \| `number` \| `symbol` |
| `TKey2`   | extends `string` \| `number` \| `symbol` |
| `TKey3`   | extends `string` \| `number` \| `symbol` |
| `TKey4`   | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name     | Type                                 |
| :------- | :----------------------------------- |
| `object` | `undefined` \| `null` \| `TObject`   |
| `path`   | [`TKey1`, `TKey2`, `TKey3`, `TKey4`] |

#### Returns

`undefined` \| `TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`]

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1109

▸ **get**<`TObject`, `TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`object`, `path`,
`defaultValue`): `TDefault` \| `Exclude`<`TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`],
`undefined`\>

#### Type parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `TObject`  | extends `object`                         |
| `TKey1`    | extends `string` \| `number` \| `symbol` |
| `TKey2`    | extends `string` \| `number` \| `symbol` |
| `TKey3`    | extends `string` \| `number` \| `symbol` |
| `TKey4`    | extends `string` \| `number` \| `symbol` |
| `TDefault` | `TDefault`                               |

#### Parameters

| Name           | Type                                 |
| :------------- | :----------------------------------- |
| `object`       | `undefined` \| `null` \| `TObject`   |
| `path`         | [`TKey1`, `TKey2`, `TKey3`, `TKey4`] |
| `defaultValue` | `TDefault`                           |

#### Returns

`TDefault` \| `Exclude`<`TObject`[`TKey1`][`TKey2`][`TKey3`][`TKey4`], `undefined`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1113

▸ **get**<`T`\>(`object`, `path`): `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                     |
| :------- | :------------------------------------------------------- |
| `object` | [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `path`   | `number`                                                 |

#### Returns

`T`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1117

▸ **get**<`T`\>(`object`, `path`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                              |
| :------- | :-------------------------------------------------------------------------------- |
| `object` | `undefined` \| `null` \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `path`   | `number`                                                                          |

#### Returns

`undefined` \| `T`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1121

▸ **get**<`T`, `TDefault`\>(`object`, `path`, `defaultValue`): `T` \| `TDefault`

#### Type parameters

| Name       |
| :--------- |
| `T`        |
| `TDefault` |

#### Parameters

| Name           | Type                                                                              |
| :------------- | :-------------------------------------------------------------------------------- |
| `object`       | `undefined` \| `null` \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `path`         | `number`                                                                          |
| `defaultValue` | `TDefault`                                                                        |

#### Returns

`T` \| `TDefault`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1125

▸ **get**<`TDefault`\>(`object`, `path`, `defaultValue`): `TDefault`

#### Type parameters

| Name       |
| :--------- |
| `TDefault` |

#### Parameters

| Name           | Type                                                |
| :------------- | :-------------------------------------------------- |
| `object`       | `undefined` \| `null`                               |
| `path`         | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `defaultValue` | `TDefault`                                          |

#### Returns

`TDefault`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1129

▸ **get**(`object`, `path`): `undefined`

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `object` | `undefined` \| `null`                               |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

`undefined`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1133

▸ **get**<`TObject`, `TPath`\>(`data`, `path`): `string` extends `TPath` ? `any` :
[`GetFieldType`](../modules/lodash.md#getfieldtype)<`TObject`, `TPath`\>

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `TObject` | `TObject`        |
| `TPath`   | extends `string` |

#### Parameters

| Name   | Type      |
| :----- | :-------- |
| `data` | `TObject` |
| `path` | `TPath`   |

#### Returns

`string` extends `TPath` ? `any` : [`GetFieldType`](../modules/lodash.md#getfieldtype)<`TObject`,
`TPath`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1137

▸ **get**<`TObject`, `TPath`, `TDefault`\>(`data`, `path`, `defaultValue`): `TDefault` \|
`Exclude`<[`GetFieldType`](../modules/lodash.md#getfieldtype)<`TObject`, `TPath`\>, `undefined` \|
`null`\>

#### Type parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `TObject`  | `TObject`                                                                |
| `TPath`    | extends `string`                                                         |
| `TDefault` | [`GetFieldType`](../modules/lodash.md#getfieldtype)<`TObject`, `TPath`\> |

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `data`         | `TObject`  |
| `path`         | `TPath`    |
| `defaultValue` | `TDefault` |

#### Returns

`TDefault` \| `Exclude`<[`GetFieldType`](../modules/lodash.md#getfieldtype)<`TObject`, `TPath`\>,
`undefined` \| `null`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1141

▸ **get**(`object`, `path`, `defaultValue?`): `any`

#### Parameters

| Name            | Type                                                |
| :-------------- | :-------------------------------------------------- |
| `object`        | `any`                                               |
| `path`          | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `defaultValue?` | `any`                                               |

#### Returns

`any`

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1145

---

### groupBy

▸ **groupBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`[]\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is an array of the elements responsible for
generating the key. The iteratee is invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The collection to iterate over.     |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The function invoked per iteration. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`[]\>

Returns the composed aggregate object.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:949

▸ **groupBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`[keyof
`T`][]\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                           |
| `iteratee?`  | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`[keyof `T`]\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`[keyof `T`][]\>

**`See`**

\_.groupBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:953

---

### gt

▸ **gt**(`value`, `other`): `boolean`

Checks if value is greater than other.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns true if value is greater than other, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:277

---

### gte

▸ **gte**(`value`, `other`): `boolean`

Checks if value is greater than or equal to other.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns true if value is greater than or equal to other, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:300

---

### head

▸ **head**<`T`\>(`array`): `undefined` \| `T`

Gets the first element of array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description         |
| :------ | :----------------------------------------------------------------- | :------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query. |

#### Returns

`undefined` \| `T`

Returns the first element of array.

**`Alias`**

\_.first

#### Defined in

node_modules/@types/lodash/common/array.d.ts:577

---

### identity

▸ **identity**<`T`\>(`value`): `T`

This method returns the first argument provided to it.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type | Description |
| :------ | :--- | :---------- |
| `value` | `T`  | Any value.  |

#### Returns

`T`

Returns value.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:377

▸ **identity**(): `undefined`

#### Returns

`undefined`

**`See`**

\_.identity

#### Defined in

node_modules/@types/lodash/common/util.d.ts:381

---

### inRange

▸ **inRange**(`n`, `start`, `end?`): `boolean`

Checks if n is between start and up to but not including, end. If end is not specified it’s set to
start with start then set to 0.

#### Parameters

| Name    | Type     | Description             |
| :------ | :------- | :---------------------- |
| `n`     | `number` | The number to check.    |
| `start` | `number` | The start of the range. |
| `end?`  | `number` | The end of the range.   |

#### Returns

`boolean`

Returns true if n is in the range, else false.

#### Defined in

node_modules/@types/lodash/common/number.d.ts:71

---

### includes

▸ **includes**<`T`\>(`collection`, `target`, `fromIndex?`): `boolean`

Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is
negative, it’s used as the offset from the end of collection.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            | Description               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The collection to search. |
| `target`     | `T`                                                                                                                             | The value to search for.  |
| `fromIndex?` | `number`                                                                                                                        | The index to search from. |

#### Returns

`boolean`

True if the target element is found, else false.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1007

---

### initial

▸ **initial**<`T`\>(`array`): `T`[]

Gets all but the last element of array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description         |
| :------ | :----------------------------------------------------------------- | :------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:651

---

### intersection

▸ **intersection**<`T`\>(`...arrays`): `T`[]

Creates an array of unique values that are included in all of the provided arrays using
SameValueZero for equality comparisons.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                   | Description            |
| :---------- | :--------------------------------------------------------------------- | :--------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] | The arrays to inspect. |

#### Returns

`T`[]

Returns the new array of shared values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:673

---

### invert

▸ **invert**(`object`): [`Dictionary`](lodash.Dictionary.md)<`string`\>

Creates an object composed of the inverted keys and values of object. If object contains duplicate
values, subsequent values overwrite property assignments of previous values unless multiValue is
true.

#### Parameters

| Name     | Type     | Description           |
| :------- | :------- | :-------------------- |
| `object` | `object` | The object to invert. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`string`\>

Returns the new inverted object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1391

---

### invertBy

▸ **invertBy**<`T`\>(`object`, `interatee?`): [`Dictionary`](lodash.Dictionary.md)<`string`[]\>

This method is like \_.invert except that the inverted object is generated from the results of
running each element of object through iteratee. The corresponding inverted value of each inverted
key is an array of keys responsible for generating the inverted value. The iteratee is invoked with
one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            | Description                       |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------- |
| `object`     | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The object to invert.             |
| `interatee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>                                                                     | The iteratee invoked per element. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`string`[]\>

Returns the new inverted object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1415

▸ **invertBy**<`T`\>(`object`, `interatee?`): [`Dictionary`](lodash.Dictionary.md)<`string`[]\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `object`     | `undefined` \| `null` \| `T`                                           |
| `interatee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`[keyof `T`]\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`string`[]\>

**`See`**

\_.invertBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1419

---

### invoke

▸ **invoke**(`object`, `path`, `...args`): `any`

Invokes the method at path of object.

#### Parameters

| Name      | Type                                                | Description                              |
| :-------- | :-------------------------------------------------- | :--------------------------------------- |
| `object`  | `any`                                               | The object to query.                     |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the method to invoke.        |
| `...args` | `any`[]                                             | The arguments to invoke the method with. |

#### Returns

`any`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1470

---

### invokeMap

▸ **invokeMap**(`collection`, `methodName`, `...args`): `any`[]

Invokes the method named by methodName on each element in the collection returning an array of the
results of each invoked method. Additional arguments will be provided to each invoked method. If
methodName is a function it will be invoked for, and this bound to, each element in the collection.

#### Parameters

| Name         | Type                              | Description                          |
| :----------- | :-------------------------------- | :----------------------------------- |
| `collection` | `undefined` \| `null` \| `object` | The collection to iterate over.      |
| `methodName` | `string`                          | The name of the method to invoke.    |
| `...args`    | `any`[]                           | Arguments to invoke the method with. |

#### Returns

`any`[]

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1055

▸ **invokeMap**<`TResult`\>(`collection`, `method`, `...args`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name         | Type                              |
| :----------- | :-------------------------------- |
| `collection` | `undefined` \| `null` \| `object` |
| `method`     | (...`args`: `any`[]) => `TResult` |
| `...args`    | `any`[]                           |

#### Returns

`TResult`[]

**`See`**

\_.invokeMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1059

---

### isArguments

▸ **isArguments**(`value?`): value is IArguments

Checks if value is classified as an arguments object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is IArguments

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:322

---

### isArray

▸ **isArray**(`value?`): value is any[]

Checks if value is classified as an Array object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is any[]

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:344

▸ **isArray**<`T`\>(`value?`): value is any[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `value?` | `any` |

#### Returns

value is any[]

**`See`**

\_.isArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:348

---

### isArrayBuffer

▸ **isArrayBuffer**(`value?`): value is ArrayBuffer

Checks if value is classified as an ArrayBuffer object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is ArrayBuffer

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:370

---

### isBoolean

▸ **isBoolean**(`value?`): value is boolean

Checks if value is classified as a boolean primitive or object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is boolean

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:483

---

### isBuffer

▸ **isBuffer**(`value?`): `boolean`

Checks if value is a buffer.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is a buffer, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:505

---

### isDate

▸ **isDate**(`value?`): value is Date

Checks if value is classified as a Date object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is Date

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:527

---

### isElement

▸ **isElement**(`value?`): `boolean`

Checks if value is a DOM element.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is a DOM element, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:549

---

### isEmpty

▸ **isEmpty**<`T`\>(`value?`): `boolean`

Checks if value is empty. A value is considered empty unless it’s an arguments object, array,
string, or jQuery-like collection with a length greater than 0 or an object with own enumerable
properties.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name     | Type | Description           |
| :------- | :--- | :-------------------- |
| `value?` | `T`  | The value to inspect. |

#### Returns

`boolean`

Returns true if value is empty, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:574

▸ **isEmpty**(`value`): value is ""

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `string` |

#### Returns

value is ""

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:575

▸ **isEmpty**(`value`): `boolean`

#### Parameters

| Name    | Type                                                                                                          |
| :------ | :------------------------------------------------------------------------------------------------------------ |
| `value` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`\> \| `Map`<`any`, `any`\> \| `Set`<`any`\> |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:576

▸ **isEmpty**(`value`): `boolean`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `value` | `object` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:577

▸ **isEmpty**<`T`\>(`value`): value is undefined \| null \| EmptyObjectOf<T\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `value` | `undefined` \| `null` \| `T` |

#### Returns

value is undefined \| null \| EmptyObjectOf<T\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:578

▸ **isEmpty**(`value?`): `boolean`

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `value?` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:579

---

### isError

▸ **isError**(`value`): value is Error

Checks if value is an Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, or
URIError object.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is Error

Returns true if value is an error object, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:689

---

### isFinite

▸ **isFinite**(`value?`): `boolean`

Checks if value is a finite primitive number.

Note: This method is based on Number.isFinite.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is a finite number, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:713

---

### isFunction

▸ **isFunction**(`value`): value is Function

Checks if value is a callable function.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is Function

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:735

---

### isMap

▸ **isMap**(`value?`): value is Map<any, any\>

Checks if value is classified as a Map object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is Map<any, any\>

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:833

---

### isNaN

▸ **isNaN**(`value?`): `boolean`

Checks if value is NaN.

Note: This method is not the same as isNaN which returns true for undefined and other non-numeric
values.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is NaN, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:939

---

### isNative

▸ **isNative**(`value`): value is Function

Checks if value is a native function.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is Function

Returns true if value is a native function, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:961

---

### isNull

▸ **isNull**(`value`): value is null

Checks if value is null.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is null

Returns true if value is null, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1016

---

### isNumber

▸ **isNumber**(`value?`): value is number

Checks if value is classified as a Number primitive or object.

Note: To exclude Infinity, -Infinity, and NaN, which are classified as numbers, use the \_.isFinite
method.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is number

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1040

---

### isObject

▸ **isObject**(`value?`): value is object

Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new
Number(0), and new String(''))

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is object

Returns true if value is an object, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1063

---

### isPlainObject

▸ **isPlainObject**(`value?`): `boolean`

Checks if value is a plain object, that is, an object created by the Object constructor or one with
a [[Prototype]] of null.

Note: This method assumes objects created by the Object constructor have no inherited enumerable
properties.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is a plain object, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1125

---

### isRegExp

▸ **isRegExp**(`value?`): value is RegExp

Checks if value is classified as a RegExp object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is RegExp

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1147

---

### isSet

▸ **isSet**(`value?`): value is Set<any\>

Checks if value is classified as a Set object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is Set<any\>

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1208

---

### isString

▸ **isString**(`value?`): value is string

Checks if value is classified as a String primitive or object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is string

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1230

---

### isTypedArray

▸ **isTypedArray**(`value`): `boolean`

Checks if value is classified as a typed array.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

`boolean`

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1282

---

### isUndefined

▸ **isUndefined**(`value`): value is undefined

Checks if value is undefined.

#### Parameters

| Name    | Type  | Description         |
| :------ | :---- | :------------------ |
| `value` | `any` | The value to check. |

#### Returns

value is undefined

Returns true if value is undefined, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1304

---

### isWeakMap

▸ **isWeakMap**(`value?`): value is WeakMap<object, any\>

Checks if value is classified as a WeakMap object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is WeakMap<object, any\>

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1326

---

### isWeakSet

▸ **isWeakSet**(`value?`): value is WeakSet<object\>

Checks if value is classified as a WeakSet object.

#### Parameters

| Name     | Type  | Description         |
| :------- | :---- | :------------------ |
| `value?` | `any` | The value to check. |

#### Returns

value is WeakSet<object\>

Returns true if value is correctly classified, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1348

---

### join

▸ **join**(`array`, `separator?`): `string`

Converts all elements in `array` into a string separated by `separator`.

#### Parameters

| Name         | Type                                                                 | Description            |
| :----------- | :------------------------------------------------------------------- | :--------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`any`\> | The array to convert.  |
| `separator?` | `string`                                                             | The element separator. |

#### Returns

`string`

Returns the joined string.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:804

---

### kebabCase

▸ **kebabCase**(`string?`): `string`

Converts string to kebab case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the kebab cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:157

---

### keyBy

▸ **keyBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

Creates an object composed of keys generated from the results of running each element of collection
through iteratee. The corresponding value of each key is the last element responsible for generating
the key. The iteratee function is invoked with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                         | Description                         |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                           | The collection to iterate over.     |
| `iteratee?`  | [`ValueIterateeCustom`](../modules/lodash.md#valueiterateecustom)<`T`, [`PropertyName`](../modules/lodash.md#propertyname)\> | The function invoked per iteration. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

Returns the composed aggregate object.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1091

▸ **keyBy**<`T`\>(`collection`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`[keyof `T`]\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                                                                    |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                                                            |
| `iteratee?`  | [`ValueIterateeCustom`](../modules/lodash.md#valueiterateecustom)<`T`[keyof `T`], [`PropertyName`](../modules/lodash.md#propertyname)\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`[keyof `T`]\>

**`See`**

\_.keyBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1095

---

### keys

▸ **keys**(`object?`): `string`[]

Creates an array of the own enumerable property names of object.

Note: Non-object values are coerced to objects. See the ES spec for more details.

#### Parameters

| Name      | Type  | Description          |
| :-------- | :---- | :------------------- |
| `object?` | `any` | The object to query. |

#### Returns

`string`[]

Returns the array of property names.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1493

---

### keysIn

▸ **keysIn**(`object?`): `string`[]

Creates an array of the own and inherited enumerable property names of object.

Note: Non-object values are coerced to objects.

#### Parameters

| Name      | Type  | Description          |
| :-------- | :---- | :------------------- |
| `object?` | `any` | The object to query. |

#### Returns

`string`[]

An array of property names.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1516

---

### last

▸ **last**<`T`\>(`array`): `undefined` \| `T`

Gets the last element of array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description         |
| :------ | :----------------------------------------------------------------- | :------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query. |

#### Returns

`undefined` \| `T`

Returns the last element of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:843

---

### lastIndexOf

▸ **lastIndexOf**<`T`\>(`array`, `value`, `fromIndex?`): `number`

This method is like \_.indexOf except that it iterates over elements of array from right to left.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                                                                    |
| :----------- | :----------------------------------------------------------------- | :----------------------------------------------------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to search.                                                           |
| `value`      | `T`                                                                | The value to search for.                                                       |
| `fromIndex?` | `number` \| `true`                                                 | The index to search from or true to perform a binary search on a sorted array. |

#### Returns

`number`

Returns the index of the matched value, else -1.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:884

---

### lowerCase

▸ **lowerCase**(`string?`): `string`

Converts `string`, as space separated words, to lower case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the lower cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:179

---

### lowerFirst

▸ **lowerFirst**(`string?`): `string`

Converts the first character of `string` to lower case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the converted string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:201

---

### lt

▸ **lt**(`value`, `other`): `boolean`

Checks if value is less than other.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns true if value is less than other, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1371

---

### lte

▸ **lte**(`value`, `other`): `boolean`

Checks if value is less than or equal to other.

#### Parameters

| Name    | Type  | Description                 |
| :------ | :---- | :-------------------------- |
| `value` | `any` | The value to compare.       |
| `other` | `any` | The other value to compare. |

#### Returns

`boolean`

Returns true if value is less than or equal to other, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1394

---

### map

▸ **map**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

Creates an array of values by running each element in collection through iteratee. The iteratee is
invoked with three arguments: (value, index|key, collection).

Many lodash methods are guarded to work as iteratees for methods like _.every, _.filter, _.map,
_.mapValues, _.reject, and _.some.

The guarded methods are: ary, callback, chunk, clone, create, curry, curryRight, drop, dropRight,
every, fill, flatten, invert, max, min, parseInt, slice, sortBy, take, takeRight, template, trim,
trimLeft, trimRight, trunc, random, range, sample, some, sum, uniq, and words

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                   | Description                         |
| :----------- | :--------------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| `T`[]                                         | The collection to iterate over.     |
| `iteratee`   | [`ArrayIterator`](../modules/lodash.md#arrayiterator)<`T`, `TResult`\> | The function invoked per iteration. |

#### Returns

`TResult`[]

Returns the new mapped array.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1156

▸ **map**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name         | Type                                                                 |
| :----------- | :------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>   |
| `iteratee`   | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult`\> |

#### Returns

`TResult`[]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1160

▸ **map**<`T`\>(`collection`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |

#### Returns

`T`[]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1164

▸ **map**<`T`, `TResult`\>(`collection`, `iteratee`): `TResult`[]

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name         | Type                                                                     |
| :----------- | :----------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                             |
| `iteratee`   | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `TResult`\> |

#### Returns

`TResult`[]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1168

▸ **map**<`T`, `K`\>(`collection`, `iteratee`): `T`[`K`][]

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `T`  | `T`                                      |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name         | Type                                                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee`   | `K`                                                                                                                             |

#### Returns

`T`[`K`][]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1172

▸ **map**<`T`\>(`collection`, `iteratee?`): `any`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee?`  | `string`                                                                                                                        |

#### Returns

`any`[]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1176

▸ **map**<`T`\>(`collection`, `iteratee?`): `boolean`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee?`  | `object`                                                                                                                        |

#### Returns

`boolean`[]

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1180

---

### mapKeys

▸ **mapKeys**<`T`\>(`object`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

The opposite of \_.mapValues; this method creates an object with the same values as object and keys
generated by running each own enumerable property of object through iteratee.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                         |
| :---------- | :----------------------------------------------------------------- | :---------------------------------- |
| `object`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The object to iterate over.         |
| `iteratee?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>          | The function invoked per iteration. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

Returns the new mapped object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1539

▸ **mapKeys**<`T`\>(`object`, `iteratee?`): [`Dictionary`](lodash.Dictionary.md)<`T`[keyof `T`]\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name        | Type                                                          |
| :---------- | :------------------------------------------------------------ |
| `object`    | `undefined` \| `null` \| `T`                                  |
| `iteratee?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`[keyof `T`]\>

**`See`**

\_.mapKeys

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1543

---

### mapValues

▸ **mapValues**<`TResult`\>(`obj`, `callback`):
[`NumericDictionary`](lodash.NumericDictionary.md)<`TResult`\>

Creates an object with the same keys as object and values generated by running each own enumerable
property of object through iteratee. The iteratee function is invoked with three arguments: (value,
key, object).

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `obj`      | `undefined` \| `null` \| `string`                                   |
| `callback` | [`StringIterator`](../modules/lodash.md#stringiterator)<`TResult`\> |

#### Returns

[`NumericDictionary`](lodash.NumericDictionary.md)<`TResult`\>

Returns the new mapped object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1579

▸ **mapValues**<`T`, `TResult`\>(`obj`, `callback`): { [P in string \| number \| symbol]: TResult }

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `obj`      | `undefined` \| `null` \| `T`                                             |
| `callback` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `TResult`\> |

#### Returns

{ [P in string \| number \| symbol]: TResult }

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1583

▸ **mapValues**<`T`\>(`obj`, `iteratee`): [`Dictionary`](lodash.Dictionary.md)<`boolean`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `obj`      | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee` | `object`                                                                                                                        |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`boolean`\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1587

▸ **mapValues**<`T`\>(`obj`, `iteratee`): { [P in string \| number \| symbol]: boolean }

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name       | Type                         |
| :--------- | :--------------------------- |
| `obj`      | `undefined` \| `null` \| `T` |
| `iteratee` | `object`                     |

#### Returns

{ [P in string \| number \| symbol]: boolean }

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1591

▸ **mapValues**<`T`, `TKey`\>(`obj`, `iteratee`): [`Dictionary`](lodash.Dictionary.md)<`T`[`TKey`]\>

#### Type parameters

| Name   | Type                                     |
| :----- | :--------------------------------------- |
| `T`    | `T`                                      |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name       | Type                                                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `obj`      | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee` | `TKey`                                                                                                                          |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`[`TKey`]\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1595

▸ **mapValues**<`T`\>(`obj`, `iteratee`): [`Dictionary`](lodash.Dictionary.md)<`any`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `obj`      | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |
| `iteratee` | `string`                                                                                                                        |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`any`\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1599

▸ **mapValues**<`T`\>(`obj`, `iteratee`): { [P in string \| number \| symbol]: any }

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name       | Type                         |
| :--------- | :--------------------------- |
| `obj`      | `undefined` \| `null` \| `T` |
| `iteratee` | `string`                     |

#### Returns

{ [P in string \| number \| symbol]: any }

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1603

▸ **mapValues**(`obj`): [`NumericDictionary`](lodash.NumericDictionary.md)<`string`\>

#### Parameters

| Name  | Type                              |
| :---- | :-------------------------------- |
| `obj` | `undefined` \| `null` \| `string` |

#### Returns

[`NumericDictionary`](lodash.NumericDictionary.md)<`string`\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1607

▸ **mapValues**<`T`\>(`obj`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name  | Type                                                                                                                            |
| :---- | :------------------------------------------------------------------------------------------------------------------------------ |
| `obj` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1611

▸ **mapValues**<`T`\>(`obj`): `T`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `obj` | `T`  |

#### Returns

`T`

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1615

▸ **mapValues**<`T`\>(`obj`): `Partial`<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name  | Type                         |
| :---- | :--------------------------- |
| `obj` | `undefined` \| `null` \| `T` |

#### Returns

`Partial`<`T`\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1619

---

### matches

▸ **matches**<`T`\>(`source`): (`value`: `any`) => `boolean`

Creates a function that performs a deep comparison between a given object and source, returning true
if the given object has equivalent property values, else false.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties. For
comparing a single own or inherited property value see \_.matchesProperty.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type | Description                             |
| :------- | :--- | :-------------------------------------- |
| `source` | `T`  | The object of property values to match. |

#### Returns

`fn`

Returns the new function.

▸ (`value`): `boolean`

Creates a function that performs a deep comparison between a given object and source, returning true
if the given object has equivalent property values, else false.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties. For
comparing a single own or inherited property value see \_.matchesProperty.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

##### Returns

`boolean`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:497

▸ **matches**<`T`, `V`\>(`source`): (`value`: `V`) => `boolean`

#### Type parameters

| Name |
| :--- |
| `T`  |
| `V`  |

#### Parameters

| Name     | Type |
| :------- | :--- |
| `source` | `T`  |

#### Returns

`fn`

▸ (`value`): `boolean`

##### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `V`  |

##### Returns

`boolean`

**`See`**

\_.matches

**`See`**

\_.matches

#### Defined in

node_modules/@types/lodash/common/util.d.ts:501

---

### matchesProperty

▸ **matchesProperty**<`T`\>(`path`, `srcValue`): (`value`: `any`) => `boolean`

Creates a function that compares the property value of path on a given object to value.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name       | Type                                                | Description                      |
| :--------- | :-------------------------------------------------- | :------------------------------- |
| `path`     | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to get. |
| `srcValue` | `T`                                                 | The value to match.              |

#### Returns

`fn`

Returns the new function.

▸ (`value`): `boolean`

Creates a function that compares the property value of path on a given object to value.

Note: This method supports comparing arrays, booleans, Date objects, numbers, Object objects,
regexes, and strings. Objects are compared by their own, not inherited, enumerable properties.

##### Parameters

| Name    | Type  |
| :------ | :---- |
| `value` | `any` |

##### Returns

`boolean`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:527

▸ **matchesProperty**<`T`, `V`\>(`path`, `srcValue`): (`value`: `V`) => `boolean`

#### Type parameters

| Name |
| :--- |
| `T`  |
| `V`  |

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `path`     | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `srcValue` | `T`                                                 |

#### Returns

`fn`

▸ (`value`): `boolean`

##### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `V`  |

##### Returns

`boolean`

**`See`**

\_.matchesProperty

**`See`**

\_.matchesProperty

#### Defined in

node_modules/@types/lodash/common/util.d.ts:531

---

### method

▸ **method**(`path`, `...args`): (`object`: `any`) => `any`

Creates a function that invokes the method at path on a given object. Any additional arguments are
provided to the invoked method.

#### Parameters

| Name      | Type                                                | Description                              |
| :-------- | :-------------------------------------------------- | :--------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the method to invoke.        |
| `...args` | `any`[]                                             | The arguments to invoke the method with. |

#### Returns

`fn`

Returns the new function.

▸ (`object`): `any`

Creates a function that invokes the method at path on a given object. Any additional arguments are
provided to the invoked method.

##### Parameters

| Name     | Type  |
| :------- | :---- |
| `object` | `any` |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:563

---

### methodOf

▸ **methodOf**(`object`, `...args`): (`path`: [`PropertyPath`](../modules/lodash.md#propertypath))
=> `any`

The opposite of \_.method; this method creates a function that invokes the method at a given path on
object. Any additional arguments are provided to the invoked method.

#### Parameters

| Name      | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `object`  | `object` | The object to query.                     |
| `...args` | `any`[]  | The arguments to invoke the method with. |

#### Returns

`fn`

Returns the new function.

▸ (`path`): `any`

The opposite of \_.method; this method creates a function that invokes the method at a given path on
object. Any additional arguments are provided to the invoked method.

##### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:587

---

### mixin

▸ **mixin**<`TObject`\>(`object`, `source`, `options?`): `TObject`

Adds all own enumerable function properties of a source object to the destination object. If object
is a function then methods are added to its prototype as well.

Note: Use \_.runInContext to create a pristine lodash function to avoid conflicts caused by
modifying the original.

#### Type parameters

| Name      |
| :-------- |
| `TObject` |

#### Parameters

| Name       | Type                                                                 | Description                     |
| :--------- | :------------------------------------------------------------------- | :------------------------------ |
| `object`   | `TObject`                                                            | The destination object.         |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> | The object of functions to add. |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             | The options object.             |

#### Returns

`TObject`

Returns object.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:622

▸ **mixin**<`TResult`\>(`source`, `options?`): [`LoDashStatic`](lodash.LoDashStatic.md)

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             |

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

**`See`**

\_.mixin

#### Defined in

node_modules/@types/lodash/common/util.d.ts:626

---

### multiply

▸ **multiply**(`multiplier`, `multiplicand`): `number`

Multiply two numbers.

#### Parameters

| Name           | Type     | Description                            |
| :------------- | :------- | :------------------------------------- |
| `multiplier`   | `number` | The first number in a multiplication.  |
| `multiplicand` | `number` | The second number in a multiplication. |

#### Returns

`number`

Returns the product.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:277

---

### negate

▸ **negate**<`T`\>(`predicate`): (...`args`: `T`) => `boolean`

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

#### Type parameters

| Name | Type            |
| :--- | :-------------- |
| `T`  | extends `any`[] |

#### Parameters

| Name        | Type                          | Description              |
| :---------- | :---------------------------- | :----------------------- |
| `predicate` | (...`args`: `T`) => `boolean` | The predicate to negate. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `boolean`

Creates a function that negates the result of the predicate func. The func predicate is invoked with
the this binding and arguments of the created function.

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | `T`  |

##### Returns

`boolean`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:572

---

### noConflict

▸ **noConflict**(): [`LoDashStatic`](lodash.LoDashStatic.md)

Reverts the \_ variable to its previous value and returns a reference to the lodash function.

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

Returns the lodash function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:655

---

### noop

▸ **noop**(`...args`): `void`

A no-operation function that returns undefined regardless of the arguments it receives.

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

`void`

undefined

#### Defined in

node_modules/@types/lodash/common/util.d.ts:676

---

### now

▸ **now**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/date.d.ts:9

---

### nth

▸ **nth**<`T`\>(`array`, `n?`): `undefined` \| `T`

Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is
returned.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description               |
| :------ | :----------------------------------------------------------------- | :------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | array The array to query. |
| `n?`    | `number`                                                           | -                         |

#### Returns

`undefined` \| `T`

Returns the nth element of `array`.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:906

---

### nthArg

▸ **nthArg**(`n?`): (...`args`: `any`[]) => `any`

Creates a function that returns its nth argument.

#### Parameters

| Name | Type     | Description                          |
| :--- | :------- | :----------------------------------- |
| `n?` | `number` | The index of the argument to return. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `any`

Creates a function that returns its nth argument.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:698

---

### once

▸ **once**<`T`\>(`func`): `T`

Creates a function that is restricted to invoking func once. Repeat calls to the function return the
value of the first call. The func is invoked with the this binding and arguments of the created
function.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name   | Type | Description               |
| :----- | :--- | :------------------------ |
| `func` | `T`  | The function to restrict. |

#### Returns

`T`

Returns the new restricted function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:594

---

### over

▸ **over**<`TResult`\>(`...iteratees`): (...`args`: `any`[]) => `TResult`[]

Creates a function that invokes iteratees with the arguments provided to the created function and
returns their results.

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type                                                                      | Description              |
| :------------- | :------------------------------------------------------------------------ | :----------------------- |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<(...`args`: `any`[]) => `TResult`\>[] | The iteratees to invoke. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `TResult`[]

Creates a function that invokes iteratees with the arguments provided to the created function and
returns their results.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`TResult`[]

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:721

---

### overArgs

▸ **overArgs**(`func`, `...transforms`): (...`args`: `any`[]) => `any`

Creates a function that runs each argument through a corresponding transform function.

#### Parameters

| Name            | Type                                                                  | Description                                                                                     |
| :-------------- | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| `func`          | (...`args`: `any`[]) => `any`                                         | The function to wrap.                                                                           |
| `...transforms` | [`Many`](../modules/lodash.md#many)<(...`args`: `any`[]) => `any`\>[] | The functions to transform arguments, specified as individual functions or arrays of functions. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `any`

Creates a function that runs each argument through a corresponding transform function.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:617

---

### overEvery

▸ **overEvery**<`T`, `Result1`, `Result2`\>(`...predicates`): (`arg`: `T`) => arg is Result1 &
Result2

Creates a function that checks if all of the predicates return truthy when invoked with the
arguments provided to the created function.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `Result1` |
| `Result2` |

#### Parameters

| Name            | Type                                                             | Description              |
| :-------------- | :--------------------------------------------------------------- | :----------------------- |
| `...predicates` | [(`arg`: `T`) => arg is Result1, (`arg`: `T`) => arg is Result2] | The predicates to check. |

#### Returns

`fn`

Returns the new function.

▸ (`arg`): arg is Result1 & Result2

Creates a function that checks if all of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Parameters

| Name  | Type |
| :---- | :--- |
| `arg` | `T`  |

##### Returns

arg is Result1 & Result2

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:756

▸ **overEvery**<`T`\>(`...predicates`): (...`args`: `T`[]) => `boolean`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                                                    |
| :-------------- | :---------------------------------------------------------------------- |
| `...predicates` | [`Many`](../modules/lodash.md#many)<(...`args`: `T`[]) => `boolean`\>[] |

#### Returns

`fn`

▸ (`...args`): `boolean`

##### Parameters

| Name      | Type  |
| :-------- | :---- |
| `...args` | `T`[] |

##### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:760

---

### overSome

▸ **overSome**<`T`, `Result1`, `Result2`\>(`...predicates`): (`arg`: `T`) => arg is Result1 \|
Result2

Creates a function that checks if any of the predicates return truthy when invoked with the
arguments provided to the created function.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `Result1` |
| `Result2` |

#### Parameters

| Name            | Type                                                             | Description              |
| :-------------- | :--------------------------------------------------------------- | :----------------------- |
| `...predicates` | [(`arg`: `T`) => arg is Result1, (`arg`: `T`) => arg is Result2] | The predicates to check. |

#### Returns

`fn`

Returns the new function.

▸ (`arg`): arg is Result1 \| Result2

Creates a function that checks if any of the predicates return truthy when invoked with the
arguments provided to the created function.

##### Parameters

| Name  | Type |
| :---- | :--- |
| `arg` | `T`  |

##### Returns

arg is Result1 \| Result2

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:795

▸ **overSome**<`T`\>(`...predicates`): (...`args`: `T`[]) => `boolean`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name            | Type                                                                    |
| :-------------- | :---------------------------------------------------------------------- |
| `...predicates` | [`Many`](../modules/lodash.md#many)<(...`args`: `T`[]) => `boolean`\>[] |

#### Returns

`fn`

▸ (`...args`): `boolean`

##### Parameters

| Name      | Type  |
| :-------- | :---- |
| `...args` | `T`[] |

##### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:799

---

### pad

▸ **pad**(`string?`, `length?`, `chars?`): `string`

Pads string on the left and right sides if it’s shorter than length. Padding characters are
truncated if they can’t be evenly divided by length.

#### Parameters

| Name      | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `string?` | `string` | The string to pad.          |
| `length?` | `number` | The padding length.         |
| `chars?`  | `string` | The string used as padding. |

#### Returns

`string`

Returns the padded string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:226

---

### padEnd

▸ **padEnd**(`string?`, `length?`, `chars?`): `string`

Pads string on the right side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

| Name      | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `string?` | `string` | The string to pad.          |
| `length?` | `number` | The padding length.         |
| `chars?`  | `string` | The string used as padding. |

#### Returns

`string`

Returns the padded string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:251

---

### padStart

▸ **padStart**(`string?`, `length?`, `chars?`): `string`

Pads string on the left side if it’s shorter than length. Padding characters are truncated if they
exceed length.

#### Parameters

| Name      | Type     | Description                 |
| :-------- | :------- | :-------------------------- |
| `string?` | `string` | The string to pad.          |
| `length?` | `number` | The padding length.         |
| `chars?`  | `string` | The string used as padding. |

#### Returns

`string`

Returns the padded string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:276

---

### parseInt

▸ **parseInt**(`string`, `radix?`): `number`

Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is
used unless value is a hexadecimal, in which case a radix of 16 is used.

Note: This method aligns with the ES5 implementation of parseInt.

#### Parameters

| Name     | Type     | Description                      |
| :------- | :------- | :------------------------------- |
| `string` | `string` | The string to convert.           |
| `radix?` | `number` | The radix to interpret value by. |

#### Returns

`number`

Returns the converted integer.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:302

---

### partition

▸ **partition**<`T`, `U`\>(`collection`, `callback`): [`U`[], `Exclude`<`T`, `U`\>[]]

Creates an array of elements split into two groups, the first of which contains elements predicate
returns truthy for, while the second of which contains elements predicate returns falsey for. The
predicate is invoked with three arguments: (value, index|key, collection).

#### Type parameters

| Name |
| :--- |
| `T`  |
| `U`  |

#### Parameters

| Name         | Type                                                                               | Description                        |
| :----------- | :--------------------------------------------------------------------------------- | :--------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                 | The collection to iterate over.    |
| `callback`   | [`ValueIteratorTypeGuard`](../modules/lodash.md#valueiteratortypeguard)<`T`, `U`\> | The function called per iteration. |

#### Returns

[`U`[], `Exclude`<`T`, `U`\>[]]

Returns the array of grouped elements.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1375

▸ **partition**<`T`\>(`collection`, `callback`): [`T`[], `T`[]]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `callback`   | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

[`T`[], `T`[]]

**`See`**

\_.partition

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1379

▸ **partition**<`T`\>(`collection`, `callback`): [`T`[keyof `T`][], `T`[keyof `T`][]]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                   |
| :----------- | :--------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                           |
| `callback`   | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`[keyof `T`]\> |

#### Returns

[`T`[keyof `T`][], `T`[keyof `T`][]]

**`See`**

\_.partition

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1383

---

### property

▸ **property**<`TObj`, `TResult`\>(`path`): (`obj`: `TObj`) => `TResult`

Creates a function that returns the property value at path on a given object.

#### Type parameters

| Name      |
| :-------- |
| `TObj`    |
| `TResult` |

#### Parameters

| Name   | Type                                                | Description                      |
| :----- | :-------------------------------------------------- | :------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to get. |

#### Returns

`fn`

Returns the new function.

▸ (`obj`): `TResult`

Creates a function that returns the property value at path on a given object.

##### Parameters

| Name  | Type   |
| :---- | :----- |
| `obj` | `TObj` |

##### Returns

`TResult`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:833

---

### propertyOf

▸ **propertyOf**<`T`\>(`object`): (`path`: [`PropertyPath`](../modules/lodash.md#propertypath)) =>
`any`

The opposite of \_.property; this method creates a function that returns the property value at a
given path on object.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `Object` |

#### Parameters

| Name     | Type | Description          |
| :------- | :--- | :------------------- |
| `object` | `T`  | The object to query. |

#### Returns

`fn`

Returns the new function.

▸ (`path`): `any`

The opposite of \_.property; this method creates a function that returns the property value at a
given path on object.

##### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:856

---

### pull

▸ **pull**<`T`\>(`array`, `...values`): `T`[]

Removes all provided values from array using SameValueZero for equality comparisons.

Note: Unlike \_.without, this method mutates array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type  | Description           |
| :---------- | :---- | :-------------------- |
| `array`     | `T`[] | The array to modify.  |
| `...values` | `T`[] | The values to remove. |

#### Returns

`T`[]

Returns array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:930

▸ **pull**<`T`\>(`array`, `...values`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                      |
| :---------- | :---------------------------------------- |
| `array`     | [`List`](../modules/lodash.md#list)<`T`\> |
| `...values` | `T`[]                                     |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.pull

#### Defined in

node_modules/@types/lodash/common/array.d.ts:934

---

### pullAt

▸ **pullAt**<`T`\>(`array`, `...indexes`): `T`[]

Removes elements from array corresponding to the given indexes and returns an array of the removed
elements. Indexes may be specified as an array of indexes or as individual arguments.

Note: Unlike \_.at, this method mutates array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                             | Description                                                                              |
| :----------- | :----------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `array`      | `T`[]                                            | The array to modify.                                                                     |
| `...indexes` | [`Many`](../modules/lodash.md#many)<`number`\>[] | The indexes of elements to remove, specified as individual indexes or arrays of indexes. |

#### Returns

`T`[]

Returns the new array of removed elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1089

▸ **pullAt**<`T`\>(`array`, `...indexes`): [`List`](../modules/lodash.md#list)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                             |
| :----------- | :----------------------------------------------- |
| `array`      | [`List`](../modules/lodash.md#list)<`T`\>        |
| `...indexes` | [`Many`](../modules/lodash.md#many)<`number`\>[] |

#### Returns

[`List`](../modules/lodash.md#list)<`T`\>

**`See`**

\_.pullAt

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1093

---

### random

▸ **random**(`floating?`): `number`

Produces a random number between min and max (inclusive). If only one argument is provided a number
between 0 and the given number is returned. If floating is true, or either min or max are floats, a
floating-point number is returned instead of an integer.

#### Parameters

| Name        | Type      | Description                                |
| :---------- | :-------- | :----------------------------------------- |
| `floating?` | `boolean` | Specify returning a floating-point number. |

#### Returns

`number`

Returns the random number.

#### Defined in

node_modules/@types/lodash/common/number.d.ts:97

▸ **random**(`max`, `floating?`): `number`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `max`       | `number`  |
| `floating?` | `boolean` |

#### Returns

`number`

**`See`**

\_.random

#### Defined in

node_modules/@types/lodash/common/number.d.ts:101

▸ **random**(`min`, `max`, `floating?`): `number`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `min`       | `number`  |
| `max`       | `number`  |
| `floating?` | `boolean` |

#### Returns

`number`

**`See`**

\_.random

#### Defined in

node_modules/@types/lodash/common/number.d.ts:105

▸ **random**(`min`, `index`, `guard`): `number`

#### Parameters

| Name    | Type                 |
| :------ | :------------------- |
| `min`   | `number`             |
| `index` | `string` \| `number` |
| `guard` | `object`             |

#### Returns

`number`

**`See`**

\_.random

#### Defined in

node_modules/@types/lodash/common/number.d.ts:109

---

### range

▸ **range**(`start`, `end?`, `step?`): `number`[]

Creates an array of numbers (positive and/or negative) progressing from start up to, but not
including, end. If end is not specified it’s set to start with start then set to 0. If end is less
than start a zero-length range is created unless a negative step is specified.

#### Parameters

| Name    | Type     | Description                             |
| :------ | :------- | :-------------------------------------- |
| `start` | `number` | The start of the range.                 |
| `end?`  | `number` | The end of the range.                   |
| `step?` | `number` | The value to increment or decrement by. |

#### Returns

`number`[]

Returns a new range array.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:882

▸ **range**(`end`, `index`, `guard`): `number`[]

#### Parameters

| Name    | Type                 |
| :------ | :------------------- |
| `end`   | `number`             |
| `index` | `string` \| `number` |
| `guard` | `object`             |

#### Returns

`number`[]

**`See`**

\_.range

#### Defined in

node_modules/@types/lodash/common/util.d.ts:886

---

### rearg

▸ **rearg**(`func`, `...indexes`): (...`args`: `any`[]) => `any`

Creates a function that invokes func with arguments arranged according to the specified indexes
where the argument value at the first index is provided as the first argument, the argument value at
the second index is provided as the second argument, and so on.

#### Parameters

| Name         | Type                                             | Description                                                                          |
| :----------- | :----------------------------------------------- | :----------------------------------------------------------------------------------- |
| `func`       | (...`args`: `any`[]) => `any`                    | The function to rearrange arguments for.                                             |
| `...indexes` | [`Many`](../modules/lodash.md#many)<`number`\>[] | The arranged argument indexes, specified as individual indexes or arrays of indexes. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `any`

Creates a function that invokes func with arguments arranged according to the specified indexes
where the argument value at the first index is provided as the first argument, the argument value at
the second index is provided as the second argument, and so on.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1285

---

### reduce

▸ **reduce**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

Reduces a collection to a value which is the accumulated result of running each element in the
collection through the callback, where each successive callback execution consumes the return value
of the previous execution. If accumulator is not provided the first element of the collection will
be used as the initial accumulator value. The callback is invoked with four arguments: (accumulator,
value, index|key, collection).

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                                                                                | Description                        |
| :------------ | :---------------------------------------------------------------------------------- | :--------------------------------- |
| `collection`  | `undefined` \| `null` \| `T`[]                                                      | The collection to iterate over.    |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, `T`[]\> | The function called per iteration. |
| `accumulator` | `TResult`                                                                           | Initial value of the accumulator.  |

#### Returns

`TResult`

Returns the accumulated value.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1447

▸ **reduce**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                                    |
| :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `collection`  | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                      |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, [`List`](../modules/lodash.md#list)<`T`\>\> |
| `accumulator` | `TResult`                                                                                                               |

#### Returns

`TResult`

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1451

▸ **reduce**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name          | Type                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------- |
| `collection`  | `undefined` \| `null` \| `T`                                                                     |
| `callback`    | [`MemoObjectIterator`](../modules/lodash.md#memoobjectiterator)<`T`[keyof `T`], `TResult`, `T`\> |
| `accumulator` | `TResult`                                                                                        |

#### Returns

`TResult`

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1455

▸ **reduce**<`T`\>(`collection`, `callback`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                          |
| :----------- | :---------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`[]                                                |
| `callback`   | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, `T`[]\> |

#### Returns

`undefined` \| `T`

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1459

▸ **reduce**<`T`\>(`collection`, `callback`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                              |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                |
| `callback`   | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, [`List`](../modules/lodash.md#list)<`T`\>\> |

#### Returns

`undefined` \| `T`

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1463

▸ **reduce**<`T`\>(`collection`, `callback`): `undefined` \| `T`[keyof `T`]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                                  |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                          |
| `callback`   | [`MemoObjectIterator`](../modules/lodash.md#memoobjectiterator)<`T`[keyof `T`], `T`[keyof `T`], `T`\> |

#### Returns

`undefined` \| `T`[keyof `T`]

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1467

---

### reduceRight

▸ **reduceRight**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

This method is like \_.reduce except that it iterates over elements of a collection from right to
left.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                                                                                | Description                        |
| :------------ | :---------------------------------------------------------------------------------- | :--------------------------------- |
| `collection`  | `undefined` \| `null` \| `T`[]                                                      | The collection to iterate over.    |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, `T`[]\> | The function called per iteration. |
| `accumulator` | `TResult`                                                                           | Initial value of the accumulator.  |

#### Returns

`TResult`

The accumulated value.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1518

▸ **reduceRight**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                                    |
| :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `collection`  | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                      |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, [`List`](../modules/lodash.md#list)<`T`\>\> |
| `accumulator` | `TResult`                                                                                                               |

#### Returns

`TResult`

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1522

▸ **reduceRight**<`T`, `TResult`\>(`collection`, `callback`, `accumulator`): `TResult`

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name          | Type                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------- |
| `collection`  | `undefined` \| `null` \| `T`                                                                     |
| `callback`    | [`MemoObjectIterator`](../modules/lodash.md#memoobjectiterator)<`T`[keyof `T`], `TResult`, `T`\> |
| `accumulator` | `TResult`                                                                                        |

#### Returns

`TResult`

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1526

▸ **reduceRight**<`T`\>(`collection`, `callback`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                          |
| :----------- | :---------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`[]                                                |
| `callback`   | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, `T`[]\> |

#### Returns

`undefined` \| `T`

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1530

▸ **reduceRight**<`T`\>(`collection`, `callback`): `undefined` \| `T`

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                              |
| :----------- | :---------------------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                |
| `callback`   | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, [`List`](../modules/lodash.md#list)<`T`\>\> |

#### Returns

`undefined` \| `T`

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1534

▸ **reduceRight**<`T`\>(`collection`, `callback`): `undefined` \| `T`[keyof `T`]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                                  |
| :----------- | :---------------------------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                                          |
| `callback`   | [`MemoObjectIterator`](../modules/lodash.md#memoobjectiterator)<`T`[keyof `T`], `T`[keyof `T`], `T`\> |

#### Returns

`undefined` \| `T`[keyof `T`]

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1538

---

### reject

▸ **reject**(`collection`, `predicate?`): `string`[]

The opposite of \_.filter; this method returns the elements of collection that predicate does not
return truthy for.

#### Parameters

| Name         | Type                                                                | Description                         |
| :----------- | :------------------------------------------------------------------ | :---------------------------------- |
| `collection` | `undefined` \| `null` \| `string`                                   | The collection to iterate over.     |
| `predicate?` | [`StringIterator`](../modules/lodash.md#stringiterator)<`boolean`\> | The function invoked per iteration. |

#### Returns

`string`[]

Returns the new filtered array.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1589

▸ **reject**<`T`\>(`collection`, `predicate?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

`T`[]

**`See`**

\_.reject

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1593

▸ **reject**<`T`\>(`collection`, `predicate?`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.reject

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1597

---

### remove

▸ **remove**<`T`\>(`array`, `predicate?`): `T`[]

Removes all elements from array that predicate returns truthy for and returns an array of the
removed elements. The predicate is invoked with three arguments: (value, index, array).

Note: Unlike \_.filter, this method mutates array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                      | Description                         |
| :----------- | :-------------------------------------------------------- | :---------------------------------- |
| `array`      | [`List`](../modules/lodash.md#list)<`T`\>                 | The array to modify.                |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> | The function invoked per iteration. |

#### Returns

`T`[]

Returns the new array of removed elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1118

---

### repeat

▸ **repeat**(`string?`, `n?`): `string`

Repeats the given string n times.

#### Parameters

| Name      | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `string?` | `string` | The string to repeat.                     |
| `n?`      | `number` | The number of times to repeat the string. |

#### Returns

`string`

Returns the repeated string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:325

---

### replace

▸ **replace**(`string`, `pattern`, `replacement`): `string`

Replaces matches for pattern in string with replacement.

Note: This method is based on String#replace.

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `string`      | `string`                                                              |
| `pattern`     | `string` \| `RegExp`                                                  |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

`string`

Returns the modified string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:349

▸ **replace**(`pattern`, `replacement`): `string`

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `pattern`     | `string` \| `RegExp`                                                  |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

`string`

**`See`**

\_.replace

#### Defined in

node_modules/@types/lodash/common/string.d.ts:353

---

### rest

▸ **rest**(`func`, `start?`): (...`args`: `any`[]) => `any`

Creates a function that invokes func with the this binding of the created function and arguments
from start and beyond provided as an array.

Note: This method is based on the rest parameter.

#### Parameters

| Name     | Type                          | Description                                |
| :------- | :---------------------------- | :----------------------------------------- |
| `func`   | (...`args`: `any`[]) => `any` | The function to apply a rest parameter to. |
| `start?` | `number`                      | The start position of the rest parameter.  |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `any`

Creates a function that invokes func with the this binding of the created function and arguments
from start and beyond provided as an array.

Note: This method is based on the rest parameter.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1310

---

### result

▸ **result**<`TResult`\>(`object`, `path`, `defaultValue?`): `TResult`

This method is like \_.get except that if the resolved value is a function it’s invoked with the
this binding of its parent object and its result is returned.

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name            | Type                                                | Description                                            |
| :-------------- | :-------------------------------------------------- | :----------------------------------------------------- |
| `object`        | `any`                                               | The object to query.                                   |
| `path`          | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to resolve.                   |
| `defaultValue?` | `TResult` \| (...`args`: `any`[]) => `TResult`      | The value returned if the resolved value is undefined. |

#### Returns

`TResult`

Returns the resolved value.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2175

---

### round

▸ **round**(`n`, `precision?`): `number`

Calculates n rounded to precision.

#### Parameters

| Name         | Type     | Description                |
| :----------- | :------- | :------------------------- |
| `n`          | `number` | The number to round.       |
| `precision?` | `number` | The precision to round to. |

#### Returns

`number`

Returns the rounded number.

#### Defined in

node_modules/@types/lodash/common/math.d.ts:300

---

### runInContext

▸ **runInContext**(`context?`): [`LoDashStatic`](lodash.LoDashStatic.md)

Create a new pristine lodash function using the given context object.

#### Parameters

| Name       | Type     | Description         |
| :--------- | :------- | :------------------ |
| `context?` | `object` | The context object. |

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

Returns a new lodash function.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:960

---

### sample

▸ **sample**<`T`\>(`collection`): `undefined` \| `T`

Gets a random element from collection.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            | Description               |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :------------------------ |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The collection to sample. |

#### Returns

`undefined` \| `T`

Returns the random element.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1648

▸ **sample**<`T`\>(`collection`): `undefined` \| `T`[keyof `T`]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                         |
| :----------- | :--------------------------- |
| `collection` | `undefined` \| `null` \| `T` |

#### Returns

`undefined` \| `T`[keyof `T`]

**`See`**

\_.sample

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1652

---

### sampleSize

▸ **sampleSize**<`T`\>(`collection`, `n?`): `T`[]

Gets n random elements at unique keys from collection up to the size of collection.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                                                                            | Description                       |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------- |
| `collection` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The collection to sample.         |
| `n?`         | `number`                                                                                                                        | The number of elements to sample. |

#### Returns

`T`[]

Returns the random elements.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1704

▸ **sampleSize**<`T`\>(`collection`, `n?`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                         |
| :----------- | :--------------------------- |
| `collection` | `undefined` \| `null` \| `T` |
| `n?`         | `number`                     |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.sampleSize

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1708

---

### set

▸ **set**<`T`\>(`object`, `path`, `value`): `T`

Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are
created for missing index properties while objects are created for all other missing properties. Use
\_.setWith to customize path creation.

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name     | Type                                                | Description                      |
| :------- | :-------------------------------------------------- | :------------------------------- |
| `object` | `T`                                                 | The object to modify.            |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to set. |
| `value`  | `any`                                               | The value to set.                |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2200

▸ **set**<`TResult`\>(`object`, `path`, `value`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name     | Type                                                |
| :------- | :-------------------------------------------------- |
| `object` | `object`                                            |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value`  | `any`                                               |

#### Returns

`TResult`

**`See`**

\_.set

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2204

---

### setWith

▸ **setWith**<`T`\>(`object`, `path`, `value`, `customizer?`): `T`

This method is like \_.set except that it accepts customizer which is invoked to produce the objects
of path. If customizer returns undefined path creation is handled by the method instead. The
customizer is invoked with three arguments: (nsValue, key, nsObject).

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name          | Type                                                                | Description                                |
| :------------ | :------------------------------------------------------------------ | :----------------------------------------- |
| `object`      | `T`                                                                 | The object to modify.                      |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 | The path of the property to set.           |
| `value`       | `any`                                                               | The value to set.                          |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> | The function to customize assigned values. |

#### Returns

`T`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2239

▸ **setWith**<`T`, `TResult`\>(`object`, `path`, `value`, `customizer?`): `TResult`

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `object`      | `T`                                                                 |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 |
| `value`       | `any`                                                               |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> |

#### Returns

`TResult`

**`See`**

\_.setWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2243

---

### shuffle

▸ **shuffle**<`T`\>(`collection`): `T`[]

Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                |
| :----------- | :----------------------------------------------------------------- | :------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The collection to shuffle. |

#### Returns

`T`[]

Returns the new shuffled array.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1759

▸ **shuffle**<`T`\>(`collection`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                         |
| :----------- | :--------------------------- |
| `collection` | `undefined` \| `null` \| `T` |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.shuffle

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1763

---

### size

▸ **size**(`collection`): `number`

Gets the size of collection by returning its length for array-like values or the number of own
enumerable properties for objects.

#### Parameters

| Name         | Type                                          | Description                |
| :----------- | :-------------------------------------------- | :------------------------- |
| `collection` | `undefined` \| `null` \| `string` \| `object` | The collection to inspect. |

#### Returns

`number`

Returns the size of collection.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1815

---

### slice

▸ **slice**<`T`\>(`array`, `start?`, `end?`): `T`[]

Creates a slice of array from start up to, but not including, end.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                               | Description         |
| :------- | :----------------------------------------------------------------- | :------------------ |
| `array`  | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to slice. |
| `start?` | `number`                                                           | The start position. |
| `end?`   | `number`                                                           | The end position.   |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1163

---

### snakeCase

▸ **snakeCase**(`string?`): `string`

Converts string to snake case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the snake cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:383

---

### some

▸ **some**<`T`\>(`collection`, `predicate?`): `boolean`

Checks if predicate returns truthy for any element of collection. Iteration is stopped once
predicate returns truthy. The predicate is invoked with three arguments: (value, index|key,
collection).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                                             | Description                         |
| :----------- | :------------------------------------------------------------------------------- | :---------------------------------- |
| `collection` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>               | The collection to iterate over.     |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> | The function invoked per iteration. |

#### Returns

`boolean`

Returns true if any element passes the predicate check, else false.

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1838

▸ **some**<`T`\>(`collection`, `predicate?`): `boolean`

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `collection` | `undefined` \| `null` \| `T`                                                         |
| `predicate?` | [`ObjectIterateeCustom`](../modules/lodash.md#objectiterateecustom)<`T`, `boolean`\> |

#### Returns

`boolean`

**`See`**

\_.some

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1842

---

### split

▸ **split**(`string`, `separator?`, `limit?`): `string`[]

Splits string by separator.

Note: This method is based on String#split.

#### Parameters

| Name         | Type                              | Description                        |
| :----------- | :-------------------------------- | :--------------------------------- |
| `string`     | `undefined` \| `null` \| `string` | The string to split.               |
| `separator?` | `string` \| `RegExp`              | The separator pattern to split by. |
| `limit?`     | `number`                          | The length to truncate results to. |

#### Returns

`string`[]

Returns the new array of string segments.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:409

▸ **split**(`string`, `index`, `guard`): `string`[]

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `string` | `undefined` \| `null` \| `string` |
| `index`  | `string` \| `number`              |
| `guard`  | `object`                          |

#### Returns

`string`[]

**`See`**

\_.split

#### Defined in

node_modules/@types/lodash/common/string.d.ts:413

---

### spread

▸ **spread**<`TResult`\>(`func`, `start?`): (...`args`: `any`[]) => `TResult`

Creates a function that invokes func with the this binding of the created function and an array of
arguments much like Function#apply.

Note: This method is based on the spread operator.

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name     | Type                              | Description                            |
| :------- | :-------------------------------- | :------------------------------------- |
| `func`   | (...`args`: `any`[]) => `TResult` | The function to spread arguments over. |
| `start?` | `number`                          | -                                      |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `TResult`

Creates a function that invokes func with the this binding of the created function and an array of
arguments much like Function#apply.

Note: This method is based on the spread operator.

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`TResult`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1334

---

### startCase

▸ **startCase**(`string?`): `string`

Converts string to start case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the start cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:435

---

### startsWith

▸ **startsWith**(`string?`, `target?`, `position?`): `boolean`

Checks if string starts with the given target string.

#### Parameters

| Name        | Type     | Description                  |
| :---------- | :------- | :--------------------------- |
| `string?`   | `string` | The string to search.        |
| `target?`   | `string` | The string to search for.    |
| `position?` | `number` | The position to search from. |

#### Returns

`boolean`

Returns true if string starts with target, else false.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:459

---

### stubArray

▸ **stubArray**(): `any`[]

This method returns a new empty array.

#### Returns

`any`[]

Returns the new empty array.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:975

---

### stubFalse

▸ **stubFalse**(): `false`

This method returns `false`.

#### Returns

`false`

Returns `false`.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:996

▸ **stubFalse**(): `false`

This method returns false.

#### Returns

`false`

Returns false.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1204

---

### stubObject

▸ **stubObject**(): `any`

This method returns a new empty object.

#### Returns

`any`

Returns the new empty object.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1017

---

### stubString

▸ **stubString**(): `string`

This method returns an empty string.

#### Returns

`string`

Returns the empty string.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1038

---

### stubTrue

▸ **stubTrue**(): `true`

This method returns `true`.

#### Returns

`true`

Returns `true`.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1059

▸ **stubTrue**(): `true`

This method returns true.

#### Returns

`true`

Returns true.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1179

---

### tail

▸ **tail**<`T`\>(`array`): `T`[]

Gets all but the first element of array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description         |
| :------ | :----------------------------------------------------------------- | :------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1453

---

### take

▸ **take**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of array with n elements taken from the beginning.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                     |
| :------ | :----------------------------------------------------------------- | :------------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.             |
| `n?`    | `number`                                                           | The number of elements to take. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1475

---

### takeRight

▸ **takeRight**<`T`\>(`array`, `n?`): `T`[]

Creates a slice of array with n elements taken from the end.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                               | Description                     |
| :------ | :----------------------------------------------------------------- | :------------------------------ |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.             |
| `n?`    | `number`                                                           | The number of elements to take. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1497

---

### takeRightWhile

▸ **takeRightWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a slice of array with elements taken from the end. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.                 |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>          | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1520

---

### takeWhile

▸ **takeWhile**<`T`\>(`array`, `predicate?`): `T`[]

Creates a slice of array with elements taken from the beginning. Elements are taken until predicate
returns falsey. The predicate is invoked with three arguments: (value, index, array).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name         | Type                                                               | Description                         |
| :----------- | :----------------------------------------------------------------- | :---------------------------------- |
| `array`      | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to query.                 |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>          | The function invoked per iteration. |

#### Returns

`T`[]

Returns the slice of array.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1543

---

### tap

▸ **tap**<`T`\>(`value`, `interceptor`): `T`

This method invokes interceptor and returns value. The interceptor is invoked with one argument;
(value). The purpose of this method is to "tap into" a method chain in order to perform operations
on intermediate results within the chain.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                     | Description                          |
| :------------ | :----------------------- | :----------------------------------- |
| `value`       | `T`                      | The value to provide to interceptor. |
| `interceptor` | (`value`: `T`) => `void` | The function to invoke.              |

#### Returns

`T`

Returns value.

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:173

---

### template

▸ **template**(`string?`, `options?`): [`TemplateExecutor`](lodash.TemplateExecutor.md)

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

| Name       | Type                                           | Description          |
| :--------- | :--------------------------------------------- | :------------------- |
| `string?`  | `string`                                       | The template string. |
| `options?` | [`TemplateOptions`](lodash.TemplateOptions.md) | The options object.  |

#### Returns

[`TemplateExecutor`](lodash.TemplateExecutor.md)

Returns the compiled template function.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:514

---

### throttle

▸ **throttle**<`T`\>(`func`, `wait?`, `options?`): [`DebouncedFunc`](lodash.DebouncedFunc.md)<`T`\>

Creates a throttled function that only invokes func at most once per every wait milliseconds. The
throttled function comes with a cancel method to cancel delayed invocations and a flush method to
immediately invoke them. Provide an options object to indicate that func should be invoked on the
leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled function return
the result of the last func call.

Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout
only if the the throttled function is invoked more than once during the wait timeout.

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name       | Type                                             | Description                                            |
| :--------- | :----------------------------------------------- | :----------------------------------------------------- |
| `func`     | `T`                                              | The function to throttle.                              |
| `wait?`    | `number`                                         | The number of milliseconds to throttle invocations to. |
| `options?` | [`ThrottleSettings`](lodash.ThrottleSettings.md) | The options object.                                    |

#### Returns

[`DebouncedFunc`](lodash.DebouncedFunc.md)<`T`\>

Returns the new throttled function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1375

---

### thru

▸ **thru**<`T`, `TResult`\>(`value`, `interceptor`): `TResult`

This method is like \_.tap except that it returns the result of interceptor.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                        | Description                          |
| :------------ | :-------------------------- | :----------------------------------- |
| `value`       | `T`                         | The value to provide to interceptor. |
| `interceptor` | (`value`: `T`) => `TResult` | The function to invoke.              |

#### Returns

`TResult`

Returns the result of interceptor.

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:196

---

### times

▸ **times**<`TResult`\>(`n`, `iteratee`): `TResult`[]

Invokes the iteratee function n times, returning an array of the results of each invocation. The
iteratee is invoked with one argument; (index).

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                           | Description                             |
| :--------- | :----------------------------- | :-------------------------------------- |
| `n`        | `number`                       | The number of times to invoke iteratee. |
| `iteratee` | (`num`: `number`) => `TResult` | The function invoked per iteration.     |

#### Returns

`TResult`[]

Returns the array of results.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1083

▸ **times**(`n`): `number`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n`  | `number` |

#### Returns

`number`[]

**`See`**

\_.times

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1087

---

### toArray

▸ **toArray**<`T`\>(`value`): `T`[]

Converts value to an array.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                                            | Description           |
| :------ | :------------------------------------------------------------------------------------------------------------------------------ | :-------------------- |
| `value` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The value to convert. |

#### Returns

`T`[]

Returns the converted array.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1416

▸ **toArray**<`T`\>(`value`): `T`[keyof `T`][]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1420

▸ **toArray**(): `any`[]

#### Returns

`any`[]

**`See`**

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1424

---

### toLower

▸ **toLower**(`string?`): `string`

Converts `string`, as a whole, to lower case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the lower cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:536

---

### toPairs

▸ **toPairs**<`T`\>(`object?`): [`string`, `T`][]

Creates an array of own enumerable key-value pairs for object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                                                                                   | Description          |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------- |
| `object?` | [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The object to query. |

#### Returns

[`string`, `T`][]

Returns the new array of key-value pairs.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2272

▸ **toPairs**(`object?`): [`string`, `any`][]

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `object?` | `object` |

#### Returns

[`string`, `any`][]

**`See`**

\_.toPairs

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2276

---

### toPairsIn

▸ **toPairsIn**<`T`\>(`object?`): [`string`, `T`][]

Creates an array of own and inherited enumerable key-value pairs for object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type                                                                                                   | Description          |
| :-------- | :----------------------------------------------------------------------------------------------------- | :------------------- |
| `object?` | [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> | The object to query. |

#### Returns

[`string`, `T`][]

Returns the new array of key-value pairs.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2297

▸ **toPairsIn**(`object?`): [`string`, `any`][]

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `object?` | `object` |

#### Returns

[`string`, `any`][]

**`See`**

\_.toPairsIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2301

---

### toPlainObject

▸ **toPlainObject**(`value?`): `any`

Converts value to a plain object flattening inherited enumerable properties of value to own
properties of the plain object.

#### Parameters

| Name     | Type  | Description           |
| :------- | :---- | :-------------------- |
| `value?` | `any` | The value to convert. |

#### Returns

`any`

Returns the converted plain object.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1627

---

### toUpper

▸ **toUpper**(`string?`): `string`

Converts `string`, as a whole, to upper case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the upper cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:558

---

### transform

▸ **transform**<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

An alternative to \_.reduce; this method transforms object to a new accumulator object which is the
result of running each of its own enumerable properties through iteratee, with each invocation
potentially mutating the accumulator object. The iteratee is invoked with four arguments:
(accumulator, value, key, object). Iteratee functions may exit iteration early by explicitly
returning false.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name           | Type                                                                                   | Description                         |
| :------------- | :------------------------------------------------------------------------------------- | :---------------------------------- |
| `object`       | readonly `T`[]                                                                         | The object to iterate over.         |
| `iteratee`     | [`MemoVoidArrayIterator`](../modules/lodash.md#memovoidarrayiterator)<`T`, `TResult`\> | The function invoked per iteration. |
| `accumulator?` | `TResult`                                                                              | The custom accumulator value.       |

#### Returns

`TResult`

Returns the accumulated value.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2327

▸ **transform**<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name           | Type                                                                                                       |
| :------------- | :--------------------------------------------------------------------------------------------------------- |
| `object`       | [`Dictionary`](lodash.Dictionary.md)<`T`\>                                                                 |
| `iteratee`     | [`MemoVoidDictionaryIterator`](../modules/lodash.md#memovoiddictionaryiterator)<`T`, `string`, `TResult`\> |
| `accumulator?` | `TResult`                                                                                                  |

#### Returns

`TResult`

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2331

▸ **transform**<`T`, `TResult`\>(`object`, `iteratee`, `accumulator?`): `TResult`

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `T`       | extends `object` |
| `TResult` | `TResult`        |

#### Parameters

| Name           | Type                                                                                                                   |
| :------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `object`       | `T`                                                                                                                    |
| `iteratee`     | [`MemoVoidDictionaryIterator`](../modules/lodash.md#memovoiddictionaryiterator)<`T`[keyof `T`], keyof `T`, `TResult`\> |
| `accumulator?` | `TResult`                                                                                                              |

#### Returns

`TResult`

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2335

▸ **transform**(`object`): `any`[]

#### Parameters

| Name     | Type    |
| :------- | :------ |
| `object` | `any`[] |

#### Returns

`any`[]

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2339

▸ **transform**(`object`): [`Dictionary`](lodash.Dictionary.md)<`any`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `object` | `object` |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`any`\>

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2343

---

### trim

▸ **trim**(`string?`, `chars?`): `string`

Removes leading and trailing whitespace or specified characters from string.

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `string?` | `string` | The string to trim.     |
| `chars?`  | `string` | The characters to trim. |

#### Returns

`string`

Returns the trimmed string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:581

▸ **trim**(`string`, `index`, `guard`): `string`

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `string` | `string`             |
| `index`  | `string` \| `number` |
| `guard`  | `object`             |

#### Returns

`string`

**`See`**

\_.trim

#### Defined in

node_modules/@types/lodash/common/string.d.ts:585

---

### trimEnd

▸ **trimEnd**(`string?`, `chars?`): `string`

Removes trailing whitespace or specified characters from string.

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `string?` | `string` | The string to trim.     |
| `chars?`  | `string` | The characters to trim. |

#### Returns

`string`

Returns the trimmed string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:608

▸ **trimEnd**(`string`, `index`, `guard`): `string`

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `string` | `string`             |
| `index`  | `string` \| `number` |
| `guard`  | `object`             |

#### Returns

`string`

**`See`**

\_.trimEnd

#### Defined in

node_modules/@types/lodash/common/string.d.ts:612

---

### trimStart

▸ **trimStart**(`string?`, `chars?`): `string`

Removes leading whitespace or specified characters from string.

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `string?` | `string` | The string to trim.     |
| `chars?`  | `string` | The characters to trim. |

#### Returns

`string`

Returns the trimmed string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:635

▸ **trimStart**(`string`, `index`, `guard`): `string`

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `string` | `string`             |
| `index`  | `string` \| `number` |
| `guard`  | `object`             |

#### Returns

`string`

**`See`**

\_.trimStart

#### Defined in

node_modules/@types/lodash/common/string.d.ts:639

---

### truncate

▸ **truncate**(`string?`, `options?`): `string`

Truncates string if it’s longer than the given maximum string length. The last characters of the
truncated string are replaced with the omission string which defaults to "…".

#### Parameters

| Name       | Type                                           | Description                                  |
| :--------- | :--------------------------------------------- | :------------------------------------------- |
| `string?`  | `string`                                       | The string to truncate.                      |
| `options?` | [`TruncateOptions`](lodash.TruncateOptions.md) | The options object or maximum string length. |

#### Returns

`string`

Returns the truncated string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:677

---

### unescape

▸ **unescape**(`string?`): `string`

The inverse of \_.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;,
and &#96; in string to their corresponding characters.

Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party
library like he.

#### Parameters

| Name      | Type     | Description             |
| :-------- | :------- | :---------------------- |
| `string?` | `string` | The string to unescape. |

#### Returns

`string`

Returns the unescaped string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:703

---

### union

▸ **union**<`T`\>(`...arrays`): `T`[]

Creates an array of unique values, in order, from all of the provided arrays using SameValueZero for
equality comparisons.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                   | Description            |
| :---------- | :--------------------------------------------------------------------- | :--------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] | The arrays to inspect. |

#### Returns

`T`[]

Returns the new array of combined values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1565

---

### unionBy

▸ **unionBy**<`T`\>(`arrays`, `iteratee?`): `T`[]

This method is like `_.union` except that it accepts `iteratee` which is invoked for each element of
each `arrays` to generate the criterion by which uniqueness is computed. The iteratee is invoked
with one argument: (value).

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description                       |
| :---------- | :----------------------------------------------------------------- | :-------------------------------- |
| `arrays`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The arrays to inspect.            |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        | The iteratee invoked per element. |

#### Returns

`T`[]

Returns the new array of combined values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1589

▸ **unionBy**<`T`\>(`arrays1`, `arrays2`, `iteratee?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays1`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

`T`[]

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1593

▸ **unionBy**<`T`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays1`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays3`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

`T`[]

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1597

▸ **unionBy**<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `iteratee?`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays1`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays3`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `arrays4`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

`T`[]

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1601

▸ **unionBy**<`T`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`, `...iteratee`): `T`[]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name          | Type                                                                                                                                  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `arrays1`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays3`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays4`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `arrays5`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>                                                                    |
| `...iteratee` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

`T`[]

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1605

---

### uniqueId

▸ **uniqueId**(`prefix?`): `string`

Generates a unique ID. If prefix is provided the ID is appended to it.

#### Parameters

| Name      | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `prefix?` | `string` | The value to prefix the ID with. |

#### Returns

`string`

Returns the unique ID.

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1156

---

### unset

▸ **unset**(`object`, `path`): `boolean`

Removes the property at path of object.

Note: This method mutates object.

#### Parameters

| Name     | Type                                                | Description                        |
| :------- | :-------------------------------------------------- | :--------------------------------- |
| `object` | `any`                                               | The object to modify.              |
| `path`   | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to unset. |

#### Returns

`boolean`

Returns true if the property is deleted, else false.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2403

---

### unzip

▸ **unzip**<`T`\>(`array`): `T`[][]

This method is like \_.zip except that it accepts an array of grouped elements and creates an array
regrouping the elements to their pre-zip configuration.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                                | Description                               |
| :------ | :------------------------------------------------------------------------------------------------------------------ | :---------------------------------------- |
| `array` | `undefined` \| `null` \| `T`[][] \| [`List`](../modules/lodash.md#list)<[`List`](../modules/lodash.md#list)<`T`\>\> | The array of grouped elements to process. |

#### Returns

`T`[][]

Returns the new array of regrouped elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1776

---

### unzipWith

▸ **unzipWith**<`T`, `TResult`\>(`array`, `iteratee`): `TResult`[]

This method is like \_.unzip except that it accepts an iteratee to specify how regrouped values
should be combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name       | Type                                                                                                     | Description                               |
| :--------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `array`    | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<[`List`](../modules/lodash.md#list)<`T`\>\> | The array of grouped elements to process. |
| `iteratee` | (...`values`: `T`[]) => `TResult`                                                                        | The function to combine regrouped values. |

#### Returns

`TResult`[]

Returns the new array of regrouped elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1799

▸ **unzipWith**<`T`\>(`array`): `T`[][]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type                                                                                                     |
| :------ | :------------------------------------------------------------------------------------------------------- |
| `array` | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<[`List`](../modules/lodash.md#list)<`T`\>\> |

#### Returns

`T`[][]

**`See`**

\_.unzipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1803

---

### update

▸ **update**(`object`, `path`, `updater`): `any`

This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith
to customize path creation. The updater is invoked with one argument: (value).

#### Parameters

| Name      | Type                                                | Description                                |
| :-------- | :-------------------------------------------------- | :----------------------------------------- |
| `object`  | `object`                                            | The object to modify.                      |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) | The path of the property to set.           |
| `updater` | (`value`: `any`) => `any`                           | The function to produce the updated value. |

#### Returns

`any`

Returns object.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2427

---

### upperCase

▸ **upperCase**(`string?`): `string`

Converts `string`, as space separated words, to upper case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the upper cased string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:725

---

### upperFirst

▸ **upperFirst**(`string?`): `string`

Converts the first character of `string` to upper case.

#### Parameters

| Name      | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `string?` | `string` | The string to convert. |

#### Returns

`string`

Returns the converted string.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:747

---

### values

▸ **values**<`T`\>(`object`): `T`[]

Creates an array of the own enumerable property values of object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                                                                                                                         | Description          |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| `object` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> \| [`List`](../modules/lodash.md#list)<`T`\> | The object to query. |

#### Returns

`T`[]

Returns an array of property values.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2497

▸ **values**<`T`\>(`object`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `object` | `undefined` \| `null` \| `T` |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.values

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2501

▸ **values**(`object`): `any`[]

#### Parameters

| Name     | Type  |
| :------- | :---- |
| `object` | `any` |

#### Returns

`any`[]

**`See`**

\_.values

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2505

---

### valuesIn

▸ **valuesIn**<`T`\>(`object`): `T`[]

Creates an array of the own and inherited enumerable property values of object.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                                                                                                                         | Description          |
| :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------- |
| `object` | `undefined` \| `null` \| [`Dictionary`](lodash.Dictionary.md)<`T`\> \| [`NumericDictionary`](lodash.NumericDictionary.md)<`T`\> \| [`List`](../modules/lodash.md#list)<`T`\> | The object to query. |

#### Returns

`T`[]

Returns the array of property values.

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2544

▸ **valuesIn**<`T`\>(`object`): `T`[keyof `T`][]

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name     | Type                         |
| :------- | :--------------------------- |
| `object` | `undefined` \| `null` \| `T` |

#### Returns

`T`[keyof `T`][]

**`See`**

\_.valuesIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2548

---

### without

▸ **without**<`T`\>(`array`, `...values`): `T`[]

Creates an array excluding all provided values using SameValueZero for equality comparisons.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                               | Description            |
| :---------- | :----------------------------------------------------------------- | :--------------------- |
| `array`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> | The array to filter.   |
| `...values` | `T`[]                                                              | The values to exclude. |

#### Returns

`T`[]

Returns the new array of filtered values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1833

---

### words

▸ **words**(`string?`, `pattern?`): `string`[]

Splits `string` into an array of its words.

#### Parameters

| Name       | Type                 | Description                 |
| :--------- | :------------------- | :-------------------------- |
| `string?`  | `string`             | The string to inspect.      |
| `pattern?` | `string` \| `RegExp` | The pattern to match words. |

#### Returns

`string`[]

Returns the words of `string`.

#### Defined in

node_modules/@types/lodash/common/string.d.ts:770

▸ **words**(`string`, `index`, `guard`): `string`[]

#### Parameters

| Name     | Type                 |
| :------- | :------------------- |
| `string` | `string`             |
| `index`  | `string` \| `number` |
| `guard`  | `object`             |

#### Returns

`string`[]

**`See`**

\_.words

#### Defined in

node_modules/@types/lodash/common/string.d.ts:774

---

### wrap

▸ **wrap**<`T`, `TArgs`, `TResult`\>(`value`, `wrapper`): (...`args`: `TArgs`[]) => `TResult`

Creates a function that provides value to the wrapper function as its first argument. Any additional
arguments provided to the function are appended to those provided to the wrapper function. The
wrapper is invoked with the this binding of the created function.

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TArgs`   |
| `TResult` |

#### Parameters

| Name      | Type                                              | Description           |
| :-------- | :------------------------------------------------ | :-------------------- |
| `value`   | `T`                                               | The value to wrap.    |
| `wrapper` | (`value`: `T`, ...`args`: `TArgs`[]) => `TResult` | The wrapper function. |

#### Returns

`fn`

Returns the new function.

▸ (`...args`): `TResult`

Creates a function that provides value to the wrapper function as its first argument. Any additional
arguments provided to the function are appended to those provided to the wrapper function. The
wrapper is invoked with the this binding of the created function.

##### Parameters

| Name      | Type      |
| :-------- | :-------- |
| `...args` | `TArgs`[] |

##### Returns

`TResult`

Returns the new function.

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1432

---

### xor

▸ **xor**<`T`\>(`...arrays`): `T`[]

Creates an array of unique values that is the symmetric difference of the provided arrays.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                   | Description            |
| :---------- | :--------------------------------------------------------------------- | :--------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] | The arrays to inspect. |

#### Returns

`T`[]

Returns the new array of values.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1854

---

### zip

▸ **zip**<`T1`, `T2`\>(`arrays1`, `arrays2`): [`undefined` \| `T1`, `undefined` \| `T2`][]

Creates an array of grouped elements, the first of which contains the first elements of the given
arrays, the second of which contains the second elements of the given arrays, and so on.

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `arrays1` | [`List`](../modules/lodash.md#list)<`T1`\> |
| `arrays2` | [`List`](../modules/lodash.md#list)<`T2`\> |

#### Returns

[`undefined` \| `T1`, `undefined` \| `T2`][]

Returns the new array of grouped elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1973

▸ **zip**<`T1`, `T2`, `T3`\>(`arrays1`, `arrays2`, `arrays3`): [`undefined` \| `T1`, `undefined` \|
`T2`, `undefined` \| `T3`][]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `arrays1` | [`List`](../modules/lodash.md#list)<`T1`\> |
| `arrays2` | [`List`](../modules/lodash.md#list)<`T2`\> |
| `arrays3` | [`List`](../modules/lodash.md#list)<`T3`\> |

#### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`][]

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1977

▸ **zip**<`T1`, `T2`, `T3`, `T4`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`): [`undefined` \|
`T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`][]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `arrays1` | [`List`](../modules/lodash.md#list)<`T1`\> |
| `arrays2` | [`List`](../modules/lodash.md#list)<`T2`\> |
| `arrays3` | [`List`](../modules/lodash.md#list)<`T3`\> |
| `arrays4` | [`List`](../modules/lodash.md#list)<`T4`\> |

#### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`][]

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1981

▸ **zip**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`, `arrays5`):
[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`, `undefined` \|
`T5`][]

#### Type parameters

| Name |
| :--- |
| `T1` |
| `T2` |
| `T3` |
| `T4` |
| `T5` |

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `arrays1` | [`List`](../modules/lodash.md#list)<`T1`\> |
| `arrays2` | [`List`](../modules/lodash.md#list)<`T2`\> |
| `arrays3` | [`List`](../modules/lodash.md#list)<`T3`\> |
| `arrays4` | [`List`](../modules/lodash.md#list)<`T4`\> |
| `arrays5` | [`List`](../modules/lodash.md#list)<`T5`\> |

#### Returns

[`undefined` \| `T1`, `undefined` \| `T2`, `undefined` \| `T3`, `undefined` \| `T4`, `undefined` \|
`T5`][]

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1985

▸ **zip**<`T`\>(`...arrays`): (`undefined` \| `T`)[][]

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

(`undefined` \| `T`)[][]

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1989

---

### zipObject

▸ **zipObject**<`T`\>(`props`, `values`): [`Dictionary`](lodash.Dictionary.md)<`T`\>

This method is like \_.fromPairs except that it accepts two arrays, one of property identifiers and
one of corresponding values.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name     | Type                                                                                      | Description          |
| :------- | :---------------------------------------------------------------------------------------- | :------------------- |
| `props`  | [`List`](../modules/lodash.md#list)<[`PropertyName`](../modules/lodash.md#propertyname)\> | The property names.  |
| `values` | [`List`](../modules/lodash.md#list)<`T`\>                                                 | The property values. |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`T`\>

Returns the new object.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2020

▸ **zipObject**(`props?`): [`Dictionary`](lodash.Dictionary.md)<`undefined`\>

#### Parameters

| Name     | Type                                                                                      |
| :------- | :---------------------------------------------------------------------------------------- |
| `props?` | [`List`](../modules/lodash.md#list)<[`PropertyName`](../modules/lodash.md#propertyname)\> |

#### Returns

[`Dictionary`](lodash.Dictionary.md)<`undefined`\>

**`See`**

\_.zipObject

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2024

---

### zipObjectDeep

▸ **zipObjectDeep**(`paths?`, `values?`): `object`

This method is like \_.zipObject except that it supports property paths.

#### Parameters

| Name      | Type                                                                                      | Description          |
| :-------- | :---------------------------------------------------------------------------------------- | :------------------- |
| `paths?`  | [`List`](../modules/lodash.md#list)<[`PropertyPath`](../modules/lodash.md#propertypath)\> | The property names.  |
| `values?` | [`List`](../modules/lodash.md#list)<`any`\>                                               | The property values. |

#### Returns

`object`

Returns the new object.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2054

---

### zipWith

▸ **zipWith**<`T`, `TResult`\>(`arrays`, `iteratee`): `TResult`[]

This method is like \_.zip except that it accepts an iteratee to specify how grouped values should
be combined. The iteratee is invoked with four arguments: (accumulator, value, index, group).

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name       | Type                                      | Description                             |
| :--------- | :---------------------------------------- | :-------------------------------------- |
| `arrays`   | [`List`](../modules/lodash.md#list)<`T`\> | The arrays to process.                  |
| `iteratee` | (`value1`: `T`) => `TResult`              | The function to combine grouped values. |

#### Returns

`TResult`[]

Returns the new array of grouped elements.

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2077

▸ **zipWith**<`T1`, `T2`, `TResult`\>(`arrays1`, `arrays2`, `iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T1`      |
| `T2`      |
| `TResult` |

#### Parameters

| Name       | Type                                          |
| :--------- | :-------------------------------------------- |
| `arrays1`  | [`List`](../modules/lodash.md#list)<`T1`\>    |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>    |
| `iteratee` | (`value1`: `T1`, `value2`: `T2`) => `TResult` |

#### Returns

`TResult`[]

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2081

▸ **zipWith**<`T1`, `T2`, `T3`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `iteratee`):
`TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T1`      |
| `T2`      |
| `T3`      |
| `TResult` |

#### Parameters

| Name       | Type                                                          |
| :--------- | :------------------------------------------------------------ |
| `arrays1`  | [`List`](../modules/lodash.md#list)<`T1`\>                    |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>                    |
| `arrays3`  | [`List`](../modules/lodash.md#list)<`T3`\>                    |
| `iteratee` | (`value1`: `T1`, `value2`: `T2`, `value3`: `T3`) => `TResult` |

#### Returns

`TResult`[]

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2085

▸ **zipWith**<`T1`, `T2`, `T3`, `T4`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
`iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T1`      |
| `T2`      |
| `T3`      |
| `T4`      |
| `TResult` |

#### Parameters

| Name       | Type                                                                          |
| :--------- | :---------------------------------------------------------------------------- |
| `arrays1`  | [`List`](../modules/lodash.md#list)<`T1`\>                                    |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>                                    |
| `arrays3`  | [`List`](../modules/lodash.md#list)<`T3`\>                                    |
| `arrays4`  | [`List`](../modules/lodash.md#list)<`T4`\>                                    |
| `iteratee` | (`value1`: `T1`, `value2`: `T2`, `value3`: `T3`, `value4`: `T4`) => `TResult` |

#### Returns

`TResult`[]

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2089

▸ **zipWith**<`T1`, `T2`, `T3`, `T4`, `T5`, `TResult`\>(`arrays1`, `arrays2`, `arrays3`, `arrays4`,
`arrays5`, `iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T1`      |
| `T2`      |
| `T3`      |
| `T4`      |
| `T5`      |
| `TResult` |

#### Parameters

| Name       | Type                                                                                          |
| :--------- | :-------------------------------------------------------------------------------------------- |
| `arrays1`  | [`List`](../modules/lodash.md#list)<`T1`\>                                                    |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>                                                    |
| `arrays3`  | [`List`](../modules/lodash.md#list)<`T3`\>                                                    |
| `arrays4`  | [`List`](../modules/lodash.md#list)<`T4`\>                                                    |
| `arrays5`  | [`List`](../modules/lodash.md#list)<`T5`\>                                                    |
| `iteratee` | (`value1`: `T1`, `value2`: `T2`, `value3`: `T3`, `value4`: `T4`, `value5`: `T5`) => `TResult` |

#### Returns

`TResult`[]

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2093

▸ **zipWith**<`T`, `TResult`\>(`...iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `T`       |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                       |
| :------------ | :--------------------------------------------------------------------------------------------------------- |
| `...iteratee` | (`undefined` \| `null` \| (...`group`: `T`[]) => `TResult` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

`TResult`[]

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2097

---

## Util Methods

### cond

▸ **cond**<`R`\>(`pairs`): () => `R`

Creates a function that iterates over `pairs` and invokes the corresponding function of the first
predicate to return truthy. The predicate-function pairs are invoked with the `this` binding and
arguments of the created function.

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name    | Type                                                              | Description                   |
| :------ | :---------------------------------------------------------------- | :---------------------------- |
| `pairs` | [`CondPairNullary`](../modules/lodash.md#condpairnullary)<`R`\>[] | The predicate-function pairs. |

#### Returns

`fn`

Returns the new composite function.

▸ (): `R`

Creates a function that iterates over `pairs` and invokes the corresponding function of the first
predicate to return truthy. The predicate-function pairs are invoked with the `this` binding and
arguments of the created function.

##### Returns

`R`

Returns the new composite function.

**`Since`**

4.0.0

**`Category`**

Util

**`Example`**

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

**`Since`**

4.0.0

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:82

▸ **cond**<`T`, `R`\>(`pairs`): (`Target`: `T`) => `R`

#### Type parameters

| Name |
| :--- |
| `T`  |
| `R`  |

#### Parameters

| Name    | Type                                                               |
| :------ | :----------------------------------------------------------------- |
| `pairs` | [`CondPairUnary`](../modules/lodash.md#condpairunary)<`T`, `R`\>[] |

#### Returns

`fn`

▸ (`Target`): `R`

##### Parameters

| Name     | Type |
| :------- | :--- |
| `Target` | `T`  |

##### Returns

`R`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:83

---

### iteratee

▸ **iteratee**<`TFunction`\>(`func?`): `TFunction`

Creates a function that invokes `func` with the arguments of the created function. If `func` is a
property name the created callback returns the property value for a given element. If `func` is an
object the created callback returns `true` for elements that contain the equivalent object
properties, otherwise it returns `false`.

#### Type parameters

| Name        | Type                                  |
| :---------- | :------------------------------------ |
| `TFunction` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name    | Type        | Description                         |
| :------ | :---------- | :---------------------------------- |
| `func?` | `TFunction` | The value to convert to a callback. |

#### Returns

`TFunction`

Returns the callback.

**`Example`**

```ts
var users = [
  {user: 'barney', age: 36},
  {user: 'fred', age: 40},
];

// create custom iteratee shorthands
_.iteratee = _.wrap(_.iteratee, function (callback, func) {
  var p = /^(\S+)\s*([<>])\s*(\S+)$/.exec(func);
  return !p
    ? callback(func)
    : function (object) {
        return p[2] == '>' ? object[p[1]] > p[3] : object[p[1]] < p[3];
      };
});

_.filter(users, 'age > 36');
// => [{ 'user': 'fred', 'age': 40 }]
```

#### Defined in

node_modules/@types/lodash/common/util.d.ts:424

▸ **iteratee**(`func`): (...`args`: `any`[]) => `any`

#### Parameters

| Name   | Type                                         |
| :----- | :------------------------------------------- |
| `func` | `string` \| `number` \| `symbol` \| `object` |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

##### Returns

`any`

**`See`**

\_.iteratee

**`See`**

\_.iteratee

#### Defined in

node_modules/@types/lodash/common/util.d.ts:428

---

### rangeRight

▸ **rangeRight**(`start`, `end?`, `step?`): `number`[]

This method is like `_.range` except that it populates values in descending order.

#### Parameters

| Name    | Type     | Description                             |
| :------ | :------- | :-------------------------------------- |
| `start` | `number` | The start of the range.                 |
| `end?`  | `number` | The end of the range.                   |
| `step?` | `number` | The value to increment or decrement by. |

#### Returns

`number`[]

Returns the new array of numbers.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:934

▸ **rangeRight**(`end`, `index`, `guard`): `number`[]

#### Parameters

| Name    | Type                 |
| :------ | :------------------- |
| `end`   | `number`             |
| `index` | `string` \| `number` |
| `guard` | `object`             |

#### Returns

`number`[]

**`See`**

\_.rangeRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:938

---

### toPath

▸ **toPath**(`value`): `string`[]

Converts `value` to a property path array.

#### Parameters

| Name    | Type  | Description           |
| :------ | :---- | :-------------------- |
| `value` | `any` | The value to convert. |

#### Returns

`string`[]

Returns the new property path array.

**`Example`**

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1134
