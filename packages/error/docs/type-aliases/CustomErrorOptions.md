[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorOptions

> **CustomErrorOptions** = `object`

Defined in:
[types/CustomErrorOptions.ts:5](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/error/source/types/CustomErrorOptions.ts#L5)

Type representing options object used when instantianting class returned from
[createCustomError](../functions/createCustomError.md).

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in:
[types/CustomErrorOptions.ts:13](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/error/source/types/CustomErrorOptions.ts#L13)

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

---

### messageParameters?

> `optional` **messageParameters?**: `unknown`[]

Defined in:
[types/CustomErrorOptions.ts:7](https://github.com/jakubmazanec/tools/blob/80ab80c90651d919fc0c63cbe9e711dbc3ca80df/packages/error/source/types/CustomErrorOptions.ts#L7)

Array of values that are used as parameters to generate the error message.
