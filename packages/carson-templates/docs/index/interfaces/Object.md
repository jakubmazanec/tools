[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: Object\<T\>

Defined in: node\_modules/@types/lodash/common/common.d.ts:195

## Extends

- [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<`T`\>

## Type Parameters

### T

`T`

## Properties

### each

> **each**: (`iteratee?`) => `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:83

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`Object`\<`T`\>

#### See

_.forEach

#### See

_.each

---

### eachRight

> **eachRight**: (`iteratee?`) => `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:131

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`Object`\<`T`\>

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

### assign()

#### Call Signature

> **assign**\<`TSource`\>(`source`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:59

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.assign

#### Call Signature

> **assign**\<`TSource1`, `TSource2`\>(`source1`, `source2`): `Object`\<`T` & `TSource1` &
> `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:63

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.assign

#### Call Signature

> **assign**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`): `Object`\<`T` &
> `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:67

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.assign

#### Call Signature

> **assign**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:71

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.assign

#### Call Signature

> **assign**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:75

##### Returns

`Object`\<`T`\>

##### See

_.assign

#### Call Signature

> **assign**(...`otherArgs`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:79

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.assign

---

### assignIn()

#### Call Signature

> **assignIn**\<`TSource`\>(`source`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:161

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TSource1`, `TSource2`\>(`source1`, `source2`): `Object`\<`T` & `TSource1` &
> `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:165

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`): `Object`\<`T`
> & `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:169

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:173

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.assignIn

#### Call Signature

> **assignIn**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:177

##### Returns

`Object`\<`T`\>

##### See

_.assignIn

#### Call Signature

> **assignIn**\<`TResult`\>(...`otherArgs`): `Object`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:181

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`TResult`\>

##### See

_.assignIn

---

### assignInWith()

#### Call Signature

> **assignInWith**\<`TSource`\>(`source`, `customizer`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:262

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`): `Object`\<`T` &
> `TSource1` & `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:266

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:270

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`,
> `source3`, `source4`, `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` &
> `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:274

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.assignInWith

#### Call Signature

> **assignInWith**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:278

##### Returns

`Object`\<`T`\>

##### See

_.assignInWith

#### Call Signature

> **assignInWith**\<`TResult`\>(...`otherArgs`): `Object`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:282

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`TResult`\>

##### See

_.assignInWith

---

### assignWith()

#### Call Signature

> **assignWith**\<`TSource`\>(`source`, `customizer`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:361

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`): `Object`\<`T` &
> `TSource1` & `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:365

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:369

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:373

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.assignWith

#### Call Signature

> **assignWith**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:377

##### Returns

`Object`\<`T`\>

##### See

_.assignWith

#### Call Signature

> **assignWith**\<`TResult`\>(...`otherArgs`): `Object`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:381

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`TResult`\>

##### See

_.assignWith

---

### at()

> **at**(...`props`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:428

#### Parameters

##### props

...[`Many`](../type-aliases/Many.md)\<keyof `T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

_.at

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

> **capitalize**(): `string` _extends_ `T` ? `T` & `string` : `Capitalize`\<`Lowercase`\<`T`
> _extends_ `string` ? `T` : `never`\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:38

#### Returns

`string` _extends_ `T` ? `T` & `string` : `Capitalize`\<`Lowercase`\<`T` _extends_ `string` ? `T` :
`never`\>\>

#### See

_.capitalize

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`capitalize`](LoDashImplicitWrapper.md#capitalize)

---

### castArray()

> **castArray**(): [`Collection`](Collection.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:31

#### Returns

[`Collection`](Collection.md)\<`T`\>

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

> **chain**(): [`ObjectChain`](ObjectChain.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/seq.d.ts:57

#### Returns

[`ObjectChain`](ObjectChain.md)\<`T`\>

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

### concat()

> **concat**(...`values`): [`Collection`](Collection.md)\<`T`\>

Defined in: node\_modules/@types/lodash/common/array.d.ts:96

#### Parameters

##### values

...[`Many`](../type-aliases/Many.md)\<`T`\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\>

#### See

_.concat

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

> **countBy**(`iteratee?`): `Object`\<[`Dictionary`](Dictionary.md)\<`number`\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:23

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`number`\>\>

#### See

_.countBy

---

### create()

> **create**\<`U`\>(`properties?`): `Object`\<`T` & `U`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:463

#### Type Parameters

##### U

`U` _extends_ `object`

#### Parameters

##### properties?

`U`

#### Returns

`Object`\<`T` & `U`\>

#### See

_.create

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

### defaults()

#### Call Signature

> **defaults**\<`TSource`\>(`source`): `Object`\<`NonNullable`\<`TSource` & `T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:509

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

##### Returns

`Object`\<`NonNullable`\<`TSource` & `T`\>\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TSource1`, `TSource2`\>(`source1`, `source2`): `Object`\<`NonNullable`\<`TSource2`
> & `TSource1` & `T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:513

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`Object`\<`NonNullable`\<`TSource2` & `TSource1` & `T`\>\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`):
> `Object`\<`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:517

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`Object`\<`NonNullable`\<`TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### See

_.defaults

#### Call Signature

> **defaults**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): `Object`\<`NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:521

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`Object`\<`NonNullable`\<`TSource4` & `TSource3` & `TSource2` & `TSource1` & `T`\>\>

##### See

_.defaults

#### Call Signature

> **defaults**(): `Object`\<`NonNullable`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:525

##### Returns

`Object`\<`NonNullable`\<`T`\>\>

##### See

_.defaults

#### Call Signature

> **defaults**(...`sources`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:529

##### Parameters

###### sources

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.defaults

---

### defaultsDeep()

> **defaultsDeep**(...`sources`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:570

#### Parameters

##### sources

...`any`[]

#### Returns

`Object`\<`any`\>

#### See

_.defaultsDeep

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

> **entries**(): [`Collection`](Collection.md)\<\[`string`, `T`\[keyof `T`\]\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:592

#### Returns

[`Collection`](Collection.md)\<\[`string`, `T`\[keyof `T`\]\]\>

#### See

_.entries

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`entries`](LoDashImplicitWrapper.md#entries)

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<\[`string`, `T`\[keyof `T`\]\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:626

#### Returns

[`Collection`](Collection.md)\<\[`string`, `T`\[keyof `T`\]\]\>

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

### every()

> **every**(`predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:182

#### Parameters

##### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

_.every

---

### extend()

#### Call Signature

> **extend**\<`TSource`\>(`source`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:676

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.extend

#### Call Signature

> **extend**\<`TSource1`, `TSource2`\>(`source1`, `source2`): `Object`\<`T` & `TSource1` &
> `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:680

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.extend

#### Call Signature

> **extend**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`): `Object`\<`T` &
> `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:684

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.extend

#### Call Signature

> **extend**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:688

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.extend

#### Call Signature

> **extend**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:692

##### Returns

`Object`\<`T`\>

##### See

_.extend

#### Call Signature

> **extend**(...`otherArgs`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:696

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.extend

---

### extendWith()

#### Call Signature

> **extendWith**\<`TSource`\>(`source`, `customizer`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:754

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`): `Object`\<`T` &
> `TSource1` & `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:758

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:762

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.extendWith

#### Call Signature

> **extendWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:766

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

[`AssignCustomizer`](../type-aliases/AssignCustomizer.md)

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.extendWith

#### Call Signature

> **extendWith**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:770

##### Returns

`Object`\<`T`\>

##### See

_.extendWith

#### Call Signature

> **extendWith**(...`otherArgs`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:774

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.extendWith

---

### filter()

#### Call Signature

> **filter**\<`S`\>(`predicate`): [`Collection`](Collection.md)\<`S`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:243

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

##### Returns

[`Collection`](Collection.md)\<`S`\>

##### See

_.filter

#### Call Signature

> **filter**(`predicate?`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:247

##### Parameters

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

_.filter

---

### find()

#### Call Signature

> **find**\<`S`\>(`predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:319

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.find

#### Call Signature

> **find**(`predicate?`, `fromIndex?`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:323

##### Parameters

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.find

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

### findLast()

#### Call Signature

> **findLast**\<`S`\>(`predicate`, `fromIndex?`): `S` \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:382

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ObjectIteratorTypeGuard`](../type-aliases/ObjectIteratorTypeGuard.md)\<`T`, `S`\>

###### fromIndex?

`number`

##### Returns

`S` \| `undefined`

##### See

_.findLast

#### Call Signature

> **findLast**(`predicate?`, `fromIndex?`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:386

##### Parameters

###### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

###### fromIndex?

`number`

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.findLast

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

### flatMap()

#### Call Signature

> **flatMap**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:468

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
[`Many`](../type-aliases/Many.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:472

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

_.flatMap

#### Call Signature

> **flatMap**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:476

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

_.flatMap

---

### flatMapDeep()

#### Call Signature

> **flatMapDeep**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:591

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:595

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

_.flatMapDeep

#### Call Signature

> **flatMapDeep**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:599

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

_.flatMapDeep

---

### flatMapDepth()

#### Call Signature

> **flatMapDepth**\<`TResult`\>(`iteratee`, `depth?`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:715

##### Type Parameters

###### TResult

`TResult` = `any`

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md) \|
[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult` \|
[`ListOfRecursiveArraysOrValues`](ListOfRecursiveArraysOrValues.md)\<`TResult`\>\>

###### depth?

`number`

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`iteratee`, `depth?`): [`Collection`](Collection.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:719

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

###### depth?

`number`

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

_.flatMapDepth

#### Call Signature

> **flatMapDepth**(`depth?`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:723

##### Parameters

###### depth?

`number`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

_.flatMapDepth

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

> **forEach**(`iteratee?`): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:826

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`Object`\<`T`\>

#### See

_.forEach

---

### forEachRight()

> **forEachRight**(`iteratee?`): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:907

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `any`\>

#### Returns

`Object`\<`T`\>

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

> **get**\<`TKey`\>(`path`): `T`\[`TKey`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1219

##### Type Parameters

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### path

`TKey` \| \[`TKey`\]

##### Returns

`T`\[`TKey`\]

##### See

_.get

#### Call Signature

> **get**\<`TKey`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \| `Exclude`\<`T`\[`TKey`\],
> `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1223

##### Type Parameters

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### path

`TKey` \| \[`TKey`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1227

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### path

\[`TKey1`, `TKey2`\]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\], `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1231

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### path

\[`TKey1`, `TKey2`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`, `TKey3`\>(`path`): `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1235

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### path

\[`TKey1`, `TKey2`, `TKey3`\]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1239

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### path

\[`TKey1`, `TKey2`, `TKey3`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`\>(`path`):
> `T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

Defined in: node\_modules/@types/lodash/common/object.d.ts:1243

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TKey4

`TKey4` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### path

\[`TKey1`, `TKey2`, `TKey3`, `TKey4`\]

##### Returns

`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\]

##### See

_.get

#### Call Signature

> **get**\<`TKey1`, `TKey2`, `TKey3`, `TKey4`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1247

##### Type Parameters

###### TKey1

`TKey1` _extends_ `string` \| `number` \| `symbol`

###### TKey2

`TKey2` _extends_ `string` \| `number` \| `symbol`

###### TKey3

`TKey3` _extends_ `string` \| `number` \| `symbol`

###### TKey4

`TKey4` _extends_ `string` \| `number` \| `symbol`

###### TDefault

`TDefault`

##### Parameters

###### path

\[`TKey1`, `TKey2`, `TKey3`, `TKey4`\]

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<`T`\[`TKey1`\]\[`TKey2`\]\[`TKey3`\]\[`TKey4`\], `undefined`\>

##### See

_.get

#### Call Signature

> **get**\<`TPath`\>(`path`): `string` _extends_ `TPath` ? `any` :
> [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`, `"Path"`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1251

##### Type Parameters

###### TPath

`TPath` _extends_ `string`

##### Parameters

###### path

`TPath`

##### Returns

`string` _extends_ `TPath` ? `any` : [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`,
`TPath`, `"Path"`\>

##### See

_.get

#### Call Signature

> **get**\<`TPath`, `TDefault`\>(`path`, `defaultValue`): `TDefault` \|
> `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`, `"Path"`\>, `null` \|
> `undefined`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1255

##### Type Parameters

###### TPath

`TPath` _extends_ `string`

###### TDefault

`TDefault` = [`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`, `"Path"`\>

##### Parameters

###### path

`TPath`

###### defaultValue

`TDefault`

##### Returns

`TDefault` \| `Exclude`\<[`GetFieldType`](../type-aliases/GetFieldType.md)\<`T`, `TPath`,
`"Path"`\>, `null` \| `undefined`\>

##### See

_.get

#### Call Signature

> **get**(`path`, `defaultValue?`): `any`

Defined in: node\_modules/@types/lodash/common/object.d.ts:1259

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### defaultValue?

`any`

##### Returns

`any`

##### See

_.get

---

### groupBy()

> **groupBy**(`iteratee?`): `Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:971

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\][]\>\>

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

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1013

#### Parameters

##### target

`T`\[keyof `T`\]

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

> **invert**(): `Object`\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1456

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.invert

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`invert`](LoDashImplicitWrapper.md#invert)

---

### invertBy()

> **invertBy**(`iteratee?`): `Object`\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1496

#### Parameters

##### iteratee?

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`string`[]\>\>

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

> **iteratee**(): [`Function`](Function.md)\<(`o`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:446

#### Returns

[`Function`](Function.md)\<(`o`) => `boolean`\>

#### See

_.iteratee

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

> **keyBy**(`iteratee?`): `Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1113

#### Parameters

##### iteratee?

[`ValueIterateeCustom`](../type-aliases/ValueIterateeCustom.md)\<`T`\[keyof `T`\],
[`PropertyName`](../type-aliases/PropertyName.md)\>

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

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

> **map**\<`K`\>(`key`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1223

##### Type Parameters

###### K

`K` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### key

`K`

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\[`K`\]\>

##### See

_.map

#### Call Signature

> **map**\<`TResult`\>(`iteratee`): [`Collection`](Collection.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1227

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

[`Collection`](Collection.md)\<`TResult`\>

##### See

_.map

#### Call Signature

> **map**(`iteratee`): [`Collection`](Collection.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1231

##### Parameters

###### iteratee

[`PropertyName`](../type-aliases/PropertyName.md)

##### Returns

[`Collection`](Collection.md)\<`any`\>

##### See

_.map

#### Call Signature

> **map**(`iteratee`): [`Collection`](Collection.md)\<`boolean`\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1235

##### Parameters

###### iteratee

`object` \| \[[`PropertyName`](../type-aliases/PropertyName.md), `any`\]

##### Returns

[`Collection`](Collection.md)\<`boolean`\>

##### See

_.map

#### Call Signature

> **map**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1239

##### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

##### See

_.map

---

### mapKeys()

> **mapKeys**(`iteratee?`): `Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1614

#### Parameters

##### iteratee?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>

#### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\>\>

#### See

_.mapKeys

---

### mapValues()

#### Call Signature

> **mapValues**\<`TResult`\>(`callback`): `Object`\<\{ \[P in string \| number \| symbol\]: TResult
> \}\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1720

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`, `TResult`\>

##### Returns

`Object`\<\{ \[P in string \| number \| symbol\]: TResult \}\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`TResult`\>(`callback`): `Object`\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1724

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`DictionaryIterator`](../type-aliases/DictionaryIterator.md)\<`T`\[keyof `T`\], `TResult`\>

##### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`TResult`\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(`iteratee`): `Object`\<\{ \[P in string \| number \| symbol\]: boolean \}\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1728

##### Parameters

###### iteratee

`object`

##### Returns

`Object`\<\{ \[P in string \| number \| symbol\]: boolean \}\>

##### See

_.mapValues

#### Call Signature

> **mapValues**\<`TKey`\>(`iteratee`): `Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof
> `T`\]\[`TKey`\]\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1732

##### Type Parameters

###### TKey

`TKey` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### iteratee

`TKey`

##### Returns

`Object`\<[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\[`TKey`\]\>\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(`iteratee`): `Object`\<\{ \[P in string \| number \| symbol\]: any \}\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1736

##### Parameters

###### iteratee

`string`

##### Returns

`Object`\<\{ \[P in string \| number \| symbol\]: any \}\>

##### See

_.mapValues

#### Call Signature

> **mapValues**(): `Object`\<`T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1740

##### Returns

`Object`\<`T`\>

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

### merge()

#### Call Signature

> **merge**\<`TSource`\>(`source`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1860

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.merge

#### Call Signature

> **merge**\<`TSource1`, `TSource2`\>(`source1`, `source2`): `Object`\<`T` & `TSource1` &
> `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1864

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.merge

#### Call Signature

> **merge**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`): `Object`\<`T` &
> `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1868

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.merge

#### Call Signature

> **merge**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1872

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.merge

#### Call Signature

> **merge**(...`otherArgs`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1876

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.merge

---

### mergeWith()

#### Call Signature

> **mergeWith**\<`TSource`\>(`source`, `customizer`): `Object`\<`T` & `TSource`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1959

##### Type Parameters

###### TSource

`TSource`

##### Parameters

###### source

`TSource`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`Object`\<`T` & `TSource`\>

##### See

_.mergeWith

#### Call Signature

> **mergeWith**\<`TSource1`, `TSource2`\>(`source1`, `source2`, `customizer`): `Object`\<`T` &
> `TSource1` & `TSource2`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1963

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2`\>

##### See

_.mergeWith

#### Call Signature

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`\>(`source1`, `source2`, `source3`,
> `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1967

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3`\>

##### See

_.mergeWith

#### Call Signature

> **mergeWith**\<`TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`source1`, `source2`, `source3`,
> `source4`, `customizer`): `Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1971

##### Type Parameters

###### TSource1

`TSource1`

###### TSource2

`TSource2`

###### TSource3

`TSource3`

###### TSource4

`TSource4`

##### Parameters

###### source1

`TSource1`

###### source2

`TSource2`

###### source3

`TSource3`

###### source4

`TSource4`

###### customizer

(`value`, `srcValue`, `key`, `object`, `source`, `stack`) => `any`

##### Returns

`Object`\<`T` & `TSource1` & `TSource2` & `TSource3` & `TSource4`\>

##### See

_.mergeWith

#### Call Signature

> **mergeWith**(...`otherArgs`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1975

##### Parameters

###### otherArgs

...`any`[]

##### Returns

`Object`\<`any`\>

##### See

_.mergeWith

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

### omit()

#### Call Signature

> **omit**\<`K`\>(...`paths`): `Object`\<[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2039

##### Type Parameters

###### K

`K` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### paths

...[`Many`](../type-aliases/Many.md)\<`K`\>[]

##### Returns

`Object`\<[`Omit`](../type-aliases/Omit.md)\<`T`, `K`\>\>

##### See

_.omit

#### Call Signature

> **omit**(...`paths`): `Object`\<`Partial`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2043

##### Parameters

###### paths

...[`Many`](../type-aliases/Many.md)\<`string` \| `number` \| `symbol` \|
\[[`PropertyName`](../type-aliases/PropertyName.md), `any`\] \|
[`PartialShallow`](../type-aliases/PartialShallow.md)\<`T`\>\>[]

##### Returns

`Object`\<`Partial`\<`T`\>\>

##### See

_.omit

---

### omitBy()

> **omitBy**(`predicate`): `Object`\<`Partial`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2098

#### Parameters

##### predicate

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

`Object`\<`Partial`\<`T`\>\>

#### See

_.omitBy

---

### orderBy()

> **orderBy**(`iteratees?`, `orders?`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1355

#### Parameters

##### iteratees?

[`Many`](../type-aliases/Many.md)\<[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`T`,
`unknown`\>\>

##### orders?

[`Many`](../type-aliases/Many.md)\<`boolean` \| `"asc"` \| `"desc"`\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

_.orderBy

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

> **partition**(`callback`): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`T`\[keyof
> `T`\][], `T`\[keyof `T`\][]\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1409

#### Parameters

##### callback

[`ValueIteratee`](../type-aliases/ValueIteratee.md)\<`T`\[keyof `T`\]\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<\[`T`\[keyof `T`\][], `T`\[keyof `T`\][]\]\>

#### See

_.partition

---

### pick()

#### Call Signature

> **pick**\<`U`\>(...`props`): `Object`\<`Pick`\<`T`, `U`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2138

##### Type Parameters

###### U

`U` _extends_ `string` \| `number` \| `symbol`

##### Parameters

###### props

...[`Many`](../type-aliases/Many.md)\<`U`\>[]

##### Returns

`Object`\<`Pick`\<`T`, `U`\>\>

##### See

_.pick

#### Call Signature

> **pick**(...`props`): `Object`\<`Partial`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2142

##### Parameters

###### props

...[`Many`](../type-aliases/Many.md)\<[`PropertyPath`](../type-aliases/PropertyPath.md)\>[]

##### Returns

`Object`\<`Partial`\<`T`\>\>

##### See

_.pick

---

### pickBy()

#### Call Signature

> **pickBy**\<`S`\>(`predicate`): `Object`\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\>
> _extends_ `T` ? [`NumericDictionary`](NumericDictionary.md)\<`S`\> :
> [`Dictionary`](Dictionary.md)\<`S`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2202

##### Type Parameters

###### S

`S`

##### Parameters

###### predicate

[`ValueKeyIterateeTypeGuard`](../type-aliases/ValueKeyIterateeTypeGuard.md)\<`T`\[keyof `T`\], `S`\>

##### Returns

`Object`\<[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> _extends_ `T` ?
[`NumericDictionary`](NumericDictionary.md)\<`S`\> : [`Dictionary`](Dictionary.md)\<`S`\>\>

##### See

_.pickBy

#### Call Signature

> **pickBy**(`predicate?`): `Object`\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\> ?
> [`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\> : `T` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`unknown`\> ?
> [`NumericDictionary`](NumericDictionary.md)\<`T`\[keyof `T`\]\> : `Partial`\<`T`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2206

##### Parameters

###### predicate?

[`ValueKeyIteratee`](../type-aliases/ValueKeyIteratee.md)\<`T`\[keyof `T`\]\>

##### Returns

`Object`\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\> ?
[`Dictionary`](Dictionary.md)\<`T`\[keyof `T`\]\> : `T` _extends_
[`NumericDictionary`](NumericDictionary.md)\<`unknown`\> ?
[`NumericDictionary`](NumericDictionary.md)\<`T`\[keyof `T`\]\> : `Partial`\<`T`\>\>

##### See

_.pickBy

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

### reduce()

#### Call Signature

> **reduce**\<`TResult`\>(`callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1487

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `TResult`, `T`\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduce

#### Call Signature

> **reduce**(`callback`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1491

##### Parameters

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `T`\[keyof `T`\],
`T`\>

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.reduce

---

### reduceRight()

#### Call Signature

> **reduceRight**\<`TResult`\>(`callback`, `accumulator`): `TResult`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1558

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `TResult`, `T`\>

###### accumulator

`TResult`

##### Returns

`TResult`

##### See

_.reduceRight

#### Call Signature

> **reduceRight**(`callback`): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1562

##### Parameters

###### callback

[`MemoObjectIterator`](../type-aliases/MemoObjectIterator.md)\<`T`\[keyof `T`\], `T`\[keyof `T`\],
`T`\>

##### Returns

`T`\[keyof `T`\] \| `undefined`

##### See

_.reduceRight

---

### reject()

> **reject**(`predicate?`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1619

#### Parameters

##### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

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

> **sample**(): `T`\[keyof `T`\] \| `undefined`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1678

#### Returns

`T`\[keyof `T`\] \| `undefined`

#### See

_.sample

---

### sampleSize()

> **sampleSize**(`n?`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1734

#### Parameters

##### n?

`number`

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

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

> **shuffle**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1789

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

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

### some()

> **some**(`predicate?`): `boolean`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1862

#### Parameters

##### predicate?

[`ObjectIterateeCustom`](../type-aliases/ObjectIterateeCustom.md)\<`T`, `boolean`\>

#### Returns

`boolean`

#### See

_.some

---

### sortBy()

> **sortBy**(...`iteratees`): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1924

#### Parameters

##### iteratees

...[`Many`](../type-aliases/Many.md)\<[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`T`\>\>[]

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

_.sortBy

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

> **toArray**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1438

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

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

> **toPlainObject**(): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1629

#### Returns

`Object`\<`any`\>

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

### transform()

#### Call Signature

> **transform**\<`TResult`\>(`iteratee`, `accumulator?`):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2422

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
`string`, `TResult`\>

###### accumulator?

`TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.transform

#### Call Signature

> **transform**\<`TResult`\>(`iteratee`, `accumulator?`):
> [`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2426

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### iteratee

[`MemoVoidDictionaryIterator`](../type-aliases/MemoVoidDictionaryIterator.md)\<`T`\[keyof `T`\],
keyof `T`, `TResult`\>

###### accumulator?

`TResult`

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.transform

#### Call Signature

> **transform**(): [`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_
> [`Dictionary`](Dictionary.md)\<`unknown`\> ? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2430

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`T` _extends_ [`Dictionary`](Dictionary.md)\<`unknown`\>
? [`Dictionary`](Dictionary.md)\<`any`\> : `T`\>

##### See

_.transform

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

> **update**(`path`, `updater`): `Object`\<`any`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2496

#### Parameters

##### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

##### updater

(`value`) => `any`

#### Returns

`Object`\<`any`\>

#### See

_.update

#### Inherited from

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md).[`update`](LoDashImplicitWrapper.md#update)

---

### updateWith()

#### Call Signature

> **updateWith**(`path`, `updater`, `customizer?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:2537

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### updater

(`oldValue`) => `any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`this`

##### See

_.updateWith

#### Call Signature

> **updateWith**\<`TResult`\>(`path`, `updater`, `customizer?`): `Object`\<`TResult`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2541

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### path

[`PropertyPath`](../type-aliases/PropertyPath.md)

###### updater

(`oldValue`) => `any`

###### customizer?

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`T`\>

##### Returns

`Object`\<`TResult`\>

##### See

_.updateWith

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

> **values**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2580

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

#### See

_.values

---

### valuesIn()

> **valuesIn**(): [`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2623

#### Returns

[`Collection`](Collection.md)\<`T`\[keyof `T`\]\>

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
