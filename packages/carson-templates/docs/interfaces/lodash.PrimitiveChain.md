# Interface: PrimitiveChain<T\>

[lodash](../modules/lodash.md).PrimitiveChain

## Type parameters

| Name |
| :--- |
| `T`  |

## Hierarchy

- [`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`T`\>

  ↳ **`PrimitiveChain`**

## Table of contents

### Methods

- [add](lodash.PrimitiveChain.md#add)
- [after](lodash.PrimitiveChain.md#after)
- [attempt](lodash.PrimitiveChain.md#attempt)
- [before](lodash.PrimitiveChain.md#before)
- [bind](lodash.PrimitiveChain.md#bind)
- [bindAll](lodash.PrimitiveChain.md#bindall)
- [bindKey](lodash.PrimitiveChain.md#bindkey)
- [camelCase](lodash.PrimitiveChain.md#camelcase)
- [capitalize](lodash.PrimitiveChain.md#capitalize)
- [castArray](lodash.PrimitiveChain.md#castarray)
- [ceil](lodash.PrimitiveChain.md#ceil)
- [chain](lodash.PrimitiveChain.md#chain)
- [clamp](lodash.PrimitiveChain.md#clamp)
- [clone](lodash.PrimitiveChain.md#clone)
- [cloneDeep](lodash.PrimitiveChain.md#clonedeep)
- [cloneDeepWith](lodash.PrimitiveChain.md#clonedeepwith)
- [cloneWith](lodash.PrimitiveChain.md#clonewith)
- [commit](lodash.PrimitiveChain.md#commit)
- [concat](lodash.PrimitiveChain.md#concat)
- [conforms](lodash.PrimitiveChain.md#conforms)
- [conformsTo](lodash.PrimitiveChain.md#conformsto)
- [constant](lodash.PrimitiveChain.md#constant)
- [deburr](lodash.PrimitiveChain.md#deburr)
- [defaultTo](lodash.PrimitiveChain.md#defaultto)
- [defer](lodash.PrimitiveChain.md#defer)
- [delay](lodash.PrimitiveChain.md#delay)
- [divide](lodash.PrimitiveChain.md#divide)
- [endsWith](lodash.PrimitiveChain.md#endswith)
- [entries](lodash.PrimitiveChain.md#entries)
- [entriesIn](lodash.PrimitiveChain.md#entriesin)
- [eq](lodash.PrimitiveChain.md#eq)
- [escape](lodash.PrimitiveChain.md#escape)
- [escapeRegExp](lodash.PrimitiveChain.md#escaperegexp)
- [findKey](lodash.PrimitiveChain.md#findkey)
- [findLastKey](lodash.PrimitiveChain.md#findlastkey)
- [floor](lodash.PrimitiveChain.md#floor)
- [forIn](lodash.PrimitiveChain.md#forin)
- [forInRight](lodash.PrimitiveChain.md#forinright)
- [forOwn](lodash.PrimitiveChain.md#forown)
- [forOwnRight](lodash.PrimitiveChain.md#forownright)
- [functions](lodash.PrimitiveChain.md#functions)
- [functionsIn](lodash.PrimitiveChain.md#functionsin)
- [gt](lodash.PrimitiveChain.md#gt)
- [gte](lodash.PrimitiveChain.md#gte)
- [has](lodash.PrimitiveChain.md#has)
- [hasIn](lodash.PrimitiveChain.md#hasin)
- [identity](lodash.PrimitiveChain.md#identity)
- [inRange](lodash.PrimitiveChain.md#inrange)
- [invert](lodash.PrimitiveChain.md#invert)
- [invoke](lodash.PrimitiveChain.md#invoke)
- [invokeMap](lodash.PrimitiveChain.md#invokemap)
- [isArguments](lodash.PrimitiveChain.md#isarguments)
- [isArray](lodash.PrimitiveChain.md#isarray)
- [isArrayBuffer](lodash.PrimitiveChain.md#isarraybuffer)
- [isArrayLike](lodash.PrimitiveChain.md#isarraylike)
- [isArrayLikeObject](lodash.PrimitiveChain.md#isarraylikeobject)
- [isBoolean](lodash.PrimitiveChain.md#isboolean)
- [isBuffer](lodash.PrimitiveChain.md#isbuffer)
- [isDate](lodash.PrimitiveChain.md#isdate)
- [isElement](lodash.PrimitiveChain.md#iselement)
- [isEmpty](lodash.PrimitiveChain.md#isempty)
- [isEqual](lodash.PrimitiveChain.md#isequal)
- [isEqualWith](lodash.PrimitiveChain.md#isequalwith)
- [isError](lodash.PrimitiveChain.md#iserror)
- [isFinite](lodash.PrimitiveChain.md#isfinite)
- [isFunction](lodash.PrimitiveChain.md#isfunction)
- [isInteger](lodash.PrimitiveChain.md#isinteger)
- [isLength](lodash.PrimitiveChain.md#islength)
- [isMap](lodash.PrimitiveChain.md#ismap)
- [isMatch](lodash.PrimitiveChain.md#ismatch)
- [isMatchWith](lodash.PrimitiveChain.md#ismatchwith)
- [isNaN](lodash.PrimitiveChain.md#isnan)
- [isNative](lodash.PrimitiveChain.md#isnative)
- [isNil](lodash.PrimitiveChain.md#isnil)
- [isNull](lodash.PrimitiveChain.md#isnull)
- [isNumber](lodash.PrimitiveChain.md#isnumber)
- [isObject](lodash.PrimitiveChain.md#isobject)
- [isObjectLike](lodash.PrimitiveChain.md#isobjectlike)
- [isPlainObject](lodash.PrimitiveChain.md#isplainobject)
- [isRegExp](lodash.PrimitiveChain.md#isregexp)
- [isSafeInteger](lodash.PrimitiveChain.md#issafeinteger)
- [isSet](lodash.PrimitiveChain.md#isset)
- [isString](lodash.PrimitiveChain.md#isstring)
- [isSymbol](lodash.PrimitiveChain.md#issymbol)
- [isTypedArray](lodash.PrimitiveChain.md#istypedarray)
- [isUndefined](lodash.PrimitiveChain.md#isundefined)
- [isWeakMap](lodash.PrimitiveChain.md#isweakmap)
- [isWeakSet](lodash.PrimitiveChain.md#isweakset)
- [kebabCase](lodash.PrimitiveChain.md#kebabcase)
- [keys](lodash.PrimitiveChain.md#keys)
- [keysIn](lodash.PrimitiveChain.md#keysin)
- [lowerCase](lodash.PrimitiveChain.md#lowercase)
- [lowerFirst](lodash.PrimitiveChain.md#lowerfirst)
- [lt](lodash.PrimitiveChain.md#lt)
- [lte](lodash.PrimitiveChain.md#lte)
- [matches](lodash.PrimitiveChain.md#matches)
- [matchesProperty](lodash.PrimitiveChain.md#matchesproperty)
- [mean](lodash.PrimitiveChain.md#mean)
- [method](lodash.PrimitiveChain.md#method)
- [methodOf](lodash.PrimitiveChain.md#methodof)
- [mixin](lodash.PrimitiveChain.md#mixin)
- [multiply](lodash.PrimitiveChain.md#multiply)
- [noConflict](lodash.PrimitiveChain.md#noconflict)
- [noop](lodash.PrimitiveChain.md#noop)
- [now](lodash.PrimitiveChain.md#now)
- [nthArg](lodash.PrimitiveChain.md#ntharg)
- [pad](lodash.PrimitiveChain.md#pad)
- [padEnd](lodash.PrimitiveChain.md#padend)
- [padStart](lodash.PrimitiveChain.md#padstart)
- [parseInt](lodash.PrimitiveChain.md#parseint)
- [plant](lodash.PrimitiveChain.md#plant)
- [property](lodash.PrimitiveChain.md#property)
- [propertyOf](lodash.PrimitiveChain.md#propertyof)
- [random](lodash.PrimitiveChain.md#random)
- [range](lodash.PrimitiveChain.md#range)
- [rangeRight](lodash.PrimitiveChain.md#rangeright)
- [repeat](lodash.PrimitiveChain.md#repeat)
- [replace](lodash.PrimitiveChain.md#replace)
- [result](lodash.PrimitiveChain.md#result)
- [reverse](lodash.PrimitiveChain.md#reverse)
- [round](lodash.PrimitiveChain.md#round)
- [set](lodash.PrimitiveChain.md#set)
- [setWith](lodash.PrimitiveChain.md#setwith)
- [size](lodash.PrimitiveChain.md#size)
- [snakeCase](lodash.PrimitiveChain.md#snakecase)
- [split](lodash.PrimitiveChain.md#split)
- [startCase](lodash.PrimitiveChain.md#startcase)
- [startsWith](lodash.PrimitiveChain.md#startswith)
- [stubArray](lodash.PrimitiveChain.md#stubarray)
- [stubFalse](lodash.PrimitiveChain.md#stubfalse)
- [stubObject](lodash.PrimitiveChain.md#stubobject)
- [stubString](lodash.PrimitiveChain.md#stubstring)
- [stubTrue](lodash.PrimitiveChain.md#stubtrue)
- [subtract](lodash.PrimitiveChain.md#subtract)
- [sum](lodash.PrimitiveChain.md#sum)
- [tap](lodash.PrimitiveChain.md#tap)
- [template](lodash.PrimitiveChain.md#template)
- [thru](lodash.PrimitiveChain.md#thru)
- [times](lodash.PrimitiveChain.md#times)
- [toFinite](lodash.PrimitiveChain.md#tofinite)
- [toInteger](lodash.PrimitiveChain.md#tointeger)
- [toJSON](lodash.PrimitiveChain.md#tojson)
- [toLength](lodash.PrimitiveChain.md#tolength)
- [toLower](lodash.PrimitiveChain.md#tolower)
- [toNumber](lodash.PrimitiveChain.md#tonumber)
- [toPairs](lodash.PrimitiveChain.md#topairs)
- [toPairsIn](lodash.PrimitiveChain.md#topairsin)
- [toPath](lodash.PrimitiveChain.md#topath)
- [toPlainObject](lodash.PrimitiveChain.md#toplainobject)
- [toSafeInteger](lodash.PrimitiveChain.md#tosafeinteger)
- [toUpper](lodash.PrimitiveChain.md#toupper)
- [trim](lodash.PrimitiveChain.md#trim)
- [trimEnd](lodash.PrimitiveChain.md#trimend)
- [trimStart](lodash.PrimitiveChain.md#trimstart)
- [truncate](lodash.PrimitiveChain.md#truncate)
- [unescape](lodash.PrimitiveChain.md#unescape)
- [uniqueId](lodash.PrimitiveChain.md#uniqueid)
- [unset](lodash.PrimitiveChain.md#unset)
- [update](lodash.PrimitiveChain.md#update)
- [upperCase](lodash.PrimitiveChain.md#uppercase)
- [upperFirst](lodash.PrimitiveChain.md#upperfirst)
- [value](lodash.PrimitiveChain.md#value)
- [valueOf](lodash.PrimitiveChain.md#valueof)
- [words](lodash.PrimitiveChain.md#words)
- [wrap](lodash.PrimitiveChain.md#wrap)

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

### after

▸ **after**<`TFunc`\>(`func`): [`FunctionChain`](lodash.FunctionChain.md)<`TFunc`\>

#### Type parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `TFunc` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `func` | `TFunc` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<`TFunc`\>

**`See`**

\_.after

#### Defined in

node_modules/@types/lodash/common/function.d.ts:23

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

### before

▸ **before**<`TFunc`\>(`func`): [`FunctionChain`](lodash.FunctionChain.md)<`TFunc`\>

#### Type parameters

| Name    | Type                                  |
| :------ | :------------------------------------ |
| `TFunc` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `func` | `TFunc` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<`TFunc`\>

**`See`**

\_.before

#### Defined in

node_modules/@types/lodash/common/function.d.ts:69

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

▸ **bindAll**(`...methodNames`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name             | Type                                             |
| :--------------- | :----------------------------------------------- |
| `...methodNames` | [`Many`](../modules/lodash.md#many)<`string`\>[] |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

node_modules/@types/lodash/common/lang.d.ts:79

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

▸ **chain**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.chain

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[chain](lodash.LoDashExplicitWrapper.md#chain)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:75

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

▸ **clone**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.clone

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[clone](lodash.LoDashExplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep

▸ **cloneDeep**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

| Name         | Type                                                                            |
| :----------- | :------------------------------------------------------------------------------ |
| `customizer` | [`CloneDeepWithCustomizer`](../modules/lodash.md#clonedeepwithcustomizer)<`T`\> |

#### Returns

[`LoDashExplicitWrapper`](lodash.LoDashExplicitWrapper.md)<`any`\>

**`See`**

\_.cloneDeepWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneDeepWith](lodash.LoDashExplicitWrapper.md#clonedeepwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:139

▸ **cloneDeepWith**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

| Name         | Type                                                                               |
| :----------- | :--------------------------------------------------------------------------------- |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`, `TResult`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:147

▸ **cloneWith**<`TResult`\>(`customizer`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

#### Type parameters

| Name      |
| :-------- |
| `TResult` |

#### Parameters

| Name         | Type                                                                                              |
| :----------- | :------------------------------------------------------------------------------------------------ |
| `customizer` | [`CloneWithCustomizer`](../modules/lodash.md#clonewithcustomizer)<`T`, `undefined` \| `TResult`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\> \|
[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:151

▸ **cloneWith**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.cloneWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[cloneWith](lodash.LoDashExplicitWrapper.md#clonewith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit

▸ **commit**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.commit

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[commit](lodash.LoDashExplicitWrapper.md#commit)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:88

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

node_modules/@types/lodash/common/array.d.ts:94

---

### conforms

▸ **conforms**(): [`FunctionChain`](lodash.FunctionChain.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`T`\>) => `boolean`\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(`value`:
[`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`T`\>) => `boolean`\>

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

| Name     | Type                                                                            |
| :------- | :------------------------------------------------------------------------------ |
| `source` | [`ConformsPredicateObject`](../modules/lodash.md#conformspredicateobject)<`T`\> |

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

▸ **constant**(): [`FunctionChain`](lodash.FunctionChain.md)<() => `T`\>

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<() => `T`\>

**`See`**

\_.constant

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[constant](lodash.LoDashExplicitWrapper.md#constant)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:128

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

▸ **defaultTo**(`defaultValue`): [`ExpChain`](../modules/lodash.md#expchain)<`T`\>

#### Parameters

| Name           | Type |
| :------------- | :--- |
| `defaultValue` | `T`  |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T`\>

**`See`**

\_.defaultTo

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[defaultTo](lodash.LoDashExplicitWrapper.md#defaultto)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:161

▸ **defaultTo**<`TDefault`\>(`defaultValue`): [`ExpChain`](../modules/lodash.md#expchain)<`T`
extends `undefined` \| `null` ? `TDefault` : `T` \| `TDefault`\>

#### Type parameters

| Name       |
| :--------- |
| `TDefault` |

#### Parameters

| Name           | Type       |
| :------------- | :--------- |
| `defaultValue` | `TDefault` |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`T` extends `undefined` \| `null` ? `TDefault` : `T` \|
`TDefault`\>

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

### findKey

▸ **findKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

#### Parameters

| Name         | Type                                                          |
| :----------- | :------------------------------------------------------------ |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findKey

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[findKey](lodash.LoDashExplicitWrapper.md#findkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:822

---

### findLastKey

▸ **findLastKey**(`predicate?`): [`StringNullableChain`](lodash.StringNullableChain.md)

#### Parameters

| Name         | Type                                                          |
| :----------- | :------------------------------------------------------------ |
| `predicate?` | [`ObjectIteratee`](../modules/lodash.md#objectiteratee)<`T`\> |

#### Returns

[`StringNullableChain`](lodash.StringNullableChain.md)

**`See`**

\_.findLastKey

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[findLastKey](lodash.LoDashExplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:844

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

### forIn

▸ **forIn**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.forIn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forIn](lodash.LoDashExplicitWrapper.md#forin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:872

---

### forInRight

▸ **forInRight**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.forInRight

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forInRight](lodash.LoDashExplicitWrapper.md#forinright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:898

---

### forOwn

▸ **forOwn**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.forOwn

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forOwn](lodash.LoDashExplicitWrapper.md#forown)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:926

---

### forOwnRight

▸ **forOwnRight**(`iteratee?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name        | Type                                                                 |
| :---------- | :------------------------------------------------------------------- |
| `iteratee?` | [`ObjectIterator`](../modules/lodash.md#objectiterator)<`T`, `any`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.forOwnRight

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[forOwnRight](lodash.LoDashExplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:952

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

### identity

▸ **identity**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

### mixin

▸ **mixin**(`source`, `options?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name       | Type                                                                 |
| :--------- | :------------------------------------------------------------------- |
| `source`   | [`Dictionary`](lodash.Dictionary.md)<(...`args`: `any`[]) => `any`\> |
| `options?` | [`MixinOptions`](lodash.MixinOptions.md)                             |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

### plant

▸ **plant**(`value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

**`See`**

\_.plant

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[plant](lodash.LoDashExplicitWrapper.md#plant)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:101

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

▸ **reverse**(): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

### set

▸ **set**(`path`, `value`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name    | Type                                                |
| :------ | :-------------------------------------------------- |
| `path`  | [`PropertyPath`](../modules/lodash.md#propertypath) |
| `value` | `any`                                               |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

▸ **setWith**(`path`, `value`, `customizer?`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 |
| `value`       | `any`                                                               |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

| Name          | Type                                                                |
| :------------ | :------------------------------------------------------------------ |
| `path`        | [`PropertyPath`](../modules/lodash.md#propertypath)                 |
| `value`       | `any`                                                               |
| `customizer?` | [`SetWithCustomizer`](../modules/lodash.md#setwithcustomizer)<`T`\> |

#### Returns

[`ExpChain`](../modules/lodash.md#expchain)<`TResult`\>

**`See`**

\_.setWith

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[setWith](lodash.LoDashExplicitWrapper.md#setwith)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2263

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

node_modules/@types/lodash/common/collection.d.ts:1827

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

### tap

▸ **tap**(`interceptor`): [`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

#### Parameters

| Name          | Type                     |
| :------------ | :----------------------- |
| `interceptor` | (`value`: `T`) => `void` |

#### Returns

[`PrimitiveChain`](lodash.PrimitiveChain.md)<`T`\>

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

| Name          | Type                        |
| :------------ | :-------------------------- |
| `interceptor` | (`value`: `T`) => `TResult` |

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

▸ **toJSON**(): `T`

#### Returns

`T`

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

▸ **toPairs**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `T` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `T` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

**`See`**

\_.toPairs

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[toPairs](lodash.LoDashExplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2288

---

### toPairsIn

▸ **toPairsIn**(): [`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `T` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

#### Returns

[`CollectionChain`](lodash.CollectionChain.md)<[`string`, `T` extends
[`Dictionary`](lodash.Dictionary.md)<`U`\> ? `U` : `T` extends
[`NumericDictionary`](lodash.NumericDictionary.md)<`V`\> ? `V` : `any`]\>

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

▸ **value**(): `T`

#### Returns

`T`

**`See`**

\_.value

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[value](lodash.LoDashExplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf

▸ **valueOf**(): `T`

#### Returns

`T`

**`See`**

\_.valueOf

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[valueOf](lodash.LoDashExplicitWrapper.md#valueof)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:160

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

| Name      | Type                                              |
| :-------- | :------------------------------------------------ |
| `wrapper` | (`value`: `T`, ...`args`: `TArgs`[]) => `TResult` |

#### Returns

[`FunctionChain`](lodash.FunctionChain.md)<(...`args`: `TArgs`[]) => `TResult`\>

**`See`**

\_.wrap

#### Inherited from

[LoDashExplicitWrapper](lodash.LoDashExplicitWrapper.md).[wrap](lodash.LoDashExplicitWrapper.md#wrap)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1444
