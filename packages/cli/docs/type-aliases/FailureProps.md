[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FailureProps

> **FailureProps**: `BoxProps` & `object`

Defined in:
[cli/source/ui/Failure.tsx:12](https://github.com/jakubmazanec/tools/blob/40ba1fb8bbde716fbe797d7886fffe14521e098a/packages/cli/source/ui/Failure.tsx#L12)

[Failure](../functions/Failure.md) component props.

## Type declaration

### error

> **error**: `Error`

Error that describes a failure state. Function [getErrorDetail](../functions/getErrorDetail.md) is
used for getting all the information from the error; you can use it to implement own retrieval logic
and pass the result as `errorDetail` prop.

### errorDetail?

> `optional` **errorDetail**: [`ErrorDetail`](ErrorDetail.md)

Information about the failure state. Overrides information retireved from `error` prop.
