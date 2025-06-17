[**@jakubmazanec/error**](../README.md)

---

# Type Alias: CustomErrorOptions

> **CustomErrorOptions** = `object`

Defined in:
[types/CustomErrorOptions.ts:4](https://github.com/jakubmazanec/tools/blob/d956cf350ae3e6bad1df754a19dfbabb088c1451/packages/error/source/types/CustomErrorOptions.ts#L4)

Type representing options object used when instantianting class returned from
[createCustomError](../functions/createCustomError.md).

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in:
[types/CustomErrorOptions.ts:9](https://github.com/jakubmazanec/tools/blob/d956cf350ae3e6bad1df754a19dfbabb088c1451/packages/error/source/types/CustomErrorOptions.ts#L9)

Used for setting `cause` property of an error instance that indicates the specific original cause of
the error.

---

### messageParameters?

> `optional` **messageParameters**: `unknown`[]

Defined in:
[types/CustomErrorOptions.ts:6](https://github.com/jakubmazanec/tools/blob/d956cf350ae3e6bad1df754a19dfbabb088c1451/packages/error/source/types/CustomErrorOptions.ts#L6)

Array of values that are used as parameters to generate the error message.
