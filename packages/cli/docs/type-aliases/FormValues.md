[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`> \> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/5440cb509cb4ec7a792c8768f79dc0266aab15d1/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
