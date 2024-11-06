[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Function\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type Parameters

• **T** _extends_ (...`args`) => `any`

## Methods

### add()

> **add**(`addend`): `number`

#### Parameters

• **addend**: `number`

#### Returns

`number`

#### See

\_.add

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`add`](LoDashImplicitWrapper.md#add)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:17

---

### ary()

> **ary**(`n`?): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.ary

#### Defined in

node_modules/@types/lodash/common/function.d.ts:39

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): `Error` \| `TResult`

#### Type Parameters

• **TResult**

#### Parameters

• ...**args**: `any`[]

#### Returns

`Error` \| `TResult`

#### See

\_.attempt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`attempt`](LoDashImplicitWrapper.md#attempt)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:17

---

### bind()

> **bind**(`thisArg`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **thisArg**: `any`

• ...**partials**: `any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.bind

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bind`](LoDashImplicitWrapper.md#bind)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:99

---

### bindAll()

> **bindAll**(...`methodNames`): `this`

#### Parameters

• ...**methodNames**: [`Many`](../type-aliases/Many.md)\<`string`\>[]

#### Returns

`this`

#### See

\_.bindAll

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindAll`](LoDashImplicitWrapper.md#bindall)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:45

---

### bindKey()

> **bindKey**(`key`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **key**: `string`

• ...**partials**: `any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.bindKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindKey`](LoDashImplicitWrapper.md#bindkey)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:133

---

### camelCase()

> **camelCase**(): `string`

#### Returns

`string`

#### See

\_.camelCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`camelCase`](LoDashImplicitWrapper.md#camelcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:16

---

### capitalize()

> **capitalize**(): `string`

#### Returns

`string`

#### See

\_.capitalize

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`capitalize`](LoDashImplicitWrapper.md#capitalize)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:38

---

### castArray()

> **castArray**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.castArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:37

---

### ceil()

> **ceil**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### See

\_.ceil

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`ceil`](LoDashImplicitWrapper.md#ceil)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:40

---

### chain()

> **chain**(): [`FunctionChain`](FunctionChain.md)\<`T`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<`T`\>

#### See

\_.chain

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:69

---

### clamp()

#### clamp(lower, upper)

> **clamp**(`lower`, `upper`): `number`

##### Parameters

• **lower**: `number`

• **upper**: `number`

##### Returns

`number`

##### See

\_.clamp

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:44

#### clamp(upper)

> **clamp**(`upper`): `number`

##### Parameters

• **upper**: `number`

##### Returns

`number`

##### See

\_.clamp

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:48

---

### clone()

> **clone**(): `T`

#### Returns

`T`

#### See

\_.clone

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `T`

#### Returns

`T`

#### See

\_.cloneDeep

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeep`](LoDashImplicitWrapper.md#clonedeep)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:105

---

### cloneDeepWith()

#### cloneDeepWith(customizer)

> **cloneDeepWith**(`customizer`): `any`

##### Parameters

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

##### Returns

`any`

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `T`

##### Returns

`T`

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:113

---

### cloneWith()

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `TResult`

##### Type Parameters

• **TResult** _extends_ `null` \| `string` \| `number` \| `boolean` \| `object`

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

##### Returns

`TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `T` \| `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `undefined`
\| `TResult`\>

##### Returns

`T` \| `TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `T`

##### Returns

`T`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:125

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### See

\_.commit

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`commit`](LoDashImplicitWrapper.md#commit)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:82

---

### conforms()

> **conforms**(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

\_.conforms

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conforms`](LoDashImplicitWrapper.md#conforms)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:100

---

### conformsTo()

> **conformsTo**(`source`): `boolean`

#### Parameters

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

`boolean`

#### See

\_.conformsTo

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conformsTo`](LoDashImplicitWrapper.md#conformsto)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:215

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `T`\>

#### Returns

[`Function`](Function.md)\<() => `T`\>

#### See

\_.constant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:122

---

### curry()

> **curry**(`arity`?): `T` _extends_ (`arg1`) => `R` ?
> [`Function`](Function.md)\<[`CurriedFunction1`](CurriedFunction1.md)\<`T1`, `R`\>\> : `T`
> _extends_ (`arg1`, `arg2`) => `R` ?
> [`Function`](Function.md)\<[`CurriedFunction2`](CurriedFunction2.md)\<`T1`, `T2`, `R`\>\> : `T`
> _extends_ (`arg1`, `arg2`, `arg3`) => `R` ?
> [`Function`](Function.md)\<[`CurriedFunction3`](CurriedFunction3.md)\<`T1`, `T2`, `T3`, `R`\>\> :
> `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`) => `R` ?
> [`Function`](Function.md)\<[`CurriedFunction4`](CurriedFunction4.md)\<`T1`, `T2`, `T3`, `T4`,
> `R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`) => `R` ?
> [`Function`](Function.md)\<[`CurriedFunction5`](CurriedFunction5.md)\<`T1`, `T2`, `T3`, `T4`,
> `T5`, `R`\>\> : [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **arity?**: `number`

#### Returns

`T` _extends_ (`arg1`) => `R` ?
[`Function`](Function.md)\<[`CurriedFunction1`](CurriedFunction1.md)\<`T1`, `R`\>\> : `T` _extends_
(`arg1`, `arg2`) => `R` ?
[`Function`](Function.md)\<[`CurriedFunction2`](CurriedFunction2.md)\<`T1`, `T2`, `R`\>\> : `T`
_extends_ (`arg1`, `arg2`, `arg3`) => `R` ?
[`Function`](Function.md)\<[`CurriedFunction3`](CurriedFunction3.md)\<`T1`, `T2`, `T3`, `R`\>\> :
`T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`) => `R` ?
[`Function`](Function.md)\<[`CurriedFunction4`](CurriedFunction4.md)\<`T1`, `T2`, `T3`, `T4`,
`R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`) => `R` ?
[`Function`](Function.md)\<[`CurriedFunction5`](CurriedFunction5.md)\<`T1`, `T2`, `T3`, `T4`, `T5`,
`R`\>\> : [`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.curry

#### Defined in

node_modules/@types/lodash/common/function.d.ts:301

---

### curryRight()

> **curryRight**(`arity`?): `T` _extends_ (`arg1`) => `R` ?
> [`Function`](Function.md)\<[`RightCurriedFunction1`](RightCurriedFunction1.md)\<`T1`, `R`\>\> :
> `T` _extends_ (`arg1`, `arg2`) => `R` ?
> [`Function`](Function.md)\<[`RightCurriedFunction2`](RightCurriedFunction2.md)\<`T1`, `T2`,
> `R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`) => `R` ?
> [`Function`](Function.md)\<[`RightCurriedFunction3`](RightCurriedFunction3.md)\<`T1`, `T2`, `T3`,
> `R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`) => `R` ?
> [`Function`](Function.md)\<[`RightCurriedFunction4`](RightCurriedFunction4.md)\<`T1`, `T2`, `T3`,
> `T4`, `R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`) => `R` ?
> [`Function`](Function.md)\<[`RightCurriedFunction5`](RightCurriedFunction5.md)\<`T1`, `T2`, `T3`,
> `T4`, `T5`, `R`\>\> : [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **arity?**: `number`

#### Returns

`T` _extends_ (`arg1`) => `R` ?
[`Function`](Function.md)\<[`RightCurriedFunction1`](RightCurriedFunction1.md)\<`T1`, `R`\>\> : `T`
_extends_ (`arg1`, `arg2`) => `R` ?
[`Function`](Function.md)\<[`RightCurriedFunction2`](RightCurriedFunction2.md)\<`T1`, `T2`, `R`\>\>
: `T` _extends_ (`arg1`, `arg2`, `arg3`) => `R` ?
[`Function`](Function.md)\<[`RightCurriedFunction3`](RightCurriedFunction3.md)\<`T1`, `T2`, `T3`,
`R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`) => `R` ?
[`Function`](Function.md)\<[`RightCurriedFunction4`](RightCurriedFunction4.md)\<`T1`, `T2`, `T3`,
`T4`, `R`\>\> : `T` _extends_ (`arg1`, `arg2`, `arg3`, `arg4`, `arg5`) => `R` ?
[`Function`](Function.md)\<[`RightCurriedFunction5`](RightCurriedFunction5.md)\<`T1`, `T2`, `T3`,
`T4`, `T5`, `R`\>\> : [`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.curryRight

#### Defined in

node_modules/@types/lodash/common/function.d.ts:337

---

### debounce()

#### debounce(wait, options)

> **debounce**(`wait`, `options`): `T` _extends_ (...`args`) => `any` ?
> [`Function`](Function.md)\<[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\<`T`\>\>\> :
> `never`

##### Parameters

• **wait**: `undefined` \| `number`

• **options**: [`DebounceSettingsLeading`](DebounceSettingsLeading.md)

##### Returns

`T` _extends_ (...`args`) => `any` ?
[`Function`](Function.md)\<[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\<`T`\>\>\> :
`never`

##### See

\_.debounce

##### Defined in

node_modules/@types/lodash/common/function.d.ts:432

#### debounce(wait, options)

> **debounce**(`wait`?, `options`?): `T` _extends_ (...`args`) => `any` ?
> [`Function`](Function.md)\<[`DebouncedFunc`](DebouncedFunc.md)\<`T`\<`T`\>\>\> : `never`

##### Parameters

• **wait?**: `number`

• **options?**: [`DebounceSettings`](DebounceSettings.md)

##### Returns

`T` _extends_ (...`args`) => `any` ?
[`Function`](Function.md)\<[`DebouncedFunc`](DebouncedFunc.md)\<`T`\<`T`\>\>\> : `never`

##### Defined in

node_modules/@types/lodash/common/function.d.ts:436

---

### deburr()

> **deburr**(): `string`

#### Returns

`string`

#### See

\_.deburr

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`deburr`](LoDashImplicitWrapper.md#deburr)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:61

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): `T`

##### Parameters

• **defaultValue**: `T`

##### Returns

`T`

##### See

\_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T` _extends_ `undefined` \| `null` ? `TDefault` :
> `T` \| `TDefault`

##### Type Parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`T` _extends_ `undefined` \| `null` ? `TDefault` : `T` \| `TDefault`

##### See

\_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:155

---

### defer()

> **defer**(...`args`): [`Primitive`](Primitive.md)\<`number`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### See

\_.defer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defer`](LoDashImplicitWrapper.md#defer)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:469

---

### delay()

> **delay**(`wait`, ...`args`): [`Primitive`](Primitive.md)\<`number`\>

#### Parameters

• **wait**: `number`

• ...**args**: `any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### See

\_.delay

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`delay`](LoDashImplicitWrapper.md#delay)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:492

---

### divide()

> **divide**(`divisor`): `number`

#### Parameters

• **divisor**: `number`

#### Returns

`number`

#### See

\_.divide

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`divide`](LoDashImplicitWrapper.md#divide)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:63

---

### endsWith()

> **endsWith**(`target`?, `position`?): `boolean`

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

`boolean`

#### See

\_.endsWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`endsWith`](LoDashImplicitWrapper.md#endswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:85

---

### entries()

> **entries**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### See

\_.entries

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:598

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### See

\_.entriesIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entriesIn`](LoDashImplicitWrapper.md#entriesin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:632

---

### eq()

> **eq**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.eq

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`eq`](LoDashImplicitWrapper.md#eq)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:260

---

### escape()

> **escape**(): `string`

#### Returns

`string`

#### See

\_.escape

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escape`](LoDashImplicitWrapper.md#escape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:118

---

### escapeRegExp()

> **escapeRegExp**(): `string`

#### Returns

`string`

#### See

\_.escapeRegExp

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escapeRegExp`](LoDashImplicitWrapper.md#escaperegexp)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:141

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`undefined` \| `string`

#### See

\_.findKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:817

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`undefined` \| `string`

#### See

\_.findLastKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:839

---

### flip()

> **flip**(): `this`

#### Returns

`this`

#### See

\_.flip

#### Defined in

node_modules/@types/lodash/common/function.d.ts:522

---

### floor()

> **floor**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### See

\_.floor

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`floor`](LoDashImplicitWrapper.md#floor)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:86

---

### flow()

#### flow(f2, f3, f4, f5, f6, f7)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f2`, `f3`, `f4`, `f5`, `f6`, `f7`):
> [`Function`](Function.md)\<(...`args`) => `R7`\>

##### Type Parameters

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

• **R7**

##### Parameters

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

• **f7**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R7`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:210

#### flow(f2, f3, f4, f5, f6, f7, func)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f2`, `f3`, `f4`, `f5`, `f6`, `f7`, ...`func`):
> [`Function`](Function.md)\<(...`args`) => `any`\>

##### Type Parameters

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

• **R7**

##### Parameters

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

• **f7**

• ...**func**: [`Many`](../type-aliases/Many.md)\<(`a`) => `any`\>[]

##### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:214

#### flow(f2, f3, f4, f5, f6)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`\>(`f2`, `f3`, `f4`, `f5`, `f6`):
> [`Function`](Function.md)\<(...`args`) => `R6`\>

##### Type Parameters

• **R2**

• **R3**

• **R4**

• **R5**

• **R6**

##### Parameters

• **f2**

• **f3**

• **f4**

• **f5**

• **f6**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R6`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:218

#### flow(f2, f3, f4, f5)

> **flow**\<`R2`, `R3`, `R4`, `R5`\>(`f2`, `f3`, `f4`, `f5`): [`Function`](Function.md)\<(...`args`)
> => `R5`\>

##### Type Parameters

• **R2**

• **R3**

• **R4**

• **R5**

##### Parameters

• **f2**

• **f3**

• **f4**

• **f5**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R5`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:222

#### flow(f2, f3, f4)

> **flow**\<`R2`, `R3`, `R4`\>(`f2`, `f3`, `f4`): [`Function`](Function.md)\<(...`args`) => `R4`\>

##### Type Parameters

• **R2**

• **R3**

• **R4**

##### Parameters

• **f2**

• **f3**

• **f4**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R4`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:226

#### flow(f2, f3)

> **flow**\<`R2`, `R3`\>(`f2`, `f3`): [`Function`](Function.md)\<(...`args`) => `R3`\>

##### Type Parameters

• **R2**

• **R3**

##### Parameters

• **f2**

• **f3**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R3`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:230

#### flow(f2)

> **flow**\<`R2`\>(`f2`): [`Function`](Function.md)\<(...`args`) => `R2`\>

##### Type Parameters

• **R2**

##### Parameters

• **f2**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R2`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:234

#### flow(func)

> **flow**(...`func`): [`Function`](Function.md)\<(...`args`) => `any`\>

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

##### See

\_.flow

##### Defined in

node_modules/@types/lodash/common/util.d.ts:238

---

### flowRight()

#### flowRight(f6, f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f6`, `f5`, `f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

• **R5**

##### Parameters

• **f6**

• **f5**

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:313

#### flowRight(f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f5`, `f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

• **R4**

##### Parameters

• **f5**

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:317

#### flowRight(f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`\>(`f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

• **R3**

##### Parameters

• **f4**

• **f3**

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:321

#### flowRight(f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`\>(`f3`, `f2`, `f1`): [`Function`](Function.md)\<(...`args`) =>
> `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

• **R1**

• **R2**

##### Parameters

• **f3**

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:325

#### flowRight(f2, f1)

> **flowRight**\<`A`, `R1`\>(`f2`, `f1`): [`Function`](Function.md)\<(...`args`) =>
> `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

• **R1**

##### Parameters

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:329

#### flowRight(f1)

> **flowRight**\<`A`\>(`f1`): [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type Parameters

• **A** _extends_ `any`[]

##### Parameters

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:333

#### flowRight(func)

> **flowRight**(...`func`): [`Function`](Function.md)\<(...`args`) => `any`\>

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

##### See

\_.flowRight

##### Defined in

node_modules/@types/lodash/common/util.d.ts:337

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

\_.forIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forIn`](LoDashImplicitWrapper.md#forin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:867

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

\_.forInRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forInRight`](LoDashImplicitWrapper.md#forinright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:893

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

\_.forOwn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwn`](LoDashImplicitWrapper.md#forown)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:921

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

\_.forOwnRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:947

---

### functions()

> **functions**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.functions

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functions`](LoDashImplicitWrapper.md#functions)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:981

---

### functionsIn()

> **functionsIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.functionsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functionsIn`](LoDashImplicitWrapper.md#functionsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1015

---

### gt()

> **gt**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.gt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gt`](LoDashImplicitWrapper.md#gt)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:283

---

### gte()

> **gte**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.gte

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gte`](LoDashImplicitWrapper.md#gte)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:306

---

### has()

> **has**(`path`): `boolean`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### See

\_.has

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`has`](LoDashImplicitWrapper.md#has)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1338

---

### hasIn()

> **hasIn**(`path`): `boolean`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### See

\_.hasIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`hasIn`](LoDashImplicitWrapper.md#hasin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1376

---

### identity()

> **identity**(): `T`

#### Returns

`T`

#### See

\_.identity

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`identity`](LoDashImplicitWrapper.md#identity)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:387

---

### inRange()

> **inRange**(`start`, `end`?): `boolean`

#### Parameters

• **start**: `number`

• **end?**: `number`

#### Returns

`boolean`

#### See

\_.inRange

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`inRange`](LoDashImplicitWrapper.md#inrange)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:77

---

### invert()

> **invert**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

\_.invert

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invert`](LoDashImplicitWrapper.md#invert)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1399

---

### invoke()

> **invoke**(`path`, ...`args`): `any`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• ...**args**: `any`[]

#### Returns

`any`

#### See

\_.invoke

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invoke`](LoDashImplicitWrapper.md#invoke)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1478

---

### invokeMap()

#### invokeMap(methodName, args)

> **invokeMap**(`methodName`, ...`args`): [`Collection`](Collection.md)\<`any`\>

##### Parameters

• **methodName**: `string`

• ...**args**: `any`[]

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.invokeMap

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1065

#### invokeMap(method, args)

> **invokeMap**\<`TResult`\>(`method`, ...`args`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **method**

• ...**args**: `any`[]

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.invokeMap

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1069

---

### isArguments()

> **isArguments**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArguments

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArguments`](LoDashImplicitWrapper.md#isarguments)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:328

---

### isArray()

> **isArray**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArray`](LoDashImplicitWrapper.md#isarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:354

---

### isArrayBuffer()

> **isArrayBuffer**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayBuffer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayBuffer`](LoDashImplicitWrapper.md#isarraybuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:376

---

### isArrayLike()

> **isArrayLike**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayLike

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLike`](LoDashImplicitWrapper.md#isarraylike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:422

---

### isArrayLikeObject()

> **isArrayLikeObject**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayLikeObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLikeObject`](LoDashImplicitWrapper.md#isarraylikeobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:467

---

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### See

\_.isBoolean

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBoolean`](LoDashImplicitWrapper.md#isboolean)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:489

---

### isBuffer()

> **isBuffer**(): `boolean`

#### Returns

`boolean`

#### See

\_.isBuffer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBuffer`](LoDashImplicitWrapper.md#isbuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:511

---

### isDate()

> **isDate**(): `boolean`

#### Returns

`boolean`

#### See

\_.isDate

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isDate`](LoDashImplicitWrapper.md#isdate)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:533

---

### isElement()

> **isElement**(): `boolean`

#### Returns

`boolean`

#### See

\_.isElement

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isElement`](LoDashImplicitWrapper.md#iselement)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:555

---

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### See

\_.isEmpty

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEmpty`](LoDashImplicitWrapper.md#isempty)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:585

---

### isEqual()

> **isEqual**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.isEqual

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqual`](LoDashImplicitWrapper.md#isequal)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:626

---

### isEqualWith()

> **isEqualWith**(`other`, `customizer`?): `boolean`

#### Parameters

• **other**: `any`

• **customizer?**: [`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

#### Returns

`boolean`

#### See

\_.isEqualWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqualWith`](LoDashImplicitWrapper.md#isequalwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:672

---

### isError()

> **isError**(): `boolean`

#### Returns

`boolean`

#### See

\_.isError

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isError`](LoDashImplicitWrapper.md#iserror)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:695

---

### isFinite()

> **isFinite**(): `boolean`

#### Returns

`boolean`

#### See

\_.isFinite

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFinite`](LoDashImplicitWrapper.md#isfinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:719

---

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### See

\_.isFunction

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFunction`](LoDashImplicitWrapper.md#isfunction)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:741

---

### isInteger()

> **isInteger**(): `boolean`

#### Returns

`boolean`

#### See

\_.isInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isInteger`](LoDashImplicitWrapper.md#isinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:779

---

### isLength()

> **isLength**(): `boolean`

#### Returns

`boolean`

#### See

\_.isLength

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isLength`](LoDashImplicitWrapper.md#islength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:817

---

### isMap()

> **isMap**(): `boolean`

#### Returns

`boolean`

#### See

\_.isMap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMap`](LoDashImplicitWrapper.md#ismap)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:839

---

### isMatch()

> **isMatch**(`source`): `boolean`

#### Parameters

• **source**: `object`

#### Returns

`boolean`

#### See

\_.isMatch

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatch`](LoDashImplicitWrapper.md#ismatch)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:875

---

### isMatchWith()

> **isMatchWith**(`source`, `customizer`): `boolean`

#### Parameters

• **source**: `object`

• **customizer**: [`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

#### Returns

`boolean`

#### See

\_.isMatchWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatchWith`](LoDashImplicitWrapper.md#ismatchwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:921

---

### isNaN()

> **isNaN**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNaN

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNaN`](LoDashImplicitWrapper.md#isnan)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:945

---

### isNative()

> **isNative**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNative

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNative`](LoDashImplicitWrapper.md#isnative)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:967

---

### isNil()

> **isNil**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNil

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNil`](LoDashImplicitWrapper.md#isnil)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1000

---

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNull

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNull`](LoDashImplicitWrapper.md#isnull)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1022

---

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNumber

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNumber`](LoDashImplicitWrapper.md#isnumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1046

---

### isObject()

> **isObject**(): `this is LoDashImplicitWrapper<object>`

#### Returns

`this is LoDashImplicitWrapper<object>`

#### See

\_.isObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObject`](LoDashImplicitWrapper.md#isobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1069

---

### isObjectLike()

> **isObjectLike**(): `boolean`

#### Returns

`boolean`

#### See

\_.isObjectLike

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObjectLike`](LoDashImplicitWrapper.md#isobjectlike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1106

---

### isPlainObject()

> **isPlainObject**(): `boolean`

#### Returns

`boolean`

#### See

\_.isPlainObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isPlainObject`](LoDashImplicitWrapper.md#isplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1131

---

### isRegExp()

> **isRegExp**(): `boolean`

#### Returns

`boolean`

#### See

\_.isRegExp

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isRegExp`](LoDashImplicitWrapper.md#isregexp)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1153

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSafeInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSafeInteger`](LoDashImplicitWrapper.md#issafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1192

---

### isSet()

> **isSet**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSet

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSet`](LoDashImplicitWrapper.md#isset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1214

---

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### See

\_.isString

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isString`](LoDashImplicitWrapper.md#isstring)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1236

---

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSymbol

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSymbol`](LoDashImplicitWrapper.md#issymbol)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1266

---

### isTypedArray()

> **isTypedArray**(): `boolean`

#### Returns

`boolean`

#### See

\_.isTypedArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isTypedArray`](LoDashImplicitWrapper.md#istypedarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1288

---

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### See

\_.isUndefined

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isUndefined`](LoDashImplicitWrapper.md#isundefined)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1310

---

### isWeakMap()

> **isWeakMap**(): `boolean`

#### Returns

`boolean`

#### See

\_.isWeakMap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakMap`](LoDashImplicitWrapper.md#isweakmap)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1332

---

### isWeakSet()

> **isWeakSet**(): `boolean`

#### Returns

`boolean`

#### See

\_.isWeakSet

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakSet`](LoDashImplicitWrapper.md#isweakset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1354

---

### iteratee()

> **iteratee**(): [`Function`](Function.md)\<`T`\>

#### Returns

[`Function`](Function.md)\<`T`\>

#### See

\_.iteratee

#### Defined in

node_modules/@types/lodash/common/util.d.ts:434

---

### kebabCase()

> **kebabCase**(): `string`

#### Returns

`string`

#### See

\_.kebabCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`kebabCase`](LoDashImplicitWrapper.md#kebabcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:163

---

### keys()

> **keys**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.keys

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keys`](LoDashImplicitWrapper.md#keys)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1501

---

### keysIn()

> **keysIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.keysIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keysIn`](LoDashImplicitWrapper.md#keysin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1524

---

### lowerCase()

> **lowerCase**(): `string`

#### Returns

`string`

#### See

\_.lowerCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerCase`](LoDashImplicitWrapper.md#lowercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:185

---

### lowerFirst()

> **lowerFirst**(): `string`

#### Returns

`string`

#### See

\_.lowerFirst

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerFirst`](LoDashImplicitWrapper.md#lowerfirst)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:207

---

### lt()

> **lt**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.lt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lt`](LoDashImplicitWrapper.md#lt)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1377

---

### lte()

> **lte**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### See

\_.lte

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lte`](LoDashImplicitWrapper.md#lte)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1400

---

### matches()

> **matches**\<`V`\>(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Type Parameters

• **V**

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

\_.matches

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matches`](LoDashImplicitWrapper.md#matches)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:507

---

### matchesProperty()

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`Function`](Function.md)\<(`value`) => `boolean`\>

##### Type Parameters

• **SrcValue**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:537

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`): [`Function`](Function.md)\<(`value`) =>
> `boolean`\>

##### Type Parameters

• **SrcValue**

• **Value**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:541

---

### mean()

> **mean**(): `number`

#### Returns

`number`

#### See

\_.mean

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mean`](LoDashImplicitWrapper.md#mean)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:173

---

### memoize()

> **memoize**(`resolver`?): [`Function`](Function.md)\<`T` &
> [`MemoizedFunction`](MemoizedFunction.md)\>

#### Parameters

• **resolver?**

#### Returns

[`Function`](Function.md)\<`T` & [`MemoizedFunction`](MemoizedFunction.md)\>

#### See

\_.memoize

#### Defined in

node_modules/@types/lodash/common/function.d.ts:556

---

### method()

> **method**(...`args`): [`Function`](Function.md)\<(`object`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`Function`](Function.md)\<(`object`) => `any`\>

#### See

\_.method

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`method`](LoDashImplicitWrapper.md#method)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:569

---

### methodOf()

> **methodOf**(...`args`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### See

\_.methodOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`methodOf`](LoDashImplicitWrapper.md#methodof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:593

---

### mixin()

#### mixin(source, options)

> **mixin**(`source`, `options`?): `this`

##### Parameters

• **source**: [`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

• **options?**: [`MixinOptions`](MixinOptions.md)

##### Returns

`this`

##### See

\_.mixin

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:632

#### mixin(options)

> **mixin**(`options`?):
> [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### Parameters

• **options?**: [`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

\_.mixin

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:636

---

### multiply()

> **multiply**(`multiplicand`): `number`

#### Parameters

• **multiplicand**: `number`

#### Returns

`number`

#### See

\_.multiply

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`multiply`](LoDashImplicitWrapper.md#multiply)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:283

---

### negate()

> **negate**(): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.negate

#### Defined in

node_modules/@types/lodash/common/function.d.ts:578

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

\_.noConflict

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noConflict`](LoDashImplicitWrapper.md#noconflict)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:661

---

### noop()

> **noop**(...`args`): `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### See

\_.noop

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noop`](LoDashImplicitWrapper.md#noop)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:682

---

### now()

> **now**(): `number`

#### Returns

`number`

#### See

\_.now

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`now`](LoDashImplicitWrapper.md#now)

#### Defined in

node_modules/@types/lodash/common/date.d.ts:15

---

### nthArg()

> **nthArg**(): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.nthArg

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`nthArg`](LoDashImplicitWrapper.md#ntharg)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:704

---

### once()

> **once**(): [`Function`](Function.md)\<`T`\>

#### Returns

[`Function`](Function.md)\<`T`\>

#### See

\_.once

#### Defined in

node_modules/@types/lodash/common/function.d.ts:600

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) =>
> (`ReturnType`\<`T`\> \| `TResult`)[]\>

#### Type Parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => (`ReturnType`\<`T`\> \| `TResult`)[]\>

#### See

\_.over

#### Defined in

node_modules/@types/lodash/common/util.d.ts:733

---

### overArgs()

> **overArgs**(...`transforms`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• ...**transforms**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.overArgs

#### Defined in

node_modules/@types/lodash/common/function.d.ts:623

---

### overEvery()

> **overEvery**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Type Parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.overEvery

#### Defined in

node_modules/@types/lodash/common/util.d.ts:772

---

### overSome()

> **overSome**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Type Parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.overSome

#### Defined in

node_modules/@types/lodash/common/util.d.ts:811

---

### pad()

> **pad**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### See

\_.pad

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`pad`](LoDashImplicitWrapper.md#pad)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:232

---

### padEnd()

> **padEnd**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### See

\_.padEnd

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padEnd`](LoDashImplicitWrapper.md#padend)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:257

---

### padStart()

> **padStart**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### See

\_.padStart

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padStart`](LoDashImplicitWrapper.md#padstart)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:282

---

### parseInt()

> **parseInt**(`radix`?): `number`

#### Parameters

• **radix?**: `number`

#### Returns

`number`

#### See

\_.parseInt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`parseInt`](LoDashImplicitWrapper.md#parseint)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:308

---

### partial()

#### partial(plc1, arg2)

> **partial**\<`T2`\>(`plc1`, `arg2`): [`Function`](Function.md)\<`T` _extends_
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T3`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T2**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **arg2**: `T2`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`,
`R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `T` _extends_
[`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
[`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `T` _extends_
[`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
[`Function3`](../type-aliases/Function3.md)\<`T1`, `T3`, `T4`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:676

#### partial(plc1, plc2, arg3)

> **partial**\<`T3`\>(`plc1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T3**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `T` _extends_
[`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
[`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:685

#### partial(arg1, plc2, arg3)

> **partial**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T3**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `T` _extends_
[`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
[`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:693

#### partial(plc1, arg2, arg3)

> **partial**\<`T2`, `T3`\>(`plc1`, `arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T3**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **arg2**: `T2`

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `T` _extends_
[`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
[`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:701

#### partial(plc1, plc2, arg3)

> **partial**\<`T3`\>(`plc1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T3**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:709

#### partial(arg1, plc2, plc3, arg4)

> **partial**\<`T1`, `T4`\>(`arg1`, `plc2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T4**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:716

#### partial(plc1, arg2, plc3, arg4)

> **partial**\<`T2`, `T4`\>(`plc1`, `arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T4**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:723

#### partial(arg1, arg2, plc3, arg4)

> **partial**\<`T1`, `T2`, `T4`\>(`arg1`, `arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T2**

• **T4**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:730

#### partial(plc1, plc2, arg3, arg4)

> **partial**\<`T3`, `T4`\>(`plc1`, `plc2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type Parameters

• **T3**

• **T4**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:737

#### partial(arg1, plc2, arg3, arg4)

> **partial**\<`T1`, `T3`, `T4`\>(`arg1`, `plc2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T3**

• **T4**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:744

#### partial(plc1, arg2, arg3, arg4)

> **partial**\<`T2`, `T3`, `T4`\>(`plc1`, `arg2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T3**

• **T4**

##### Parameters

• **plc1**: [`LoDashStatic`](LoDashStatic.md)

• **arg2**: `T2`

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:751

#### partial(arg1, arg2, arg3, arg4)

> **partial**\<`T1`, `T2`, `T3`, `T4`\>(`arg1`, `arg2`, `arg3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, `t3`, `t4`, ...`ts`) => `R` ? (...`ts`) =>
> `R` : `any`\>

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, `t3`, `t4`, ...`ts`) => `R` ? (...`ts`) => `R`
: `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:758

#### partial(arg1, arg2, arg3)

> **partial**\<`T1`, `T2`, `T3`\>(`arg1`, `arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> (`t1`, `t2`, `t3`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### Type Parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, `t3`, ...`ts`) => `R` ? (...`ts`) => `R` :
`any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:765

#### partial(arg1, arg2)

> **partial**\<`T1`, `T2`\>(`arg1`, `arg2`): [`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`,
> ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### Type Parameters

• **T1**

• **T2**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:772

#### partial(arg1)

> **partial**\<`T1`\>(`arg1`): [`Function`](Function.md)\<`T` _extends_ (`t1`, ...`ts`) => `R` ?
> (...`ts`) => `R` : `any`\>

##### Type Parameters

• **T1**

##### Parameters

• **arg1**: `T1`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:779

#### partial()

> **partial**(): [`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### See

\_.partial

##### Defined in

node_modules/@types/lodash/common/function.d.ts:786

---

### partialRight()

#### partialRight(arg1, plc2)

> **partialRight**\<`T1`\>(`arg1`, `plc2`): [`Function`](Function.md)\<`T` _extends_
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type Parameters

• **T1**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`,
`R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:953

#### partialRight(arg2)

> **partialRight**\<`T2`\>(`arg2`): [`Function`](Function.md)\<`T` _extends_
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type Parameters

• **T2**

##### Parameters

• **arg2**: `T2`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`,
`R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:960

#### partialRight(arg1, plc2, plc3)

> **partialRight**\<`T1`\>(`arg1`, `plc2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:966

#### partialRight(arg2, plc3)

> **partialRight**\<`T2`\>(`arg2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T2**

##### Parameters

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:973

#### partialRight(arg1, arg2, plc3)

> **partialRight**\<`T1`, `T2`\>(`arg1`, `arg2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T2**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:980

#### partialRight(arg3)

> **partialRight**\<`T3`\>(`arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type Parameters

• **T3**

##### Parameters

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:987

#### partialRight(arg1, plc2, arg3)

> **partialRight**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T3**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:994

#### partialRight(arg2, arg3)

> **partialRight**\<`T2`, `T3`\>(`arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T3**

##### Parameters

• **arg2**: `T2`

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1001

#### partialRight(arg1, plc2, plc3, plc4)

> **partialRight**\<`T1`\>(`arg1`, `plc2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T2`, `T3`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T1**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T2`, `T3`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1008

#### partialRight(arg2, plc3, plc4)

> **partialRight**\<`T2`\>(`arg2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T3`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T2**

##### Parameters

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T3`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1015

#### partialRight(arg1, arg2, plc3, plc4)

> **partialRight**\<`T1`, `T2`\>(`arg1`, `arg2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T3`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T2**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T3`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1022

#### partialRight(arg3, plc4)

> **partialRight**\<`T3`\>(`arg3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T3**

##### Parameters

• **arg3**: `T3`

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1029

#### partialRight(arg1, plc2, arg3, plc4)

> **partialRight**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`, `plc4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T3**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1036

#### partialRight(arg2, arg3, plc4)

> **partialRight**\<`T2`, `T3`\>(`arg2`, `arg3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T3**

##### Parameters

• **arg2**: `T2`

• **arg3**: `T3`

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1043

#### partialRight(arg1, arg2, arg3, plc4)

> **partialRight**\<`T1`, `T2`, `T3`\>(`arg1`, `arg2`, `arg3`, `plc4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T4`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T2**

• **T3**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **arg3**: `T3`

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1050

#### partialRight(arg4)

> **partialRight**\<`T4`\>(`arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T4**

##### Parameters

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1057

#### partialRight(arg1, plc2, plc3, arg4)

> **partialRight**\<`T1`, `T4`\>(`arg1`, `plc2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T4**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1064

#### partialRight(arg2, plc3, arg4)

> **partialRight**\<`T2`, `T4`\>(`arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T4**

##### Parameters

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1071

#### partialRight(arg1, arg2, plc3, arg4)

> **partialRight**\<`T1`, `T2`, `T4`\>(`arg1`, `arg2`, `plc3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T2**

• **T4**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1078

#### partialRight(arg3, arg4)

> **partialRight**\<`T3`, `T4`\>(`arg3`, `arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type Parameters

• **T3**

• **T4**

##### Parameters

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1085

#### partialRight(arg1, plc2, arg3, arg4)

> **partialRight**\<`T1`, `T3`, `T4`\>(`arg1`, `plc2`, `arg3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type Parameters

• **T1**

• **T3**

• **T4**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1092

#### partialRight(arg2, arg3, arg4)

> **partialRight**\<`T2`, `T3`, `T4`\>(`arg2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type Parameters

• **T2**

• **T3**

• **T4**

##### Parameters

• **arg2**: `T2`

• **arg3**: `T3`

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1099

#### partialRight(ts)

> **partialRight**\<`TS`\>(...`ts`): [`Function`](Function.md)\<`T` _extends_ (...`args`) => `R` ?
> () => `R` : `any`\>

##### Type Parameters

• **TS** _extends_ `any`[]

##### Parameters

• ...**ts**: `TS`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`args`) => `R` ? () => `R` : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1106

#### partialRight()

> **partialRight**(): [`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> :
> `any`\>

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### See

\_.partialRight

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1110

---

### plant()

> **plant**(`value`): `this`

#### Parameters

• **value**: `unknown`

#### Returns

`this`

#### See

\_.plant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`plant`](LoDashImplicitWrapper.md#plant)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:95

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`Function`](Function.md)\<(`obj`) => `TResult`\>

#### Type Parameters

• **TObj**

• **TResult**

#### Returns

[`Function`](Function.md)\<(`obj`) => `TResult`\>

#### See

\_.property

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`property`](LoDashImplicitWrapper.md#property)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:839

---

### propertyOf()

> **propertyOf**(): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### See

\_.propertyOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`propertyOf`](LoDashImplicitWrapper.md#propertyof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:862

---

### random()

#### random(floating)

> **random**(`floating`?): `number`

##### Parameters

• **floating?**: `boolean`

##### Returns

`number`

##### See

\_.random

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:115

#### random(max, floating)

> **random**(`max`, `floating`?): `number`

##### Parameters

• **max**: `number`

• **floating?**: `boolean`

##### Returns

`number`

##### See

\_.random

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:119

---

### range()

> **range**(`end`?, `step`?): [`Collection`](Collection.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### See

\_.range

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`range`](LoDashImplicitWrapper.md#range)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:892

---

### rangeRight()

> **rangeRight**(`end`?, `step`?): [`Collection`](Collection.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### See

\_.rangeRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`rangeRight`](LoDashImplicitWrapper.md#rangeright)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:944

---

### rearg()

> **rearg**(...`indexes`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.rearg

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1290

---

### repeat()

> **repeat**(`n`?): `string`

#### Parameters

• **n?**: `number`

#### Returns

`string`

#### See

\_.repeat

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`repeat`](LoDashImplicitWrapper.md#repeat)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:331

---

### replace()

#### replace(pattern, replacement)

> **replace**(`pattern`, `replacement`): `string`

##### Parameters

• **pattern**: `string` \| `RegExp`

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

\_.replace

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

##### Defined in

node_modules/@types/lodash/common/string.d.ts:359

#### replace(replacement)

> **replace**(`replacement`): `string`

##### Parameters

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

\_.replace

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

##### Defined in

node_modules/@types/lodash/common/string.d.ts:363

---

### rest()

> **rest**(`start`?): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **start?**: `number`

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.rest

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1315

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue`?): `TResult`

#### Type Parameters

• **TResult**

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `TResult` \| (...`args`) => `TResult`

#### Returns

`TResult`

#### See

\_.result

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`result`](LoDashImplicitWrapper.md#result)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2183

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

#### See

\_.reverse

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`reverse`](LoDashImplicitWrapper.md#reverse)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:108

---

### round()

> **round**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### See

\_.round

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`round`](LoDashImplicitWrapper.md#round)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:306

---

### runInContext()

> **runInContext**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

\_.runInContext

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`runInContext`](LoDashImplicitWrapper.md#runincontext)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:966

---

### set()

#### set(path, value)

> **set**(`path`, `value`): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

`this`

##### See

\_.set

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2212

#### set(path, value)

> **set**\<`TResult`\>(`path`, `value`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.set

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2216

---

### setWith()

#### setWith(path, value, customizer)

> **setWith**(`path`, `value`, `customizer`?): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`this`

##### See

\_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2251

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2255

---

### size()

> **size**(): `number`

#### Returns

`number`

#### See

\_.size

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`size`](LoDashImplicitWrapper.md#size)

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1825

---

### snakeCase()

> **snakeCase**(): `string`

#### Returns

`string`

#### See

\_.snakeCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`snakeCase`](LoDashImplicitWrapper.md#snakecase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:389

---

### split()

> **split**(`separator`?, `limit`?): [`Collection`](Collection.md)\<`string`\>

#### Parameters

• **separator?**: `string` \| `RegExp`

• **limit?**: `number`

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.split

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`split`](LoDashImplicitWrapper.md#split)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:419

---

### spread()

> **spread**(`start`?): [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

#### Parameters

• **start?**: `number`

#### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

#### See

\_.spread

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1339

---

### startCase()

> **startCase**(): `string`

#### Returns

`string`

#### See

\_.startCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startCase`](LoDashImplicitWrapper.md#startcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:441

---

### startsWith()

> **startsWith**(`target`?, `position`?): `boolean`

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

`boolean`

#### See

\_.startsWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startsWith`](LoDashImplicitWrapper.md#startswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:465

---

### stubArray()

> **stubArray**(): `any`[]

#### Returns

`any`[]

#### See

\_.stubArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubArray`](LoDashImplicitWrapper.md#stubarray)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:981

---

### stubFalse()

#### stubFalse()

> **stubFalse**(): `false`

##### Returns

`false`

##### See

\_.stubFalse

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1002

#### stubFalse()

> **stubFalse**(): `false`

##### Returns

`false`

##### See

\_.stubFalse

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1211

---

### stubObject()

> **stubObject**(): `any`

#### Returns

`any`

#### See

\_.stubObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubObject`](LoDashImplicitWrapper.md#stubobject)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1023

---

### stubString()

> **stubString**(): `string`

#### Returns

`string`

#### See

\_.stubString

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubString`](LoDashImplicitWrapper.md#stubstring)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1044

---

### stubTrue()

#### stubTrue()

> **stubTrue**(): `true`

##### Returns

`true`

##### See

\_.stubTrue

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1065

#### stubTrue()

> **stubTrue**(): `true`

##### Returns

`true`

##### See

\_.stubTrue

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1186

---

### subtract()

> **subtract**(`subtrahend`): `number`

#### Parameters

• **subtrahend**: `number`

#### Returns

`number`

#### See

\_.subtract

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`subtract`](LoDashImplicitWrapper.md#subtract)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:334

---

### sum()

> **sum**(): `number`

#### Returns

`number`

#### See

\_.sum

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`sum`](LoDashImplicitWrapper.md#sum)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:361

---

### tap()

> **tap**(`interceptor`): `this`

#### Parameters

• **interceptor**

#### Returns

`this`

#### See

\_.tap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`tap`](LoDashImplicitWrapper.md#tap)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:179

---

### template()

> **template**(`options`?): [`TemplateExecutor`](TemplateExecutor.md)

#### Parameters

• **options?**: [`TemplateOptions`](TemplateOptions.md)

#### Returns

[`TemplateExecutor`](TemplateExecutor.md)

#### See

\_.template

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`template`](LoDashImplicitWrapper.md#template)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:520

---

### throttle()

#### throttle(wait, options)

> **throttle**(`wait`?, `options`?): `T` _extends_ (...`args`) => `any` ?
> [`Function`](Function.md)\<[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\<`T`\>\>\> :
> `never`

##### Parameters

• **wait?**: `number`

• **options?**: [`ThrottleSettingsLeading`](../type-aliases/ThrottleSettingsLeading.md)

##### Returns

`T` _extends_ (...`args`) => `any` ?
[`Function`](Function.md)\<[`DebouncedFuncLeading`](DebouncedFuncLeading.md)\<`T`\<`T`\>\>\> :
`never`

##### See

\_.throttle

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1382

#### throttle(wait, options)

> **throttle**(`wait`?, `options`?): `T` _extends_ (...`args`) => `any` ?
> [`Function`](Function.md)\<[`DebouncedFunc`](DebouncedFunc.md)\<`T`\<`T`\>\>\> : `never`

##### Parameters

• **wait?**: `number`

• **options?**: [`ThrottleSettings`](ThrottleSettings.md)

##### Returns

`T` _extends_ (...`args`) => `any` ?
[`Function`](Function.md)\<[`DebouncedFunc`](DebouncedFunc.md)\<`T`\<`T`\>\>\> : `never`

##### Defined in

node_modules/@types/lodash/common/function.d.ts:1386

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

#### Type Parameters

• **TResult**

#### Parameters

• **interceptor**

#### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

#### See

\_.thru

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`thru`](LoDashImplicitWrapper.md#thru)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:202

---

### times()

#### times(iteratee)

> **times**\<`TResult`\>(`iteratee`): `TResult`[]

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

`TResult`[]

##### See

\_.times

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1093

#### times()

> **times**(): `number`[]

##### Returns

`number`[]

##### See

\_.times

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1097

---

### toFinite()

> **toFinite**(): `number`

#### Returns

`number`

#### See

\_.toFinite

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toFinite`](LoDashImplicitWrapper.md#tofinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1497

---

### toInteger()

> **toInteger**(): `number`

#### Returns

`number`

#### See

\_.toInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toInteger`](LoDashImplicitWrapper.md#tointeger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1535

---

### toJSON()

> **toJSON**(): `T`

#### Returns

`T`

#### See

\_.toJSON

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toJSON`](LoDashImplicitWrapper.md#tojson)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:121

---

### toLength()

> **toLength**(): `number`

#### Returns

`number`

#### See

\_.toLength

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLength`](LoDashImplicitWrapper.md#tolength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1574

---

### toLower()

> **toLower**(): `string`

#### Returns

`string`

#### See

\_.toLower

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLower`](LoDashImplicitWrapper.md#tolower)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:542

---

### toNumber()

> **toNumber**(): `number`

#### Returns

`number`

#### See

\_.toNumber

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toNumber`](LoDashImplicitWrapper.md#tonumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1610

---

### toPairs()

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairs

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2284

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairsIn`](LoDashImplicitWrapper.md#topairsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2309

---

### toPath()

> **toPath**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.toPath

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPath`](LoDashImplicitWrapper.md#topath)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1140

---

### toPlainObject()

> **toPlainObject**(): [`Object`](Object.md)\<`any`\>

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

\_.toPlainObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPlainObject`](LoDashImplicitWrapper.md#toplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1633

---

### toSafeInteger()

> **toSafeInteger**(): `number`

#### Returns

`number`

#### See

\_.toSafeInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toSafeInteger`](LoDashImplicitWrapper.md#tosafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1670

---

### toUpper()

> **toUpper**(): `string`

#### Returns

`string`

#### See

\_.toUpper

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toUpper`](LoDashImplicitWrapper.md#toupper)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:564

---

### trim()

> **trim**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### See

\_.trim

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trim`](LoDashImplicitWrapper.md#trim)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:591

---

### trimEnd()

> **trimEnd**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### See

\_.trimEnd

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimEnd`](LoDashImplicitWrapper.md#trimend)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:618

---

### trimStart()

> **trimStart**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### See

\_.trimStart

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimStart`](LoDashImplicitWrapper.md#trimstart)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:645

---

### truncate()

> **truncate**(`options`?): `string`

#### Parameters

• **options?**: [`TruncateOptions`](TruncateOptions.md)

#### Returns

`string`

#### See

\_.truncate

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`truncate`](LoDashImplicitWrapper.md#truncate)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:683

---

### unary()

> **unary**(): [`Function`](Function.md)\<(`arg1`) => `ReturnType`\<`T`\>\>

#### Returns

[`Function`](Function.md)\<(`arg1`) => `ReturnType`\<`T`\>\>

#### See

\_.unary

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1423

---

### unescape()

> **unescape**(): `string`

#### Returns

`string`

#### See

\_.unescape

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unescape`](LoDashImplicitWrapper.md#unescape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:709

---

### uniqueId()

> **uniqueId**(): `string`

#### Returns

`string`

#### See

\_.uniqueId

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`uniqueId`](LoDashImplicitWrapper.md#uniqueid)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1162

---

### unset()

> **unset**(`path`): [`Primitive`](Primitive.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`Primitive`](Primitive.md)\<`boolean`\>

#### See

\_.unset

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unset`](LoDashImplicitWrapper.md#unset)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2411

---

### update()

> **update**(`path`, `updater`): [`Object`](Object.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

\_.update

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`update`](LoDashImplicitWrapper.md#update)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2435

---

### upperCase()

> **upperCase**(): `string`

#### Returns

`string`

#### See

\_.upperCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperCase`](LoDashImplicitWrapper.md#uppercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:731

---

### upperFirst()

> **upperFirst**(): `string`

#### Returns

`string`

#### See

\_.upperFirst

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperFirst`](LoDashImplicitWrapper.md#upperfirst)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:753

---

### value()

> **value**(): `T`

#### Returns

`T`

#### See

\_.value

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `T`

#### Returns

`T`

#### See

\_.valueOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:154

---

### words()

> **words**(`pattern`?): [`Collection`](Collection.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.words

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`words`](LoDashImplicitWrapper.md#words)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:780

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`Function`](Function.md)\<(...`args`) => `TResult`\>

#### Type Parameters

• **TArgs**

• **TResult**

#### Parameters

• **wrapper**

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`\>

#### See

\_.wrap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`wrap`](LoDashImplicitWrapper.md#wrap)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1447
