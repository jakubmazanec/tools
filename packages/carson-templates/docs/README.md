# @jakubmazanec/carson-templates

## Table of contents

### Namespaces

- [lodash](modules/lodash.md)
- [semver](modules/semver.md)

### Variables

- [BUILD_DIRECTORY](README.md#build_directory)
- [BUILD_TO_CJS_COMMAND](README.md#build_to_cjs_command)
- [BUILD_TO_ESM_COMMAND](README.md#build_to_esm_command)
- [CARSON_PACKAGE_NAME](README.md#carson_package_name)
- [DEVELOPMENT_BRANCH_NAMES](README.md#development_branch_names)
- [FORMAT_COMMAND](README.md#format_command)
- [FORMAT_IGNORE_PATTERNS](README.md#format_ignore_patterns)
- [LINTER_CONFIG_PACKAGE_NAME](README.md#linter_config_package_name)
- [LINT_IGNORE_PATTERNS](README.md#lint_ignore_patterns)
- [MAIN_BRANCH_NAMES](README.md#main_branch_names)
- [PRETTIER_OPTIONS](README.md#prettier_options)
- [SOURCE_DIRECTORY](README.md#source_directory)
- [TEMPLATE_PACKAGE_NAME](README.md#template_package_name)
- [TEST_COMMAND](README.md#test_command)
- [TSCONFIG_COMPILER_OPTIONS](README.md#tsconfig_compiler_options)
- [TYPEDOC_CONFIG](README.md#typedoc_config)

### Functions

- [getDependencies](README.md#getdependencies)
- [getDevelopmentBranch](README.md#getdevelopmentbranch)
- [getMainBranch](README.md#getmainbranch)
- [getReferences](README.md#getreferences)
- [getWorkspaceName](README.md#getworkspacename)
- [lodash](README.md#lodash)

## Variables

### BUILD_DIRECTORY

• `Const` **BUILD_DIRECTORY**: `"build"`

#### Defined in

[packages/carson-templates/source/constants.ts:1](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L1)

---

### BUILD_TO_CJS_COMMAND

• `Const` **BUILD_TO_CJS_COMMAND**:
`"esbuild \"source/**/*\" --platform=node --target=node20.8 --format=cjs --outdir=build --sourcemap"`

#### Defined in

[packages/carson-templates/source/constants.ts:5](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L5)

---

### BUILD_TO_ESM_COMMAND

• `Const` **BUILD_TO_ESM_COMMAND**:
`"esbuild \"source/**/*\" --platform=node --target=node20.8 --outdir=build --sourcemap"`

#### Defined in

[packages/carson-templates/source/constants.ts:4](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L4)

---

### CARSON_PACKAGE_NAME

• `Const` **CARSON_PACKAGE_NAME**: `"@jakubmazanec/carson"`

#### Defined in

[packages/carson-templates/source/constants.ts:9](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L9)

---

### DEVELOPMENT_BRANCH_NAMES

• `Const` **DEVELOPMENT_BRANCH_NAMES**: `Set`\<`string`\>

#### Defined in

[packages/carson-templates/source/constants.ts:14](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L14)

---

### FORMAT_COMMAND

• `Const` **FORMAT_COMMAND**: `"prettier . --write --ignore-unknown"`

#### Defined in

[packages/carson-templates/source/constants.ts:6](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L6)

---

### FORMAT_IGNORE_PATTERNS

• `Const` **FORMAT_IGNORE_PATTERNS**: `string`[]

#### Defined in

[packages/carson-templates/source/constants.ts:30](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L30)

---

### LINTER_CONFIG_PACKAGE_NAME

• `Const` **LINTER_CONFIG_PACKAGE_NAME**: `"@jakubmazanec/eslint-config"`

#### Defined in

[packages/carson-templates/source/constants.ts:11](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L11)

---

### LINT_IGNORE_PATTERNS

• `Const` **LINT_IGNORE_PATTERNS**: `string`[]

#### Defined in

[packages/carson-templates/source/constants.ts:16](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L16)

---

### MAIN_BRANCH_NAMES

• `Const` **MAIN_BRANCH_NAMES**: `Set`\<`string`\>

#### Defined in

[packages/carson-templates/source/constants.ts:13](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L13)

---

### PRETTIER_OPTIONS

• `Const` **PRETTIER_OPTIONS**: `Object`

#### Type declaration

| Name                         | Type                                                                            |
| :--------------------------- | :------------------------------------------------------------------------------ |
| `arrowParens`                | `string`                                                                        |
| `bracketSameLine`            | `boolean`                                                                       |
| `bracketSpacing`             | `boolean`                                                                       |
| `embeddedLanguageFormatting` | `string`                                                                        |
| `experimentalTernaries`      | `boolean`                                                                       |
| `htmlWhitespaceSensitivity`  | `string`                                                                        |
| `jsxSingleQuote`             | `boolean`                                                                       |
| `overrides`                  | \{ `files`: `string`[] ; `options`: \{ `trailingComma`: `string` = 'none' } }[] |
| `printWidth`                 | `number`                                                                        |
| `proseWrap`                  | `string`                                                                        |
| `quoteProps`                 | `string`                                                                        |
| `requirePragma`              | `boolean`                                                                       |
| `semi`                       | `boolean`                                                                       |
| `singleQuote`                | `boolean`                                                                       |
| `trailingComma`              | `string`                                                                        |

#### Defined in

[packages/carson-templates/source/constants.ts:62](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L62)

---

### SOURCE_DIRECTORY

• `Const` **SOURCE_DIRECTORY**: `"source"`

#### Defined in

[packages/carson-templates/source/constants.ts:2](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L2)

---

### TEMPLATE_PACKAGE_NAME

• `Const` **TEMPLATE_PACKAGE_NAME**: `"@jakubmazanec/carson-templates"`

#### Defined in

[packages/carson-templates/source/constants.ts:10](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L10)

---

### TEST_COMMAND

• `Const` **TEST_COMMAND**: `"vitest run --coverage --passWithNoTests"`

#### Defined in

[packages/carson-templates/source/constants.ts:7](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L7)

---

### TSCONFIG_COMPILER_OPTIONS

• `Const` **TSCONFIG_COMPILER_OPTIONS**: `Object`

#### Type declaration

| Name                               | Type       |
| :--------------------------------- | :--------- |
| `allowSyntheticDefaultImports`     | `boolean`  |
| `composite`                        | `boolean`  |
| `exactOptionalPropertyTypes`       | `boolean`  |
| `forceConsistentCasingInFileNames` | `boolean`  |
| `isolatedModules`                  | `boolean`  |
| `jsx`                              | `string`   |
| `lib`                              | `string`[] |
| `module`                           | `string`   |
| `moduleResolution`                 | `string`   |
| `noEmitOnError`                    | `boolean`  |
| `noImplicitOverride`               | `boolean`  |
| `noImplicitReturns`                | `boolean`  |
| `noUncheckedIndexedAccess`         | `boolean`  |
| `skipLibCheck`                     | `boolean`  |
| `strict`                           | `boolean`  |
| `target`                           | `string`   |

#### Defined in

[packages/carson-templates/source/constants.ts:43](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L43)

---

### TYPEDOC_CONFIG

• `Const` **TYPEDOC_CONFIG**: `Object`

#### Type declaration

| Name              | Type       |
| :---------------- | :--------- |
| `entryPoints`     | `string`[] |
| `githubPages`     | `boolean`  |
| `hideBreadcrumbs` | `boolean`  |
| `out`             | `string`   |
| `plugin`          | `string`   |
| `readme`          | `string`   |

#### Defined in

[packages/carson-templates/source/constants.ts:88](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/constants.ts#L88)

## Functions

### getDependencies

▸ **getDependencies**(`dependencies`, `workspace`): `Record`\<`string`, `string`\>

#### Parameters

| Name           | Type                                            |
| :------------- | :---------------------------------------------- |
| `dependencies` | `string`[]                                      |
| `workspace`    | `Workspace`\<`true`\> \| `Workspace`\<`false`\> |

#### Returns

`Record`\<`string`, `string`\>

#### Defined in

[packages/carson-templates/source/getDependencies.ts:11](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/getDependencies.ts#L11)

---

### getDevelopmentBranch

▸ **getDevelopmentBranch**(`workspace`): `undefined` \| `string`

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `workspace` | `Workspace`\<`true`\> \| `Workspace`\<`false`\> |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/carson-templates/source/getDevelopmentBranch.ts:5](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/getDevelopmentBranch.ts#L5)

---

### getMainBranch

▸ **getMainBranch**(`workspace`): `undefined` \| `string`

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `workspace` | `Workspace`\<`true`\> \| `Workspace`\<`false`\> |

#### Returns

`undefined` \| `string`

#### Defined in

[packages/carson-templates/source/getMainBranch.ts:5](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/getMainBranch.ts#L5)

---

### getReferences

▸ **getReferences**(`workspace`, `project`): \{ `path`: `string` }[]

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `workspace` | `Workspace`\<`true`\> \| `Workspace`\<`false`\> |
| `project`   | `Project`\<`true`\> \| `Project`\<`false`\>     |

#### Returns

\{ `path`: `string` }[]

#### Defined in

[packages/carson-templates/source/getReferences.ts:3](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/getReferences.ts#L3)

---

### getWorkspaceName

▸ **getWorkspaceName**(`workspace`): `string`

#### Parameters

| Name        | Type                                            |
| :---------- | :---------------------------------------------- |
| `workspace` | `Workspace`\<`true`\> \| `Workspace`\<`false`\> |

#### Returns

`string`

#### Defined in

[packages/carson-templates/source/getWorkspaceName.ts:6](https://github.com/jakubmazanec/js-tools/blob/c853783/packages/carson-templates/source/getWorkspaceName.ts#L6)

---

### lodash

▸ **lodash**\<`TrapAny`\>(`value`): [`Collection`](interfaces/lodash.Collection.md)\<`any`\> &
[`Function`](interfaces/lodash.Function.md)\<`any`\> &
[`Object`](interfaces/lodash.Object.md)\<`any`\> &
[`Primitive`](interfaces/lodash.Primitive.md)\<`any`\> & [`String`](interfaces/lodash.String.md)

Creates a lodash object which wraps value to enable implicit method chain sequences. Methods that
operate on and return arrays, collections, and functions can be chained together. Methods that
retrieve a single value or may return a primitive value will automatically end the chain sequence
and return the unwrapped value. Otherwise, the value must be unwrapped with value().

Explicit chain sequences, which must be unwrapped with value(), may be enabled using \_.chain.

The execution of chained methods is lazy, that is, it's deferred until value() is implicitly or
explicitly called.

Lazy evaluation allows several methods to support shortcut fusion. Shortcut fusion is an
optimization to merge iteratee calls; this avoids the creation of intermediate arrays and can
greatly reduce the number of iteratee executions. Sections of a chain sequence qualify for shortcut
fusion if the section is applied to an array and iteratees accept only one argument. The heuristic
for whether a section qualifies for shortcut fusion is subject to change.

Chaining is supported in custom builds as long as the value() method is directly or indirectly
included in the build.

In addition to lodash methods, wrappers have Array and String methods. The wrapper Array methods
are: concat, join, pop, push, shift, sort, splice, and unshift. The wrapper String methods are:
replace and split.

The wrapper methods that support shortcut fusion are: at, compact, drop, dropRight, dropWhile,
filter, find, findLast, head, initial, last, map, reject, reverse, slice, tail, take, takeRight,
takeRightWhile, takeWhile, and toArray

The chainable wrapper methods are: after, ary, assign, assignIn, assignInWith, assignWith, at,
before, bind, bindAll, bindKey, castArray, chain, chunk, commit, compact, concat, conforms,
constant, countBy, create, curry, debounce, defaults, defaultsDeep, defer, delay, difference,
differenceBy, differenceWith, drop, dropRight, dropRightWhile, dropWhile, extend, extendWith, fill,
filter, flatMap, flatMapDeep, flatMapDepth, flatten, flattenDeep, flattenDepth, flip, flow,
flowRight, fromPairs, functions, functionsIn, groupBy, initial, intersection, intersectionBy,
intersectionWith, invert, invertBy, invokeMap, iteratee, keyBy, keys, keysIn, map, mapKeys,
mapValues, matches, matchesProperty, memoize, merge, mergeWith, method, methodOf, mixin, negate,
nthArg, omit, omitBy, once, orderBy, over, overArgs, overEvery, overSome, partial, partialRight,
partition, pick, pickBy, plant, property, propertyOf, pull, pullAll, pullAllBy, pullAllWith, pullAt,
push, range, rangeRight, rearg, reject, remove, rest, reverse, sampleSize, set, setWith, shuffle,
slice, sort, sortBy, sortedUniq, sortedUniqBy, splice, spread, tail, take, takeRight,
takeRightWhile, takeWhile, tap, throttle, thru, toArray, toPairs, toPairsIn, toPath, toPlainObject,
transform, unary, union, unionBy, unionWith, uniq, uniqBy, uniqWith, unset, unshift, unzip,
unzipWith, update, updateWith, values, valuesIn, without, wrap, xor, xorBy, xorWith, zip, zipObject,
zipObjectDeep, and zipWith.

The wrapper methods that are not chainable by default are: add, attempt, camelCase, capitalize,
ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide,
each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast,
findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn,
forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke,
isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate,
isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap,
isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike,
isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap,
isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean,
meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop,
random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase,
some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith,
stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times,
toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim,
trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words.

#### Type parameters

| Name      | Type             |
| :-------- | :--------------- |
| `TrapAny` | extends `Object` |

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `TrapAny` |

#### Returns

[`Collection`](interfaces/lodash.Collection.md)\<`any`\> &
[`Function`](interfaces/lodash.Function.md)\<`any`\> &
[`Object`](interfaces/lodash.Object.md)\<`any`\> &
[`Primitive`](interfaces/lodash.Primitive.md)\<`any`\> & [`String`](interfaces/lodash.String.md)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:94

▸ **lodash**\<`T`\>(`value`): [`Primitive`](interfaces/lodash.Primitive.md)\<`T`\>

#### Type parameters

| Name | Type                          |
| :--- | :---------------------------- |
| `T`  | extends `undefined` \| `null` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Primitive`](interfaces/lodash.Primitive.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:95

▸ **lodash**(`value`): [`String`](interfaces/lodash.String.md)

#### Parameters

| Name    | Type                              |
| :------ | :-------------------------------- |
| `value` | `undefined` \| `null` \| `string` |

#### Returns

[`String`](interfaces/lodash.String.md)

#### Defined in

node_modules/@types/lodash/common/common.d.ts:96

▸ **lodash**\<`T`\>(`value`): [`Function`](interfaces/lodash.Function.md)\<`T`\>

#### Type parameters

| Name | Type                                |
| :--- | :---------------------------------- |
| `T`  | extends (...`args`: `any`) => `any` |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Function`](interfaces/lodash.Function.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:97

▸ **lodash**\<`T`\>(`value`): [`Collection`](interfaces/lodash.Collection.md)\<`T`\>

#### Type parameters

| Name | Type  |
| :--- | :---- |
| `T`  | `any` |

#### Parameters

| Name    | Type                                                             |
| :------ | :--------------------------------------------------------------- |
| `value` | `undefined` \| `null` \| [`List`](modules/lodash.md#list)\<`T`\> |

#### Returns

[`Collection`](interfaces/lodash.Collection.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:98

▸ **lodash**\<`T`\>(`value`): [`Object`](interfaces/lodash.Object.md)\<`T`\>

#### Type parameters

| Name | Type             |
| :--- | :--------------- |
| `T`  | extends `object` |

#### Parameters

| Name    | Type                         |
| :------ | :--------------------------- |
| `value` | `undefined` \| `null` \| `T` |

#### Returns

[`Object`](interfaces/lodash.Object.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:99

▸ **lodash**\<`T`\>(`value`): [`Primitive`](interfaces/lodash.Primitive.md)\<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

[`Primitive`](interfaces/lodash.Primitive.md)\<`T`\>

#### Defined in

node_modules/@types/lodash/common/common.d.ts:100
