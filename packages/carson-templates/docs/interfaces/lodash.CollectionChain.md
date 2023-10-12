# Interface: CollectionChain<T\>

[lodash](../modules/lodash.md).CollectionChain

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`T`[]\>

  ↳ **`CollectionChain`**

## Table of contents

### Properties

- [each](lodash.CollectionChain.md#each)
- [eachRight](lodash.CollectionChain.md#eachright)

### Methods

- [add](lodash.CollectionChain.md#add)
- [at](lodash.CollectionChain.md#at)
- [attempt](lodash.CollectionChain.md#attempt)
- [bind](lodash.CollectionChain.md#bind)
- [bindAll](lodash.CollectionChain.md#bindall)
- [bindKey](lodash.CollectionChain.md#bindkey)
- [camelCase](lodash.CollectionChain.md#camelcase)
- [capitalize](lodash.CollectionChain.md#capitalize)
- [castArray](lodash.CollectionChain.md#castarray)
- [ceil](lodash.CollectionChain.md#ceil)
- [chain](lodash.CollectionChain.md#chain)
- [chunk](lodash.CollectionChain.md#chunk)
- [clamp](lodash.CollectionChain.md#clamp)
- [clone](lodash.CollectionChain.md#clone)
- [cloneDeep](lodash.CollectionChain.md#clonedeep)
- [cloneDeepWith](lodash.CollectionChain.md#clonedeepwith)
- [cloneWith](lodash.CollectionChain.md#clonewith)
- [commit](lodash.CollectionChain.md#commit)
- [compact](lodash.CollectionChain.md#compact)
- [concat](lodash.CollectionChain.md#concat)
- [conforms](lodash.CollectionChain.md#conforms)
- [conformsTo](lodash.CollectionChain.md#conformsto)
- [constant](lodash.CollectionChain.md#constant)
- [countBy](lodash.CollectionChain.md#countby)
- [deburr](lodash.CollectionChain.md#deburr)
- [defaultTo](lodash.CollectionChain.md#defaultto)
- [defer](lodash.CollectionChain.md#defer)
- [delay](lodash.CollectionChain.md#delay)
- [difference](lodash.CollectionChain.md#difference)
- [differenceBy](lodash.CollectionChain.md#differenceby)
- [differenceWith](lodash.CollectionChain.md#differencewith)
- [divide](lodash.CollectionChain.md#divide)
- [drop](lodash.CollectionChain.md#drop)
- [dropRight](lodash.CollectionChain.md#dropright)
- [dropRightWhile](lodash.CollectionChain.md#droprightwhile)
- [dropWhile](lodash.CollectionChain.md#dropwhile)
- [endsWith](lodash.CollectionChain.md#endswith)
- [entries](lodash.CollectionChain.md#entries)
- [entriesIn](lodash.CollectionChain.md#entriesin)
- [eq](lodash.CollectionChain.md#eq)
- [escape](lodash.CollectionChain.md#escape)
- [escapeRegExp](lodash.CollectionChain.md#escaperegexp)
- [every](lodash.CollectionChain.md#every)
- [fill](lodash.CollectionChain.md#fill)
- [filter](lodash.CollectionChain.md#filter)
- [find](lodash.CollectionChain.md#find)
- [findIndex](lodash.CollectionChain.md#findindex)
- [findKey](lodash.CollectionChain.md#findkey)
- [findLast](lodash.CollectionChain.md#findlast)
- [findLastIndex](lodash.CollectionChain.md#findlastindex)
- [findLastKey](lodash.CollectionChain.md#findlastkey)
- [first](lodash.CollectionChain.md#first)
- [flatMap](lodash.CollectionChain.md#flatmap)
- [flatMapDeep](lodash.CollectionChain.md#flatmapdeep)
- [flatMapDepth](lodash.CollectionChain.md#flatmapdepth)
- [flatten](lodash.CollectionChain.md#flatten)
- [flattenDeep](lodash.CollectionChain.md#flattendeep)
- [flattenDepth](lodash.CollectionChain.md#flattendepth)
- [floor](lodash.CollectionChain.md#floor)
- [forEach](lodash.CollectionChain.md#foreach)
- [forEachRight](lodash.CollectionChain.md#foreachright)
- [forIn](lodash.CollectionChain.md#forin)
- [forInRight](lodash.CollectionChain.md#forinright)
- [forOwn](lodash.CollectionChain.md#forown)
- [forOwnRight](lodash.CollectionChain.md#forownright)
- [fromPairs](lodash.CollectionChain.md#frompairs)
- [functions](lodash.CollectionChain.md#functions)
- [functionsIn](lodash.CollectionChain.md#functionsin)
- [get](lodash.CollectionChain.md#get)
- [groupBy](lodash.CollectionChain.md#groupby)
- [gt](lodash.CollectionChain.md#gt)
- [gte](lodash.CollectionChain.md#gte)
- [has](lodash.CollectionChain.md#has)
- [hasIn](lodash.CollectionChain.md#hasin)
- [head](lodash.CollectionChain.md#head)
- [identity](lodash.CollectionChain.md#identity)
- [inRange](lodash.CollectionChain.md#inrange)
- [includes](lodash.CollectionChain.md#includes)
- [indexOf](lodash.CollectionChain.md#indexof)
- [initial](lodash.CollectionChain.md#initial)
- [intersection](lodash.CollectionChain.md#intersection)
- [intersectionBy](lodash.CollectionChain.md#intersectionby)
- [intersectionWith](lodash.CollectionChain.md#intersectionwith)
- [invert](lodash.CollectionChain.md#invert)
- [invertBy](lodash.CollectionChain.md#invertby)
- [invoke](lodash.CollectionChain.md#invoke)
- [invokeMap](lodash.CollectionChain.md#invokemap)
- [isArguments](lodash.CollectionChain.md#isarguments)
- [isArray](lodash.CollectionChain.md#isarray)
- [isArrayBuffer](lodash.CollectionChain.md#isarraybuffer)
- [isArrayLike](lodash.CollectionChain.md#isarraylike)
- [isArrayLikeObject](lodash.CollectionChain.md#isarraylikeobject)
- [isBoolean](lodash.CollectionChain.md#isboolean)
- [isBuffer](lodash.CollectionChain.md#isbuffer)
- [isDate](lodash.CollectionChain.md#isdate)
- [isElement](lodash.CollectionChain.md#iselement)
- [isEmpty](lodash.CollectionChain.md#isempty)
- [isEqual](lodash.CollectionChain.md#isequal)
- [isEqualWith](lodash.CollectionChain.md#isequalwith)
- [isError](lodash.CollectionChain.md#iserror)
- [isFinite](lodash.CollectionChain.md#isfinite)
- [isFunction](lodash.CollectionChain.md#isfunction)
- [isInteger](lodash.CollectionChain.md#isinteger)
- [isLength](lodash.CollectionChain.md#islength)
- [isMap](lodash.CollectionChain.md#ismap)
- [isMatch](lodash.CollectionChain.md#ismatch)
- [isMatchWith](lodash.CollectionChain.md#ismatchwith)
- [isNaN](lodash.CollectionChain.md#isnan)
- [isNative](lodash.CollectionChain.md#isnative)
- [isNil](lodash.CollectionChain.md#isnil)
- [isNull](lodash.CollectionChain.md#isnull)
- [isNumber](lodash.CollectionChain.md#isnumber)
- [isObject](lodash.CollectionChain.md#isobject)
- [isObjectLike](lodash.CollectionChain.md#isobjectlike)
- [isPlainObject](lodash.CollectionChain.md#isplainobject)
- [isRegExp](lodash.CollectionChain.md#isregexp)
- [isSafeInteger](lodash.CollectionChain.md#issafeinteger)
- [isSet](lodash.CollectionChain.md#isset)
- [isString](lodash.CollectionChain.md#isstring)
- [isSymbol](lodash.CollectionChain.md#issymbol)
- [isTypedArray](lodash.CollectionChain.md#istypedarray)
- [isUndefined](lodash.CollectionChain.md#isundefined)
- [isWeakMap](lodash.CollectionChain.md#isweakmap)
- [isWeakSet](lodash.CollectionChain.md#isweakset)
- [iteratee](lodash.CollectionChain.md#iteratee)
- [join](lodash.CollectionChain.md#join)
- [kebabCase](lodash.CollectionChain.md#kebabcase)
- [keyBy](lodash.CollectionChain.md#keyby)
- [keys](lodash.CollectionChain.md#keys)
- [keysIn](lodash.CollectionChain.md#keysin)
- [last](lodash.CollectionChain.md#last)
- [lastIndexOf](lodash.CollectionChain.md#lastindexof)
- [lowerCase](lodash.CollectionChain.md#lowercase)
- [lowerFirst](lodash.CollectionChain.md#lowerfirst)
- [lt](lodash.CollectionChain.md#lt)
- [lte](lodash.CollectionChain.md#lte)
- [map](lodash.CollectionChain.md#map)
- [mapKeys](lodash.CollectionChain.md#mapkeys)
- [mapValues](lodash.CollectionChain.md#mapvalues)
- [matches](lodash.CollectionChain.md#matches)
- [matchesProperty](lodash.CollectionChain.md#matchesproperty)
- [max](lodash.CollectionChain.md#max)
- [maxBy](lodash.CollectionChain.md#maxby)
- [mean](lodash.CollectionChain.md#mean)
- [meanBy](lodash.CollectionChain.md#meanby)
- [method](lodash.CollectionChain.md#method)
- [methodOf](lodash.CollectionChain.md#methodof)
- [min](lodash.CollectionChain.md#min)
- [minBy](lodash.CollectionChain.md#minby)
- [mixin](lodash.CollectionChain.md#mixin)
- [multiply](lodash.CollectionChain.md#multiply)
- [noConflict](lodash.CollectionChain.md#noconflict)
- [noop](lodash.CollectionChain.md#noop)
- [now](lodash.CollectionChain.md#now)
- [nth](lodash.CollectionChain.md#nth)
- [nthArg](lodash.CollectionChain.md#ntharg)
- [omit](lodash.CollectionChain.md#omit)
- [omitBy](lodash.CollectionChain.md#omitby)
- [orderBy](lodash.CollectionChain.md#orderby)
- [over](lodash.CollectionChain.md#over)
- [overEvery](lodash.CollectionChain.md#overevery)
- [overSome](lodash.CollectionChain.md#oversome)
- [pad](lodash.CollectionChain.md#pad)
- [padEnd](lodash.CollectionChain.md#padend)
- [padStart](lodash.CollectionChain.md#padstart)
- [parseInt](lodash.CollectionChain.md#parseint)
- [partition](lodash.CollectionChain.md#partition)
- [pickBy](lodash.CollectionChain.md#pickby)
- [plant](lodash.CollectionChain.md#plant)
- [pop](lodash.CollectionChain.md#pop)
- [property](lodash.CollectionChain.md#property)
- [propertyOf](lodash.CollectionChain.md#propertyof)
- [pull](lodash.CollectionChain.md#pull)
- [pullAll](lodash.CollectionChain.md#pullall)
- [pullAllBy](lodash.CollectionChain.md#pullallby)
- [pullAllWith](lodash.CollectionChain.md#pullallwith)
- [pullAt](lodash.CollectionChain.md#pullat)
- [push](lodash.CollectionChain.md#push)
- [random](lodash.CollectionChain.md#random)
- [range](lodash.CollectionChain.md#range)
- [rangeRight](lodash.CollectionChain.md#rangeright)
- [reduce](lodash.CollectionChain.md#reduce)
- [reduceRight](lodash.CollectionChain.md#reduceright)
- [reject](lodash.CollectionChain.md#reject)
- [remove](lodash.CollectionChain.md#remove)
- [repeat](lodash.CollectionChain.md#repeat)
- [replace](lodash.CollectionChain.md#replace)
- [result](lodash.CollectionChain.md#result)
- [reverse](lodash.CollectionChain.md#reverse)
- [round](lodash.CollectionChain.md#round)
- [sample](lodash.CollectionChain.md#sample)
- [sampleSize](lodash.CollectionChain.md#samplesize)
- [set](lodash.CollectionChain.md#set)
- [setWith](lodash.CollectionChain.md#setwith)
- [shift](lodash.CollectionChain.md#shift)
- [shuffle](lodash.CollectionChain.md#shuffle)
- [size](lodash.CollectionChain.md#size)
- [slice](lodash.CollectionChain.md#slice)
- [snakeCase](lodash.CollectionChain.md#snakecase)
- [some](lodash.CollectionChain.md#some)
- [sort](lodash.CollectionChain.md#sort)
- [sortBy](lodash.CollectionChain.md#sortby)
- [sortedIndex](lodash.CollectionChain.md#sortedindex)
- [sortedIndexBy](lodash.CollectionChain.md#sortedindexby)
- [sortedIndexOf](lodash.CollectionChain.md#sortedindexof)
- [sortedLastIndex](lodash.CollectionChain.md#sortedlastindex)
- [sortedLastIndexBy](lodash.CollectionChain.md#sortedlastindexby)
- [sortedLastIndexOf](lodash.CollectionChain.md#sortedlastindexof)
- [sortedUniq](lodash.CollectionChain.md#sorteduniq)
- [sortedUniqBy](lodash.CollectionChain.md#sorteduniqby)
- [splice](lodash.CollectionChain.md#splice)
- [split](lodash.CollectionChain.md#split)
- [startCase](lodash.CollectionChain.md#startcase)
- [startsWith](lodash.CollectionChain.md#startswith)
- [stubArray](lodash.CollectionChain.md#stubarray)
- [stubFalse](lodash.CollectionChain.md#stubfalse)
- [stubObject](lodash.CollectionChain.md#stubobject)
- [stubString](lodash.CollectionChain.md#stubstring)
- [stubTrue](lodash.CollectionChain.md#stubtrue)
- [subtract](lodash.CollectionChain.md#subtract)
- [sum](lodash.CollectionChain.md#sum)
- [sumBy](lodash.CollectionChain.md#sumby)
- [tail](lodash.CollectionChain.md#tail)
- [take](lodash.CollectionChain.md#take)
- [takeRight](lodash.CollectionChain.md#takeright)
- [takeRightWhile](lodash.CollectionChain.md#takerightwhile)
- [takeWhile](lodash.CollectionChain.md#takewhile)
- [tap](lodash.CollectionChain.md#tap)
- [template](lodash.CollectionChain.md#template)
- [thru](lodash.CollectionChain.md#thru)
- [times](lodash.CollectionChain.md#times)
- [toArray](lodash.CollectionChain.md#toarray)
- [toFinite](lodash.CollectionChain.md#tofinite)
- [toInteger](lodash.CollectionChain.md#tointeger)
- [toJSON](lodash.CollectionChain.md#tojson)
- [toLength](lodash.CollectionChain.md#tolength)
- [toLower](lodash.CollectionChain.md#tolower)
- [toNumber](lodash.CollectionChain.md#tonumber)
- [toPairs](lodash.CollectionChain.md#topairs)
- [toPairsIn](lodash.CollectionChain.md#topairsin)
- [toPath](lodash.CollectionChain.md#topath)
- [toPlainObject](lodash.CollectionChain.md#toplainobject)
- [toSafeInteger](lodash.CollectionChain.md#tosafeinteger)
- [toUpper](lodash.CollectionChain.md#toupper)
- [transform](lodash.CollectionChain.md#transform)
- [trim](lodash.CollectionChain.md#trim)
- [trimEnd](lodash.CollectionChain.md#trimend)
- [trimStart](lodash.CollectionChain.md#trimstart)
- [truncate](lodash.CollectionChain.md#truncate)
- [unescape](lodash.CollectionChain.md#unescape)
- [union](lodash.CollectionChain.md#union)
- [unionBy](lodash.CollectionChain.md#unionby)
- [unionWith](lodash.CollectionChain.md#unionwith)
- [uniq](lodash.CollectionChain.md#uniq)
- [uniqBy](lodash.CollectionChain.md#uniqby)
- [uniqWith](lodash.CollectionChain.md#uniqwith)
- [uniqueId](lodash.CollectionChain.md#uniqueid)
- [unset](lodash.CollectionChain.md#unset)
- [unshift](lodash.CollectionChain.md#unshift)
- [unzip](lodash.CollectionChain.md#unzip)
- [unzipWith](lodash.CollectionChain.md#unzipwith)
- [update](lodash.CollectionChain.md#update)
- [upperCase](lodash.CollectionChain.md#uppercase)
- [upperFirst](lodash.CollectionChain.md#upperfirst)
- [value](lodash.CollectionChain.md#value)
- [valueOf](lodash.CollectionChain.md#valueof)
- [without](lodash.CollectionChain.md#without)
- [words](lodash.CollectionChain.md#words)
- [wrap](lodash.CollectionChain.md#wrap)
- [xor](lodash.CollectionChain.md#xor)
- [xorBy](lodash.CollectionChain.md#xorby)
- [xorWith](lodash.CollectionChain.md#xorwith)
- [zip](lodash.CollectionChain.md#zip)
- [zipObject](lodash.CollectionChain.md#zipobject)
- [zipObjectDeep](lodash.CollectionChain.md#zipobjectdeep)
- [zipWith](lodash.CollectionChain.md#zipwith)

## Properties

### each

• **each**: (`iteratee?`: [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) =>
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type declaration

▸ (`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

##### Parameters

| Name        | Type                                                             |
| :---------- | :--------------------------------------------------------------- |
| `iteratee?` | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.each

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:101

---

### eachRight

• **eachRight**: (`iteratee?`: [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\>) =>
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type declaration

▸ (`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

##### Parameters

| Name        | Type                                                             |
| :---------- | :--------------------------------------------------------------- |
| `iteratee?` | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

##### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.eachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:149

## Methods

### add

▸ **add**(`addend`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `addend` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.add

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[add](lodash.LoDashExplicitWrapper.md#add)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:23

---

### at

▸ **at**(`...props`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `...props` | [`PropertyPath`](../modules/lodash.md#propertypath)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.at

#### Defined in

node_modules/@types/lodash/common/object.d.ts:445

---

### attempt

▸ **attempt**<`TResult`\>(`...args`): [`ObjectChain`](lodash.ObjectChain.md)<`Error`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`Error`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.attempt

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[attempt](lodash.LoDashExplicitWrapper.md#attempt)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:23

---

### bind

▸ **bind**(`thisArg`, `...partials`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`any`[]) => `any`\>

#### Parameters

| Name          | Type    |
| :------------ | :------ |
| `thisArg`     | `any`   |
| `...partials` | `any`[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

**`See`**

\_.bind

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[bind](lodash.LoDashExplicitWrapper.md#bind)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:105

---

### bindAll

▸ **bindAll**(`...methodNames`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `...methodNames` | [`Many`](../modules/lodash.md#many)<`string`\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.bindAll

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[bindAll](lodash.LoDashExplicitWrapper.md#bindall)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:51

---

### bindKey

▸ **bindKey**(`key`, `...partials`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[])
=> `any`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `key`         | `string` |
| `...partials` | `any`[]  |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

**`See`**

\_.bindKey

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[bindKey](lodash.LoDashExplicitWrapper.md#bindkey)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:139

---

### camelCase

▸ **camelCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.camelCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[camelCase](lodash.LoDashExplicitWrapper.md#camelcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:22

---

### capitalize

▸ **capitalize**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.capitalize

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[capitalize](lodash.LoDashExplicitWrapper.md#capitalize)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:44

---

### castArray

▸ **castArray**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.castArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:49

---

### ceil

▸ **ceil**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.ceil

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[ceil](lodash.LoDashExplicitWrapper.md#ceil)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:46

---

### chain

▸ **chain**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.chain

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[chain](lodash.LoDashExplicitWrapper.md#chain)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:75

---

### chunk

▸ **chunk**(`size?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`[]\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `size?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`[]\>

**`See`**

\_.chunk

#### Defined in

node_modules/@types/lodash/common/array.d.ts:24

---

### clamp

▸ **clamp**(`lower`, `upper`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `lower` | `number` |
| `upper` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.clamp

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[clamp](lodash.LoDashExplicitWrapper.md#clamp)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:54

▸ **clamp**(`upper`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `upper` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.clamp

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[clamp](lodash.LoDashExplicitWrapper.md#clamp)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:58

---

### clone

▸ **clone**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.clone

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[clone](lodash.LoDashExplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep

▸ **cloneDeep**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.cloneDeep

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneDeep](lodash.LoDashExplicitWrapper.md#clonedeep)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:135

---

### cloneDeepWith

▸ **cloneDeepWith**(`customizer`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Parameters

| Name         | Type                                                                              |
| :----------- | :-------------------------------------------------------------------------------- |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)<`T`[]\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.cloneDeepWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneDeepWith](lodash.LoDashExplicitWrapper.md#clonedeepwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:139

▸ **cloneDeepWith**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.cloneDeepWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneDeepWith](lodash.LoDashExplicitWrapper.md#clonedeepwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:143

---

### cloneWith

▸ **cloneWith**<`TResult`\>(`customizer`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `TResult` | extends `null` \| `string` \| `number` \| `boolean` \| `object` |

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`[], `TResult`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:147

▸ **cloneWith**<`TResult`\>(`customizer`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`[], `undefined` \| `TResult`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:151

▸ **cloneWith**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit

▸ **commit**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.commit

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[commit](lodash.LoDashExplicitWrapper.md#commit)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:88

---

### compact

▸ **compact**():
[`CollectionChain`](lodash.CollectionChain.md)<[`Truthy`](../modules/lodash.md#truthy)<`T`\>\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`Truthy`](../modules/lodash.md#truthy)<`T`\>\>

**`See`**

\_.compact

#### Defined in

node_modules/@types/lodash/common/array.d.ts:49

---

### concat

▸ **concat**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `...values` | [`Many`](../modules/lodash.md#many)<`T`\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.concat

#### Defined in

node_modules/@types/lodash/common/array.d.ts:100

---

### conforms

▸ **conforms**(): [`FunctionChain`](lodash.FunctionChain.md)<(`value`: `T` extends (`arg`: `A`) =>
`any` ? `A` : `any`[]) => `boolean`\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `T` extends (`arg`: `A`) => `any` ? `A` :
`any`[]) => `boolean`\>

**`See`**

\_.conforms

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[conforms](lodash.LoDashExplicitWrapper.md#conforms)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:106

---

### conformsTo

▸ **conformsTo**(`source`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name     | Type                                              |
| :------- | :------------------------------------------------ |
| `source` | `T` extends (`arg`: `A`) => `any` ? `A` : `any`[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.conformsTo

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[conformsTo](lodash.LoDashExplicitWrapper.md#conformsto)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:221

---

### constant

▸ **constant**(): [`FunctionChain`](lodash.FunctionChain.md)<() => `T`[]\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<() => `T`[]\>

**`See`**

\_.constant

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[constant](lodash.LoDashExplicitWrapper.md#constant)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:128

---

### countBy

▸ **countBy**(`iteratee?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`number`\>\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`number`\>\>

**`See`**

\_.countBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:59

---

### deburr

▸ **deburr**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.deburr

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[deburr](lodash.LoDashExplicitWrapper.md#deburr)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:67

---

### defaultTo

▸ **defaultTo**(`defaultValue`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name           | Type  |
| :------------- | :---- |
| `defaultValue` | `T`[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.defaultTo

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[defaultTo](lodash.LoDashExplicitWrapper.md#defaultto)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:161

▸ **defaultTo**<`TDefault`\>(`defaultValue`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>
\| [`ExpChain`](../modules/lodash.md#expchain)<`TDefault`\>

#### Type parameters

| Name       |
| :--------- |
| `TDefault` |

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `defaultValue` | `TDefault` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TDefault`\>

**`See`**

\_.defaultTo

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[defaultTo](lodash.LoDashExplicitWrapper.md#defaultto)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:165

---

### defer

▸ **defer**(`...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.defer

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[defer](lodash.LoDashExplicitWrapper.md#defer)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:475

---

### delay

▸ **delay**(`wait`, `...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `wait`    | `number` |
| `...args` | `any`[]  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.delay

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[delay](lodash.LoDashExplicitWrapper.md#delay)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:498

---

### difference

▸ **difference**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                        |
| :---------- | :------------------------------------------ |
| `...values` | [`List`](../modules/lodash.md#list)<`T`\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.difference

#### Defined in

node_modules/@types/lodash/common/array.d.ts:129

---

### differenceBy

▸ **differenceBy**<`T2`\>(`values1`, `iteratee?`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name        | Type                                                                |
| :---------- | :------------------------------------------------------------------ |
| `values1`   | [`List`](../modules/lodash.md#list)<`T2`\>                          |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T` \| `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:182

▸ **differenceBy**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                                                               |
| :---------- | :----------------------------------------------------------------------------------------------------------------- |
| `...values` | ([`List`](../modules/lodash.md#list)<`unknown`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.differenceBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:186

---

### differenceWith

▸ **differenceWith**<`T2`\>(`values`, `comparator`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name         | Type                                                          |
| :----------- | :------------------------------------------------------------ |
| `values`     | [`List`](../modules/lodash.md#list)<`T2`\>                    |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.differenceWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:233

▸ **differenceWith**<`T2`, `T3`, `T4`\>(`...values`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |
| `T3` |
| `T4` |

#### Parameters

| Name        | Type                                                                                                                    |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| `...values` | ([`List`](../modules/lodash.md#list)<`unknown`\> \| [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `never`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.differenceWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:237

---

### divide

▸ **divide**(`divisor`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `divisor` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.divide

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[divide](lodash.LoDashExplicitWrapper.md#divide)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:69

---

### drop

▸ **drop**(`n?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.drop

#### Defined in

node_modules/@types/lodash/common/array.d.ts:259

---

### dropRight

▸ **dropRight**(`n?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.dropRight

#### Defined in

node_modules/@types/lodash/common/array.d.ts:281

---

### dropRightWhile

▸ **dropRightWhile**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.dropRightWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:304

---

### dropWhile

▸ **dropWhile**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.dropWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:327

---

### endsWith

▸ **endsWith**(`target?`, `position?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.endsWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[endsWith](lodash.LoDashExplicitWrapper.md#endswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:91

---

### entries

▸ **entries**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

**`See`**

\_.entries

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[entries](lodash.LoDashExplicitWrapper.md#entries)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:609

---

### entriesIn

▸ **entriesIn**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

**`See`**

\_.entriesIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[entriesIn](lodash.LoDashExplicitWrapper.md#entriesin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:643

---

### eq

▸ **eq**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.eq

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[eq](lodash.LoDashExplicitWrapper.md#eq)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:266

---

### escape

▸ **escape**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.escape

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[escape](lodash.LoDashExplicitWrapper.md#escape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:124

---

### escapeRegExp

▸ **escapeRegExp**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.escapeRegExp

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[escapeRegExp](lodash.LoDashExplicitWrapper.md#escaperegexp)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:147

---

### every

▸ **every**(`predicate?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.every

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:188

---

### fill

▸ **fill**<`U`\>(`value`, `start?`, `end?`): [`CollectionChain`](lodash.CollectionChain.md)<`T` \|
`U`\>

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `value`  | `U`      |
| `start?` | `number` |
| `end?`   | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T` \| `U`\>

**`See`**

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:365

---

### filter

▸ **filter**<`S`\>(`predicate`): [`CollectionChain`](lodash.CollectionChain.md)<`S`\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name        | Type                                                                             |
| :---------- | :------------------------------------------------------------------------------- |
| `predicate` | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`S`\>

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:265

▸ **filter**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.filter

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:269

---

### find

▸ **find**<`S`\>(`predicate`, `fromIndex?`): [`ExpChain`](../modules/lodash.md#expchain)<`S`\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate`  | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`S`\>

**`See`**

\_.find

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:329

▸ **find**(`predicate?`, `fromIndex?`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.find

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:333

---

### findIndex

▸ **findIndex**(`predicate?`, `fromIndex?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.findIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:389

---

### findKey

▸ **findKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`[]\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findKey

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[findKey](lodash.LoDashExplicitWrapper.md#findkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:822

---

### findLast

▸ **findLast**<`S`\>(`predicate`, `fromIndex?`): [`ExpChain`](../modules/lodash.md#expchain)<`S`\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate`  | [`ListIteratorTypeGuard`](../modules/lodash.md#listiteratortypeguard)<`T`, `S`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`S`\>

**`See`**

\_.findLast

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:392

▸ **findLast**(`predicate?`, `fromIndex?`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.findLast

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:396

---

### findLastIndex

▸ **findLastIndex**(`predicate?`, `fromIndex?`):
[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |
| `fromIndex?` | `number`                                                                         |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.findLastIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:412

---

### findLastKey

▸ **findLastKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

#### Parameters

| Name         | Type                                                            |
| :----------- | :-------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`[]\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findLastKey

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[findLastKey](lodash.LoDashExplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:844

---

### first

▸ **first**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.first

#### Defined in

node_modules/@types/lodash/common/array.d.ts:448

---

### flatMap

▸ **flatMap**<`TResult`\>(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      | Type  |
| :-------- | :---- |
| `TResult` | `any` |

#### Parameters

| Name       | Type                                                                                                                                                              |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iteratee` | [`PropertyName`](../modules/lodash.md#propertyname) \| [`ListIterator`](../modules/lodash.md#listiterator)<`T`, [`Many`](../modules/lodash.md#many)<`TResult`\>\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:502

▸ **flatMap**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

#### Parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `iteratee` | `object` \| [[`PropertyName`](../modules/lodash.md#propertyname), `any`] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:506

▸ **flatMap**(): `T` extends [`Many`](../modules/lodash.md#many)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

`T` extends [`Many`](../modules/lodash.md#many)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flatMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:510

---

### flatMapDeep

▸ **flatMapDeep**<`TResult`\>(`iteratee`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      | Type  |
| :-------- | :---- |
| `TResult` | `any` |

#### Parameters

| Name       | Type                                                                                                                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iteratee` | [`PropertyName`](../modules/lodash.md#propertyname) \| [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:625

▸ **flatMapDeep**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

#### Parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `iteratee` | `object` \| [[`PropertyName`](../modules/lodash.md#propertyname), `any`] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:629

▸ **flatMapDeep**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flatMapDeep

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:633

---

### flatMapDepth

▸ **flatMapDepth**<`TResult`\>(`iteratee`, `depth?`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      | Type  |
| :-------- | :---- |
| `TResult` | `any` |

#### Parameters

| Name       | Type                                                                                                                                                                                                                  |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iteratee` | [`PropertyName`](../modules/lodash.md#propertyname) \| [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult` \| [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`TResult`\>\> |
| `depth?`   | `number`                                                                                                                                                                                                              |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:749

▸ **flatMapDepth**(`iteratee`, `depth?`): [`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

#### Parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `iteratee` | `object` \| [[`PropertyName`](../modules/lodash.md#propertyname), `any`] |
| `depth?`   | `number`                                                                 |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:753

▸ **flatMapDepth**(`depth?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `depth?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flatMapDepth

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:757

---

### flatten

▸ **flatten**(): `T` extends [`Many`](../modules/lodash.md#many)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

`T` extends [`Many`](../modules/lodash.md#many)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flatten

#### Defined in

node_modules/@types/lodash/common/array.d.ts:489

---

### flattenDeep

▸ **flattenDeep**(): `T` extends
[`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<[`Flat`](../modules/lodash.md#flat)<`U`\>\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

`T` extends [`ListOfRecursiveArraysOrValues`](lodash.ListOfRecursiveArraysOrValues.md)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<[`Flat`](../modules/lodash.md#flat)<`U`\>\> :
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flattenDeep

#### Defined in

node_modules/@types/lodash/common/array.d.ts:513

---

### flattenDepth

▸ **flattenDepth**(`depth?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `depth?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.flattenDepth

#### Defined in

node_modules/@types/lodash/common/array.d.ts:535

---

### floor

▸ **floor**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.floor

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[floor](lodash.LoDashExplicitWrapper.md#floor)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:92

---

### forEach

▸ **forEach**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                             |
| :---------- | :--------------------------------------------------------------- |
| `iteratee?` | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:856

---

### forEachRight

▸ **forEachRight**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                             |
| :---------- | :--------------------------------------------------------------- |
| `iteratee?` | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:937

---

### forIn

▸ **forIn**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`[], `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forIn](lodash.LoDashExplicitWrapper.md#forin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:872

---

### forInRight

▸ **forInRight**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`[], `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forInRight

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forInRight](lodash.LoDashExplicitWrapper.md#forinright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:898

---

### forOwn

▸ **forOwn**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`[], `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forOwn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forOwn](lodash.LoDashExplicitWrapper.md#forown)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:926

---

### forOwnRight

▸ **forOwnRight**(`iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`[], `any`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.forOwnRight

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forOwnRight](lodash.LoDashExplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:952

---

### fromPairs

▸ **fromPairs**(): [`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`
extends [[`PropertyName`](../modules/lodash.md#propertyname), `U`] ? `U` : `any`\>\>

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T` extends
[[`PropertyName`](../modules/lodash.md#propertyname), `U`] ? `U` : `any`\>\>

**`See`**

\_.fromPairs

#### Defined in

node_modules/@types/lodash/common/array.d.ts:566

---

### functions

▸ **functions**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.functions

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[functions](lodash.LoDashExplicitWrapper.md#functions)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:986

---

### functionsIn

▸ **functionsIn**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.functionsIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[functionsIn](lodash.LoDashExplicitWrapper.md#functionsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1020

---

### get

▸ **get**(`path`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `path` | `number` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1299

▸ **get**<`TDefault`\>(`path`, `defaultValue`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TDefault`\>

#### Type parameters

| Name       |
| :--------- |
| `TDefault` |

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `path`         | `number`   |
| `defaultValue` | `TDefault` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TDefault`\>

**`See`**

\_.get

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1303

---

### groupBy

▸ **groupBy**(`iteratee?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`[]\>\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`[]\>\>

**`See`**

\_.groupBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:989

---

### gt

▸ **gt**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.gt

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[gt](lodash.LoDashExplicitWrapper.md#gt)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:289

---

### gte

▸ **gte**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.gte

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[gte](lodash.LoDashExplicitWrapper.md#gte)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:312

---

### has

▸ **has**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.has

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[has](lodash.LoDashExplicitWrapper.md#has)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1342

---

### hasIn

▸ **hasIn**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.hasIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[hasIn](lodash.LoDashExplicitWrapper.md#hasin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1380

---

### head

▸ **head**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.head

#### Defined in

node_modules/@types/lodash/common/array.d.ts:607

---

### identity

▸ **identity**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.identity

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[identity](lodash.LoDashExplicitWrapper.md#identity)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:393

---

### inRange

▸ **inRange**(`start`, `end?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end?`  | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.inRange

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[inRange](lodash.LoDashExplicitWrapper.md#inrange)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:83

---

### includes

▸ **includes**(`target`, `fromIndex?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `target`     | `T`      |
| `fromIndex?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.includes

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1037

---

### indexOf

▸ **indexOf**(`value`, `fromIndex?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `value`      | `T`      |
| `fromIndex?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.indexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:642

---

### initial

▸ **initial**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.initial

#### Defined in

node_modules/@types/lodash/common/array.d.ts:663

---

### intersection

▸ **intersection**(`...arrays`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.intersection

#### Defined in

node_modules/@types/lodash/common/array.d.ts:685

---

### intersectionBy

▸ **intersectionBy**<`T2`\>(`values`, `iteratee`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name       | Type                                                                |
| :--------- | :------------------------------------------------------------------ |
| `values`   | [`List`](../modules/lodash.md#list)<`T2`\>                          |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T` \| `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:738

▸ **intersectionBy**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                                                               |
| :---------- | :----------------------------------------------------------------------------------------------------------------- |
| `...values` | ([`List`](../modules/lodash.md#list)<`unknown`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.intersectionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:742

---

### intersectionWith

▸ **intersectionWith**<`T2`\>(`values`, `comparator`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name         | Type                                                          |
| :----------- | :------------------------------------------------------------ |
| `values`     | [`List`](../modules/lodash.md#list)<`T2`\>                    |
| `comparator` | [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.intersectionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:790

▸ **intersectionWith**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                                                                    |
| :---------- | :---------------------------------------------------------------------------------------------------------------------- |
| `...values` | ([`List`](../modules/lodash.md#list)<`unknown`\> \| [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `never`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.intersectionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:794

---

### invert

▸ **invert**():
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

**`See`**

\_.invert

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[invert](lodash.LoDashExplicitWrapper.md#invert)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1403

---

### invertBy

▸ **invertBy**(`iteratee?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`[]\>\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`[]\>\>

**`See`**

\_.invertBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1455

---

### invoke

▸ **invoke**(`path`, `...args`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `...args` | `any`[]                                             |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.invoke

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[invoke](lodash.LoDashExplicitWrapper.md#invoke)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1482

---

### invokeMap

▸ **invokeMap**(`methodName`, `...args`): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `methodName` | `string` |
| `...args`    | `any`[]  |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.invokeMap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[invokeMap](lodash.LoDashExplicitWrapper.md#invokemap)

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1075

▸ **invokeMap**<`TResult`\>(`method`, `...args`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name      | Type                              |
| :-------- | :-------------------------------- |
| `method`  | (...`args`: `any`[]) => `TResult` |
| `...args` | `any`[]                           |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.invokeMap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[invokeMap](lodash.LoDashExplicitWrapper.md#invokemap)

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1079

---

### isArguments

▸ **isArguments**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArguments

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isArguments](lodash.LoDashExplicitWrapper.md#isarguments)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:334

---

### isArray

▸ **isArray**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArray

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isArray](lodash.LoDashExplicitWrapper.md#isarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:360

---

### isArrayBuffer

▸ **isArrayBuffer**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayBuffer

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isArrayBuffer](lodash.LoDashExplicitWrapper.md#isarraybuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:382

---

### isArrayLike

▸ **isArrayLike**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayLike

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isArrayLike](lodash.LoDashExplicitWrapper.md#isarraylike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:428

---

### isArrayLikeObject

▸ **isArrayLikeObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayLikeObject

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isArrayLikeObject](lodash.LoDashExplicitWrapper.md#isarraylikeobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:473

---

### isBoolean

▸ **isBoolean**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isBoolean

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isBoolean](lodash.LoDashExplicitWrapper.md#isboolean)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:495

---

### isBuffer

▸ **isBuffer**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isBuffer

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isBuffer](lodash.LoDashExplicitWrapper.md#isbuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:517

---

### isDate

▸ **isDate**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isDate

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isDate](lodash.LoDashExplicitWrapper.md#isdate)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:539

---

### isElement

▸ **isElement**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isElement

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isElement](lodash.LoDashExplicitWrapper.md#iselement)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:561

---

### isEmpty

▸ **isEmpty**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEmpty

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isEmpty](lodash.LoDashExplicitWrapper.md#isempty)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:591

---

### isEqual

▸ **isEqual**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEqual

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isEqual](lodash.LoDashExplicitWrapper.md#isequal)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:632

---

### isEqualWith

▸ **isEqualWith**(`other`, `customizer?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `other`       | `any`                                                         |
| `customizer?` | [`IsEqualCustomizer`](../modules/lodash.md#isequalcustomizer) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEqualWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isEqualWith](lodash.LoDashExplicitWrapper.md#isequalwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:678

---

### isError

▸ **isError**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isError

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isError](lodash.LoDashExplicitWrapper.md#iserror)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:701

---

### isFinite

▸ **isFinite**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isFinite

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isFinite](lodash.LoDashExplicitWrapper.md#isfinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:725

---

### isFunction

▸ **isFunction**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isFunction

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isFunction](lodash.LoDashExplicitWrapper.md#isfunction)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:747

---

### isInteger

▸ **isInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isInteger

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isInteger](lodash.LoDashExplicitWrapper.md#isinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:785

---

### isLength

▸ **isLength**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isLength

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isLength](lodash.LoDashExplicitWrapper.md#islength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:823

---

### isMap

▸ **isMap**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isMap](lodash.LoDashExplicitWrapper.md#ismap)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:845

---

### isMatch

▸ **isMatch**(`source`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `source` | `object` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMatch

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isMatch](lodash.LoDashExplicitWrapper.md#ismatch)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:881

---

### isMatchWith

▸ **isMatchWith**(`source`, `customizer`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name         | Type                                                                  |
| :----------- | :-------------------------------------------------------------------- |
| `source`     | `object`                                                              |
| `customizer` | [`isMatchWithCustomizer`](../modules/lodash.md#ismatchwithcustomizer) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMatchWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isMatchWith](lodash.LoDashExplicitWrapper.md#ismatchwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:927

---

### isNaN

▸ **isNaN**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNaN

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isNaN](lodash.LoDashExplicitWrapper.md#isnan)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:951

---

### isNative

▸ **isNative**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNative

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isNative](lodash.LoDashExplicitWrapper.md#isnative)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:973

---

### isNil

▸ **isNil**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNil

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isNil](lodash.LoDashExplicitWrapper.md#isnil)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1006

---

### isNull

▸ **isNull**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNull

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isNull](lodash.LoDashExplicitWrapper.md#isnull)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1028

---

### isNumber

▸ **isNumber**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNumber

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isNumber](lodash.LoDashExplicitWrapper.md#isnumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1052

---

### isObject

▸ **isObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isObject

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isObject](lodash.LoDashExplicitWrapper.md#isobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1075

---

### isObjectLike

▸ **isObjectLike**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isObjectLike

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isObjectLike](lodash.LoDashExplicitWrapper.md#isobjectlike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1112

---

### isPlainObject

▸ **isPlainObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isPlainObject

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isPlainObject](lodash.LoDashExplicitWrapper.md#isplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1137

---

### isRegExp

▸ **isRegExp**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isRegExp

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isRegExp](lodash.LoDashExplicitWrapper.md#isregexp)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1159

---

### isSafeInteger

▸ **isSafeInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSafeInteger

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isSafeInteger](lodash.LoDashExplicitWrapper.md#issafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1198

---

### isSet

▸ **isSet**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSet

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isSet](lodash.LoDashExplicitWrapper.md#isset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1220

---

### isString

▸ **isString**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isString

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isString](lodash.LoDashExplicitWrapper.md#isstring)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1242

---

### isSymbol

▸ **isSymbol**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSymbol

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isSymbol](lodash.LoDashExplicitWrapper.md#issymbol)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1272

---

### isTypedArray

▸ **isTypedArray**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isTypedArray

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isTypedArray](lodash.LoDashExplicitWrapper.md#istypedarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1294

---

### isUndefined

▸ **isUndefined**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isUndefined

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isUndefined](lodash.LoDashExplicitWrapper.md#isundefined)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1316

---

### isWeakMap

▸ **isWeakMap**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isWeakMap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isWeakMap](lodash.LoDashExplicitWrapper.md#isweakmap)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1338

---

### isWeakSet

▸ **isWeakSet**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isWeakSet

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[isWeakSet](lodash.LoDashExplicitWrapper.md#isweakset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1360

---

### iteratee

▸ **iteratee**(): [`FunctionChain`](lodash.FunctionChain.md)<(`o`: `object`) => `boolean`\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`o`: `object`) => `boolean`\>

**`See`**

\_.iteratee

#### Defined in

node_modules/@types/lodash/common/util.d.ts:464

---

### join

▸ **join**(`separator?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `separator?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.join

#### Defined in

node_modules/@types/lodash/common/array.d.ts:834

---

### kebabCase

▸ **kebabCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.kebabCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[kebabCase](lodash.LoDashExplicitWrapper.md#kebabcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:169

---

### keyBy

▸ **keyBy**(`iteratee?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

#### Parameters

| Name        | Type                                                                                                                         |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------- |
| `iteratee?` | [`ValueIterateeCustom`](../modules/lodash.md#valueiterateecustom)<`T`, [`PropertyName`](../modules/lodash.md#propertyname)\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

**`See`**

\_.keyBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1131

---

### keys

▸ **keys**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.keys

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[keys](lodash.LoDashExplicitWrapper.md#keys)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1505

---

### keysIn

▸ **keysIn**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.keysIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[keysIn](lodash.LoDashExplicitWrapper.md#keysin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1528

---

### last

▸ **last**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.last

#### Defined in

node_modules/@types/lodash/common/array.d.ts:855

---

### lastIndexOf

▸ **lastIndexOf**(`value`, `fromIndex?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type               |
| :----------- | :----------------- |
| `value`      | `T`                |
| `fromIndex?` | `number` \| `true` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.lastIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:896

---

### lowerCase

▸ **lowerCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.lowerCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[lowerCase](lodash.LoDashExplicitWrapper.md#lowercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:191

---

### lowerFirst

▸ **lowerFirst**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.lowerFirst

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[lowerFirst](lodash.LoDashExplicitWrapper.md#lowerfirst)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:213

---

### lt

▸ **lt**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.lt

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[lt](lodash.LoDashExplicitWrapper.md#lt)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1383

---

### lte

▸ **lte**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.lte

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[lte](lodash.LoDashExplicitWrapper.md#lte)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1406

---

### map

▸ **map**<`K`\>(`key`): [`CollectionChain`](lodash.CollectionChain.md)<`T`[`K`]\>

#### Type parameters

| Name | Type                                     |
| :--- | :--------------------------------------- |
| `K`  | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name  | Type |
| :---- | :--- |
| `key` | `K`  |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`[`K`]\>

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1261

▸ **map**<`TResult`\>(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `iteratee` | [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `TResult`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1265

▸ **map**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `iteratee` | [`PropertyName`](../modules/lodash.md#propertyname) |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1269

▸ **map**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

#### Parameters

| Name       | Type                                                                     |
| :--------- | :----------------------------------------------------------------------- |
| `iteratee` | `object` \| [[`PropertyName`](../modules/lodash.md#propertyname), `any`] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`boolean`\>

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1273

▸ **map**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.map

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1277

---

### mapKeys

▸ **mapKeys**(`iteratee?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

#### Parameters

| Name        | Type                                                      |
| :---------- | :-------------------------------------------------------- |
| `iteratee?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

**`See`**

\_.mapKeys

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1561

---

### mapValues

▸ **mapValues**<`TResult`\>(`callback`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`TResult`\>\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                                                                             |
| :--------- | :------------------------------------------------------------------------------- |
| `callback` | [`DictionaryIterator`](../modules/lodash.md#dictionaryiterator)<`T`, `TResult`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`TResult`\>\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1703

▸ **mapValues**<`TKey`\>(`iteratee`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`[`TKey`]\>\>

#### Type parameters

| Name   | Type                                     |
| :----- | :--------------------------------------- |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name       | Type   |
| :--------- | :----- |
| `iteratee` | `TKey` |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`[`TKey`]\>\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1707

▸ **mapValues**(`iteratee`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`boolean`\>\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `iteratee` | `object` |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`boolean`\>\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1711

▸ **mapValues**(`iteratee`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`any`\>\>

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `iteratee` | `string` |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`any`\>\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1715

▸ **mapValues**():
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

**`See`**

\_.mapValues

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1719

---

### matches

▸ **matches**<`V`\>(): [`FunctionChain`](lodash.FunctionChain.md)<(`value`: `V`) => `boolean`\>

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `V`) => `boolean`\>

**`See`**

\_.matches

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[matches](lodash.LoDashExplicitWrapper.md#matches)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:513

---

### matchesProperty

▸ **matchesProperty**<`SrcValue`\>(`srcValue`): [`FunctionChain`](lodash.FunctionChain.md)<(`value`:
`any`) => `boolean`\>

#### Type parameters

| Name       |
| :--------- |
| `SrcValue` |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `srcValue` | `SrcValue` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `any`) => `boolean`\>

**`See`**

\_.matchesProperty

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[matchesProperty](lodash.LoDashExplicitWrapper.md#matchesproperty)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:547

▸ **matchesProperty**<`SrcValue`, `Value`\>(`srcValue`):
[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `Value`) => `boolean`\>

#### Type parameters

| Name       |
| :--------- |
| `SrcValue` |
| `Value`    |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `srcValue` | `SrcValue` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `Value`) => `boolean`\>

**`See`**

\_.matchesProperty

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[matchesProperty](lodash.LoDashExplicitWrapper.md#matchesproperty)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:551

---

### max

▸ **max**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.max

#### Defined in

node_modules/@types/lodash/common/math.d.ts:116

---

### maxBy

▸ **maxBy**(`iteratee?`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.maxBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:152

---

### mean

▸ **mean**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.mean

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[mean](lodash.LoDashExplicitWrapper.md#mean)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:179

---

### meanBy

▸ **meanBy**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.meanBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:207

---

### method

▸ **method**(`...args`): [`FunctionChain`](lodash.FunctionChain.md)<(`object`: `any`) => `any`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`object`: `any`) => `any`\>

**`See`**

\_.method

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[method](lodash.LoDashExplicitWrapper.md#method)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:575

---

### methodOf

▸ **methodOf**(`...args`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.methodOf

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[methodOf](lodash.LoDashExplicitWrapper.md#methodof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:599

---

### min

▸ **min**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.min

#### Defined in

node_modules/@types/lodash/common/math.d.ts:231

---

### minBy

▸ **minBy**(`iteratee?`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.minBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:267

---

### mixin

▸ **mixin**(`source`, `options?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.mixin

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[mixin](lodash.LoDashExplicitWrapper.md#mixin)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:642

▸ **mixin**(`options?`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md) |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.mixin

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[mixin](lodash.LoDashExplicitWrapper.md#mixin)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:646

---

### multiply

▸ **multiply**(`multiplicand`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `multiplicand` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.multiply

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[multiply](lodash.LoDashExplicitWrapper.md#multiply)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:289

---

### noConflict

▸ **noConflict**():
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.noConflict

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[noConflict](lodash.LoDashExplicitWrapper.md#noconflict)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:667

---

### noop

▸ **noop**(`...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`undefined`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`undefined`\>

**`See`**

\_.noop

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[noop](lodash.LoDashExplicitWrapper.md#noop)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:688

---

### now

▸ **now**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.now

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[now](lodash.LoDashExplicitWrapper.md#now)

#### Defined in

node_modules/@types/lodash/common/date.d.ts:21

---

### nth

▸ **nth**(`n?`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.nth

#### Defined in

node_modules/@types/lodash/common/array.d.ts:918

---

### nthArg

▸ **nthArg**(): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

**`See`**

\_.nthArg

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[nthArg](lodash.LoDashExplicitWrapper.md#ntharg)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:710

---

### omit

▸ **omit**(`...paths`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------ |
| `...paths` | [`Many`](../modules/lodash.md#many)<[`PropertyName`](../modules/lodash.md#propertyname)\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.omit

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1986

---

### omitBy

▸ **omitBy**(`predicate?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

#### Parameters

| Name         | Type                                                              |
| :----------- | :---------------------------------------------------------------- |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

**`See`**

\_.omitBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2041

---

### orderBy

▸ **orderBy**(`iteratees?`, `orders?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                                                                                                                                                                                               |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iteratees?` | [`Many`](../modules/lodash.md#many)<[`PropertyName`](../modules/lodash.md#propertyname) \| [`PartialShallow`](../modules/lodash.md#partialshallow)<`T`\> \| [`ListIterator`](../modules/lodash.md#listiterator)<`T`, `unknown`\>\> |
| `orders?`    | [`Many`](../modules/lodash.md#many)<`boolean` \| `"asc"` \| `"desc"`\>                                                                                                                                                             |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.orderBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1357

---

### over

▸ **over**<`TResult`\>(`...iteratees`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`any`[]) => `TResult`[]\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type                                                                      |
| :------------- | :------------------------------------------------------------------------ |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<(...`args`: `any`[]) => `TResult`\>[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `TResult`[]\>

**`See`**

\_.over

#### Defined in

node_modules/@types/lodash/common/util.d.ts:739

---

### overEvery

▸ **overEvery**<`TArgs`\>(`...iteratees`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`TArgs`[]) => `boolean`\>

#### Type parameters

| Name    |
| :------ |
| `TArgs` |

#### Parameters

| Name           | Type                                                                        |
| :------------- | :-------------------------------------------------------------------------- |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<(...`args`: `TArgs`[]) => `boolean`\>[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `TArgs`[]) => `boolean`\>

**`See`**

\_.overEvery

#### Defined in

node_modules/@types/lodash/common/util.d.ts:778

---

### overSome

▸ **overSome**<`TArgs`\>(`...iteratees`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`TArgs`[]) => `boolean`\>

#### Type parameters

| Name    |
| :------ |
| `TArgs` |

#### Parameters

| Name           | Type                                                                        |
| :------------- | :-------------------------------------------------------------------------- |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<(...`args`: `TArgs`[]) => `boolean`\>[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `TArgs`[]) => `boolean`\>

**`See`**

\_.overSome

#### Defined in

node_modules/@types/lodash/common/util.d.ts:817

---

### pad

▸ **pad**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.pad

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[pad](lodash.LoDashExplicitWrapper.md#pad)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:238

---

### padEnd

▸ **padEnd**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.padEnd

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[padEnd](lodash.LoDashExplicitWrapper.md#padend)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:263

---

### padStart

▸ **padStart**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.padStart

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[padStart](lodash.LoDashExplicitWrapper.md#padstart)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:288

---

### parseInt

▸ **parseInt**(`radix?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `radix?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.parseInt

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[parseInt](lodash.LoDashExplicitWrapper.md#parseint)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:314

---

### partition

▸ **partition**<`U`\>(`callback`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`U`[], `Exclude`<`T`, `U`\>[]]\>

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name       | Type                                                                               |
| :--------- | :--------------------------------------------------------------------------------- |
| `callback` | [`ValueIteratorTypeGuard`](../modules/lodash.md#valueiteratortypeguard)<`T`, `U`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`U`[], `Exclude`<`T`, `U`\>[]]\>

**`See`**

\_.partition

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1423

▸ **partition**(`callback`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`T`[],
`T`[]]\>

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `callback` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`T`[], `T`[]]\>

**`See`**

\_.partition

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1427

---

### pickBy

▸ **pickBy**<`S`\>(`predicate`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`S`\>\>

#### Type parameters

| Name |
| :--- |
| `S`  |

#### Parameters

| Name        | Type                                                                                     |
| :---------- | :--------------------------------------------------------------------------------------- |
| `predicate` | [`ValueKeyIterateeTypeGuard`](../modules/lodash.md#valuekeyiterateetypeguard)<`T`, `S`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`S`\>\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2149

▸ **pickBy**(`predicate?`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

#### Parameters

| Name         | Type                                                              |
| :----------- | :---------------------------------------------------------------- |
| `predicate?` | [`ValueKeyIteratee`](../modules/lodash.md#valuekeyiteratee)<`T`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`T`\>\>

**`See`**

\_.pickBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2153

---

### plant

▸ **plant**(`value`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.plant

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[plant](lodash.LoDashExplicitWrapper.md#plant)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:101

---

### pop

▸ **pop**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:183

---

### property

▸ **property**<`TObj`, `TResult`\>(): [`FunctionChain`](lodash.FunctionChain.md)<(`obj`: `TObj`) =>
`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TObj`    |
| `TResult` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`obj`: `TObj`) => `TResult`\>

**`See`**

\_.property

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[property](lodash.LoDashExplicitWrapper.md#property)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:845

---

### propertyOf

▸ **propertyOf**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.propertyOf

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[propertyOf](lodash.LoDashExplicitWrapper.md#propertyof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:868

---

### pull

▸ **pull**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type  |
| :---------- | :---- |
| `...values` | `T`[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.pull

#### Defined in

node_modules/@types/lodash/common/array.d.ts:946

---

### pullAll

▸ **pullAll**(`values?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name      | Type                                      |
| :-------- | :---------------------------------------- |
| `values?` | [`List`](../modules/lodash.md#list)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.pullAll

#### Defined in

node_modules/@types/lodash/common/array.d.ts:982

---

### pullAllBy

▸ **pullAllBy**<`T2`\>(`values?`, `iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name        | Type                                                                |
| :---------- | :------------------------------------------------------------------ |
| `values?`   | [`List`](../modules/lodash.md#list)<`T2`\>                          |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T` \| `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1029

---

### pullAllWith

▸ **pullAllWith**<`T2`\>(`values?`, `comparator?`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `values?`     | [`List`](../modules/lodash.md#list)<`T2`\>                    |
| `comparator?` | [`Comparator2`](../modules/lodash.md#comparator2)<`T`, `T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.pullAllWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1076

---

### pullAt

▸ **pullAt**(`...indexes`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                             |
| :----------- | :----------------------------------------------- |
| `...indexes` | [`Many`](../modules/lodash.md#many)<`number`\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.pullAt

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1105

---

### push

▸ **push**(`...items`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `...items` | `T`[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:184

---

### random

▸ **random**(`floating?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `floating?` | `boolean` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.random

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[random](lodash.LoDashExplicitWrapper.md#random)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:125

▸ **random**(`max`, `floating?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `max`       | `number`  |
| `floating?` | `boolean` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.random

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[random](lodash.LoDashExplicitWrapper.md#random)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:129

---

### range

▸ **range**(`end?`, `step?`): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.range

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[range](lodash.LoDashExplicitWrapper.md#range)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:898

---

### rangeRight

▸ **rangeRight**(`end?`, `step?`): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.rangeRight

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[rangeRight](lodash.LoDashExplicitWrapper.md#rangeright)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:950

---

### reduce

▸ **reduce**<`TResult`\>(`callback`, `accumulator`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                                    |
| :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, [`List`](../modules/lodash.md#list)<`T`\>\> |
| `accumulator` | `TResult`                                                                                                               |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1493

▸ **reduce**(`callback`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name       | Type                                                                                                              |
| :--------- | :---------------------------------------------------------------------------------------------------------------- |
| `callback` | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, [`List`](../modules/lodash.md#list)<`T`\>\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.reduce

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1497

---

### reduceRight

▸ **reduceRight**<`TResult`\>(`callback`, `accumulator`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                                    |
| :------------ | :---------------------------------------------------------------------------------------------------------------------- |
| `callback`    | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `TResult`, [`List`](../modules/lodash.md#list)<`T`\>\> |
| `accumulator` | `TResult`                                                                                                               |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1564

▸ **reduceRight**(`callback`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name       | Type                                                                                                              |
| :--------- | :---------------------------------------------------------------------------------------------------------------- |
| `callback` | [`MemoListIterator`](../modules/lodash.md#memolistiterator)<`T`, `T`, [`List`](../modules/lodash.md#list)<`T`\>\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.reduceRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1568

---

### reject

▸ **reject**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.reject

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1633

---

### remove

▸ **remove**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.remove

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1130

---

### repeat

▸ **repeat**(`n?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.repeat

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[repeat](lodash.LoDashExplicitWrapper.md#repeat)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:337

---

### replace

▸ **replace**(`pattern`, `replacement`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `pattern`     | `string` \| `RegExp`                                                  |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.replace

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[replace](lodash.LoDashExplicitWrapper.md#replace)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:369

▸ **replace**(`replacement`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.replace

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[replace](lodash.LoDashExplicitWrapper.md#replace)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:373

---

### result

▸ **result**<`TResult`\>(`path`, `defaultValue?`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name            | Type                                                |
| :-------------- | :-------------------------------------------------- |
| `path`          | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `defaultValue?` | `TResult` \| (...`args`: `any`[]) => `TResult`      |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.result

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[result](lodash.LoDashExplicitWrapper.md#result)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2187

---

### reverse

▸ **reverse**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.reverse

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[reverse](lodash.LoDashExplicitWrapper.md#reverse)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:114

---

### round

▸ **round**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.round

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[round](lodash.LoDashExplicitWrapper.md#round)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:312

---

### sample

▸ **sample**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.sample

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1692

---

### sampleSize

▸ **sampleSize**(`n?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.sampleSize

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1748

---

### set

▸ **set**(`path`, `value`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.set

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[set](lodash.LoDashExplicitWrapper.md#set)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2220

▸ **set**<`TResult`\>(`path`, `value`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.set

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[set](lodash.LoDashExplicitWrapper.md#set)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2224

---

### setWith

▸ **setWith**(`path`, `value`, `customizer?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                   |
| `value`       | `any`                                                                 |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`[]\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.setWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[setWith](lodash.LoDashExplicitWrapper.md#setwith)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2259

▸ **setWith**<`TResult`\>(`path`, `value`, `customizer?`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                   |
| `value`       | `any`                                                                 |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`[]\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.setWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[setWith](lodash.LoDashExplicitWrapper.md#setwith)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2263

---

### shift

▸ **shift**(): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:185

---

### shuffle

▸ **shuffle**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.shuffle

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1803

---

### size

▸ **size**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.size

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[size](lodash.LoDashExplicitWrapper.md#size)

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1831

---

### slice

▸ **slice**(`start?`, `end?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `start?` | `number` |
| `end?`   | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.slice

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1175

---

### snakeCase

▸ **snakeCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.snakeCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[snakeCase](lodash.LoDashExplicitWrapper.md#snakecase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:395

---

### some

▸ **some**(`predicate?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name         | Type                                                                             |
| :----------- | :------------------------------------------------------------------------------- |
| `predicate?` | [`ListIterateeCustom`](../modules/lodash.md#listiterateecustom)<`T`, `boolean`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.some

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1864

---

### sort

▸ **sort**(`compareFn?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                             |
| :----------- | :------------------------------- |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:186

---

### sortBy

▸ **sortBy**(`...iteratees`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name           | Type                                                                                              |
| :------------- | :------------------------------------------------------------------------------------------------ |
| `...iteratees` | [`Many`](../modules/lodash.md#many)<[`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\>\>[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.sortBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1926

---

### sortedIndex

▸ **sortedIndex**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1206

▸ **sortedIndex**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1237

---

### sortedIndexBy

▸ **sortedIndexBy**(`value`, `iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name        | Type                                                        |
| :---------- | :---------------------------------------------------------- |
| `value`     | `T`                                                         |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedIndexBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1273

---

### sortedIndexOf

▸ **sortedIndexOf**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1301

---

### sortedLastIndex

▸ **sortedLastIndex**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedLastIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1330

---

### sortedLastIndexBy

▸ **sortedLastIndexBy**(`value`, `iteratee`):
[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `value`    | `T`                                                         |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedLastIndexBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1361

---

### sortedLastIndexOf

▸ **sortedLastIndexOf**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sortedLastIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1389

---

### sortedUniq

▸ **sortedUniq**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.sortedUniq

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1416

---

### sortedUniqBy

▸ **sortedUniqBy**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.sortedUniqBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1444

---

### splice

▸ **splice**(`start`, `deleteCount?`, `...items`):
[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `start`        | `number` |
| `deleteCount?` | `number` |
| `...items`     | `T`[]    |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:187

---

### split

▸ **split**(`separator?`, `limit?`): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `separator?` | `string` \| `RegExp` |
| `limit?`     | `number`             |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.split

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[split](lodash.LoDashExplicitWrapper.md#split)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:425

---

### startCase

▸ **startCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.startCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[startCase](lodash.LoDashExplicitWrapper.md#startcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:447

---

### startsWith

▸ **startsWith**(`target?`, `position?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.startsWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[startsWith](lodash.LoDashExplicitWrapper.md#startswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:471

---

### stubArray

▸ **stubArray**(): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.stubArray

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubArray](lodash.LoDashExplicitWrapper.md#stubarray)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:987

---

### stubFalse

▸ **stubFalse**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`false`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`false`\>

**`See`**

\_.stubFalse

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubFalse](lodash.LoDashExplicitWrapper.md#stubfalse)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1008

▸ **stubFalse**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`false`\>

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`false`\>

**`See`**

\_.stubFalse

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubFalse](lodash.LoDashExplicitWrapper.md#stubfalse)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1218

---

### stubObject

▸ **stubObject**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.stubObject

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubObject](lodash.LoDashExplicitWrapper.md#stubobject)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1029

---

### stubString

▸ **stubString**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.stubString

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubString](lodash.LoDashExplicitWrapper.md#stubstring)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1050

---

### stubTrue

▸ **stubTrue**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`true`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`true`\>

**`See`**

\_.stubTrue

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubTrue](lodash.LoDashExplicitWrapper.md#stubtrue)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1071

▸ **stubTrue**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`true`\>

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`true`\>

**`See`**

\_.stubTrue

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[stubTrue](lodash.LoDashExplicitWrapper.md#stubtrue)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1193

---

### subtract

▸ **subtract**(`subtrahend`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `subtrahend` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.subtract

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[subtract](lodash.LoDashExplicitWrapper.md#subtract)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:340

---

### sum

▸ **sum**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sum

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[sum](lodash.LoDashExplicitWrapper.md#sum)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:367

---

### sumBy

▸ **sumBy**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Parameters

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `iteratee?` | `string` \| (`value`: `T`) => `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sumBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:403

---

### tail

▸ **tail**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.tail

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1465

---

### take

▸ **take**(`n?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.take

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1487

---

### takeRight

▸ **takeRight**(`n?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.takeRight

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1509

---

### takeRightWhile

▸ **takeRightWhile**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.takeRightWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1532

---

### takeWhile

▸ **takeWhile**(`predicate?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `predicate?` | [`ListIteratee`](../modules/lodash.md#listiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.takeWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1555

---

### tap

▸ **tap**(`interceptor`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                       |
| :------------ | :------------------------- |
| `interceptor` | (`value`: `T`[]) => `void` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.tap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[tap](lodash.LoDashExplicitWrapper.md#tap)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:185

---

### template

▸ **template**(`options?`):
[`FunctionChain`](lodash.FunctionChain.md)<[`TemplateExecutor`](lodash.TemplateExecutor.md)\>

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TemplateOptions`](lodash.TemplateOptions.md) |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<[`TemplateExecutor`](lodash.TemplateExecutor.md)\>

**`See`**

\_.template

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[template](lodash.LoDashExplicitWrapper.md#template)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:526

---

### thru

▸ **thru**<`TResult`\>(`interceptor`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                          |
| :------------ | :---------------------------- |
| `interceptor` | (`value`: `T`[]) => `TResult` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.thru

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[thru](lodash.LoDashExplicitWrapper.md#thru)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:208

---

### times

▸ **times**<`TResult`\>(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                           |
| :--------- | :----------------------------- |
| `iteratee` | (`num`: `number`) => `TResult` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.times

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[times](lodash.LoDashExplicitWrapper.md#times)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1103

▸ **times**(): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.times

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[times](lodash.LoDashExplicitWrapper.md#times)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1107

---

### toArray

▸ **toArray**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1460

---

### toFinite

▸ **toFinite**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toFinite

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toFinite](lodash.LoDashExplicitWrapper.md#tofinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1503

---

### toInteger

▸ **toInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toInteger

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toInteger](lodash.LoDashExplicitWrapper.md#tointeger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1541

---

### toJSON

▸ **toJSON**(): `T`[]

#### Returns

`T`[]

**`See`**

\_.toJSON

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toJSON](lodash.LoDashExplicitWrapper.md#tojson)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:127

---

### toLength

▸ **toLength**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toLength

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toLength](lodash.LoDashExplicitWrapper.md#tolength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1580

---

### toLower

▸ **toLower**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.toLower

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toLower](lodash.LoDashExplicitWrapper.md#tolower)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:548

---

### toNumber

▸ **toNumber**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toNumber

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toNumber](lodash.LoDashExplicitWrapper.md#tonumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1616

---

### toPairs

▸ **toPairs**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T`]\>

**`See`**

\_.toPairs

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toPairs](lodash.LoDashExplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2288

---

### toPairsIn

▸ **toPairsIn**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T`]\>

**`See`**

\_.toPairsIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toPairsIn](lodash.LoDashExplicitWrapper.md#topairsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2313

---

### toPath

▸ **toPath**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.toPath

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toPath](lodash.LoDashExplicitWrapper.md#topath)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1146

---

### toPlainObject

▸ **toPlainObject**(): [`ObjectChain`](lodash.ObjectChain.md)<`any`\>

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`any`\>

**`See`**

\_.toPlainObject

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toPlainObject](lodash.LoDashExplicitWrapper.md#toplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1639

---

### toSafeInteger

▸ **toSafeInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toSafeInteger

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toSafeInteger](lodash.LoDashExplicitWrapper.md#tosafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1676

---

### toUpper

▸ **toUpper**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.toUpper

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toUpper](lodash.LoDashExplicitWrapper.md#toupper)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:570

---

### transform

▸ **transform**<`TResult`\>(`iteratee`, `accumulator?`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name           | Type                                                                                   |
| :------------- | :------------------------------------------------------------------------------------- |
| `iteratee`     | [`MemoVoidArrayIterator`](../modules/lodash.md#memovoidarrayiterator)<`T`, `TResult`\> |
| `accumulator?` | `TResult`                                                                              |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2373

▸ **transform**(): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.transform

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2377

---

### trim

▸ **trim**(`chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.trim

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[trim](lodash.LoDashExplicitWrapper.md#trim)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:597

---

### trimEnd

▸ **trimEnd**(`chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.trimEnd

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[trimEnd](lodash.LoDashExplicitWrapper.md#trimend)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:624

---

### trimStart

▸ **trimStart**(`chars?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.trimStart

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[trimStart](lodash.LoDashExplicitWrapper.md#trimstart)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:651

---

### truncate

▸ **truncate**(`options?`): [`StringChain`](lodash.StringChain.md)

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TruncateOptions`](lodash.TruncateOptions.md) |

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.truncate

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[truncate](lodash.LoDashExplicitWrapper.md#truncate)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:689

---

### unescape

▸ **unescape**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.unescape

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[unescape](lodash.LoDashExplicitWrapper.md#unescape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:715

---

### union

▸ **union**(`...arrays`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.union

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1577

---

### unionBy

▸ **unionBy**(`arrays2`, `iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1621

▸ **unionBy**(`...iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                                                                                                  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `...iteratee` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.unionBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1625

---

### unionWith

▸ **unionWith**(`arrays2`, `comparator?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                               |
| :------------ | :----------------------------------------------------------------- |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\>              |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.unionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1669

▸ **unionWith**(`...comparator`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name            | Type                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `...comparator` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`Comparator`](../modules/lodash.md#comparator)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.unionWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1673

---

### uniq

▸ **uniq**(): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.uniq

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1702

---

### uniqBy

▸ **uniqBy**(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type                                                        |
| :--------- | :---------------------------------------------------------- |
| `iteratee` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.uniqBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1735

---

### uniqWith

▸ **uniqWith**(`comparator?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                  |
| :------------ | :---------------------------------------------------- |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.uniqWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1766

---

### uniqueId

▸ **uniqueId**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.uniqueId

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[uniqueId](lodash.LoDashExplicitWrapper.md#uniqueid)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1168

---

### unset

▸ **unset**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.unset

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[unset](lodash.LoDashExplicitWrapper.md#unset)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2415

---

### unshift

▸ **unshift**(`...items`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name       | Type  |
| :--------- | :---- |
| `...items` | `T`[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:188

---

### unzip

▸ **unzip**(): `T` extends [`List`](../modules/lodash.md#list)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`[]\> : `unknown`

#### Returns

`T` extends [`List`](../modules/lodash.md#list)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`[]\> : `unknown`

**`See`**

\_.unzip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1788

---

### unzipWith

▸ **unzipWith**<`TResult`\>(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| `iteratee` | (...`values`: `T` extends [`List`](../modules/lodash.md#list)<`U`\> ? `U` : `unknown`[]) => `TResult` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.unzipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1819

▸ **unzipWith**(): `T` extends [`List`](../modules/lodash.md#list)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`[]\> : `unknown`

#### Returns

`T` extends [`List`](../modules/lodash.md#list)<`U`\> ?
[`CollectionChain`](lodash.CollectionChain.md)<`U`[]\> : `unknown`

**`See`**

\_.unzipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1823

---

### update

▸ **update**(`path`, `updater`): [`ObjectChain`](lodash.ObjectChain.md)<`any`\>

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `updater` | (`value`: `any`) => `any`                           |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`any`\>

**`See`**

\_.update

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[update](lodash.LoDashExplicitWrapper.md#update)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2439

---

### upperCase

▸ **upperCase**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.upperCase

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[upperCase](lodash.LoDashExplicitWrapper.md#uppercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:737

---

### upperFirst

▸ **upperFirst**(): [`StringChain`](lodash.StringChain.md)

#### Returns

[`StringChain`](lodash.StringChain.md)

**`See`**

\_.upperFirst

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[upperFirst](lodash.LoDashExplicitWrapper.md#upperfirst)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:759

---

### value

▸ **value**(): `T`[]

#### Returns

`T`[]

**`See`**

\_.value

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[value](lodash.LoDashExplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf

▸ **valueOf**(): `T`[]

#### Returns

`T`[]

**`See`**

\_.valueOf

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[valueOf](lodash.LoDashExplicitWrapper.md#valueof)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:160

---

### without

▸ **without**(`...values`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type  |
| :---------- | :---- |
| `...values` | `T`[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.without

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1845

---

### words

▸ **words**(`pattern?`): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `pattern?` | `string` \| `RegExp` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.words

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[words](lodash.LoDashExplicitWrapper.md#words)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:786

---

### wrap

▸ **wrap**<`TArgs`, `TResult`\>(`wrapper`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`TArgs`[]) => `TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TArgs`   |
| `TResult` |

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `wrapper` | (`value`: `T`[], ...`args`: `TArgs`[]) => `TResult` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `TArgs`[]) => `TResult`\>

**`See`**

\_.wrap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[wrap](lodash.LoDashExplicitWrapper.md#wrap)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1444

---

### xor

▸ **xor**(`...arrays`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.xor

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1866

---

### xorBy

▸ **xorBy**(`arrays2`, `iteratee?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `arrays2`   | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `iteratee?` | [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>        |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.xorBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1911

▸ **xorBy**(`...iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                                                                                                  |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| `...iteratee` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`ValueIteratee`](../modules/lodash.md#valueiteratee)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.xorBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1915

---

### xorWith

▸ **xorWith**(`arrays2`, `comparator?`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name          | Type                                                               |
| :------------ | :----------------------------------------------------------------- |
| `arrays2`     | `undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> |
| `comparator?` | [`Comparator`](../modules/lodash.md#comparator)<`T`\>              |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.xorWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1959

▸ **xorWith**(`...comparator`): [`CollectionChain`](lodash.CollectionChain.md)<`T`\>

#### Parameters

| Name            | Type                                                                                                                            |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `...comparator` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| [`Comparator`](../modules/lodash.md#comparator)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`T`\>

**`See`**

\_.xorWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1963

---

### zip

▸ **zip**<`T2`\>(`arrays2`): [`CollectionChain`](lodash.CollectionChain.md)<[`undefined` \| `T`,
`undefined` \| `T2`]\>

#### Type parameters

| Name |
| :--- |
| `T2` |

#### Parameters

| Name      | Type                                       |
| :-------- | :----------------------------------------- |
| `arrays2` | [`List`](../modules/lodash.md#list)<`T2`\> |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`undefined` \| `T`, `undefined` \| `T2`]\>

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2005

▸ **zip**(`...arrays`): [`CollectionChain`](lodash.CollectionChain.md)<(`undefined` \| `T`)[]\>

#### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `...arrays` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\>)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<(`undefined` \| `T`)[]\>

**`See`**

\_.zip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2009

---

### zipObject

▸ **zipObject**<`U`\>(`values`):
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`U`\>\>

#### Type parameters

| Name |
| :--- |
| `U`  |

#### Parameters

| Name     | Type                                      |
| :------- | :---------------------------------------- |
| `values` | [`List`](../modules/lodash.md#list)<`U`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`U`\>\>

**`See`**

\_.zipObject

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2040

▸ **zipObject**():
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`undefined`\>\>

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`undefined`\>\>

**`See`**

\_.zipObject

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2044

---

### zipObjectDeep

▸ **zipObjectDeep**(`values?`): [`ObjectChain`](lodash.ObjectChain.md)<`object`\>

#### Parameters

| Name      | Type                                        |
| :-------- | :------------------------------------------ |
| `values?` | [`List`](../modules/lodash.md#list)<`any`\> |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`object`\>

**`See`**

\_.zipObjectDeep

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2066

---

### zipWith

▸ **zipWith**<`T2`, `TResult`\>(`arrays2`, `iteratee`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `T2`      |
| `TResult` |

#### Parameters

| Name       | Type                                         |
| :--------- | :------------------------------------------- |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>   |
| `iteratee` | (`value1`: `T`, `value2`: `T2`) => `TResult` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2117

▸ **zipWith**<`T2`, `T3`, `TResult`\>(`arrays2`, `arrays3`, `iteratee`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `T2`      |
| `T3`      |
| `TResult` |

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `arrays2`  | [`List`](../modules/lodash.md#list)<`T2`\>                   |
| `arrays3`  | [`List`](../modules/lodash.md#list)<`T3`\>                   |
| `iteratee` | (`value1`: `T`, `value2`: `T2`, `value3`: `T3`) => `TResult` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2121

▸ **zipWith**<`TResult`\>(`...iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                                                       |
| :------------ | :--------------------------------------------------------------------------------------------------------- |
| `...iteratee` | (`undefined` \| `null` \| [`List`](../modules/lodash.md#list)<`T`\> \| (...`group`: `T`[]) => `TResult`)[] |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

**`See`**

\_.zipWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2125
