[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\>: `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/76a9140b954a789a6120dd2126b179ec0180d7e9/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

• **C** _extends_ [`FormConfig`](FormConfig.md)
