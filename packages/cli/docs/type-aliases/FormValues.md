[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/7027bd4db7e64559d83dd5cfca3306c9a5acc677/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
