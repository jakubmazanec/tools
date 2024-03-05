# Interface: LoDashImplicitWrapper\<TValue\>

[lodash](../modules/lodash.md).LoDashImplicitWrapper

## Type parameters

| Name     |
| :------- |
| `TValue` |

## Hierarchy

- **`LoDashImplicitWrapper`**

  ↳ [`Collection`](lodash.Collection.md)

  ↳ [`Function`](lodash.Function.md)

  ↳ [`String`](lodash.String.md)

  ↳ [`Object`](lodash.Object.md)

  ↳ [`Primitive`](lodash.Primitive.md)

## Table of contents

### Methods

- [add](lodash.LoDashImplicitWrapper.md#add)
- [attempt](lodash.LoDashImplicitWrapper.md#attempt)
- [bind](lodash.LoDashImplicitWrapper.md#bind)
- [bindAll](lodash.LoDashImplicitWrapper.md#bindall)
- [bindKey](lodash.LoDashImplicitWrapper.md#bindkey)
- [camelCase](lodash.LoDashImplicitWrapper.md#camelcase)
- [capitalize](lodash.LoDashImplicitWrapper.md#capitalize)
- [ceil](lodash.LoDashImplicitWrapper.md#ceil)
- [clamp](lodash.LoDashImplicitWrapper.md#clamp)
- [clone](lodash.LoDashImplicitWrapper.md#clone)
- [cloneDeep](lodash.LoDashImplicitWrapper.md#clonedeep)
- [cloneDeepWith](lodash.LoDashImplicitWrapper.md#clonedeepwith)
- [cloneWith](lodash.LoDashImplicitWrapper.md#clonewith)
- [commit](lodash.LoDashImplicitWrapper.md#commit)
- [conforms](lodash.LoDashImplicitWrapper.md#conforms)
- [conformsTo](lodash.LoDashImplicitWrapper.md#conformsto)
- [constant](lodash.LoDashImplicitWrapper.md#constant)
- [deburr](lodash.LoDashImplicitWrapper.md#deburr)
- [defaultTo](lodash.LoDashImplicitWrapper.md#defaultto)
- [defer](lodash.LoDashImplicitWrapper.md#defer)
- [delay](lodash.LoDashImplicitWrapper.md#delay)
- [divide](lodash.LoDashImplicitWrapper.md#divide)
- [endsWith](lodash.LoDashImplicitWrapper.md#endswith)
- [entries](lodash.LoDashImplicitWrapper.md#entries)
- [entriesIn](lodash.LoDashImplicitWrapper.md#entriesin)
- [eq](lodash.LoDashImplicitWrapper.md#eq)
- [escape](lodash.LoDashImplicitWrapper.md#escape)
- [escapeRegExp](lodash.LoDashImplicitWrapper.md#escaperegexp)
- [findKey](lodash.LoDashImplicitWrapper.md#findkey)
- [findLastKey](lodash.LoDashImplicitWrapper.md#findlastkey)
- [floor](lodash.LoDashImplicitWrapper.md#floor)
- [forIn](lodash.LoDashImplicitWrapper.md#forin)
- [forInRight](lodash.LoDashImplicitWrapper.md#forinright)
- [forOwn](lodash.LoDashImplicitWrapper.md#forown)
- [forOwnRight](lodash.LoDashImplicitWrapper.md#forownright)
- [functions](lodash.LoDashImplicitWrapper.md#functions)
- [functionsIn](lodash.LoDashImplicitWrapper.md#functionsin)
- [gt](lodash.LoDashImplicitWrapper.md#gt)
- [gte](lodash.LoDashImplicitWrapper.md#gte)
- [has](lodash.LoDashImplicitWrapper.md#has)
- [hasIn](lodash.LoDashImplicitWrapper.md#hasin)
- [identity](lodash.LoDashImplicitWrapper.md#identity)
- [inRange](lodash.LoDashImplicitWrapper.md#inrange)
- [invert](lodash.LoDashImplicitWrapper.md#invert)
- [invoke](lodash.LoDashImplicitWrapper.md#invoke)
- [invokeMap](lodash.LoDashImplicitWrapper.md#invokemap)
- [isArguments](lodash.LoDashImplicitWrapper.md#isarguments)
- [isArray](lodash.LoDashImplicitWrapper.md#isarray)
- [isArrayBuffer](lodash.LoDashImplicitWrapper.md#isarraybuffer)
- [isArrayLike](lodash.LoDashImplicitWrapper.md#isarraylike)
- [isArrayLikeObject](lodash.LoDashImplicitWrapper.md#isarraylikeobject)
- [isBoolean](lodash.LoDashImplicitWrapper.md#isboolean)
- [isBuffer](lodash.LoDashImplicitWrapper.md#isbuffer)
- [isDate](lodash.LoDashImplicitWrapper.md#isdate)
- [isElement](lodash.LoDashImplicitWrapper.md#iselement)
- [isEmpty](lodash.LoDashImplicitWrapper.md#isempty)
- [isEqual](lodash.LoDashImplicitWrapper.md#isequal)
- [isEqualWith](lodash.LoDashImplicitWrapper.md#isequalwith)
- [isError](lodash.LoDashImplicitWrapper.md#iserror)
- [isFinite](lodash.LoDashImplicitWrapper.md#isfinite)
- [isFunction](lodash.LoDashImplicitWrapper.md#isfunction)
- [isInteger](lodash.LoDashImplicitWrapper.md#isinteger)
- [isLength](lodash.LoDashImplicitWrapper.md#islength)
- [isMap](lodash.LoDashImplicitWrapper.md#ismap)
- [isMatch](lodash.LoDashImplicitWrapper.md#ismatch)
- [isMatchWith](lodash.LoDashImplicitWrapper.md#ismatchwith)
- [isNaN](lodash.LoDashImplicitWrapper.md#isnan)
- [isNative](lodash.LoDashImplicitWrapper.md#isnative)
- [isNil](lodash.LoDashImplicitWrapper.md#isnil)
- [isNull](lodash.LoDashImplicitWrapper.md#isnull)
- [isNumber](lodash.LoDashImplicitWrapper.md#isnumber)
- [isObject](lodash.LoDashImplicitWrapper.md#isobject)
- [isObjectLike](lodash.LoDashImplicitWrapper.md#isobjectlike)
- [isPlainObject](lodash.LoDashImplicitWrapper.md#isplainobject)
- [isRegExp](lodash.LoDashImplicitWrapper.md#isregexp)
- [isSafeInteger](lodash.LoDashImplicitWrapper.md#issafeinteger)
- [isSet](lodash.LoDashImplicitWrapper.md#isset)
- [isString](lodash.LoDashImplicitWrapper.md#isstring)
- [isSymbol](lodash.LoDashImplicitWrapper.md#issymbol)
- [isTypedArray](lodash.LoDashImplicitWrapper.md#istypedarray)
- [isUndefined](lodash.LoDashImplicitWrapper.md#isundefined)
- [isWeakMap](lodash.LoDashImplicitWrapper.md#isweakmap)
- [isWeakSet](lodash.LoDashImplicitWrapper.md#isweakset)
- [kebabCase](lodash.LoDashImplicitWrapper.md#kebabcase)
- [keys](lodash.LoDashImplicitWrapper.md#keys)
- [keysIn](lodash.LoDashImplicitWrapper.md#keysin)
- [lowerCase](lodash.LoDashImplicitWrapper.md#lowercase)
- [lowerFirst](lodash.LoDashImplicitWrapper.md#lowerfirst)
- [lt](lodash.LoDashImplicitWrapper.md#lt)
- [lte](lodash.LoDashImplicitWrapper.md#lte)
- [matches](lodash.LoDashImplicitWrapper.md#matches)
- [matchesProperty](lodash.LoDashImplicitWrapper.md#matchesproperty)
- [mean](lodash.LoDashImplicitWrapper.md#mean)
- [method](lodash.LoDashImplicitWrapper.md#method)
- [methodOf](lodash.LoDashImplicitWrapper.md#methodof)
- [mixin](lodash.LoDashImplicitWrapper.md#mixin)
- [multiply](lodash.LoDashImplicitWrapper.md#multiply)
- [noConflict](lodash.LoDashImplicitWrapper.md#noconflict)
- [noop](lodash.LoDashImplicitWrapper.md#noop)
- [now](lodash.LoDashImplicitWrapper.md#now)
- [nthArg](lodash.LoDashImplicitWrapper.md#ntharg)
- [pad](lodash.LoDashImplicitWrapper.md#pad)
- [padEnd](lodash.LoDashImplicitWrapper.md#padend)
- [padStart](lodash.LoDashImplicitWrapper.md#padstart)
- [parseInt](lodash.LoDashImplicitWrapper.md#parseint)
- [plant](lodash.LoDashImplicitWrapper.md#plant)
- [property](lodash.LoDashImplicitWrapper.md#property)
- [propertyOf](lodash.LoDashImplicitWrapper.md#propertyof)
- [random](lodash.LoDashImplicitWrapper.md#random)
- [range](lodash.LoDashImplicitWrapper.md#range)
- [rangeRight](lodash.LoDashImplicitWrapper.md#rangeright)
- [repeat](lodash.LoDashImplicitWrapper.md#repeat)
- [replace](lodash.LoDashImplicitWrapper.md#replace)
- [result](lodash.LoDashImplicitWrapper.md#result)
- [reverse](lodash.LoDashImplicitWrapper.md#reverse)
- [round](lodash.LoDashImplicitWrapper.md#round)
- [runInContext](lodash.LoDashImplicitWrapper.md#runincontext)
- [set](lodash.LoDashImplicitWrapper.md#set)
- [setWith](lodash.LoDashImplicitWrapper.md#setwith)
- [size](lodash.LoDashImplicitWrapper.md#size)
- [snakeCase](lodash.LoDashImplicitWrapper.md#snakecase)
- [split](lodash.LoDashImplicitWrapper.md#split)
- [startCase](lodash.LoDashImplicitWrapper.md#startcase)
- [startsWith](lodash.LoDashImplicitWrapper.md#startswith)
- [stubArray](lodash.LoDashImplicitWrapper.md#stubarray)
- [stubFalse](lodash.LoDashImplicitWrapper.md#stubfalse)
- [stubObject](lodash.LoDashImplicitWrapper.md#stubobject)
- [stubString](lodash.LoDashImplicitWrapper.md#stubstring)
- [stubTrue](lodash.LoDashImplicitWrapper.md#stubtrue)
- [subtract](lodash.LoDashImplicitWrapper.md#subtract)
- [sum](lodash.LoDashImplicitWrapper.md#sum)
- [tap](lodash.LoDashImplicitWrapper.md#tap)
- [template](lodash.LoDashImplicitWrapper.md#template)
- [thru](lodash.LoDashImplicitWrapper.md#thru)
- [times](lodash.LoDashImplicitWrapper.md#times)
- [toFinite](lodash.LoDashImplicitWrapper.md#tofinite)
- [toInteger](lodash.LoDashImplicitWrapper.md#tointeger)
- [toJSON](lodash.LoDashImplicitWrapper.md#tojson)
- [toLength](lodash.LoDashImplicitWrapper.md#tolength)
- [toLower](lodash.LoDashImplicitWrapper.md#tolower)
- [toNumber](lodash.LoDashImplicitWrapper.md#tonumber)
- [toPairs](lodash.LoDashImplicitWrapper.md#topairs)
- [toPairsIn](lodash.LoDashImplicitWrapper.md#topairsin)
- [toPath](lodash.LoDashImplicitWrapper.md#topath)
- [toPlainObject](lodash.LoDashImplicitWrapper.md#toplainobject)
- [toSafeInteger](lodash.LoDashImplicitWrapper.md#tosafeinteger)
- [toUpper](lodash.LoDashImplicitWrapper.md#toupper)
- [trim](lodash.LoDashImplicitWrapper.md#trim)
- [trimEnd](lodash.LoDashImplicitWrapper.md#trimend)
- [trimStart](lodash.LoDashImplicitWrapper.md#trimstart)
- [truncate](lodash.LoDashImplicitWrapper.md#truncate)
- [unescape](lodash.LoDashImplicitWrapper.md#unescape)
- [uniqueId](lodash.LoDashImplicitWrapper.md#uniqueid)
- [unset](lodash.LoDashImplicitWrapper.md#unset)
- [update](lodash.LoDashImplicitWrapper.md#update)
- [upperCase](lodash.LoDashImplicitWrapper.md#uppercase)
- [upperFirst](lodash.LoDashImplicitWrapper.md#upperfirst)
- [value](lodash.LoDashImplicitWrapper.md#value)
- [valueOf](lodash.LoDashImplicitWrapper.md#valueof)
- [words](lodash.LoDashImplicitWrapper.md#words)
- [wrap](lodash.LoDashImplicitWrapper.md#wrap)

## Methods

### add

▸ **add**(`addend`): `number`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `addend` | `number` |

#### Returns

`number`

**`See`**

\_.add

#### Defined in

node_modules/@types/lodash/common/math.d.ts:17

---

### attempt

▸ **attempt**\<`TResult`\>(`...args`): `Error` \| `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

`Error` \| `TResult`

**`See`**

\_.attempt

#### Defined in

node_modules/@types/lodash/common/util.d.ts:17

---

### bind

▸ **bind**(`thisArg`, `...partials`): [`Function`](lodash.Function.md)\<(...`args`: `any`[]) =>
`any`\>

#### Parameters

| Name          | Type    |
| :------------ | :------ |
| `thisArg`     | `any`   |
| `...partials` | `any`[] |

#### Returns

[`Function`](lodash.Function.md)\<(...`args`: `any`[]) => `any`\>

**`See`**

\_.bind

#### Defined in

node_modules/@types/lodash/common/function.d.ts:99

---

### bindAll

▸ **bindAll**(`...methodNames`): `this`

#### Parameters

| Name             | Type                                              |
| :--------------- | :------------------------------------------------ |
| `...methodNames` | [`Many`](../modules/lodash.md#many)\<`string`\>[] |

#### Returns

`this`

**`See`**

\_.bindAll

#### Defined in

node_modules/@types/lodash/common/util.d.ts:45

---

### bindKey

▸ **bindKey**(`key`, `...partials`): [`Function`](lodash.Function.md)\<(...`args`: `any`[]) =>
`any`\>

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `key`         | `string` |
| `...partials` | `any`[]  |

#### Returns

[`Function`](lodash.Function.md)\<(...`args`: `any`[]) => `any`\>

**`See`**

\_.bindKey

#### Defined in

node_modules/@types/lodash/common/function.d.ts:133

---

### camelCase

▸ **camelCase**(): `string`

#### Returns

`string`

**`See`**

\_.camelCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:16

---

### capitalize

▸ **capitalize**(): `string`

#### Returns

`string`

**`See`**

\_.capitalize

#### Defined in

node_modules/@types/lodash/common/string.d.ts:38

---

### ceil

▸ **ceil**(`precision?`): `number`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

**`See`**

\_.ceil

#### Defined in

node_modules/@types/lodash/common/math.d.ts:40

---

### clamp

▸ **clamp**(`lower`, `upper`): `number`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `lower` | `number` |
| `upper` | `number` |

#### Returns

`number`

**`See`**

\_.clamp

#### Defined in

node_modules/@types/lodash/common/number.d.ts:44

▸ **clamp**(`upper`): `number`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `upper` | `number` |

#### Returns

`number`

**`See`**

\_.clamp

#### Defined in

node_modules/@types/lodash/common/number.d.ts:48

---

### clone

▸ **clone**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.clone

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep

▸ **cloneDeep**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.cloneDeep

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:105

---

### cloneDeepWith

▸ **cloneDeepWith**(`customizer`): `any`

#### Parameters

| Name         | Type                                                                                  |
| :----------- | :------------------------------------------------------------------------------------ |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)\<`TValue`\> |

#### Returns

`any`

**`See`**

\_.cloneDeepWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:109

▸ **cloneDeepWith**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.cloneDeepWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:113

---

### cloneWith

▸ **cloneWith**\<`TResult`\>(`customizer`): `TResult`

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `TResult` | extends `null` \| `string` \| `number` \| `boolean` \| `object` |

#### Parameters

| Name         | Type                                                                                     |
| :----------- | :--------------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)\<`TValue`, `TResult`\> |

#### Returns

`TResult`

**`See`**

\_.cloneWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:117

▸ **cloneWith**\<`TResult`\>(`customizer`): `TValue` \| `TResult`

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                    |
| :----------- | :------------------------------------------------------------------------------------------------------ |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)\<`TValue`, `undefined` \| `TResult`\> |

#### Returns

`TValue` \| `TResult`

**`See`**

\_.cloneWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:121

▸ **cloneWith**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.cloneWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:125

---

### commit

▸ **commit**(): `this`

#### Returns

`this`

**`See`**

\_.commit

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:82

---

### conforms

▸ **conforms**(): [`Function`](lodash.Function.md)\<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)\<`TValue`\>) =>
`boolean`\>

#### Returns

[`Function`](lodash.Function.md)\<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)\<`TValue`\>) =>
`boolean`\>

**`See`**

\_.conforms

#### Defined in

node_modules/@types/lodash/common/util.d.ts:100

---

### conformsTo

▸ **conformsTo**(`source`): `boolean`

#### Parameters

| Name     | Type                                                                                  |
| :------- | :------------------------------------------------------------------------------------ |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)\<`TValue`\> |

#### Returns

`boolean`

**`See`**

\_.conformsTo

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:215

---

### constant

▸ **constant**(): [`Function`](lodash.Function.md)\<() => `TValue`\>

#### Returns

[`Function`](lodash.Function.md)\<() => `TValue`\>

**`See`**

\_.constant

#### Defined in

node_modules/@types/lodash/common/util.d.ts:122

---

### deburr

▸ **deburr**(): `string`

#### Returns

`string`

**`See`**

\_.deburr

#### Defined in

node_modules/@types/lodash/common/string.d.ts:61

---

### defaultTo

▸ **defaultTo**(`defaultValue`): `TValue`

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `defaultValue` | `TValue` |

#### Returns

`TValue`

**`See`**

\_.defaultTo

#### Defined in

node_modules/@types/lodash/common/util.d.ts:151

▸ **defaultTo**\<`TDefault`\>(`defaultValue`): `TValue` extends `undefined` \| `null` ? `TDefault` :
`TValue` \| `TDefault`

#### Type parameters

| Name       |
| :--------- |
| `TDefault` |

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `defaultValue` | `TDefault` |

#### Returns

`TValue` extends `undefined` \| `null` ? `TDefault` : `TValue` \| `TDefault`

**`See`**

\_.defaultTo

#### Defined in

node_modules/@types/lodash/common/util.d.ts:155

---

### defer

▸ **defer**(`...args`): [`Primitive`](lodash.Primitive.md)\<`number`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`Primitive`](lodash.Primitive.md)\<`number`\>

**`See`**

\_.defer

#### Defined in

node_modules/@types/lodash/common/function.d.ts:469

---

### delay

▸ **delay**(`wait`, `...args`): [`Primitive`](lodash.Primitive.md)\<`number`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `wait`    | `number` |
| `...args` | `any`[]  |

#### Returns

[`Primitive`](lodash.Primitive.md)\<`number`\>

**`See`**

\_.delay

#### Defined in

node_modules/@types/lodash/common/function.d.ts:492

---

### divide

▸ **divide**(`divisor`): `number`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `divisor` | `number` |

#### Returns

`number`

**`See`**

\_.divide

#### Defined in

node_modules/@types/lodash/common/math.d.ts:63

---

### endsWith

▸ **endsWith**(`target?`, `position?`): `boolean`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

`boolean`

**`See`**

\_.endsWith

#### Defined in

node_modules/@types/lodash/common/string.d.ts:85

---

### entries

▸ **entries**(): [`Collection`](lodash.Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](lodash.Collection.md)\<[`string`, `any`]\>

**`See`**

\_.entries

#### Defined in

node_modules/@types/lodash/common/object.d.ts:597

---

### entriesIn

▸ **entriesIn**(): [`Collection`](lodash.Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](lodash.Collection.md)\<[`string`, `any`]\>

**`See`**

\_.entriesIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:631

---

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.eq

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:260

---

### escape

▸ **escape**(): `string`

#### Returns

`string`

**`See`**

\_.escape

#### Defined in

node_modules/@types/lodash/common/string.d.ts:118

---

### escapeRegExp

▸ **escapeRegExp**(): `string`

#### Returns

`string`

**`See`**

\_.escapeRegExp

#### Defined in

node_modules/@types/lodash/common/string.d.ts:141

---

### findKey

▸ **findKey**(`predicate?`): `undefined` \| `string`

#### Parameters

| Name         | Type                                                                |
| :----------- | :------------------------------------------------------------------ |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)\<`TValue`\> |

#### Returns

`undefined` \| `string`

**`See`**

\_.findKey

#### Defined in

node_modules/@types/lodash/common/object.d.ts:816

---

### findLastKey

▸ **findLastKey**(`predicate?`): `undefined` \| `string`

#### Parameters

| Name         | Type                                                                |
| :----------- | :------------------------------------------------------------------ |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)\<`TValue`\> |

#### Returns

`undefined` \| `string`

**`See`**

\_.findLastKey

#### Defined in

node_modules/@types/lodash/common/object.d.ts:838

---

### floor

▸ **floor**(`precision?`): `number`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

**`See`**

\_.floor

#### Defined in

node_modules/@types/lodash/common/math.d.ts:86

---

### forIn

▸ **forIn**(`iteratee?`): `this`

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)\<`TValue`, `any`\> |

#### Returns

`this`

**`See`**

\_.forIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:866

---

### forInRight

▸ **forInRight**(`iteratee?`): `this`

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)\<`TValue`, `any`\> |

#### Returns

`this`

**`See`**

\_.forInRight

#### Defined in

node_modules/@types/lodash/common/object.d.ts:892

---

### forOwn

▸ **forOwn**(`iteratee?`): `this`

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)\<`TValue`, `any`\> |

#### Returns

`this`

**`See`**

\_.forOwn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:920

---

### forOwnRight

▸ **forOwnRight**(`iteratee?`): `this`

#### Parameters

| Name        | Type                                                                       |
| :---------- | :------------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)\<`TValue`, `any`\> |

#### Returns

`this`

**`See`**

\_.forOwnRight

#### Defined in

node_modules/@types/lodash/common/object.d.ts:946

---

### functions

▸ **functions**(): [`Collection`](lodash.Collection.md)\<`string`\>

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.functions

#### Defined in

node_modules/@types/lodash/common/object.d.ts:980

---

### functionsIn

▸ **functionsIn**(): [`Collection`](lodash.Collection.md)\<`string`\>

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.functionsIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1014

---

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.gt

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:283

---

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.gte

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:306

---

### has

▸ **has**(`path`): `boolean`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

`boolean`

**`See`**

\_.has

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1336

---

### hasIn

▸ **hasIn**(`path`): `boolean`

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

`boolean`

**`See`**

\_.hasIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1374

---

### identity

▸ **identity**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.identity

#### Defined in

node_modules/@types/lodash/common/util.d.ts:387

---

### inRange

▸ **inRange**(`start`, `end?`): `boolean`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end?`  | `number` |

#### Returns

`boolean`

**`See`**

\_.inRange

#### Defined in

node_modules/@types/lodash/common/number.d.ts:77

---

### invert

▸ **invert**(): [`Object`](lodash.Object.md)\<[`Dictionary`](lodash.Dictionary.md)\<`string`\>\>

#### Returns

[`Object`](lodash.Object.md)\<[`Dictionary`](lodash.Dictionary.md)\<`string`\>\>

**`See`**

\_.invert

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1397

---

### invoke

▸ **invoke**(`path`, `...args`): `any`

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `...args` | `any`[]                                             |

#### Returns

`any`

**`See`**

\_.invoke

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1476

---

### invokeMap

▸ **invokeMap**(`methodName`, `...args`): [`Collection`](lodash.Collection.md)\<`any`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `methodName` | `string` |
| `...args`    | `any`[]  |

#### Returns

[`Collection`](lodash.Collection.md)\<`any`\>

**`See`**

\_.invokeMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1065

▸ **invokeMap**\<`TResult`\>(`method`, `...args`): [`Collection`](lodash.Collection.md)\<`TResult`\>

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

[`Collection`](lodash.Collection.md)\<`TResult`\>

**`See`**

\_.invokeMap

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1069

---

### isArguments

▸ **isArguments**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isArguments

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:328

---

### isArray

▸ **isArray**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:354

---

### isArrayBuffer

▸ **isArrayBuffer**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isArrayBuffer

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:376

---

### isArrayLike

▸ **isArrayLike**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isArrayLike

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:422

---

### isArrayLikeObject

▸ **isArrayLikeObject**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isArrayLikeObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:467

---

### isBoolean

▸ **isBoolean**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isBoolean

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:489

---

### isBuffer

▸ **isBuffer**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isBuffer

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:511

---

### isDate

▸ **isDate**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isDate

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:533

---

### isElement

▸ **isElement**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isElement

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:555

---

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isEmpty

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:585

---

### isEqual

▸ **isEqual**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.isEqual

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:626

---

### isEqualWith

▸ **isEqualWith**(`other`, `customizer?`): `boolean`

#### Parameters

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `other`       | `any`                                                         |
| `customizer?` | [`IsEqualCustomizer`](../modules/lodash.md#isequalcustomizer) |

#### Returns

`boolean`

**`See`**

\_.isEqualWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:672

---

### isError

▸ **isError**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isError

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:695

---

### isFinite

▸ **isFinite**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isFinite

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:719

---

### isFunction

▸ **isFunction**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isFunction

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:741

---

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isInteger

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:779

---

### isLength

▸ **isLength**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isLength

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:817

---

### isMap

▸ **isMap**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isMap

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:839

---

### isMatch

▸ **isMatch**(`source`): `boolean`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `source` | `object` |

#### Returns

`boolean`

**`See`**

\_.isMatch

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:875

---

### isMatchWith

▸ **isMatchWith**(`source`, `customizer`): `boolean`

#### Parameters

| Name         | Type                                                                  |
| :----------- | :-------------------------------------------------------------------- |
| `source`     | `object`                                                              |
| `customizer` | [`isMatchWithCustomizer`](../modules/lodash.md#ismatchwithcustomizer) |

#### Returns

`boolean`

**`See`**

\_.isMatchWith

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:921

---

### isNaN

▸ **isNaN**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isNaN

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:945

---

### isNative

▸ **isNative**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isNative

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:967

---

### isNil

▸ **isNil**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isNil

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1000

---

### isNull

▸ **isNull**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isNull

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1022

---

### isNumber

▸ **isNumber**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isNumber

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1046

---

### isObject

▸ **isObject**(): this is LoDashImplicitWrapper\<object\>

#### Returns

this is LoDashImplicitWrapper\<object\>

**`See`**

\_.isObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1069

---

### isObjectLike

▸ **isObjectLike**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isObjectLike

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1106

---

### isPlainObject

▸ **isPlainObject**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isPlainObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1131

---

### isRegExp

▸ **isRegExp**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isRegExp

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1153

---

### isSafeInteger

▸ **isSafeInteger**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isSafeInteger

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1192

---

### isSet

▸ **isSet**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isSet

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1214

---

### isString

▸ **isString**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isString

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1236

---

### isSymbol

▸ **isSymbol**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isSymbol

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1266

---

### isTypedArray

▸ **isTypedArray**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isTypedArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1288

---

### isUndefined

▸ **isUndefined**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isUndefined

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1310

---

### isWeakMap

▸ **isWeakMap**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isWeakMap

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1332

---

### isWeakSet

▸ **isWeakSet**(): `boolean`

#### Returns

`boolean`

**`See`**

\_.isWeakSet

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1354

---

### kebabCase

▸ **kebabCase**(): `string`

#### Returns

`string`

**`See`**

\_.kebabCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:163

---

### keys

▸ **keys**(): [`Collection`](lodash.Collection.md)\<`string`\>

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.keys

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1499

---

### keysIn

▸ **keysIn**(): [`Collection`](lodash.Collection.md)\<`string`\>

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.keysIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1522

---

### lowerCase

▸ **lowerCase**(): `string`

#### Returns

`string`

**`See`**

\_.lowerCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:185

---

### lowerFirst

▸ **lowerFirst**(): `string`

#### Returns

`string`

**`See`**

\_.lowerFirst

#### Defined in

node_modules/@types/lodash/common/string.d.ts:207

---

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.lt

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1377

---

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

**`See`**

\_.lte

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1400

---

### matches

▸ **matches**\<`V`\>(): [`Function`](lodash.Function.md)\<(`value`: `V`) => `boolean`\>

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Returns

[`Function`](lodash.Function.md)\<(`value`: `V`) => `boolean`\>

**`See`**

\_.matches

#### Defined in

node_modules/@types/lodash/common/util.d.ts:507

---

### matchesProperty

▸ **matchesProperty**\<`SrcValue`\>(`srcValue`): [`Function`](lodash.Function.md)\<(`value`: `any`)
=> `boolean`\>

#### Type parameters

| Name       |
| :--------- |
| `SrcValue` |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `srcValue` | `SrcValue` |

#### Returns

[`Function`](lodash.Function.md)\<(`value`: `any`) => `boolean`\>

**`See`**

\_.matchesProperty

#### Defined in

node_modules/@types/lodash/common/util.d.ts:537

▸ **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`):
[`Function`](lodash.Function.md)\<(`value`: `Value`) => `boolean`\>

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

[`Function`](lodash.Function.md)\<(`value`: `Value`) => `boolean`\>

**`See`**

\_.matchesProperty

#### Defined in

node_modules/@types/lodash/common/util.d.ts:541

---

### mean

▸ **mean**(): `number`

#### Returns

`number`

**`See`**

\_.mean

#### Defined in

node_modules/@types/lodash/common/math.d.ts:173

---

### method

▸ **method**(`...args`): [`Function`](lodash.Function.md)\<(`object`: `any`) => `any`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`Function`](lodash.Function.md)\<(`object`: `any`) => `any`\>

**`See`**

\_.method

#### Defined in

node_modules/@types/lodash/common/util.d.ts:569

---

### methodOf

▸ **methodOf**(`...args`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.methodOf

#### Defined in

node_modules/@types/lodash/common/util.d.ts:593

---

### mixin

▸ **mixin**(`source`, `options?`): `this`

#### Parameters

| Name       | Type                                                                  |
| :--------- | :-------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)\<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                              |

#### Returns

`this`

**`See`**

\_.mixin

#### Defined in

node_modules/@types/lodash/common/util.d.ts:632

▸ **mixin**(`options?`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md) |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.mixin

#### Defined in

node_modules/@types/lodash/common/util.d.ts:636

---

### multiply

▸ **multiply**(`multiplicand`): `number`

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `multiplicand` | `number` |

#### Returns

`number`

**`See`**

\_.multiply

#### Defined in

node_modules/@types/lodash/common/math.d.ts:283

---

### noConflict

▸ **noConflict**(): [`LoDashStatic`](lodash.LoDashStatic.md)

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

**`See`**

\_.noConflict

#### Defined in

node_modules/@types/lodash/common/util.d.ts:661

---

### noop

▸ **noop**(`...args`): `void`

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

`void`

**`See`**

\_.noop

#### Defined in

node_modules/@types/lodash/common/util.d.ts:682

---

### now

▸ **now**(): `number`

#### Returns

`number`

**`See`**

\_.now

#### Defined in

node_modules/@types/lodash/common/date.d.ts:15

---

### nthArg

▸ **nthArg**(): [`Function`](lodash.Function.md)\<(...`args`: `any`[]) => `any`\>

#### Returns

[`Function`](lodash.Function.md)\<(...`args`: `any`[]) => `any`\>

**`See`**

\_.nthArg

#### Defined in

node_modules/@types/lodash/common/util.d.ts:704

---

### pad

▸ **pad**(`length?`, `chars?`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

**`See`**

\_.pad

#### Defined in

node_modules/@types/lodash/common/string.d.ts:232

---

### padEnd

▸ **padEnd**(`length?`, `chars?`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

**`See`**

\_.padEnd

#### Defined in

node_modules/@types/lodash/common/string.d.ts:257

---

### padStart

▸ **padStart**(`length?`, `chars?`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

**`See`**

\_.padStart

#### Defined in

node_modules/@types/lodash/common/string.d.ts:282

---

### parseInt

▸ **parseInt**(`radix?`): `number`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `radix?` | `number` |

#### Returns

`number`

**`See`**

\_.parseInt

#### Defined in

node_modules/@types/lodash/common/string.d.ts:308

---

### plant

▸ **plant**(`value`): `this`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

`this`

**`See`**

\_.plant

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:95

---

### property

▸ **property**\<`TObj`, `TResult`\>(): [`Function`](lodash.Function.md)\<(`obj`: `TObj`) =>
`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TObj`    |
| `TResult` |

#### Returns

[`Function`](lodash.Function.md)\<(`obj`: `TObj`) => `TResult`\>

**`See`**

\_.property

#### Defined in

node_modules/@types/lodash/common/util.d.ts:839

---

### propertyOf

▸ **propertyOf**(): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)\<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.propertyOf

#### Defined in

node_modules/@types/lodash/common/util.d.ts:862

---

### random

▸ **random**(`floating?`): `number`

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `floating?` | `boolean` |

#### Returns

`number`

**`See`**

\_.random

#### Defined in

node_modules/@types/lodash/common/number.d.ts:115

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

node_modules/@types/lodash/common/number.d.ts:119

---

### range

▸ **range**(`end?`, `step?`): [`Collection`](lodash.Collection.md)\<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`Collection`](lodash.Collection.md)\<`number`\>

**`See`**

\_.range

#### Defined in

node_modules/@types/lodash/common/util.d.ts:892

---

### rangeRight

▸ **rangeRight**(`end?`, `step?`): [`Collection`](lodash.Collection.md)\<`number`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`Collection`](lodash.Collection.md)\<`number`\>

**`See`**

\_.rangeRight

#### Defined in

node_modules/@types/lodash/common/util.d.ts:944

---

### repeat

▸ **repeat**(`n?`): `string`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

`string`

**`See`**

\_.repeat

#### Defined in

node_modules/@types/lodash/common/string.d.ts:331

---

### replace

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

node_modules/@types/lodash/common/string.d.ts:359

▸ **replace**(`replacement`): `string`

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

`string`

**`See`**

\_.replace

#### Defined in

node_modules/@types/lodash/common/string.d.ts:363

---

### result

▸ **result**\<`TResult`\>(`path`, `defaultValue?`): `TResult`

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

`TResult`

**`See`**

\_.result

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2181

---

### reverse

▸ **reverse**(): `this`

#### Returns

`this`

**`See`**

\_.reverse

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:108

---

### round

▸ **round**(`precision?`): `number`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

**`See`**

\_.round

#### Defined in

node_modules/@types/lodash/common/math.d.ts:306

---

### runInContext

▸ **runInContext**(): [`LoDashStatic`](lodash.LoDashStatic.md)

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

**`See`**

\_.runInContext

#### Defined in

node_modules/@types/lodash/common/util.d.ts:966

---

### set

▸ **set**(`path`, `value`): `this`

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

`this`

**`See`**

\_.set

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2210

▸ **set**\<`TResult`\>(`path`, `value`): [`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

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

[`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

**`See`**

\_.set

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2214

---

### setWith

▸ **setWith**(`path`, `value`, `customizer?`): `this`

#### Parameters

| Name          | Type                                                                      |
| :------------ | :------------------------------------------------------------------------ |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                       |
| `value`       | `any`                                                                     |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)\<`TValue`\> |

#### Returns

`this`

**`See`**

\_.setWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2249

▸ **setWith**\<`TResult`\>(`path`, `value`, `customizer?`):
[`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                      |
| :------------ | :------------------------------------------------------------------------ |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                       |
| `value`       | `any`                                                                     |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)\<`TValue`\> |

#### Returns

[`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

**`See`**

\_.setWith

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2253

---

### size

▸ **size**(): `number`

#### Returns

`number`

**`See`**

\_.size

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1825

---

### snakeCase

▸ **snakeCase**(): `string`

#### Returns

`string`

**`See`**

\_.snakeCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:389

---

### split

▸ **split**(`separator?`, `limit?`): [`Collection`](lodash.Collection.md)\<`string`\>

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `separator?` | `string` \| `RegExp` |
| `limit?`     | `number`             |

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.split

#### Defined in

node_modules/@types/lodash/common/string.d.ts:419

---

### startCase

▸ **startCase**(): `string`

#### Returns

`string`

**`See`**

\_.startCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:441

---

### startsWith

▸ **startsWith**(`target?`, `position?`): `boolean`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

`boolean`

**`See`**

\_.startsWith

#### Defined in

node_modules/@types/lodash/common/string.d.ts:465

---

### stubArray

▸ **stubArray**(): `any`[]

#### Returns

`any`[]

**`See`**

\_.stubArray

#### Defined in

node_modules/@types/lodash/common/util.d.ts:981

---

### stubFalse

▸ **stubFalse**(): `false`

#### Returns

`false`

**`See`**

\_.stubFalse

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1002

▸ **stubFalse**(): `false`

#### Returns

`false`

**`See`**

\_.stubFalse

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1211

---

### stubObject

▸ **stubObject**(): `any`

#### Returns

`any`

**`See`**

\_.stubObject

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1023

---

### stubString

▸ **stubString**(): `string`

#### Returns

`string`

**`See`**

\_.stubString

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1044

---

### stubTrue

▸ **stubTrue**(): `true`

#### Returns

`true`

**`See`**

\_.stubTrue

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1065

▸ **stubTrue**(): `true`

#### Returns

`true`

**`See`**

\_.stubTrue

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1186

---

### subtract

▸ **subtract**(`subtrahend`): `number`

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `subtrahend` | `number` |

#### Returns

`number`

**`See`**

\_.subtract

#### Defined in

node_modules/@types/lodash/common/math.d.ts:334

---

### sum

▸ **sum**(): `number`

#### Returns

`number`

**`See`**

\_.sum

#### Defined in

node_modules/@types/lodash/common/math.d.ts:361

---

### tap

▸ **tap**(`interceptor`): `this`

#### Parameters

| Name          | Type                          |
| :------------ | :---------------------------- |
| `interceptor` | (`value`: `TValue`) => `void` |

#### Returns

`this`

**`See`**

\_.tap

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:179

---

### template

▸ **template**(`options?`): [`TemplateExecutor`](lodash.TemplateExecutor.md)

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TemplateOptions`](lodash.TemplateOptions.md) |

#### Returns

[`TemplateExecutor`](lodash.TemplateExecutor.md)

**`See`**

\_.template

#### Defined in

node_modules/@types/lodash/common/string.d.ts:520

---

### thru

▸ **thru**\<`TResult`\>(`interceptor`): [`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                             |
| :------------ | :------------------------------- |
| `interceptor` | (`value`: `TValue`) => `TResult` |

#### Returns

[`ImpChain`](../modules/lodash.md#impchain)\<`TResult`\>

**`See`**

\_.thru

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:202

---

### times

▸ **times**\<`TResult`\>(`iteratee`): `TResult`[]

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name       | Type                           |
| :--------- | :----------------------------- |
| `iteratee` | (`num`: `number`) => `TResult` |

#### Returns

`TResult`[]

**`See`**

\_.times

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1093

▸ **times**(): `number`[]

#### Returns

`number`[]

**`See`**

\_.times

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1097

---

### toFinite

▸ **toFinite**(): `number`

#### Returns

`number`

**`See`**

\_.toFinite

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1497

---

### toInteger

▸ **toInteger**(): `number`

#### Returns

`number`

**`See`**

\_.toInteger

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1535

---

### toJSON

▸ **toJSON**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.toJSON

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:121

---

### toLength

▸ **toLength**(): `number`

#### Returns

`number`

**`See`**

\_.toLength

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1574

---

### toLower

▸ **toLower**(): `string`

#### Returns

`string`

**`See`**

\_.toLower

#### Defined in

node_modules/@types/lodash/common/string.d.ts:542

---

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

**`See`**

\_.toNumber

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1610

---

### toPairs

▸ **toPairs**(): [`Collection`](lodash.Collection.md)\<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)\<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](lodash.Collection.md)\<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)\<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairs

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2282

---

### toPairsIn

▸ **toPairsIn**(): [`Collection`](lodash.Collection.md)\<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)\<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](lodash.Collection.md)\<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)\<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairsIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2307

---

### toPath

▸ **toPath**(): [`Collection`](lodash.Collection.md)\<`string`\>

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.toPath

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1140

---

### toPlainObject

▸ **toPlainObject**(): [`Object`](lodash.Object.md)\<`any`\>

#### Returns

[`Object`](lodash.Object.md)\<`any`\>

**`See`**

\_.toPlainObject

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1633

---

### toSafeInteger

▸ **toSafeInteger**(): `number`

#### Returns

`number`

**`See`**

\_.toSafeInteger

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1670

---

### toUpper

▸ **toUpper**(): `string`

#### Returns

`string`

**`See`**

\_.toUpper

#### Defined in

node_modules/@types/lodash/common/string.d.ts:564

---

### trim

▸ **trim**(`chars?`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

**`See`**

\_.trim

#### Defined in

node_modules/@types/lodash/common/string.d.ts:591

---

### trimEnd

▸ **trimEnd**(`chars?`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

**`See`**

\_.trimEnd

#### Defined in

node_modules/@types/lodash/common/string.d.ts:618

---

### trimStart

▸ **trimStart**(`chars?`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

**`See`**

\_.trimStart

#### Defined in

node_modules/@types/lodash/common/string.d.ts:645

---

### truncate

▸ **truncate**(`options?`): `string`

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TruncateOptions`](lodash.TruncateOptions.md) |

#### Returns

`string`

**`See`**

\_.truncate

#### Defined in

node_modules/@types/lodash/common/string.d.ts:683

---

### unescape

▸ **unescape**(): `string`

#### Returns

`string`

**`See`**

\_.unescape

#### Defined in

node_modules/@types/lodash/common/string.d.ts:709

---

### uniqueId

▸ **uniqueId**(): `string`

#### Returns

`string`

**`See`**

\_.uniqueId

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1162

---

### unset

▸ **unset**(`path`): [`Primitive`](lodash.Primitive.md)\<`boolean`\>

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`Primitive`](lodash.Primitive.md)\<`boolean`\>

**`See`**

\_.unset

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2409

---

### update

▸ **update**(`path`, `updater`): [`Object`](lodash.Object.md)\<`any`\>

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `updater` | (`value`: `any`) => `any`                           |

#### Returns

[`Object`](lodash.Object.md)\<`any`\>

**`See`**

\_.update

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2433

---

### upperCase

▸ **upperCase**(): `string`

#### Returns

`string`

**`See`**

\_.upperCase

#### Defined in

node_modules/@types/lodash/common/string.d.ts:731

---

### upperFirst

▸ **upperFirst**(): `string`

#### Returns

`string`

**`See`**

\_.upperFirst

#### Defined in

node_modules/@types/lodash/common/string.d.ts:753

---

### value

▸ **value**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.value

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf

▸ **valueOf**(): `TValue`

#### Returns

`TValue`

**`See`**

\_.valueOf

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:154

---

### words

▸ **words**(`pattern?`): [`Collection`](lodash.Collection.md)\<`string`\>

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `pattern?` | `string` \| `RegExp` |

#### Returns

[`Collection`](lodash.Collection.md)\<`string`\>

**`See`**

\_.words

#### Defined in

node_modules/@types/lodash/common/string.d.ts:780

---

### wrap

▸ **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`Function`](lodash.Function.md)\<(...`args`:
`TArgs`[]) => `TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TArgs`   |
| `TResult` |

#### Parameters

| Name      | Type                                                   |
| :-------- | :----------------------------------------------------- |
| `wrapper` | (`value`: `TValue`, ...`args`: `TArgs`[]) => `TResult` |

#### Returns

[`Function`](lodash.Function.md)\<(...`args`: `TArgs`[]) => `TResult`\>

**`See`**

\_.wrap

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1438
