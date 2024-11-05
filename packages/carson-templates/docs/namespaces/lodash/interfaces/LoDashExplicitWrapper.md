[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: LoDashExplicitWrapper\<TValue\>

## Extended by

- [`CollectionChain`](CollectionChain.md)
- [`FunctionChain`](FunctionChain.md)
- [`StringChain`](StringChain.md)
- [`StringNullableChain`](StringNullableChain.md)
- [`ObjectChain`](ObjectChain.md)
- [`PrimitiveChain`](PrimitiveChain.md)

## Type parameters

• **TValue**

## Methods

### add()

> **add**(`addend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **addend**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.add

#### Source

node_modules/@types/lodash/common/math.d.ts:23

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): [`ObjectChain`](ObjectChain.md)\<`Error`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type parameters

• **TResult**

#### Parameters

• ...**args**: `any`[]

#### Returns

[`ObjectChain`](ObjectChain.md)\<`Error`\> \| [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.attempt

#### Source

node_modules/@types/lodash/common/util.d.ts:23

---

### bind()

> **bind**(`thisArg`, ...`partials`): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Parameters

• **thisArg**: `any`

• ...**partials**: `any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

\_.bind

#### Source

node_modules/@types/lodash/common/function.d.ts:105

---

### bindAll()

> **bindAll**(...`methodNames`): `this`

#### Parameters

• ...**methodNames**: [`Many`](../type-aliases/Many.md)\<`string`\>[]

#### Returns

`this`

#### See

\_.bindAll

#### Source

node_modules/@types/lodash/common/util.d.ts:51

---

### bindKey()

> **bindKey**(`key`, ...`partials`): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Parameters

• **key**: `string`

• ...**partials**: `any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

\_.bindKey

#### Source

node_modules/@types/lodash/common/function.d.ts:139

---

### camelCase()

> **camelCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.camelCase

#### Source

node_modules/@types/lodash/common/string.d.ts:22

---

### capitalize()

> **capitalize**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.capitalize

#### Source

node_modules/@types/lodash/common/string.d.ts:44

---

### ceil()

> **ceil**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.ceil

#### Source

node_modules/@types/lodash/common/math.d.ts:46

---

### chain()

> **chain**(): `this`

#### Returns

`this`

#### See

\_.chain

#### Source

node_modules/@types/lodash/common/seq.d.ts:75

---

### clamp()

#### clamp(lower, upper)

> **clamp**(`lower`, `upper`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **lower**: `number`

• **upper**: `number`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:54

#### clamp(upper)

> **clamp**(`upper`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **upper**: `number`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:58

---

### clone()

> **clone**(): `this`

#### Returns

`this`

#### See

\_.clone

#### Source

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep()

> **cloneDeep**(): `this`

#### Returns

`this`

#### See

\_.cloneDeep

#### Source

node_modules/@types/lodash/common/lang.d.ts:135

---

### cloneDeepWith()

#### cloneDeepWith(customizer)

> **cloneDeepWith**(`customizer`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### Parameters

• **customizer**:
[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`TValue`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:139

#### cloneDeepWith()

> **cloneDeepWith**(): `this`

##### Returns

`this`

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:143

---

### cloneWith()

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult** _extends_ `null` \| `string` \| `number` \| `boolean` \| `object`

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`,
`TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:147

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`,
`undefined` \| `TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:151

#### cloneWith()

> **cloneWith**(): `this`

##### Returns

`this`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### See

\_.commit

#### Source

node_modules/@types/lodash/common/seq.d.ts:88

---

### conforms()

> **conforms**(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

\_.conforms

#### Source

node_modules/@types/lodash/common/util.d.ts:106

---

### conformsTo()

> **conformsTo**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`TValue`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.conformsTo

#### Source

node_modules/@types/lodash/common/lang.d.ts:221

---

### constant()

> **constant**(): [`FunctionChain`](FunctionChain.md)\<() => `TValue`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<() => `TValue`\>

#### See

\_.constant

#### Source

node_modules/@types/lodash/common/util.d.ts:128

---

### deburr()

> **deburr**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.deburr

#### Source

node_modules/@types/lodash/common/string.d.ts:67

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\>

##### Parameters

• **defaultValue**: `TValue`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`\>

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:161

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TValue`
> _extends_ `undefined` \| `null` ? `TDefault` : `TValue` \| `TDefault`\>

##### Type parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TValue` _extends_ `undefined` \| `null` ? `TDefault` :
`TValue` \| `TDefault`\>

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:165

---

### defer()

> **defer**(...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.defer

#### Source

node_modules/@types/lodash/common/function.d.ts:475

---

### delay()

> **delay**(`wait`, ...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **wait**: `number`

• ...**args**: `any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.delay

#### Source

node_modules/@types/lodash/common/function.d.ts:498

---

### divide()

> **divide**(`divisor`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **divisor**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.divide

#### Source

node_modules/@types/lodash/common/math.d.ts:69

---

### endsWith()

> **endsWith**(`target`?, `position`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.endsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:91

---

### entries()

> **entries**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### See

\_.entries

#### Source

node_modules/@types/lodash/common/object.d.ts:610

---

### entriesIn()

> **entriesIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### See

\_.entriesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:644

---

### eq()

> **eq**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.eq

#### Source

node_modules/@types/lodash/common/lang.d.ts:266

---

### escape()

> **escape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.escape

#### Source

node_modules/@types/lodash/common/string.d.ts:124

---

### escapeRegExp()

> **escapeRegExp**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.escapeRegExp

#### Source

node_modules/@types/lodash/common/string.d.ts:147

---

### findKey()

> **findKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.findKey

#### Source

node_modules/@types/lodash/common/object.d.ts:823

---

### findLastKey()

> **findLastKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.findLastKey

#### Source

node_modules/@types/lodash/common/object.d.ts:845

---

### floor()

> **floor**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.floor

#### Source

node_modules/@types/lodash/common/math.d.ts:92

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

\_.forIn

#### Source

node_modules/@types/lodash/common/object.d.ts:873

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

\_.forInRight

#### Source

node_modules/@types/lodash/common/object.d.ts:899

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

\_.forOwn

#### Source

node_modules/@types/lodash/common/object.d.ts:927

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

\_.forOwnRight

#### Source

node_modules/@types/lodash/common/object.d.ts:953

---

### functions()

> **functions**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.functions

#### Source

node_modules/@types/lodash/common/object.d.ts:987

---

### functionsIn()

> **functionsIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.functionsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1021

---

### gt()

> **gt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.gt

#### Source

node_modules/@types/lodash/common/lang.d.ts:289

---

### gte()

> **gte**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.gte

#### Source

node_modules/@types/lodash/common/lang.d.ts:312

---

### has()

> **has**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.has

#### Source

node_modules/@types/lodash/common/object.d.ts:1344

---

### hasIn()

> **hasIn**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.hasIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1382

---

### identity()

> **identity**(): `this`

#### Returns

`this`

#### See

\_.identity

#### Source

node_modules/@types/lodash/common/util.d.ts:393

---

### inRange()

> **inRange**(`start`, `end`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **start**: `number`

• **end?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.inRange

#### Source

node_modules/@types/lodash/common/number.d.ts:83

---

### invert()

> **invert**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

\_.invert

#### Source

node_modules/@types/lodash/common/object.d.ts:1405

---

### invoke()

> **invoke**(`path`, ...`args`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• ...**args**: `any`[]

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### See

\_.invoke

#### Source

node_modules/@types/lodash/common/object.d.ts:1484

---

### invokeMap()

#### invokeMap(methodName, args)

> **invokeMap**(`methodName`, ...`args`): [`CollectionChain`](CollectionChain.md)\<`any`\>

##### Parameters

• **methodName**: `string`

• ...**args**: `any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1075

#### invokeMap(method, args)

> **invokeMap**\<`TResult`\>(`method`, ...`args`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **method**

• ...**args**: `any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1079

---

### isArguments()

> **isArguments**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArguments

#### Source

node_modules/@types/lodash/common/lang.d.ts:334

---

### isArray()

> **isArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:360

---

### isArrayBuffer()

> **isArrayBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:382

---

### isArrayLike()

> **isArrayLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:428

---

### isArrayLikeObject()

> **isArrayLikeObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayLikeObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:473

---

### isBoolean()

> **isBoolean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isBoolean

#### Source

node_modules/@types/lodash/common/lang.d.ts:495

---

### isBuffer()

> **isBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:517

---

### isDate()

> **isDate**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isDate

#### Source

node_modules/@types/lodash/common/lang.d.ts:539

---

### isElement()

> **isElement**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isElement

#### Source

node_modules/@types/lodash/common/lang.d.ts:561

---

### isEmpty()

> **isEmpty**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isEmpty

#### Source

node_modules/@types/lodash/common/lang.d.ts:591

---

### isEqual()

> **isEqual**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isEqual

#### Source

node_modules/@types/lodash/common/lang.d.ts:632

---

### isEqualWith()

> **isEqualWith**(`other`, `customizer`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

• **customizer?**: [`IsEqualCustomizer`](../type-aliases/IsEqualCustomizer.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isEqualWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:678

---

### isError()

> **isError**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isError

#### Source

node_modules/@types/lodash/common/lang.d.ts:701

---

### isFinite()

> **isFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:725

---

### isFunction()

> **isFunction**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isFunction

#### Source

node_modules/@types/lodash/common/lang.d.ts:747

---

### isInteger()

> **isInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:785

---

### isLength()

> **isLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:823

---

### isMap()

> **isMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:845

---

### isMatch()

> **isMatch**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **source**: `object`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isMatch

#### Source

node_modules/@types/lodash/common/lang.d.ts:881

---

### isMatchWith()

> **isMatchWith**(`source`, `customizer`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **source**: `object`

• **customizer**: [`isMatchWithCustomizer`](../type-aliases/isMatchWithCustomizer.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isMatchWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:927

---

### isNaN()

> **isNaN**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNaN

#### Source

node_modules/@types/lodash/common/lang.d.ts:951

---

### isNative()

> **isNative**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNative

#### Source

node_modules/@types/lodash/common/lang.d.ts:973

---

### isNil()

> **isNil**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNil

#### Source

node_modules/@types/lodash/common/lang.d.ts:1006

---

### isNull()

> **isNull**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNull

#### Source

node_modules/@types/lodash/common/lang.d.ts:1028

---

### isNumber()

> **isNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1052

---

### isObject()

> **isObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1075

---

### isObjectLike()

> **isObjectLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isObjectLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:1112

---

### isPlainObject()

> **isPlainObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1137

---

### isRegExp()

> **isRegExp**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isRegExp

#### Source

node_modules/@types/lodash/common/lang.d.ts:1159

---

### isSafeInteger()

> **isSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1198

---

### isSet()

> **isSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1220

---

### isString()

> **isString**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isString

#### Source

node_modules/@types/lodash/common/lang.d.ts:1242

---

### isSymbol()

> **isSymbol**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSymbol

#### Source

node_modules/@types/lodash/common/lang.d.ts:1272

---

### isTypedArray()

> **isTypedArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isTypedArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1294

---

### isUndefined()

> **isUndefined**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isUndefined

#### Source

node_modules/@types/lodash/common/lang.d.ts:1316

---

### isWeakMap()

> **isWeakMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isWeakMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:1338

---

### isWeakSet()

> **isWeakSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isWeakSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1360

---

### kebabCase()

> **kebabCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.kebabCase

#### Source

node_modules/@types/lodash/common/string.d.ts:169

---

### keys()

> **keys**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.keys

#### Source

node_modules/@types/lodash/common/object.d.ts:1507

---

### keysIn()

> **keysIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.keysIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1530

---

### lowerCase()

> **lowerCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.lowerCase

#### Source

node_modules/@types/lodash/common/string.d.ts:191

---

### lowerFirst()

> **lowerFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.lowerFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:213

---

### lt()

> **lt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.lt

#### Source

node_modules/@types/lodash/common/lang.d.ts:1383

---

### lte()

> **lte**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.lte

#### Source

node_modules/@types/lodash/common/lang.d.ts:1406

---

### matches()

> **matches**\<`V`\>(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Type parameters

• **V**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

\_.matches

#### Source

node_modules/@types/lodash/common/util.d.ts:513

---

### matchesProperty()

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`FunctionChain`](FunctionChain.md)\<(`value`) =>
> `boolean`\>

##### Type parameters

• **SrcValue**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:547

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`):
> [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### Type parameters

• **SrcValue**

• **Value**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:551

---

### mean()

> **mean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.mean

#### Source

node_modules/@types/lodash/common/math.d.ts:179

---

### method()

> **method**(...`args`): [`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

#### See

\_.method

#### Source

node_modules/@types/lodash/common/util.d.ts:575

---

### methodOf()

> **methodOf**(...`args`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### See

\_.methodOf

#### Source

node_modules/@types/lodash/common/util.d.ts:599

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

##### Source

node_modules/@types/lodash/common/util.d.ts:642

#### mixin(options)

> **mixin**(`options`?):
> [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### Parameters

• **options?**: [`MixinOptions`](MixinOptions.md)

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

\_.mixin

##### Source

node_modules/@types/lodash/common/util.d.ts:646

---

### multiply()

> **multiply**(`multiplicand`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **multiplicand**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.multiply

#### Source

node_modules/@types/lodash/common/math.d.ts:289

---

### noConflict()

> **noConflict**():
> [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

#### See

\_.noConflict

#### Source

node_modules/@types/lodash/common/util.d.ts:667

---

### noop()

> **noop**(...`args`): [`PrimitiveChain`](PrimitiveChain.md)\<`undefined`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`undefined`\>

#### See

\_.noop

#### Source

node_modules/@types/lodash/common/util.d.ts:688

---

### now()

> **now**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.now

#### Source

node_modules/@types/lodash/common/date.d.ts:21

---

### nthArg()

> **nthArg**(): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

\_.nthArg

#### Source

node_modules/@types/lodash/common/util.d.ts:710

---

### pad()

> **pad**(`length`?, `chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.pad

#### Source

node_modules/@types/lodash/common/string.d.ts:238

---

### padEnd()

> **padEnd**(`length`?, `chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.padEnd

#### Source

node_modules/@types/lodash/common/string.d.ts:263

---

### padStart()

> **padStart**(`length`?, `chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **length?**: `number`

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.padStart

#### Source

node_modules/@types/lodash/common/string.d.ts:288

---

### parseInt()

> **parseInt**(`radix`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **radix?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.parseInt

#### Source

node_modules/@types/lodash/common/string.d.ts:314

---

### plant()

> **plant**(`value`): `this`

#### Parameters

• **value**: `unknown`

#### Returns

`this`

#### See

\_.plant

#### Source

node_modules/@types/lodash/common/seq.d.ts:101

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

#### Type parameters

• **TObj**

• **TResult**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

#### See

\_.property

#### Source

node_modules/@types/lodash/common/util.d.ts:845

---

### propertyOf()

> **propertyOf**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### See

\_.propertyOf

#### Source

node_modules/@types/lodash/common/util.d.ts:868

---

### random()

#### random(floating)

> **random**(`floating`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **floating?**: `boolean`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:125

#### random(max, floating)

> **random**(`max`, `floating`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **max**: `number`

• **floating?**: `boolean`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.random

##### Source

node_modules/@types/lodash/common/number.d.ts:129

---

### range()

> **range**(`end`?, `step`?): [`CollectionChain`](CollectionChain.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

#### See

\_.range

#### Source

node_modules/@types/lodash/common/util.d.ts:898

---

### rangeRight()

> **rangeRight**(`end`?, `step`?): [`CollectionChain`](CollectionChain.md)\<`number`\>

#### Parameters

• **end?**: `number`

• **step?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

#### See

\_.rangeRight

#### Source

node_modules/@types/lodash/common/util.d.ts:950

---

### repeat()

> **repeat**(`n`?): [`StringChain`](StringChain.md)

#### Parameters

• **n?**: `number`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.repeat

#### Source

node_modules/@types/lodash/common/string.d.ts:337

---

### replace()

#### replace(pattern, replacement)

> **replace**(`pattern`, `replacement`): [`StringChain`](StringChain.md)

##### Parameters

• **pattern**: `string` \| `RegExp`

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.replace

##### Source

node_modules/@types/lodash/common/string.d.ts:369

#### replace(replacement)

> **replace**(`replacement`): [`StringChain`](StringChain.md)

##### Parameters

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.replace

##### Source

node_modules/@types/lodash/common/string.d.ts:373

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type parameters

• **TResult**

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `TResult` \| (...`args`) => `TResult`

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.result

#### Source

node_modules/@types/lodash/common/object.d.ts:2189

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

#### See

\_.reverse

#### Source

node_modules/@types/lodash/common/seq.d.ts:114

---

### round()

> **round**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.round

#### Source

node_modules/@types/lodash/common/math.d.ts:312

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

##### Source

node_modules/@types/lodash/common/object.d.ts:2222

#### set(path, value)

> **set**\<`TResult`\>(`path`, `value`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.set

##### Source

node_modules/@types/lodash/common/object.d.ts:2226

---

### setWith()

#### setWith(path, value, customizer)

> **setWith**(`path`, `value`, `customizer`?): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

`this`

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2261

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2265

---

### size()

> **size**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.size

#### Source

node_modules/@types/lodash/common/collection.d.ts:1831

---

### snakeCase()

> **snakeCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.snakeCase

#### Source

node_modules/@types/lodash/common/string.d.ts:395

---

### split()

> **split**(`separator`?, `limit`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **separator?**: `string` \| `RegExp`

• **limit?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.split

#### Source

node_modules/@types/lodash/common/string.d.ts:425

---

### startCase()

> **startCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.startCase

#### Source

node_modules/@types/lodash/common/string.d.ts:447

---

### startsWith()

> **startsWith**(`target`?, `position`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **target?**: `string`

• **position?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.startsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:471

---

### stubArray()

> **stubArray**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

#### See

\_.stubArray

#### Source

node_modules/@types/lodash/common/util.d.ts:987

---

### stubFalse()

#### stubFalse()

> **stubFalse**(): [`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1008

#### stubFalse()

> **stubFalse**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1218

---

### stubObject()

> **stubObject**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### See

\_.stubObject

#### Source

node_modules/@types/lodash/common/util.d.ts:1029

---

### stubString()

> **stubString**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.stubString

#### Source

node_modules/@types/lodash/common/util.d.ts:1050

---

### stubTrue()

#### stubTrue()

> **stubTrue**(): [`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1071

#### stubTrue()

> **stubTrue**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1193

---

### subtract()

> **subtract**(`subtrahend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **subtrahend**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.subtract

#### Source

node_modules/@types/lodash/common/math.d.ts:340

---

### sum()

> **sum**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sum

#### Source

node_modules/@types/lodash/common/math.d.ts:367

---

### tap()

> **tap**(`interceptor`): `this`

#### Parameters

• **interceptor**

#### Returns

`this`

#### See

\_.tap

#### Source

node_modules/@types/lodash/common/seq.d.ts:185

---

### template()

> **template**(`options`?):
> [`FunctionChain`](FunctionChain.md)\<[`TemplateExecutor`](TemplateExecutor.md)\>

#### Parameters

• **options?**: [`TemplateOptions`](TemplateOptions.md)

#### Returns

[`FunctionChain`](FunctionChain.md)\<[`TemplateExecutor`](TemplateExecutor.md)\>

#### See

\_.template

#### Source

node_modules/@types/lodash/common/string.d.ts:526

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type parameters

• **TResult**

#### Parameters

• **interceptor**

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.thru

#### Source

node_modules/@types/lodash/common/seq.d.ts:208

---

### times()

#### times(iteratee)

> **times**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1103

#### times()

> **times**(): [`CollectionChain`](CollectionChain.md)\<`number`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1107

---

### toFinite()

> **toFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:1503

---

### toInteger()

> **toInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1541

---

### toJSON()

> **toJSON**(): `TValue`

#### Returns

`TValue`

#### See

\_.toJSON

#### Source

node_modules/@types/lodash/common/seq.d.ts:127

---

### toLength()

> **toLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:1580

---

### toLower()

> **toLower**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.toLower

#### Source

node_modules/@types/lodash/common/string.d.ts:548

---

### toNumber()

> **toNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1616

---

### toPairs()

> **toPairs**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `TValue` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairs

#### Source

node_modules/@types/lodash/common/object.d.ts:2290

---

### toPairsIn()

> **toPairsIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `TValue` _extends_
[`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2315

---

### toPath()

> **toPath**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.toPath

#### Source

node_modules/@types/lodash/common/util.d.ts:1146

---

### toPlainObject()

> **toPlainObject**(): [`ObjectChain`](ObjectChain.md)\<`any`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

\_.toPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1639

---

### toSafeInteger()

> **toSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1676

---

### toUpper()

> **toUpper**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.toUpper

#### Source

node_modules/@types/lodash/common/string.d.ts:570

---

### trim()

> **trim**(`chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.trim

#### Source

node_modules/@types/lodash/common/string.d.ts:597

---

### trimEnd()

> **trimEnd**(`chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.trimEnd

#### Source

node_modules/@types/lodash/common/string.d.ts:624

---

### trimStart()

> **trimStart**(`chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.trimStart

#### Source

node_modules/@types/lodash/common/string.d.ts:651

---

### truncate()

> **truncate**(`options`?): [`StringChain`](StringChain.md)

#### Parameters

• **options?**: [`TruncateOptions`](TruncateOptions.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.truncate

#### Source

node_modules/@types/lodash/common/string.d.ts:689

---

### unescape()

> **unescape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.unescape

#### Source

node_modules/@types/lodash/common/string.d.ts:715

---

### uniqueId()

> **uniqueId**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.uniqueId

#### Source

node_modules/@types/lodash/common/util.d.ts:1168

---

### unset()

> **unset**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.unset

#### Source

node_modules/@types/lodash/common/object.d.ts:2417

---

### update()

> **update**(`path`, `updater`): [`ObjectChain`](ObjectChain.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

\_.update

#### Source

node_modules/@types/lodash/common/object.d.ts:2441

---

### upperCase()

> **upperCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.upperCase

#### Source

node_modules/@types/lodash/common/string.d.ts:737

---

### upperFirst()

> **upperFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.upperFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:759

---

### value()

> **value**(): `TValue`

#### Returns

`TValue`

#### See

\_.value

#### Source

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf()

> **valueOf**(): `TValue`

#### Returns

`TValue`

#### See

\_.valueOf

#### Source

node_modules/@types/lodash/common/seq.d.ts:160

---

### words()

> **words**(`pattern`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.words

#### Source

node_modules/@types/lodash/common/string.d.ts:786

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `TResult`\>

#### Type parameters

• **TArgs**

• **TResult**

#### Parameters

• **wrapper**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `TResult`\>

#### See

\_.wrap

#### Source

node_modules/@types/lodash/common/function.d.ts:1453
