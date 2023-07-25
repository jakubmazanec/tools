# Interface: LoDashImplicitWrapper<TValue\>

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

**`See`**

\_.add

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `addend` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:17

---

### attempt

▸ **attempt**<`TResult`\>(`...args`): `Error` \| `TResult`

**`See`**

\_.attempt

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:17

---

### bind

▸ **bind**(`thisArg`, `...partials`): [`Function`](lodash.Function.md)<(...`args`: `any`[]) =>
`any`\>

**`See`**

\_.bind

#### Parameters

| Name          | Type    |
| :------------ | :------ |
| `thisArg`     | `any`   |
| `...partials` | `any`[] |

#### Returns

[`Function`](lodash.Function.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:99

---

### bindAll

▸ **bindAll**(`...methodNames`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.bindAll

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `...methodNames` | [`Many`](../modules/lodash.md#many)<`string`\>[] |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:45

---

### bindKey

▸ **bindKey**(`key`, `...partials`): [`Function`](lodash.Function.md)<(...`args`: `any`[]) =>
`any`\>

**`See`**

\_.bindKey

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `key`         | `string` |
| `...partials` | `any`[]  |

#### Returns

[`Function`](lodash.Function.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:133

---

### camelCase

▸ **camelCase**(): `string`

**`See`**

\_.camelCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:16

---

### capitalize

▸ **capitalize**(): `string`

**`See`**

\_.capitalize

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:38

---

### ceil

▸ **ceil**(`precision?`): `number`

**`See`**

\_.ceil

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:40

---

### clamp

▸ **clamp**(`lower`, `upper`): `number`

**`See`**

\_.clamp

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `lower` | `number` |
| `upper` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/number.d.ts:44

▸ **clamp**(`upper`): `number`

**`See`**

\_.clamp

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `upper` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/number.d.ts:48

---

### clone

▸ **clone**(): `TValue`

**`See`**

\_.clone

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep

▸ **cloneDeep**(): `TValue`

**`See`**

\_.cloneDeep

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:105

---

### cloneDeepWith

▸ **cloneDeepWith**(`customizer`): `any`

**`See`**

\_.cloneDeepWith

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)<`TValue`\> |

#### Returns

`any`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:109

▸ **cloneDeepWith**(): `TValue`

**`See`**

\_.cloneDeepWith

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:113

---

### cloneWith

▸ **cloneWith**<`TResult`\>(`customizer`): `TResult`

**`See`**

\_.cloneWith

#### Type parameters

| Name      | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| `TResult` | extends `null` \| `string` \| `number` \| `boolean` \| `object` |

#### Parameters

| Name         | Type                                                                                    |
| :----------- | :-------------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`TValue`, `TResult`\> |

#### Returns

`TResult`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:117

▸ **cloneWith**<`TResult`\>(`customizer`): `TValue` \| `TResult`

**`See`**

\_.cloneWith

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name         | Type                                                                                                   |
| :----------- | :----------------------------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`TValue`, `undefined` \| `TResult`\> |

#### Returns

`TValue` \| `TResult`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:121

▸ **cloneWith**(): `TValue`

**`See`**

\_.cloneWith

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:125

---

### commit

▸ **commit**(): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.commit

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:82

---

### conforms

▸ **conforms**(): [`Function`](lodash.Function.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\>) => `boolean`\>

**`See`**

\_.conforms

#### Returns

[`Function`](lodash.Function.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\>) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:100

---

### conformsTo

▸ **conformsTo**(`source`): `boolean`

**`See`**

\_.conformsTo

#### Parameters

| Name     | Type                                                                                 |
| :------- | :----------------------------------------------------------------------------------- |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\> |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:215

---

### constant

▸ **constant**(): [`Function`](lodash.Function.md)<() => `TValue`\>

**`See`**

\_.constant

#### Returns

[`Function`](lodash.Function.md)<() => `TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:122

---

### deburr

▸ **deburr**(): `string`

**`See`**

\_.deburr

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:61

---

### defaultTo

▸ **defaultTo**(`defaultValue`): `TValue`

**`See`**

\_.defaultTo

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `defaultValue` | `TValue` |

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:151

▸ **defaultTo**<`TDefault`\>(`defaultValue`): `TValue` extends `undefined` \| `null` ? `TDefault` :
`TValue` \| `TDefault`

**`See`**

\_.defaultTo

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:155

---

### defer

▸ **defer**(`...args`): [`Primitive`](lodash.Primitive.md)<`number`\>

**`See`**

\_.defer

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`Primitive`](lodash.Primitive.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:469

---

### delay

▸ **delay**(`wait`, `...args`): [`Primitive`](lodash.Primitive.md)<`number`\>

**`See`**

\_.delay

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `wait`    | `number` |
| `...args` | `any`[]  |

#### Returns

[`Primitive`](lodash.Primitive.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:492

---

### divide

▸ **divide**(`divisor`): `number`

**`See`**

\_.divide

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `divisor` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:63

---

### endsWith

▸ **endsWith**(`target?`, `position?`): `boolean`

**`See`**

\_.endsWith

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:85

---

### entries

▸ **entries**(): [`Collection`](lodash.Collection.md)<[`string`, `any`]\>

**`See`**

\_.entries

#### Returns

[`Collection`](lodash.Collection.md)<[`string`, `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:597

---

### entriesIn

▸ **entriesIn**(): [`Collection`](lodash.Collection.md)<[`string`, `any`]\>

**`See`**

\_.entriesIn

#### Returns

[`Collection`](lodash.Collection.md)<[`string`, `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:631

---

### eq

▸ **eq**(`other`): `boolean`

**`See`**

\_.eq

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:260

---

### escape

▸ **escape**(): `string`

**`See`**

\_.escape

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:118

---

### escapeRegExp

▸ **escapeRegExp**(): `string`

**`See`**

\_.escapeRegExp

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:141

---

### findKey

▸ **findKey**(`predicate?`): `undefined` \| `string`

**`See`**

\_.findKey

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`TValue`\> |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:816

---

### findLastKey

▸ **findLastKey**(`predicate?`): `undefined` \| `string`

**`See`**

\_.findLastKey

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`TValue`\> |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:838

---

### floor

▸ **floor**(`precision?`): `number`

**`See`**

\_.floor

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:86

---

### forIn

▸ **forIn**(`iteratee?`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.forIn

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:866

---

### forInRight

▸ **forInRight**(`iteratee?`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.forInRight

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:892

---

### forOwn

▸ **forOwn**(`iteratee?`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.forOwn

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:920

---

### forOwnRight

▸ **forOwnRight**(`iteratee?`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.forOwnRight

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:946

---

### functions

▸ **functions**(): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.functions

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:980

---

### functionsIn

▸ **functionsIn**(): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.functionsIn

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1014

---

### gt

▸ **gt**(`other`): `boolean`

**`See`**

\_.gt

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:283

---

### gte

▸ **gte**(`other`): `boolean`

**`See`**

\_.gte

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:306

---

### has

▸ **has**(`path`): `boolean`

**`See`**

\_.has

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1336

---

### hasIn

▸ **hasIn**(`path`): `boolean`

**`See`**

\_.hasIn

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1374

---

### identity

▸ **identity**(): `TValue`

**`See`**

\_.identity

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:387

---

### inRange

▸ **inRange**(`start`, `end?`): `boolean`

**`See`**

\_.inRange

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end?`  | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/number.d.ts:77

---

### invert

▸ **invert**(): [`Object`](lodash.Object.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

**`See`**

\_.invert

#### Returns

[`Object`](lodash.Object.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1397

---

### invoke

▸ **invoke**(`path`, `...args`): `any`

**`See`**

\_.invoke

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `...args` | `any`[]                                             |

#### Returns

`any`

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1476

---

### invokeMap

▸ **invokeMap**(`methodName`, `...args`): [`Collection`](lodash.Collection.md)<`any`\>

**`See`**

\_.invokeMap

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `methodName` | `string` |
| `...args`    | `any`[]  |

#### Returns

[`Collection`](lodash.Collection.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1065

▸ **invokeMap**<`TResult`\>(`method`, `...args`): [`Collection`](lodash.Collection.md)<`TResult`\>

**`See`**

\_.invokeMap

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

[`Collection`](lodash.Collection.md)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1069

---

### isArguments

▸ **isArguments**(): `boolean`

**`See`**

\_.isArguments

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:328

---

### isArray

▸ **isArray**(): `boolean`

**`See`**

\_.isArray

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:354

---

### isArrayBuffer

▸ **isArrayBuffer**(): `boolean`

**`See`**

\_.isArrayBuffer

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:376

---

### isArrayLike

▸ **isArrayLike**(): `boolean`

**`See`**

\_.isArrayLike

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:422

---

### isArrayLikeObject

▸ **isArrayLikeObject**(): `boolean`

**`See`**

\_.isArrayLikeObject

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:467

---

### isBoolean

▸ **isBoolean**(): `boolean`

**`See`**

\_.isBoolean

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:489

---

### isBuffer

▸ **isBuffer**(): `boolean`

**`See`**

\_.isBuffer

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:511

---

### isDate

▸ **isDate**(): `boolean`

**`See`**

\_.isDate

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:533

---

### isElement

▸ **isElement**(): `boolean`

**`See`**

\_.isElement

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:555

---

### isEmpty

▸ **isEmpty**(): `boolean`

**`See`**

\_.isEmpty

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:585

---

### isEqual

▸ **isEqual**(`other`): `boolean`

**`See`**

\_.isEqual

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:626

---

### isEqualWith

▸ **isEqualWith**(`other`, `customizer?`): `boolean`

**`See`**

\_.isEqualWith

#### Parameters

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `other`       | `any`                                                         |
| `customizer?` | [`IsEqualCustomizer`](../modules/lodash.md#isequalcustomizer) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:672

---

### isError

▸ **isError**(): `boolean`

**`See`**

\_.isError

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:695

---

### isFinite

▸ **isFinite**(): `boolean`

**`See`**

\_.isFinite

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:719

---

### isFunction

▸ **isFunction**(): `boolean`

**`See`**

\_.isFunction

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:741

---

### isInteger

▸ **isInteger**(): `boolean`

**`See`**

\_.isInteger

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:779

---

### isLength

▸ **isLength**(): `boolean`

**`See`**

\_.isLength

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:817

---

### isMap

▸ **isMap**(): `boolean`

**`See`**

\_.isMap

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:839

---

### isMatch

▸ **isMatch**(`source`): `boolean`

**`See`**

\_.isMatch

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `source` | `object` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:875

---

### isMatchWith

▸ **isMatchWith**(`source`, `customizer`): `boolean`

**`See`**

\_.isMatchWith

#### Parameters

| Name         | Type                                                                  |
| :----------- | :-------------------------------------------------------------------- |
| `source`     | `object`                                                              |
| `customizer` | [`isMatchWithCustomizer`](../modules/lodash.md#ismatchwithcustomizer) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:921

---

### isNaN

▸ **isNaN**(): `boolean`

**`See`**

\_.isNaN

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:945

---

### isNative

▸ **isNative**(): `boolean`

**`See`**

\_.isNative

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:967

---

### isNil

▸ **isNil**(): `boolean`

**`See`**

\_.isNil

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1000

---

### isNull

▸ **isNull**(): `boolean`

**`See`**

\_.isNull

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1022

---

### isNumber

▸ **isNumber**(): `boolean`

**`See`**

\_.isNumber

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1046

---

### isObject

▸ **isObject**(): this is LoDashImplicitWrapper<object\>

**`See`**

\_.isObject

#### Returns

this is LoDashImplicitWrapper<object\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1069

---

### isObjectLike

▸ **isObjectLike**(): `boolean`

**`See`**

\_.isObjectLike

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1106

---

### isPlainObject

▸ **isPlainObject**(): `boolean`

**`See`**

\_.isPlainObject

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1131

---

### isRegExp

▸ **isRegExp**(): `boolean`

**`See`**

\_.isRegExp

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1153

---

### isSafeInteger

▸ **isSafeInteger**(): `boolean`

**`See`**

\_.isSafeInteger

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1192

---

### isSet

▸ **isSet**(): `boolean`

**`See`**

\_.isSet

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1214

---

### isString

▸ **isString**(): `boolean`

**`See`**

\_.isString

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1236

---

### isSymbol

▸ **isSymbol**(): `boolean`

**`See`**

\_.isSymbol

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1266

---

### isTypedArray

▸ **isTypedArray**(): `boolean`

**`See`**

\_.isTypedArray

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1288

---

### isUndefined

▸ **isUndefined**(): `boolean`

**`See`**

\_.isUndefined

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1310

---

### isWeakMap

▸ **isWeakMap**(): `boolean`

**`See`**

\_.isWeakMap

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1332

---

### isWeakSet

▸ **isWeakSet**(): `boolean`

**`See`**

\_.isWeakSet

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1354

---

### kebabCase

▸ **kebabCase**(): `string`

**`See`**

\_.kebabCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:163

---

### keys

▸ **keys**(): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.keys

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1499

---

### keysIn

▸ **keysIn**(): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.keysIn

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1522

---

### lowerCase

▸ **lowerCase**(): `string`

**`See`**

\_.lowerCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:185

---

### lowerFirst

▸ **lowerFirst**(): `string`

**`See`**

\_.lowerFirst

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:207

---

### lt

▸ **lt**(`other`): `boolean`

**`See`**

\_.lt

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1377

---

### lte

▸ **lte**(`other`): `boolean`

**`See`**

\_.lte

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1400

---

### matches

▸ **matches**<`V`\>(): [`Function`](lodash.Function.md)<(`value`: `V`) => `boolean`\>

**`See`**

\_.matches

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Returns

[`Function`](lodash.Function.md)<(`value`: `V`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:507

---

### matchesProperty

▸ **matchesProperty**<`SrcValue`\>(`srcValue`): [`Function`](lodash.Function.md)<(`value`: `any`) =>
`boolean`\>

**`See`**

\_.matchesProperty

#### Type parameters

| Name       |
| :--------- |
| `SrcValue` |

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `srcValue` | `SrcValue` |

#### Returns

[`Function`](lodash.Function.md)<(`value`: `any`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:537

▸ **matchesProperty**<`SrcValue`, `Value`\>(`srcValue`): [`Function`](lodash.Function.md)<(`value`:
`Value`) => `boolean`\>

**`See`**

\_.matchesProperty

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

[`Function`](lodash.Function.md)<(`value`: `Value`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:541

---

### mean

▸ **mean**(): `number`

**`See`**

\_.mean

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:173

---

### method

▸ **method**(`...args`): [`Function`](lodash.Function.md)<(`object`: `any`) => `any`\>

**`See`**

\_.method

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`Function`](lodash.Function.md)<(`object`: `any`) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:569

---

### methodOf

▸ **methodOf**(`...args`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.methodOf

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:593

---

### mixin

▸ **mixin**(`source`, `options?`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.mixin

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:632

▸ **mixin**(`options?`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.mixin

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md) |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:636

---

### multiply

▸ **multiply**(`multiplicand`): `number`

**`See`**

\_.multiply

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `multiplicand` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:283

---

### noConflict

▸ **noConflict**(): [`LoDashStatic`](lodash.LoDashStatic.md)

**`See`**

\_.noConflict

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:661

---

### noop

▸ **noop**(`...args`): `void`

**`See`**

\_.noop

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:682

---

### now

▸ **now**(): `number`

**`See`**

\_.now

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/date.d.ts:15

---

### nthArg

▸ **nthArg**(): [`Function`](lodash.Function.md)<(...`args`: `any`[]) => `any`\>

**`See`**

\_.nthArg

#### Returns

[`Function`](lodash.Function.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:704

---

### pad

▸ **pad**(`length?`, `chars?`): `string`

**`See`**

\_.pad

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:232

---

### padEnd

▸ **padEnd**(`length?`, `chars?`): `string`

**`See`**

\_.padEnd

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:257

---

### padStart

▸ **padStart**(`length?`, `chars?`): `string`

**`See`**

\_.padStart

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:282

---

### parseInt

▸ **parseInt**(`radix?`): `number`

**`See`**

\_.parseInt

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `radix?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:308

---

### plant

▸ **plant**(`value`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.plant

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:95

---

### property

▸ **property**<`TObj`, `TResult`\>(): [`Function`](lodash.Function.md)<(`obj`: `TObj`) =>
`TResult`\>

**`See`**

\_.property

#### Type parameters

| Name      |
| :-------- |
| `TObj`    |
| `TResult` |

#### Returns

[`Function`](lodash.Function.md)<(`obj`: `TObj`) => `TResult`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:839

---

### propertyOf

▸ **propertyOf**(): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.propertyOf

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:862

---

### random

▸ **random**(`floating?`): `number`

**`See`**

\_.random

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `floating?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/number.d.ts:115

▸ **random**(`max`, `floating?`): `number`

**`See`**

\_.random

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `max`       | `number`  |
| `floating?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/number.d.ts:119

---

### range

▸ **range**(`end?`, `step?`): [`Collection`](lodash.Collection.md)<`number`\>

**`See`**

\_.range

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`Collection`](lodash.Collection.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:892

---

### rangeRight

▸ **rangeRight**(`end?`, `step?`): [`Collection`](lodash.Collection.md)<`number`\>

**`See`**

\_.rangeRight

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`Collection`](lodash.Collection.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:944

---

### repeat

▸ **repeat**(`n?`): `string`

**`See`**

\_.repeat

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:331

---

### replace

▸ **replace**(`pattern`, `replacement`): `string`

**`See`**

\_.replace

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `pattern`     | `string` \| `RegExp`                                                  |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:359

▸ **replace**(`replacement`): `string`

**`See`**

\_.replace

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:363

---

### result

▸ **result**<`TResult`\>(`path`, `defaultValue?`): `TResult`

**`See`**

\_.result

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2181

---

### reverse

▸ **reverse**(): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.reverse

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:108

---

### round

▸ **round**(`precision?`): `number`

**`See`**

\_.round

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:306

---

### runInContext

▸ **runInContext**(): [`LoDashStatic`](lodash.LoDashStatic.md)

**`See`**

\_.runInContext

#### Returns

[`LoDashStatic`](lodash.LoDashStatic.md)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:966

---

### set

▸ **set**(`path`, `value`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.set

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2210

▸ **set**<`TResult`\>(`path`, `value`): [`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

**`See`**

\_.set

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

[`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2214

---

### setWith

▸ **setWith**(`path`, `value`, `customizer?`):
[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.setWith

#### Parameters

| Name          | Type                                                                     |
| :------------ | :----------------------------------------------------------------------- |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                      |
| `value`       | `any`                                                                    |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`TValue`\> |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2249

▸ **setWith**<`TResult`\>(`path`, `value`, `customizer?`):
[`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

**`See`**

\_.setWith

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                                                                     |
| :------------ | :----------------------------------------------------------------------- |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                      |
| `value`       | `any`                                                                    |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`TValue`\> |

#### Returns

[`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2253

---

### size

▸ **size**(): `number`

**`See`**

\_.size

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1821

---

### snakeCase

▸ **snakeCase**(): `string`

**`See`**

\_.snakeCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:389

---

### split

▸ **split**(`separator?`, `limit?`): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.split

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `separator?` | `string` \| `RegExp` |
| `limit?`     | `number`             |

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:419

---

### startCase

▸ **startCase**(): `string`

**`See`**

\_.startCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:441

---

### startsWith

▸ **startsWith**(`target?`, `position?`): `boolean`

**`See`**

\_.startsWith

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:465

---

### stubArray

▸ **stubArray**(): `any`[]

**`See`**

\_.stubArray

#### Returns

`any`[]

#### Defined in

node_modules/@types/lodash/common/util.d.ts:981

---

### stubFalse

▸ **stubFalse**(): `false`

**`See`**

\_.stubFalse

#### Returns

`false`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1002

▸ **stubFalse**(): `false`

**`See`**

\_.stubFalse

#### Returns

`false`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1211

---

### stubObject

▸ **stubObject**(): `any`

**`See`**

\_.stubObject

#### Returns

`any`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1023

---

### stubString

▸ **stubString**(): `string`

**`See`**

\_.stubString

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1044

---

### stubTrue

▸ **stubTrue**(): `true`

**`See`**

\_.stubTrue

#### Returns

`true`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1065

▸ **stubTrue**(): `true`

**`See`**

\_.stubTrue

#### Returns

`true`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1186

---

### subtract

▸ **subtract**(`subtrahend`): `number`

**`See`**

\_.subtract

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `subtrahend` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:334

---

### sum

▸ **sum**(): `number`

**`See`**

\_.sum

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/math.d.ts:361

---

### tap

▸ **tap**(`interceptor`): [`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

**`See`**

\_.tap

#### Parameters

| Name          | Type                          |
| :------------ | :---------------------------- |
| `interceptor` | (`value`: `TValue`) => `void` |

#### Returns

[`LoDashImplicitWrapper`](lodash.LoDashImplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:179

---

### template

▸ **template**(`options?`): [`TemplateExecutor`](lodash.TemplateExecutor.md)

**`See`**

\_.template

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TemplateOptions`](lodash.TemplateOptions.md) |

#### Returns

[`TemplateExecutor`](lodash.TemplateExecutor.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:520

---

### thru

▸ **thru**<`TResult`\>(`interceptor`): [`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

**`See`**

\_.thru

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name          | Type                             |
| :------------ | :------------------------------- |
| `interceptor` | (`value`: `TValue`) => `TResult` |

#### Returns

[`ImpChain`](../modules/lodash.md#impchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:202

---

### times

▸ **times**<`TResult`\>(`iteratee`): `TResult`[]

**`See`**

\_.times

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

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1093

▸ **times**(): `number`[]

**`See`**

\_.times

#### Returns

`number`[]

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1097

---

### toFinite

▸ **toFinite**(): `number`

**`See`**

\_.toFinite

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1497

---

### toInteger

▸ **toInteger**(): `number`

**`See`**

\_.toInteger

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1535

---

### toJSON

▸ **toJSON**(): `TValue`

**`See`**

\_.toJSON

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:121

---

### toLength

▸ **toLength**(): `number`

**`See`**

\_.toLength

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1574

---

### toLower

▸ **toLower**(): `string`

**`See`**

\_.toLower

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:542

---

### toNumber

▸ **toNumber**(): `number`

**`See`**

\_.toNumber

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1610

---

### toPairs

▸ **toPairs**(): [`Collection`](lodash.Collection.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairs

#### Returns

[`Collection`](lodash.Collection.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2282

---

### toPairsIn

▸ **toPairsIn**(): [`Collection`](lodash.Collection.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairsIn

#### Returns

[`Collection`](lodash.Collection.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2307

---

### toPath

▸ **toPath**(): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.toPath

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1140

---

### toPlainObject

▸ **toPlainObject**(): [`Object`](lodash.Object.md)<`any`\>

**`See`**

\_.toPlainObject

#### Returns

[`Object`](lodash.Object.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1633

---

### toSafeInteger

▸ **toSafeInteger**(): `number`

**`See`**

\_.toSafeInteger

#### Returns

`number`

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1670

---

### toUpper

▸ **toUpper**(): `string`

**`See`**

\_.toUpper

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:564

---

### trim

▸ **trim**(`chars?`): `string`

**`See`**

\_.trim

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:591

---

### trimEnd

▸ **trimEnd**(`chars?`): `string`

**`See`**

\_.trimEnd

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:618

---

### trimStart

▸ **trimStart**(`chars?`): `string`

**`See`**

\_.trimStart

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:645

---

### truncate

▸ **truncate**(`options?`): `string`

**`See`**

\_.truncate

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TruncateOptions`](lodash.TruncateOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:683

---

### unescape

▸ **unescape**(): `string`

**`See`**

\_.unescape

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:709

---

### uniqueId

▸ **uniqueId**(): `string`

**`See`**

\_.uniqueId

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1162

---

### unset

▸ **unset**(`path`): [`Primitive`](lodash.Primitive.md)<`boolean`\>

**`See`**

\_.unset

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`Primitive`](lodash.Primitive.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2409

---

### update

▸ **update**(`path`, `updater`): [`Object`](lodash.Object.md)<`any`\>

**`See`**

\_.update

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `updater` | (`value`: `any`) => `any`                           |

#### Returns

[`Object`](lodash.Object.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2433

---

### upperCase

▸ **upperCase**(): `string`

**`See`**

\_.upperCase

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:731

---

### upperFirst

▸ **upperFirst**(): `string`

**`See`**

\_.upperFirst

#### Returns

`string`

#### Defined in

node_modules/@types/lodash/common/string.d.ts:753

---

### value

▸ **value**(): `TValue`

**`See`**

\_.value

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf

▸ **valueOf**(): `TValue`

**`See`**

\_.valueOf

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:154

---

### words

▸ **words**(`pattern?`): [`Collection`](lodash.Collection.md)<`string`\>

**`See`**

\_.words

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `pattern?` | `string` \| `RegExp` |

#### Returns

[`Collection`](lodash.Collection.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:780

---

### wrap

▸ **wrap**<`TArgs`, `TResult`\>(`wrapper`): [`Function`](lodash.Function.md)<(...`args`: `TArgs`[])
=> `TResult`\>

**`See`**

\_.wrap

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

[`Function`](lodash.Function.md)<(...`args`: `TArgs`[]) => `TResult`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1438
