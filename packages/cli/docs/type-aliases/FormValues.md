[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[packages/cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/e3906ac2943abeadc19b5add1f3702fecb8f15db/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
