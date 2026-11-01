[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: Collection\<T\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:175

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`[]\>

## Type Parameters

### T

`T`

## Properties

### each

> **each**: (`iteratee?`) => `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:77

#### Parameters

##### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`Collection`\<`T`\>

#### See

_.forEach

#### See

_.each

---

### eachRight

> **eachRight**: (`iteratee?`) => `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:125

#### Parameters

##### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`Collection`\<`T`\>

#### See

_.forEachRight

#### See

_.eachRight

## Methods

### add()

> **add**(`addend`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:17

#### Parameters

##### addend

`number`

#### Returns

`number`

#### See

_.add

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`add`](LoDashImplicitWrapper.md#add)

---

### at()

> **at**(...`props`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:434

#### Parameters

##### props

...[`PropertyPath`](../type-aliases/PropertyPath.md)[]

#### Returns

`Collection`\<`T`\>

#### See

_.at

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): `Error` \| `TResult`

Defined in: node\_modules/@types/lodash/common/util.d.ts:17

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### args

...`any`[]

#### Returns

`Error` \| `TResult`

#### See

_.attempt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`attempt`](LoDashImplicitWrapper.md#attempt)

---

### bind()

> **bind**(`thisArg`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:99

#### Parameters

##### thisArg

`any`

##### partials

...`any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

_.bind

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bind`](LoDashImplicitWrapper.md#bind)

---

### bindAll()

> **bindAll**(...`methodNames`): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:45

#### Parameters

##### methodNames

...[`Many`](../type-aliases/Many.md)\<`string`\>[]

#### Returns

`this`

#### See

_.bindAll

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindAll`](LoDashImplicitWrapper.md#bindall)

---

### bindKey()

> **bindKey**(`key`, ...`partials`): [`Function`](Function.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:133

#### Parameters

##### key

`string`

##### partials

...`any`[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

_.bindKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`bindKey`](LoDashImplicitWrapper.md#bindkey)

---

### camelCase()

> **camelCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:16

#### Returns

`string`

#### See

_.camelCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`camelCase`](LoDashImplicitWrapper.md#camelcase)

---

### capitalize()

> **capitalize**(): `never`

Defined in: node\_modules/@types/lodash/common/string.d.ts:38

#### Returns

`never`

#### See

_.capitalize

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`capitalize`](LoDashImplicitWrapper.md#capitalize)

---

### castArray()

> **castArray**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:19

#### Returns

`Collection`\<`T`\>

#### See

_.castArray

---

### ceil()

> **ceil**(`precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:40

#### Parameters

##### precision?

`number`

#### Returns

`number`

#### See

_.ceil

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`ceil`](LoDashImplicitWrapper.md#ceil)

---

### chain()

> **chain**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:45

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

_.chain

---

### chunk()

> **chunk**(`size?`): `Collection`\<`T`[]\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:26

#### Parameters

##### size?

`number`

#### Returns

`Collection`\<`T`[]\>

#### See

_.chunk

---

### clamp()

#### Call Signature

> **clamp**(`lower`, `upper`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:44

##### Parameters

###### lower

`number`

###### upper

`number`

##### Returns

`number`

##### See

_.clamp

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

#### Call Signature

> **clamp**(`upper`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:48

##### Parameters

###### upper

`number`

##### Returns

`number`

##### See

_.clamp

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clamp`](LoDashImplicitWrapper.md#clamp)

---

### clone()

> **clone**(): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:101

#### Returns

`T`[]

#### See

_.clone

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

---

### cloneDeep()

> **cloneDeep**(): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:105

#### Returns

`T`[]

#### See

_.cloneDeep

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeep`](LoDashImplicitWrapper.md#clonedeep)

---

### cloneDeepWith()

#### Call Signature

> **cloneDeepWith**(`customizer`): `any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:109

##### Parameters

###### customizer

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`[]\>

##### Returns

`any`

##### See

_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

#### Call Signature

> **cloneDeepWith**(): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:113

##### Returns

`T`[]

##### See

_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

---

### cloneWith()

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:117

##### Type Parameters

###### TResult

`TResult` _extends_ `string` \| `number` \| `boolean` \| `object` \| `null`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[], `TResult`\>

##### Returns

`TResult`

##### See

_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): `T`[] \| `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:121

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[], `TResult` \| `undefined`\>

##### Returns

`T`[] \| `TResult`

##### See

_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**(): `T`[]

Defined in: node\_modules/@types/lodash/common/lang.d.ts:125

##### Returns

`T`[]

##### See

_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

---

### commit()

> **commit**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:82

#### Returns

`this`

#### See

_.commit

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`commit`](LoDashImplicitWrapper.md#commit)

---

### compact()

> **compact**(): `Collection`\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:51

#### Returns

`Collection`\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### See

_.compact

---

### concat()

> **concat**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:90

#### Parameters

##### values

...[`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

`Collection`\<`T`\>

#### See

_.concat

---

### conforms()

> **conforms**(): [`Function`](Function.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:100

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

_.conforms

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conforms`](LoDashImplicitWrapper.md#conforms)

---

### conformsTo()

> **conformsTo**(`source`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:215

#### Parameters

##### source

(`T` _extends_ (`arg`) => `any` ? `A` : `any`)[]

#### Returns

`boolean`

#### See

_.conformsTo

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conformsTo`](LoDashImplicitWrapper.md#conformsto)

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `T`[]\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:122

#### Returns

[`Function`](Function.md)\<() => `T`[]\>

#### See

_.constant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

---

### countBy()

> **countBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:35

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

_.countBy

---

### deburr()

> **deburr**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:61

#### Returns

`string`

#### See

_.deburr

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`deburr`](LoDashImplicitWrapper.md#deburr)

---

### defaultTo()

#### Call Signature

> **defaultTo**(`defaultValue`): `T`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:151

##### Parameters

###### defaultValue

`T`[]

##### Returns

`T`[]

##### See

_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

#### Call Signature

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T`[] \| `TDefault`

Defined in: node\_modules/@types/lodash/common/util.d.ts:155

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### defaultValue

`TDefault`

##### Returns

`T`[] \| `TDefault`

##### See

_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

---

### defer()

> **defer**(...`args`): [`Primitive`](Primitive.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:469

#### Parameters

##### args

...`any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### See

_.defer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defer`](LoDashImplicitWrapper.md#defer)

---

### delay()

> **delay**(`wait`, ...`args`): [`Primitive`](Primitive.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:492

#### Parameters

##### wait

`number`

##### args

...`any`[]

#### Returns

[`Primitive`](Primitive.md)\<`number`\>

#### See

_.delay

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`delay`](LoDashImplicitWrapper.md#delay)

---

### difference()

> **difference**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:131

#### Parameters

##### values

...[`List`](../type-aliases/List.md)\<`T`\>[]

#### Returns

`Collection`\<`T`\>

#### See

_.difference

---

### differenceBy()

#### Call Signature

> **differenceBy**\<`T2`\>(`values1`, `iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:180

##### Type Parameters

###### T2

`T2`

##### Parameters

###### values1

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

`Collection`\<`T`\>

##### See

_.differenceBy

#### Call Signature

> **differenceBy**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:184

##### Parameters

###### values

...([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`Collection`\<`T`\>

##### See

_.differenceBy

---

### differenceWith()

#### Call Signature

> **differenceWith**\<`T2`\>(`values`, `comparator`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:231

##### Type Parameters

###### T2

`T2`

##### Parameters

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

`Collection`\<`T`\>

##### See

_.differenceWith

#### Call Signature

> **differenceWith**\<`T2`, `T3`, `T4`\>(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:235

##### Type Parameters

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

##### Parameters

###### values

...([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

`Collection`\<`T`\>

##### See

_.differenceWith

---

### divide()

> **divide**(`divisor`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:63

#### Parameters

##### divisor

`number`

#### Returns

`number`

#### See

_.divide

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`divide`](LoDashImplicitWrapper.md#divide)

---

### drop()

> **drop**(`n?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:261

#### Parameters

##### n?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.drop

---

### dropRight()

> **dropRight**(`n?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:283

#### Parameters

##### n?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.dropRight

---

### dropRightWhile()

> **dropRightWhile**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:306

#### Parameters

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.dropRightWhile

---

### dropWhile()

> **dropWhile**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:329

#### Parameters

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.dropWhile

---

### endsWith()

> **endsWith**(`target?`, `position?`): `boolean`

Defined in: node\_modules/@types/lodash/common/string.d.ts:85

#### Parameters

##### target?

`string`

##### position?

`number`

#### Returns

`boolean`

#### See

_.endsWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`endsWith`](LoDashImplicitWrapper.md#endswith)

---

### entries()

> **entries**(): `Collection`\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:598

#### Returns

`Collection`\<\[`string`, `any`\]\>

#### See

_.entries

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

---

### entriesIn()

> **entriesIn**(): `Collection`\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:632

#### Returns

`Collection`\<\[`string`, `any`\]\>

#### See

_.entriesIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entriesIn`](LoDashImplicitWrapper.md#entriesin)

---

### eq()

> **eq**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:260

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.eq

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`eq`](LoDashImplicitWrapper.md#eq)

---

### escape()

> **escape**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:118

#### Returns

`string`

#### See

_.escape

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escape`](LoDashImplicitWrapper.md#escape)

---

### escapeRegExp()

> **escapeRegExp**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:141

#### Returns

`string`

#### See

_.escapeRegExp

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`escapeRegExp`](LoDashImplicitWrapper.md#escaperegexp)

---

### every()

> **every**(`predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:176

#### Parameters

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

_.every

---

### fill()

> **fill**\<`U`\>(`value`, `start?`, `end?`): `Collection`\<`T` \| `U`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:367

#### Type Parameters

##### U

`U`

#### Parameters

##### value

`U`

##### start?

`number`

##### end?

`number`

#### Returns

`Collection`\<`T` \| `U`\>

#### See

_.fill

---

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`): `Collection`\<`S`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:233

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

`Collection`\<`S`\>

##### See

_.filter

#### Call Signature

> **filter**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:237

##### Parameters

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

`Collection`\<`T`\>

##### See

_.filter

---

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:309

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.find

#### Call Signature

> **find**(`predicate?`, `fromIndex?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:313

##### Parameters

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T` \| `undefined`

##### See

_.find

---

### findIndex()

> **findIndex**(`predicate?`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:391

#### Parameters

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### fromIndex?

`number`

#### Returns

`number`

#### See

_.findIndex

---

### findKey()

> **findKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:817

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`string` \| `undefined`

#### See

_.findKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

---

### findLast()

#### Call Signature

> **findLast**\<`S`\>(`predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:372

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.findLast

#### Call Signature

> **findLast**(`predicate?`, `fromIndex?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:376

##### Parameters

###### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T` \| `undefined`

##### See

_.findLast

---

### findLastIndex()

> **findLastIndex**(`predicate?`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:414

#### Parameters

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### fromIndex?

`number`

#### Returns

`number`

#### See

_.findLastIndex

---

### findLastKey()

> **findLastKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:839

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`string` \| `undefined`

#### See

_.findLastKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

---

### first()

> **first**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:450

#### Returns

`T` \| `undefined`

#### See

_.first

---

### flatMap()

#### Call Signature

> **flatMap**\<`TResult`\>(`iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:454

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

`Collection`\<`TResult`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(`iteratee`): `Collection`\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:458

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

`Collection`\<`boolean`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? `Collection`\<`U`\> :
> `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:462

##### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? `Collection`\<`U`\> : `Collection`\<`T`\>

##### See

_.flatMap

---

### flatMapDeep()

#### Call Signature

> **flatMapDeep**\<`TResult`\>(`iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:577

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

`Collection`\<`TResult`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(`iteratee`): `Collection`\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:581

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

`Collection`\<`boolean`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:585

##### Returns

`Collection`\<`T`\>

##### See

_.flatMapDeep

---

### flatMapDepth()

#### Call Signature

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth?`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:701

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

###### depth?

`number`

##### Returns

`Collection`\<`TResult`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`iteratee`, `depth?`): `Collection`\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:705

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

###### depth?

`number`

##### Returns

`Collection`\<`boolean`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`depth?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:709

##### Parameters

###### depth?

`number`

##### Returns

`Collection`\<`T`\>

##### See

_.flatMapDepth

---

### flatten()

> **flatten**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? `Collection`\<`U`\> :
> `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:491

#### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? `Collection`\<`U`\> : `Collection`\<`T`\>

#### See

_.flatten

---

### flattenDeep()

> **flattenDeep**(): `T` _extends_
> [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
> `Collection`\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> : `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:515

#### Returns

`T` _extends_ [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
`Collection`\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> : `Collection`\<`T`\>

#### See

_.flattenDeep

---

### flattenDepth()

> **flattenDepth**(`depth?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:537

#### Parameters

##### depth?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.flattenDepth

---

### floor()

> **floor**(`precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:86

#### Parameters

##### precision?

`number`

#### Returns

`number`

#### See

_.floor

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`floor`](LoDashImplicitWrapper.md#floor)

---

### forEach()

> **forEach**(`iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:832

#### Parameters

##### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`Collection`\<`T`\>

#### See

_.forEach

---

### forEachRight()

> **forEachRight**(`iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:913

#### Parameters

##### iteratee?

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

`Collection`\<`T`\>

#### See

_.forEachRight

---

### forIn()

> **forIn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:867

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

_.forIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forIn`](LoDashImplicitWrapper.md#forin)

---

### forInRight()

> **forInRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:893

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

_.forInRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forInRight`](LoDashImplicitWrapper.md#forinright)

---

### forOwn()

> **forOwn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:921

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

_.forOwn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwn`](LoDashImplicitWrapper.md#forown)

---

### forOwnRight()

> **forOwnRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:947

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

_.forOwnRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

---

### fromPairs()

> **fromPairs**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
> \[[`PropertyName`](../type-aliases/PropertyName.md), `U`\] ? `U` : `any`\>\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:568

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
\[[`PropertyName`](../type-aliases/PropertyName.md), `U`\] ? `U` : `any`\>\>

#### See

_.fromPairs

---

### functions()

> **functions**(): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:981

#### Returns

`Collection`\<`string`\>

#### See

_.functions

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functions`](LoDashImplicitWrapper.md#functions)

---

### functionsIn()

> **functionsIn**(): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1015

#### Returns

`Collection`\<`string`\>

#### See

_.functionsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functionsIn`](LoDashImplicitWrapper.md#functionsin)

---

### get()

#### Call Signature

> **get**(`path`): `T`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1265

##### Parameters

###### path

`number`

##### Returns

`T`

##### See

_.get

#### Call Signature

> **get**\<`TDefault`\>(`path`, `defaultValue`): `T` \| `TDefault`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1269

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### path

`number`

###### defaultValue

`TDefault`

##### Returns

`T` \| `TDefault`

##### See

_.get

---

### groupBy()

> **groupBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:965

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### See

_.groupBy

---

### gt()

> **gt**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:283

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.gt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gt`](LoDashImplicitWrapper.md#gt)

---

### gte()

> **gte**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:306

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.gte

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`gte`](LoDashImplicitWrapper.md#gte)

---

### has()

> **has**(`path`): `boolean`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1395

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### See

_.has

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`has`](LoDashImplicitWrapper.md#has)

---

### hasIn()

> **hasIn**(`path`): `boolean`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1433

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

`boolean`

#### See

_.hasIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`hasIn`](LoDashImplicitWrapper.md#hasin)

---

### head()

> **head**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:610

#### Returns

`T` \| `undefined`

#### See

_.head

---

### identity()

> **identity**(): `T`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:387

#### Returns

`T`[]

#### See

_.identity

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`identity`](LoDashImplicitWrapper.md#identity)

---

### includes()

> **includes**(`target`, `fromIndex?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1019

#### Parameters

##### target

`T`

##### fromIndex?

`number`

#### Returns

`boolean`

#### See

_.includes

---

### indexOf()

> **indexOf**(`value`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:645

#### Parameters

##### value

`T`

##### fromIndex?

`number`

#### Returns

`number`

#### See

_.indexOf

---

### initial()

> **initial**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:666

#### Returns

`Collection`\<`T`\>

#### See

_.initial

---

### inRange()

> **inRange**(`start`, `end?`): `boolean`

Defined in: node\_modules/@types/lodash/common/number.d.ts:77

#### Parameters

##### start

`number`

##### end?

`number`

#### Returns

`boolean`

#### See

_.inRange

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`inRange`](LoDashImplicitWrapper.md#inrange)

---

### intersection()

> **intersection**(...`arrays`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:688

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

#### Returns

`Collection`\<`T`\>

#### See

_.intersection

---

### intersectionBy()

#### Call Signature

> **intersectionBy**\<`T2`\>(`values`, `iteratee`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:737

##### Type Parameters

###### T2

`T2`

##### Parameters

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

`Collection`\<`T`\>

##### See

_.intersectionBy

#### Call Signature

> **intersectionBy**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:741

##### Parameters

###### values

...([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

`Collection`\<`T`\>

##### See

_.intersectionBy

---

### intersectionWith()

#### Call Signature

> **intersectionWith**\<`T2`\>(`values`, `comparator`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:789

##### Type Parameters

###### T2

`T2`

##### Parameters

###### values

[`List`](../type-aliases/List.md)\<`T2`\>

###### comparator

[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T` \| `T2`\>

##### Returns

`Collection`\<`T`\>

##### See

_.intersectionWith

#### Call Signature

> **intersectionWith**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:793

##### Parameters

###### values

...([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

`Collection`\<`T`\>

##### See

_.intersectionWith

---

### invert()

> **invert**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1456

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.invert

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invert`](LoDashImplicitWrapper.md#invert)

---

### invertBy()

> **invertBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1490

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

_.invertBy

---

### invoke()

> **invoke**(`path`, ...`args`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1535

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### args

...`any`[]

#### Returns

`any`

#### See

_.invoke

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invoke`](LoDashImplicitWrapper.md#invoke)

---

### invokeMap()

#### Call Signature

> **invokeMap**(`methodName`, ...`args`): `Collection`\<`any`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1065

##### Parameters

###### methodName

`string`

###### args

...`any`[]

##### Returns

`Collection`\<`any`\>

##### See

_.invokeMap

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

#### Call Signature

> **invokeMap**\<`TResult`\>(`method`, ...`args`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1069

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### method

(...`args`) => `TResult`

###### args

...`any`[]

##### Returns

`Collection`\<`TResult`\>

##### See

_.invokeMap

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

---

### isArguments()

> **isArguments**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:328

#### Returns

`boolean`

#### See

_.isArguments

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArguments`](LoDashImplicitWrapper.md#isarguments)

---

### isArray()

> **isArray**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:350

#### Returns

`boolean`

#### See

_.isArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArray`](LoDashImplicitWrapper.md#isarray)

---

### isArrayBuffer()

> **isArrayBuffer**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:372

#### Returns

`boolean`

#### See

_.isArrayBuffer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayBuffer`](LoDashImplicitWrapper.md#isarraybuffer)

---

### isArrayLike()

> **isArrayLike**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:418

#### Returns

`boolean`

#### See

_.isArrayLike

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLike`](LoDashImplicitWrapper.md#isarraylike)

---

### isArrayLikeObject()

> **isArrayLikeObject**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:463

#### Returns

`boolean`

#### See

_.isArrayLikeObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isArrayLikeObject`](LoDashImplicitWrapper.md#isarraylikeobject)

---

### isBoolean()

> **isBoolean**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:485

#### Returns

`boolean`

#### See

_.isBoolean

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBoolean`](LoDashImplicitWrapper.md#isboolean)

---

### isBuffer()

> **isBuffer**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:507

#### Returns

`boolean`

#### See

_.isBuffer

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isBuffer`](LoDashImplicitWrapper.md#isbuffer)

---

### isDate()

> **isDate**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:529

#### Returns

`boolean`

#### See

_.isDate

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isDate`](LoDashImplicitWrapper.md#isdate)

---

### isElement()

> **isElement**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:551

#### Returns

`boolean`

#### See

_.isElement

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isElement`](LoDashImplicitWrapper.md#iselement)

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:581

#### Returns

`boolean`

#### See

_.isEmpty

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEmpty`](LoDashImplicitWrapper.md#isempty)

---

### isEqual()

> **isEqual**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:622

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.isEqual

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqual`](LoDashImplicitWrapper.md#isequal)

---

### isEqualWith()

> **isEqualWith**(`other`, `customizer?`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:668

#### Parameters

##### other

`any`

##### customizer?

[`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

#### Returns

`boolean`

#### See

_.isEqualWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isEqualWith`](LoDashImplicitWrapper.md#isequalwith)

---

### isError()

> **isError**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:691

#### Returns

`boolean`

#### See

_.isError

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isError`](LoDashImplicitWrapper.md#iserror)

---

### isFinite()

> **isFinite**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:715

#### Returns

`boolean`

#### See

_.isFinite

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFinite`](LoDashImplicitWrapper.md#isfinite)

---

### isFunction()

> **isFunction**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:737

#### Returns

`boolean`

#### See

_.isFunction

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isFunction`](LoDashImplicitWrapper.md#isfunction)

---

### isInteger()

> **isInteger**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:775

#### Returns

`boolean`

#### See

_.isInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isInteger`](LoDashImplicitWrapper.md#isinteger)

---

### isLength()

> **isLength**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:813

#### Returns

`boolean`

#### See

_.isLength

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isLength`](LoDashImplicitWrapper.md#islength)

---

### isMap()

> **isMap**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:835

#### Returns

`boolean`

#### See

_.isMap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMap`](LoDashImplicitWrapper.md#ismap)

---

### isMatch()

> **isMatch**(`source`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:871

#### Parameters

##### source

`object`

#### Returns

`boolean`

#### See

_.isMatch

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatch`](LoDashImplicitWrapper.md#ismatch)

---

### isMatchWith()

> **isMatchWith**(`source`, `customizer`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:917

#### Parameters

##### source

`object`

##### customizer

[`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

#### Returns

`boolean`

#### See

_.isMatchWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isMatchWith`](LoDashImplicitWrapper.md#ismatchwith)

---

### isNaN()

> **isNaN**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:941

#### Returns

`boolean`

#### See

_.isNaN

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNaN`](LoDashImplicitWrapper.md#isnan)

---

### isNative()

> **isNative**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:963

#### Returns

`boolean`

#### See

_.isNative

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNative`](LoDashImplicitWrapper.md#isnative)

---

### isNil()

> **isNil**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:996

#### Returns

`boolean`

#### See

_.isNil

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNil`](LoDashImplicitWrapper.md#isnil)

---

### isNull()

> **isNull**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1018

#### Returns

`boolean`

#### See

_.isNull

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNull`](LoDashImplicitWrapper.md#isnull)

---

### isNumber()

> **isNumber**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1042

#### Returns

`boolean`

#### See

_.isNumber

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isNumber`](LoDashImplicitWrapper.md#isnumber)

---

### isObject()

> **isObject**(): `this is LoDashImplicitWrapper<object>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1065

#### Returns

`this is LoDashImplicitWrapper<object>`

#### See

_.isObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObject`](LoDashImplicitWrapper.md#isobject)

---

### isObjectLike()

> **isObjectLike**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1102

#### Returns

`boolean`

#### See

_.isObjectLike

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isObjectLike`](LoDashImplicitWrapper.md#isobjectlike)

---

### isPlainObject()

> **isPlainObject**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1127

#### Returns

`boolean`

#### See

_.isPlainObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isPlainObject`](LoDashImplicitWrapper.md#isplainobject)

---

### isRegExp()

> **isRegExp**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1149

#### Returns

`boolean`

#### See

_.isRegExp

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isRegExp`](LoDashImplicitWrapper.md#isregexp)

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1188

#### Returns

`boolean`

#### See

_.isSafeInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSafeInteger`](LoDashImplicitWrapper.md#issafeinteger)

---

### isSet()

> **isSet**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1210

#### Returns

`boolean`

#### See

_.isSet

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSet`](LoDashImplicitWrapper.md#isset)

---

### isString()

> **isString**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1232

#### Returns

`boolean`

#### See

_.isString

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isString`](LoDashImplicitWrapper.md#isstring)

---

### isSymbol()

> **isSymbol**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1262

#### Returns

`boolean`

#### See

_.isSymbol

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isSymbol`](LoDashImplicitWrapper.md#issymbol)

---

### isTypedArray()

> **isTypedArray**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1284

#### Returns

`boolean`

#### See

_.isTypedArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isTypedArray`](LoDashImplicitWrapper.md#istypedarray)

---

### isUndefined()

> **isUndefined**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1306

#### Returns

`boolean`

#### See

_.isUndefined

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isUndefined`](LoDashImplicitWrapper.md#isundefined)

---

### isWeakMap()

> **isWeakMap**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1328

#### Returns

`boolean`

#### See

_.isWeakMap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakMap`](LoDashImplicitWrapper.md#isweakmap)

---

### isWeakSet()

> **isWeakSet**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1350

#### Returns

`boolean`

#### See

_.isWeakSet

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`isWeakSet`](LoDashImplicitWrapper.md#isweakset)

---

### iteratee()

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:440

#### Returns

[`Function`](Function.md)\<(`o`) => `boolean`\>

#### See

_.iteratee

---

### join()

> **join**(`separator?`): `string`

Defined in: node\_modules/@types/lodash/common/array.d.ts:837

#### Parameters

##### separator?

`string`

#### Returns

`string`

#### See

_.join

---

### kebabCase()

> **kebabCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:163

#### Returns

`string`

#### See

_.kebabCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`kebabCase`](LoDashImplicitWrapper.md#kebabcase)

---

### keyBy()

> **keyBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1107

#### Parameters

##### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

_.keyBy

---

### keys()

> **keys**(): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1558

#### Returns

`Collection`\<`string`\>

#### See

_.keys

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keys`](LoDashImplicitWrapper.md#keys)

---

### keysIn()

> **keysIn**(): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1581

#### Returns

`Collection`\<`string`\>

#### See

_.keysIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keysIn`](LoDashImplicitWrapper.md#keysin)

---

### last()

> **last**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:859

#### Returns

`T` \| `undefined`

#### See

_.last

---

### lastIndexOf()

> **lastIndexOf**(`value`, `fromIndex?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:900

#### Parameters

##### value

`T`

##### fromIndex?

`number` \| `true`

#### Returns

`number`

#### See

_.lastIndexOf

---

### lowerCase()

> **lowerCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:185

#### Returns

`string`

#### See

_.lowerCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerCase`](LoDashImplicitWrapper.md#lowercase)

---

### lowerFirst()

> **lowerFirst**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:207

#### Returns

`string`

#### See

_.lowerFirst

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lowerFirst`](LoDashImplicitWrapper.md#lowerfirst)

---

### lt()

> **lt**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1373

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.lt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lt`](LoDashImplicitWrapper.md#lt)

---

### lte()

> **lte**(`other`): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1396

#### Parameters

##### other

`any`

#### Returns

`boolean`

#### See

_.lte

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`lte`](LoDashImplicitWrapper.md#lte)

---

### map()

#### Call Signature

> **map**\<`K`\>(`key`): `Collection`\<`T`\[`K`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1201

##### Type Parameters

###### K

`K` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### key

`K`

##### Returns

`Collection`\<`T`\[`K`\]\>

##### See

_.map

#### Call Signature

> **map**\<`TResult`\>(`iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1205

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

`Collection`\<`TResult`\>

##### See

_.map

#### Call Signature

> **map**(`iteratee`): `Collection`\<`any`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1209

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

`Collection`\<`any`\>

##### See

_.map

#### Call Signature

> **map**(`iteratee`): `Collection`\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1213

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

`Collection`\<`boolean`\>

##### See

_.map

#### Call Signature

> **map**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1217

##### Returns

`Collection`\<`T`\>

##### See

_.map

---

### mapKeys()

> **mapKeys**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1608

#### Parameters

##### iteratee?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

_.mapKeys

---

### mapValues()

#### Call Signature

> **mapValues**\<`TResult`\>(`callback`): [`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1698

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`ArrayIterator`](../type-aliases/ArrayIterator.md)\<`T`, `TResult`\>

##### Returns

[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`TKey`\>(`iteratee`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1702

##### Type Parameters

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### iteratee

`TKey`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1706

##### Parameters

###### iteratee

`object`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1710

##### Parameters

###### iteratee

`string`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1714

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

_.mapValues

---

### matches()

> **matches**\<`V`\>(): [`Function`](Function.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:507

#### Type Parameters

##### V

`V`

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

_.matches

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matches`](LoDashImplicitWrapper.md#matches)

---

### matchesProperty()

#### Call Signature

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`Function`](Function.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:537

##### Type Parameters

###### SrcValue

`SrcValue`

##### Parameters

###### srcValue

`SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### See

_.matchesProperty

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

#### Call Signature

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`): [`Function`](Function.md)\<(`value`) =>
> `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:541

##### Type Parameters

###### SrcValue

`SrcValue`

###### Value

`Value`

##### Parameters

###### srcValue

`SrcValue`

##### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

##### See

_.matchesProperty

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`matchesProperty`](LoDashImplicitWrapper.md#matchesproperty)

---

### max()

> **max**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:111

#### Returns

`T` \| `undefined`

#### See

_.max

---

### maxBy()

> **maxBy**(`iteratee?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:147

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`T` \| `undefined`

#### See

_.maxBy

---

### mean()

> **mean**(): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:174

#### Returns

`number`

#### See

_.mean

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mean`](LoDashImplicitWrapper.md#mean)

---

### meanBy()

> **meanBy**(`iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:202

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

_.meanBy

---

### method()

> **method**(...`args`): [`Function`](Function.md)\<(`object`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:569

#### Parameters

##### args

...`any`[]

#### Returns

[`Function`](Function.md)\<(`object`) => `any`\>

#### See

_.method

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`method`](LoDashImplicitWrapper.md#method)

---

### methodOf()

> **methodOf**(...`args`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:593

#### Parameters

##### args

...`any`[]

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### See

_.methodOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`methodOf`](LoDashImplicitWrapper.md#methodof)

---

### min()

> **min**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:227

#### Returns

`T` \| `undefined`

#### See

_.min

---

### minBy()

> **minBy**(`iteratee?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/math.d.ts:263

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`T` \| `undefined`

#### See

_.minBy

---

### mixin()

#### Call Signature

> **mixin**(`source`, `options?`): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:632

##### Parameters

###### source

[`Dictionary`](Dictionary.md)\<(...`args`) => `any`\>

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

`this`

##### See

_.mixin

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

#### Call Signature

> **mixin**(`options?`):
> [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:636

##### Parameters

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

_.mixin

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`mixin`](LoDashImplicitWrapper.md#mixin)

---

### multiply()

> **multiply**(`multiplicand`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:285

#### Parameters

##### multiplicand

`number`

#### Returns

`number`

#### See

_.multiply

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`multiply`](LoDashImplicitWrapper.md#multiply)

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:661

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

_.noConflict

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noConflict`](LoDashImplicitWrapper.md#noconflict)

---

### noop()

> **noop**(...`args`): `void`

Defined in: node\_modules/@types/lodash/common/util.d.ts:682

#### Parameters

##### args

...`any`[]

#### Returns

`void`

#### See

_.noop

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`noop`](LoDashImplicitWrapper.md#noop)

---

### now()

> **now**(): `number`

Defined in: node\_modules/@types/lodash/common/date.d.ts:15

#### Returns

`number`

#### See

_.now

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`now`](LoDashImplicitWrapper.md#now)

---

### nth()

> **nth**(`n?`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:922

#### Parameters

##### n?

`number`

#### Returns

`T` \| `undefined`

#### See

_.nth

---

### nthArg()

> **nthArg**(): [`Function`](Function.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:704

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

_.nthArg

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`nthArg`](LoDashImplicitWrapper.md#ntharg)

---

### omit()

> **omit**(...`paths`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2033

#### Parameters

##### paths

...[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

#### Returns

`Collection`\<`T`\>

#### See

_.omit

---

### omitBy()

> **omitBy**(`predicate?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2092

#### Parameters

##### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

_.omitBy

---

### orderBy()

> **orderBy**(`iteratees?`, `orders?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1349

#### Parameters

##### iteratees?

[`Many`](../type-aliases/Many.md)\<PropertyName \| PartialShallow\<T\> \| ListIterator\<T,
unknown\>\>

##### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

#### Returns

`Collection`\<`T`\>

#### See

_.orderBy

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `TResult`[]\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:727

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`[]\>

#### See

_.over

---

### overEvery()

> **overEvery**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:766

#### Type Parameters

##### TArgs

`TArgs`

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

_.overEvery

---

### overSome()

> **overSome**\<`TArgs`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:805

#### Type Parameters

##### TArgs

`TArgs`

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `boolean`\>

#### See

_.overSome

---

### pad()

> **pad**(`length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:232

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`string`

#### See

_.pad

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`pad`](LoDashImplicitWrapper.md#pad)

---

### padEnd()

> **padEnd**(`length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:257

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`string`

#### See

_.padEnd

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padEnd`](LoDashImplicitWrapper.md#padend)

---

### padStart()

> **padStart**(`length?`, `chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:282

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`string`

#### See

_.padStart

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`padStart`](LoDashImplicitWrapper.md#padstart)

---

### parseInt()

> **parseInt**(`radix?`): `number`

Defined in: node\_modules/@types/lodash/common/string.d.ts:308

#### Parameters

##### radix?

`number`

#### Returns

`number`

#### See

_.parseInt

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`parseInt`](LoDashImplicitWrapper.md#parseint)

---

### partition()

#### Call Signature

> **partition**\<`U`\>(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`U`[],
> `Exclude`\<`T`, `U`\>[]\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1399

##### Type Parameters

###### U

`U`

##### Parameters

###### callback

[`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`U`[], `Exclude`\<`T`, `U`\>[]\]\>

##### See

_.partition

#### Call Signature

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`T`[], `T`[]\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1403

##### Parameters

###### callback

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`T`[], `T`[]\]\>

##### See

_.partition

---

### pickBy()

#### Call Signature

> **pickBy**\<`S`\>(`predicate`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2192

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

_.pickBy

#### Call Signature

> **pickBy**(`predicate?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2196

##### Parameters

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

_.pickBy

---

### plant()

> **plant**(`value`): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:95

#### Parameters

##### value

`unknown`

#### Returns

`this`

#### See

_.plant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`plant`](LoDashImplicitWrapper.md#plant)

---

### pop()

> **pop**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/common.d.ts:176

#### Returns

`T` \| `undefined`

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`Function`](Function.md)\<(`obj`) => `TResult`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:839

#### Type Parameters

##### TObj

`TObj`

##### TResult

`TResult`

#### Returns

[`Function`](Function.md)\<(`obj`) => `TResult`\>

#### See

_.property

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`property`](LoDashImplicitWrapper.md#property)

---

### propertyOf()

> **propertyOf**(): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:862

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### See

_.propertyOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`propertyOf`](LoDashImplicitWrapper.md#propertyof)

---

### pull()

> **pull**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:950

#### Parameters

##### values

...`T`[]

#### Returns

`Collection`\<`T`\>

#### See

_.pull

---

### pullAll()

> **pullAll**(`values?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:986

#### Parameters

##### values?

[`List`](../type-aliases/List.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.pullAll

---

### pullAllBy()

> **pullAllBy**\<`T2`\>(`values?`, `iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1033

#### Type Parameters

##### T2

`T2`

#### Parameters

##### values?

[`List`](../type-aliases/List.md)\<`T2`\>

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

#### Returns

`Collection`\<`T`\>

#### See

_.pullAllBy

---

### pullAllWith()

> **pullAllWith**\<`T2`\>(`values?`, `comparator?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1080

#### Type Parameters

##### T2

`T2`

#### Parameters

##### values?

[`List`](../type-aliases/List.md)\<`T2`\>

##### comparator?

[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

#### Returns

`Collection`\<`T`\>

#### See

_.pullAllWith

---

### pullAt()

> **pullAt**(...`indexes`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1109

#### Parameters

##### indexes

...[`Many`](../type-aliases/Many.md)\<`number`\>[]

#### Returns

`Collection`\<`T`\>

#### See

_.pullAt

---

### push()

> **push**(...`items`): `this`

Defined in: node\_modules/@types/lodash/common/common.d.ts:177

#### Parameters

##### items

...`T`[]

#### Returns

`this`

---

### random()

#### Call Signature

> **random**(`floating?`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:115

##### Parameters

###### floating?

`boolean`

##### Returns

`number`

##### See

_.random

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

#### Call Signature

> **random**(`max`, `floating?`): `number`

Defined in: node\_modules/@types/lodash/common/number.d.ts:119

##### Parameters

###### max

`number`

###### floating?

`boolean`

##### Returns

`number`

##### See

_.random

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`random`](LoDashImplicitWrapper.md#random)

---

### range()

> **range**(`end?`, `step?`): `Collection`\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:892

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

`Collection`\<`number`\>

#### See

_.range

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`range`](LoDashImplicitWrapper.md#range)

---

### rangeRight()

> **rangeRight**(`end?`, `step?`): `Collection`\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:944

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

`Collection`\<`number`\>

#### See

_.rangeRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`rangeRight`](LoDashImplicitWrapper.md#rangeright)

---

### reduce()

#### Call Signature

> **reduce**\<`TResult`\>(`callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1477

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduce

#### Call Signature

> **reduce**(`callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1481

##### Parameters

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`T` \| `undefined`

##### See

_.reduce

---

### reduceRight()

#### Call Signature

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1548

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**(`callback`): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1552

##### Parameters

###### callback

[`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`T` \| `undefined`

##### See

_.reduceRight

---

### reject()

> **reject**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1613

#### Parameters

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`Collection`\<`T`\>

#### See

_.reject

---

### remove()

> **remove**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1134

#### Parameters

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.remove

---

### repeat()

> **repeat**(`n?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:331

#### Parameters

##### n?

`number`

#### Returns

`string`

#### See

_.repeat

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`repeat`](LoDashImplicitWrapper.md#repeat)

---

### replace()

#### Call Signature

> **replace**(`pattern`, `replacement`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:359

##### Parameters

###### pattern

`string` \| `RegExp`

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

_.replace

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

#### Call Signature

> **replace**(`replacement`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:363

##### Parameters

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`string`

##### See

_.replace

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`replace`](LoDashImplicitWrapper.md#replace)

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue?`): `TResult`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2244

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### defaultValue?

`TResult` \| ((...`args`) => `TResult`)

#### Returns

`TResult`

#### See

_.result

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`result`](LoDashImplicitWrapper.md#result)

---

### reverse()

> **reverse**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:108

#### Returns

`this`

#### See

_.reverse

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`reverse`](LoDashImplicitWrapper.md#reverse)

---

### round()

> **round**(`precision?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:308

#### Parameters

##### precision?

`number`

#### Returns

`number`

#### See

_.round

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`round`](LoDashImplicitWrapper.md#round)

---

### runInContext()

> **runInContext**(): [`LoDashStatic`](LoDashStatic.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:966

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

_.runInContext

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`runInContext`](LoDashImplicitWrapper.md#runincontext)

---

### sample()

> **sample**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1672

#### Returns

`T` \| `undefined`

#### See

_.sample

---

### sampleSize()

> **sampleSize**(`n?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1728

#### Parameters

##### n?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.sampleSize

---

### set()

#### Call Signature

> **set**(`path`, `value`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2273

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

##### Returns

`this`

##### See

_.set

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

#### Call Signature

> **set**\<`TResult`\>(`path`, `value`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2277

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.set

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`set`](LoDashImplicitWrapper.md#set)

---

### setWith()

#### Call Signature

> **setWith**(`path`, `value`, `customizer?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2312

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

`this`

##### See

_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

#### Call Signature

> **setWith**\<`TResult`\>(`path`, `value`, `customizer?`):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2316

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

---

### shift()

> **shift**(): `T` \| `undefined`

Defined in: node\_modules/@types/lodash/common/common.d.ts:178

#### Returns

`T` \| `undefined`

---

### shuffle()

> **shuffle**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1783

#### Returns

`Collection`\<`T`\>

#### See

_.shuffle

---

### size()

> **size**(): `number`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1829

#### Returns

`number`

#### See

_.size

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`size`](LoDashImplicitWrapper.md#size)

---

### slice()

> **slice**(`start?`, `end?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1179

#### Parameters

##### start?

`number`

##### end?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.slice

---

### snakeCase()

> **snakeCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:389

#### Returns

`string`

#### See

_.snakeCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`snakeCase`](LoDashImplicitWrapper.md#snakecase)

---

### some()

> **some**(`predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1856

#### Parameters

##### predicate?

[`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

_.some

---

### sort()

> **sort**(`compareFn?`): `this`

Defined in: node\_modules/@types/lodash/common/common.d.ts:179

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

#### Returns

`this`

---

### sortBy()

> **sortBy**(...`iteratees`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1918

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>[]

#### Returns

`Collection`\<`T`\>

#### See

_.sortBy

---

### sortedIndex()

#### Call Signature

> **sortedIndex**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1210

##### Parameters

###### value

`T`

##### Returns

`number`

##### See

_.sortedIndex

#### Call Signature

> **sortedIndex**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1241

##### Parameters

###### value

`T`

##### Returns

`number`

##### See

_.sortedIndex

---

### sortedIndexBy()

> **sortedIndexBy**(`value`, `iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1277

#### Parameters

##### value

`T`

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

_.sortedIndexBy

---

### sortedIndexOf()

> **sortedIndexOf**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1305

#### Parameters

##### value

`T`

#### Returns

`number`

#### See

_.sortedIndexOf

---

### sortedLastIndex()

> **sortedLastIndex**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1334

#### Parameters

##### value

`T`

#### Returns

`number`

#### See

_.sortedLastIndex

---

### sortedLastIndexBy()

> **sortedLastIndexBy**(`value`, `iteratee`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1365

#### Parameters

##### value

`T`

##### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

_.sortedLastIndexBy

---

### sortedLastIndexOf()

> **sortedLastIndexOf**(`value`): `number`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1393

#### Parameters

##### value

`T`

#### Returns

`number`

#### See

_.sortedLastIndexOf

---

### sortedUniq()

> **sortedUniq**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1420

#### Returns

`Collection`\<`T`\>

#### See

_.sortedUniq

---

### sortedUniqBy()

> **sortedUniqBy**(`iteratee`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1448

#### Parameters

##### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.sortedUniqBy

---

### splice()

> **splice**(`start`, `deleteCount?`, ...`items`): `this`

Defined in: node\_modules/@types/lodash/common/common.d.ts:180

#### Parameters

##### start

`number`

##### deleteCount?

`number`

##### items

...`T`[]

#### Returns

`this`

---

### split()

> **split**(`separator?`, `limit?`): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:419

#### Parameters

##### separator?

`string` \| `RegExp`

##### limit?

`number`

#### Returns

`Collection`\<`string`\>

#### See

_.split

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`split`](LoDashImplicitWrapper.md#split)

---

### startCase()

> **startCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:441

#### Returns

`string`

#### See

_.startCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startCase`](LoDashImplicitWrapper.md#startcase)

---

### startsWith()

> **startsWith**(`target?`, `position?`): `boolean`

Defined in: node\_modules/@types/lodash/common/string.d.ts:465

#### Parameters

##### target?

`string`

##### position?

`number`

#### Returns

`boolean`

#### See

_.startsWith

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`startsWith`](LoDashImplicitWrapper.md#startswith)

---

### stubArray()

> **stubArray**(): `any`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:981

#### Returns

`any`[]

#### See

_.stubArray

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubArray`](LoDashImplicitWrapper.md#stubarray)

---

### stubFalse()

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1002

##### Returns

`false`

##### See

_.stubFalse

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1211

##### Returns

`false`

##### See

_.stubFalse

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubFalse`](LoDashImplicitWrapper.md#stubfalse)

---

### stubObject()

> **stubObject**(): `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1023

#### Returns

`any`

#### See

_.stubObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubObject`](LoDashImplicitWrapper.md#stubobject)

---

### stubString()

> **stubString**(): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1044

#### Returns

`string`

#### See

_.stubString

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubString`](LoDashImplicitWrapper.md#stubstring)

---

### stubTrue()

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1065

##### Returns

`true`

##### See

_.stubTrue

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1186

##### Returns

`true`

##### See

_.stubTrue

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`stubTrue`](LoDashImplicitWrapper.md#stubtrue)

---

### subtract()

> **subtract**(`subtrahend`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:336

#### Parameters

##### subtrahend

`number`

#### Returns

`number`

#### See

_.subtract

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`subtract`](LoDashImplicitWrapper.md#subtract)

---

### sum()

> **sum**(): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:363

#### Returns

`number`

#### See

_.sum

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`sum`](LoDashImplicitWrapper.md#sum)

---

### sumBy()

> **sumBy**(`iteratee?`): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:399

#### Parameters

##### iteratee?

`string` \| ((`value`) => `number`)

#### Returns

`number`

#### See

_.sumBy

---

### tail()

> **tail**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1470

#### Returns

`Collection`\<`T`\>

#### See

_.tail

---

### take()

> **take**(`n?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1492

#### Parameters

##### n?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.take

---

### takeRight()

> **takeRight**(`n?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1514

#### Parameters

##### n?

`number`

#### Returns

`Collection`\<`T`\>

#### See

_.takeRight

---

### takeRightWhile()

> **takeRightWhile**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1537

#### Parameters

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.takeRightWhile

---

### takeWhile()

> **takeWhile**(`predicate?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1560

#### Parameters

##### predicate?

[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.takeWhile

---

### tap()

> **tap**(`interceptor`): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:179

#### Parameters

##### interceptor

(`value`) => `void`

#### Returns

`this`

#### See

_.tap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`tap`](LoDashImplicitWrapper.md#tap)

---

### template()

> **template**(`options?`): [`TemplateExecutor`](TemplateExecutor.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:520

#### Parameters

##### options?

[`TemplateOptions`](TemplateOptions.md)

#### Returns

[`TemplateExecutor`](TemplateExecutor.md)

#### See

_.template

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`template`](LoDashImplicitWrapper.md#template)

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:202

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### interceptor

(`value`) => `TResult`

#### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

#### See

_.thru

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`thru`](LoDashImplicitWrapper.md#thru)

---

### times()

#### Call Signature

> **times**\<`TResult`\>(`iteratee`): `TResult`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1093

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

(`num`) => `TResult`

##### Returns

`TResult`[]

##### See

_.times

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

#### Call Signature

> **times**(): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1097

##### Returns

`number`[]

##### See

_.times

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`times`](LoDashImplicitWrapper.md#times)

---

### toArray()

> **toArray**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1432

#### Returns

`Collection`\<`T`\>

#### See

_.toArray

---

### toFinite()

> **toFinite**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1493

#### Returns

`number`

#### See

_.toFinite

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toFinite`](LoDashImplicitWrapper.md#tofinite)

---

### toInteger()

> **toInteger**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1531

#### Returns

`number`

#### See

_.toInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toInteger`](LoDashImplicitWrapper.md#tointeger)

---

### toJSON()

> **toJSON**(): `T`[]

Defined in: node\_modules/@types/lodash/common/seq.d.ts:121

#### Returns

`T`[]

#### See

_.toJSON

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toJSON`](LoDashImplicitWrapper.md#tojson)

---

### toLength()

> **toLength**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1570

#### Returns

`number`

#### See

_.toLength

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLength`](LoDashImplicitWrapper.md#tolength)

---

### toLower()

> **toLower**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:542

#### Returns

`string`

#### See

_.toLower

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toLower`](LoDashImplicitWrapper.md#tolower)

---

### toNumber()

> **toNumber**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1606

#### Returns

`number`

#### See

_.toNumber

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toNumber`](LoDashImplicitWrapper.md#tonumber)

---

### toPairs()

> **toPairs**(): `Collection`\<\[`string`, `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2345

#### Returns

`Collection`\<\[`string`, `T`\]\>

#### See

_.toPairs

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

---

### toPairsIn()

> **toPairsIn**(): `Collection`\<\[`string`, `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2370

#### Returns

`Collection`\<\[`string`, `T`\]\>

#### See

_.toPairsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairsIn`](LoDashImplicitWrapper.md#topairsin)

---

### toPath()

> **toPath**(): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1140

#### Returns

`Collection`\<`string`\>

#### See

_.toPath

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPath`](LoDashImplicitWrapper.md#topath)

---

### toPlainObject()

> **toPlainObject**(): [`Object`](Object.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1629

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

_.toPlainObject

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPlainObject`](LoDashImplicitWrapper.md#toplainobject)

---

### toSafeInteger()

> **toSafeInteger**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1666

#### Returns

`number`

#### See

_.toSafeInteger

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toSafeInteger`](LoDashImplicitWrapper.md#tosafeinteger)

---

### toUpper()

> **toUpper**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:564

#### Returns

`string`

#### See

_.toUpper

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toUpper`](LoDashImplicitWrapper.md#toupper)

---

### transform()

#### Call Signature

> **transform**\<`TResult`\>(`iteratee`, `accumulator?`):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2412

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`, `TResult`\>

###### accumulator?

`TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.transform

#### Call Signature

> **transform**(): `Collection`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2416

##### Returns

`Collection`\<`any`\>

##### See

_.transform

---

### trim()

> **trim**(`chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:591

#### Parameters

##### chars?

`string`

#### Returns

`string`

#### See

_.trim

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trim`](LoDashImplicitWrapper.md#trim)

---

### trimEnd()

> **trimEnd**(`chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:618

#### Parameters

##### chars?

`string`

#### Returns

`string`

#### See

_.trimEnd

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimEnd`](LoDashImplicitWrapper.md#trimend)

---

### trimStart()

> **trimStart**(`chars?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:645

#### Parameters

##### chars?

`string`

#### Returns

`string`

#### See

_.trimStart

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`trimStart`](LoDashImplicitWrapper.md#trimstart)

---

### truncate()

> **truncate**(`options?`): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:683

#### Parameters

##### options?

[`TruncateOptions`](TruncateOptions.md)

#### Returns

`string`

#### See

_.truncate

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`truncate`](LoDashImplicitWrapper.md#truncate)

---

### unescape()

> **unescape**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:709

#### Returns

`string`

#### See

_.unescape

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unescape`](LoDashImplicitWrapper.md#unescape)

---

### union()

> **union**(...`arrays`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1582

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

#### Returns

`Collection`\<`T`\>

#### See

_.union

---

### unionBy()

#### Call Signature

> **unionBy**(`arrays2`, `iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1622

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`Collection`\<`T`\>

##### See

_.unionBy

#### Call Signature

> **unionBy**(...`iteratee`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1626

##### Parameters

###### iteratee

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

`Collection`\<`T`\>

##### See

_.unionBy

---

### unionWith()

#### Call Signature

> **unionWith**(`arrays2`, `comparator?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1670

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`Collection`\<`T`\>

##### See

_.unionWith

#### Call Signature

> **unionWith**(...`comparator`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1674

##### Parameters

###### comparator

...([`List`](../type-aliases/List.md)\<`T`\> \| [`Comparator`](../type-aliases/Comparator.md)\<`T`\>
\| `null` \| `undefined`)[]

##### Returns

`Collection`\<`T`\>

##### See

_.unionWith

---

### uniq()

> **uniq**(): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1707

#### Returns

`Collection`\<`T`\>

#### See

_.uniq

---

### uniqBy()

> **uniqBy**(`iteratee`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1740

#### Parameters

##### iteratee

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.uniqBy

---

### uniqueId()

> **uniqueId**(): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1162

#### Returns

`string`

#### See

_.uniqueId

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`uniqueId`](LoDashImplicitWrapper.md#uniqueid)

---

### uniqWith()

> **uniqWith**(`comparator?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1771

#### Parameters

##### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

#### Returns

`Collection`\<`T`\>

#### See

_.uniqWith

---

### unset()

> **unset**(`path`): [`Primitive`](Primitive.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2472

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`Primitive`](Primitive.md)\<`boolean`\>

#### See

_.unset

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`unset`](LoDashImplicitWrapper.md#unset)

---

### unshift()

> **unshift**(...`items`): `this`

Defined in: node\_modules/@types/lodash/common/common.d.ts:181

#### Parameters

##### items

...`T`[]

#### Returns

`this`

---

### unzip()

> **unzip**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? `Collection`\<`U`[]\> :
> `unknown`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1815

#### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? `Collection`\<`U`[]\> : `unknown`

#### See

_.unzip

---

### unzipWith()

#### Call Signature

> **unzipWith**\<`TResult`\>(`iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1842

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

(...`values`) => `TResult`

##### Returns

`Collection`\<`TResult`\>

##### See

_.unzipWith

#### Call Signature

> **unzipWith**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? `Collection`\<`U`[]\> :
> `unknown`

Defined in: node\_modules/@types/lodash/common/array.d.ts:1846

##### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? `Collection`\<`U`[]\> : `unknown`

##### See

_.unzipWith

---

### update()

> **update**(`path`, `updater`): [`Object`](Object.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2496

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### updater

(`value`) => `any`

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

_.update

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`update`](LoDashImplicitWrapper.md#update)

---

### upperCase()

> **upperCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:731

#### Returns

`string`

#### See

_.upperCase

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperCase`](LoDashImplicitWrapper.md#uppercase)

---

### upperFirst()

> **upperFirst**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:753

#### Returns

`string`

#### See

_.upperFirst

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperFirst`](LoDashImplicitWrapper.md#upperfirst)

---

### value()

> **value**(): `T`[]

Defined in: node\_modules/@types/lodash/common/seq.d.ts:141

#### Returns

`T`[]

#### See

_.value

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value-1)

---

### valueOf()

> **valueOf**(): `T`[]

Defined in: node\_modules/@types/lodash/common/seq.d.ts:154

#### Returns

`T`[]

#### See

_.valueOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

---

### without()

> **without**(...`values`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1872

#### Parameters

##### values

...`T`[]

#### Returns

`Collection`\<`T`\>

#### See

_.without

---

### words()

> **words**(`pattern?`): `Collection`\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:780

#### Parameters

##### pattern?

`string` \| `RegExp`

#### Returns

`Collection`\<`string`\>

#### See

_.words

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`words`](LoDashImplicitWrapper.md#words)

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`Function`](Function.md)\<(...`args`) => `TResult`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:1447

#### Type Parameters

##### TArgs

`TArgs`

##### TResult

`TResult`

#### Parameters

##### wrapper

(`value`, ...`args`) => `TResult`

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`\>

#### See

_.wrap

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`wrap`](LoDashImplicitWrapper.md#wrap)

---

### xor()

> **xor**(...`arrays`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1893

#### Parameters

##### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

#### Returns

`Collection`\<`T`\>

#### See

_.xor

---

### xorBy()

#### Call Signature

> **xorBy**(`arrays2`, `iteratee?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1934

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

`Collection`\<`T`\>

##### See

_.xorBy

#### Call Signature

> **xorBy**(...`iteratee`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1938

##### Parameters

###### iteratee

...([`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

`Collection`\<`T`\>

##### See

_.xorBy

---

### xorWith()

#### Call Signature

> **xorWith**(`arrays2`, `comparator?`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1982

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`

###### comparator?

[`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

`Collection`\<`T`\>

##### See

_.xorWith

#### Call Signature

> **xorWith**(...`comparator`): `Collection`\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:1986

##### Parameters

###### comparator

...([`List`](../type-aliases/List.md)\<`T`\> \| [`Comparator`](../type-aliases/Comparator.md)\<`T`\>
\| `null` \| `undefined`)[]

##### Returns

`Collection`\<`T`\>

##### See

_.xorWith

---

### zip()

#### Call Signature

> **zip**\<`T2`\>(`arrays2`): `Collection`\<\[`T` \| `undefined`, `T2` \| `undefined`\]\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2028

##### Type Parameters

###### T2

`T2`

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

`Collection`\<\[`T` \| `undefined`, `T2` \| `undefined`\]\>

##### See

_.zip

#### Call Signature

> **zip**(...`arrays`): `Collection`\<(`T` \| `undefined`)[]\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2032

##### Parameters

###### arrays

...([`List`](../type-aliases/List.md)\<`T`\> \| `null` \| `undefined`)[]

##### Returns

`Collection`\<(`T` \| `undefined`)[]\>

##### See

_.zip

---

### zipObject()

#### Call Signature

> **zipObject**\<`U`\>(`values`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2063

##### Type Parameters

###### U

`U`

##### Parameters

###### values

[`List`](../type-aliases/List.md)\<`U`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### See

_.zipObject

#### Call Signature

> **zipObject**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2067

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### See

_.zipObject

---

### zipObjectDeep()

> **zipObjectDeep**(`values?`): [`Object`](Object.md)\<`object`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2093

#### Parameters

##### values?

[`List`](../type-aliases/List.md)\<`any`\>

#### Returns

[`Object`](Object.md)\<`object`\>

#### See

_.zipObjectDeep

---

### zipWith()

#### Call Signature

> **zipWith**\<`T2`, `TResult`\>(`arrays2`, `iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2136

##### Type Parameters

###### T2

`T2`

###### TResult

`TResult`

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### iteratee

(`value1`, `value2`) => `TResult`

##### Returns

`Collection`\<`TResult`\>

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`T2`, `T3`, `TResult`\>(`arrays2`, `arrays3`, `iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2140

##### Type Parameters

###### T2

`T2`

###### T3

`T3`

###### TResult

`TResult`

##### Parameters

###### arrays2

[`List`](../type-aliases/List.md)\<`T2`\>

###### arrays3

[`List`](../type-aliases/List.md)\<`T3`\>

###### iteratee

(`value1`, `value2`, `value3`) => `TResult`

##### Returns

`Collection`\<`TResult`\>

##### See

_.zipWith

#### Call Signature

> **zipWith**\<`TResult`\>(...`iteratee`): `Collection`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:2144

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

...([`List`](../type-aliases/List.md)\<`T`\> \| ((...`group`) => `TResult`) \| `null` \|
`undefined`)[]

##### Returns

`Collection`\<`TResult`\>

##### See

_.zipWith
