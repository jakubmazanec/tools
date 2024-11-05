[**@jakubmazanec/cli**](../README.md) • **Docs**

---

# Type alias: FailureProps

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

## Source

[cli/source/ui/Failure.tsx:12](https://github.com/jakubmazanec/tools/blob/bb20df5276ddb119762948adc2cda520aef09f0f/packages/cli/source/ui/Failure.tsx#L12)
