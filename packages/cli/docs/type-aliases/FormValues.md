[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\>: `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/f779e75b9ef98389e12e52575295bd1ef364daca/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

• **C** _extends_ [`FormConfig`](FormConfig.md)
