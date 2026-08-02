[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValue\<C\>

> **FormValue**\<`C`> \> = `C`\[`"type"`\] _extends_ `"text"` ?
> [`StringFormValue`](StringFormValue.md) : `C`\[`"type"`\] _extends_ `"select"` ?
> [`StringFormValue`](StringFormValue.md) : `never`

Defined in:
[cli/source/ui/form/FormValue.ts:8](https://github.com/jakubmazanec/tools/blob/2c78f29cf23098fa3ebc299e5eb40d65134b033e/packages/cli/source/ui/form/FormValue.ts#L8)

Form value.

## Type Parameters

### C

`C` _extends_ [`FormRowConfig`](FormRowConfig.md)
