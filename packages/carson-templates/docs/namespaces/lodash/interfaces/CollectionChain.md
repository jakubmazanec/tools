[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: CollectionChain\<T\>

## Extends

- [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`T`[]\>

## Type Parameters

• **T**

## Properties

### each()

> **each**: (`iteratee`?) => [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.forEach

#### See

\_.each

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:101

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.forEachRight

#### See

\_.eachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:149

## Methods

### add()

> **add**(`addend`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **addend**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.add

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`add`](LoDashExplicitWrapper.md#add)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:23

---

### at()

> **at**(...`props`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**props**: [`PropertyPath`](../type-aliases/PropertyPath.md)[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.at

#### Defined in

node_modules/@types/lodash/common/object.d.ts:446

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): [`ObjectChain`](ObjectChain.md)\<`Error`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type Parameters

• **TResult**

#### Parameters

• ...**args**: `any`[]

#### Returns

[`ObjectChain`](ObjectChain.md)\<`Error`\> \| [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.attempt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`attempt`](LoDashExplicitWrapper.md#attempt)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bind`](LoDashExplicitWrapper.md#bind)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindAll`](LoDashExplicitWrapper.md#bindall)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`bindKey`](LoDashExplicitWrapper.md#bindkey)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:139

---

### camelCase()

> **camelCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.camelCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`camelCase`](LoDashExplicitWrapper.md#camelcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:22

---

### capitalize()

> **capitalize**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.capitalize

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`capitalize`](LoDashExplicitWrapper.md#capitalize)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:44

---

### castArray()

> **castArray**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.castArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:49

---

### ceil()

> **ceil**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.ceil

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`ceil`](LoDashExplicitWrapper.md#ceil)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:46

---

### chain()

> **chain**(): `this`

#### Returns

`this`

#### See

\_.chain

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`chain`](LoDashExplicitWrapper.md#chain)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:75

---

### chunk()

> **chunk**(`size`?): [`CollectionChain`](CollectionChain.md)\<`T`[]\>

#### Parameters

• **size?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`[]\>

#### See

\_.chunk

#### Defined in

node_modules/@types/lodash/common/array.d.ts:24

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:54

#### clamp(upper)

> **clamp**(`upper`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **upper**: `number`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.clamp

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clamp`](LoDashExplicitWrapper.md#clamp)

##### Defined in

node_modules/@types/lodash/common/number.d.ts:58

---

### clone()

> **clone**(): `this`

#### Returns

`this`

#### See

\_.clone

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`clone`](LoDashExplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:131

---

### cloneDeep()

> **cloneDeep**(): `this`

#### Returns

`this`

#### See

\_.cloneDeep

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeep`](LoDashExplicitWrapper.md#clonedeep)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:135

---

### cloneDeepWith()

#### cloneDeepWith(customizer)

> **cloneDeepWith**(`customizer`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### Parameters

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`[]\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:139

#### cloneDeepWith()

> **cloneDeepWith**(): `this`

##### Returns

`this`

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneDeepWith`](LoDashExplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:143

---

### cloneWith()

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult** _extends_ `null` \| `string` \| `number` \| `boolean` \| `object`

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`TResult`\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:147

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): [`CollectionChain`](CollectionChain.md)\<`T`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`undefined` \| `TResult`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:151

#### cloneWith()

> **cloneWith**(): `this`

##### Returns

`this`

##### See

\_.cloneWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`cloneWith`](LoDashExplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:155

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### See

\_.commit

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`commit`](LoDashExplicitWrapper.md#commit)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:88

---

### compact()

> **compact**():
> [`CollectionChain`](CollectionChain.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### See

\_.compact

#### Defined in

node_modules/@types/lodash/common/array.d.ts:49

---

### concat()

> **concat**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**values**: [`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.concat

#### Defined in

node_modules/@types/lodash/common/array.d.ts:100

---

### conforms()

> **conforms**(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

\_.conforms

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conforms`](LoDashExplicitWrapper.md#conforms)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:106

---

### conformsTo()

> **conformsTo**(`source`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **source**: `T` _extends_ (`arg`) => `any` ? `A` : `any`[]

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.conformsTo

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`conformsTo`](LoDashExplicitWrapper.md#conformsto)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:221

---

### constant()

> **constant**(): [`FunctionChain`](FunctionChain.md)\<() => `T`[]\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<() => `T`[]\>

#### See

\_.constant

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`constant`](LoDashExplicitWrapper.md#constant)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:128

---

### countBy()

> **countBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

\_.countBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:59

---

### deburr()

> **deburr**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.deburr

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`deburr`](LoDashExplicitWrapper.md#deburr)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:67

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **defaultValue**: `T`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.defaultTo

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:161

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): [`CollectionChain`](CollectionChain.md)\<`T`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### Type Parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### See

\_.defaultTo

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defaultTo`](LoDashExplicitWrapper.md#defaultto)

##### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`defer`](LoDashExplicitWrapper.md#defer)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`delay`](LoDashExplicitWrapper.md#delay)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:498

---

### difference()

> **difference**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.difference

#### Defined in

node_modules/@types/lodash/common/array.d.ts:129

---

### differenceBy()

#### differenceBy(values1, iteratee)

> **differenceBy**\<`T2`\>(`values1`, `iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.differenceBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:182

#### differenceBy(values)

> **differenceBy**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.differenceBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:186

---

### differenceWith()

#### differenceWith(values, comparator)

> **differenceWith**\<`T2`\>(`values`, `comparator`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.differenceWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:233

#### differenceWith(values)

> **differenceWith**\<`T2`, `T3`, `T4`\>(...`values`):
> [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type Parameters

• **T2**

• **T3**

• **T4**

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.differenceWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:237

---

### divide()

> **divide**(`divisor`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **divisor**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.divide

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`divide`](LoDashExplicitWrapper.md#divide)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:69

---

### drop()

> **drop**(`n`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.drop

#### Defined in

node_modules/@types/lodash/common/array.d.ts:259

---

### dropRight()

> **dropRight**(`n`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.dropRight

#### Defined in

node_modules/@types/lodash/common/array.d.ts:281

---

### dropRightWhile()

> **dropRightWhile**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.dropRightWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:304

---

### dropWhile()

> **dropWhile**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.dropWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:327

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`endsWith`](LoDashExplicitWrapper.md#endswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:91

---

### entries()

> **entries**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### See

\_.entries

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entries`](LoDashExplicitWrapper.md#entries)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:610

---

### entriesIn()

> **entriesIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `any`]\>

#### See

\_.entriesIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`entriesIn`](LoDashExplicitWrapper.md#entriesin)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`eq`](LoDashExplicitWrapper.md#eq)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:266

---

### escape()

> **escape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.escape

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escape`](LoDashExplicitWrapper.md#escape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:124

---

### escapeRegExp()

> **escapeRegExp**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.escapeRegExp

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`escapeRegExp`](LoDashExplicitWrapper.md#escaperegexp)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:147

---

### every()

> **every**(`predicate`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.every

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:188

---

### fill()

> **fill**\<`U`\>(`value`, `start`?, `end`?): [`CollectionChain`](CollectionChain.md)\<`T` \| `U`\>

#### Type Parameters

• **U**

#### Parameters

• **value**: `U`

• **start?**: `number`

• **end?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T` \| `U`\>

#### See

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:365

---

### filter()

#### filter(predicate)

> **filter**\<`S`\>(`predicate`): [`CollectionChain`](CollectionChain.md)\<`S`\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`S`\>

##### See

\_.filter

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:265

#### filter(predicate)

> **filter**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.filter

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:269

---

### find()

#### find(predicate, fromIndex)

> **find**\<`S`\>(`predicate`, `fromIndex`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`S`\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`S`\>

##### See

\_.find

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:329

#### find(predicate, fromIndex)

> **find**(`predicate`?, `fromIndex`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

\_.find

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:333

---

### findIndex()

> **findIndex**(`predicate`?, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.findIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:389

---

### findKey()

> **findKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.findKey

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findKey`](LoDashExplicitWrapper.md#findkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:823

---

### findLast()

#### findLast(predicate, fromIndex)

> **findLast**\<`S`\>(`predicate`, `fromIndex`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`S`\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`S`\>

##### See

\_.findLast

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:392

#### findLast(predicate, fromIndex)

> **findLast**(`predicate`?, `fromIndex`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

\_.findLast

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:396

---

### findLastIndex()

> **findLastIndex**(`predicate`?, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.findLastIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:412

---

### findLastKey()

> **findLastKey**(`predicate`?): [`StringNullableChain`](StringNullableChain.md)

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

[`StringNullableChain`](StringNullableChain.md)

#### See

\_.findLastKey

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`findLastKey`](LoDashExplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:845

---

### first()

> **first**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.first

#### Defined in

node_modules/@types/lodash/common/array.d.ts:448

---

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:502

#### flatMap(iteratee)

> **flatMap**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:506

#### flatMap()

> **flatMap**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
> [`CollectionChain`](CollectionChain.md)\<`U`\> : [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
[`CollectionChain`](CollectionChain.md)\<`U`\> : [`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:510

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:625

#### flatMapDeep(iteratee)

> **flatMapDeep**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:629

#### flatMapDeep()

> **flatMapDeep**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:633

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.flatMapDepth

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:749

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**(`iteratee`, `depth`?): [`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

• **depth?**: `number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### See

\_.flatMapDepth

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:753

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **depth?**: `number`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.flatMapDepth

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:757

---

### flatten()

> **flatten**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
> [`CollectionChain`](CollectionChain.md)\<`U`\> : [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
[`CollectionChain`](CollectionChain.md)\<`U`\> : [`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.flatten

#### Defined in

node_modules/@types/lodash/common/array.d.ts:489

---

### flattenDeep()

> **flattenDeep**(): `T` _extends_
> [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
> [`CollectionChain`](CollectionChain.md)\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> :
> [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

`T` _extends_ [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
[`CollectionChain`](CollectionChain.md)\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> :
[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.flattenDeep

#### Defined in

node_modules/@types/lodash/common/array.d.ts:513

---

### flattenDepth()

> **flattenDepth**(`depth`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **depth?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.flattenDepth

#### Defined in

node_modules/@types/lodash/common/array.d.ts:535

---

### floor()

> **floor**(`precision`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **precision?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.floor

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`floor`](LoDashExplicitWrapper.md#floor)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:92

---

### forEach()

> **forEach**(`iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.forEach

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:856

---

### forEachRight()

> **forEachRight**(`iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.forEachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:937

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

\_.forIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forIn`](LoDashExplicitWrapper.md#forin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:873

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

\_.forInRight

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forInRight`](LoDashExplicitWrapper.md#forinright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:899

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

\_.forOwn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwn`](LoDashExplicitWrapper.md#forown)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:927

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### See

\_.forOwnRight

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`forOwnRight`](LoDashExplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:953

---

### fromPairs()

> **fromPairs**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
> [[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
[[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### See

\_.fromPairs

#### Defined in

node_modules/@types/lodash/common/array.d.ts:566

---

### functions()

> **functions**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.functions

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functions`](LoDashExplicitWrapper.md#functions)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:987

---

### functionsIn()

> **functionsIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.functionsIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`functionsIn`](LoDashExplicitWrapper.md#functionsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1021

---

### get()

#### get(path)

> **get**(`path`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### Parameters

• **path**: `number`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1300

#### get(path, defaultValue)

> **get**\<`TDefault`\>(`path`, `defaultValue`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\> \|
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### Type Parameters

• **TDefault**

##### Parameters

• **path**: `number`

• **defaultValue**: `TDefault`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\> \|
[`ExpChain`](../type-aliases/ExpChain.md)\<`TDefault`\>

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1304

---

### groupBy()

> **groupBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### See

\_.groupBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:989

---

### gt()

> **gt**(`other`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **other**: `any`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.gt

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gt`](LoDashExplicitWrapper.md#gt)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`gte`](LoDashExplicitWrapper.md#gte)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`has`](LoDashExplicitWrapper.md#has)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`hasIn`](LoDashExplicitWrapper.md#hasin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1382

---

### head()

> **head**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.head

#### Defined in

node_modules/@types/lodash/common/array.d.ts:607

---

### identity()

> **identity**(): `this`

#### Returns

`this`

#### See

\_.identity

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`identity`](LoDashExplicitWrapper.md#identity)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:393

---

### includes()

> **includes**(`target`, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **target**: `T`

• **fromIndex?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.includes

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1037

---

### indexOf()

> **indexOf**(`value`, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

• **fromIndex?**: `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.indexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:642

---

### initial()

> **initial**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.initial

#### Defined in

node_modules/@types/lodash/common/array.d.ts:663

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`inRange`](LoDashExplicitWrapper.md#inrange)

#### Defined in

node_modules/@types/lodash/common/number.d.ts:83

---

### intersection()

> **intersection**(...`arrays`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.intersection

#### Defined in

node_modules/@types/lodash/common/array.d.ts:685

---

### intersectionBy()

#### intersectionBy(values, iteratee)

> **intersectionBy**\<`T2`\>(`values`, `iteratee`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.intersectionBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:738

#### intersectionBy(values)

> **intersectionBy**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.intersectionBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:742

---

### intersectionWith()

#### intersectionWith(values, comparator)

> **intersectionWith**\<`T2`\>(`values`, `comparator`):
> [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.intersectionWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:790

#### intersectionWith(values)

> **intersectionWith**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.intersectionWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:794

---

### invert()

> **invert**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

\_.invert

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invert`](LoDashExplicitWrapper.md#invert)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1405

---

### invertBy()

> **invertBy**(`iteratee`?):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1457

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invoke`](LoDashExplicitWrapper.md#invoke)

#### Defined in

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1075

#### invokeMap(method, args)

> **invokeMap**\<`TResult`\>(`method`, ...`args`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **method**

• ...**args**: `any`[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.invokeMap

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`invokeMap`](LoDashExplicitWrapper.md#invokemap)

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1079

---

### isArguments()

> **isArguments**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArguments

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArguments`](LoDashExplicitWrapper.md#isarguments)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:334

---

### isArray()

> **isArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArray`](LoDashExplicitWrapper.md#isarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:360

---

### isArrayBuffer()

> **isArrayBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayBuffer

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayBuffer`](LoDashExplicitWrapper.md#isarraybuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:382

---

### isArrayLike()

> **isArrayLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayLike

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLike`](LoDashExplicitWrapper.md#isarraylike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:428

---

### isArrayLikeObject()

> **isArrayLikeObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isArrayLikeObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isArrayLikeObject`](LoDashExplicitWrapper.md#isarraylikeobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:473

---

### isBoolean()

> **isBoolean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isBoolean

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBoolean`](LoDashExplicitWrapper.md#isboolean)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:495

---

### isBuffer()

> **isBuffer**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isBuffer

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isBuffer`](LoDashExplicitWrapper.md#isbuffer)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:517

---

### isDate()

> **isDate**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isDate

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isDate`](LoDashExplicitWrapper.md#isdate)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:539

---

### isElement()

> **isElement**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isElement

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isElement`](LoDashExplicitWrapper.md#iselement)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:561

---

### isEmpty()

> **isEmpty**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isEmpty

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEmpty`](LoDashExplicitWrapper.md#isempty)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqual`](LoDashExplicitWrapper.md#isequal)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isEqualWith`](LoDashExplicitWrapper.md#isequalwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:678

---

### isError()

> **isError**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isError

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isError`](LoDashExplicitWrapper.md#iserror)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:701

---

### isFinite()

> **isFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isFinite

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFinite`](LoDashExplicitWrapper.md#isfinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:725

---

### isFunction()

> **isFunction**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isFunction

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isFunction`](LoDashExplicitWrapper.md#isfunction)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:747

---

### isInteger()

> **isInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isInteger`](LoDashExplicitWrapper.md#isinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:785

---

### isLength()

> **isLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isLength

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isLength`](LoDashExplicitWrapper.md#islength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:823

---

### isMap()

> **isMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isMap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMap`](LoDashExplicitWrapper.md#ismap)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatch`](LoDashExplicitWrapper.md#ismatch)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isMatchWith`](LoDashExplicitWrapper.md#ismatchwith)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:927

---

### isNaN()

> **isNaN**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNaN

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNaN`](LoDashExplicitWrapper.md#isnan)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:951

---

### isNative()

> **isNative**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNative

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNative`](LoDashExplicitWrapper.md#isnative)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:973

---

### isNil()

> **isNil**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNil

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNil`](LoDashExplicitWrapper.md#isnil)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1006

---

### isNull()

> **isNull**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNull

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNull`](LoDashExplicitWrapper.md#isnull)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1028

---

### isNumber()

> **isNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isNumber

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isNumber`](LoDashExplicitWrapper.md#isnumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1052

---

### isObject()

> **isObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObject`](LoDashExplicitWrapper.md#isobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1075

---

### isObjectLike()

> **isObjectLike**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isObjectLike

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isObjectLike`](LoDashExplicitWrapper.md#isobjectlike)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1112

---

### isPlainObject()

> **isPlainObject**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isPlainObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isPlainObject`](LoDashExplicitWrapper.md#isplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1137

---

### isRegExp()

> **isRegExp**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isRegExp

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isRegExp`](LoDashExplicitWrapper.md#isregexp)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1159

---

### isSafeInteger()

> **isSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSafeInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSafeInteger`](LoDashExplicitWrapper.md#issafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1198

---

### isSet()

> **isSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSet

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSet`](LoDashExplicitWrapper.md#isset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1220

---

### isString()

> **isString**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isString

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isString`](LoDashExplicitWrapper.md#isstring)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1242

---

### isSymbol()

> **isSymbol**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isSymbol

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isSymbol`](LoDashExplicitWrapper.md#issymbol)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1272

---

### isTypedArray()

> **isTypedArray**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isTypedArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isTypedArray`](LoDashExplicitWrapper.md#istypedarray)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1294

---

### isUndefined()

> **isUndefined**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isUndefined

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isUndefined`](LoDashExplicitWrapper.md#isundefined)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1316

---

### isWeakMap()

> **isWeakMap**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isWeakMap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakMap`](LoDashExplicitWrapper.md#isweakmap)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1338

---

### isWeakSet()

> **isWeakSet**(): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.isWeakSet

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`isWeakSet`](LoDashExplicitWrapper.md#isweakset)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1360

---

### iteratee()

> **iteratee**(): [`FunctionChain`](FunctionChain.md)\<(`o`) => `boolean`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`o`) => `boolean`\>

#### See

\_.iteratee

#### Defined in

node_modules/@types/lodash/common/util.d.ts:464

---

### join()

> **join**(`separator`?): [`StringChain`](StringChain.md)

#### Parameters

• **separator?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.join

#### Defined in

node_modules/@types/lodash/common/array.d.ts:834

---

### kebabCase()

> **kebabCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.kebabCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`kebabCase`](LoDashExplicitWrapper.md#kebabcase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:169

---

### keyBy()

> **keyBy**(`iteratee`?): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.keyBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1131

---

### keys()

> **keys**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.keys

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keys`](LoDashExplicitWrapper.md#keys)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1507

---

### keysIn()

> **keysIn**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.keysIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`keysIn`](LoDashExplicitWrapper.md#keysin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1530

---

### last()

> **last**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.last

#### Defined in

node_modules/@types/lodash/common/array.d.ts:855

---

### lastIndexOf()

> **lastIndexOf**(`value`, `fromIndex`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

• **fromIndex?**: `number` \| `true`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.lastIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:896

---

### lowerCase()

> **lowerCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.lowerCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerCase`](LoDashExplicitWrapper.md#lowercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:191

---

### lowerFirst()

> **lowerFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.lowerFirst

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lowerFirst`](LoDashExplicitWrapper.md#lowerfirst)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lt`](LoDashExplicitWrapper.md#lt)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`lte`](LoDashExplicitWrapper.md#lte)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1406

---

### map()

#### map(key)

> **map**\<`K`\>(`key`): [`CollectionChain`](CollectionChain.md)\<`T`\[`K`\]\>

##### Type Parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **key**: `K`

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\[`K`\]\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1261

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1265

#### map(iteratee)

> **map**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`any`\>

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1269

#### map(iteratee)

> **map**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`boolean`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1273

#### map()

> **map**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1277

---

### mapKeys()

> **mapKeys**(`iteratee`?): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **iteratee?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.mapKeys

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1563

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`, `TResult`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1705

#### mapValues(iteratee)

> **mapValues**\<`TKey`\>(`iteratee`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### Type Parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **iteratee**: `TKey`

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1709

#### mapValues(iteratee)

> **mapValues**(`iteratee`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### Parameters

• **iteratee**: `object`

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1713

#### mapValues(iteratee)

> **mapValues**(`iteratee`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### Parameters

• **iteratee**: `string`

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1717

#### mapValues()

> **mapValues**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1721

---

### matches()

> **matches**\<`V`\>(): [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### Type Parameters

• **V**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

#### See

\_.matches

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matches`](LoDashExplicitWrapper.md#matches)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:513

---

### matchesProperty()

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`\>(`srcValue`): [`FunctionChain`](FunctionChain.md)\<(`value`) =>
> `boolean`\>

##### Type Parameters

• **SrcValue**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:547

#### matchesProperty(srcValue)

> **matchesProperty**\<`SrcValue`, `Value`\>(`srcValue`):
> [`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### Type Parameters

• **SrcValue**

• **Value**

##### Parameters

• **srcValue**: `SrcValue`

##### Returns

[`FunctionChain`](FunctionChain.md)\<(`value`) => `boolean`\>

##### See

\_.matchesProperty

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`matchesProperty`](LoDashExplicitWrapper.md#matchesproperty)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:551

---

### max()

> **max**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.max

#### Defined in

node_modules/@types/lodash/common/math.d.ts:116

---

### maxBy()

> **maxBy**(`iteratee`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.maxBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:152

---

### mean()

> **mean**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.mean

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mean`](LoDashExplicitWrapper.md#mean)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:179

---

### meanBy()

> **meanBy**(`iteratee`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.meanBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:207

---

### method()

> **method**(...`args`): [`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`object`) => `any`\>

#### See

\_.method

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`method`](LoDashExplicitWrapper.md#method)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`methodOf`](LoDashExplicitWrapper.md#methodof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:599

---

### min()

> **min**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.min

#### Defined in

node_modules/@types/lodash/common/math.d.ts:231

---

### minBy()

> **minBy**(`iteratee`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.minBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:267

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

##### Defined in

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`mixin`](LoDashExplicitWrapper.md#mixin)

##### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`multiply`](LoDashExplicitWrapper.md#multiply)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:289

---

### noConflict()

> **noConflict**():
> [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`LoDashStatic`](LoDashStatic.md)\>

#### See

\_.noConflict

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noConflict`](LoDashExplicitWrapper.md#noconflict)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`noop`](LoDashExplicitWrapper.md#noop)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:688

---

### now()

> **now**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.now

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`now`](LoDashExplicitWrapper.md#now)

#### Defined in

node_modules/@types/lodash/common/date.d.ts:21

---

### nth()

> **nth**(`n`?): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.nth

#### Defined in

node_modules/@types/lodash/common/array.d.ts:918

---

### nthArg()

> **nthArg**(): [`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `any`\>

#### See

\_.nthArg

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`nthArg`](LoDashExplicitWrapper.md#ntharg)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:710

---

### omit()

> **omit**(...`paths`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**paths**:
[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.omit

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1988

---

### omitBy()

> **omitBy**(`predicate`?): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.omitBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2043

---

### orderBy()

> **orderBy**(`iteratees`?, `orders`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratees?**: [`Many`](../type-aliases/Many.md)\<PropertyName \| PartialShallow\<T\> \|
ListIterator\<T, unknown\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.orderBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1357

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `TResult`[]\>

#### Type Parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `TResult`[]\>

#### See

\_.over

#### Defined in

node_modules/@types/lodash/common/util.d.ts:739

---

### overEvery()

> **overEvery**\<`TArgs`\>(...`iteratees`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `boolean`\>

#### Type Parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `boolean`\>

#### See

\_.overEvery

#### Defined in

node_modules/@types/lodash/common/util.d.ts:778

---

### overSome()

> **overSome**\<`TArgs`\>(...`iteratees`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `boolean`\>

#### Type Parameters

• **TArgs**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `boolean`\>[]

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `boolean`\>

#### See

\_.overSome

#### Defined in

node_modules/@types/lodash/common/util.d.ts:817

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`pad`](LoDashExplicitWrapper.md#pad)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padEnd`](LoDashExplicitWrapper.md#padend)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`padStart`](LoDashExplicitWrapper.md#padstart)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`parseInt`](LoDashExplicitWrapper.md#parseint)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:314

---

### partition()

#### partition(callback)

> **partition**\<`U`\>(`callback`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`U`[],
> `Exclude`\<`T`, `U`\>[]]\>

##### Type Parameters

• **U**

##### Parameters

• **callback**: [`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`U`[], `Exclude`\<`T`, `U`\>[]]\>

##### See

\_.partition

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1423

#### partition(callback)

> **partition**(`callback`): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`T`[], `T`[]]\>

##### Parameters

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<[`T`[], `T`[]]\>

##### See

\_.partition

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1427

---

### pickBy()

#### pickBy(predicate)

> **pickBy**\<`S`\>(`predicate`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`,
`S`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

\_.pickBy

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2151

#### pickBy(predicate)

> **pickBy**(`predicate`?): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.pickBy

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2155

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`plant`](LoDashExplicitWrapper.md#plant)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:101

---

### pop()

> **pop**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:184

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

#### Type Parameters

• **TObj**

• **TResult**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(`obj`) => `TResult`\>

#### See

\_.property

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`property`](LoDashExplicitWrapper.md#property)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:845

---

### propertyOf()

> **propertyOf**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<(`path`) => `any`\>

#### See

\_.propertyOf

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`propertyOf`](LoDashExplicitWrapper.md#propertyof)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:868

---

### pull()

> **pull**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**values**: `T`[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.pull

#### Defined in

node_modules/@types/lodash/common/array.d.ts:946

---

### pullAll()

> **pullAll**(`values`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.pullAll

#### Defined in

node_modules/@types/lodash/common/array.d.ts:982

---

### pullAllBy()

> **pullAllBy**\<`T2`\>(`values`?, `iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Type Parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1029

---

### pullAllWith()

> **pullAllWith**\<`T2`\>(`values`?, `comparator`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Type Parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator?**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.pullAllWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1076

---

### pullAt()

> **pullAt**(...`indexes`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.pullAt

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1105

---

### push()

> **push**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:185

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

##### Defined in

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`random`](LoDashExplicitWrapper.md#random)

##### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`range`](LoDashExplicitWrapper.md#range)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`rangeRight`](LoDashExplicitWrapper.md#rangeright)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:950

---

### reduce()

#### reduce(callback, accumulator)

> **reduce**\<`TResult`\>(`callback`, `accumulator`):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.reduce

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1493

#### reduce(callback)

> **reduce**(`callback`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

\_.reduce

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1497

---

### reduceRight()

#### reduceRight(callback, accumulator)

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.reduceRight

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1564

#### reduceRight(callback)

> **reduceRight**(`callback`): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

##### See

\_.reduceRight

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1568

---

### reject()

> **reject**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.reject

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1633

---

### remove()

> **remove**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.remove

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1130

---

### repeat()

> **repeat**(`n`?): [`StringChain`](StringChain.md)

#### Parameters

• **n?**: `number`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.repeat

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`repeat`](LoDashExplicitWrapper.md#repeat)

#### Defined in

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

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

##### Defined in

node_modules/@types/lodash/common/string.d.ts:369

#### replace(replacement)

> **replace**(`replacement`): [`StringChain`](StringChain.md)

##### Parameters

• **replacement**: `string` \| [`ReplaceFunction`](../type-aliases/ReplaceFunction.md)

##### Returns

[`StringChain`](StringChain.md)

##### See

\_.replace

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`replace`](LoDashExplicitWrapper.md#replace)

##### Defined in

node_modules/@types/lodash/common/string.d.ts:373

---

### result()

> **result**\<`TResult`\>(`path`, `defaultValue`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type Parameters

• **TResult**

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `TResult` \| (...`args`) => `TResult`

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.result

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`result`](LoDashExplicitWrapper.md#result)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2189

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

#### See

\_.reverse

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`reverse`](LoDashExplicitWrapper.md#reverse)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`round`](LoDashExplicitWrapper.md#round)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:312

---

### sample()

> **sample**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### See

\_.sample

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1692

---

### sampleSize()

> **sampleSize**(`n`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.sampleSize

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1748

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2222

#### set(path, value)

> **set**\<`TResult`\>(`path`, `value`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.set

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`set`](LoDashExplicitWrapper.md#set)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2226

---

### setWith()

#### setWith(path, value, customizer)

> **setWith**(`path`, `value`, `customizer`?): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

`this`

##### See

\_.setWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2261

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`setWith`](LoDashExplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2265

---

### shift()

> **shift**(): [`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:186

---

### shuffle()

> **shuffle**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.shuffle

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1803

---

### size()

> **size**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.size

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`size`](LoDashExplicitWrapper.md#size)

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1831

---

### slice()

> **slice**(`start`?, `end`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **start?**: `number`

• **end?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.slice

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1175

---

### snakeCase()

> **snakeCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.snakeCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`snakeCase`](LoDashExplicitWrapper.md#snakecase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:395

---

### some()

> **some**(`predicate`?): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.some

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1864

---

### sort()

> **sort**(`compareFn`?): `this`

#### Parameters

• **compareFn?**

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:187

---

### sortBy()

> **sortBy**(...`iteratees`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**iteratees**:
[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.sortBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1926

---

### sortedIndex()

#### sortedIndex(value)

> **sortedIndex**(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **value**: `T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.sortedIndex

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1206

#### sortedIndex(value)

> **sortedIndex**(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### Parameters

• **value**: `T`

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

##### See

\_.sortedIndex

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1237

---

### sortedIndexBy()

> **sortedIndexBy**(`value`, `iteratee`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sortedIndexBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1273

---

### sortedIndexOf()

> **sortedIndexOf**(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sortedIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1301

---

### sortedLastIndex()

> **sortedLastIndex**(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sortedLastIndex

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1330

---

### sortedLastIndexBy()

> **sortedLastIndexBy**(`value`, `iteratee`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sortedLastIndexBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1361

---

### sortedLastIndexOf()

> **sortedLastIndexOf**(`value`): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **value**: `T`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sortedLastIndexOf

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1389

---

### sortedUniq()

> **sortedUniq**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.sortedUniq

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1416

---

### sortedUniqBy()

> **sortedUniqBy**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.sortedUniqBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1444

---

### splice()

> **splice**(`start`, `deleteCount`?, ...`items`?): `this`

#### Parameters

• **start**: `number`

• **deleteCount?**: `number`

• ...**items?**: `T`[]

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:188

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`split`](LoDashExplicitWrapper.md#split)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:425

---

### startCase()

> **startCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.startCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startCase`](LoDashExplicitWrapper.md#startcase)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`startsWith`](LoDashExplicitWrapper.md#startswith)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:471

---

### stubArray()

> **stubArray**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

#### See

\_.stubArray

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubArray`](LoDashExplicitWrapper.md#stubarray)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:987

---

### stubFalse()

#### stubFalse()

> **stubFalse**(): [`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`false`\>

##### See

\_.stubFalse

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1008

#### stubFalse()

> **stubFalse**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`false`\>

##### See

\_.stubFalse

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubFalse`](LoDashExplicitWrapper.md#stubfalse)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1218

---

### stubObject()

> **stubObject**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`any`\>

#### See

\_.stubObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubObject`](LoDashExplicitWrapper.md#stubobject)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1029

---

### stubString()

> **stubString**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.stubString

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubString`](LoDashExplicitWrapper.md#stubstring)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1050

---

### stubTrue()

#### stubTrue()

> **stubTrue**(): [`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`true`\>

##### See

\_.stubTrue

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1071

#### stubTrue()

> **stubTrue**(): [`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### Returns

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md)\<`true`\>

##### See

\_.stubTrue

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`stubTrue`](LoDashExplicitWrapper.md#stubtrue)

##### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`subtract`](LoDashExplicitWrapper.md#subtract)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:340

---

### sum()

> **sum**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sum

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`sum`](LoDashExplicitWrapper.md#sum)

#### Defined in

node_modules/@types/lodash/common/math.d.ts:367

---

### sumBy()

> **sumBy**(`iteratee`?): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Parameters

• **iteratee?**: `string` \| (`value`) => `number`

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.sumBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:403

---

### tail()

> **tail**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.tail

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1465

---

### take()

> **take**(`n`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.take

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1487

---

### takeRight()

> **takeRight**(`n`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.takeRight

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1509

---

### takeRightWhile()

> **takeRightWhile**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.takeRightWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1532

---

### takeWhile()

> **takeWhile**(`predicate`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.takeWhile

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1555

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

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`tap`](LoDashExplicitWrapper.md#tap)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`template`](LoDashExplicitWrapper.md#template)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:526

---

### thru()

> **thru**\<`TResult`\>(`interceptor`): [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### Type Parameters

• **TResult**

#### Parameters

• **interceptor**

#### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

#### See

\_.thru

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`thru`](LoDashExplicitWrapper.md#thru)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:208

---

### times()

#### times(iteratee)

> **times**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.times

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1103

#### times()

> **times**(): [`CollectionChain`](CollectionChain.md)\<`number`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`number`\>

##### See

\_.times

##### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`times`](LoDashExplicitWrapper.md#times)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:1107

---

### toArray()

> **toArray**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1460

---

### toFinite()

> **toFinite**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toFinite

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toFinite`](LoDashExplicitWrapper.md#tofinite)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1503

---

### toInteger()

> **toInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toInteger`](LoDashExplicitWrapper.md#tointeger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1541

---

### toJSON()

> **toJSON**(): `T`[]

#### Returns

`T`[]

#### See

\_.toJSON

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toJSON`](LoDashExplicitWrapper.md#tojson)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:127

---

### toLength()

> **toLength**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toLength

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLength`](LoDashExplicitWrapper.md#tolength)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1580

---

### toLower()

> **toLower**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.toLower

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toLower`](LoDashExplicitWrapper.md#tolower)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:548

---

### toNumber()

> **toNumber**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toNumber

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toNumber`](LoDashExplicitWrapper.md#tonumber)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1616

---

### toPairs()

> **toPairs**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `T`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `T`]\>

#### See

\_.toPairs

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairs`](LoDashExplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2290

---

### toPairsIn()

> **toPairsIn**(): [`CollectionChain`](CollectionChain.md)\<[`string`, `T`]\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<[`string`, `T`]\>

#### See

\_.toPairsIn

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPairsIn`](LoDashExplicitWrapper.md#topairsin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2315

---

### toPath()

> **toPath**(): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.toPath

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPath`](LoDashExplicitWrapper.md#topath)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1146

---

### toPlainObject()

> **toPlainObject**(): [`ObjectChain`](ObjectChain.md)\<`any`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`any`\>

#### See

\_.toPlainObject

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toPlainObject`](LoDashExplicitWrapper.md#toplainobject)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1639

---

### toSafeInteger()

> **toSafeInteger**(): [`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`number`\>

#### See

\_.toSafeInteger

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toSafeInteger`](LoDashExplicitWrapper.md#tosafeinteger)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1676

---

### toUpper()

> **toUpper**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.toUpper

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`toUpper`](LoDashExplicitWrapper.md#toupper)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:570

---

### transform()

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**: [`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`,
`TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ExpChain`](../type-aliases/ExpChain.md)\<`TResult`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2375

#### transform()

> **transform**(): [`CollectionChain`](CollectionChain.md)\<`any`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`any`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2379

---

### trim()

> **trim**(`chars`?): [`StringChain`](StringChain.md)

#### Parameters

• **chars?**: `string`

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.trim

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trim`](LoDashExplicitWrapper.md#trim)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimEnd`](LoDashExplicitWrapper.md#trimend)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`trimStart`](LoDashExplicitWrapper.md#trimstart)

#### Defined in

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`truncate`](LoDashExplicitWrapper.md#truncate)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:689

---

### unescape()

> **unescape**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.unescape

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unescape`](LoDashExplicitWrapper.md#unescape)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:715

---

### union()

> **union**(...`arrays`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.union

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1577

---

### unionBy()

#### unionBy(arrays2, iteratee)

> **unionBy**(`arrays2`, `iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.unionBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1621

#### unionBy(iteratee)

> **unionBy**(...`iteratee`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.unionBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1625

---

### unionWith()

#### unionWith(arrays2, comparator)

> **unionWith**(`arrays2`, `comparator`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.unionWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1669

#### unionWith(comparator)

> **unionWith**(...`comparator`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.unionWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1673

---

### uniq()

> **uniq**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.uniq

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1702

---

### uniqBy()

> **uniqBy**(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.uniqBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1735

---

### uniqueId()

> **uniqueId**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.uniqueId

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`uniqueId`](LoDashExplicitWrapper.md#uniqueid)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:1168

---

### uniqWith()

> **uniqWith**(`comparator`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.uniqWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1766

---

### unset()

> **unset**(`path`): [`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

#### Returns

[`PrimitiveChain`](PrimitiveChain.md)\<`boolean`\>

#### See

\_.unset

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`unset`](LoDashExplicitWrapper.md#unset)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2417

---

### unshift()

> **unshift**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:189

---

### unzip()

> **unzip**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`CollectionChain`](CollectionChain.md)\<`U`[]\> : `unknown`

#### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
[`CollectionChain`](CollectionChain.md)\<`U`[]\> : `unknown`

#### See

\_.unzip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1788

---

### unzipWith()

#### unzipWith(iteratee)

> **unzipWith**\<`TResult`\>(`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.unzipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1819

#### unzipWith()

> **unzipWith**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`CollectionChain`](CollectionChain.md)\<`U`[]\> : `unknown`

##### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
[`CollectionChain`](CollectionChain.md)\<`U`[]\> : `unknown`

##### See

\_.unzipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1823

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

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`update`](LoDashExplicitWrapper.md#update)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2441

---

### upperCase()

> **upperCase**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.upperCase

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperCase`](LoDashExplicitWrapper.md#uppercase)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:737

---

### upperFirst()

> **upperFirst**(): [`StringChain`](StringChain.md)

#### Returns

[`StringChain`](StringChain.md)

#### See

\_.upperFirst

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`upperFirst`](LoDashExplicitWrapper.md#upperfirst)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:759

---

### value()

> **value**(): `T`[]

#### Returns

`T`[]

#### See

\_.value

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`value`](LoDashExplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:147

---

### valueOf()

> **valueOf**(): `T`[]

#### Returns

`T`[]

#### See

\_.valueOf

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`valueOf`](LoDashExplicitWrapper.md#valueof)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:160

---

### without()

> **without**(...`values`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**values**: `T`[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.without

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1845

---

### words()

> **words**(`pattern`?): [`CollectionChain`](CollectionChain.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`CollectionChain`](CollectionChain.md)\<`string`\>

#### See

\_.words

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`words`](LoDashExplicitWrapper.md#words)

#### Defined in

node_modules/@types/lodash/common/string.d.ts:786

---

### wrap()

> **wrap**\<`TArgs`, `TResult`\>(`wrapper`): [`FunctionChain`](FunctionChain.md)\<(...`args`) =>
> `TResult`\>

#### Type Parameters

• **TArgs**

• **TResult**

#### Parameters

• **wrapper**

#### Returns

[`FunctionChain`](FunctionChain.md)\<(...`args`) => `TResult`\>

#### See

\_.wrap

#### Inherited from

[`LoDashExplicitWrapper`](LoDashExplicitWrapper.md).[`wrap`](LoDashExplicitWrapper.md#wrap)

#### Defined in

node_modules/@types/lodash/common/function.d.ts:1453

---

### xor()

> **xor**(...`arrays`): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.xor

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1866

---

### xorBy()

#### xorBy(arrays2, iteratee)

> **xorBy**(`arrays2`, `iteratee`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.xorBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1911

#### xorBy(iteratee)

> **xorBy**(...`iteratee`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.xorBy

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1915

---

### xorWith()

#### xorWith(arrays2, comparator)

> **xorWith**(`arrays2`, `comparator`?): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.xorWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1959

#### xorWith(comparator)

> **xorWith**(...`comparator`): [`CollectionChain`](CollectionChain.md)\<`T`\>

##### Parameters

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

##### See

\_.xorWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1963

---

### zip()

#### zip(arrays2)

> **zip**\<`T2`\>(`arrays2`): [`CollectionChain`](CollectionChain.md)\<[`undefined` \| `T`,
> `undefined` \| `T2`]\>

##### Type Parameters

• **T2**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

[`CollectionChain`](CollectionChain.md)\<[`undefined` \| `T`, `undefined` \| `T2`]\>

##### See

\_.zip

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2005

#### zip(arrays)

> **zip**(...`arrays`): [`CollectionChain`](CollectionChain.md)\<(`undefined` \| `T`)[]\>

##### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<(`undefined` \| `T`)[]\>

##### See

\_.zip

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2009

---

### zipObject()

#### zipObject(values)

> **zipObject**\<`U`\>(`values`):
> [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### Type Parameters

• **U**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`U`\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### See

\_.zipObject

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2040

#### zipObject()

> **zipObject**(): [`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### Returns

[`ObjectChain`](ObjectChain.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### See

\_.zipObject

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2044

---

### zipObjectDeep()

> **zipObjectDeep**(`values`?): [`ObjectChain`](ObjectChain.md)\<`object`\>

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`any`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`object`\>

#### See

\_.zipObjectDeep

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2066

---

### zipWith()

#### zipWith(arrays2, iteratee)

> **zipWith**\<`T2`, `TResult`\>(`arrays2`, `iteratee`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **T2**

• **TResult**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.zipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2117

#### zipWith(arrays2, arrays3, iteratee)

> **zipWith**\<`T2`, `T3`, `TResult`\>(`arrays2`, `arrays3`, `iteratee`):
> [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **T2**

• **T3**

• **TResult**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **iteratee**

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.zipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2121

#### zipWith(iteratee)

> **zipWith**\<`TResult`\>(...`iteratee`): [`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
(...`group`) => `TResult`)[]

##### Returns

[`CollectionChain`](CollectionChain.md)\<`TResult`\>

##### See

\_.zipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2125
