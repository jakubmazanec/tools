[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/8324896dad080c1b57affe1d8521d8205a016467/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
