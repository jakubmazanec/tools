[**@jakubmazanec/carson-templates**](../../README.md)

---

# Interface: LoDashImplicitWrapper\<TValue\>

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1061

## Extended by

- [`Collection`](Collection.md)
- [`Function`](Function.md)
- [`String`](String.md)
- [`Object`](Object.md)
- [`Primitive`](Primitive.md)

## Type Parameters

### TValue

`TValue`

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

---

### camelCase()

> **camelCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:16

#### Returns

`string`

#### See

_.camelCase

---

### capitalize()

> **capitalize**(): `string` _extends_ `TValue` ? `TValue` & `string` :
> `Capitalize`\<`Lowercase`\<`TValue` _extends_ `string` ? `TValue` : `never`\>\>

Defined in: node\_modules/@types/lodash/common/string.d.ts:38

#### Returns

`string` _extends_ `TValue` ? `TValue` & `string` : `Capitalize`\<`Lowercase`\<`TValue` _extends_
`string` ? `TValue` : `never`\>\>

#### See

_.capitalize

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

---

### clone()

> **clone**(): `TValue`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:101

#### Returns

`TValue`

#### See

_.clone

---

### cloneDeep()

> **cloneDeep**(): `TValue`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:105

#### Returns

`TValue`

#### See

_.cloneDeep

---

### cloneDeepWith()

#### Call Signature

> **cloneDeepWith**(`customizer`): `any`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:109

##### Parameters

###### customizer

[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`TValue`\>

##### Returns

`any`

##### See

_.cloneDeepWith

#### Call Signature

> **cloneDeepWith**(): `TValue`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:113

##### Returns

`TValue`

##### See

_.cloneDeepWith

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

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`, `TResult`\>

##### Returns

`TResult`

##### See

_.cloneWith

#### Call Signature

> **cloneWith**\<`TResult`\>(`customizer`): `TValue` \| `TResult`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:121

##### Type Parameters

###### TResult

`TResult`

##### Parameters

###### customizer

[`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`, `TResult` \|
`undefined`\>

##### Returns

`TValue` \| `TResult`

##### See

_.cloneWith

#### Call Signature

> **cloneWith**(): `TValue`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:125

##### Returns

`TValue`

##### See

_.cloneWith

---

### commit()

> **commit**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:82

#### Returns

`this`

#### See

_.commit

---

### conforms()

> **conforms**(): [`Function`](Function.md)\<(`value`) => `boolean`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:100

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

_.conforms

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

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `TValue`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:122

#### Returns

[`Function`](Function.md)\<() => `TValue`\>

#### See

_.constant

---

### deburr()

> **deburr**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:61

#### Returns

`string`

#### See

_.deburr

---

### defaultTo()

#### Call Signature

> **defaultTo**(`defaultValue`): `TValue`

Defined in: node\_modules/@types/lodash/common/util.d.ts:151

##### Parameters

###### defaultValue

`TValue`

##### Returns

`TValue`

##### See

_.defaultTo

#### Call Signature

> **defaultTo**\<`TDefault`\>(`defaultValue`): `TValue` _extends_ `null` \| `undefined` ? `TDefault`
> : `TValue` \| `TDefault`

Defined in: node\_modules/@types/lodash/common/util.d.ts:155

##### Type Parameters

###### TDefault

`TDefault`

##### Parameters

###### defaultValue

`TDefault`

##### Returns

`TValue` _extends_ `null` \| `undefined` ? `TDefault` : `TValue` \| `TDefault`

##### See

_.defaultTo

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

---

### entries()

> **entries**(): [`Collection`](Collection.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:598

#### Returns

[`Collection`](Collection.md)\<\[`string`, `any`\]\>

#### See

_.entries

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<\[`string`, `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:632

#### Returns

[`Collection`](Collection.md)\<\[`string`, `any`\]\>

#### See

_.entriesIn

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

---

### escape()

> **escape**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:118

#### Returns

`string`

#### See

_.escape

---

### escapeRegExp()

> **escapeRegExp**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:141

#### Returns

`string`

#### See

_.escapeRegExp

---

### findKey()

> **findKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:817

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

`string` \| `undefined`

#### See

_.findKey

---

### findLastKey()

> **findLastKey**(`predicate?`): `string` \| `undefined`

Defined in: node\_modules/@types/lodash/common/object.d.ts:839

#### Parameters

##### predicate?

[`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

`string` \| `undefined`

#### See

_.findLastKey

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

---

### forIn()

> **forIn**(`iteratee?`): `this`

Defined in: node\_modules/@types/lodash/common/object.d.ts:867

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

Defined in: node\_modules/@types/lodash/common/object.d.ts:893

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

Defined in: node\_modules/@types/lodash/common/object.d.ts:921

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

Defined in: node\_modules/@types/lodash/common/object.d.ts:947

#### Parameters

##### iteratee?

[`ObjectIterator`](../type-aliases/ObjectIterator.md)\<`TValue`, `any`\>

#### Returns

`this`

#### See

_.forOwnRight

---

### functions()

> **functions**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:981

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.functions

---

### functionsIn()

> **functionsIn**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1015

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.functionsIn

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

---

### identity()

> **identity**(): `TValue`

Defined in: node\_modules/@types/lodash/common/util.d.ts:387

#### Returns

`TValue`

#### See

_.identity

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

---

### invert()

> **invert**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1456

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

_.invert

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

---

### isArguments()

> **isArguments**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:328

#### Returns

`boolean`

#### See

_.isArguments

---

### isArray()

> **isArray**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:350

#### Returns

`boolean`

#### See

_.isArray

---

### isArrayBuffer()

> **isArrayBuffer**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:372

#### Returns

`boolean`

#### See

_.isArrayBuffer

---

### isArrayLike()

> **isArrayLike**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:418

#### Returns

`boolean`

#### See

_.isArrayLike

---

### isArrayLikeObject()

> **isArrayLikeObject**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:463

#### Returns

`boolean`

#### See

_.isArrayLikeObject

---

### isBoolean()

> **isBoolean**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:485

#### Returns

`boolean`

#### See

_.isBoolean

---

### isBuffer()

> **isBuffer**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:507

#### Returns

`boolean`

#### See

_.isBuffer

---

### isDate()

> **isDate**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:529

#### Returns

`boolean`

#### See

_.isDate

---

### isElement()

> **isElement**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:551

#### Returns

`boolean`

#### See

_.isElement

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:581

#### Returns

`boolean`

#### See

_.isEmpty

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

---

### isError()

> **isError**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:691

#### Returns

`boolean`

#### See

_.isError

---

### isFinite()

> **isFinite**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:715

#### Returns

`boolean`

#### See

_.isFinite

---

### isFunction()

> **isFunction**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:737

#### Returns

`boolean`

#### See

_.isFunction

---

### isInteger()

> **isInteger**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:775

#### Returns

`boolean`

#### See

_.isInteger

---

### isLength()

> **isLength**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:813

#### Returns

`boolean`

#### See

_.isLength

---

### isMap()

> **isMap**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:835

#### Returns

`boolean`

#### See

_.isMap

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

---

### isNaN()

> **isNaN**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:941

#### Returns

`boolean`

#### See

_.isNaN

---

### isNative()

> **isNative**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:963

#### Returns

`boolean`

#### See

_.isNative

---

### isNil()

> **isNil**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:996

#### Returns

`boolean`

#### See

_.isNil

---

### isNull()

> **isNull**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1018

#### Returns

`boolean`

#### See

_.isNull

---

### isNumber()

> **isNumber**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1042

#### Returns

`boolean`

#### See

_.isNumber

---

### isObject()

> **isObject**(): `this is LoDashImplicitWrapper<object>`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1065

#### Returns

`this is LoDashImplicitWrapper<object>`

#### See

_.isObject

---

### isObjectLike()

> **isObjectLike**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1102

#### Returns

`boolean`

#### See

_.isObjectLike

---

### isPlainObject()

> **isPlainObject**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1127

#### Returns

`boolean`

#### See

_.isPlainObject

---

### isRegExp()

> **isRegExp**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1149

#### Returns

`boolean`

#### See

_.isRegExp

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1188

#### Returns

`boolean`

#### See

_.isSafeInteger

---

### isSet()

> **isSet**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1210

#### Returns

`boolean`

#### See

_.isSet

---

### isString()

> **isString**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1232

#### Returns

`boolean`

#### See

_.isString

---

### isSymbol()

> **isSymbol**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1262

#### Returns

`boolean`

#### See

_.isSymbol

---

### isTypedArray()

> **isTypedArray**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1284

#### Returns

`boolean`

#### See

_.isTypedArray

---

### isUndefined()

> **isUndefined**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1306

#### Returns

`boolean`

#### See

_.isUndefined

---

### isWeakMap()

> **isWeakMap**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1328

#### Returns

`boolean`

#### See

_.isWeakMap

---

### isWeakSet()

> **isWeakSet**(): `boolean`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1350

#### Returns

`boolean`

#### See

_.isWeakSet

---

### kebabCase()

> **kebabCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:163

#### Returns

`string`

#### See

_.kebabCase

---

### keys()

> **keys**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1558

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.keys

---

### keysIn()

> **keysIn**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:1581

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.keysIn

---

### lowerCase()

> **lowerCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:185

#### Returns

`string`

#### See

_.lowerCase

---

### lowerFirst()

> **lowerFirst**(): `TValue` _extends_ `string` ? `Uncapitalize`\<`TValue`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:207

#### Returns

`TValue` _extends_ `string` ? `Uncapitalize`\<`TValue`\> : `string`

#### See

_.lowerFirst

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

---

### mean()

> **mean**(): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:174

#### Returns

`number`

#### See

_.mean

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

---

### methodOf()

> **methodOf**(...`args`): `LoDashImplicitWrapper`\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:593

#### Parameters

##### args

...`any`[]

#### Returns

`LoDashImplicitWrapper`\<(`path`) => `any`\>

#### See

_.methodOf

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

#### Call Signature

> **mixin**(`options?`): `LoDashImplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:636

##### Parameters

###### options?

[`MixinOptions`](MixinOptions.md)

##### Returns

`LoDashImplicitWrapper`\<[`LoDashStatic`](LoDashStatic.md)\>

##### See

_.mixin

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

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:661

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

_.noConflict

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

---

### now()

> **now**(): `number`

Defined in: node\_modules/@types/lodash/common/date.d.ts:15

#### Returns

`number`

#### See

_.now

---

### nthArg()

> **nthArg**(): [`Function`](Function.md)\<(...`args`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:704

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

_.nthArg

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

---

### propertyOf()

> **propertyOf**(): `LoDashImplicitWrapper`\<(`path`) => `any`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:862

#### Returns

`LoDashImplicitWrapper`\<(`path`) => `any`\>

#### See

_.propertyOf

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

---

### reverse()

> **reverse**(): `this`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:108

#### Returns

`this`

#### See

_.reverse

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

---

### runInContext()

> **runInContext**(): [`LoDashStatic`](LoDashStatic.md)

Defined in: node\_modules/@types/lodash/common/util.d.ts:966

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

_.runInContext

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

`this`

##### See

_.setWith

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

[`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

_.setWith

---

### size()

> **size**(): `number`

Defined in: node\_modules/@types/lodash/common/collection.d.ts:1829

#### Returns

`number`

#### See

_.size

---

### snakeCase()

> **snakeCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:389

#### Returns

`string`

#### See

_.snakeCase

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

---

### startCase()

> **startCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:441

#### Returns

`string`

#### See

_.startCase

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

---

### stubArray()

> **stubArray**(): `any`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:981

#### Returns

`any`[]

#### See

_.stubArray

---

### stubFalse()

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1002

##### Returns

`false`

##### See

_.stubFalse

#### Call Signature

> **stubFalse**(): `false`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1211

##### Returns

`false`

##### See

_.stubFalse

---

### stubObject()

> **stubObject**(): `any`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1023

#### Returns

`any`

#### See

_.stubObject

---

### stubString()

> **stubString**(): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1044

#### Returns

`string`

#### See

_.stubString

---

### stubTrue()

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1065

##### Returns

`true`

##### See

_.stubTrue

#### Call Signature

> **stubTrue**(): `true`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1186

##### Returns

`true`

##### See

_.stubTrue

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

---

### sum()

> **sum**(): `number`

Defined in: node\_modules/@types/lodash/common/math.d.ts:363

#### Returns

`number`

#### See

_.sum

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

#### Call Signature

> **times**(): `number`[]

Defined in: node\_modules/@types/lodash/common/util.d.ts:1097

##### Returns

`number`[]

##### See

_.times

---

### toFinite()

> **toFinite**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1493

#### Returns

`number`

#### See

_.toFinite

---

### toInteger()

> **toInteger**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1531

#### Returns

`number`

#### See

_.toInteger

---

### toJSON()

> **toJSON**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:121

#### Returns

`TValue`

#### See

_.toJSON

---

### toLength()

> **toLength**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1570

#### Returns

`number`

#### See

_.toLength

---

### toLower()

> **toLower**(): `TValue` _extends_ `string` ? `Lowercase`\<`TValue`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:542

#### Returns

`TValue` _extends_ `string` ? `Lowercase`\<`TValue`\> : `string`

#### See

_.toLower

---

### toNumber()

> **toNumber**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1606

#### Returns

`number`

#### See

_.toNumber

---

### toPairs()

> **toPairs**(): [`Collection`](Collection.md)\<\[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2345

#### Returns

[`Collection`](Collection.md)\<\[`string`, `TValue` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ?
`U` : `TValue` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairs

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<\[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

Defined in: node\_modules/@types/lodash/common/object.d.ts:2370

#### Returns

[`Collection`](Collection.md)\<\[`string`, `TValue` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ?
`U` : `TValue` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`\]\>

#### See

_.toPairsIn

---

### toPath()

> **toPath**(): [`Collection`](Collection.md)\<`string`\>

Defined in: node\_modules/@types/lodash/common/util.d.ts:1140

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

_.toPath

---

### toPlainObject()

> **toPlainObject**(): [`Object`](Object.md)\<`any`\>

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1629

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

_.toPlainObject

---

### toSafeInteger()

> **toSafeInteger**(): `number`

Defined in: node\_modules/@types/lodash/common/lang.d.ts:1666

#### Returns

`number`

#### See

_.toSafeInteger

---

### toUpper()

> **toUpper**(): `TValue` _extends_ `string` ? `Uppercase`\<`TValue`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:564

#### Returns

`TValue` _extends_ `string` ? `Uppercase`\<`TValue`\> : `string`

#### See

_.toUpper

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

---

### unescape()

> **unescape**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:709

#### Returns

`string`

#### See

_.unescape

---

### uniqueId()

> **uniqueId**(): `string`

Defined in: node\_modules/@types/lodash/common/util.d.ts:1162

#### Returns

`string`

#### See

_.uniqueId

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

---

### upperCase()

> **upperCase**(): `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:731

#### Returns

`string`

#### See

_.upperCase

---

### upperFirst()

> **upperFirst**(): `TValue` _extends_ `string` ? `Capitalize`\<`TValue`\> : `string`

Defined in: node\_modules/@types/lodash/common/string.d.ts:753

#### Returns

`TValue` _extends_ `string` ? `Capitalize`\<`TValue`\> : `string`

#### See

_.upperFirst

---

### value()

> **value**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:141

#### Returns

`TValue`

#### See

_.value

---

### valueOf()

> **valueOf**(): `TValue`

Defined in: node\_modules/@types/lodash/common/seq.d.ts:154

#### Returns

`TValue`

#### See

_.valueOf

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
