[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[packages/cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/4b0540484b6010d133c2a5e92e51cdd4ed82edb4/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
