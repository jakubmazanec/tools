[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: LoDashExplicitWrapper\<TValue\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1071

## Extended by

- [`CollectionChain`](CollectionChain.md)
- [`FunctionChain`](FunctionChain.md)
- [`StringChain`](StringChain.md)
- [`StringNullableChain`](StringNullableChain.md)
- [`ObjectChain`](ObjectChain.md)
- [`PrimitiveChain`](PrimitiveChain.md)

## Type Parameters

### TValue

`TValue`

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

---

### camelCase()

> **camelCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:22

#### Returns

[`StringChain`](StringChain.md)

#### See

_.camelCase

---

### capitalize()

> **capitalize**(): [`StringChain`](StringChain.md)\<`string` _extends_ `TValue` ? `TValue` &
> `string` : `Capitalize`\<`Lowercase`\<`TValue` _extends_ `string` ? `TValue` : `never`\>\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:44

#### Returns

[`StringChain`](StringChain.md)\<`string` _extends_ `TValue` ? `TValue` & `string` :
`Capitalize`\<`Lowercase`\<`TValue` _extends_ `string` ? `TValue` : `never`\>\>\>

#### See

_.capitalize

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

---

### chain()

> **chain**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:75

#### Returns

`this`

#### See

_.chain

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

---

### clone()

> **clone**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:131

#### Returns

`this`

#### See

_.clone

---

### cloneDeep()

> **cloneDeep**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:135

#### Returns

`this`

#### See

_.cloneDeep

---

### cloneDeepWith()

#### Call Signature

> **cloneDeepWith**(`customizer`): `LoDashExplicitWrapper`\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:139

##### Parameters

###### customizer

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`TValue`\>

##### Returns

`LoDashExplicitWrapper`\<`any`\>

##### See

_.cloneDeepWith

#### Call Signature

> **cloneDeepWith**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:143

##### Returns

`this`

##### See

_.cloneDeepWith

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

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`, `TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.cloneWith

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:151

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`, `TResult` \|
`undefined`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.cloneWith

#### Call Signature

> **cloneWith**(): `this`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:155

##### Returns

`this`

##### See

_.cloneWith

---

### commit()

> **commit**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:88

#### Returns

`this`

#### See

_.commit

---

### conforms()

> **conforms**(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:106

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

_.conforms

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

---

### constant()

> **constant**(): [`FunctionChain`](FunctionChain.md)\<() => `TValue`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:128

#### Returns

[`FunctionChain`](FunctionChain.md)\<() => `TValue`\>

#### See

_.constant

---

### deburr()

> **deburr**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:67

#### Returns

[`StringChain`](StringChain.md)

#### See

_.deburr

---

### defaultTo()

#### Call Signature

> **defaultTo**(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:161

##### Parameters

###### defaultValue

`TValue`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\>

##### See

_.defaultTo

#### Call Signature

> **defaultTo**\<`TDefault`\>(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`
> _extends_ `null` \| `undefined` ? `TDefault` : `TValue` \| `TDefault`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:165

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### defaultValue

`TDefault`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue` _extends_ `null` \| `undefined` ? `TDefault` :
`TValue` \| `TDefault`\>

##### See

_.defaultTo

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

---

### entries()

> **entries**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:610

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

#### See

_.entries

---

### entriesIn()

> **entriesIn**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:644

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `any`\]\>

#### See

_.entriesIn

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

---

### escape()

> **escape**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:124

#### Returns

[`StringChain`](StringChain.md)

#### See

_.escape

---

### escapeRegExp()

> **escapeRegExp**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:147

#### Returns

[`StringChain`](StringChain.md)

#### See

_.escapeRegExp

---

### findKey()

> **findKey**(`predicate?`): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/object.d.ts:823

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.findKey

---

### findLastKey()

> **findLastKey**(`predicate?`): [`StringNullableChain`](StringNullableChain.md)

Defined in: node\_modules/@types/lodash/common/object.d.ts:845

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

_.findLastKey

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

---

### forIn()

> **forIn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:873

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

_.forIn

---

### forInRight()

> **forInRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:899

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

_.forInRight

---

### forOwn()

> **forOwn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:927

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

_.forOwn

---

### forOwnRight()

> **forOwnRight**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:953

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

_.forOwnRight

---

### functions()

> **functions**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:987

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.functions

---

### functionsIn()

> **functionsIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1021

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.functionsIn

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

---

### identity()

> **identity**(): `this`

Defined in: node\_modules/@types/lodash/common/util.d.ts:393

#### Returns

`this`

#### See

_.identity

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

---

### invert()

> **invert**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1462

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.invert

---

### invoke()

> **invoke**(`path`, ...`args`): `LoDashExplicitWrapper`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1541

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### args

...`any`[]

#### Returns

`LoDashExplicitWrapper`\<`any`\>

#### See

_.invoke

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

---

### isArguments()

> **isArguments**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:334

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArguments

---

### isArray()

> **isArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:356

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArray

---

### isArrayBuffer()

> **isArrayBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:378

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayBuffer

---

### isArrayLike()

> **isArrayLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:424

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayLike

---

### isArrayLikeObject()

> **isArrayLikeObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:469

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isArrayLikeObject

---

### isBoolean()

> **isBoolean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:491

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isBoolean

---

### isBuffer()

> **isBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:513

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isBuffer

---

### isDate()

> **isDate**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:535

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isDate

---

### isElement()

> **isElement**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:557

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isElement

---

### isEmpty()

> **isEmpty**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:587

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isEmpty

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

---

### isError()

> **isError**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:697

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isError

---

### isFinite()

> **isFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:721

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isFinite

---

### isFunction()

> **isFunction**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:743

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isFunction

---

### isInteger()

> **isInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:781

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isInteger

---

### isLength()

> **isLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:819

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isLength

---

### isMap()

> **isMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:841

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isMap

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

---

### isNaN()

> **isNaN**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:947

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNaN

---

### isNative()

> **isNative**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:969

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNative

---

### isNil()

> **isNil**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1002

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNil

---

### isNull()

> **isNull**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1024

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNull

---

### isNumber()

> **isNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1048

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isNumber

---

### isObject()

> **isObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1071

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isObject

---

### isObjectLike()

> **isObjectLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1108

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isObjectLike

---

### isPlainObject()

> **isPlainObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1133

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isPlainObject

---

### isRegExp()

> **isRegExp**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1155

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isRegExp

---

### isSafeInteger()

> **isSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1194

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSafeInteger

---

### isSet()

> **isSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1216

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSet

---

### isString()

> **isString**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1238

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isString

---

### isSymbol()

> **isSymbol**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1268

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isSymbol

---

### isTypedArray()

> **isTypedArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1290

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isTypedArray

---

### isUndefined()

> **isUndefined**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1312

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isUndefined

---

### isWeakMap()

> **isWeakMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1334

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isWeakMap

---

### isWeakSet()

> **isWeakSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1356

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

_.isWeakSet

---

### kebabCase()

> **kebabCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:169

#### Returns

[`StringChain`](StringChain.md)

#### See

_.kebabCase

---

### keys()

> **keys**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1564

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.keys

---

### keysIn()

> **keysIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1587

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.keysIn

---

### lowerCase()

> **lowerCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:191

#### Returns

[`StringChain`](StringChain.md)

#### See

_.lowerCase

---

### lowerFirst()

> **lowerFirst**(): [`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ?
> `Uncapitalize`\<`TValue`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:213

#### Returns

[`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ? `Uncapitalize`\<`TValue`\> :
`string`\>

#### See

_.lowerFirst

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

---

### mean()

> **mean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:180

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.mean

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

---

### methodOf()

> **methodOf**(...`args`): `LoDashExplicitWrapper`\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:599

#### Parameters

##### args

...`any`[]

#### Returns

`LoDashExplicitWrapper`\<(`path`) => `any`\>

#### See

_.methodOf

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

#### Call Signature

> **mixin**(`options?`): `LoDashExplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:646

##### Parameters

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

`LoDashExplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

_.mixin

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

---

### noConflict()

> **noConflict**(): `LoDashExplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:667

#### Returns

`LoDashExplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

#### See

_.noConflict

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

---

### now()

> **now**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/date.d.ts:21

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.now

---

### nthArg()

> **nthArg**(): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:710

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

_.nthArg

---

### pad()

> **pad**(`length?`, `chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:238

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.pad

---

### padEnd()

> **padEnd**(`length?`, `chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:263

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.padEnd

---

### padStart()

> **padStart**(`length?`, `chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:288

#### Parameters

##### length?

`number`

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.padStart

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

---

### propertyOf()

> **propertyOf**(): `LoDashExplicitWrapper`\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:868

#### Returns

`LoDashExplicitWrapper`\<(`path`) => `any`\>

#### See

_.propertyOf

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

---

### repeat()

> **repeat**(`n?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:337

#### Parameters

##### n?

`number`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.repeat

---

### replace()

#### Call Signature

> **replace**(`pattern`, `replacement`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:369

##### Parameters

###### pattern

`string` \| `RegExp`

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

[`StringChain`](StringChain.md)

##### See

_.replace

#### Call Signature

> **replace**(`replacement`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:373

##### Parameters

###### replacement

`string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

[`StringChain`](StringChain.md)

##### See

_.replace

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

---

### reverse()

> **reverse**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:114

#### Returns

`this`

#### See

_.reverse

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

`this`

##### See

_.setWith

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

_.setWith

---

### size()

> **size**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1835

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.size

---

### snakeCase()

> **snakeCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:395

#### Returns

[`StringChain`](StringChain.md)

#### See

_.snakeCase

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

---

### startCase()

> **startCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:447

#### Returns

[`StringChain`](StringChain.md)

#### See

_.startCase

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

---

### stubArray()

> **stubArray**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:987

#### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

#### See

_.stubArray

---

### stubFalse()

#### Call Signature

> **stubFalse**(): [`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1008

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### See

_.stubFalse

#### Call Signature

> **stubFalse**(): `LoDashExplicitWrapper`\<`false`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1218

##### Returns

`LoDashExplicitWrapper`\<`false`\>

##### See

_.stubFalse

---

### stubObject()

> **stubObject**(): `LoDashExplicitWrapper`\<`any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1029

#### Returns

`LoDashExplicitWrapper`\<`any`\>

#### See

_.stubObject

---

### stubString()

> **stubString**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:1050

#### Returns

[`StringChain`](StringChain.md)

#### See

_.stubString

---

### stubTrue()

#### Call Signature

> **stubTrue**(): [`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1071

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### See

_.stubTrue

#### Call Signature

> **stubTrue**(): `LoDashExplicitWrapper`\<`true`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1193

##### Returns

`LoDashExplicitWrapper`\<`true`\>

##### See

_.stubTrue

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

---

### sum()

> **sum**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/math.d.ts:369

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.sum

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

#### Call Signature

> **times**(): [`CollectionChain`](CollectionChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1107

##### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

##### See

_.times

---

### toFinite()

> **toFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1499

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toFinite

---

### toInteger()

> **toInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1537

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toInteger

---

### toJSON()

> **toJSON**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:127

#### Returns

`TValue`

#### See

_.toJSON

---

### toLength()

> **toLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1576

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toLength

---

### toLower()

> **toLower**(): [`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ?
> `Lowercase`\<`TValue`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:548

#### Returns

[`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ? `Lowercase`\<`TValue`\> : `string`\>

#### See

_.toLower

---

### toNumber()

> **toNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1612

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toNumber

---

### toPairs()

> **toPairs**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2351

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `TValue` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairs

---

### toPairsIn()

> **toPairsIn**(): [`CollectionChain`](CollectionChain.md)\<\[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2376

#### Returns

[`CollectionChain`](CollectionChain.md)\<\[`string`, `TValue` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairsIn

---

### toPath()

> **toPath**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1146

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

_.toPath

---

### toPlainObject()

> **toPlainObject**(): [`ObjectChain`](ObjectChain.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1635

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

_.toPlainObject

---

### toSafeInteger()

> **toSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1672

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

_.toSafeInteger

---

### toUpper()

> **toUpper**(): [`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ?
> `Uppercase`\<`TValue`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:570

#### Returns

[`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ? `Uppercase`\<`TValue`\> : `string`\>

#### See

_.toUpper

---

### trim()

> **trim**(`chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:597

#### Parameters

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.trim

---

### trimEnd()

> **trimEnd**(`chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:624

#### Parameters

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.trimEnd

---

### trimStart()

> **trimStart**(`chars?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:651

#### Parameters

##### chars?

`string`

#### Returns

[`StringChain`](StringChain.md)

#### See

_.trimStart

---

### truncate()

> **truncate**(`options?`): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:689

#### Parameters

##### options?

[`TruncateOptions`](TruncateOptions.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

_.truncate

---

### unescape()

> **unescape**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:715

#### Returns

[`StringChain`](StringChain.md)

#### See

_.unescape

---

### uniqueId()

> **uniqueId**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:1168

#### Returns

[`StringChain`](StringChain.md)

#### See

_.uniqueId

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

---

### upperCase()

> **upperCase**(): [`StringChain`](StringChain.md)

Defined in: node\_modules/@types/lodash/common/string.d.ts:737

#### Returns

[`StringChain`](StringChain.md)

#### See

_.upperCase

---

### upperFirst()

> **upperFirst**(): [`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ?
> `Capitalize`\<`TValue`\> : `string`\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:759

#### Returns

[`StringChain`](StringChain.md)\<`TValue` _extends_ `string` ? `Capitalize`\<`TValue`\> : `string`\>

#### See

_.upperFirst

---

### value()

> **value**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:147

#### Returns

`TValue`

#### See

_.value

---

### valueOf()

> **valueOf**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:160

#### Returns

`TValue`

#### See

_.valueOf

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
