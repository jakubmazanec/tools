[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValue\<C\>

> **FormValue**\<`C`\> = `C`\[`"type"`\] _extends_ `"text"` ?
> [`StringFormValue`](StringFormValue.md) : `C`\[`"type"`\] _extends_ `"select"` ?
> [`StringFormValue`](StringFormValue.md) : `never`

Defined in:
[cli/source/ui/form/FormValue.ts:8](https://github.com/jakubmazanec/tools/blob/77af8fc6f94d0ddce4ffb0d7fbfc7006c5b3d620/packages/cli/source/ui/form/FormValue.ts#L8)

Form value.

## Type Parameters

### C

`C` _extends_ [`FormRowConfig`](FormRowConfig.md)
