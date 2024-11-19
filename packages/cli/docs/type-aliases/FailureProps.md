[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type Alias: FailureProps

> **FailureProps**: `BoxProps` & `object`

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

## Defined in

[cli/source/ui/Failure.tsx:12](https://github.com/jakubmazanec/tools/blob/a5f92f7f2969c6804808173bd093f7dbafca1b9f/packages/cli/source/ui/Failure.tsx#L12)
