[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\>: `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/d8ee2855cc8c253cbcc5c4d49e7356ff8450cbde/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

• **C** _extends_ [`FormConfig`](FormConfig.md)
