[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValue\<C\>

> **FormValue**\<`C`\> = `C`\[`"type"`\] _extends_ `"text"` ?
> [`StringFormValue`](StringFormValue.md) : `C`\[`"type"`\] _extends_ `"select"` ?
> [`StringFormValue`](StringFormValue.md) : `never`

Defined in:
[packages/cli/source/ui/form/FormValue.ts:8](https://github.com/jakubmazanec/tools/blob/4b0540484b6010d133c2a5e92e51cdd4ed82edb4/packages/cli/source/ui/form/FormValue.ts#L8)

Form value.

## Type Parameters

### C

`C` _extends_ [`FormRowConfig`](FormRowConfig.md)
