[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/6fe16df773d5da14c29261ea934e72b3f99fabb7/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
