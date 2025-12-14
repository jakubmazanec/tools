[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FailureProps

> **FailureProps** = `BoxProps` & `object`

Defined in:
[packages/cli/source/ui/Failure.tsx:12](https://github.com/jakubmazanec/tools/blob/aa41f4b8a503830bb6198ebf70de9e7844bc2c44/packages/cli/source/ui/Failure.tsx#L12)

[Failure](../functions/Failure.md) component props.

## Type Declaration

### error

> **error**: `Error`

Error that describes a failure state. Function [getErrorDetail](../functions/getErrorDetail.md) is
used for getting all the information from the error; you can use it to implement own retrieval logic
and pass the result as `errorDetail` prop.

### errorDetail?

> `optional` **errorDetail**: [`ErrorDetail`](ErrorDetail.md)

Information about the failure state. Overrides information retireved from `error` prop.
