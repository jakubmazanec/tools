# Interface: LoDashExplicitWrapper<TValue\>

[lodash](../modules/lodash.md).LoDashExplicitWrapper

## Type parameters

| Name     |
| :------- |
| `TValue` |

## Hierarchy

- **`LoDashExplicitWrapper`**

  ↳ [`CollectionChain`](lodash.CollectionChain.md)

  ↳ [`FunctionChain`](lodash.FunctionChain.md)

  ↳ [`StringChain`](lodash.StringChain.md)

  ↳ [`StringNullableChain`](lodash.StringNullableChain.md)

  ↳ [`ObjectChain`](lodash.ObjectChain.md)

  ↳ [`PrimitiveChain`](lodash.PrimitiveChain.md)

## Table of contents

### Methods

- [add](lodash.LoDashExplicitWrapper.md#add)
- [attempt](lodash.LoDashExplicitWrapper.md#attempt)
- [bind](lodash.LoDashExplicitWrapper.md#bind)
- [bindAll](lodash.LoDashExplicitWrapper.md#bindall)
- [bindKey](lodash.LoDashExplicitWrapper.md#bindkey)
- [camelCase](lodash.LoDashExplicitWrapper.md#camelcase)
- [capitalize](lodash.LoDashExplicitWrapper.md#capitalize)
- [ceil](lodash.LoDashExplicitWrapper.md#ceil)
- [chain](lodash.LoDashExplicitWrapper.md#chain)
- [clamp](lodash.LoDashExplicitWrapper.md#clamp)
- [clone](lodash.LoDashExplicitWrapper.md#clone)
- [cloneDeep](lodash.LoDashExplicitWrapper.md#clonedeep)
- [cloneDeepWith](lodash.LoDashExplicitWrapper.md#clonedeepwith)
- [cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)
- [commit](lodash.LoDashExplicitWrapper.md#commit)
- [conforms](lodash.LoDashExplicitWrapper.md#conforms)
- [conformsTo](lodash.LoDashExplicitWrapper.md#conformsto)
- [constant](lodash.LoDashExplicitWrapper.md#constant)
- [deburr](lodash.LoDashExplicitWrapper.md#deburr)
- [defaultTo](lodash.LoDashExplicitWrapper.md#defaultto)
- [defer](lodash.LoDashExplicitWrapper.md#defer)
- [delay](lodash.LoDashExplicitWrapper.md#delay)
- [divide](lodash.LoDashExplicitWrapper.md#divide)
- [endsWith](lodash.LoDashExplicitWrapper.md#endswith)
- [entries](lodash.LoDashExplicitWrapper.md#entries)
- [entriesIn](lodash.LoDashExplicitWrapper.md#entriesin)
- [eq](lodash.LoDashExplicitWrapper.md#eq)
- [escape](lodash.LoDashExplicitWrapper.md#escape)
- [escapeRegExp](lodash.LoDashExplicitWrapper.md#escaperegexp)
- [findKey](lodash.LoDashExplicitWrapper.md#findkey)
- [findLastKey](lodash.LoDashExplicitWrapper.md#findlastkey)
- [floor](lodash.LoDashExplicitWrapper.md#floor)
- [forIn](lodash.LoDashExplicitWrapper.md#forin)
- [forInRight](lodash.LoDashExplicitWrapper.md#forinright)
- [forOwn](lodash.LoDashExplicitWrapper.md#forown)
- [forOwnRight](lodash.LoDashExplicitWrapper.md#forownright)
- [functions](lodash.LoDashExplicitWrapper.md#functions)
- [functionsIn](lodash.LoDashExplicitWrapper.md#functionsin)
- [gt](lodash.LoDashExplicitWrapper.md#gt)
- [gte](lodash.LoDashExplicitWrapper.md#gte)
- [has](lodash.LoDashExplicitWrapper.md#has)
- [hasIn](lodash.LoDashExplicitWrapper.md#hasin)
- [identity](lodash.LoDashExplicitWrapper.md#identity)
- [inRange](lodash.LoDashExplicitWrapper.md#inrange)
- [invert](lodash.LoDashExplicitWrapper.md#invert)
- [invoke](lodash.LoDashExplicitWrapper.md#invoke)
- [invokeMap](lodash.LoDashExplicitWrapper.md#invokemap)
- [isArguments](lodash.LoDashExplicitWrapper.md#isarguments)
- [isArray](lodash.LoDashExplicitWrapper.md#isarray)
- [isArrayBuffer](lodash.LoDashExplicitWrapper.md#isarraybuffer)
- [isArrayLike](lodash.LoDashExplicitWrapper.md#isarraylike)
- [isArrayLikeObject](lodash.LoDashExplicitWrapper.md#isarraylikeobject)
- [isBoolean](lodash.LoDashExplicitWrapper.md#isboolean)
- [isBuffer](lodash.LoDashExplicitWrapper.md#isbuffer)
- [isDate](lodash.LoDashExplicitWrapper.md#isdate)
- [isElement](lodash.LoDashExplicitWrapper.md#iselement)
- [isEmpty](lodash.LoDashExplicitWrapper.md#isempty)
- [isEqual](lodash.LoDashExplicitWrapper.md#isequal)
- [isEqualWith](lodash.LoDashExplicitWrapper.md#isequalwith)
- [isError](lodash.LoDashExplicitWrapper.md#iserror)
- [isFinite](lodash.LoDashExplicitWrapper.md#isfinite)
- [isFunction](lodash.LoDashExplicitWrapper.md#isfunction)
- [isInteger](lodash.LoDashExplicitWrapper.md#isinteger)
- [isLength](lodash.LoDashExplicitWrapper.md#islength)
- [isMap](lodash.LoDashExplicitWrapper.md#ismap)
- [isMatch](lodash.LoDashExplicitWrapper.md#ismatch)
- [isMatchWith](lodash.LoDashExplicitWrapper.md#ismatchwith)
- [isNaN](lodash.LoDashExplicitWrapper.md#isnan)
- [isNative](lodash.LoDashExplicitWrapper.md#isnative)
- [isNil](lodash.LoDashExplicitWrapper.md#isnil)
- [isNull](lodash.LoDashExplicitWrapper.md#isnull)
- [isNumber](lodash.LoDashExplicitWrapper.md#isnumber)
- [isObject](lodash.LoDashExplicitWrapper.md#isobject)
- [isObjectLike](lodash.LoDashExplicitWrapper.md#isobjectlike)
- [isPlainObject](lodash.LoDashExplicitWrapper.md#isplainobject)
- [isRegExp](lodash.LoDashExplicitWrapper.md#isregexp)
- [isSafeInteger](lodash.LoDashExplicitWrapper.md#issafeinteger)
- [isSet](lodash.LoDashExplicitWrapper.md#isset)
- [isString](lodash.LoDashExplicitWrapper.md#isstring)
- [isSymbol](lodash.LoDashExplicitWrapper.md#issymbol)
- [isTypedArray](lodash.LoDashExplicitWrapper.md#istypedarray)
- [isUndefined](lodash.LoDashExplicitWrapper.md#isundefined)
- [isWeakMap](lodash.LoDashExplicitWrapper.md#isweakmap)
- [isWeakSet](lodash.LoDashExplicitWrapper.md#isweakset)
- [kebabCase](lodash.LoDashExplicitWrapper.md#kebabcase)
- [keys](lodash.LoDashExplicitWrapper.md#keys)
- [keysIn](lodash.LoDashExplicitWrapper.md#keysin)
- [lowerCase](lodash.LoDashExplicitWrapper.md#lowercase)
- [lowerFirst](lodash.LoDashExplicitWrapper.md#lowerfirst)
- [lt](lodash.LoDashExplicitWrapper.md#lt)
- [lte](lodash.LoDashExplicitWrapper.md#lte)
- [matches](lodash.LoDashExplicitWrapper.md#matches)
- [matchesProperty](lodash.LoDashExplicitWrapper.md#matchesproperty)
- [mean](lodash.LoDashExplicitWrapper.md#mean)
- [method](lodash.LoDashExplicitWrapper.md#method)
- [methodOf](lodash.LoDashExplicitWrapper.md#methodof)
- [mixin](lodash.LoDashExplicitWrapper.md#mixin)
- [multiply](lodash.LoDashExplicitWrapper.md#multiply)
- [noConflict](lodash.LoDashExplicitWrapper.md#noconflict)
- [noop](lodash.LoDashExplicitWrapper.md#noop)
- [now](lodash.LoDashExplicitWrapper.md#now)
- [nthArg](lodash.LoDashExplicitWrapper.md#ntharg)
- [pad](lodash.LoDashExplicitWrapper.md#pad)
- [padEnd](lodash.LoDashExplicitWrapper.md#padend)
- [padStart](lodash.LoDashExplicitWrapper.md#padstart)
- [parseInt](lodash.LoDashExplicitWrapper.md#parseint)
- [plant](lodash.LoDashExplicitWrapper.md#plant)
- [property](lodash.LoDashExplicitWrapper.md#property)
- [propertyOf](lodash.LoDashExplicitWrapper.md#propertyof)
- [random](lodash.LoDashExplicitWrapper.md#random)
- [range](lodash.LoDashExplicitWrapper.md#range)
- [rangeRight](lodash.LoDashExplicitWrapper.md#rangeright)
- [repeat](lodash.LoDashExplicitWrapper.md#repeat)
- [replace](lodash.LoDashExplicitWrapper.md#replace)
- [result](lodash.LoDashExplicitWrapper.md#result)
- [reverse](lodash.LoDashExplicitWrapper.md#reverse)
- [round](lodash.LoDashExplicitWrapper.md#round)
- [set](lodash.LoDashExplicitWrapper.md#set)
- [setWith](lodash.LoDashExplicitWrapper.md#setwith)
- [size](lodash.LoDashExplicitWrapper.md#size)
- [snakeCase](lodash.LoDashExplicitWrapper.md#snakecase)
- [split](lodash.LoDashExplicitWrapper.md#split)
- [startCase](lodash.LoDashExplicitWrapper.md#startcase)
- [startsWith](lodash.LoDashExplicitWrapper.md#startswith)
- [stubArray](lodash.LoDashExplicitWrapper.md#stubarray)
- [stubFalse](lodash.LoDashExplicitWrapper.md#stubfalse)
- [stubObject](lodash.LoDashExplicitWrapper.md#stubobject)
- [stubString](lodash.LoDashExplicitWrapper.md#stubstring)
- [stubTrue](lodash.LoDashExplicitWrapper.md#stubtrue)
- [subtract](lodash.LoDashExplicitWrapper.md#subtract)
- [sum](lodash.LoDashExplicitWrapper.md#sum)
- [tap](lodash.LoDashExplicitWrapper.md#tap)
- [template](lodash.LoDashExplicitWrapper.md#template)
- [thru](lodash.LoDashExplicitWrapper.md#thru)
- [times](lodash.LoDashExplicitWrapper.md#times)
- [toFinite](lodash.LoDashExplicitWrapper.md#tofinite)
- [toInteger](lodash.LoDashExplicitWrapper.md#tointeger)
- [toJSON](lodash.LoDashExplicitWrapper.md#tojson)
- [toLength](lodash.LoDashExplicitWrapper.md#tolength)
- [toLower](lodash.LoDashExplicitWrapper.md#tolower)
- [toNumber](lodash.LoDashExplicitWrapper.md#tonumber)
- [toPairs](lodash.LoDashExplicitWrapper.md#topairs)
- [toPairsIn](lodash.LoDashExplicitWrapper.md#topairsin)
- [toPath](lodash.LoDashExplicitWrapper.md#topath)
- [toPlainObject](lodash.LoDashExplicitWrapper.md#toplainobject)
- [toSafeInteger](lodash.LoDashExplicitWrapper.md#tosafeinteger)
- [toUpper](lodash.LoDashExplicitWrapper.md#toupper)
- [trim](lodash.LoDashExplicitWrapper.md#trim)
- [trimEnd](lodash.LoDashExplicitWrapper.md#trimend)
- [trimStart](lodash.LoDashExplicitWrapper.md#trimstart)
- [truncate](lodash.LoDashExplicitWrapper.md#truncate)
- [unescape](lodash.LoDashExplicitWrapper.md#unescape)
- [uniqueId](lodash.LoDashExplicitWrapper.md#uniqueid)
- [unset](lodash.LoDashExplicitWrapper.md#unset)
- [update](lodash.LoDashExplicitWrapper.md#update)
- [upperCase](lodash.LoDashExplicitWrapper.md#uppercase)
- [upperFirst](lodash.LoDashExplicitWrapper.md#upperfirst)
- [value](lodash.LoDashExplicitWrapper.md#value)
- [valueOf](lodash.LoDashExplicitWrapper.md#valueof)
- [words](lodash.LoDashExplicitWrapper.md#words)
- [wrap](lodash.LoDashExplicitWrapper.md#wrap)

## Methods

### add

▸ **add**(`addend`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.add

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `addend` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:23

---

### attempt

▸ **attempt**<`TResult`\>(`...args`): [`ObjectChain`](lodash.ObjectChain.md)<`Error`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ObjectChain`](lodash.ObjectChain.md)<`Error`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:23

---

### bind

▸ **bind**(`thisArg`, `...partials`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`any`[]) => `any`\>

**`See`**

\_.bind

#### Parameters

| Name          | Type    |
| :------------ | :------ |
| `thisArg`     | `any`   |
| `...partials` | `any`[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:105

---

### bindAll

▸ **bindAll**(`...methodNames`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.bindAll

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `...methodNames` | [`Many`](../modules/lodash.md#many)<`string`\>[] |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:51

---

### bindKey

▸ **bindKey**(`key`, `...partials`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[])
=> `any`\>

**`See`**

\_.bindKey

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `key`         | `string` |
| `...partials` | `any`[]  |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:139

---

### camelCase

▸ **camelCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.camelCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:22

---

### capitalize

▸ **capitalize**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.capitalize

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:44

---

### ceil

▸ **ceil**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.ceil

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:46

---

### chain

▸ **chain**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.chain

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:75

---

### clamp

▸ **clamp**(`lower`, `upper`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.clamp

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `lower` | `number` |
| `upper` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/number.d.ts:54

▸ **clamp**(`upper`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.clamp

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `upper` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/number.d.ts:58

---

### clone

▸ **clone**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.clone

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep

▸ **cloneDeep**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.cloneDeep

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:135

---

### cloneDeepWith

▸ **cloneDeepWith**(`customizer`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.cloneDeepWith

#### Parameters

| Name         | Type                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)<`TValue`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:139

▸ **cloneDeepWith**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.cloneDeepWith

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:143

---

### cloneWith

▸ **cloneWith**<`TResult`\>(`customizer`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:147

▸ **cloneWith**<`TResult`\>(`customizer`): [`ExpChain`](../modules/lodash.md#expchain)<`TValue`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TValue`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:151

▸ **cloneWith**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.cloneWith

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit

▸ **commit**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.commit

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:88

---

### conforms

▸ **conforms**(): [`FunctionChain`](lodash.FunctionChain.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\>) => `boolean`\>

**`See`**

\_.conforms

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\>) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:106

---

### conformsTo

▸ **conformsTo**(`source`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.conformsTo

#### Parameters

| Name     | Type                                                                                 |
| :------- | :----------------------------------------------------------------------------------- |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`TValue`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:221

---

### constant

▸ **constant**(): [`FunctionChain`](lodash.FunctionChain.md)<() => `TValue`\>

**`See`**

\_.constant

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<() => `TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:128

---

### deburr

▸ **deburr**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.deburr

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:67

---

### defaultTo

▸ **defaultTo**(`defaultValue`): [`ExpChain`](../modules/lodash.md#expchain)<`TValue`\>

**`See`**

\_.defaultTo

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `defaultValue` | `TValue` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:161

▸ **defaultTo**<`TDefault`\>(`defaultValue`): [`ExpChain`](../modules/lodash.md#expchain)<`TValue`
extends `undefined` \| `null` ? `TDefault` : `TValue` \| `TDefault`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TValue` extends `undefined` \| `null` ? `TDefault` :
`TValue` \| `TDefault`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:165

---

### defer

▸ **defer**(`...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.defer

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:475

---

### delay

▸ **delay**(`wait`, `...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.delay

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `wait`    | `number` |
| `...args` | `any`[]  |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:498

---

### divide

▸ **divide**(`divisor`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.divide

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `divisor` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:69

---

### endsWith

▸ **endsWith**(`target?`, `position?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.endsWith

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:91

---

### entries

▸ **entries**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

**`See`**

\_.entries

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:609

---

### entriesIn

▸ **entriesIn**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

**`See`**

\_.entriesIn

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:643

---

### eq

▸ **eq**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.eq

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:266

---

### escape

▸ **escape**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.escape

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:124

---

### escapeRegExp

▸ **escapeRegExp**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.escapeRegExp

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:147

---

### findKey

▸ **findKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findKey

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`TValue`\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:822

---

### findLastKey

▸ **findLastKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findLastKey

#### Parameters

| Name         | Type                                                               |
| :----------- | :----------------------------------------------------------------- |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`TValue`\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:844

---

### floor

▸ **floor**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.floor

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:92

---

### forIn

▸ **forIn**(`iteratee?`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.forIn

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:872

---

### forInRight

▸ **forInRight**(`iteratee?`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.forInRight

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:898

---

### forOwn

▸ **forOwn**(`iteratee?`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.forOwn

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:926

---

### forOwnRight

▸ **forOwnRight**(`iteratee?`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.forOwnRight

#### Parameters

| Name        | Type                                                                      |
| :---------- | :------------------------------------------------------------------------ |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`TValue`, `any`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:952

---

### functions

▸ **functions**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.functions

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:986

---

### functionsIn

▸ **functionsIn**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.functionsIn

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1020

---

### gt

▸ **gt**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.gt

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:289

---

### gte

▸ **gte**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.gte

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:312

---

### has

▸ **has**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.has

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1342

---

### hasIn

▸ **hasIn**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.hasIn

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1380

---

### identity

▸ **identity**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.identity

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:393

---

### inRange

▸ **inRange**(`start`, `end?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.inRange

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `start` | `number` |
| `end?`  | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/number.d.ts:83

---

### invert

▸ **invert**():
[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

**`See`**

\_.invert

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<[`Dictionary`](lodash.Dictionary.md)<`string`\>\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1403

---

### invoke

▸ **invoke**(`path`, `...args`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.invoke

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `...args` | `any`[]                                             |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1482

---

### invokeMap

▸ **invokeMap**(`methodName`, `...args`): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.invokeMap

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `methodName` | `string` |
| `...args`    | `any`[]  |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1075

▸ **invokeMap**<`TResult`\>(`method`, `...args`):
[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

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

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1079

---

### isArguments

▸ **isArguments**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArguments

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:334

---

### isArray

▸ **isArray**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArray

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:360

---

### isArrayBuffer

▸ **isArrayBuffer**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayBuffer

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:382

---

### isArrayLike

▸ **isArrayLike**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayLike

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:428

---

### isArrayLikeObject

▸ **isArrayLikeObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isArrayLikeObject

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:473

---

### isBoolean

▸ **isBoolean**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isBoolean

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:495

---

### isBuffer

▸ **isBuffer**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isBuffer

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:517

---

### isDate

▸ **isDate**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isDate

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:539

---

### isElement

▸ **isElement**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isElement

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:561

---

### isEmpty

▸ **isEmpty**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEmpty

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:591

---

### isEqual

▸ **isEqual**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEqual

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:632

---

### isEqualWith

▸ **isEqualWith**(`other`, `customizer?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isEqualWith

#### Parameters

| Name          | Type                                                          |
| :------------ | :------------------------------------------------------------ |
| `other`       | `any`                                                         |
| `customizer?` | [`IsEqualCustomizer`](../modules/lodash.md#isequalcustomizer) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:678

---

### isError

▸ **isError**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isError

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:701

---

### isFinite

▸ **isFinite**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isFinite

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:725

---

### isFunction

▸ **isFunction**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isFunction

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:747

---

### isInteger

▸ **isInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isInteger

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:785

---

### isLength

▸ **isLength**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isLength

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:823

---

### isMap

▸ **isMap**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMap

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:845

---

### isMatch

▸ **isMatch**(`source`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMatch

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `source` | `object` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:881

---

### isMatchWith

▸ **isMatchWith**(`source`, `customizer`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isMatchWith

#### Parameters

| Name         | Type                                                                  |
| :----------- | :-------------------------------------------------------------------- |
| `source`     | `object`                                                              |
| `customizer` | [`isMatchWithCustomizer`](../modules/lodash.md#ismatchwithcustomizer) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:927

---

### isNaN

▸ **isNaN**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNaN

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:951

---

### isNative

▸ **isNative**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNative

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:973

---

### isNil

▸ **isNil**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNil

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1006

---

### isNull

▸ **isNull**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNull

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1028

---

### isNumber

▸ **isNumber**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isNumber

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1052

---

### isObject

▸ **isObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isObject

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1075

---

### isObjectLike

▸ **isObjectLike**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isObjectLike

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1112

---

### isPlainObject

▸ **isPlainObject**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isPlainObject

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1137

---

### isRegExp

▸ **isRegExp**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isRegExp

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1159

---

### isSafeInteger

▸ **isSafeInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSafeInteger

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1198

---

### isSet

▸ **isSet**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSet

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1220

---

### isString

▸ **isString**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isString

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1242

---

### isSymbol

▸ **isSymbol**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isSymbol

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1272

---

### isTypedArray

▸ **isTypedArray**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isTypedArray

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1294

---

### isUndefined

▸ **isUndefined**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isUndefined

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1316

---

### isWeakMap

▸ **isWeakMap**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isWeakMap

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1338

---

### isWeakSet

▸ **isWeakSet**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.isWeakSet

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1360

---

### kebabCase

▸ **kebabCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.kebabCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:169

---

### keys

▸ **keys**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.keys

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1505

---

### keysIn

▸ **keysIn**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.keysIn

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1528

---

### lowerCase

▸ **lowerCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.lowerCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:191

---

### lowerFirst

▸ **lowerFirst**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.lowerFirst

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:213

---

### lt

▸ **lt**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.lt

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1383

---

### lte

▸ **lte**(`other`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.lte

#### Parameters

| Name    | Type  |
| :------ | :---- |
| `other` | `any` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1406

---

### matches

▸ **matches**<`V`\>(): [`FunctionChain`](lodash.FunctionChain.md)<(`value`: `V`) => `boolean`\>

**`See`**

\_.matches

#### Type parameters

| Name |
| :--- |
| `V`  |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `V`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:513

---

### matchesProperty

▸ **matchesProperty**<`SrcValue`\>(`srcValue`): [`FunctionChain`](lodash.FunctionChain.md)<(`value`:
`any`) => `boolean`\>

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

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `any`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:547

▸ **matchesProperty**<`SrcValue`, `Value`\>(`srcValue`):
[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `Value`) => `boolean`\>

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

[`FunctionChain`](lodash.FunctionChain.md)<(`value`: `Value`) => `boolean`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:551

---

### mean

▸ **mean**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.mean

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:179

---

### method

▸ **method**(`...args`): [`FunctionChain`](lodash.FunctionChain.md)<(`object`: `any`) => `any`\>

**`See`**

\_.method

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`object`: `any`) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:575

---

### methodOf

▸ **methodOf**(`...args`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.methodOf

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:599

---

### mixin

▸ **mixin**(`source`, `options?`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.mixin

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:642

▸ **mixin**(`options?`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.mixin

#### Parameters

| Name       | Type                                     |
| :--------- | :--------------------------------------- |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md) |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:646

---

### multiply

▸ **multiply**(`multiplicand`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.multiply

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `multiplicand` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:289

---

### noConflict

▸ **noConflict**():
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

**`See`**

\_.noConflict

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<[`LoDashStatic`](lodash.LoDashStatic.md)\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:667

---

### noop

▸ **noop**(`...args`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`undefined`\>

**`See`**

\_.noop

#### Parameters

| Name      | Type    |
| :-------- | :------ |
| `...args` | `any`[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`undefined`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:688

---

### now

▸ **now**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.now

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/date.d.ts:21

---

### nthArg

▸ **nthArg**(): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

**`See`**

\_.nthArg

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `any`[]) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:710

---

### pad

▸ **pad**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.pad

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:238

---

### padEnd

▸ **padEnd**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.padEnd

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:263

---

### padStart

▸ **padStart**(`length?`, `chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.padStart

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `length?` | `number` |
| `chars?`  | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:288

---

### parseInt

▸ **parseInt**(`radix?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.parseInt

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `radix?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:314

---

### plant

▸ **plant**(`value`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.plant

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:101

---

### property

▸ **property**<`TObj`, `TResult`\>(): [`FunctionChain`](lodash.FunctionChain.md)<(`obj`: `TObj`) =>
`TResult`\>

**`See`**

\_.property

#### Type parameters

| Name      |
| :-------- |
| `TObj`    |
| `TResult` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`obj`: `TObj`) => `TResult`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:845

---

### propertyOf

▸ **propertyOf**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

**`See`**

\_.propertyOf

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<(`path`:
[`PropertyPath`](../modules/lodash.md#propertypath)) => `any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:868

---

### random

▸ **random**(`floating?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.random

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `floating?` | `boolean` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/number.d.ts:125

▸ **random**(`max`, `floating?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.random

#### Parameters

| Name        | Type      |
| :---------- | :-------- |
| `max`       | `number`  |
| `floating?` | `boolean` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/number.d.ts:129

---

### range

▸ **range**(`end?`, `step?`): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.range

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:898

---

### rangeRight

▸ **rangeRight**(`end?`, `step?`): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.rangeRight

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `end?`  | `number` |
| `step?` | `number` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:950

---

### repeat

▸ **repeat**(`n?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.repeat

#### Parameters

| Name | Type     |
| :--- | :------- |
| `n?` | `number` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:337

---

### replace

▸ **replace**(`pattern`, `replacement`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.replace

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `pattern`     | `string` \| `RegExp`                                                  |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:369

▸ **replace**(`replacement`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.replace

#### Parameters

| Name          | Type                                                                  |
| :------------ | :-------------------------------------------------------------------- |
| `replacement` | `string` \| [`ReplaceFunction`](../modules/lodash.md#replacefunction) |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:373

---

### result

▸ **result**<`TResult`\>(`path`, `defaultValue?`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2187

---

### reverse

▸ **reverse**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.reverse

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:114

---

### round

▸ **round**(`precision?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.round

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `precision?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:312

---

### set

▸ **set**(`path`, `value`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.set

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2220

▸ **set**<`TResult`\>(`path`, `value`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2224

---

### setWith

▸ **setWith**(`path`, `value`, `customizer?`):
[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.setWith

#### Parameters

| Name          | Type                                                                     |
| :------------ | :----------------------------------------------------------------------- |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                      |
| `value`       | `any`                                                                    |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`TValue`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2259

▸ **setWith**<`TResult`\>(`path`, `value`, `customizer?`):
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2263

---

### size

▸ **size**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.size

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1827

---

### snakeCase

▸ **snakeCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.snakeCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:395

---

### split

▸ **split**(`separator?`, `limit?`): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.split

#### Parameters

| Name         | Type                 |
| :----------- | :------------------- |
| `separator?` | `string` \| `RegExp` |
| `limit?`     | `number`             |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:425

---

### startCase

▸ **startCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.startCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:447

---

### startsWith

▸ **startsWith**(`target?`, `position?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.startsWith

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `target?`   | `string` |
| `position?` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:471

---

### stubArray

▸ **stubArray**(): [`CollectionChain`](lodash.CollectionChain.md)<`any`\>

**`See`**

\_.stubArray

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:987

---

### stubFalse

▸ **stubFalse**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`false`\>

**`See`**

\_.stubFalse

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`false`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1008

▸ **stubFalse**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`false`\>

**`See`**

\_.stubFalse

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`false`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1218

---

### stubObject

▸ **stubObject**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.stubObject

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1029

---

### stubString

▸ **stubString**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.stubString

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1050

---

### stubTrue

▸ **stubTrue**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`true`\>

**`See`**

\_.stubTrue

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`true`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1071

▸ **stubTrue**(): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`true`\>

**`See`**

\_.stubTrue

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`true`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1193

---

### subtract

▸ **subtract**(`subtrahend`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.subtract

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `subtrahend` | `number` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:340

---

### sum

▸ **sum**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.sum

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/math.d.ts:367

---

### tap

▸ **tap**(`interceptor`): [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

**`See`**

\_.tap

#### Parameters

| Name          | Type                          |
| :------------ | :---------------------------- |
| `interceptor` | (`value`: `TValue`) => `void` |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`TValue`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:185

---

### template

▸ **template**(`options?`):
[`FunctionChain`](lodash.FunctionChain.md)<[`TemplateExecutor`](lodash.TemplateExecutor.md)\>

**`See`**

\_.template

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TemplateOptions`](lodash.TemplateOptions.md) |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<[`TemplateExecutor`](lodash.TemplateExecutor.md)\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:526

---

### thru

▸ **thru**<`TResult`\>(`interceptor`): [`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

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

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:208

---

### times

▸ **times**<`TResult`\>(`iteratee`): [`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

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

[`CollectionChain`](lodash.CollectionChain.md)<`TResult`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1103

▸ **times**(): [`CollectionChain`](lodash.CollectionChain.md)<`number`\>

**`See`**

\_.times

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1107

---

### toFinite

▸ **toFinite**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toFinite

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1503

---

### toInteger

▸ **toInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toInteger

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1541

---

### toJSON

▸ **toJSON**(): `TValue`

**`See`**

\_.toJSON

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:127

---

### toLength

▸ **toLength**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toLength

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1580

---

### toLower

▸ **toLower**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.toLower

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:548

---

### toNumber

▸ **toNumber**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toNumber

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1616

---

### toPairs

▸ **toPairs**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairs

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2288

---

### toPairsIn

▸ **toPairsIn**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairsIn

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `TValue` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `TValue` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2313

---

### toPath

▸ **toPath**(): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.toPath

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1146

---

### toPlainObject

▸ **toPlainObject**(): [`ObjectChain`](lodash.ObjectChain.md)<`any`\>

**`See`**

\_.toPlainObject

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1639

---

### toSafeInteger

▸ **toSafeInteger**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

**`See`**

\_.toSafeInteger

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`number`\>

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1676

---

### toUpper

▸ **toUpper**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.toUpper

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:570

---

### trim

▸ **trim**(`chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.trim

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:597

---

### trimEnd

▸ **trimEnd**(`chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.trimEnd

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:624

---

### trimStart

▸ **trimStart**(`chars?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.trimStart

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `chars?` | `string` |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:651

---

### truncate

▸ **truncate**(`options?`): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.truncate

#### Parameters

| Name       | Type                                           |
| :--------- | :--------------------------------------------- |
| `options?` | [`TruncateOptions`](lodash.TruncateOptions.md) |

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:689

---

### unescape

▸ **unescape**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.unescape

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:715

---

### uniqueId

▸ **uniqueId**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.uniqueId

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1168

---

### unset

▸ **unset**(`path`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

**`See`**

\_.unset

#### Parameters

| Name   | Type                                                |
| :----- | :-------------------------------------------------- |
| `path` | [`PropertyPath`](../modules/lodash.md#propertypath) |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`boolean`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2415

---

### update

▸ **update**(`path`, `updater`): [`ObjectChain`](lodash.ObjectChain.md)<`any`\>

**`See`**

\_.update

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `path`    | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `updater` | (`value`: `any`) => `any`                           |

#### Returns

[`ObjectChain`](lodash.ObjectChain.md)<`any`\>

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2439

---

### upperCase

▸ **upperCase**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.upperCase

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:737

---

### upperFirst

▸ **upperFirst**(): [`StringChain`](lodash.StringChain.md)

**`See`**

\_.upperFirst

#### Returns

[`StringChain`](lodash.StringChain.md)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:759

---

### value

▸ **value**(): `TValue`

**`See`**

\_.value

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf

▸ **valueOf**(): `TValue`

**`See`**

\_.valueOf

#### Returns

`TValue`

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:160

---

### words

▸ **words**(`pattern?`): [`CollectionChain`](lodash.CollectionChain.md)<`string`\>

**`See`**

\_.words

#### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `pattern?` | `string` \| `RegExp` |

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<`string`\>

#### Defined in

node_modules/@types/lodash/common/string.d.ts:786

---

### wrap

▸ **wrap**<`TArgs`, `TResult`\>(`wrapper`): [`FunctionChain`](lodash.FunctionChain.md)<(...`args`:
`TArgs`[]) => `TResult`\>

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

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `TArgs`[]) => `TResult`\>

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1444
