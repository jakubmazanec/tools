[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\>: `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/b70ba93afff7f67760159378262d2c0b19cfed9e/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

• **C** _extends_ [`FormConfig`](FormConfig.md)
