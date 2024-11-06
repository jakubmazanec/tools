[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Collection\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`[]\>

## Type Parameters

• **T**

## Properties

### each()

> **each**: (`iteratee`?) => [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.forEach

#### See

\_.each

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:77

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.forEachRight

#### See

\_.eachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:125

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

### at()

> **at**(...`props`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**props**: [`PropertyPath`](../type-aliases/PropertyPath.md)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.at

#### Defined in

node_modules/@types/lodash/common/object.d.ts:434

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

node_modules/@types/lodash/common/lang.d.ts:19

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

> **chain**(): [`CollectionChain`](CollectionChain.md)\<`T`\>

#### Returns

[`CollectionChain`](CollectionChain.md)\<`T`\>

#### See

\_.chain

#### Defined in

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

#### Defined in

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

> **clone**(): `T`[]

#### Returns

`T`[]

#### See

\_.clone

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `T`[]

#### Returns

`T`[]

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

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`[]\>

##### Returns

`any`

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `T`[]

##### Returns

`T`[]

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

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`TResult`\>

##### Returns

`TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `T`[] \| `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`[],
`undefined` \| `TResult`\>

##### Returns

`T`[] \| `TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `T`[]

##### Returns

`T`[]

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

### compact()

> **compact**(): [`Collection`](Collection.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### Returns

[`Collection`](Collection.md)\<[`Truthy`](../type-aliases/Truthy.md)\<`T`\>\>

#### See

\_.compact

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:82

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

• **source**: `T` _extends_ (`arg`) => `any` ? `A` : `any`[]

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

> **constant**(): [`Function`](Function.md)\<() => `T`[]\>

#### Returns

[`Function`](Function.md)\<() => `T`[]\>

#### See

\_.constant

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`constant`](LoDashImplicitWrapper.md#constant)

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:35

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

> **defaultTo**(`defaultValue`): `T`[]

##### Parameters

• **defaultValue**: `T`[]

##### Returns

`T`[]

##### See

\_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T`[] \| `TDefault`

##### Type Parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`T`[] \| `TDefault`

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

### difference()

> **difference**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: [`List`](../type-aliases/List.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.difference

#### Defined in

node_modules/@types/lodash/common/array.d.ts:123

---

### differenceBy()

#### differenceBy(values1, iteratee)

> **differenceBy**\<`T2`\>(`values1`, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values1**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceBy

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:176

---

### differenceWith()

#### differenceWith(values, comparator)

> **differenceWith**\<`T2`\>(`values`, `comparator`): [`Collection`](Collection.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.differenceWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:223

#### differenceWith(values)

> **differenceWith**\<`T2`, `T3`, `T4`\>(...`values`): [`Collection`](Collection.md)\<`T`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:227

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

### drop()

> **drop**(`n`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.drop

#### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:321

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

### every()

> **every**(`predicate`?): `boolean`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

\_.every

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:176

---

### fill()

> **fill**\<`U`\>(`value`, `start`?, `end`?): [`Collection`](Collection.md)\<`T` \| `U`\>

#### Type Parameters

• **U**

#### Parameters

• **value**: `U`

• **start?**: `number`

• **end?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T` \| `U`\>

#### See

\_.fill

#### Defined in

node_modules/@types/lodash/common/array.d.ts:359

---

### filter()

#### filter(predicate)

> **filter**\<`S`\>(`predicate`): [`Collection`](Collection.md)\<`S`\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Collection`](Collection.md)\<`S`\>

##### See

\_.filter

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:233

#### filter(predicate)

> **filter**(`predicate`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.filter

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:237

---

### find()

#### find(predicate, fromIndex)

> **find**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.find

##### Defined in

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

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:383

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`undefined` \| `string`

#### See

\_.findKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findKey`](LoDashImplicitWrapper.md#findkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:817

---

### findLast()

#### findLast(predicate, fromIndex)

> **findLast**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ListIteratorTypeGuard`](../type-aliases/ListIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.findLast

##### Defined in

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

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:406

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`[]\>

#### Returns

`undefined` \| `string`

#### See

\_.findLastKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:839

---

### first()

> **first**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.first

#### Defined in

node_modules/@types/lodash/common/array.d.ts:442

---

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:454

#### flatMap(iteratee)

> **flatMap**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:458

#### flatMap()

> **flatMap**(): `T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`\> : [`Collection`](Collection.md)\<`T`\>

##### Returns

`T` _extends_ [`Many`](../type-aliases/Many.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`\> :
[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:462

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:577

#### flatMapDeep(iteratee)

> **flatMapDeep**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:581

#### flatMapDeep()

> **flatMapDeep**(): [`Collection`](Collection.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:585

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

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

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:705

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`Collection`](Collection.md)\<`T`\>

##### Parameters

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.flatMapDepth

##### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:529

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

### forEach()

> **forEach**(`iteratee`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `any`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.forEach

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:913

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

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forIn`](LoDashImplicitWrapper.md#forin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:867

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

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forInRight`](LoDashImplicitWrapper.md#forinright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:893

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

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwn`](LoDashImplicitWrapper.md#forown)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:921

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

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:947

---

### fromPairs()

> **fromPairs**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
> [[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T` _extends_
[[`PropertyName`](../type-aliases/PropertyName.md), `U`] ? `U` : `any`\>\>

#### See

\_.fromPairs

#### Defined in

node_modules/@types/lodash/common/array.d.ts:560

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

### get()

#### get(path)

> **get**(`path`): `T`

##### Parameters

• **path**: `number`

##### Returns

`T`

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1208

#### get(path, defaultValue)

> **get**\<`TDefault`\>(`path`, `defaultValue`): `T` \| `TDefault`

##### Type Parameters

• **TDefault**

##### Parameters

• **path**: `number`

• **defaultValue**: `TDefault`

##### Returns

`T` \| `TDefault`

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1212

---

### groupBy()

> **groupBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`[]\>\>

#### See

\_.groupBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:965

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

### head()

> **head**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.head

#### Defined in

node_modules/@types/lodash/common/array.d.ts:601

---

### identity()

> **identity**(): `T`[]

#### Returns

`T`[]

#### See

\_.identity

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`identity`](LoDashImplicitWrapper.md#identity)

#### Defined in

node_modules/@types/lodash/common/util.d.ts:387

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:636

---

### initial()

> **initial**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.initial

#### Defined in

node_modules/@types/lodash/common/array.d.ts:657

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

### intersection()

> **intersection**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.intersection

#### Defined in

node_modules/@types/lodash/common/array.d.ts:679

---

### intersectionBy()

#### intersectionBy(values, iteratee)

> **intersectionBy**\<`T2`\>(`values`, `iteratee`): [`Collection`](Collection.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionBy

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:732

---

### intersectionWith()

#### intersectionWith(values, comparator)

> **intersectionWith**\<`T2`\>(`values`, `comparator`): [`Collection`](Collection.md)\<`T`\>

##### Type Parameters

• **T2**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.intersectionWith

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:784

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

### invertBy()

> **invertBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1433

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

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`o`) => `boolean`\>

#### See

\_.iteratee

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:828

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

### keyBy()

> **keyBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`,
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.keyBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1107

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

### last()

> **last**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.last

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:890

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

### map()

#### map(key)

> **map**\<`K`\>(`key`): [`Collection`](Collection.md)\<`T`\[`K`\]\>

##### Type Parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **key**: `K`

##### Returns

[`Collection`](Collection.md)\<`T`\[`K`\]\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1197

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**: [`ListIterator`](../type-aliases/ListIterator.md)\<`T`, `TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1201

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`any`\>

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1205

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1209

#### map()

> **map**(): [`Collection`](Collection.md)\<`T`\>

##### Returns

[`Collection`](Collection.md)\<`T`\>

##### See

\_.map

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1551

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`, `TResult`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1637

#### mapValues(iteratee)

> **mapValues**\<`TKey`\>(`iteratee`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### Type Parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **iteratee**: `TKey`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[`TKey`\]\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1641

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### Parameters

• **iteratee**: `object`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`boolean`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1645

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### Parameters

• **iteratee**: `string`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`any`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1649

#### mapValues()

> **mapValues**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1653

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

### max()

> **max**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.max

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/math.d.ts:146

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

### meanBy()

> **meanBy**(`iteratee`?): `number`

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

#### Returns

`number`

#### See

\_.meanBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:201

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

### min()

> **min**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.min

#### Defined in

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

#### Defined in

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

### nth()

> **nth**(`n`?): `undefined` \| `T`

#### Parameters

• **n?**: `number`

#### Returns

`undefined` \| `T`

#### See

\_.nth

#### Defined in

node_modules/@types/lodash/common/array.d.ts:912

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

### omit()

> **omit**(...`paths`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**paths**:
[`Many`](../type-aliases/Many.md)\<[`PropertyName`](../type-aliases/PropertyName.md)\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.omit

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1972

---

### omitBy()

> **omitBy**(`predicate`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

#### See

\_.omitBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2031

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1345

---

### over()

> **over**\<`TResult`\>(...`iteratees`): [`Function`](Function.md)\<(...`args`) => `TResult`[]\>

#### Type Parameters

• **TResult**

#### Parameters

• ...**iteratees**: [`Many`](../type-aliases/Many.md)\<(...`args`) => `TResult`\>[]

#### Returns

[`Function`](Function.md)\<(...`args`) => `TResult`[]\>

#### See

\_.over

#### Defined in

node_modules/@types/lodash/common/util.d.ts:727

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

node_modules/@types/lodash/common/util.d.ts:766

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

node_modules/@types/lodash/common/util.d.ts:805

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

### partition()

#### partition(callback)

> **partition**\<`U`\>(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`U`[],
> `Exclude`\<`T`, `U`\>[]]\>

##### Type Parameters

• **U**

##### Parameters

• **callback**: [`ValueIteratorTypeGuard`](../type-aliases/ValueIteratorTypeGuard.md)\<`T`, `U`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`U`[], `Exclude`\<`T`, `U`\>[]]\>

##### See

\_.partition

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1395

#### partition(callback)

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`[], `T`[]]\>

##### Parameters

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\>

##### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`[], `T`[]]\>

##### See

\_.partition

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1399

---

### pickBy()

#### pickBy(predicate)

> **pickBy**\<`S`\>(`predicate`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`,
`S`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

\_.pickBy

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2131

#### pickBy(predicate)

> **pickBy**(`predicate`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\>\>

##### See

\_.pickBy

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2135

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

### pop()

> **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:176

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

### pull()

> **pull**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: `T`[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pull

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:976

---

### pullAllBy()

> **pullAllBy**\<`T2`\>(`values`?, `iteratee`?): [`Collection`](Collection.md)\<`T`\>

#### Type Parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T` \| `T2`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAllBy

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1023

---

### pullAllWith()

> **pullAllWith**\<`T2`\>(`values`?, `comparator`?): [`Collection`](Collection.md)\<`T`\>

#### Type Parameters

• **T2**

#### Parameters

• **values?**: [`List`](../type-aliases/List.md)\<`T2`\>

• **comparator?**: [`Comparator2`](../type-aliases/Comparator2.md)\<`T`, `T2`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.pullAllWith

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1099

---

### push()

> **push**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:177

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

### reduce()

#### reduce(callback, accumulator)

> **reduce**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1477

---

### reduceRight()

#### reduceRight(callback, accumulator)

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`MemoListIterator`](../type-aliases/MemoListIterator.md)\<`T`, `TResult`,
[`List`](../type-aliases/List.md)\<`T`\>\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Defined in

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

##### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1124

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

### sample()

> **sample**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### See

\_.sample

#### Defined in

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

#### Defined in

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`[]\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2255

---

### shift()

> **shift**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:178

---

### shuffle()

> **shuffle**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.shuffle

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1779

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

### slice()

> **slice**(`start`?, `end`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **start?**: `number`

• **end?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.slice

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1169

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

### some()

> **some**(`predicate`?): `boolean`

#### Parameters

• **predicate?**: [`ListIterateeCustom`](../type-aliases/ListIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

\_.some

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1852

---

### sort()

> **sort**(`compareFn`?): `this`

#### Parameters

• **compareFn?**

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:179

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

#### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1200

#### sortedIndex(value)

> **sortedIndex**(`value`): `number`

##### Parameters

• **value**: `T`

##### Returns

`number`

##### See

\_.sortedIndex

##### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1383

---

### sortedUniq()

> **sortedUniq**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.sortedUniq

#### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/common.d.ts:180

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

### sumBy()

> **sumBy**(`iteratee`?): `number`

#### Parameters

• **iteratee?**: `string` \| (`value`) => `number`

#### Returns

`number`

#### See

\_.sumBy

#### Defined in

node_modules/@types/lodash/common/math.d.ts:397

---

### tail()

> **tail**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.tail

#### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1549

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

### toArray()

> **toArray**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1436

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

> **toJSON**(): `T`[]

#### Returns

`T`[]

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

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `T`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`]\>

#### See

\_.toPairs

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2284

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `T`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`]\>

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

### transform()

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**: [`MemoVoidArrayIterator`](../type-aliases/MemoVoidArrayIterator.md)\<`T`,
`TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2351

#### transform()

> **transform**(): [`Collection`](Collection.md)\<`any`\>

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2355

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

### union()

> **union**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.union

#### Defined in

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

##### Defined in

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

##### Defined in

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

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1663

---

### uniq()

> **uniq**(): [`Collection`](Collection.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.uniq

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1729

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

### uniqWith()

> **uniqWith**(`comparator`?): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• **comparator?**: [`Comparator`](../type-aliases/Comparator.md)\<`T`\>

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.uniqWith

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1760

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

### unshift()

> **unshift**(...`items`): `this`

#### Parameters

• ...**items**: `T`[]

#### Returns

`this`

#### Defined in

node_modules/@types/lodash/common/common.d.ts:181

---

### unzip()

> **unzip**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`[]\> : `unknown`

#### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`[]\> :
`unknown`

#### See

\_.unzip

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1782

---

### unzipWith()

#### unzipWith(iteratee)

> **unzipWith**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.unzipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1809

#### unzipWith()

> **unzipWith**(): `T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ?
> [`Collection`](Collection.md)\<`U`[]\> : `unknown`

##### Returns

`T` _extends_ [`List`](../type-aliases/List.md)\<`U`\> ? [`Collection`](Collection.md)\<`U`[]\> :
`unknown`

##### See

\_.unzipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1813

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

> **value**(): `T`[]

#### Returns

`T`[]

#### See

\_.value

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `T`[]

#### Returns

`T`[]

#### See

\_.valueOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:1839

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

---

### xor()

> **xor**(...`arrays`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.xor

#### Defined in

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

##### Defined in

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

##### Defined in

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

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1953

---

### zip()

#### zip(arrays2)

> **zip**\<`T2`\>(`arrays2`): [`Collection`](Collection.md)\<[`undefined` \| `T`, `undefined` \| `T2`]\>

##### Type Parameters

• **T2**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

##### Returns

[`Collection`](Collection.md)\<[`undefined` \| `T`, `undefined` \| `T2`]\>

##### See

\_.zip

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1995

#### zip(arrays)

> **zip**(...`arrays`): [`Collection`](Collection.md)\<(`undefined` \| `T`)[]\>

##### Parameters

• ...**arrays**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\>)[]

##### Returns

[`Collection`](Collection.md)\<(`undefined` \| `T`)[]\>

##### See

\_.zip

##### Defined in

node_modules/@types/lodash/common/array.d.ts:1999

---

### zipObject()

#### zipObject(values)

> **zipObject**\<`U`\>(`values`): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### Type Parameters

• **U**

##### Parameters

• **values**: [`List`](../type-aliases/List.md)\<`U`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`U`\>\>

##### See

\_.zipObject

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2030

#### zipObject()

> **zipObject**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`undefined`\>\>

##### See

\_.zipObject

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/array.d.ts:2060

---

### zipWith()

#### zipWith(arrays2, iteratee)

> **zipWith**\<`T2`, `TResult`\>(`arrays2`, `iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **T2**

• **TResult**

##### Parameters

• **arrays2**: [`List`](../type-aliases/List.md)\<`T2`\>

• **iteratee**

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.zipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2103

#### zipWith(arrays2, arrays3, iteratee)

> **zipWith**\<`T2`, `T3`, `TResult`\>(`arrays2`, `arrays3`, `iteratee`):
> [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2107

#### zipWith(iteratee)

> **zipWith**\<`TResult`\>(...`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• ...**iteratee**: (`undefined` \| `null` \| [`List`](../type-aliases/List.md)\<`T`\> \|
(...`group`) => `TResult`)[]

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.zipWith

##### Defined in

node_modules/@types/lodash/common/array.d.ts:2111
