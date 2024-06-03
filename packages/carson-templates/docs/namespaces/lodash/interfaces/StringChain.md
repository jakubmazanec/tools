[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: StringChain

## Extends

- [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`string`\>

## Properties

### each()

> **each**: (`iteratee`?) => [`StringChain`](StringChain.md)

#### See

\_.each

#### Parameters

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

[`StringChain`](StringChain.md)

#### Source

node_modules/@types/lodash/common/collection.d.ts:89

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`StringChain`](StringChain.md)

#### See

\_.eachRight

#### Parameters

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

[`StringChain`](StringChain.md)

#### Source

node_modules/@types/lodash/common/collection.d.ts:137

## Methods

### add()

> **add**(`addend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **addend**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`add`](LoDashExplicitWrapper.md#add)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`attempt`](LoDashExplicitWrapper.md#attempt)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bind`](LoDashExplicitWrapper.md#bind)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindAll`](LoDashExplicitWrapper.md#bindall)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindKey`](LoDashExplicitWrapper.md#bindkey)

#### See

\_.bindKey

#### Source

node_modules/@types/lodash/common/function.d.ts:139

---

### camelCase()

> **camelCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`camelCase`](LoDashExplicitWrapper.md#camelcase)

#### See

\_.camelCase

#### Source

node_modules/@types/lodash/common/string.d.ts:22

---

### capitalize()

> **capitalize**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`capitalize`](LoDashExplicitWrapper.md#capitalize)

#### See

\_.capitalize

#### Source

node_modules/@types/lodash/common/string.d.ts:44

---

### castArray()

> **castArray**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.castArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:55

---

### ceil()

> **ceil**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`ceil`](LoDashExplicitWrapper.md#ceil)

#### See

\_.ceil

#### Source

node_modules/@types/lodash/common/math.d.ts:46

---

### chain()

> **chain**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`chain`](LoDashExplicitWrapper.md#chain)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:58

---

### clone()

> **clone**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clone`](LoDashExplicitWrapper.md#clone)

#### See

\_.clone

#### Source

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep()

> **cloneDeep**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeep`](LoDashExplicitWrapper.md#clonedeep)

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
[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`string`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:139

#### cloneDeepWith()

> **cloneDeepWith**(): `this`

##### Returns

`this`

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

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

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`string`,
`TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:147

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): [`StringChain`](StringChain.md) \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`string`,
`undefined` \| `TResult`\>

##### Returns

[`StringChain`](StringChain.md) \| [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:151

#### cloneWith()

> **cloneWith**(): `this`

##### Returns

`this`

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`commit`](LoDashExplicitWrapper.md#commit)

#### See

\_.commit

#### Source

node_modules/@types/lodash/common/seq.d.ts:88

---

### conforms()

> **conforms**(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conforms`](LoDashExplicitWrapper.md#conforms)

#### See

\_.conforms

#### Source

node_modules/@types/lodash/common/util.d.ts:106

---

### conformsTo()

> **conformsTo**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **source**: `string`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conformsTo`](LoDashExplicitWrapper.md#conformsto)

#### See

\_.conformsTo

#### Source

node_modules/@types/lodash/common/lang.d.ts:221

---

### constant()

> **constant**(): [`FunctionChain`](FunctionChain.md)\<() => `string`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<() => `string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`constant`](LoDashExplicitWrapper.md#constant)

#### See

\_.constant

#### Source

node_modules/@types/lodash/common/util.d.ts:128

---

### countBy()

> **countBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

\_.countBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:47

---

### deburr()

> **deburr**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`deburr`](LoDashExplicitWrapper.md#deburr)

#### See

\_.deburr

#### Source

node_modules/@types/lodash/common/string.d.ts:67

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): [`StringChain`](StringChain.md)

##### Parameters

• **defaultValue**: `string`

##### Returns

[`StringChain`](StringChain.md)

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:161

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): [`StringChain`](StringChain.md) \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### Type parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

[`StringChain`](StringChain.md) \| [`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defer`](LoDashExplicitWrapper.md#defer)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`delay`](LoDashExplicitWrapper.md#delay)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`divide`](LoDashExplicitWrapper.md#divide)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`endsWith`](LoDashExplicitWrapper.md#endswith)

#### See

\_.endsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:91

---

### entries()

> **entries**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entries`](LoDashExplicitWrapper.md#entries)

#### See

\_.entries

#### Source

node_modules/@types/lodash/common/object.d.ts:609

---

### entriesIn()

> **entriesIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entriesIn`](LoDashExplicitWrapper.md#entriesin)

#### See

\_.entriesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:643

---

### eq()

> **eq**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`eq`](LoDashExplicitWrapper.md#eq)

#### See

\_.eq

#### Source

node_modules/@types/lodash/common/lang.d.ts:266

---

### escape()

> **escape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escape`](LoDashExplicitWrapper.md#escape)

#### See

\_.escape

#### Source

node_modules/@types/lodash/common/string.d.ts:124

---

### escapeRegExp()

> **escapeRegExp**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escapeRegExp`](LoDashExplicitWrapper.md#escaperegexp)

#### See

\_.escapeRegExp

#### Source

node_modules/@types/lodash/common/string.d.ts:147

---

### filter()

> **filter**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **predicate?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.filter

#### Source

node_modules/@types/lodash/common/collection.d.ts:253

---

### findKey()

> **findKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`string`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findKey`](LoDashExplicitWrapper.md#findkey)

#### See

\_.findKey

#### Source

node_modules/@types/lodash/common/object.d.ts:822

---

### findLastKey()

> **findLastKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`string`\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findLastKey`](LoDashExplicitWrapper.md#findlastkey)

#### See

\_.findLastKey

#### Source

node_modules/@types/lodash/common/object.d.ts:844

---

### first()

> **first**(): [`StringNullableChain`](StringNullableChain.md)

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.first

#### Source

node_modules/@types/lodash/common/array.d.ts:430

---

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**:
[`StringIterator`](../type-aliases/StringIterator.md)\<[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:482

#### flatMap()

> **flatMap**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:486

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`StringIterator`](../type-aliases/StringIterator.md)\<`TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:605

#### flatMapDeep()

> **flatMapDeep**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:609

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`StringIterator`](../type-aliases/StringIterator.md)\<`TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:729

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

##### Parameters

• **depth?**: `number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:733

---

### flatten()

> **flatten**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.flatten

#### Source

node_modules/@types/lodash/common/array.d.ts:471

---

### floor()

> **floor**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`floor`](LoDashExplicitWrapper.md#floor)

#### See

\_.floor

#### Source

node_modules/@types/lodash/common/math.d.ts:92

---

### forEach()

> **forEach**(`iteratee`?): [`StringChain`](StringChain.md)

#### Parameters

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.forEach

#### Source

node_modules/@types/lodash/common/collection.d.ts:838

---

### forEachRight()

> **forEachRight**(`iteratee`?): [`StringChain`](StringChain.md)

#### Parameters

• **iteratee?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`any`\>

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.forEachRight

#### Source

node_modules/@types/lodash/common/collection.d.ts:919

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`string`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forIn`](LoDashExplicitWrapper.md#forin)

#### See

\_.forIn

#### Source

node_modules/@types/lodash/common/object.d.ts:872

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`string`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forInRight`](LoDashExplicitWrapper.md#forinright)

#### See

\_.forInRight

#### Source

node_modules/@types/lodash/common/object.d.ts:898

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`string`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwn`](LoDashExplicitWrapper.md#forown)

#### See

\_.forOwn

#### Source

node_modules/@types/lodash/common/object.d.ts:926

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`string`, `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwnRight`](LoDashExplicitWrapper.md#forownright)

#### See

\_.forOwnRight

#### Source

node_modules/@types/lodash/common/object.d.ts:952

---

### functions()

> **functions**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functions`](LoDashExplicitWrapper.md#functions)

#### See

\_.functions

#### Source

node_modules/@types/lodash/common/object.d.ts:986

---

### functionsIn()

> **functionsIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functionsIn`](LoDashExplicitWrapper.md#functionsin)

#### See

\_.functionsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1020

---

### get()

#### get(path)

> **get**(`path`): [`StringChain`](StringChain.md)

##### Parameters

• **path**: `number` \| `number`[]

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1217

#### get(path, defaultValue)

> **get**(`path`, `defaultValue`): [`StringChain`](StringChain.md)

##### Parameters

• **path**: `number` \| `number`[]

• **defaultValue**: `string`

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1221

---

### groupBy()

> **groupBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.groupBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:977

---

### gt()

> **gt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gt`](LoDashExplicitWrapper.md#gt)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gte`](LoDashExplicitWrapper.md#gte)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`has`](LoDashExplicitWrapper.md#has)

#### See

\_.has

#### Source

node_modules/@types/lodash/common/object.d.ts:1342

---

### hasIn()

> **hasIn**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`hasIn`](LoDashExplicitWrapper.md#hasin)

#### See

\_.hasIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1380

---

### head()

> **head**(): [`StringNullableChain`](StringNullableChain.md)

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.head

#### Source

node_modules/@types/lodash/common/array.d.ts:589

---

### identity()

> **identity**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`identity`](LoDashExplicitWrapper.md#identity)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`inRange`](LoDashExplicitWrapper.md#inrange)

#### See

\_.inRange

#### Source

node_modules/@types/lodash/common/number.d.ts:83

---

### includes()

> **includes**(`target`, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **target**: `string`

• **fromIndex?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.includes

#### Source

node_modules/@types/lodash/common/collection.d.ts:1043

---

### invert()

> **invert**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invert`](LoDashExplicitWrapper.md#invert)

#### See

\_.invert

#### Source

node_modules/@types/lodash/common/object.d.ts:1403

---

### invertBy()

> **invertBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`string`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Source

node_modules/@types/lodash/common/object.d.ts:1443

---

### invoke()

> **invoke**(`path`, ...`args`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• ...**args**: `any`[]

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invoke`](LoDashExplicitWrapper.md#invoke)

#### See

\_.invoke

#### Source

node_modules/@types/lodash/common/object.d.ts:1482

---

### invokeMap()

#### invokeMap(methodName, args)

> **invokeMap**(`methodName`, ...`args`): [`CollectionChain`](CollectionChain.md)\<`any`\>

##### Parameters

• **methodName**: `string`

• ...**args**: `any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1079

---

### isArguments()

> **isArguments**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArguments`](LoDashExplicitWrapper.md#isarguments)

#### See

\_.isArguments

#### Source

node_modules/@types/lodash/common/lang.d.ts:334

---

### isArray()

> **isArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArray`](LoDashExplicitWrapper.md#isarray)

#### See

\_.isArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:360

---

### isArrayBuffer()

> **isArrayBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayBuffer`](LoDashExplicitWrapper.md#isarraybuffer)

#### See

\_.isArrayBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:382

---

### isArrayLike()

> **isArrayLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLike`](LoDashExplicitWrapper.md#isarraylike)

#### See

\_.isArrayLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:428

---

### isArrayLikeObject()

> **isArrayLikeObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLikeObject`](LoDashExplicitWrapper.md#isarraylikeobject)

#### See

\_.isArrayLikeObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:473

---

### isBoolean()

> **isBoolean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBoolean`](LoDashExplicitWrapper.md#isboolean)

#### See

\_.isBoolean

#### Source

node_modules/@types/lodash/common/lang.d.ts:495

---

### isBuffer()

> **isBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBuffer`](LoDashExplicitWrapper.md#isbuffer)

#### See

\_.isBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:517

---

### isDate()

> **isDate**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isDate`](LoDashExplicitWrapper.md#isdate)

#### See

\_.isDate

#### Source

node_modules/@types/lodash/common/lang.d.ts:539

---

### isElement()

> **isElement**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isElement`](LoDashExplicitWrapper.md#iselement)

#### See

\_.isElement

#### Source

node_modules/@types/lodash/common/lang.d.ts:561

---

### isEmpty()

> **isEmpty**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEmpty`](LoDashExplicitWrapper.md#isempty)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqual`](LoDashExplicitWrapper.md#isequal)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqualWith`](LoDashExplicitWrapper.md#isequalwith)

#### See

\_.isEqualWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:678

---

### isError()

> **isError**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isError`](LoDashExplicitWrapper.md#iserror)

#### See

\_.isError

#### Source

node_modules/@types/lodash/common/lang.d.ts:701

---

### isFinite()

> **isFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFinite`](LoDashExplicitWrapper.md#isfinite)

#### See

\_.isFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:725

---

### isFunction()

> **isFunction**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFunction`](LoDashExplicitWrapper.md#isfunction)

#### See

\_.isFunction

#### Source

node_modules/@types/lodash/common/lang.d.ts:747

---

### isInteger()

> **isInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isInteger`](LoDashExplicitWrapper.md#isinteger)

#### See

\_.isInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:785

---

### isLength()

> **isLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isLength`](LoDashExplicitWrapper.md#islength)

#### See

\_.isLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:823

---

### isMap()

> **isMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMap`](LoDashExplicitWrapper.md#ismap)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatch`](LoDashExplicitWrapper.md#ismatch)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatchWith`](LoDashExplicitWrapper.md#ismatchwith)

#### See

\_.isMatchWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:927

---

### isNaN()

> **isNaN**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNaN`](LoDashExplicitWrapper.md#isnan)

#### See

\_.isNaN

#### Source

node_modules/@types/lodash/common/lang.d.ts:951

---

### isNative()

> **isNative**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNative`](LoDashExplicitWrapper.md#isnative)

#### See

\_.isNative

#### Source

node_modules/@types/lodash/common/lang.d.ts:973

---

### isNil()

> **isNil**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNil`](LoDashExplicitWrapper.md#isnil)

#### See

\_.isNil

#### Source

node_modules/@types/lodash/common/lang.d.ts:1006

---

### isNull()

> **isNull**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNull`](LoDashExplicitWrapper.md#isnull)

#### See

\_.isNull

#### Source

node_modules/@types/lodash/common/lang.d.ts:1028

---

### isNumber()

> **isNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNumber`](LoDashExplicitWrapper.md#isnumber)

#### See

\_.isNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1052

---

### isObject()

> **isObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObject`](LoDashExplicitWrapper.md#isobject)

#### See

\_.isObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1075

---

### isObjectLike()

> **isObjectLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObjectLike`](LoDashExplicitWrapper.md#isobjectlike)

#### See

\_.isObjectLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:1112

---

### isPlainObject()

> **isPlainObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isPlainObject`](LoDashExplicitWrapper.md#isplainobject)

#### See

\_.isPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1137

---

### isRegExp()

> **isRegExp**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isRegExp`](LoDashExplicitWrapper.md#isregexp)

#### See

\_.isRegExp

#### Source

node_modules/@types/lodash/common/lang.d.ts:1159

---

### isSafeInteger()

> **isSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSafeInteger`](LoDashExplicitWrapper.md#issafeinteger)

#### See

\_.isSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1198

---

### isSet()

> **isSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSet`](LoDashExplicitWrapper.md#isset)

#### See

\_.isSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1220

---

### isString()

> **isString**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isString`](LoDashExplicitWrapper.md#isstring)

#### See

\_.isString

#### Source

node_modules/@types/lodash/common/lang.d.ts:1242

---

### isSymbol()

> **isSymbol**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSymbol`](LoDashExplicitWrapper.md#issymbol)

#### See

\_.isSymbol

#### Source

node_modules/@types/lodash/common/lang.d.ts:1272

---

### isTypedArray()

> **isTypedArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isTypedArray`](LoDashExplicitWrapper.md#istypedarray)

#### See

\_.isTypedArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1294

---

### isUndefined()

> **isUndefined**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isUndefined`](LoDashExplicitWrapper.md#isundefined)

#### See

\_.isUndefined

#### Source

node_modules/@types/lodash/common/lang.d.ts:1316

---

### isWeakMap()

> **isWeakMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakMap`](LoDashExplicitWrapper.md#isweakmap)

#### See

\_.isWeakMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:1338

---

### isWeakSet()

> **isWeakSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakSet`](LoDashExplicitWrapper.md#isweakset)

#### See

\_.isWeakSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1360

---

### iteratee()

> **iteratee**(): [`FunctionChain`](FunctionChain.md)\<(`o`) => `any`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`o`) => `any`\>

#### See

\_.iteratee

#### Source

node_modules/@types/lodash/common/util.d.ts:476

---

### join()

> **join**(`separator`?): [`StringChain`](StringChain.md)

#### Parameters

• **separator?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.join

#### Source

node_modules/@types/lodash/common/array.d.ts:816

---

### kebabCase()

> **kebabCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`kebabCase`](LoDashExplicitWrapper.md#kebabcase)

#### See

\_.kebabCase

#### Source

node_modules/@types/lodash/common/string.d.ts:169

---

### keyBy()

> **keyBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`string`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

\_.keyBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1119

---

### keys()

> **keys**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keys`](LoDashExplicitWrapper.md#keys)

#### See

\_.keys

#### Source

node_modules/@types/lodash/common/object.d.ts:1505

---

### keysIn()

> **keysIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keysIn`](LoDashExplicitWrapper.md#keysin)

#### See

\_.keysIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1528

---

### last()

> **last**(): [`StringNullableChain`](StringNullableChain.md)

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.last

#### Source

node_modules/@types/lodash/common/array.d.ts:867

---

### lowerCase()

> **lowerCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerCase`](LoDashExplicitWrapper.md#lowercase)

#### See

\_.lowerCase

#### Source

node_modules/@types/lodash/common/string.d.ts:191

---

### lowerFirst()

> **lowerFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerFirst`](LoDashExplicitWrapper.md#lowerfirst)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lt`](LoDashExplicitWrapper.md#lt)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lte`](LoDashExplicitWrapper.md#lte)

#### See

\_.lte

#### Source

node_modules/@types/lodash/common/lang.d.ts:1406

---

### map()

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1241

#### map()

> **map**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1245

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`StringIterator`](../type-aliases/StringIterator.md)\<`TResult`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1683

#### mapValues()

> **mapValues**():
> [`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`NumericDictionary`](NumericDictionary.md)\<`string`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1687

---

### matches()

> **matches**\<`V`\>(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Type parameters

• **V**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matches`](LoDashExplicitWrapper.md#matches)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:551

---

### mean()

> **mean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mean`](LoDashExplicitWrapper.md#mean)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`method`](LoDashExplicitWrapper.md#method)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`methodOf`](LoDashExplicitWrapper.md#methodof)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`multiply`](LoDashExplicitWrapper.md#multiply)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noConflict`](LoDashExplicitWrapper.md#noconflict)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noop`](LoDashExplicitWrapper.md#noop)

#### See

\_.noop

#### Source

node_modules/@types/lodash/common/util.d.ts:688

---

### now()

> **now**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`now`](LoDashExplicitWrapper.md#now)

#### See

\_.now

#### Source

node_modules/@types/lodash/common/date.d.ts:21

---

### nthArg()

> **nthArg**(): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`nthArg`](LoDashExplicitWrapper.md#ntharg)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`pad`](LoDashExplicitWrapper.md#pad)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padEnd`](LoDashExplicitWrapper.md#padend)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padStart`](LoDashExplicitWrapper.md#padstart)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`parseInt`](LoDashExplicitWrapper.md#parseint)

#### See

\_.parseInt

#### Source

node_modules/@types/lodash/common/string.d.ts:314

---

### partition()

> **partition**(`callback`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`string`[],
> `string`[]]\>

#### Parameters

• **callback**: [`StringIterator`](../type-aliases/StringIterator.md)\<`unknown`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`string`[], `string`[]]\>

#### See

\_.partition

#### Source

node_modules/@types/lodash/common/collection.d.ts:1411

---

### plant()

> **plant**(`value`): `this`

#### Parameters

• **value**: `unknown`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`plant`](LoDashExplicitWrapper.md#plant)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`property`](LoDashExplicitWrapper.md#property)

#### See

\_.property

#### Source

node_modules/@types/lodash/common/util.d.ts:845

---

### propertyOf()

> **propertyOf**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`propertyOf`](LoDashExplicitWrapper.md#propertyof)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`range`](LoDashExplicitWrapper.md#range)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`rangeRight`](LoDashExplicitWrapper.md#rangeright)

#### See

\_.rangeRight

#### Source

node_modules/@types/lodash/common/util.d.ts:950

---

### reject()

> **reject**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **predicate?**: [`StringIterator`](../type-aliases/StringIterator.md)\<`boolean`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.reject

#### Source

node_modules/@types/lodash/common/collection.d.ts:1621

---

### repeat()

> **repeat**(`n`?): [`StringChain`](StringChain.md)

#### Parameters

• **n?**: `number`

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`repeat`](LoDashExplicitWrapper.md#repeat)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`result`](LoDashExplicitWrapper.md#result)

#### See

\_.result

#### Source

node_modules/@types/lodash/common/object.d.ts:2187

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`reverse`](LoDashExplicitWrapper.md#reverse)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`round`](LoDashExplicitWrapper.md#round)

#### See

\_.round

#### Source

node_modules/@types/lodash/common/math.d.ts:312

---

### sample()

> **sample**(): [`StringNullableChain`](StringNullableChain.md)

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.sample

#### Source

node_modules/@types/lodash/common/collection.d.ts:1680

---

### sampleSize()

> **sampleSize**(`n`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.sampleSize

#### Source

node_modules/@types/lodash/common/collection.d.ts:1736

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

##### See

\_.set

##### Source

node_modules/@types/lodash/common/object.d.ts:2220

#### set(path, value)

> **set**\<`TResult`\>(`path`, `value`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

##### See

\_.set

##### Source

node_modules/@types/lodash/common/object.d.ts:2224

---

### setWith()

#### setWith(path, value, customizer)

> **setWith**(`path`, `value`, `customizer`?): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`string`\>

##### Returns

`this`

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2259

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`string`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2263

---

### shuffle()

> **shuffle**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.shuffle

#### Source

node_modules/@types/lodash/common/collection.d.ts:1791

---

### size()

> **size**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`size`](LoDashExplicitWrapper.md#size)

#### See

\_.size

#### Source

node_modules/@types/lodash/common/collection.d.ts:1831

---

### snakeCase()

> **snakeCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`snakeCase`](LoDashExplicitWrapper.md#snakecase)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`split`](LoDashExplicitWrapper.md#split)

#### See

\_.split

#### Source

node_modules/@types/lodash/common/string.d.ts:425

---

### startCase()

> **startCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startCase`](LoDashExplicitWrapper.md#startcase)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startsWith`](LoDashExplicitWrapper.md#startswith)

#### See

\_.startsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:471

---

### stubArray()

> **stubArray**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubArray`](LoDashExplicitWrapper.md#stubarray)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1008

#### stubFalse()

> **stubFalse**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1218

---

### stubObject()

> **stubObject**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubObject`](LoDashExplicitWrapper.md#stubobject)

#### See

\_.stubObject

#### Source

node_modules/@types/lodash/common/util.d.ts:1029

---

### stubString()

> **stubString**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubString`](LoDashExplicitWrapper.md#stubstring)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1071

#### stubTrue()

> **stubTrue**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`subtract`](LoDashExplicitWrapper.md#subtract)

#### See

\_.subtract

#### Source

node_modules/@types/lodash/common/math.d.ts:340

---

### sum()

> **sum**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`sum`](LoDashExplicitWrapper.md#sum)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`tap`](LoDashExplicitWrapper.md#tap)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`template`](LoDashExplicitWrapper.md#template)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`thru`](LoDashExplicitWrapper.md#thru)

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1103

#### times()

> **times**(): [`CollectionChain`](CollectionChain.md)\<`number`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1107

---

### toArray()

> **toArray**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.toArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1448

---

### toFinite()

> **toFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toFinite`](LoDashExplicitWrapper.md#tofinite)

#### See

\_.toFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:1503

---

### toInteger()

> **toInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toInteger`](LoDashExplicitWrapper.md#tointeger)

#### See

\_.toInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1541

---

### toJSON()

> **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toJSON`](LoDashExplicitWrapper.md#tojson)

#### See

\_.toJSON

#### Source

node_modules/@types/lodash/common/seq.d.ts:127

---

### toLength()

> **toLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLength`](LoDashExplicitWrapper.md#tolength)

#### See

\_.toLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:1580

---

### toLower()

> **toLower**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLower`](LoDashExplicitWrapper.md#tolower)

#### See

\_.toLower

#### Source

node_modules/@types/lodash/common/string.d.ts:548

---

### toNumber()

> **toNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toNumber`](LoDashExplicitWrapper.md#tonumber)

#### See

\_.toNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1616

---

### toPairs()

> **toPairs**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `string`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `string`]\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairs`](LoDashExplicitWrapper.md#topairs)

#### See

\_.toPairs

#### Source

node_modules/@types/lodash/common/object.d.ts:2288

---

### toPairsIn()

> **toPairsIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `string`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `string`]\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairsIn`](LoDashExplicitWrapper.md#topairsin)

#### See

\_.toPairsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2313

---

### toPath()

> **toPath**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPath`](LoDashExplicitWrapper.md#topath)

#### See

\_.toPath

#### Source

node_modules/@types/lodash/common/util.d.ts:1146

---

### toPlainObject()

> **toPlainObject**(): [`ObjectChain`](ObjectChain.md)\<`any`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPlainObject`](LoDashExplicitWrapper.md#toplainobject)

#### See

\_.toPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1639

---

### toSafeInteger()

> **toSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toSafeInteger`](LoDashExplicitWrapper.md#tosafeinteger)

#### See

\_.toSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1676

---

### toUpper()

> **toUpper**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toUpper`](LoDashExplicitWrapper.md#toupper)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trim`](LoDashExplicitWrapper.md#trim)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimEnd`](LoDashExplicitWrapper.md#trimend)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimStart`](LoDashExplicitWrapper.md#trimstart)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`truncate`](LoDashExplicitWrapper.md#truncate)

#### See

\_.truncate

#### Source

node_modules/@types/lodash/common/string.d.ts:689

---

### unescape()

> **unescape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unescape`](LoDashExplicitWrapper.md#unescape)

#### See

\_.unescape

#### Source

node_modules/@types/lodash/common/string.d.ts:715

---

### uniqueId()

> **uniqueId**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`uniqueId`](LoDashExplicitWrapper.md#uniqueid)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unset`](LoDashExplicitWrapper.md#unset)

#### See

\_.unset

#### Source

node_modules/@types/lodash/common/object.d.ts:2415

---

### update()

> **update**(`path`, `updater`): [`ObjectChain`](ObjectChain.md)\<`any`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`update`](LoDashExplicitWrapper.md#update)

#### See

\_.update

#### Source

node_modules/@types/lodash/common/object.d.ts:2439

---

### upperCase()

> **upperCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperCase`](LoDashExplicitWrapper.md#uppercase)

#### See

\_.upperCase

#### Source

node_modules/@types/lodash/common/string.d.ts:737

---

### upperFirst()

> **upperFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperFirst`](LoDashExplicitWrapper.md#upperfirst)

#### See

\_.upperFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:759

---

### value()

> **value**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`value`](LoDashExplicitWrapper.md#value)

#### See

\_.value

#### Source

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf()

> **valueOf**(): `string`

#### Returns

`string`

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`valueOf`](LoDashExplicitWrapper.md#valueof)

#### See

\_.valueOf

#### Source

node_modules/@types/lodash/common/seq.d.ts:160

---

### values()

> **values**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.values

#### Source

node_modules/@types/lodash/common/object.d.ts:2529

---

### valuesIn()

> **valuesIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.valuesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2566

---

### words()

> **words**(`pattern`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`words`](LoDashExplicitWrapper.md#words)

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`wrap`](LoDashExplicitWrapper.md#wrap)

#### See

\_.wrap

#### Source

node_modules/@types/lodash/common/function.d.ts:1444
