[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Object\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type parameters

• **T**

## Properties

### each()

> **each**: (`iteratee`?) => [`Object`](Object.md)\<`T`\>

#### See

\_.each

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### Source

node_modules/@types/lodash/common/collection.d.ts:83

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`Object`](Object.md)\<`T`\>

#### See

\_.eachRight

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### Source

node_modules/@types/lodash/common/collection.d.ts:131

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

### assign()

#### assign(source)

> **assign**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:59

#### assign(source1, source2)

> **assign**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:63

#### assign(source1, source2, source3)

> **assign**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:67

#### assign(source1, source2, source3, source4)

> **assign**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:71

#### assign()

> **assign**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:75

#### assign(otherArgs)

> **assign**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.assign

##### Source

node_modules/@types/lodash/common/object.d.ts:79

---

### assignIn()

#### assignIn(source)

> **assignIn**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:161

#### assignIn(source1, source2)

> **assignIn**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:165

#### assignIn(source1, source2, source3)

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:169

#### assignIn(source1, source2, source3, source4)

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:173

#### assignIn()

> **assignIn**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:177

#### assignIn(otherArgs)

> **assignIn**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignIn

##### Source

node_modules/@types/lodash/common/object.d.ts:181

---

### assignInWith()

#### assignInWith(source, customizer)

> **assignInWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:262

#### assignInWith(source1, source2, customizer)

> **assignInWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:266

#### assignInWith(source1, source2, source3, customizer)

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:270

#### assignInWith(source1, source2, source3, source4, customizer)

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`,
> `source3`, `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` &
> `TSource3` & `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:274

#### assignInWith()

> **assignInWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:278

#### assignInWith(otherArgs)

> **assignInWith**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignInWith

##### Source

node_modules/@types/lodash/common/object.d.ts:282

---

### assignWith()

#### assignWith(source, customizer)

> **assignWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:361

#### assignWith(source1, source2, customizer)

> **assignWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:365

#### assignWith(source1, source2, source3, customizer)

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:369

#### assignWith(source1, source2, source3, source4, customizer)

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:373

#### assignWith()

> **assignWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:377

#### assignWith(otherArgs)

> **assignWith**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignWith

##### Source

node_modules/@types/lodash/common/object.d.ts:381

---

### at()

> **at**(...`props`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Parameters

• ...**props**: [`Many`](../type-aliases/Many.md)\<keyof `T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.at

#### Source

node_modules/@types/lodash/common/object.d.ts:428

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

node_modules/@types/lodash/common/lang.d.ts:31

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

> **chain**(): [`ObjectChain`](ObjectChain.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`T`\>

#### See

\_.chain

#### Source

node_modules/@types/lodash/common/seq.d.ts:57

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

### concat()

> **concat**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: [`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.concat

#### Source

node_modules/@types/lodash/common/array.d.ts:88

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

### countBy()

> **countBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

\_.countBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:23

---

### create()

> **create**\<`U`\>(`properties`?): [`Object`](Object.md)\<`T` & `U`\>

#### Type parameters

• **U** _extends_ `object`

#### Parameters

• **properties?**: `U`

#### Returns

[`Object`](Object.md)\<`T` & `U`\>

#### See

\_.create

#### Source

node_modules/@types/lodash/common/object.d.ts:463

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

### defaults()

#### defaults(source)

> **defaults**\<`TSource`\>(`source`): [`Object`](Object.md)\<`NonNullable`\<`TSource` & `T`\>\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource` & `T`\>\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:509

#### defaults(source1, source2)

> **defaults**\<`TSource1`, `TSource2`\>(`source1`, `source2`):
> [`Object`](Object.md)\<`NonNullable`\<`TSource2` & `TSource1` & `T`\>\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource2` & `TSource1` & `T`\>\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:513

#### defaults(source1, source2, source3)

> **defaults**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:517

#### defaults(source1, source2, source3, source4)

> **defaults**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`NonNullable`\<`TSource4` & `TSource3` & `TSource2` &
> `TSource1` & `T`\>\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:521

#### defaults()

> **defaults**(): [`Object`](Object.md)\<`NonNullable`\<`T`\>\>

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`T`\>\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:525

#### defaults(sources)

> **defaults**(...`sources`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**sources**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.defaults

##### Source

node_modules/@types/lodash/common/object.d.ts:529

---

### defaultsDeep()

> **defaultsDeep**(...`sources`): [`Object`](Object.md)\<`any`\>

#### Parameters

• ...**sources**: `any`[]

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

\_.defaultsDeep

#### Source

node_modules/@types/lodash/common/object.d.ts:570

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

> **entries**(): [`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

#### See

\_.entries

#### Source

node_modules/@types/lodash/common/object.d.ts:592

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entriesIn`](LoDashImplicitWrapper.md#entriesin)

#### See

\_.entriesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:626

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

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

#### Returns

`boolean`

#### See

\_.every

#### Source

node_modules/@types/lodash/common/collection.d.ts:182

---

### extend()

#### extend(source)

> **extend**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:676

#### extend(source1, source2)

> **extend**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:680

#### extend(source1, source2, source3)

> **extend**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:684

#### extend(source1, source2, source3, source4)

> **extend**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:688

#### extend()

> **extend**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:692

#### extend(otherArgs)

> **extend**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.extend

##### Source

node_modules/@types/lodash/common/object.d.ts:696

---

### extendWith()

#### extendWith(source, customizer)

> **extendWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:754

#### extendWith(source1, source2, customizer)

> **extendWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:758

#### extendWith(source1, source2, source3, customizer)

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:762

#### extendWith(source1, source2, source3, source4, customizer)

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:766

#### extendWith()

> **extendWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:770

#### extendWith(otherArgs)

> **extendWith**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.extendWith

##### Source

node_modules/@types/lodash/common/object.d.ts:774

---

### filter()

#### filter(predicate)

> **filter**\<`S`\>(`predicate`): [`Collection`](Collection.md)\<`S`\>

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Collection`](Collection.md)\<`S`\>

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:243

#### filter(predicate)

> **filter**(`predicate`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Parameters

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.filter

##### Source

node_modules/@types/lodash/common/collection.d.ts:247

---

### find()

#### find(predicate, fromIndex)

> **find**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:319

#### find(predicate, fromIndex)

> **find**(`predicate`?, `fromIndex`?): `undefined` \| `T`\[keyof `T`\]

##### Parameters

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.find

##### Source

node_modules/@types/lodash/common/collection.d.ts:323

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

### findLast()

#### findLast(predicate, fromIndex)

> **findLast**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type parameters

• **S**

##### Parameters

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:382

#### findLast(predicate, fromIndex)

> **findLast**(`predicate`?, `fromIndex`?): `undefined` \| `T`\[keyof `T`\]

##### Parameters

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.findLast

##### Source

node_modules/@types/lodash/common/collection.d.ts:386

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

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:468

#### flatMap(iteratee)

> **flatMap**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:472

#### flatMap()

> **flatMap**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:476

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:591

#### flatMapDeep(iteratee)

> **flatMapDeep**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:595

#### flatMapDeep()

> **flatMapDeep**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMapDeep

##### Source

node_modules/@types/lodash/common/collection.d.ts:599

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:715

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

node_modules/@types/lodash/common/collection.d.ts:719

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Parameters

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMapDepth

##### Source

node_modules/@types/lodash/common/collection.d.ts:723

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

> **forEach**(`iteratee`?): [`Object`](Object.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### See

\_.forEach

#### Source

node_modules/@types/lodash/common/collection.d.ts:826

---

### forEachRight()

> **forEachRight**(`iteratee`?): [`Object`](Object.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### See

\_.forEachRight

#### Source

node_modules/@types/lodash/common/collection.d.ts:907

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

### get()

#### get(path)

> **get**\<`TKey`\>(`path`): `T`\[`TKey`\]

##### Type parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: `TKey` \| [`TKey`]

##### Returns

`T`\[`TKey`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1162

#### get(path, defaultValue)

> **get**\<`TKey`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \| `Exclude`\<`T`\[`TKey`\],
> `undefined`\>

##### Type parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **path**: `TKey` \| [`TKey`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1166

#### get(path)

> **get**\<`TKey1`, `TKey2`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: [`TKey1`, `TKey2`]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1170

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **path**: [`TKey1`, `TKey2`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1174

#### get(path)

> **get**\<`TKey1`, `TKey2`, `TKey3`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: [`TKey1`, `TKey2`, `TKey3`]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1178

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **path**: [`TKey1`, `TKey2`, `TKey3`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1182

#### get(path)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`path`):
> `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TKey4** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: [`TKey1`, `TKey2`, `TKey3`, `TKey4`]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1186

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

##### Type parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

• **TKey4** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **path**: [`TKey1`, `TKey2`, `TKey3`, `TKey4`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1190

#### get(path)

> **get**\<`TPath`\>(`path`): `string` _extends_ `TPath` ? `any` :
> [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>

##### Type parameters

• **TPath** _extends_ `string`

##### Parameters

• **path**: `TPath`

##### Returns

`string` _extends_ `TPath` ? `any` : [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`,
`TPath`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1194

#### get(path, defaultValue)

> **get**\<`TPath`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>, `undefined` \|
> `null`\>

##### Type parameters

• **TPath** _extends_ `string`

• **TDefault** = [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>

##### Parameters

• **path**: `TPath`

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>,
`undefined` \| `null`\>

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1198

#### get(path, defaultValue)

> **get**(`path`, `defaultValue`?): `any`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **defaultValue?**: `any`

##### Returns

`any`

##### See

\_.get

##### Source

node_modules/@types/lodash/common/object.d.ts:1202

---

### groupBy()

> **groupBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof
> `T`\][]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>\>

#### See

\_.groupBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:971

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

### includes()

> **includes**(`target`, `fromIndex`?): `boolean`

#### Parameters

• **target**: `T`\[keyof `T`\]

• **fromIndex?**: `number`

#### Returns

`boolean`

#### See

\_.includes

#### Source

node_modules/@types/lodash/common/collection.d.ts:1013

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

### invertBy()

> **invertBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### Parameters

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Source

node_modules/@types/lodash/common/object.d.ts:1439

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

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`o`) => `boolean`\>

#### See

\_.iteratee

#### Source

node_modules/@types/lodash/common/util.d.ts:446

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

> **keyBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`\[keyof `T`\],
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### See

\_.keyBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1113

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

### map()

#### map(key)

> **map**\<`K`\>(`key`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

##### Type parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **key**: `K`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1219

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1223

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`any`\>

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1227

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1231

#### map()

> **map**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.map

##### Source

node_modules/@types/lodash/common/collection.d.ts:1235

---

### mapKeys()

> **mapKeys**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof
> `T`\]\>\>

#### Parameters

• **iteratee?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### See

\_.mapKeys

#### Source

node_modules/@types/lodash/common/object.d.ts:1557

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`): [`Object`](Object.md)\<\{ \[P in string \| number \|
> symbol\]: TResult \}\>

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

[`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: TResult \}\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1659

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`\[keyof `T`\],
`TResult`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1663

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: boolean
> \}\>

##### Parameters

• **iteratee**: `object`

##### Returns

[`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: boolean \}\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1667

#### mapValues(iteratee)

> **mapValues**\<`TKey`\>(`iteratee`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\[`TKey`\]\>\>

##### Type parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **iteratee**: `TKey`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\[`TKey`\]\>\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1671

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: any \}\>

##### Parameters

• **iteratee**: `string`

##### Returns

[`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: any \}\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1675

#### mapValues()

> **mapValues**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.mapValues

##### Source

node_modules/@types/lodash/common/object.d.ts:1679

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

### merge()

#### merge(source)

> **merge**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1799

#### merge(source1, source2)

> **merge**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` & `TSource1`
> & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1803

#### merge(source1, source2, source3)

> **merge**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1807

#### merge(source1, source2, source3, source4)

> **merge**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1811

#### merge(otherArgs)

> **merge**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.merge

##### Source

node_modules/@types/lodash/common/object.d.ts:1815

---

### mergeWith()

#### mergeWith(source, customizer)

> **mergeWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1898

#### mergeWith(source1, source2, customizer)

> **mergeWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **customizer**

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1902

#### mergeWith(source1, source2, source3, customizer)

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **customizer**

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1906

#### mergeWith(source1, source2, source3, source4, customizer)

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type parameters

• **TSource1**

• **TSource2**

• **TSource3**

• **TSource4**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

• **source3**: `TSource3`

• **source4**: `TSource4`

• **customizer**

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1910

#### mergeWith(otherArgs)

> **mergeWith**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.mergeWith

##### Source

node_modules/@types/lodash/common/object.d.ts:1914

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

### omit()

#### omit(paths)

> **omit**\<`K`\>(...`paths`): [`Object`](Object.md)\<[`Omit`](../type-aliases/Omit.md)\<`T`,
> `K`\>\>

##### Type parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• ...**paths**: [`Many`](../type-aliases/Many.md)\<`K`\>[]

##### Returns

[`Object`](Object.md)\<[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>\>

##### See

\_.omit

##### Source

node_modules/@types/lodash/common/object.d.ts:1978

#### omit(paths)

> **omit**(...`paths`): [`Object`](Object.md)\<`Partial`\<`T`\>\>

##### Parameters

• ...**paths**: [`Many`](../type-aliases/Many.md)\<`string` \| `number` \| `symbol` \|
[[`PropertyName`](../type-aliases/PropertyName.md), `any`] \|
[`PartialShallow`](../type-aliases/PartialShallow.md)\<`T`\>\>[]

##### Returns

[`Object`](Object.md)\<`Partial`\<`T`\>\>

##### See

\_.omit

##### Source

node_modules/@types/lodash/common/object.d.ts:1982

---

### omitBy()

> **omitBy**(`predicate`): [`Object`](Object.md)\<`Partial`\<`T`\>\>

#### Parameters

• **predicate**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<`Partial`\<`T`\>\>

#### See

\_.omitBy

#### Source

node_modules/@types/lodash/common/object.d.ts:2037

---

### orderBy()

> **orderBy**(`iteratees`?, `orders`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Parameters

• **iteratees?**:
[`Many`](../type-aliases/Many.md)\<[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
`unknown`\>\>

• **orders?**: [`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.orderBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1351

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

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`\[keyof
> `T`\][], `T`\[keyof `T`\][]]\>

#### Parameters

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`\[keyof `T`\][], `T`\[keyof `T`\][]]\>

#### See

\_.partition

#### Source

node_modules/@types/lodash/common/collection.d.ts:1405

---

### pick()

#### pick(props)

> **pick**\<`U`\>(...`props`): [`Object`](Object.md)\<`Pick`\<`T`, `U`\>\>

##### Type parameters

• **U** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• ...**props**: [`Many`](../type-aliases/Many.md)\<`U`\>[]

##### Returns

[`Object`](Object.md)\<`Pick`\<`T`, `U`\>\>

##### See

\_.pick

##### Source

node_modules/@types/lodash/common/object.d.ts:2077

#### pick(props)

> **pick**(...`props`): [`Object`](Object.md)\<`Partial`\<`T`\>\>

##### Parameters

• ...**props**:
[`Many`](../type-aliases/Many.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>[]

##### Returns

[`Object`](Object.md)\<`Partial`\<`T`\>\>

##### See

\_.pick

##### Source

node_modules/@types/lodash/common/object.d.ts:2081

---

### pickBy()

#### pickBy(predicate)

> **pickBy**\<`S`\>(`predicate`):
> [`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> _extends_ `T` ?
> [`NumericDictionary`](NumericDictionary.md)\<`S`\> : [`Dictionary`](Dictionary.md)\<`S`\>\>

##### Type parameters

• **S**

##### Parameters

• **predicate**:
[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`\[keyof `T`\], `S`\>

##### Returns

[`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> _extends_ `T` ?
[`NumericDictionary`](NumericDictionary.md)\<`S`\> : [`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2141

#### pickBy(predicate)

> **pickBy**(`predicate`?): [`Object`](Object.md)\<`T` _extends_
> [`Dictionary`](Dictionary.md)\<`unknown`\> ? [`Dictionary`](Dictionary.md)\<`T`\<`T`\>\[keyof
> `T`\<`T`\>\]\> : `T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`unknown`\> ?
> [`NumericDictionary`](NumericDictionary.md)\<`T`\<`T`\>\[keyof `T`\<`T`\>\]\> : `Partial`\<`T`\>\>

##### Parameters

• **predicate?**: [`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Object`](Object.md)\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\> ?
[`Dictionary`](Dictionary.md)\<`T`\<`T`\>\[keyof `T`\<`T`\>\]\> : `T` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> ?
[`NumericDictionary`](NumericDictionary.md)\<`T`\<`T`\>\[keyof `T`\<`T`\>\]\> : `Partial`\<`T`\>\>

##### See

\_.pickBy

##### Source

node_modules/@types/lodash/common/object.d.ts:2145

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

### reduce()

#### reduce(callback, accumulator)

> **reduce**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1483

#### reduce(callback)

> **reduce**(`callback`): `undefined` \| `T`\[keyof `T`\]

##### Parameters

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`T`\[keyof `T`\], `T`\>

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.reduce

##### Source

node_modules/@types/lodash/common/collection.d.ts:1487

---

### reduceRight()

#### reduceRight(callback, accumulator)

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1554

#### reduceRight(callback)

> **reduceRight**(`callback`): `undefined` \| `T`\[keyof `T`\]

##### Parameters

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`T`\[keyof `T`\], `T`\>

##### Returns

`undefined` \| `T`\[keyof `T`\]

##### See

\_.reduceRight

##### Source

node_modules/@types/lodash/common/collection.d.ts:1558

---

### reject()

> **reject**(`predicate`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Parameters

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.reject

#### Source

node_modules/@types/lodash/common/collection.d.ts:1615

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

### sample()

> **sample**(): `undefined` \| `T`\[keyof `T`\]

#### Returns

`undefined` \| `T`\[keyof `T`\]

#### See

\_.sample

#### Source

node_modules/@types/lodash/common/collection.d.ts:1674

---

### sampleSize()

> **sampleSize**(`n`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Parameters

• **n?**: `number`

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.sampleSize

#### Source

node_modules/@types/lodash/common/collection.d.ts:1730

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

### shuffle()

> **shuffle**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.shuffle

#### Source

node_modules/@types/lodash/common/collection.d.ts:1785

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

### some()

> **some**(`predicate`?): `boolean`

#### Parameters

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

#### Returns

`boolean`

#### See

\_.some

#### Source

node_modules/@types/lodash/common/collection.d.ts:1858

---

### sortBy()

> **sortBy**(...`iteratees`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Parameters

• ...**iteratees**:
[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.sortBy

#### Source

node_modules/@types/lodash/common/collection.d.ts:1920

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

> **toArray**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.toArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1442

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

### transform()

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**:
[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
`string`, `TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2361

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **iteratee**:
[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
keyof `T`, `TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2365

#### transform()

> **transform**(): [`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_
> [`Dictionary`](Dictionary.md)\<`unknown`\> ? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\>
? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

##### See

\_.transform

##### Source

node_modules/@types/lodash/common/object.d.ts:2369

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

### updateWith()

#### updateWith(path, updater, customizer)

> **updateWith**(`path`, `updater`, `customizer`?): `this`

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`this`

##### See

\_.updateWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2476

#### updateWith(path, updater, customizer)

> **updateWith**\<`TResult`\>(`path`, `updater`, `customizer`?): [`Object`](Object.md)\<`TResult`\>

##### Type parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.updateWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2480

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

### values()

> **values**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.values

#### Source

node_modules/@types/lodash/common/object.d.ts:2519

---

### valuesIn()

> **valuesIn**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.valuesIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2562

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
