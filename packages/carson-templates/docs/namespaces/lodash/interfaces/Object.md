[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: Object\<T\>

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type Parameters

• **T**

## Properties

### each()

> **each**: (`iteratee`?) => [`Object`](Object.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### See

\_.forEach

#### See

\_.each

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:83

---

### eachRight()

> **eachRight**: (`iteratee`?) => [`Object`](Object.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### See

\_.forEachRight

#### See

\_.eachRight

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:131

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

### assign()

#### assign(source)

> **assign**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assign

##### Defined in

node_modules/@types/lodash/common/object.d.ts:59

#### assign(source1, source2)

> **assign**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type Parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assign

##### Defined in

node_modules/@types/lodash/common/object.d.ts:63

#### assign(source1, source2, source3)

> **assign**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:67

#### assign(source1, source2, source3, source4)

> **assign**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:71

#### assign()

> **assign**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assign

##### Defined in

node_modules/@types/lodash/common/object.d.ts:75

#### assign(otherArgs)

> **assign**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.assign

##### Defined in

node_modules/@types/lodash/common/object.d.ts:79

---

### assignIn()

#### assignIn(source)

> **assignIn**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignIn

##### Defined in

node_modules/@types/lodash/common/object.d.ts:161

#### assignIn(source1, source2)

> **assignIn**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type Parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.assignIn

##### Defined in

node_modules/@types/lodash/common/object.d.ts:165

#### assignIn(source1, source2, source3)

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:169

#### assignIn(source1, source2, source3, source4)

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:173

#### assignIn()

> **assignIn**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignIn

##### Defined in

node_modules/@types/lodash/common/object.d.ts:177

#### assignIn(otherArgs)

> **assignIn**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignIn

##### Defined in

node_modules/@types/lodash/common/object.d.ts:181

---

### assignInWith()

#### assignInWith(source, customizer)

> **assignInWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignInWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:262

#### assignInWith(source1, source2, customizer)

> **assignInWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:266

#### assignInWith(source1, source2, source3, customizer)

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:270

#### assignInWith(source1, source2, source3, source4, customizer)

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`,
> `source3`, `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` &
> `TSource3` & `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:274

#### assignInWith()

> **assignInWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignInWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:278

#### assignInWith(otherArgs)

> **assignInWith**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignInWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:282

---

### assignWith()

#### assignWith(source, customizer)

> **assignWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.assignWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:361

#### assignWith(source1, source2, customizer)

> **assignWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:365

#### assignWith(source1, source2, source3, customizer)

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:369

#### assignWith(source1, source2, source3, source4, customizer)

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:373

#### assignWith()

> **assignWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.assignWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:377

#### assignWith(otherArgs)

> **assignWith**\<`TResult`\>(...`otherArgs`): [`Object`](Object.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.assignWith

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:428

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

node_modules/@types/lodash/common/lang.d.ts:31

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

> **chain**(): [`ObjectChain`](ObjectChain.md)\<`T`\>

#### Returns

[`ObjectChain`](ObjectChain.md)\<`T`\>

#### See

\_.chain

#### Defined in

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

> **clone**(): `T`

#### Returns

`T`

#### See

\_.clone

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`clone`](LoDashImplicitWrapper.md#clone)

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `T`

#### Returns

`T`

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

• **customizer**: [`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`T`\>

##### Returns

`any`

##### See

\_.cloneDeepWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneDeepWith`](LoDashImplicitWrapper.md#clonedeepwith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `T`

##### Returns

`T`

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

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `TResult`\>

##### Returns

`TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `T` \| `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`T`, `undefined`
\| `TResult`\>

##### Returns

`T` \| `TResult`

##### See

\_.cloneWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`cloneWith`](LoDashImplicitWrapper.md#clonewith)

##### Defined in

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `T`

##### Returns

`T`

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

### concat()

> **concat**(...`values`): [`Collection`](Collection.md)\<`T`\>

#### Parameters

• ...**values**: [`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

\_.concat

#### Defined in

node_modules/@types/lodash/common/array.d.ts:88

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

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`T`\>

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

> **constant**(): [`Function`](Function.md)\<() => `T`\>

#### Returns

[`Function`](Function.md)\<() => `T`\>

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

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

\_.countBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:23

---

### create()

> **create**\<`U`\>(`properties`?): [`Object`](Object.md)\<`T` & `U`\>

#### Type Parameters

• **U** _extends_ `object`

#### Parameters

• **properties?**: `U`

#### Returns

[`Object`](Object.md)\<`T` & `U`\>

#### See

\_.create

#### Defined in

node_modules/@types/lodash/common/object.d.ts:463

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

### defaults()

#### defaults(source)

> **defaults**\<`TSource`\>(`source`): [`Object`](Object.md)\<`NonNullable`\<`TSource` & `T`\>\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource` & `T`\>\>

##### See

\_.defaults

##### Defined in

node_modules/@types/lodash/common/object.d.ts:509

#### defaults(source1, source2)

> **defaults**\<`TSource1`, `TSource2`\>(`source1`, `source2`):
> [`Object`](Object.md)\<`NonNullable`\<`TSource2` & `TSource1` & `T`\>\>

##### Type Parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`TSource2` & `TSource1` & `T`\>\>

##### See

\_.defaults

##### Defined in

node_modules/@types/lodash/common/object.d.ts:513

#### defaults(source1, source2, source3)

> **defaults**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:517

#### defaults(source1, source2, source3, source4)

> **defaults**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`NonNullable`\<`TSource4` & `TSource3` & `TSource2` &
> `TSource1` & `T`\>\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:521

#### defaults()

> **defaults**(): [`Object`](Object.md)\<`NonNullable`\<`T`\>\>

##### Returns

[`Object`](Object.md)\<`NonNullable`\<`T`\>\>

##### See

\_.defaults

##### Defined in

node_modules/@types/lodash/common/object.d.ts:525

#### defaults(sources)

> **defaults**(...`sources`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**sources**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.defaults

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:570

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): `T`

##### Parameters

• **defaultValue**: `T`

##### Returns

`T`

##### See

\_.defaultTo

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`defaultTo`](LoDashImplicitWrapper.md#defaultto)

##### Defined in

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `T` _extends_ `undefined` \| `null` ? `TDefault` :
> `T` \| `TDefault`

##### Type Parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`T` _extends_ `undefined` \| `null` ? `TDefault` : `T` \| `TDefault`

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

> **entries**(): [`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### See

\_.entries

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:592

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T`\[keyof `T`\]]\>

#### See

\_.entriesIn

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entriesIn`](LoDashImplicitWrapper.md#entriesin)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:626

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

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

#### Returns

`boolean`

#### See

\_.every

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:182

---

### extend()

#### extend(source)

> **extend**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.extend

##### Defined in

node_modules/@types/lodash/common/object.d.ts:676

#### extend(source1, source2)

> **extend**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` &
> `TSource1` & `TSource2`\>

##### Type Parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.extend

##### Defined in

node_modules/@types/lodash/common/object.d.ts:680

#### extend(source1, source2, source3)

> **extend**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:684

#### extend(source1, source2, source3, source4)

> **extend**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:688

#### extend()

> **extend**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.extend

##### Defined in

node_modules/@types/lodash/common/object.d.ts:692

#### extend(otherArgs)

> **extend**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.extend

##### Defined in

node_modules/@types/lodash/common/object.d.ts:696

---

### extendWith()

#### extendWith(source, customizer)

> **extendWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**: [`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.extendWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:754

#### extendWith(source1, source2, customizer)

> **extendWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:758

#### extendWith(source1, source2, source3, customizer)

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:762

#### extendWith(source1, source2, source3, source4, customizer)

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:766

#### extendWith()

> **extendWith**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.extendWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:770

#### extendWith(otherArgs)

> **extendWith**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.extendWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:774

---

### filter()

#### filter(predicate)

> **filter**\<`S`\>(`predicate`): [`Collection`](Collection.md)\<`S`\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Collection`](Collection.md)\<`S`\>

##### See

\_.filter

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:247

---

### find()

#### find(predicate, fromIndex)

> **find**\<`S`\>(`predicate`, `fromIndex`?): `undefined` \| `S`

##### Type Parameters

• **S**

##### Parameters

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.find

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:323

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

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

• **predicate**: [`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

• **fromIndex?**: `number`

##### Returns

`undefined` \| `S`

##### See

\_.findLast

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:386

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`undefined` \| `string`

#### See

\_.findLastKey

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`findLastKey`](LoDashImplicitWrapper.md#findlastkey)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:839

---

### flatMap()

#### flatMap(iteratee)

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:468

#### flatMap(iteratee)

> **flatMap**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:472

#### flatMap()

> **flatMap**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMap

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:476

---

### flatMapDeep()

#### flatMapDeep(iteratee)

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult** = `any`

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:591

#### flatMapDeep(iteratee)

> **flatMapDeep**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:595

#### flatMapDeep()

> **flatMapDeep**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMapDeep

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:599

---

### flatMapDepth()

#### flatMapDepth(iteratee, depth)

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth`?): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

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

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:719

#### flatMapDepth(depth)

> **flatMapDepth**(`depth`?): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Parameters

• **depth?**: `number`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.flatMapDepth

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:723

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

> **forEach**(`iteratee`?): [`Object`](Object.md)\<`T`\>

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

[`Object`](Object.md)\<`T`\>

#### See

\_.forEach

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:907

---

### forIn()

> **forIn**(`iteratee`?): `this`

#### Parameters

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

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

• **iteratee?**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`this`

#### See

\_.forOwnRight

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`forOwnRight`](LoDashImplicitWrapper.md#forownright)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:947

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

> **get**\<`TKey`\>(`path`): `T`\[`TKey`\]

##### Type Parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: `TKey` \| [`TKey`]

##### Returns

`T`\[`TKey`\]

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1162

#### get(path, defaultValue)

> **get**\<`TKey`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \| `Exclude`\<`T`\[`TKey`\],
> `undefined`\>

##### Type Parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

• **TDefault**

##### Parameters

• **path**: `TKey` \| [`TKey`]

• **defaultValue**: `TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey`\], `undefined`\>

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1166

#### get(path)

> **get**\<`TKey1`, `TKey2`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]

##### Type Parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: [`TKey1`, `TKey2`]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1170

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1174

#### get(path)

> **get**\<`TKey1`, `TKey2`, `TKey3`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### Type Parameters

• **TKey1** _extends_ `string` \| `number` \| `symbol`

• **TKey2** _extends_ `string` \| `number` \| `symbol`

• **TKey3** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **path**: [`TKey1`, `TKey2`, `TKey3`]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1178

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1182

#### get(path)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`path`):
> `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1186

#### get(path, defaultValue)

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1190

#### get(path)

> **get**\<`TPath`\>(`path`): `string` _extends_ `TPath` ? `any` :
> [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>

##### Type Parameters

• **TPath** _extends_ `string`

##### Parameters

• **path**: `TPath`

##### Returns

`string` _extends_ `TPath` ? `any` : [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`,
`TPath`\>

##### See

\_.get

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1194

#### get(path, defaultValue)

> **get**\<`TPath`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`\>, `undefined` \|
> `null`\>

##### Type Parameters

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

##### Defined in

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

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:971

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

### identity()

> **identity**(): `T`

#### Returns

`T`

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

• **target**: `T`\[keyof `T`\]

• **fromIndex?**: `number`

#### Returns

`boolean`

#### See

\_.includes

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1013

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

• **iteratee?**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

#### See

\_.invertBy

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1439

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

node_modules/@types/lodash/common/util.d.ts:446

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

> **keyBy**(`iteratee`?): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### Parameters

• **iteratee?**: [`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`\[keyof `T`\],
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### See

\_.keyBy

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1113

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

> **map**\<`K`\>(`key`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

##### Type Parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **key**: `K`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1219

#### map(iteratee)

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **iteratee**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1223

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`any`\>

##### Parameters

• **iteratee**: [`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1227

#### map(iteratee)

> **map**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

##### Parameters

• **iteratee**: `object` \| [[`PropertyName`](../type-aliases/PropertyName.md), `any`]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

\_.map

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1231

#### map()

> **map**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

\_.map

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/object.d.ts:1557

---

### mapValues()

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`): [`Object`](Object.md)\<\{ \[P in string \| number \|
> symbol\]: TResult \}\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

[`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: TResult \}\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1659

#### mapValues(callback)

> **mapValues**\<`TResult`\>(`callback`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`\[keyof `T`\],
`TResult`\>

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

\_.mapValues

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1667

#### mapValues(iteratee)

> **mapValues**\<`TKey`\>(`iteratee`):
> [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\[`TKey`\]\>\>

##### Type Parameters

• **TKey** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• **iteratee**: `TKey`

##### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\[`TKey`\]\>\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1671

#### mapValues(iteratee)

> **mapValues**(`iteratee`): [`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: any \}\>

##### Parameters

• **iteratee**: `string`

##### Returns

[`Object`](Object.md)\<\{ \[P in string \| number \| symbol\]: any \}\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1675

#### mapValues()

> **mapValues**(): [`Object`](Object.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`T`\>

##### See

\_.mapValues

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1679

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

### merge()

#### merge(source)

> **merge**\<`TSource`\>(`source`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.merge

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1799

#### merge(source1, source2)

> **merge**\<`TSource1`, `TSource2`\>(`source1`, `source2`): [`Object`](Object.md)\<`T` & `TSource1`
> & `TSource2`\>

##### Type Parameters

• **TSource1**

• **TSource2**

##### Parameters

• **source1**: `TSource1`

• **source2**: `TSource2`

##### Returns

[`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### See

\_.merge

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1803

#### merge(source1, source2, source3)

> **merge**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1807

#### merge(source1, source2, source3, source4)

> **merge**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1811

#### merge(otherArgs)

> **merge**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.merge

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1815

---

### mergeWith()

#### mergeWith(source, customizer)

> **mergeWith**\<`TSource`\>(`source`, `customizer`): [`Object`](Object.md)\<`T` & `TSource`\>

##### Type Parameters

• **TSource**

##### Parameters

• **source**: `TSource`

• **customizer**

##### Returns

[`Object`](Object.md)\<`T` & `TSource`\>

##### See

\_.mergeWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1898

#### mergeWith(source1, source2, customizer)

> **mergeWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`):
> [`Object`](Object.md)\<`T` & `TSource1` & `TSource2`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1902

#### mergeWith(source1, source2, source3, customizer)

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1906

#### mergeWith(source1, source2, source3, source4, customizer)

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): [`Object`](Object.md)\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1910

#### mergeWith(otherArgs)

> **mergeWith**(...`otherArgs`): [`Object`](Object.md)\<`any`\>

##### Parameters

• ...**otherArgs**: `any`[]

##### Returns

[`Object`](Object.md)\<`any`\>

##### See

\_.mergeWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:1914

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

#### omit(paths)

> **omit**\<`K`\>(...`paths`): [`Object`](Object.md)\<[`Omit`](../type-aliases/Omit.md)\<`T`,
> `K`\>\>

##### Type Parameters

• **K** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• ...**paths**: [`Many`](../type-aliases/Many.md)\<`K`\>[]

##### Returns

[`Object`](Object.md)\<[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>\>

##### See

\_.omit

##### Defined in

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

##### Defined in

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

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1351

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

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`\[keyof
> `T`\][], `T`\[keyof `T`\][]]\>

#### Parameters

• **callback**: [`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<[`T`\[keyof `T`\][], `T`\[keyof `T`\][]]\>

#### See

\_.partition

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1405

---

### pick()

#### pick(props)

> **pick**\<`U`\>(...`props`): [`Object`](Object.md)\<`Pick`\<`T`, `U`\>\>

##### Type Parameters

• **U** _extends_ `string` \| `number` \| `symbol`

##### Parameters

• ...**props**: [`Many`](../type-aliases/Many.md)\<`U`\>[]

##### Returns

[`Object`](Object.md)\<`Pick`\<`T`, `U`\>\>

##### See

\_.pick

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2081

---

### pickBy()

#### pickBy(predicate)

> **pickBy**\<`S`\>(`predicate`):
> [`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> _extends_ `T` ?
> [`NumericDictionary`](NumericDictionary.md)\<`S`\> : [`Dictionary`](Dictionary.md)\<`S`\>\>

##### Type Parameters

• **S**

##### Parameters

• **predicate**:
[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`\[keyof `T`\], `S`\>

##### Returns

[`Object`](Object.md)\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> _extends_ `T` ?
[`NumericDictionary`](NumericDictionary.md)\<`S`\> : [`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

\_.pickBy

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2145

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

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduce

##### Defined in

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

##### Defined in

node_modules/@types/lodash/common/collection.d.ts:1487

---

### reduceRight()

#### reduceRight(callback, accumulator)

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

##### Type Parameters

• **TResult**

##### Parameters

• **callback**: [`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\],
`TResult`, `T`\>

• **accumulator**: `TResult`

##### Returns

`TResult`

##### See

\_.reduceRight

##### Defined in

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

##### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1615

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

> **sample**(): `undefined` \| `T`\[keyof `T`\]

#### Returns

`undefined` \| `T`\[keyof `T`\]

#### See

\_.sample

#### Defined in

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

#### Defined in

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`setWith`](LoDashImplicitWrapper.md#setwith)

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2255

---

### shuffle()

> **shuffle**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.shuffle

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1785

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

• **predicate?**: [`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`,
`boolean`\>

#### Returns

`boolean`

#### See

\_.some

#### Defined in

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

#### Defined in

node_modules/@types/lodash/common/collection.d.ts:1920

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

> **toArray**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.toArray

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:1442

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

> **toJSON**(): `T`

#### Returns

`T`

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

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairs

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`toPairs`](LoDashImplicitWrapper.md#topairs)

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2284

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `T` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `T` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ? `U` :
`T` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

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

• **iteratee**:
[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
`string`, `TResult`\>

• **accumulator?**: `TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2361

#### transform(iteratee, accumulator)

> **transform**\<`TResult`\>(`iteratee`, `accumulator`?):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### Type Parameters

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2365

#### transform()

> **transform**(): [`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_
> [`Dictionary`](Dictionary.md)\<`unknown`\> ? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\>
? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

##### See

\_.transform

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2369

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

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2476

#### updateWith(path, updater, customizer)

> **updateWith**\<`TResult`\>(`path`, `updater`, `customizer`?): [`Object`](Object.md)\<`TResult`\>

##### Type Parameters

• **TResult**

##### Parameters

• **path**: [`PropertyPath`](../type-aliases/PropertyPath.md)

• **updater**

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

[`Object`](Object.md)\<`TResult`\>

##### See

\_.updateWith

##### Defined in

node_modules/@types/lodash/common/object.d.ts:2480

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

> **value**(): `T`

#### Returns

`T`

#### See

\_.value

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`value`](LoDashImplicitWrapper.md#value)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `T`

#### Returns

`T`

#### See

\_.valueOf

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`valueOf`](LoDashImplicitWrapper.md#valueof)

#### Defined in

node_modules/@types/lodash/common/seq.d.ts:154

---

### values()

> **values**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.values

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2519

---

### valuesIn()

> **valuesIn**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

\_.valuesIn

#### Defined in

node_modules/@types/lodash/common/object.d.ts:2562

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
