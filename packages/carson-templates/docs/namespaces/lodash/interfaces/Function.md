[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Function\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type parameters

• **T** _extends_ (...`args`) => `any`

## Methods

### add()

> **add**(`addend`): `number`

#### Parameters

• **addend**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`add`](LoDashImplicitWrapper.md#add)

#### See

\_.add

#### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:39

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): `Error` \| `TResult`

#### Type parameters

• **TResult**

#### Parameters

• ...**args**: `any`[]

#### Returns

`Error` \| `TResult`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`attempt`](LoDashImplicitWrapper.md#attempt)

#### See

\_.attempt

#### Source

node_modules/@types/lodash/common/util.d.ts:17

---

### bind()

> **bind**(`thisArg`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **thisArg**: `any`

• ...**partials**: `any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bind`](LoDashImplicitWrapper.md#bind)

#### See

\_.bind

#### Source

node_modules/@types/lodash/common/function.d.ts:99

---

### bindAll()

> **bindAll**(...`methodNames`): `this`

#### Parameters

• ...**methodNames**: [`Many`](../type-aliases/Many.md)\<`string`\>[]

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindAll`](LoDashImplicitWrapper.md#bindall)

#### See

\_.bindAll

#### Source

node_modules/@types/lodash/common/util.d.ts:45

---

### bindKey()

> **bindKey**(`key`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Parameters

• **key**: `string`

• ...**partials**: `any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindKey`](LoDashImplicitWrapper.md#bindkey)

#### See

\_.bindKey

#### Source

node_modules/@types/lodash/common/function.d.ts:133

---

### camelCase()

> **camelCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`camelCase`](LoDashImplicitWrapper.md#camelcase)

#### See

\_.camelCase

#### Source

node_modules/@types/lodash/common/string.d.ts:16

---

### capitalize()

> **capitalize**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`capitalize`](LoDashImplicitWrapper.md#capitalize)

#### See

\_.capitalize

#### Source

node_modules/@types/lodash/common/string.d.ts:38

---

### castArray()

> **castArray**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.castArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:37

---

### ceil()

> **ceil**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`ceil`](LoDashImplicitWrapper.md#ceil)

#### See

\_.ceil

#### Source

node_modules/@types/lodash/common/math.d.ts:40

---

### chain()

> **chain**(): [`FunctionChain`](FunctionChain.md)\<`T`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<`T`\>

#### See

\_.chain

#### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:44

#### clamp(upper)

> **clamp**(`upper`): `number`

##### Parameters

• **upper**: `number`

##### Returns

`number`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:48

---

### clone()

> **clone**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

#### See

\_.clone

#### Source

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeep`](LoDashImplicitWrapper.md#clonedeep)

#### See

\_.cloneDeep

#### Source

node_modules/@types/lodash/common/lang.d.ts:105

---

### cloneDeepWith()

#### cloneDeepWith(customizer)

> **cloneDeepWith**(`customizer`): `any`

##### Parameters

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

##### Returns

`any`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `T`

##### Returns

`T`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:113

---

### cloneWith()

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `TResult`

##### Type parameters

• **TResult** _extends_ `null` \| `string` \| `number` \| `boolean` \| `object`

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

##### Returns

`TResult`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `T` \| `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `undefined`
\| `TResult`\>

##### Returns

`T` \| `TResult`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `T`

##### Returns

`T`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:125

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`commit`](LoDashImplicitWrapper.md#commit)

#### See

\_.commit

#### Source

node_modules/@types/lodash/common/seq.d.ts:82

---

### conforms()

> **conforms**(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conforms`](LoDashImplicitWrapper.md#conforms)

#### See

\_.conforms

#### Source

node_modules/@types/lodash/common/util.d.ts:100

---

### conformsTo()

> **conformsTo**(`source`): `boolean`

#### Parameters

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conformsTo`](LoDashImplicitWrapper.md#conformsto)

#### See

\_.conformsTo

#### Source

node_modules/@types/lodash/common/lang.d.ts:215

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `T`\>

#### Returns

[`Function`](Function.md)\<() => `T`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

#### See

\_.constant

#### Source

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

#### Source

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

#### Source

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

##### Source

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

##### Source

node_modules/@types/lodash/common/function.d.ts:436

---

### deburr()

> **deburr**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`deburr`](LoDashImplicitWrapper.md#deburr)

#### See

\_.deburr

#### Source

node_modules/@types/lodash/common/string.d.ts:61

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): `T`

##### Parameters

• **defaultValue**: `T`

##### Returns

`T`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T` _extends_ `undefined` \| `null` ? `TDefault` :
> `T` \| `TDefault`

##### Type parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`T` _extends_ `undefined` \| `null` ? `TDefault` : `T` \| `TDefault`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:155

---

### defer()

> **defer**(...`args`): [`Primitive`](Primitive.md)\<`number`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defer`](LoDashImplicitWrapper.md#defer)

#### See

\_.defer

#### Source

node_modules/@types/lodash/common/function.d.ts:469

---

### delay()

> **delay**(`wait`, ...`args`): [`Primitive`](Primitive.md)\<`number`\>

#### Parameters

• **wait**: `number`

• ...**args**: `any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`delay`](LoDashImplicitWrapper.md#delay)

#### See

\_.delay

#### Source

node_modules/@types/lodash/common/function.d.ts:492

---

### divide()

> **divide**(`divisor`): `number`

#### Parameters

• **divisor**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`divide`](LoDashImplicitWrapper.md#divide)

#### See

\_.divide

#### Source

node_modules/@types/lodash/common/math.d.ts:63

---

### endsWith()

> **endsWith**(`target`?, `position`?): `boolean`

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`endsWith`](LoDashImplicitWrapper.md#endswith)

#### See

\_.endsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:85

---

### entries()

> **entries**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

#### See

\_.entries

#### Source

node_modules/@types/lodash/common/object.d.ts:598

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entriesIn`](LoDashImplicitWrapper.md#entriesin)

#### See

\_.entriesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:632

---

### eq()

> **eq**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`eq`](LoDashImplicitWrapper.md#eq)

#### See

\_.eq

#### Source

node_modules/@types/lodash/common/lang.d.ts:260

---

### escape()

> **escape**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escape`](LoDashImplicitWrapper.md#escape)

#### See

\_.escape

#### Source

node_modules/@types/lodash/common/string.d.ts:118

---

### escapeRegExp()

> **escapeRegExp**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escapeRegExp`](LoDashImplicitWrapper.md#escaperegexp)

#### See

\_.escapeRegExp

#### Source

node_modules/@types/lodash/common/string.d.ts:141

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`undefined` \| `string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

#### See

\_.findKey

#### Source

node_modules/@types/lodash/common/object.d.ts:817

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`undefined` \| `string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

#### See

\_.findLastKey

#### Source

node_modules/@types/lodash/common/object.d.ts:839

---

### flip()

> **flip**(): `this`

#### Returns

`this`

#### See

\_.flip

#### Source

node_modules/@types/lodash/common/function.d.ts:522

---

### floor()

> **floor**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`floor`](LoDashImplicitWrapper.md#floor)

#### See

\_.floor

#### Source

node_modules/@types/lodash/common/math.d.ts:86

---

### flow()

#### flow(f2, f3, f4, f5, f6, f7)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f2`, `f3`, `f4`, `f5`, `f6`, `f7`):
> [`Function`](Function.md)\<(...`args`) => `R7`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:210

#### flow(f2, f3, f4, f5, f6, f7, func)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`, `R7`\>(`f2`, `f3`, `f4`, `f5`, `f6`, `f7`, ...`func`):
> [`Function`](Function.md)\<(...`args`) => `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:214

#### flow(f2, f3, f4, f5, f6)

> **flow**\<`R2`, `R3`, `R4`, `R5`, `R6`\>(`f2`, `f3`, `f4`, `f5`, `f6`):
> [`Function`](Function.md)\<(...`args`) => `R6`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:218

#### flow(f2, f3, f4, f5)

> **flow**\<`R2`, `R3`, `R4`, `R5`\>(`f2`, `f3`, `f4`, `f5`): [`Function`](Function.md)\<(...`args`)
> => `R5`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:222

#### flow(f2, f3, f4)

> **flow**\<`R2`, `R3`, `R4`\>(`f2`, `f3`, `f4`): [`Function`](Function.md)\<(...`args`) => `R4`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:226

#### flow(f2, f3)

> **flow**\<`R2`, `R3`\>(`f2`, `f3`): [`Function`](Function.md)\<(...`args`) => `R3`\>

##### Type parameters

• **R2**

• **R3**

##### Parameters

• **f2**

• **f3**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R3`\>

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:230

#### flow(f2)

> **flow**\<`R2`\>(`f2`): [`Function`](Function.md)\<(...`args`) => `R2`\>

##### Type parameters

• **R2**

##### Parameters

• **f2**

##### Returns

[`Function`](Function.md)\<(...`args`) => `R2`\>

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:234

#### flow(func)

> **flow**(...`func`): [`Function`](Function.md)\<(...`args`) => `any`\>

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

##### See

\_.flow

##### Source

node_modules/@types/lodash/common/util.d.ts:238

---

### flowRight()

#### flowRight(f6, f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`, `R5`\>(`f6`, `f5`, `f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:313

#### flowRight(f5, f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`, `R4`\>(`f5`, `f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:317

#### flowRight(f4, f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`, `R3`\>(`f4`, `f3`, `f2`, `f1`):
> [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:321

#### flowRight(f3, f2, f1)

> **flowRight**\<`A`, `R1`, `R2`\>(`f3`, `f2`, `f1`): [`Function`](Function.md)\<(...`args`) =>
> `ReturnType`\<`T`\>\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/util.d.ts:325

#### flowRight(f2, f1)

> **flowRight**\<`A`, `R1`\>(`f2`, `f1`): [`Function`](Function.md)\<(...`args`) =>
> `ReturnType`\<`T`\>\>

##### Type parameters

• **A** _extends_ `any`[]

• **R1**

##### Parameters

• **f2**

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:329

#### flowRight(f1)

> **flowRight**\<`A`\>(`f1`): [`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### Type parameters

• **A** _extends_ `any`[]

##### Parameters

• **f1**

##### Returns

[`Function`](Function.md)\<(...`args`) => `ReturnType`\<`T`\>\>

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:333

#### flowRight(func)

> **flowRight**(...`func`): [`Function`](Function.md)\<(...`args`) => `any`\>

##### Parameters

• ...**func**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `any`\>[]

##### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

##### See

\_.flowRight

##### Source

node_modules/@types/lodash/common/util.d.ts:337

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forIn`](LoDashImplicitWrapper.md#forin)

#### See

\_.forIn

#### Source

node_modules/@types/lodash/common/object.d.ts:867

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forInRight`](LoDashImplicitWrapper.md#forinright)

#### See

\_.forInRight

#### Source

node_modules/@types/lodash/common/object.d.ts:893

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwn`](LoDashImplicitWrapper.md#forown)

#### See

\_.forOwn

#### Source

node_modules/@types/lodash/common/object.d.ts:921

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

#### See

\_.forOwnRight

#### Source

node_modules/@types/lodash/common/object.d.ts:947

---

### functions()

> **functions**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functions`](LoDashImplicitWrapper.md#functions)

#### See

\_.functions

#### Source

node_modules/@types/lodash/common/object.d.ts:981

---

### functionsIn()

> **functionsIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functionsIn`](LoDashImplicitWrapper.md#functionsin)

#### See

\_.functionsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1015

---

### gt()

> **gt**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gt`](LoDashImplicitWrapper.md#gt)

#### See

\_.gt

#### Source

node_modules/@types/lodash/common/lang.d.ts:283

---

### gte()

> **gte**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gte`](LoDashImplicitWrapper.md#gte)

#### See

\_.gte

#### Source

node_modules/@types/lodash/common/lang.d.ts:306

---

### has()

> **has**(`path`): `boolean`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`has`](LoDashImplicitWrapper.md#has)

#### See

\_.has

#### Source

node_modules/@types/lodash/common/object.d.ts:1338

---

### hasIn()

> **hasIn**(`path`): `boolean`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`hasIn`](LoDashImplicitWrapper.md#hasin)

#### See

\_.hasIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1376

---

### identity()

> **identity**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`identity`](LoDashImplicitWrapper.md#identity)

#### See

\_.identity

#### Source

node_modules/@types/lodash/common/util.d.ts:387

---

### inRange()

> **inRange**(`start`, `end`?): `boolean`

#### Parameters

• **start**: `number`

• **end?**: `number`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`inRange`](LoDashImplicitWrapper.md#inrange)

#### See

\_.inRange

#### Source

node_modules/@types/lodash/common/number.d.ts:77

---

### invert()

> **invert**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invert`](LoDashImplicitWrapper.md#invert)

#### See

\_.invert

#### Source

node_modules/@types/lodash/common/object.d.ts:1399

---

### invoke()

> **invoke**(`path`, ...`args`): `any`

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• ...**args**: `any`[]

#### Returns

`any`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invoke`](LoDashImplicitWrapper.md#invoke)

#### See

\_.invoke

#### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1065

#### invokeMap(method, args)

> **invokeMap**\<`TResult`\>(`method`, ...`args`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **method**

• ...**args**: `any`[]

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1069

---

### isArguments()

> **isArguments**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArguments`](LoDashImplicitWrapper.md#isarguments)

#### See

\_.isArguments

#### Source

node_modules/@types/lodash/common/lang.d.ts:328

---

### isArray()

> **isArray**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArray`](LoDashImplicitWrapper.md#isarray)

#### See

\_.isArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:354

---

### isArrayBuffer()

> **isArrayBuffer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayBuffer`](LoDashImplicitWrapper.md#isarraybuffer)

#### See

\_.isArrayBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:376

---

### isArrayLike()

> **isArrayLike**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLike`](LoDashImplicitWrapper.md#isarraylike)

#### See

\_.isArrayLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:422

---

### isArrayLikeObject()

> **isArrayLikeObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLikeObject`](LoDashImplicitWrapper.md#isarraylikeobject)

#### See

\_.isArrayLikeObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:467

---

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBoolean`](LoDashImplicitWrapper.md#isboolean)

#### See

\_.isBoolean

#### Source

node_modules/@types/lodash/common/lang.d.ts:489

---

### isBuffer()

> **isBuffer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBuffer`](LoDashImplicitWrapper.md#isbuffer)

#### See

\_.isBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:511

---

### isDate()

> **isDate**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isDate`](LoDashImplicitWrapper.md#isdate)

#### See

\_.isDate

#### Source

node_modules/@types/lodash/common/lang.d.ts:533

---

### isElement()

> **isElement**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isElement`](LoDashImplicitWrapper.md#iselement)

#### See

\_.isElement

#### Source

node_modules/@types/lodash/common/lang.d.ts:555

---

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEmpty`](LoDashImplicitWrapper.md#isempty)

#### See

\_.isEmpty

#### Source

node_modules/@types/lodash/common/lang.d.ts:585

---

### isEqual()

> **isEqual**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqual`](LoDashImplicitWrapper.md#isequal)

#### See

\_.isEqual

#### Source

node_modules/@types/lodash/common/lang.d.ts:626

---

### isEqualWith()

> **isEqualWith**(`other`, `customizer`?): `boolean`

#### Parameters

• **other**: `any`

• **customizer?**: [`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqualWith`](LoDashImplicitWrapper.md#isequalwith)

#### See

\_.isEqualWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:672

---

### isError()

> **isError**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isError`](LoDashImplicitWrapper.md#iserror)

#### See

\_.isError

#### Source

node_modules/@types/lodash/common/lang.d.ts:695

---

### isFinite()

> **isFinite**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFinite`](LoDashImplicitWrapper.md#isfinite)

#### See

\_.isFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:719

---

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFunction`](LoDashImplicitWrapper.md#isfunction)

#### See

\_.isFunction

#### Source

node_modules/@types/lodash/common/lang.d.ts:741

---

### isInteger()

> **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isInteger`](LoDashImplicitWrapper.md#isinteger)

#### See

\_.isInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:779

---

### isLength()

> **isLength**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isLength`](LoDashImplicitWrapper.md#islength)

#### See

\_.isLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:817

---

### isMap()

> **isMap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMap`](LoDashImplicitWrapper.md#ismap)

#### See

\_.isMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:839

---

### isMatch()

> **isMatch**(`source`): `boolean`

#### Parameters

• **source**: `object`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatch`](LoDashImplicitWrapper.md#ismatch)

#### See

\_.isMatch

#### Source

node_modules/@types/lodash/common/lang.d.ts:875

---

### isMatchWith()

> **isMatchWith**(`source`, `customizer`): `boolean`

#### Parameters

• **source**: `object`

• **customizer**: [`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatchWith`](LoDashImplicitWrapper.md#ismatchwith)

#### See

\_.isMatchWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:921

---

### isNaN()

> **isNaN**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNaN`](LoDashImplicitWrapper.md#isnan)

#### See

\_.isNaN

#### Source

node_modules/@types/lodash/common/lang.d.ts:945

---

### isNative()

> **isNative**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNative`](LoDashImplicitWrapper.md#isnative)

#### See

\_.isNative

#### Source

node_modules/@types/lodash/common/lang.d.ts:967

---

### isNil()

> **isNil**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNil`](LoDashImplicitWrapper.md#isnil)

#### See

\_.isNil

#### Source

node_modules/@types/lodash/common/lang.d.ts:1000

---

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNull`](LoDashImplicitWrapper.md#isnull)

#### See

\_.isNull

#### Source

node_modules/@types/lodash/common/lang.d.ts:1022

---

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNumber`](LoDashImplicitWrapper.md#isnumber)

#### See

\_.isNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1046

---

### isObject()

> **isObject**(): `this is LoDashImplicitWrapper<object>`

#### Returns

`this is LoDashImplicitWrapper<object>`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObject`](LoDashImplicitWrapper.md#isobject)

#### See

\_.isObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1069

---

### isObjectLike()

> **isObjectLike**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObjectLike`](LoDashImplicitWrapper.md#isobjectlike)

#### See

\_.isObjectLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:1106

---

### isPlainObject()

> **isPlainObject**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isPlainObject`](LoDashImplicitWrapper.md#isplainobject)

#### See

\_.isPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1131

---

### isRegExp()

> **isRegExp**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isRegExp`](LoDashImplicitWrapper.md#isregexp)

#### See

\_.isRegExp

#### Source

node_modules/@types/lodash/common/lang.d.ts:1153

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSafeInteger`](LoDashImplicitWrapper.md#issafeinteger)

#### See

\_.isSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1192

---

### isSet()

> **isSet**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSet`](LoDashImplicitWrapper.md#isset)

#### See

\_.isSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1214

---

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isString`](LoDashImplicitWrapper.md#isstring)

#### See

\_.isString

#### Source

node_modules/@types/lodash/common/lang.d.ts:1236

---

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSymbol`](LoDashImplicitWrapper.md#issymbol)

#### See

\_.isSymbol

#### Source

node_modules/@types/lodash/common/lang.d.ts:1266

---

### isTypedArray()

> **isTypedArray**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isTypedArray`](LoDashImplicitWrapper.md#istypedarray)

#### See

\_.isTypedArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1288

---

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isUndefined`](LoDashImplicitWrapper.md#isundefined)

#### See

\_.isUndefined

#### Source

node_modules/@types/lodash/common/lang.d.ts:1310

---

### isWeakMap()

> **isWeakMap**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakMap`](LoDashImplicitWrapper.md#isweakmap)

#### See

\_.isWeakMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:1332

---

### isWeakSet()

> **isWeakSet**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakSet`](LoDashImplicitWrapper.md#isweakset)

#### See

\_.isWeakSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1354

---

### iteratee()

> **iteratee**(): [`Function`](Function.md)\<`T`\>

#### Returns

[`Function`](Function.md)\<`T`\>

#### See

\_.iteratee

#### Source

node_modules/@types/lodash/common/util.d.ts:434

---

### kebabCase()

> **kebabCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`kebabCase`](LoDashImplicitWrapper.md#kebabcase)

#### See

\_.kebabCase

#### Source

node_modules/@types/lodash/common/string.d.ts:163

---

### keys()

> **keys**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keys`](LoDashImplicitWrapper.md#keys)

#### See

\_.keys

#### Source

node_modules/@types/lodash/common/object.d.ts:1501

---

### keysIn()

> **keysIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keysIn`](LoDashImplicitWrapper.md#keysin)

#### See

\_.keysIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1524

---

### lowerCase()

> **lowerCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerCase`](LoDashImplicitWrapper.md#lowercase)

#### See

\_.lowerCase

#### Source

node_modules/@types/lodash/common/string.d.ts:185

---

### lowerFirst()

> **lowerFirst**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerFirst`](LoDashImplicitWrapper.md#lowerfirst)

#### See

\_.lowerFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:207

---

### lt()

> **lt**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lt`](LoDashImplicitWrapper.md#lt)

#### See

\_.lt

#### Source

node_modules/@types/lodash/common/lang.d.ts:1377

---

### lte()

> **lte**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lte`](LoDashImplicitWrapper.md#lte)

#### See

\_.lte

#### Source

node_modules/@types/lodash/common/lang.d.ts:1400

---

### matches()

> **matches**\<`V`\>(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Type parameters

• **V**

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matches`](LoDashImplicitWrapper.md#matches)

#### See

\_.matches

#### Source

node_modules/@types/lodash/common/util.d.ts:507

---

### matchesProperty()

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`Function`](Function.md)\<(`value`) => `boolean`\>

##### Type parameters

• **SrcValue**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:537

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`): [`Function`](Function.md)\<(`value`) =>
> `boolean`\>

##### Type parameters

• **SrcValue**

• **Value**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:541

---

### mean()

> **mean**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mean`](LoDashImplicitWrapper.md#mean)

#### See

\_.mean

#### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:556

---

### method()

> **method**(...`args`): [`Function`](Function.md)\<(`object`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`Function`](Function.md)\<(`object`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`method`](LoDashImplicitWrapper.md#method)

#### See

\_.method

#### Source

node_modules/@types/lodash/common/util.d.ts:569

---

### methodOf()

> **methodOf**(...`args`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`methodOf`](LoDashImplicitWrapper.md#methodof)

#### See

\_.methodOf

#### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

##### See

\_.mixin

##### Source

node_modules/@types/lodash/common/util.d.ts:632

#### mixin(options)

> **mixin**(`options`?):
> [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### Parameters

• **options?**: [`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

##### See

\_.mixin

##### Source

node_modules/@types/lodash/common/util.d.ts:636

---

### multiply()

> **multiply**(`multiplicand`): `number`

#### Parameters

• **multiplicand**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`multiply`](LoDashImplicitWrapper.md#multiply)

#### See

\_.multiply

#### Source

node_modules/@types/lodash/common/math.d.ts:283

---

### negate()

> **negate**(): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.negate

#### Source

node_modules/@types/lodash/common/function.d.ts:578

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noConflict`](LoDashImplicitWrapper.md#noconflict)

#### See

\_.noConflict

#### Source

node_modules/@types/lodash/common/util.d.ts:661

---

### noop()

> **noop**(...`args`): `void`

#### Parameters

• ...**args**: `any`[]

#### Returns

`void`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noop`](LoDashImplicitWrapper.md#noop)

#### See

\_.noop

#### Source

node_modules/@types/lodash/common/util.d.ts:682

---

### now()

> **now**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`now`](LoDashImplicitWrapper.md#now)

#### See

\_.now

#### Source

node_modules/@types/lodash/common/date.d.ts:15

---

### nthArg()

> **nthArg**(): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`nthArg`](LoDashImplicitWrapper.md#ntharg)

#### See

\_.nthArg

#### Source

node_modules/@types/lodash/common/util.d.ts:704

---

### once()

> **once**(): [`Function`](Function.md)\<`T`\>

#### Returns

[`Function`](Function.md)\<`T`\>

#### See

\_.once

#### Source

node_modules/@types/lodash/common/function.d.ts:600

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) =>
> (`ReturnType`\<`T`\> \| `TResult`)[]\>

#### Type parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => (`ReturnType`\<`T`\> \| `TResult`)[]\>

#### See

\_.over

#### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:623

---

### overEvery()

> **overEvery**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Type parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.overEvery

#### Source

node_modules/@types/lodash/common/util.d.ts:772

---

### overSome()

> **overSome**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

#### Type parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

\_.overSome

#### Source

node_modules/@types/lodash/common/util.d.ts:811

---

### pad()

> **pad**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`pad`](LoDashImplicitWrapper.md#pad)

#### See

\_.pad

#### Source

node_modules/@types/lodash/common/string.d.ts:232

---

### padEnd()

> **padEnd**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padEnd`](LoDashImplicitWrapper.md#padend)

#### See

\_.padEnd

#### Source

node_modules/@types/lodash/common/string.d.ts:257

---

### padStart()

> **padStart**(`length`?, `chars`?): `string`

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padStart`](LoDashImplicitWrapper.md#padstart)

#### See

\_.padStart

#### Source

node_modules/@types/lodash/common/string.d.ts:282

---

### parseInt()

> **parseInt**(`radix`?): `number`

#### Parameters

• **radix?**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`parseInt`](LoDashImplicitWrapper.md#parseint)

#### See

\_.parseInt

#### Source

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

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:676

#### partial(plc1, plc2, arg3)

> **partial**\<`T3`\>(`plc1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:685

#### partial(arg1, plc2, arg3)

> **partial**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:693

#### partial(plc1, arg2, arg3)

> **partial**\<`T2`, `T3`\>(`plc1`, `arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:701

#### partial(plc1, plc2, arg3)

> **partial**\<`T3`\>(`plc1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:709

#### partial(arg1, plc2, plc3, arg4)

> **partial**\<`T1`, `T4`\>(`arg1`, `plc2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:716

#### partial(plc1, arg2, plc3, arg4)

> **partial**\<`T2`, `T4`\>(`plc1`, `arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:723

#### partial(arg1, arg2, plc3, arg4)

> **partial**\<`T1`, `T2`, `T4`\>(`arg1`, `arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:730

#### partial(plc1, plc2, arg3, arg4)

> **partial**\<`T3`, `T4`\>(`plc1`, `plc2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:737

#### partial(arg1, plc2, arg3, arg4)

> **partial**\<`T1`, `T3`, `T4`\>(`arg1`, `plc2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:744

#### partial(plc1, arg2, arg3, arg4)

> **partial**\<`T2`, `T3`, `T4`\>(`plc1`, `arg2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:751

#### partial(arg1, arg2, arg3, arg4)

> **partial**\<`T1`, `T2`, `T3`, `T4`\>(`arg1`, `arg2`, `arg3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, `t3`, `t4`, ...`ts`) => `R` ? (...`ts`) =>
> `R` : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:758

#### partial(arg1, arg2, arg3)

> **partial**\<`T1`, `T2`, `T3`\>(`arg1`, `arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> (`t1`, `t2`, `t3`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:765

#### partial(arg1, arg2)

> **partial**\<`T1`, `T2`\>(`arg1`, `arg2`): [`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`,
> ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### Type parameters

• **T1**

• **T2**

##### Parameters

• **arg1**: `T1`

• **arg2**: `T2`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, `t2`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### See

\_.partial

##### Source

node_modules/@types/lodash/common/function.d.ts:772

#### partial(arg1)

> **partial**\<`T1`\>(`arg1`): [`Function`](Function.md)\<`T` _extends_ (`t1`, ...`ts`) => `R` ?
> (...`ts`) => `R` : `any`\>

##### Type parameters

• **T1**

##### Parameters

• **arg1**: `T1`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (`t1`, ...`ts`) => `R` ? (...`ts`) => `R` : `any`\>

##### See

\_.partial

##### Source

node_modules/@types/lodash/common/function.d.ts:779

#### partial()

> **partial**(): [`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### See

\_.partial

##### Source

node_modules/@types/lodash/common/function.d.ts:786

---

### partialRight()

#### partialRight(arg1, plc2)

> **partialRight**\<`T1`\>(`arg1`, `plc2`): [`Function`](Function.md)\<`T` _extends_
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type parameters

• **T1**

##### Parameters

• **arg1**: `T1`

• **plc2**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`,
`R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:953

#### partialRight(arg2)

> **partialRight**\<`T2`\>(`arg2`): [`Function`](Function.md)\<`T` _extends_
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type parameters

• **T2**

##### Parameters

• **arg2**: `T2`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`,
`R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:960

#### partialRight(arg1, plc2, plc3)

> **partialRight**\<`T1`\>(`arg1`, `plc2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:966

#### partialRight(arg2, plc3)

> **partialRight**\<`T2`\>(`arg2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type parameters

• **T2**

##### Parameters

• **arg2**: `T2`

• **plc3**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:973

#### partialRight(arg1, arg2, plc3)

> **partialRight**\<`T1`, `T2`\>(`arg1`, `arg2`, `plc3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:980

#### partialRight(arg3)

> **partialRight**\<`T3`\>(`arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type parameters

• **T3**

##### Parameters

• **arg3**: `T3`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`,
`T3`, `R`\> ? [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:987

#### partialRight(arg1, plc2, arg3)

> **partialRight**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:994

#### partialRight(arg2, arg3)

> **partialRight**\<`T2`, `T3`\>(`arg2`, `arg3`): [`Function`](Function.md)\<`T` _extends_
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1001

#### partialRight(arg1, plc2, plc3, plc4)

> **partialRight**\<`T1`\>(`arg1`, `plc2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T2`, `T3`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1008

#### partialRight(arg2, plc3, plc4)

> **partialRight**\<`T2`\>(`arg2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T3`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1015

#### partialRight(arg1, arg2, plc3, plc4)

> **partialRight**\<`T1`, `T2`\>(`arg1`, `arg2`, `plc3`, `plc4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T3`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1022

#### partialRight(arg3, plc4)

> **partialRight**\<`T3`\>(`arg3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### Type parameters

• **T3**

##### Parameters

• **arg3**: `T3`

• **plc4**: [`LoDashStatic`](LoDashStatic.md)

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T4`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:1029

#### partialRight(arg1, plc2, arg3, plc4)

> **partialRight**\<`T1`, `T3`\>(`arg1`, `plc2`, `arg3`, `plc4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1036

#### partialRight(arg2, arg3, plc4)

> **partialRight**\<`T2`, `T3`\>(`arg2`, `arg3`, `plc4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1043

#### partialRight(arg1, arg2, arg3, plc4)

> **partialRight**\<`T1`, `T2`, `T3`\>(`arg1`, `arg2`, `arg3`, `plc4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T4`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1050

#### partialRight(arg4)

> **partialRight**\<`T4`\>(`arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> : `any`\>

##### Type parameters

• **T4**

##### Parameters

• **arg4**: `T4`

##### Returns

[`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
`T3`, `T4`, `R`\> ? [`Function3`](../type-aliases/Function3.md)\<`T1`, `T2`, `T3`, `R`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:1057

#### partialRight(arg1, plc2, plc3, arg4)

> **partialRight**\<`T1`, `T4`\>(`arg1`, `plc2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T2`, `T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1064

#### partialRight(arg2, plc3, arg4)

> **partialRight**\<`T2`, `T4`\>(`arg2`, `plc3`, `arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1071

#### partialRight(arg1, arg2, plc3, arg4)

> **partialRight**\<`T1`, `T2`, `T4`\>(`arg1`, `arg2`, `plc3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T3`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1078

#### partialRight(arg3, arg4)

> **partialRight**\<`T3`, `T4`\>(`arg3`, `arg4`): [`Function`](Function.md)\<`T` _extends_
> [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function2`](../type-aliases/Function2.md)\<`T1`, `T2`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1085

#### partialRight(arg1, plc2, arg3, arg4)

> **partialRight**\<`T1`, `T3`, `T4`\>(`arg1`, `plc2`, `arg3`, `arg4`):
> [`Function`](Function.md)\<`T` _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`,
> `T3`, `T4`, `R`\> ? [`Function1`](../type-aliases/Function1.md)\<`T2`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1092

#### partialRight(arg2, arg3, arg4)

> **partialRight**\<`T2`, `T3`, `T4`\>(`arg2`, `arg3`, `arg4`): [`Function`](Function.md)\<`T`
> _extends_ [`Function4`](../type-aliases/Function4.md)\<`T1`, `T2`, `T3`, `T4`, `R`\> ?
> [`Function1`](../type-aliases/Function1.md)\<`T1`, `R`\> : `any`\>

##### Type parameters

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1099

#### partialRight(ts)

> **partialRight**\<`TS`\>(...`ts`): [`Function`](Function.md)\<`T` _extends_ (...`args`) => `R` ?
> () => `R` : `any`\>

##### Type parameters

• **TS** _extends_ `any`[]

##### Parameters

• ...**ts**: `TS`

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`args`) => `R` ? () => `R` : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:1106

#### partialRight()

> **partialRight**(): [`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> :
> `any`\>

##### Returns

[`Function`](Function.md)\<`T` _extends_ (...`ts`) => `any` ? `T`\<`T`\> : `any`\>

##### See

\_.partialRight

##### Source

node_modules/@types/lodash/common/function.d.ts:1110

---

### plant()

> **plant**(`value`): `this`

#### Parameters

• **value**: `unknown`

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`plant`](LoDashImplicitWrapper.md#plant)

#### See

\_.plant

#### Source

node_modules/@types/lodash/common/seq.d.ts:95

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`Function`](Function.md)\<(`obj`) => `TResult`\>

#### Type parameters

• **TObj**

• **TResult**

#### Returns

[`Function`](Function.md)\<(`obj`) => `TResult`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`property`](LoDashImplicitWrapper.md#property)

#### See

\_.property

#### Source

node_modules/@types/lodash/common/util.d.ts:839

---

### propertyOf()

> **propertyOf**(): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`propertyOf`](LoDashImplicitWrapper.md#propertyof)

#### See

\_.propertyOf

#### Source

node_modules/@types/lodash/common/util.d.ts:862

---

### random()

#### random(floating)

> **random**(`floating`?): `number`

##### Parameters

• **floating?**: `boolean`

##### Returns

`number`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:115

#### random(max, floating)

> **random**(`max`, `floating`?): `number`

##### Parameters

• **max**: `number`

• **floating?**: `boolean`

##### Returns

`number`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:119

---

### range()

> **range**(`end`?, `step`?): [`Collection`](Collection.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`range`](LoDashImplicitWrapper.md#range)

#### See

\_.range

#### Source

node_modules/@types/lodash/common/util.d.ts:892

---

### rangeRight()

> **rangeRight**(`end`?, `step`?): [`Collection`](Collection.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`rangeRight`](LoDashImplicitWrapper.md#rangeright)

#### See

\_.rangeRight

#### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:1290

---

### repeat()

> **repeat**(`n`?): `string`

#### Parameters

• **n?**: `number`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`repeat`](LoDashImplicitWrapper.md#repeat)

#### See

\_.repeat

#### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

##### See

\_.replace

##### Source

node_modules/@types/lodash/common/string.d.ts:359

#### replace(replacement)

> **replace**(`replacement`): `string`

##### Parameters

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

##### See

\_.replace

##### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:1315

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue`?): `TResult`

#### Type parameters

• **TResult**

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `TResult` \| (...`args`) => `TResult`

#### Returns

`TResult`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`result`](LoDashImplicitWrapper.md#result)

#### See

\_.result

#### Source

node_modules/@types/lodash/common/object.d.ts:2183

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`reverse`](LoDashImplicitWrapper.md#reverse)

#### See

\_.reverse

#### Source

node_modules/@types/lodash/common/seq.d.ts:108

---

### round()

> **round**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`round`](LoDashImplicitWrapper.md#round)

#### See

\_.round

#### Source

node_modules/@types/lodash/common/math.d.ts:306

---

### runInContext()

> **runInContext**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`runInContext`](LoDashImplicitWrapper.md#runincontext)

#### See

\_.runInContext

#### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

##### See

\_.set

##### Source

node_modules/@types/lodash/common/object.d.ts:2212

#### set(path, value)

> **set**\<`TResult`\>(`path`, `value`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

##### See

\_.set

##### Source

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2251

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2255

---

### size()

> **size**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`size`](LoDashImplicitWrapper.md#size)

#### See

\_.size

#### Source

node_modules/@types/lodash/common/collection.d.ts:1825

---

### snakeCase()

> **snakeCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`snakeCase`](LoDashImplicitWrapper.md#snakecase)

#### See

\_.snakeCase

#### Source

node_modules/@types/lodash/common/string.d.ts:389

---

### split()

> **split**(`separator`?, `limit`?): [`Collection`](Collection.md)\<`string`\>

#### Parameters

• **separator?**: `string` \| `RegExp`

• **limit?**: `number`

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`split`](LoDashImplicitWrapper.md#split)

#### See

\_.split

#### Source

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

#### Source

node_modules/@types/lodash/common/function.d.ts:1339

---

### startCase()

> **startCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startCase`](LoDashImplicitWrapper.md#startcase)

#### See

\_.startCase

#### Source

node_modules/@types/lodash/common/string.d.ts:441

---

### startsWith()

> **startsWith**(`target`?, `position`?): `boolean`

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

`boolean`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startsWith`](LoDashImplicitWrapper.md#startswith)

#### See

\_.startsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:465

---

### stubArray()

> **stubArray**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubArray`](LoDashImplicitWrapper.md#stubarray)

#### See

\_.stubArray

#### Source

node_modules/@types/lodash/common/util.d.ts:981

---

### stubFalse()

#### stubFalse()

> **stubFalse**(): `false`

##### Returns

`false`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1002

#### stubFalse()

> **stubFalse**(): `false`

##### Returns

`false`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1211

---

### stubObject()

> **stubObject**(): `any`

#### Returns

`any`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubObject`](LoDashImplicitWrapper.md#stubobject)

#### See

\_.stubObject

#### Source

node_modules/@types/lodash/common/util.d.ts:1023

---

### stubString()

> **stubString**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubString`](LoDashImplicitWrapper.md#stubstring)

#### See

\_.stubString

#### Source

node_modules/@types/lodash/common/util.d.ts:1044

---

### stubTrue()

#### stubTrue()

> **stubTrue**(): `true`

##### Returns

`true`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1065

#### stubTrue()

> **stubTrue**(): `true`

##### Returns

`true`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1186

---

### subtract()

> **subtract**(`subtrahend`): `number`

#### Parameters

• **subtrahend**: `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`subtract`](LoDashImplicitWrapper.md#subtract)

#### See

\_.subtract

#### Source

node_modules/@types/lodash/common/math.d.ts:334

---

### sum()

> **sum**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`sum`](LoDashImplicitWrapper.md#sum)

#### See

\_.sum

#### Source

node_modules/@types/lodash/common/math.d.ts:361

---

### tap()

> **tap**(`interceptor`): `this`

#### Parameters

• **interceptor**

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`tap`](LoDashImplicitWrapper.md#tap)

#### See

\_.tap

#### Source

node_modules/@types/lodash/common/seq.d.ts:179

---

### template()

> **template**(`options`?): [`TemplateExecutor`](TemplateExecutor.md)

#### Parameters

• **options?**: [`TemplateOptions`](TemplateOptions.md)

#### Returns

[`TemplateExecutor`](TemplateExecutor.md)

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`template`](LoDashImplicitWrapper.md#template)

#### See

\_.template

#### Source

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

##### Source

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

##### Source

node_modules/@types/lodash/common/function.d.ts:1386

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

#### Type parameters

• **TResult**

#### Parameters

• **interceptor**

#### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`thru`](LoDashImplicitWrapper.md#thru)

#### See

\_.thru

#### Source

node_modules/@types/lodash/common/seq.d.ts:202

---

### times()

#### times(iteratee)

> **times**\<`TResult`\>(`iteratee`): `TResult`[]

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

`TResult`[]

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1093

#### times()

> **times**(): `number`[]

##### Returns

`number`[]

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1097

---

### toFinite()

> **toFinite**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toFinite`](LoDashImplicitWrapper.md#tofinite)

#### See

\_.toFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:1497

---

### toInteger()

> **toInteger**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toInteger`](LoDashImplicitWrapper.md#tointeger)

#### See

\_.toInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1535

---

### toJSON()

> **toJSON**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toJSON`](LoDashImplicitWrapper.md#tojson)

#### See

\_.toJSON

#### Source

node_modules/@types/lodash/common/seq.d.ts:121

---

### toLength()

> **toLength**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLength`](LoDashImplicitWrapper.md#tolength)

#### See

\_.toLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:1574

---

### toLower()

> **toLower**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLower`](LoDashImplicitWrapper.md#tolower)

#### See

\_.toLower

#### Source

node_modules/@types/lodash/common/string.d.ts:542

---

### toNumber()

> **toNumber**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toNumber`](LoDashImplicitWrapper.md#tonumber)

#### See

\_.toNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1610

---

### toPairs()

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

#### See

\_.toPairs

#### Source

node_modules/@types/lodash/common/object.d.ts:2284

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairsIn`](LoDashImplicitWrapper.md#topairsin)

#### See

\_.toPairsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2309

---

### toPath()

> **toPath**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPath`](LoDashImplicitWrapper.md#topath)

#### See

\_.toPath

#### Source

node_modules/@types/lodash/common/util.d.ts:1140

---

### toPlainObject()

> **toPlainObject**(): [`Object`](Object.md)\<`any`\>

#### Returns

[`Object`](Object.md)\<`any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPlainObject`](LoDashImplicitWrapper.md#toplainobject)

#### See

\_.toPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1633

---

### toSafeInteger()

> **toSafeInteger**(): `number`

#### Returns

`number`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toSafeInteger`](LoDashImplicitWrapper.md#tosafeinteger)

#### See

\_.toSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1670

---

### toUpper()

> **toUpper**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toUpper`](LoDashImplicitWrapper.md#toupper)

#### See

\_.toUpper

#### Source

node_modules/@types/lodash/common/string.d.ts:564

---

### trim()

> **trim**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trim`](LoDashImplicitWrapper.md#trim)

#### See

\_.trim

#### Source

node_modules/@types/lodash/common/string.d.ts:591

---

### trimEnd()

> **trimEnd**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimEnd`](LoDashImplicitWrapper.md#trimend)

#### See

\_.trimEnd

#### Source

node_modules/@types/lodash/common/string.d.ts:618

---

### trimStart()

> **trimStart**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimStart`](LoDashImplicitWrapper.md#trimstart)

#### See

\_.trimStart

#### Source

node_modules/@types/lodash/common/string.d.ts:645

---

### truncate()

> **truncate**(`options`?): `string`

#### Parameters

• **options?**: [`TruncateOptions`](TruncateOptions.md)

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`truncate`](LoDashImplicitWrapper.md#truncate)

#### See

\_.truncate

#### Source

node_modules/@types/lodash/common/string.d.ts:683

---

### unary()

> **unary**(): [`Function`](Function.md)\<(`arg1`) => `ReturnType`\<`T`\>\>

#### Returns

[`Function`](Function.md)\<(`arg1`) => `ReturnType`\<`T`\>\>

#### See

\_.unary

#### Source

node_modules/@types/lodash/common/function.d.ts:1423

---

### unescape()

> **unescape**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unescape`](LoDashImplicitWrapper.md#unescape)

#### See

\_.unescape

#### Source

node_modules/@types/lodash/common/string.d.ts:709

---

### uniqueId()

> **uniqueId**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`uniqueId`](LoDashImplicitWrapper.md#uniqueid)

#### See

\_.uniqueId

#### Source

node_modules/@types/lodash/common/util.d.ts:1162

---

### unset()

> **unset**(`path`): [`Primitive`](Primitive.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`Primitive`](Primitive.md)\<`boolean`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unset`](LoDashImplicitWrapper.md#unset)

#### See

\_.unset

#### Source

node_modules/@types/lodash/common/object.d.ts:2411

---

### update()

> **update**(`path`, `updater`): [`Object`](Object.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

#### Returns

[`Object`](Object.md)\<`any`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`update`](LoDashImplicitWrapper.md#update)

#### See

\_.update

#### Source

node_modules/@types/lodash/common/object.d.ts:2435

---

### upperCase()

> **upperCase**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperCase`](LoDashImplicitWrapper.md#uppercase)

#### See

\_.upperCase

#### Source

node_modules/@types/lodash/common/string.d.ts:731

---

### upperFirst()

> **upperFirst**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperFirst`](LoDashImplicitWrapper.md#upperfirst)

#### See

\_.upperFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:753

---

### value()

> **value**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value)

#### See

\_.value

#### Source

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `T`

#### Returns

`T`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

#### See

\_.valueOf

#### Source

node_modules/@types/lodash/common/seq.d.ts:154

---

### words()

> **words**(`pattern`?): [`Collection`](Collection.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`words`](LoDashImplicitWrapper.md#words)

#### See

\_.words

#### Source

node_modules/@types/lodash/common/string.d.ts:780

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`Function`](Function.md)\<(...`args`) => `TResult`\>

#### Type parameters

• **TArgs**

• **TResult**

#### Parameters

• **wrapper**

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`wrap`](LoDashImplicitWrapper.md#wrap)

#### See

\_.wrap

#### Source

node_modules/@types/lodash/common/function.d.ts:1447
