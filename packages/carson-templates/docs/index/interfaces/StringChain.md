[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: StringChain\<T\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:203

## Extends

- [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`T`\>

## Type Parameters

### T

`T` _extends_ `string` = `string`

## Properties

### each

> **each**: (`iteratee?`) => `StringChain`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:89

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`StringChain`

#### See

_.forEach

#### See

_.each

---

### eachRight

> **eachRight**: (`iteratee?`) => `StringChain`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:137

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`StringChain`

#### See

_.forEachRight

#### See

_.eachRight

## Methods

### add()

> **add**(`addend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:23

#### Parameters

##### addend

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.add

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`add`](LoDashExplicitWrapper.md#add)

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): [`ObjectChain`](ObjectChain.md)\<`Error`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:23

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### args

...`any`[]

#### Returns

[`ObjectChain`](ObjectChain.md)\<`Error`\> \| [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

_.attempt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`attempt`](LoDashExplicitWrapper.md#attempt)

---

### bind()

> **bind**(`thisArg`, ...`partials`): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:105

#### Parameters

##### thisArg

`any`

##### partials

...`any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

_.bind

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bind`](LoDashExplicitWrapper.md#bind)

---

### bindAll()

> **bindAll**(...`methodNames`): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:51

#### Parameters

##### methodNames

...[`Many`](../type-aliases/Many.md)\<`string`\>[]

#### Returns

`this`

#### See

_.bindAll

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindAll`](LoDashExplicitWrapper.md#bindall)

---

### bindKey()

> **bindKey**(`key`, ...`partials`): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:139

#### Parameters

##### key

`string`

##### partials

...`any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

_.bindKey

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindKey`](LoDashExplicitWrapper.md#bindkey)

---

### camelCase()

> **camelCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:22

#### Returns

`StringChain`

#### See

_.camelCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`camelCase`](LoDashExplicitWrapper.md#camelcase)

---

### capitalize()

> **capitalize**(): `StringChain`\<`string` _extends_ `T` ? `T` : `Capitalize`\<`Lowercase`\<`T`
> _extends_ `string` ? `T` : `never`\>\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:44

#### Returns

`StringChain`\<`string` _extends_ `T` ? `T` : `Capitalize`\<`Lowercase`\<`T` _extends_ `string` ?
`T` : `never`\>\>\>

#### See

_.capitalize

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`capitalize`](LoDashExplicitWrapper.md#capitalize)

---

### castArray()

> **castArray**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:55

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.castArray

---

### ceil()

> **ceil**(`precision?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:46

#### Parameters

##### precision?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.ceil

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`ceil`](LoDashExplicitWrapper.md#ceil)

---

### chain()

> **chain**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:75

#### Returns

`this`

#### See

_.chain

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`chain`](LoDashExplicitWrapper.md#chain)

---

### clamp()

#### Call Signature

> **clamp**(`lower`, `upper`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/number.d.ts:54

##### Parameters

###### lower

`number`

###### upper

`number`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

_.clamp

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

#### Call Signature

> **clamp**(`upper`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/number.d.ts:58

##### Parameters

###### upper

`number`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

_.clamp

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

---

### clone()

> **clone**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:131

#### Returns

`this`

#### See

_.clone

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clone`](LoDashExplicitWrapper.md#clone)

---

### cloneDeep()

> **cloneDeep**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:135

#### Returns

`this`

#### See

_.cloneDeep

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeep`](LoDashExplicitWrapper.md#clonedeep)

---

### cloneDeepWith()

#### Call Signature

> **cloneDeepWith**(`customizer`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:139

##### Parameters

###### customizer

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### See

_.cloneDeepWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

#### Call Signature

> **cloneDeepWith**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:143

##### Returns

`this`

##### See

_.cloneDeepWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

---

### cloneWith()

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:147

##### Type Parameters

###### TResult

`TResult` _extends_ `string` \| `number` \| `boolean` \| `object` \| `null`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:151

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult` \| `undefined`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:155

##### Returns

`this`

##### See

_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

---

### commit()

> **commit**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:88

#### Returns

`this`

#### See

_.commit

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`commit`](LoDashExplicitWrapper.md#commit)

---

### conforms()

> **conforms**(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:106

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

_.conforms

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conforms`](LoDashExplicitWrapper.md#conforms)

---

### conformsTo()

> **conformsTo**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:221

#### Parameters

##### source

[`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`TValue`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.conformsTo

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conformsTo`](LoDashExplicitWrapper.md#conformsto)

---

### constant()

> **constant**(): [`FunctionChain`](FunctionChain.md)\<() => `T`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:128

#### Returns

[`FunctionChain`](FunctionChain.md)\<() => `T`\>

#### See

_.constant

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`constant`](LoDashExplicitWrapper.md#constant)

---

### countBy()

> **countBy**(`iteratee?`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:47

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

_.countBy

---

### deburr()

> **deburr**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:67

#### Returns

`StringChain`

#### See

_.deburr

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`deburr`](LoDashExplicitWrapper.md#deburr)

---

### defaultTo()

#### Call Signature

> **defaultTo**(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:161

##### Parameters

###### defaultValue

`T`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

_.defaultTo

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

#### Call Signature

> **defaultTo**\<`TDefault`\>(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`
> _extends_ `null` \| `undefined` ? `TDefault` : `T` \| `TDefault`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:165

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### defaultValue

`TDefault`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T` _extends_ `null` \| `undefined` ? `TDefault` : `T` \|
`TDefault`\>

##### See

_.defaultTo

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

---

### defer()

> **defer**(...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:475

#### Parameters

##### args

...`any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.defer

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defer`](LoDashExplicitWrapper.md#defer)

---

### delay()

> **delay**(`wait`, ...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:498

#### Parameters

##### wait

`number`

##### args

...`any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.delay

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`delay`](LoDashExplicitWrapper.md#delay)

---

### divide()

> **divide**(`divisor`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:69

#### Parameters

##### divisor

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.divide

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`divide`](LoDashExplicitWrapper.md#divide)

---

### endsWith()

> **endsWith**(`target?`, `position?`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:91

#### Parameters

##### target?

`string`

##### position?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.endsWith

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`endsWith`](LoDashExplicitWrapper.md#endswith)

---

### entries()

> **entries**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:610

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

#### See

_.entries

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entries`](LoDashExplicitWrapper.md#entries)

---

### entriesIn()

> **entriesIn**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:644

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

#### See

_.entriesIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entriesIn`](LoDashExplicitWrapper.md#entriesin)

---

### eq()

> **eq**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:266

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.eq

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`eq`](LoDashExplicitWrapper.md#eq)

---

### escape()

> **escape**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:124

#### Returns

`StringChain`

#### See

_.escape

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escape`](LoDashExplicitWrapper.md#escape)

---

### escapeRegExp()

> **escapeRegExp**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:147

#### Returns

`StringChain`

#### See

_.escapeRegExp

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escapeRegExp`](LoDashExplicitWrapper.md#escaperegexp)

---

### filter()

> **filter**(`predicate?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:253

#### Parameters

##### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.filter

---

### findKey()

> **findKey**(`predicate?`): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/object.d.ts:823

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.findKey

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findKey`](LoDashExplicitWrapper.md#findkey)

---

### findLastKey()

> **findLastKey**(`predicate?`): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/object.d.ts:845

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.findLastKey

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findLastKey`](LoDashExplicitWrapper.md#findlastkey)

---

### first()

> **first**(): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/array.d.ts:438

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.first

---

### flatMap()

#### Call Signature

> **flatMap**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:482

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:486

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

_.flatMap

---

### flatMapDeep()

#### Call Signature

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:605

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:609

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

_.flatMapDeep

---

### flatMapDepth()

#### Call Signature

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth?`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:729

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

###### depth?

`number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`depth?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:733

##### Parameters

###### depth?

`number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

_.flatMapDepth

---

### flatten()

> **flatten**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:479

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.flatten

---

### floor()

> **floor**(`precision?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:92

#### Parameters

##### precision?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.floor

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`floor`](LoDashExplicitWrapper.md#floor)

---

### forEach()

> **forEach**(`iteratee?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:838

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`StringChain`

#### See

_.forEach

---

### forEachRight()

> **forEachRight**(`iteratee?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:919

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`StringChain`

#### See

_.forEachRight

---

### forIn()

> **forIn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:873

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

_.forIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forIn`](LoDashExplicitWrapper.md#forin)

---

### forInRight()

> **forInRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:899

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

_.forInRight

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forInRight`](LoDashExplicitWrapper.md#forinright)

---

### forOwn()

> **forOwn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:927

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

_.forOwn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwn`](LoDashExplicitWrapper.md#forown)

---

### forOwnRight()

> **forOwnRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:953

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

_.forOwnRight

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwnRight`](LoDashExplicitWrapper.md#forownright)

---

### functions()

> **functions**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:987

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.functions

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functions`](LoDashExplicitWrapper.md#functions)

---

### functionsIn()

> **functionsIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1021

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.functionsIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functionsIn`](LoDashExplicitWrapper.md#functionsin)

---

### get()

#### Call Signature

> **get**(`path`): `StringChain`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1275

##### Parameters

###### path

`number` \| `number`[]

##### Returns

`StringChain`

##### See

_.get

#### Call Signature

> **get**(`path`, `defaultValue`): `StringChain`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1279

##### Parameters

###### path

`number` \| `number`[]

###### defaultValue

`string`

##### Returns

`StringChain`

##### See

_.get

---

### groupBy()

> **groupBy**(`iteratee?`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:977

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

_.groupBy

---

### gt()

> **gt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:289

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.gt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gt`](LoDashExplicitWrapper.md#gt)

---

### gte()

> **gte**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:312

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.gte

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gte`](LoDashExplicitWrapper.md#gte)

---

### has()

> **has**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1401

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.has

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`has`](LoDashExplicitWrapper.md#has)

---

### hasIn()

> **hasIn**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1439

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.hasIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`hasIn`](LoDashExplicitWrapper.md#hasin)

---

### head()

> **head**(): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/array.d.ts:598

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.head

---

### identity()

> **identity**(): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:393

#### Returns

`this`

#### See

_.identity

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`identity`](LoDashExplicitWrapper.md#identity)

---

### includes()

> **includes**(`target`, `fromIndex?`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1043

#### Parameters

##### target

`string`

##### fromIndex?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.includes

---

### inRange()

> **inRange**(`start`, `end?`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/number.d.ts:83

#### Parameters

##### start

`number`

##### end?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.inRange

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`inRange`](LoDashExplicitWrapper.md#inrange)

---

### invert()

> **invert**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1462

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.invert

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invert`](LoDashExplicitWrapper.md#invert)

---

### invertBy()

> **invertBy**(`iteratee?`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1502

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

_.invertBy

---

### invoke()

> **invoke**(`path`, ...`args`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1541

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### args

...`any`[]

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### See

_.invoke

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invoke`](LoDashExplicitWrapper.md#invoke)

---

### invokeMap()

#### Call Signature

> **invokeMap**(`methodName`, ...`args`): [`CollectionChain`](CollectionChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1075

##### Parameters

###### methodName

`string`

###### args

...`any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

##### See

_.invokeMap

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

#### Call Signature

> **invokeMap**\<`TResult`\>(`method`, ...`args`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1079

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### method

(...`args`) => `TResult`

###### args

...`any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.invokeMap

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

---

### isArguments()

> **isArguments**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:334

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArguments

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArguments`](LoDashExplicitWrapper.md#isarguments)

---

### isArray()

> **isArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:356

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArray`](LoDashExplicitWrapper.md#isarray)

---

### isArrayBuffer()

> **isArrayBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:378

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayBuffer

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayBuffer`](LoDashExplicitWrapper.md#isarraybuffer)

---

### isArrayLike()

> **isArrayLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:424

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayLike

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLike`](LoDashExplicitWrapper.md#isarraylike)

---

### isArrayLikeObject()

> **isArrayLikeObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:469

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayLikeObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLikeObject`](LoDashExplicitWrapper.md#isarraylikeobject)

---

### isBoolean()

> **isBoolean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:491

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isBoolean

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBoolean`](LoDashExplicitWrapper.md#isboolean)

---

### isBuffer()

> **isBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:513

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isBuffer

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBuffer`](LoDashExplicitWrapper.md#isbuffer)

---

### isDate()

> **isDate**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:535

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isDate

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isDate`](LoDashExplicitWrapper.md#isdate)

---

### isElement()

> **isElement**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:557

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isElement

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isElement`](LoDashExplicitWrapper.md#iselement)

---

### isEmpty()

> **isEmpty**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:587

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isEmpty

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEmpty`](LoDashExplicitWrapper.md#isempty)

---

### isEqual()

> **isEqual**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:628

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isEqual

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqual`](LoDashExplicitWrapper.md#isequal)

---

### isEqualWith()

> **isEqualWith**(`other`, `customizer?`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:674

#### Parameters

##### other

`any`

##### customizer?

[`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isEqualWith

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqualWith`](LoDashExplicitWrapper.md#isequalwith)

---

### isError()

> **isError**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:697

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isError

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isError`](LoDashExplicitWrapper.md#iserror)

---

### isFinite()

> **isFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:721

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isFinite

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFinite`](LoDashExplicitWrapper.md#isfinite)

---

### isFunction()

> **isFunction**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:743

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isFunction

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFunction`](LoDashExplicitWrapper.md#isfunction)

---

### isInteger()

> **isInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:781

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isInteger`](LoDashExplicitWrapper.md#isinteger)

---

### isLength()

> **isLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:819

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isLength

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isLength`](LoDashExplicitWrapper.md#islength)

---

### isMap()

> **isMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:841

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isMap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMap`](LoDashExplicitWrapper.md#ismap)

---

### isMatch()

> **isMatch**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:877

#### Parameters

##### source

`object`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isMatch

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatch`](LoDashExplicitWrapper.md#ismatch)

---

### isMatchWith()

> **isMatchWith**(`source`, `customizer`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:923

#### Parameters

##### source

`object`

##### customizer

[`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isMatchWith

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatchWith`](LoDashExplicitWrapper.md#ismatchwith)

---

### isNaN()

> **isNaN**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:947

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNaN

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNaN`](LoDashExplicitWrapper.md#isnan)

---

### isNative()

> **isNative**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:969

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNative

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNative`](LoDashExplicitWrapper.md#isnative)

---

### isNil()

> **isNil**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1002

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNil

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNil`](LoDashExplicitWrapper.md#isnil)

---

### isNull()

> **isNull**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1024

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNull

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNull`](LoDashExplicitWrapper.md#isnull)

---

### isNumber()

> **isNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1048

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNumber

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNumber`](LoDashExplicitWrapper.md#isnumber)

---

### isObject()

> **isObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1071

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObject`](LoDashExplicitWrapper.md#isobject)

---

### isObjectLike()

> **isObjectLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1108

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isObjectLike

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObjectLike`](LoDashExplicitWrapper.md#isobjectlike)

---

### isPlainObject()

> **isPlainObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1133

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isPlainObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isPlainObject`](LoDashExplicitWrapper.md#isplainobject)

---

### isRegExp()

> **isRegExp**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1155

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isRegExp

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isRegExp`](LoDashExplicitWrapper.md#isregexp)

---

### isSafeInteger()

> **isSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1194

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSafeInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSafeInteger`](LoDashExplicitWrapper.md#issafeinteger)

---

### isSet()

> **isSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1216

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSet

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSet`](LoDashExplicitWrapper.md#isset)

---

### isString()

> **isString**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1238

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isString

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isString`](LoDashExplicitWrapper.md#isstring)

---

### isSymbol()

> **isSymbol**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1268

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSymbol

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSymbol`](LoDashExplicitWrapper.md#issymbol)

---

### isTypedArray()

> **isTypedArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1290

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isTypedArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isTypedArray`](LoDashExplicitWrapper.md#istypedarray)

---

### isUndefined()

> **isUndefined**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1312

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isUndefined

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isUndefined`](LoDashExplicitWrapper.md#isundefined)

---

### isWeakMap()

> **isWeakMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1334

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isWeakMap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakMap`](LoDashExplicitWrapper.md#isweakmap)

---

### isWeakSet()

> **isWeakSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1356

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isWeakSet

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakSet`](LoDashExplicitWrapper.md#isweakset)

---

### iteratee()

> **iteratee**(): [`FunctionChain`](FunctionChain.md)\<(`o`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:476

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`o`) => `any`\>

#### See

_.iteratee

---

### join()

> **join**(`separator?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/array.d.ts:825

#### Parameters

##### separator?

`string`

#### Returns

`StringChain`

#### See

_.join

---

### kebabCase()

> **kebabCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:169

#### Returns

`StringChain`

#### See

_.kebabCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`kebabCase`](LoDashExplicitWrapper.md#kebabcase)

---

### keyBy()

> **keyBy**(`iteratee?`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1119

#### Parameters

##### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`string`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.keyBy

---

### keys()

> **keys**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1564

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.keys

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keys`](LoDashExplicitWrapper.md#keys)

---

### keysIn()

> **keysIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1587

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.keysIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keysIn`](LoDashExplicitWrapper.md#keysin)

---

### last()

> **last**(): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/array.d.ts:877

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.last

---

### lowerCase()

> **lowerCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:191

#### Returns

`StringChain`

#### See

_.lowerCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerCase`](LoDashExplicitWrapper.md#lowercase)

---

### lowerFirst()

> **lowerFirst**(): `StringChain`\<`T` _extends_ `string` ? `Uncapitalize`\<`T`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:213

#### Returns

`StringChain`\<`T` _extends_ `string` ? `Uncapitalize`\<`T`\> : `string`\>

#### See

_.lowerFirst

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerFirst`](LoDashExplicitWrapper.md#lowerfirst)

---

### lt()

> **lt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1379

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.lt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lt`](LoDashExplicitWrapper.md#lt)

---

### lte()

> **lte**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1402

#### Parameters

##### other

`any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.lte

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lte`](LoDashExplicitWrapper.md#lte)

---

### map()

#### Call Signature

> **map**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1245

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.map

#### Call Signature

> **map**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1249

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

_.map

---

### mapValues()

#### Call Signature

> **mapValues**\<`TResult`\>(`callback`):
> [`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1746

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**():
> [`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1750

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

##### See

_.mapValues

---

### matches()

> **matches**\<`V`\>(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:513

#### Type Parameters

##### V

`V`

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

_.matches

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matches`](LoDashExplicitWrapper.md#matches)

---

### matchesProperty()

#### Call Signature

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`FunctionChain`](FunctionChain.md)\<(`value`) =>
> `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:547

##### Type Parameters

###### SrcValue

`SrcValue`

##### Parameters

###### srcValue

`SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

_.matchesProperty

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

#### Call Signature

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`):
> [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:551

##### Type Parameters

###### SrcValue

`SrcValue`

###### Value

`Value`

##### Parameters

###### srcValue

`SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

_.matchesProperty

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

---

### mean()

> **mean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:180

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.mean

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mean`](LoDashExplicitWrapper.md#mean)

---

### method()

> **method**(...`args`): [`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:575

#### Parameters

##### args

...`any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

#### See

_.method

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`method`](LoDashExplicitWrapper.md#method)

---

### methodOf()

> **methodOf**(...`args`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:599

#### Parameters

##### args

...`any`[]

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### See

_.methodOf

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`methodOf`](LoDashExplicitWrapper.md#methodof)

---

### mixin()

#### Call Signature

> **mixin**(`source`, `options?`): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:642

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

#### Call Signature

> **mixin**(`options?`):
> [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:646

##### Parameters

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

_.mixin

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

---

### multiply()

> **multiply**(`multiplicand`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:291

#### Parameters

##### multiplicand

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.multiply

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`multiply`](LoDashExplicitWrapper.md#multiply)

---

### noConflict()

> **noConflict**():
> [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:667

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

#### See

_.noConflict

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noConflict`](LoDashExplicitWrapper.md#noconflict)

---

### noop()

> **noop**(...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`undefined`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:688

#### Parameters

##### args

...`any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`undefined`\>

#### See

_.noop

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noop`](LoDashExplicitWrapper.md#noop)

---

### now()

> **now**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/date.d.ts:21

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.now

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`now`](LoDashExplicitWrapper.md#now)

---

### nthArg()

> **nthArg**(): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:710

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

_.nthArg

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`nthArg`](LoDashExplicitWrapper.md#ntharg)

---

### pad()

> **pad**(`length?`, `chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:238

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.pad

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`pad`](LoDashExplicitWrapper.md#pad)

---

### padEnd()

> **padEnd**(`length?`, `chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:263

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.padEnd

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padEnd`](LoDashExplicitWrapper.md#padend)

---

### padStart()

> **padStart**(`length?`, `chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:288

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.padStart

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padStart`](LoDashExplicitWrapper.md#padstart)

---

### parseInt()

> **parseInt**(`radix?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:314

#### Parameters

##### radix?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.parseInt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`parseInt`](LoDashExplicitWrapper.md#parseint)

---

### partition()

> **partition**(`callback`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<\[`string`[],
> `string`[]\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1415

#### Parameters

##### callback

[`StringIterator`](../type-aliases/StringIterator.md)\<`unknown`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<\[`string`[], `string`[]\]\>

#### See

_.partition

---

### plant()

> **plant**(`value`): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:101

#### Parameters

##### value

`unknown`

#### Returns

`this`

#### See

_.plant

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`plant`](LoDashExplicitWrapper.md#plant)

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:845

#### Type Parameters

##### TObj

`TObj`

##### TResult

`TResult`

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

#### See

_.property

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`property`](LoDashExplicitWrapper.md#property)

---

### propertyOf()

> **propertyOf**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:868

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### See

_.propertyOf

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`propertyOf`](LoDashExplicitWrapper.md#propertyof)

---

### random()

#### Call Signature

> **random**(`floating?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/number.d.ts:125

##### Parameters

###### floating?

`boolean`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

_.random

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

#### Call Signature

> **random**(`max`, `floating?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/number.d.ts:129

##### Parameters

###### max

`number`

###### floating?

`boolean`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

_.random

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

---

### range()

> **range**(`end?`, `step?`): [`CollectionChain`](CollectionChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:898

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

#### See

_.range

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`range`](LoDashExplicitWrapper.md#range)

---

### rangeRight()

> **rangeRight**(`end?`, `step?`): [`CollectionChain`](CollectionChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:950

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

#### See

_.rangeRight

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`rangeRight`](LoDashExplicitWrapper.md#rangeright)

---

### reject()

> **reject**(`predicate?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1625

#### Parameters

##### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.reject

---

### repeat()

> **repeat**(`n?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:337

#### Parameters

##### n?

`number`

#### Returns

`StringChain`

#### See

_.repeat

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`repeat`](LoDashExplicitWrapper.md#repeat)

---

### replace()

#### Call Signature

> **replace**(`pattern`, `replacement`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:369

##### Parameters

###### pattern

`string` \| `RegExp`

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`StringChain`

##### See

_.replace

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

#### Call Signature

> **replace**(`replacement`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:373

##### Parameters

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

`StringChain`

##### See

_.replace

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue?`):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2250

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### defaultValue?

`TResult` \| ((...`args`) => `TResult`)

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

_.result

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`result`](LoDashExplicitWrapper.md#result)

---

### reverse()

> **reverse**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:114

#### Returns

`this`

#### See

_.reverse

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`reverse`](LoDashExplicitWrapper.md#reverse)

---

### round()

> **round**(`precision?`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:314

#### Parameters

##### precision?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.round

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`round`](LoDashExplicitWrapper.md#round)

---

### sample()

> **sample**(): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1684

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.sample

---

### sampleSize()

> **sampleSize**(`n?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1740

#### Parameters

##### n?

`number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.sampleSize

---

### set()

#### Call Signature

> **set**(`path`, `value`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2283

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

#### Call Signature

> **set**\<`TResult`\>(`path`, `value`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2287

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.set

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

---

### setWith()

#### Call Signature

> **setWith**(`path`, `value`, `customizer?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2322

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`this`

##### See

_.setWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

#### Call Signature

> **setWith**\<`TResult`\>(`path`, `value`, `customizer?`):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2326

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### value

`any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.setWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

---

### shuffle()

> **shuffle**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1795

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.shuffle

---

### size()

> **size**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1835

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.size

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`size`](LoDashExplicitWrapper.md#size)

---

### snakeCase()

> **snakeCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:395

#### Returns

`StringChain`

#### See

_.snakeCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`snakeCase`](LoDashExplicitWrapper.md#snakecase)

---

### split()

> **split**(`separator?`, `limit?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:425

#### Parameters

##### separator?

`string` \| `RegExp`

##### limit?

`number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.split

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`split`](LoDashExplicitWrapper.md#split)

---

### startCase()

> **startCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:447

#### Returns

`StringChain`

#### See

_.startCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startCase`](LoDashExplicitWrapper.md#startcase)

---

### startsWith()

> **startsWith**(`target?`, `position?`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:471

#### Parameters

##### target?

`string`

##### position?

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.startsWith

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startsWith`](LoDashExplicitWrapper.md#startswith)

---

### stubArray()

> **stubArray**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:987

#### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

#### See

_.stubArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubArray`](LoDashExplicitWrapper.md#stubarray)

---

### stubFalse()

#### Call Signature

> **stubFalse**(): [`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1008

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### See

_.stubFalse

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

#### Call Signature

> **stubFalse**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1218

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### See

_.stubFalse

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

---

### stubObject()

> **stubObject**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1029

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### See

_.stubObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubObject`](LoDashExplicitWrapper.md#stubobject)

---

### stubString()

> **stubString**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1050

#### Returns

`StringChain`

#### See

_.stubString

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubString`](LoDashExplicitWrapper.md#stubstring)

---

### stubTrue()

#### Call Signature

> **stubTrue**(): [`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1071

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### See

_.stubTrue

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

#### Call Signature

> **stubTrue**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1193

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### See

_.stubTrue

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

---

### subtract()

> **subtract**(`subtrahend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:342

#### Parameters

##### subtrahend

`number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.subtract

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`subtract`](LoDashExplicitWrapper.md#subtract)

---

### sum()

> **sum**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:369

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.sum

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`sum`](LoDashExplicitWrapper.md#sum)

---

### tap()

> **tap**(`interceptor`): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:185

#### Parameters

##### interceptor

(`value`) => `void`

#### Returns

`this`

#### See

_.tap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`tap`](LoDashExplicitWrapper.md#tap)

---

### template()

> **template**(`options?`):
> [`FunctionChain`](FunctionChain.md)\<[`TemplateExecutor`](TemplateExecutor.md)\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:526

#### Parameters

##### options?

[`TemplateOptions`](TemplateOptions.md)

#### Returns

[`FunctionChain`](FunctionChain.md)\<[`TemplateExecutor`](TemplateExecutor.md)\>

#### See

_.template

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`template`](LoDashExplicitWrapper.md#template)

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:208

#### Type Parameters

##### TResult

`TResult`

#### Parameters

##### interceptor

(`value`) => `TResult`

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

_.thru

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`thru`](LoDashExplicitWrapper.md#thru)

---

### times()

#### Call Signature

> **times**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1103

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

(`num`) => `TResult`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

_.times

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

#### Call Signature

> **times**(): [`CollectionChain`](CollectionChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1107

##### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

##### See

_.times

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

---

### toArray()

> **toArray**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1444

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.toArray

---

### toFinite()

> **toFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1499

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toFinite

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toFinite`](LoDashExplicitWrapper.md#tofinite)

---

### toInteger()

> **toInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1537

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toInteger`](LoDashExplicitWrapper.md#tointeger)

---

### toJSON()

> **toJSON**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:127

#### Returns

`T`

#### See

_.toJSON

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toJSON`](LoDashExplicitWrapper.md#tojson)

---

### toLength()

> **toLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1576

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toLength

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLength`](LoDashExplicitWrapper.md#tolength)

---

### toLower()

> **toLower**(): `StringChain`\<`T` _extends_ `string` ? `Lowercase`\<`T`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:548

#### Returns

`StringChain`\<`T` _extends_ `string` ? `Lowercase`\<`T`\> : `string`\>

#### See

_.toLower

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLower`](LoDashExplicitWrapper.md#tolower)

---

### toNumber()

> **toNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1612

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toNumber

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toNumber`](LoDashExplicitWrapper.md#tonumber)

---

### toPairs()

> **toPairs**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2351

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `T` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairs

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairs`](LoDashExplicitWrapper.md#topairs)

---

### toPairsIn()

> **toPairsIn**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2376

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `T` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairsIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairsIn`](LoDashExplicitWrapper.md#topairsin)

---

### toPath()

> **toPath**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1146

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.toPath

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPath`](LoDashExplicitWrapper.md#topath)

---

### toPlainObject()

> **toPlainObject**(): [`ObjectChain`](ObjectChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1635

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

_.toPlainObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPlainObject`](LoDashExplicitWrapper.md#toplainobject)

---

### toSafeInteger()

> **toSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1672

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toSafeInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toSafeInteger`](LoDashExplicitWrapper.md#tosafeinteger)

---

### toUpper()

> **toUpper**(): `StringChain`\<`T` _extends_ `string` ? `Uppercase`\<`T`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:570

#### Returns

`StringChain`\<`T` _extends_ `string` ? `Uppercase`\<`T`\> : `string`\>

#### See

_.toUpper

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toUpper`](LoDashExplicitWrapper.md#toupper)

---

### trim()

> **trim**(`chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:597

#### Parameters

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.trim

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trim`](LoDashExplicitWrapper.md#trim)

---

### trimEnd()

> **trimEnd**(`chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:624

#### Parameters

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.trimEnd

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimEnd`](LoDashExplicitWrapper.md#trimend)

---

### trimStart()

> **trimStart**(`chars?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:651

#### Parameters

##### chars?

`string`

#### Returns

`StringChain`

#### See

_.trimStart

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimStart`](LoDashExplicitWrapper.md#trimstart)

---

### truncate()

> **truncate**(`options?`): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:689

#### Parameters

##### options?

[`TruncateOptions`](TruncateOptions.md)

#### Returns

`StringChain`

#### See

_.truncate

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`truncate`](LoDashExplicitWrapper.md#truncate)

---

### unescape()

> **unescape**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:715

#### Returns

`StringChain`

#### See

_.unescape

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unescape`](LoDashExplicitWrapper.md#unescape)

---

### uniqueId()

> **uniqueId**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1168

#### Returns

`StringChain`

#### See

_.uniqueId

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`uniqueId`](LoDashExplicitWrapper.md#uniqueid)

---

### unset()

> **unset**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2478

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.unset

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unset`](LoDashExplicitWrapper.md#unset)

---

### update()

> **update**(`path`, `updater`): [`ObjectChain`](ObjectChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2502

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### updater

(`value`) => `any`

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

_.update

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`update`](LoDashExplicitWrapper.md#update)

---

### upperCase()

> **upperCase**(): `StringChain`

Defined in: node\_modules/@types/lodash/common/string.d.ts:737

#### Returns

`StringChain`

#### See

_.upperCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperCase`](LoDashExplicitWrapper.md#uppercase)

---

### upperFirst()

> **upperFirst**(): `StringChain`\<`T` _extends_ `string` ? `Capitalize`\<`T`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:759

#### Returns

`StringChain`\<`T` _extends_ `string` ? `Capitalize`\<`T`\> : `string`\>

#### See

_.upperFirst

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperFirst`](LoDashExplicitWrapper.md#upperfirst)

---

### value()

> **value**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:147

#### Returns

`T`

#### See

_.value

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`value`](LoDashExplicitWrapper.md#value-1)

---

### valueOf()

> **valueOf**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:160

#### Returns

`T`

#### See

_.valueOf

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`valueOf`](LoDashExplicitWrapper.md#valueof)

---

### values()

> **values**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2592

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.values

---

### valuesIn()

> **valuesIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2629

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.valuesIn

---

### words()

> **words**(`pattern?`): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:786

#### Parameters

##### pattern?

`string` \| `RegExp`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.words

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`words`](LoDashExplicitWrapper.md#words)

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `TResult`\>

Defined in: node\_modules/@types/lodash/common/function.d.ts:1453

#### Type Parameters

##### TArgs

`TArgs`

##### TResult

`TResult`

#### Parameters

##### wrapper

(`value`, ...`args`) => `TResult`

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `TResult`\>

#### See

_.wrap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`wrap`](LoDashExplicitWrapper.md#wrap)
