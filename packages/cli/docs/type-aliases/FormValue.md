[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValue\<C\>

> **FormValue**\<`C`> \> = `C`\[`"type"`\] _extends_ `"text"` ?
> [`StringFormValue`](StringFormValue.md) : `C`\[`"type"`\] _extends_ `"select"` ?
> [`StringFormValue`](StringFormValue.md) : `never`

Defined in:
[cli/source/ui/form/FormValue.ts:8](https://github.com/jakubmazanec/tools/blob/36b99004a93b06a721cdb2d08a00e55c653d227d/packages/cli/source/ui/form/FormValue.ts#L8)

Form value.

## Type Parameters

### C

`C` _extends_ [`FormRowConfig`](FormRowConfig.md)
