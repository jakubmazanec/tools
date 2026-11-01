[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: String\<T\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:193

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type Parameters

### T

`T` _extends_ `string` = `string`

## Properties

### each

> **each**: (`iteratee?`) => `String`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:71

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`String`

#### See

_.forEach

#### See

_.each

---

### eachRight

> **eachRight**: (`iteratee?`) => `String`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:119

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`String`

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

> **capitalize**(): `string` _extends_ `T` ? `T` : `Capitalize`\<`Lowercase`\<`T` _extends_ `string`
> ? `T` : `never`\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:38

#### Returns

`string` _extends_ `T` ? `T` : `Capitalize`\<`Lowercase`\<`T` _extends_ `string` ? `T` : `never`\>\>

#### See

_.capitalize

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`capitalize`](LoDashImplicitWrapper.md#capitalize)

---

### castArray()

> **castArray**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:25

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

> **chain**\<`T`\>(): [`StringChain`](StringChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:51

#### Type Parameters

##### T

`T` _extends_ `string`

#### Returns

[`StringChain`](StringChain.md)\<`T`\>

#### See

_.chain

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

> **clone**(): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:101

#### Returns

`T`

#### See

_.clone

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

---

### cloneDeep()

> **cloneDeep**(): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:105

#### Returns

`T`

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

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

##### Returns

`any`

##### See

_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

#### Call Signature

> **cloneDeepWith**(): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:113

##### Returns

`T`

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

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

##### Returns

`TResult`

##### See

_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): `T` \| `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:121

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult` \| `undefined`\>

##### Returns

`T` \| `TResult`

##### See

_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

#### Call Signature

> **cloneWith**(): `T`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:125

##### Returns

`T`

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

[`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`TValue`\>

#### Returns

`boolean`

#### See

_.conformsTo

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`conformsTo`](LoDashImplicitWrapper.md#conformsto)

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `T`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:122

#### Returns

[`Function`](Function.md)\<() => `T`\>

#### See

_.constant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

---

### countBy()

> **countBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:29

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

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

> **defaultTo**(`defaultValue`): `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:151

##### Parameters

###### defaultValue

`T`

##### Returns

`T`

##### See

_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

#### Call Signature

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T` _extends_ `null` \| `undefined` ? `TDefault` :
> `T` \| `TDefault`

Defined in: node\_modules/@types/lodash/common/util.d.ts:155

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### defaultValue

`TDefault`

##### Returns

`T` _extends_ `null` \| `undefined` ? `TDefault` : `T` \| `TDefault`

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

> **entries**(): [`Collection`](Collection.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:598

#### Returns

[`Collection`](Collection.md)\<\[`string`, `any`\]\>

#### See

_.entries

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:632

#### Returns

[`Collection`](Collection.md)\<\[`string`, `any`\]\>

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

### filter()

> **filter**(`predicate?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:227

#### Parameters

##### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.filter

---

### findKey()

> **findKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:817

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`string` \| `undefined`

#### See

_.findKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

---

### findLastKey()

> **findLastKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:839

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`string` \| `undefined`

#### See

_.findLastKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

---

### first()

> **first**(): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:432

#### Returns

`string` \| `undefined`

#### See

_.first

---

### flatMap()

#### Call Signature

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:444

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:448

##### Returns

[`Collection`](Collection.md)\<`string`\>

##### See

_.flatMap

---

### flatMapDeep()

#### Call Signature

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:567

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:571

##### Returns

[`Collection`](Collection.md)\<`string`\>

##### See

_.flatMapDeep

---

### flatMapDepth()

#### Call Signature

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth?`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:691

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

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`depth?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:695

##### Parameters

###### depth?

`number`

##### Returns

[`Collection`](Collection.md)\<`string`\>

##### See

_.flatMapDepth

---

### flatten()

> **flatten**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:473

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.flatten

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

> **forEach**(`iteratee?`): `String`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:820

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`String`

#### See

_.forEach

---

### forEachRight()

> **forEachRight**(`iteratee?`): `String`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:901

#### Parameters

##### iteratee?

[`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

`String`

#### See

_.forEachRight

---

### forIn()

> **forIn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:867

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

_.forOwnRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

---

### functions()

> **functions**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:981

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.functions

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functions`](LoDashImplicitWrapper.md#functions)

---

### functionsIn()

> **functionsIn**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1015

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.functionsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`functionsIn`](LoDashImplicitWrapper.md#functionsin)

---

### get()

#### Call Signature

> **get**(`path`): `string`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1209

##### Parameters

###### path

`number` \| `number`[]

##### Returns

`string`

##### See

_.get

#### Call Signature

> **get**(`path`, `defaultValue`): `string`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1213

##### Parameters

###### path

`number` \| `number`[]

###### defaultValue

`string`

##### Returns

`string`

##### See

_.get

---

### groupBy()

> **groupBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:959

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

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

> **head**(): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:592

#### Returns

`string` \| `undefined`

#### See

_.head

---

### identity()

> **identity**(): `T`

Defined in: node\_modules/@types/lodash/common/util.d.ts:387

#### Returns

`T`

#### See

_.identity

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`identity`](LoDashImplicitWrapper.md#identity)

---

### includes()

> **includes**(`target`, `fromIndex?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1025

#### Parameters

##### target

`string`

##### fromIndex?

`number`

#### Returns

`boolean`

#### See

_.includes

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

Defined in: node\_modules/@types/lodash/common/object.d.ts:1484

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

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

> **invokeMap**(`methodName`, ...`args`): [`Collection`](Collection.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1065

##### Parameters

###### methodName

`string`

###### args

...`any`[]

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

_.invokeMap

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invokeMap`](LoDashImplicitWrapper.md#invokemap)

#### Call Signature

> **invokeMap**\<`TResult`\>(`method`, ...`args`): [`Collection`](Collection.md)\<`TResult`\>

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

[`Collection`](Collection.md)\<`TResult`\>

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

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:452

#### Returns

[`Function`](Function.md)\<(`o`) => `any`\>

#### See

_.iteratee

---

### join()

> **join**(`separator?`): `string`

Defined in: node\_modules/@types/lodash/common/array.d.ts:819

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

> **keyBy**(`iteratee?`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1101

#### Parameters

##### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`string`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.keyBy

---

### keys()

> **keys**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1558

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.keys

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keys`](LoDashImplicitWrapper.md#keys)

---

### keysIn()

> **keysIn**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1581

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.keysIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`keysIn`](LoDashImplicitWrapper.md#keysin)

---

### last()

> **last**(): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/array.d.ts:871

#### Returns

`string` \| `undefined`

#### See

_.last

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

> **lowerFirst**(): `T` _extends_ `string` ? `Uncapitalize`\<`T`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:207

#### Returns

`T` _extends_ `string` ? `Uncapitalize`\<`T`\> : `string`

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

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1191

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.map

#### Call Signature

> **map**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1195

##### Returns

[`Collection`](Collection.md)\<`string`\>

##### See

_.map

---

### mapValues()

#### Call Signature

> **mapValues**\<`TResult`\>(`callback`):
> [`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1688

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(): [`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1692

##### Returns

[`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

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

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`string`[],
> `string`[]\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1393

#### Parameters

##### callback

[`StringIterator`](../type-aliases/StringIterator.md)\<`unknown`\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`string`[], `string`[]\]\>

#### See

_.partition

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

> **range**(`end?`, `step?`): [`Collection`](Collection.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:892

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### See

_.range

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`range`](LoDashImplicitWrapper.md#range)

---

### rangeRight()

> **rangeRight**(`end?`, `step?`): [`Collection`](Collection.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:944

#### Parameters

##### end?

`number`

##### step?

`number`

#### Returns

[`Collection`](Collection.md)\<`number`\>

#### See

_.rangeRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`rangeRight`](LoDashImplicitWrapper.md#rangeright)

---

### reject()

> **reject**(`predicate?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1607

#### Parameters

##### predicate?

[`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.reject

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

> **sample**(): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1666

#### Returns

`string` \| `undefined`

#### See

_.sample

---

### sampleSize()

> **sampleSize**(`n?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1722

#### Parameters

##### n?

`number`

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

---

### shuffle()

> **shuffle**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1777

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

### split()

> **split**(`separator?`, `limit?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:419

#### Parameters

##### separator?

`string` \| `RegExp`

##### limit?

`number`

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

> **toArray**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1426

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

> **toJSON**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:121

#### Returns

`T`

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

> **toLower**(): `T` _extends_ `string` ? `Lowercase`\<`T`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:542

#### Returns

`T` _extends_ `string` ? `Lowercase`\<`T`\> : `string`

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

> **toPairs**(): [`Collection`](Collection.md)\<\[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2345

#### Returns

[`Collection`](Collection.md)\<\[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U`
: `T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairs

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<\[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2370

#### Returns

[`Collection`](Collection.md)\<\[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U`
: `T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairsIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairsIn`](LoDashImplicitWrapper.md#topairsin)

---

### toPath()

> **toPath**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1140

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

> **toUpper**(): `T` _extends_ `string` ? `Uppercase`\<`T`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:564

#### Returns

`T` _extends_ `string` ? `Uppercase`\<`T`\> : `string`

#### See

_.toUpper

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toUpper`](LoDashImplicitWrapper.md#toupper)

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

> **upperFirst**(): `T` _extends_ `string` ? `Capitalize`\<`T`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:753

#### Returns

`T` _extends_ `string` ? `Capitalize`\<`T`\> : `string`

#### See

_.upperFirst

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`upperFirst`](LoDashImplicitWrapper.md#upperfirst)

---

### value()

> **value**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:141

#### Returns

`T`

#### See

_.value

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value-1)

---

### valueOf()

> **valueOf**(): `T`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:154

#### Returns

`T`

#### See

_.valueOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

---

### values()

> **values**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2574

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.values

---

### valuesIn()

> **valuesIn**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2617

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.valuesIn

---

### words()

> **words**(`pattern?`): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:780

#### Parameters

##### pattern?

`string` \| `RegExp`

#### Returns

[`Collection`](Collection.md)\<`string`\>

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
