[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Collection\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`[]\>

## Type parameters

• **T**

## Properties

### each()

> **each**: (`iteratee`?) => [`Collection`](Collection.md)\<`T`\>

#### See

\_.each

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### Source

node_modules/@types/lodash/common/collection.d.ts:77

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`Collection`](Collection.md)\<`T`\>

#### See

\_.eachRight

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### Source

node_modules/@types/lodash/common/collection.d.ts:125

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

### at()

> **at**(...`props`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**props**: [`PropertyPath`](../type-aliases/PropertyPath.md)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.at

#### Source

node_modules/@types/lodash/common/object.d.ts:433

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

node_modules/@types/lodash/common/lang.d.ts:19

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

> **chain**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.chain

#### Source

node_modules/@types/lodash/common/seq.d.ts:45

---

### chunk()

> **chunk**(`size`?): [`Collection`](Collection.md)\<`T`[]\>

#### Parameters

• **size?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`[]\>

#### See

\_.chunk

#### Source

node_modules/@types/lodash/common/array.d.ts:18

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

> **clone**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

#### See

\_.clone

#### Source

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `T`[]

#### Returns

`T`[]

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

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`[]\>

##### Returns

`any`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `T`[]

##### Returns

`T`[]

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

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`TResult`\>

##### Returns

`TResult`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `T`[] \| `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`undefined` \| `TResult`\>

##### Returns

`T`[] \| `TResult`

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `T`[]

##### Returns

`T`[]

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

### compact()

> **compact**(): [`Collection`](Collection.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### Returns

[`Collection`](Collection.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### See

\_.compact

#### Source

node_modules/@types/lodash/common/array.d.ts:43

---

### concat()

> **concat**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: [`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.concat

#### Source

node_modules/@types/lodash/common/array.d.ts:82

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

• **source**: `T` _extends_ (`arg`) => `any` ? `A` : `any`[]

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

> **constant**(): [`Function`](Function.md)\<() => `T`[]\>

#### Returns

[`Function`](Function.md)\<() => `T`[]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

#### See

\_.constant

#### Source

node_modules/@types/lodash/common/util.d.ts:122

---

### countBy()

> **countBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

\_.countBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:35

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

> **defaultTo**(`defaultValue`): `T`[]

##### Parameters

• **defaultValue**: `T`[]

##### Returns

`T`[]

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T`[] \| `TDefault`

##### Type parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`T`[] \| `TDefault`

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

### difference()

> **difference**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.difference

#### Source

node_modules/@types/lodash/common/array.d.ts:123

---

### differenceBy()

#### differenceBy(values1, iteratee)

> **differenceBy**\<`T2`\>(`values1`, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

##### Type parameters

• **T2**

##### Parameters

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:172

#### differenceBy(values)

> **differenceBy**(...`values`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceBy

##### Source

node_modules/@types/lodash/common/array.d.ts:176

---

### differenceWith()

#### differenceWith(values, comparator)

> **differenceWith**\<`T2`\>(`values`, `comparator`): [`Collection`](Collection.md)\<`T`\>

##### Type parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceWith

##### Source

node_modules/@types/lodash/common/array.d.ts:223

#### differenceWith(values)

> **differenceWith**\<`T2`, `T3`, `T4`\>(...`values`): [`Collection`](Collection.md)\<`T`\>

##### Type parameters

• **T2**

• **T3**

• **T4**

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceWith

##### Source

node_modules/@types/lodash/common/array.d.ts:227

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

### drop()

> **drop**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.drop

#### Source

node_modules/@types/lodash/common/array.d.ts:253

---

### dropRight()

> **dropRight**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.dropRight

#### Source

node_modules/@types/lodash/common/array.d.ts:275

---

### dropRightWhile()

> **dropRightWhile**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.dropRightWhile

#### Source

node_modules/@types/lodash/common/array.d.ts:298

---

### dropWhile()

> **dropWhile**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.dropWhile

#### Source

node_modules/@types/lodash/common/array.d.ts:321

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

node_modules/@types/lodash/common/object.d.ts:597

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

node_modules/@types/lodash/common/object.d.ts:631

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

### every()

> **every**(`predicate`?): `boolean`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

\_.every

#### Source

node_modules/@types/lodash/common/collection.d.ts:176

---

### fill()

> **fill**\<`U`\>(`value`, `start`?, `end`?): [`Collection`](Collection.md)\<`T` \| `U`\>

#### Type parameters

• **U**

#### Parameters

• **value**: `U`

• **start?**: `number`

• **end?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T` \| `U`\>

#### See

\_.fill

#### Source

node_modules/@types/lodash/common/array.d.ts:359

---

### filter()

#### filter(predicate)

> **filter**\<`S`\>(`predicate`): [`Collection`](Collection.md)\<`S`\>

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Collection`](Collection.md)\<`S`\>

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:233

#### filter(predicate)

> **filter**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:237

---

### find()

#### find(predicate, fromIndex)

> **find**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:309

#### find(predicate, fromIndex)

> **find**(`predicate`?, `fromIndex`?): `undefined` \| `T`

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:313

---

### findIndex()

> **findIndex**(`predicate`?, `fromIndex`?): `number`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

#### Returns

`number`

#### See

\_.findIndex

#### Source

node_modules/@types/lodash/common/array.d.ts:383

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`undefined` \| `string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

#### See

\_.findKey

#### Source

node_modules/@types/lodash/common/object.d.ts:816

---

### findLast()

#### findLast(predicate, fromIndex)

> **findLast**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:372

#### findLast(predicate, fromIndex)

> **findLast**(`predicate`?, `fromIndex`?): `undefined` \| `T`

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:376

---

### findLastIndex()

> **findLastIndex**(`predicate`?, `fromIndex`?): `number`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

• **fromIndex?**: `number`

#### Returns

`number`

#### See

\_.findLastIndex

#### Source

node_modules/@types/lodash/common/array.d.ts:406

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`undefined` \| `string`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

#### See

\_.findLastKey

#### Source

node_modules/@types/lodash/common/object.d.ts:838

---

### first()

> **first**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.first

#### Source

node_modules/@types/lodash/common/array.d.ts:442

---

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:454

#### flatMap(iteratee)

> **flatMap**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:458

#### flatMap()

> **flatMap**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`\> : [`Collection`](Collection.md)\<`T`\>

##### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`\> :
[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:462

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:577

#### flatMapDeep(iteratee)

> **flatMapDeep**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:581

#### flatMapDeep()

> **flatMapDeep**(): [`Collection`](Collection.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:585

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:701

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**(`iteratee`, `depth`?): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:705

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:709

---

### flatten()

> **flatten**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`\> : [`Collection`](Collection.md)\<`T`\>

#### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`\> :
[`Collection`](Collection.md)\<`T`\>

#### See

\_.flatten

#### Source

node_modules/@types/lodash/common/array.d.ts:483

---

### flattenDeep()

> **flattenDeep**(): `T` _extends_
> [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
> [`Collection`](Collection.md)\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> :
> [`Collection`](Collection.md)\<`T`\>

#### Returns

`T` _extends_ [`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`U`\> ?
[`Collection`](Collection.md)\<[`Flat`](../type-aliases/Flat.md)\<`U`\>\> :
[`Collection`](Collection.md)\<`T`\>

#### See

\_.flattenDeep

#### Source

node_modules/@types/lodash/common/array.d.ts:507

---

### flattenDepth()

> **flattenDepth**(`depth`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **depth?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.flattenDepth

#### Source

node_modules/@types/lodash/common/array.d.ts:529

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

### forEach()

> **forEach**(`iteratee`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.forEach

#### Source

node_modules/@types/lodash/common/collection.d.ts:832

---

### forEachRight()

> **forEachRight**(`iteratee`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.forEachRight

#### Source

node_modules/@types/lodash/common/collection.d.ts:913

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forIn`](LoDashImplicitWrapper.md#forin)

#### See

\_.forIn

#### Source

node_modules/@types/lodash/common/object.d.ts:866

---

### forInRight()

> **forInRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forInRight`](LoDashImplicitWrapper.md#forinright)

#### See

\_.forInRight

#### Source

node_modules/@types/lodash/common/object.d.ts:892

---

### forOwn()

> **forOwn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwn`](LoDashImplicitWrapper.md#forown)

#### See

\_.forOwn

#### Source

node_modules/@types/lodash/common/object.d.ts:920

---

### forOwnRight()

> **forOwnRight**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`[], `any`\>

#### Returns

`this`

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

#### See

\_.forOwnRight

#### Source

node_modules/@types/lodash/common/object.d.ts:946

---

### fromPairs()

> **fromPairs**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
> [[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
[[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### See

\_.fromPairs

#### Source

node_modules/@types/lodash/common/array.d.ts:560

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

node_modules/@types/lodash/common/object.d.ts:980

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

node_modules/@types/lodash/common/object.d.ts:1014

---

### get()

#### get(path)

> **get**(`path`): `T`

##### Parameters

• **path**: `number`

##### Returns

`T`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1207

#### get(path, defaultValue)

> **get**\<`TDefault`\>(`path`, `defaultValue`): `T` \| `TDefault`

##### Type parameters

• **TDefault**

##### Parameters

• **path**: `number`

• **defaultValue**: `TDefault`

##### Returns

`T` \| `TDefault`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1211

---

### groupBy()

> **groupBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### See

\_.groupBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:965

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

node_modules/@types/lodash/common/object.d.ts:1336

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

node_modules/@types/lodash/common/object.d.ts:1374

---

### head()

> **head**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.head

#### Source

node_modules/@types/lodash/common/array.d.ts:601

---

### identity()

> **identity**(): `T`[]

#### Returns

`T`[]

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

### includes()

> **includes**(`target`, `fromIndex`?): `boolean`

#### Parameters

• **target**: `T`

• **fromIndex?**: `number`

#### Returns

`boolean`

#### See

\_.includes

#### Source

node_modules/@types/lodash/common/collection.d.ts:1019

---

### indexOf()

> **indexOf**(`value`, `fromIndex`?): `number`

#### Parameters

• **value**: `T`

• **fromIndex?**: `number`

#### Returns

`number`

#### See

\_.indexOf

#### Source

node_modules/@types/lodash/common/array.d.ts:636

---

### initial()

> **initial**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.initial

#### Source

node_modules/@types/lodash/common/array.d.ts:657

---

### intersection()

> **intersection**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.intersection

#### Source

node_modules/@types/lodash/common/array.d.ts:679

---

### intersectionBy()

#### intersectionBy(values, iteratee)

> **intersectionBy**\<`T2`\>(`values`, `iteratee`): [`Collection`](Collection.md)\<`T`\>

##### Type parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:728

#### intersectionBy(values)

> **intersectionBy**(...`values`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:732

---

### intersectionWith()

#### intersectionWith(values, comparator)

> **intersectionWith**\<`T2`\>(`values`, `comparator`): [`Collection`](Collection.md)\<`T`\>

##### Type parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:780

#### intersectionWith(values)

> **intersectionWith**(...`values`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**values**: ([`List`](../type-aliases/List.md)\<`unknown`\> \|
[`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `never`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:784

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

node_modules/@types/lodash/common/object.d.ts:1397

---

### invertBy()

> **invertBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Source

node_modules/@types/lodash/common/object.d.ts:1431

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

node_modules/@types/lodash/common/object.d.ts:1476

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

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`o`) => `boolean`\>

#### See

\_.iteratee

#### Source

node_modules/@types/lodash/common/util.d.ts:440

---

### join()

> **join**(`separator`?): `string`

#### Parameters

• **separator?**: `string`

#### Returns

`string`

#### See

\_.join

#### Source

node_modules/@types/lodash/common/array.d.ts:828

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

### keyBy()

> **keyBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.keyBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1107

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

node_modules/@types/lodash/common/object.d.ts:1499

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

node_modules/@types/lodash/common/object.d.ts:1522

---

### last()

> **last**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.last

#### Source

node_modules/@types/lodash/common/array.d.ts:849

---

### lastIndexOf()

> **lastIndexOf**(`value`, `fromIndex`?): `number`

#### Parameters

• **value**: `T`

• **fromIndex?**: `number` \| `true`

#### Returns

`number`

#### See

\_.lastIndexOf

#### Source

node_modules/@types/lodash/common/array.d.ts:890

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

### map()

#### map(key)

> **map**\<`K`\>(`key`): [`Collection`](Collection.md)\<`T`\[`K`\]\>

##### Type parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **key**: `K`

##### Returns

[`Collection`](Collection.md)\<`T`\[`K`\]\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1197

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1201

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`any`\>

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1205

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1209

#### map()

> **map**(): [`Collection`](Collection.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1213

---

### mapKeys()

> **mapKeys**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **iteratee?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.mapKeys

#### Source

node_modules/@types/lodash/common/object.d.ts:1549

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`, `TResult`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1635

#### mapValues(iteratee)

> **mapValues**\<`TKey`\>(`iteratee`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### Type parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **iteratee**: `TKey`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1639

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### Parameters

• **iteratee**: `object`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1643

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### Parameters

• **iteratee**: `string`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1647

#### mapValues()

> **mapValues**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1651

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

### max()

> **max**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.max

#### Source

node_modules/@types/lodash/common/math.d.ts:110

---

### maxBy()

> **maxBy**(`iteratee`?): `undefined` \| `T`

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`undefined` \| `T`

#### See

\_.maxBy

#### Source

node_modules/@types/lodash/common/math.d.ts:146

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

### meanBy()

> **meanBy**(`iteratee`?): `number`

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

\_.meanBy

#### Source

node_modules/@types/lodash/common/math.d.ts:201

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

### min()

> **min**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.min

#### Source

node_modules/@types/lodash/common/math.d.ts:225

---

### minBy()

> **minBy**(`iteratee`?): `undefined` \| `T`

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`undefined` \| `T`

#### See

\_.minBy

#### Source

node_modules/@types/lodash/common/math.d.ts:261

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

### nth()

> **nth**(`n`?): `undefined` \| `T`

#### Parameters

• **n?**: `number`

#### Returns

`undefined` \| `T`

#### See

\_.nth

#### Source

node_modules/@types/lodash/common/array.d.ts:912

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

### omit()

> **omit**(...`paths`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**paths**:
[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.omit

#### Source

node_modules/@types/lodash/common/object.d.ts:1970

---

### omitBy()

> **omitBy**(`predicate`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.omitBy

#### Source

node_modules/@types/lodash/common/object.d.ts:2029

---

### orderBy()

> **orderBy**(`iteratees`?, `orders`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratees?**: [`Many`](../type-aliases/Many.md)\<PropertyName \| PartialShallow\<T\> \|
ListIterator\<T, unknown\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.orderBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1345

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `TResult`[]\>

#### Type parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`[]\>

#### See

\_.over

#### Source

node_modules/@types/lodash/common/util.d.ts:727

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

node_modules/@types/lodash/common/util.d.ts:766

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

node_modules/@types/lodash/common/util.d.ts:805

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

### partition()

#### partition(callback)

> **partition**\<`U`\>(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`U`[],
> `Exclude`\<`T`, `U`\>[]]\>

##### Type parameters

• **U**

##### Parameters

• **callback**: [`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`U`[], `Exclude`\<`T`, `U`\>[]]\>

##### See

\_.partition

##### Source

node_modules/@types/lodash/common/collection.d.ts:1395

#### partition(callback)

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`[], `T`[]]\>

##### Parameters

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`[], `T`[]]\>

##### See

\_.partition

##### Source

node_modules/@types/lodash/common/collection.d.ts:1399

---

### pickBy()

#### pickBy(predicate)

> **pickBy**\<`S`\>(`predicate`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`,
`S`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2129

#### pickBy(predicate)

> **pickBy**(`predicate`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2133

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

### pop()

> **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Source

node_modules/@types/lodash/common/common.d.ts:175

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

### pull()

> **pull**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: `T`[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pull

#### Source

node_modules/@types/lodash/common/array.d.ts:940

---

### pullAll()

> **pullAll**(`values`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAll

#### Source

node_modules/@types/lodash/common/array.d.ts:976

---

### pullAllBy()

> **pullAllBy**\<`T2`\>(`values`?, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

#### Type parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAllBy

#### Source

node_modules/@types/lodash/common/array.d.ts:1023

---

### pullAllWith()

> **pullAllWith**\<`T2`\>(`values`?, `comparator`?): [`Collection`](Collection.md)\<`T`\>

#### Type parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator?**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAllWith

#### Source

node_modules/@types/lodash/common/array.d.ts:1070

---

### pullAt()

> **pullAt**(...`indexes`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**indexes**: [`Many`](../type-aliases/Many.md)\<`number`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAt

#### Source

node_modules/@types/lodash/common/array.d.ts:1099

---

### push()

> **push**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Source

node_modules/@types/lodash/common/common.d.ts:176

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

### reduce()

#### reduce(callback, accumulator)

> **reduce**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1473

#### reduce(callback)

> **reduce**(`callback`): `undefined` \| `T`

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`undefined` \| `T`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1477

---

### reduceRight()

#### reduceRight(callback, accumulator)

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1544

#### reduceRight(callback)

> **reduceRight**(`callback`): `undefined` \| `T`

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `T`,
[`List`](../type-aliases/List.md)\<`T`\>\>

##### Returns

`undefined` \| `T`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1548

---

### reject()

> **reject**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.reject

#### Source

node_modules/@types/lodash/common/collection.d.ts:1609

---

### remove()

> **remove**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.remove

#### Source

node_modules/@types/lodash/common/array.d.ts:1124

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

node_modules/@types/lodash/common/object.d.ts:2181

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

### sample()

> **sample**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.sample

#### Source

node_modules/@types/lodash/common/collection.d.ts:1668

---

### sampleSize()

> **sampleSize**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.sampleSize

#### Source

node_modules/@types/lodash/common/collection.d.ts:1724

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

node_modules/@types/lodash/common/object.d.ts:2210

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

node_modules/@types/lodash/common/object.d.ts:2214

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

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2249

#### setWith(path, value, customizer)

> **setWith**\<`TResult`\>(`path`, `value`, `customizer`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **value**: `any`

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2253

---

### shift()

> **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Source

node_modules/@types/lodash/common/common.d.ts:177

---

### shuffle()

> **shuffle**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.shuffle

#### Source

node_modules/@types/lodash/common/collection.d.ts:1779

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

### slice()

> **slice**(`start`?, `end`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **start?**: `number`

• **end?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.slice

#### Source

node_modules/@types/lodash/common/array.d.ts:1169

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

### some()

> **some**(`predicate`?): `boolean`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

\_.some

#### Source

node_modules/@types/lodash/common/collection.d.ts:1852

---

### sort()

> **sort**(`compareFn`?): `this`

#### Parameters

• **compareFn?**

#### Returns

`this`

#### Source

node_modules/@types/lodash/common/common.d.ts:178

---

### sortBy()

> **sortBy**(...`iteratees`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**iteratees**:
[`Many`](../type-aliases/Many.md)\<[`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.sortBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1914

---

### sortedIndex()

#### sortedIndex(value)

> **sortedIndex**(`value`): `number`

##### Parameters

• **value**: `T`

##### Returns

`number`

##### See

\_.sortedIndex

##### Source

node_modules/@types/lodash/common/array.d.ts:1200

#### sortedIndex(value)

> **sortedIndex**(`value`): `number`

##### Parameters

• **value**: `T`

##### Returns

`number`

##### See

\_.sortedIndex

##### Source

node_modules/@types/lodash/common/array.d.ts:1231

---

### sortedIndexBy()

> **sortedIndexBy**(`value`, `iteratee`?): `number`

#### Parameters

• **value**: `T`

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

\_.sortedIndexBy

#### Source

node_modules/@types/lodash/common/array.d.ts:1267

---

### sortedIndexOf()

> **sortedIndexOf**(`value`): `number`

#### Parameters

• **value**: `T`

#### Returns

`number`

#### See

\_.sortedIndexOf

#### Source

node_modules/@types/lodash/common/array.d.ts:1295

---

### sortedLastIndex()

> **sortedLastIndex**(`value`): `number`

#### Parameters

• **value**: `T`

#### Returns

`number`

#### See

\_.sortedLastIndex

#### Source

node_modules/@types/lodash/common/array.d.ts:1324

---

### sortedLastIndexBy()

> **sortedLastIndexBy**(`value`, `iteratee`): `number`

#### Parameters

• **value**: `T`

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

\_.sortedLastIndexBy

#### Source

node_modules/@types/lodash/common/array.d.ts:1355

---

### sortedLastIndexOf()

> **sortedLastIndexOf**(`value`): `number`

#### Parameters

• **value**: `T`

#### Returns

`number`

#### See

\_.sortedLastIndexOf

#### Source

node_modules/@types/lodash/common/array.d.ts:1383

---

### sortedUniq()

> **sortedUniq**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.sortedUniq

#### Source

node_modules/@types/lodash/common/array.d.ts:1410

---

### sortedUniqBy()

> **sortedUniqBy**(`iteratee`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.sortedUniqBy

#### Source

node_modules/@types/lodash/common/array.d.ts:1438

---

### splice()

> **splice**(`start`, `deleteCount`?, ...`items`?): `this`

#### Parameters

• **start**: `number`

• **deleteCount?**: `number`

• ...**items?**: `T`[]

#### Returns

`this`

#### Source

node_modules/@types/lodash/common/common.d.ts:179

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

### sumBy()

> **sumBy**(`iteratee`?): `number`

#### Parameters

• **iteratee?**: `string` \| (`value`) => `number`

#### Returns

`number`

#### See

\_.sumBy

#### Source

node_modules/@types/lodash/common/math.d.ts:397

---

### tail()

> **tail**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.tail

#### Source

node_modules/@types/lodash/common/array.d.ts:1459

---

### take()

> **take**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.take

#### Source

node_modules/@types/lodash/common/array.d.ts:1481

---

### takeRight()

> **takeRight**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.takeRight

#### Source

node_modules/@types/lodash/common/array.d.ts:1503

---

### takeRightWhile()

> **takeRightWhile**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.takeRightWhile

#### Source

node_modules/@types/lodash/common/array.d.ts:1526

---

### takeWhile()

> **takeWhile**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **predicate?**: [`ListIteratee`](../type-aliases/ListIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.takeWhile

#### Source

node_modules/@types/lodash/common/array.d.ts:1549

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

### toArray()

> **toArray**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.toArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1436

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

> **toJSON**(): `T`[]

#### Returns

`T`[]

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

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `T`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

#### See

\_.toPairs

#### Source

node_modules/@types/lodash/common/object.d.ts:2282

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `T`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairsIn`](LoDashImplicitWrapper.md#topairsin)

#### See

\_.toPairsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2307

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

### transform()

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`,
`TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2349

#### transform()

> **transform**(): [`Collection`](Collection.md)\<`any`\>

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2353

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

### union()

> **union**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.union

#### Source

node_modules/@types/lodash/common/array.d.ts:1571

---

### unionBy()

#### unionBy(arrays2, iteratee)

> **unionBy**(`arrays2`, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1611

#### unionBy(iteratee)

> **unionBy**(...`iteratee`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.unionBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1615

---

### unionWith()

#### unionWith(arrays2, comparator)

> **unionWith**(`arrays2`, `comparator`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.unionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1659

#### unionWith(comparator)

> **unionWith**(...`comparator`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.unionWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1663

---

### uniq()

> **uniq**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.uniq

#### Source

node_modules/@types/lodash/common/array.d.ts:1696

---

### uniqBy()

> **uniqBy**(`iteratee`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.uniqBy

#### Source

node_modules/@types/lodash/common/array.d.ts:1729

---

### uniqWith()

> **uniqWith**(`comparator`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.uniqWith

#### Source

node_modules/@types/lodash/common/array.d.ts:1760

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

node_modules/@types/lodash/common/object.d.ts:2409

---

### unshift()

> **unshift**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Source

node_modules/@types/lodash/common/common.d.ts:180

---

### unzip()

> **unzip**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`[]\> : `unknown`

#### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`[]\> :
`unknown`

#### See

\_.unzip

#### Source

node_modules/@types/lodash/common/array.d.ts:1782

---

### unzipWith()

#### unzipWith(iteratee)

> **unzipWith**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.unzipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1809

#### unzipWith()

> **unzipWith**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`[]\> : `unknown`

##### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`[]\> :
`unknown`

##### See

\_.unzipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1813

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

node_modules/@types/lodash/common/object.d.ts:2433

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

> **value**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value)

#### See

\_.value

#### Source

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `T`[]

#### Returns

`T`[]

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

#### See

\_.valueOf

#### Source

node_modules/@types/lodash/common/seq.d.ts:154

---

### without()

> **without**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: `T`[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.without

#### Source

node_modules/@types/lodash/common/array.d.ts:1839

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

node_modules/@types/lodash/common/function.d.ts:1438

---

### xor()

> **xor**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.xor

#### Source

node_modules/@types/lodash/common/array.d.ts:1860

---

### xorBy()

#### xorBy(arrays2, iteratee)

> **xorBy**(`arrays2`, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.xorBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1901

#### xorBy(iteratee)

> **xorBy**(...`iteratee`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.xorBy

##### Source

node_modules/@types/lodash/common/array.d.ts:1905

---

### xorWith()

#### xorWith(arrays2, comparator)

> **xorWith**(`arrays2`, `comparator`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **arrays2**: `undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.xorWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1949

#### xorWith(comparator)

> **xorWith**(...`comparator`): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• ...**comparator**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
[`Comparator`](../type-aliases/Comparator.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.xorWith

##### Source

node_modules/@types/lodash/common/array.d.ts:1953

---

### zip()

#### zip(arrays2)

> **zip**\<`T2`\>(`arrays2`): [`Collection`](Collection.md)\<[`undefined` \| `T`, `undefined` \| `T2`]\>

##### Type parameters

• **T2**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

[`Collection`](Collection.md)\<[`undefined` \| `T`, `undefined` \| `T2`]\>

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1995

#### zip(arrays)

> **zip**(...`arrays`): [`Collection`](Collection.md)\<(`undefined` \| `T`)[]\>

##### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<(`undefined` \| `T`)[]\>

##### See

\_.zip

##### Source

node_modules/@types/lodash/common/array.d.ts:1999

---

### zipObject()

#### zipObject(values)

> **zipObject**\<`U`\>(`values`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### Type parameters

• **U**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`U`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### See

\_.zipObject

##### Source

node_modules/@types/lodash/common/array.d.ts:2030

#### zipObject()

> **zipObject**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### See

\_.zipObject

##### Source

node_modules/@types/lodash/common/array.d.ts:2034

---

### zipObjectDeep()

> **zipObjectDeep**(`values`?): [`Object`](Object.md)\<`object`\>

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`any`\>

#### Returns

[`Object`](Object.md)\<`object`\>

#### See

\_.zipObjectDeep

#### Source

node_modules/@types/lodash/common/array.d.ts:2060

---

### zipWith()

#### zipWith(arrays2, iteratee)

> **zipWith**\<`T2`, `TResult`\>(`arrays2`, `iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **T2**

• **TResult**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2103

#### zipWith(arrays2, arrays3, iteratee)

> **zipWith**\<`T2`, `T3`, `TResult`\>(`arrays2`, `arrays3`, `iteratee`):
> [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **T2**

• **T3**

• **TResult**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **arrays3**: [`List`](../type-aliases/List.md)\<`T3`\>

• **iteratee**

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2107

#### zipWith(iteratee)

> **zipWith**\<`TResult`\>(...`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
(...`group`) => `TResult`)[]

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.zipWith

##### Source

node_modules/@types/lodash/common/array.d.ts:2111
