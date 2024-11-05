[**@jakubmazanec/carson-templates**](../../../README.md) • **Docs**

---

# Interface: LoDashImplicitWrapper\<TValue\>

## Extended by

- [`Collection`](Collection.md)
- [`Function`](Function.md)
- [`String`](String.md)
- [`Object`](Object.md)
- [`Primitive`](Primitive.md)

## Type parameters

• **TValue**

## Methods

### add()

> **add**(`addend`): `number`

#### Parameters

• **addend**: `number`

#### Returns

`number`

#### See

\_.add

#### Source

node_modules/@types/lodash/common/math.d.ts:17

---

### attempt()

> **attempt**\<`TResult`\>(...`args`): `Error` \| `TResult`

#### Type parameters

• **TResult**

#### Parameters

• ...**args**: `any`[]

#### Returns

`Error` \| `TResult`

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

#### See

\_.bindKey

#### Source

node_modules/@types/lodash/common/function.d.ts:133

---

### camelCase()

> **camelCase**(): `string`

#### Returns

`string`

#### See

\_.camelCase

#### Source

node_modules/@types/lodash/common/string.d.ts:16

---

### capitalize()

> **capitalize**(): `string`

#### Returns

`string`

#### See

\_.capitalize

#### Source

node_modules/@types/lodash/common/string.d.ts:38

---

### ceil()

> **ceil**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### See

\_.ceil

#### Source

node_modules/@types/lodash/common/math.d.ts:40

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

##### Source

node_modules/@types/lodash/common/number.d.ts:44

#### clamp(upper)

> **clamp**(`upper`): `number`

##### Parameters

• **upper**: `number`

##### Returns

`number`

##### See

\_.clamp

##### Source

node_modules/@types/lodash/common/number.d.ts:48

---

### clone()

> **clone**(): `TValue`

#### Returns

`TValue`

#### See

\_.clone

#### Source

node_modules/@types/lodash/common/lang.d.ts:101

---

### cloneDeep()

> **cloneDeep**(): `TValue`

#### Returns

`TValue`

#### See

\_.cloneDeep

#### Source

node_modules/@types/lodash/common/lang.d.ts:105

---

### cloneDeepWith()

#### cloneDeepWith(customizer)

> **cloneDeepWith**(`customizer`): `any`

##### Parameters

• **customizer**:
[`CloneDeepWithCustomizer`](../type-aliases/CloneDeepWithCustomizer.md)\<`TValue`\>

##### Returns

`any`

##### See

\_.cloneDeepWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:109

#### cloneDeepWith()

> **cloneDeepWith**(): `TValue`

##### Returns

`TValue`

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

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`,
`TResult`\>

##### Returns

`TResult`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:117

#### cloneWith(customizer)

> **cloneWith**\<`TResult`\>(`customizer`): `TValue` \| `TResult`

##### Type parameters

• **TResult**

##### Parameters

• **customizer**: [`CloneWithCustomizer`](../type-aliases/CloneWithCustomizer.md)\<`TValue`,
`undefined` \| `TResult`\>

##### Returns

`TValue` \| `TResult`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:121

#### cloneWith()

> **cloneWith**(): `TValue`

##### Returns

`TValue`

##### See

\_.cloneWith

##### Source

node_modules/@types/lodash/common/lang.d.ts:125

---

### commit()

> **commit**(): `this`

#### Returns

`this`

#### See

\_.commit

#### Source

node_modules/@types/lodash/common/seq.d.ts:82

---

### conforms()

> **conforms**(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

#### See

\_.conforms

#### Source

node_modules/@types/lodash/common/util.d.ts:100

---

### conformsTo()

> **conformsTo**(`source`): `boolean`

#### Parameters

• **source**: [`ConformsPredicateObject`](../type-aliases/ConformsPredicateObject.md)\<`TValue`\>

#### Returns

`boolean`

#### See

\_.conformsTo

#### Source

node_modules/@types/lodash/common/lang.d.ts:215

---

### constant()

> **constant**(): [`Function`](Function.md)\<() => `TValue`\>

#### Returns

[`Function`](Function.md)\<() => `TValue`\>

#### See

\_.constant

#### Source

node_modules/@types/lodash/common/util.d.ts:122

---

### deburr()

> **deburr**(): `string`

#### Returns

`string`

#### See

\_.deburr

#### Source

node_modules/@types/lodash/common/string.d.ts:61

---

### defaultTo()

#### defaultTo(defaultValue)

> **defaultTo**(`defaultValue`): `TValue`

##### Parameters

• **defaultValue**: `TValue`

##### Returns

`TValue`

##### See

\_.defaultTo

##### Source

node_modules/@types/lodash/common/util.d.ts:151

#### defaultTo(defaultValue)

> **defaultTo**\<`TDefault`\>(`defaultValue`): `TValue` _extends_ `undefined` \| `null` ? `TDefault`
> : `TValue` \| `TDefault`

##### Type parameters

• **TDefault**

##### Parameters

• **defaultValue**: `TDefault`

##### Returns

`TValue` _extends_ `undefined` \| `null` ? `TDefault` : `TValue` \| `TDefault`

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

#### See

\_.endsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:85

---

### entries()

> **entries**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### See

\_.entries

#### Source

node_modules/@types/lodash/common/object.d.ts:598

---

### entriesIn()

> **entriesIn**(): [`Collection`](Collection.md)\<[`string`, `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `any`]\>

#### See

\_.entriesIn

#### Source

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

#### Source

node_modules/@types/lodash/common/lang.d.ts:260

---

### escape()

> **escape**(): `string`

#### Returns

`string`

#### See

\_.escape

#### Source

node_modules/@types/lodash/common/string.d.ts:118

---

### escapeRegExp()

> **escapeRegExp**(): `string`

#### Returns

`string`

#### See

\_.escapeRegExp

#### Source

node_modules/@types/lodash/common/string.d.ts:141

---

### findKey()

> **findKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

`undefined` \| `string`

#### See

\_.findKey

#### Source

node_modules/@types/lodash/common/object.d.ts:817

---

### findLastKey()

> **findLastKey**(`predicate`?): `undefined` \| `string`

#### Parameters

• **predicate?**: [`ObjectIteratee`](../type-aliases/ObjectIteratee.md)\<`TValue`\>

#### Returns

`undefined` \| `string`

#### See

\_.findLastKey

#### Source

node_modules/@types/lodash/common/object.d.ts:839

---

### floor()

> **floor**(`precision`?): `number`

#### Parameters

• **precision?**: `number`

#### Returns

`number`

#### See

\_.floor

#### Source

node_modules/@types/lodash/common/math.d.ts:86

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

node_modules/@types/lodash/common/object.d.ts:867

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

node_modules/@types/lodash/common/object.d.ts:893

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

node_modules/@types/lodash/common/object.d.ts:921

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

node_modules/@types/lodash/common/object.d.ts:947

---

### functions()

> **functions**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.functions

#### Source

node_modules/@types/lodash/common/object.d.ts:981

---

### functionsIn()

> **functionsIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.functionsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1015

---

### gt()

> **gt**(`other`): `boolean`

#### Parameters

• **other**: `any`

#### Returns

`boolean`

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

#### See

\_.hasIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1376

---

### identity()

> **identity**(): `TValue`

#### Returns

`TValue`

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

#### See

\_.inRange

#### Source

node_modules/@types/lodash/common/number.d.ts:77

---

### invert()

> **invert**(): [`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### Returns

[`Object`](Object.md)\<[`Dictionary`](Dictionary.md)\<`string`\>\>

#### See

\_.invert

#### Source

node_modules/@types/lodash/common/object.d.ts:1399

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

##### See

\_.invokeMap

##### Source

node_modules/@types/lodash/common/collection.d.ts:1069

---

### isArguments()

> **isArguments**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArguments

#### Source

node_modules/@types/lodash/common/lang.d.ts:328

---

### isArray()

> **isArray**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:354

---

### isArrayBuffer()

> **isArrayBuffer**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:376

---

### isArrayLike()

> **isArrayLike**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:422

---

### isArrayLikeObject()

> **isArrayLikeObject**(): `boolean`

#### Returns

`boolean`

#### See

\_.isArrayLikeObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:467

---

### isBoolean()

> **isBoolean**(): `boolean`

#### Returns

`boolean`

#### See

\_.isBoolean

#### Source

node_modules/@types/lodash/common/lang.d.ts:489

---

### isBuffer()

> **isBuffer**(): `boolean`

#### Returns

`boolean`

#### See

\_.isBuffer

#### Source

node_modules/@types/lodash/common/lang.d.ts:511

---

### isDate()

> **isDate**(): `boolean`

#### Returns

`boolean`

#### See

\_.isDate

#### Source

node_modules/@types/lodash/common/lang.d.ts:533

---

### isElement()

> **isElement**(): `boolean`

#### Returns

`boolean`

#### See

\_.isElement

#### Source

node_modules/@types/lodash/common/lang.d.ts:555

---

### isEmpty()

> **isEmpty**(): `boolean`

#### Returns

`boolean`

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

#### See

\_.isEqualWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:672

---

### isError()

> **isError**(): `boolean`

#### Returns

`boolean`

#### See

\_.isError

#### Source

node_modules/@types/lodash/common/lang.d.ts:695

---

### isFinite()

> **isFinite**(): `boolean`

#### Returns

`boolean`

#### See

\_.isFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:719

---

### isFunction()

> **isFunction**(): `boolean`

#### Returns

`boolean`

#### See

\_.isFunction

#### Source

node_modules/@types/lodash/common/lang.d.ts:741

---

### isInteger()

> **isInteger**(): `boolean`

#### Returns

`boolean`

#### See

\_.isInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:779

---

### isLength()

> **isLength**(): `boolean`

#### Returns

`boolean`

#### See

\_.isLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:817

---

### isMap()

> **isMap**(): `boolean`

#### Returns

`boolean`

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

#### See

\_.isMatchWith

#### Source

node_modules/@types/lodash/common/lang.d.ts:921

---

### isNaN()

> **isNaN**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNaN

#### Source

node_modules/@types/lodash/common/lang.d.ts:945

---

### isNative()

> **isNative**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNative

#### Source

node_modules/@types/lodash/common/lang.d.ts:967

---

### isNil()

> **isNil**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNil

#### Source

node_modules/@types/lodash/common/lang.d.ts:1000

---

### isNull()

> **isNull**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNull

#### Source

node_modules/@types/lodash/common/lang.d.ts:1022

---

### isNumber()

> **isNumber**(): `boolean`

#### Returns

`boolean`

#### See

\_.isNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1046

---

### isObject()

> **isObject**(): `this is LoDashImplicitWrapper<object>`

#### Returns

`this is LoDashImplicitWrapper<object>`

#### See

\_.isObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1069

---

### isObjectLike()

> **isObjectLike**(): `boolean`

#### Returns

`boolean`

#### See

\_.isObjectLike

#### Source

node_modules/@types/lodash/common/lang.d.ts:1106

---

### isPlainObject()

> **isPlainObject**(): `boolean`

#### Returns

`boolean`

#### See

\_.isPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1131

---

### isRegExp()

> **isRegExp**(): `boolean`

#### Returns

`boolean`

#### See

\_.isRegExp

#### Source

node_modules/@types/lodash/common/lang.d.ts:1153

---

### isSafeInteger()

> **isSafeInteger**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1192

---

### isSet()

> **isSet**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1214

---

### isString()

> **isString**(): `boolean`

#### Returns

`boolean`

#### See

\_.isString

#### Source

node_modules/@types/lodash/common/lang.d.ts:1236

---

### isSymbol()

> **isSymbol**(): `boolean`

#### Returns

`boolean`

#### See

\_.isSymbol

#### Source

node_modules/@types/lodash/common/lang.d.ts:1266

---

### isTypedArray()

> **isTypedArray**(): `boolean`

#### Returns

`boolean`

#### See

\_.isTypedArray

#### Source

node_modules/@types/lodash/common/lang.d.ts:1288

---

### isUndefined()

> **isUndefined**(): `boolean`

#### Returns

`boolean`

#### See

\_.isUndefined

#### Source

node_modules/@types/lodash/common/lang.d.ts:1310

---

### isWeakMap()

> **isWeakMap**(): `boolean`

#### Returns

`boolean`

#### See

\_.isWeakMap

#### Source

node_modules/@types/lodash/common/lang.d.ts:1332

---

### isWeakSet()

> **isWeakSet**(): `boolean`

#### Returns

`boolean`

#### See

\_.isWeakSet

#### Source

node_modules/@types/lodash/common/lang.d.ts:1354

---

### kebabCase()

> **kebabCase**(): `string`

#### Returns

`string`

#### See

\_.kebabCase

#### Source

node_modules/@types/lodash/common/string.d.ts:163

---

### keys()

> **keys**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.keys

#### Source

node_modules/@types/lodash/common/object.d.ts:1501

---

### keysIn()

> **keysIn**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.keysIn

#### Source

node_modules/@types/lodash/common/object.d.ts:1524

---

### lowerCase()

> **lowerCase**(): `string`

#### Returns

`string`

#### See

\_.lowerCase

#### Source

node_modules/@types/lodash/common/string.d.ts:185

---

### lowerFirst()

> **lowerFirst**(): `string`

#### Returns

`string`

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

#### See

\_.lte

#### Source

node_modules/@types/lodash/common/lang.d.ts:1400

---

### matches()

> **matches**\<`V`\>(): [`Function`](Function.md)\<(`value`) => `boolean`\>

#### Type parameters

• **V**

#### Returns

[`Function`](Function.md)\<(`value`) => `boolean`\>

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

##### See

\_.matchesProperty

##### Source

node_modules/@types/lodash/common/util.d.ts:541

---

### mean()

> **mean**(): `number`

#### Returns

`number`

#### See

\_.mean

#### Source

node_modules/@types/lodash/common/math.d.ts:173

---

### method()

> **method**(...`args`): [`Function`](Function.md)\<(`object`) => `any`\>

#### Parameters

• ...**args**: `any`[]

#### Returns

[`Function`](Function.md)\<(`object`) => `any`\>

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

#### See

\_.multiply

#### Source

node_modules/@types/lodash/common/math.d.ts:283

---

### noConflict()

> **noConflict**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

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

#### See

\_.noop

#### Source

node_modules/@types/lodash/common/util.d.ts:682

---

### now()

> **now**(): `number`

#### Returns

`number`

#### See

\_.now

#### Source

node_modules/@types/lodash/common/date.d.ts:15

---

### nthArg()

> **nthArg**(): [`Function`](Function.md)\<(...`args`) => `any`\>

#### Returns

[`Function`](Function.md)\<(...`args`) => `any`\>

#### See

\_.nthArg

#### Source

node_modules/@types/lodash/common/util.d.ts:704

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

#### See

\_.parseInt

#### Source

node_modules/@types/lodash/common/string.d.ts:308

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

node_modules/@types/lodash/common/seq.d.ts:95

---

### property()

> **property**\<`TObj`, `TResult`\>(): [`Function`](Function.md)\<(`obj`) => `TResult`\>

#### Type parameters

• **TObj**

• **TResult**

#### Returns

[`Function`](Function.md)\<(`obj`) => `TResult`\>

#### See

\_.property

#### Source

node_modules/@types/lodash/common/util.d.ts:839

---

### propertyOf()

> **propertyOf**(): [`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

#### Returns

[`LoDashImplicitWrapper`](LoDashImplicitWrapper.md)\<(`path`) => `any`\>

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

#### See

\_.rangeRight

#### Source

node_modules/@types/lodash/common/util.d.ts:944

---

### repeat()

> **repeat**(`n`?): `string`

#### Parameters

• **n?**: `number`

#### Returns

`string`

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

#### See

\_.result

#### Source

node_modules/@types/lodash/common/object.d.ts:2183

---

### reverse()

> **reverse**(): `this`

#### Returns

`this`

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

#### See

\_.round

#### Source

node_modules/@types/lodash/common/math.d.ts:306

---

### runInContext()

> **runInContext**(): [`LoDashStatic`](LoDashStatic.md)

#### Returns

[`LoDashStatic`](LoDashStatic.md)

#### See

\_.runInContext

#### Source

node_modules/@types/lodash/common/util.d.ts:966

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

`this`

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

• **customizer?**: [`SetWithCustomizer`](../type-aliases/SetWithCustomizer.md)\<`TValue`\>

##### Returns

[`ImpChain`](../type-aliases/ImpChain.md)\<`TResult`\>

##### See

\_.setWith

##### Source

node_modules/@types/lodash/common/object.d.ts:2255

---

### size()

> **size**(): `number`

#### Returns

`number`

#### See

\_.size

#### Source

node_modules/@types/lodash/common/collection.d.ts:1825

---

### snakeCase()

> **snakeCase**(): `string`

#### Returns

`string`

#### See

\_.snakeCase

#### Source

node_modules/@types/lodash/common/string.d.ts:389

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

#### Source

node_modules/@types/lodash/common/string.d.ts:419

---

### startCase()

> **startCase**(): `string`

#### Returns

`string`

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

#### See

\_.startsWith

#### Source

node_modules/@types/lodash/common/string.d.ts:465

---

### stubArray()

> **stubArray**(): `any`[]

#### Returns

`any`[]

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

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1002

#### stubFalse()

> **stubFalse**(): `false`

##### Returns

`false`

##### See

\_.stubFalse

##### Source

node_modules/@types/lodash/common/util.d.ts:1211

---

### stubObject()

> **stubObject**(): `any`

#### Returns

`any`

#### See

\_.stubObject

#### Source

node_modules/@types/lodash/common/util.d.ts:1023

---

### stubString()

> **stubString**(): `string`

#### Returns

`string`

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

##### See

\_.stubTrue

##### Source

node_modules/@types/lodash/common/util.d.ts:1065

#### stubTrue()

> **stubTrue**(): `true`

##### Returns

`true`

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

#### See

\_.subtract

#### Source

node_modules/@types/lodash/common/math.d.ts:334

---

### sum()

> **sum**(): `number`

#### Returns

`number`

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

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1093

#### times()

> **times**(): `number`[]

##### Returns

`number`[]

##### See

\_.times

##### Source

node_modules/@types/lodash/common/util.d.ts:1097

---

### toFinite()

> **toFinite**(): `number`

#### Returns

`number`

#### See

\_.toFinite

#### Source

node_modules/@types/lodash/common/lang.d.ts:1497

---

### toInteger()

> **toInteger**(): `number`

#### Returns

`number`

#### See

\_.toInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1535

---

### toJSON()

> **toJSON**(): `TValue`

#### Returns

`TValue`

#### See

\_.toJSON

#### Source

node_modules/@types/lodash/common/seq.d.ts:121

---

### toLength()

> **toLength**(): `number`

#### Returns

`number`

#### See

\_.toLength

#### Source

node_modules/@types/lodash/common/lang.d.ts:1574

---

### toLower()

> **toLower**(): `string`

#### Returns

`string`

#### See

\_.toLower

#### Source

node_modules/@types/lodash/common/string.d.ts:542

---

### toNumber()

> **toNumber**(): `number`

#### Returns

`number`

#### See

\_.toNumber

#### Source

node_modules/@types/lodash/common/lang.d.ts:1610

---

### toPairs()

> **toPairs**(): [`Collection`](Collection.md)\<[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `TValue` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ?
`U` : `TValue` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairs

#### Source

node_modules/@types/lodash/common/object.d.ts:2284

---

### toPairsIn()

> **toPairsIn**(): [`Collection`](Collection.md)\<[`string`, `TValue` _extends_
> [`Dictionary`](Dictionary.md)\<`U`\> ? `U` : `TValue` _extends_
> [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### Returns

[`Collection`](Collection.md)\<[`string`, `TValue` _extends_ [`Dictionary`](Dictionary.md)\<`U`\> ?
`U` : `TValue` _extends_ [`NumericDictionary`](NumericDictionary.md)\<`V`\> ? `V` : `any`]\>

#### See

\_.toPairsIn

#### Source

node_modules/@types/lodash/common/object.d.ts:2309

---

### toPath()

> **toPath**(): [`Collection`](Collection.md)\<`string`\>

#### Returns

[`Collection`](Collection.md)\<`string`\>

#### See

\_.toPath

#### Source

node_modules/@types/lodash/common/util.d.ts:1140

---

### toPlainObject()

> **toPlainObject**(): [`Object`](Object.md)\<`any`\>

#### Returns

[`Object`](Object.md)\<`any`\>

#### See

\_.toPlainObject

#### Source

node_modules/@types/lodash/common/lang.d.ts:1633

---

### toSafeInteger()

> **toSafeInteger**(): `number`

#### Returns

`number`

#### See

\_.toSafeInteger

#### Source

node_modules/@types/lodash/common/lang.d.ts:1670

---

### toUpper()

> **toUpper**(): `string`

#### Returns

`string`

#### See

\_.toUpper

#### Source

node_modules/@types/lodash/common/string.d.ts:564

---

### trim()

> **trim**(`chars`?): `string`

#### Parameters

• **chars?**: `string`

#### Returns

`string`

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

#### See

\_.truncate

#### Source

node_modules/@types/lodash/common/string.d.ts:683

---

### unescape()

> **unescape**(): `string`

#### Returns

`string`

#### See

\_.unescape

#### Source

node_modules/@types/lodash/common/string.d.ts:709

---

### uniqueId()

> **uniqueId**(): `string`

#### Returns

`string`

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

#### See

\_.update

#### Source

node_modules/@types/lodash/common/object.d.ts:2435

---

### upperCase()

> **upperCase**(): `string`

#### Returns

`string`

#### See

\_.upperCase

#### Source

node_modules/@types/lodash/common/string.d.ts:731

---

### upperFirst()

> **upperFirst**(): `string`

#### Returns

`string`

#### See

\_.upperFirst

#### Source

node_modules/@types/lodash/common/string.d.ts:753

---

### value()

> **value**(): `TValue`

#### Returns

`TValue`

#### See

\_.value

#### Source

node_modules/@types/lodash/common/seq.d.ts:141

---

### valueOf()

> **valueOf**(): `TValue`

#### Returns

`TValue`

#### See

\_.valueOf

#### Source

node_modules/@types/lodash/common/seq.d.ts:154

---

### words()

> **words**(`pattern`?): [`Collection`](Collection.md)\<`string`\>

#### Parameters

• **pattern?**: `string` \| `RegExp`

#### Returns

[`Collection`](Collection.md)\<`string`\>

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

#### See

\_.wrap

#### Source

node_modules/@types/lodash/common/function.d.ts:1447
