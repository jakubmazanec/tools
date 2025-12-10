[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: FormValues\<C\>

> **FormValues**\<`C`\> = `{ [P in keyof C["rows"]]: FormValue<C["rows"][P]> }`

Defined in:
[packages/cli/source/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/tools/blob/cedf3fa4c7fbc7289e929b659f60d71a93d3854d/packages/cli/source/ui/form/FormValues.ts#L7)

Form values.

## Type Parameters

### C

`C` _extends_ [`FormConfig`](FormConfig.md)
