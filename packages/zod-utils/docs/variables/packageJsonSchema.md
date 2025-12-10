[**@jakubmazanec/zod-utils**](../README.md)

---

# Variable: packageJsonSchema

> `const` **packageJsonSchema**: `ZodObject`\<\{ `author`: `ZodOptional`\<`ZodUnion`\<readonly
> \[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `url`:
> `ZodOptional`\<`ZodString`\>; \}, `$strict`\>, `ZodString`\]\>\>; `bin`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodRecord`\<`ZodString`, `ZodString`\>, `ZodString`\]\>\>;
> `browser`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodString`, `ZodRecord`\<`ZodString`,
> `ZodUnion`\<readonly \[`ZodString`, `ZodLiteral`\<`false`\>\]\>\>\]\>\>; `bugs`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>;
> `url`: `ZodOptional`\<`ZodString`\>; \}, `$strict`\>, `ZodString`\]\>\>; `bundledDependencies`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodArray`\<`ZodString`\>, `ZodBoolean`\]\>\>;
> `bundleDependencies`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodArray`\<`ZodString`\>,
> `ZodBoolean`\]\>\>; `config`: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>\>;
> `contributors`: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{ `email`:
> `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `url`: `ZodOptional`\<`ZodString`\>; \},
> `$strict`\>, `ZodString`\]\>\>\>; `cpu`: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<readonly
> \[`ZodEnum`\<\{ `!arm`: `"!arm"`; `!arm64`: `"!arm64"`; `!ia32`: `"!ia32"`; `!mips`: `"!mips"`;
> `!mipsel`: `"!mipsel"`; `!ppc`: `"!ppc"`; `!ppc64`: `"!ppc64"`; `!s390`: `"!s390"`; `!s390x`:
> `"!s390x"`; `!x32`: `"!x32"`; `!x64`: `"!x64"`; `arm`: `"arm"`; `arm64`: `"arm64"`; `ia32`:
> `"ia32"`; `mips`: `"mips"`; `mipsel`: `"mipsel"`; `ppc`: `"ppc"`; `ppc64`: `"ppc64"`; `s390`:
> `"s390"`; `s390x`: `"s390x"`; `x32`: `"x32"`; `x64`: `"x64"`; \}\>, `ZodString`\]\>\>\>;
> `dependencies`: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>; `description`:
> `ZodOptional`\<`ZodString`\>; `devDependencies`: `ZodOptional`\<`ZodRecord`\<`ZodString`,
> `ZodString`\>\>; `directories`: `ZodOptional`\<`ZodObject`\<\{ `bin`:
> `ZodOptional`\<`ZodString`\>; `doc`: `ZodOptional`\<`ZodString`\>; `example`:
> `ZodOptional`\<`ZodString`\>; `lib`: `ZodOptional`\<`ZodString`\>; `man`:
> `ZodOptional`\<`ZodString`\>; `v`: `ZodOptional`\<`ZodString`\>; \}, `$strict`\>\>; `engines`:
> `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<\{ `node`: `ZodOptional`\<`ZodString`\>; `npm`:
> `ZodOptional`\<`ZodString`\>; \}, `$strip`\>, `ZodRecord`\<`ZodString`, `ZodString`\>\>\>;
> `esnext`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodString`, `ZodRecord`\<`ZodString`,
> `ZodString`\>\]\>\>; `exports`: `ZodOptional`\<`ZodType`\<`PackageJsonExports`, `unknown`,
> `$ZodTypeInternals`\<`PackageJsonExports`, `unknown`\>\>\>; `files`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `flat`: `ZodOptional`\<`ZodBoolean`\>; `funding`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodArray`\<`ZodUnion`\<readonly \[`ZodObject`\<\{ `type`:
> `ZodOptional`\<...\>; `url`: `ZodString`; \}, `$strict`\>, `ZodString`\]\>\>, `ZodUnion`\<readonly
> \[`ZodObject`\<\{ `type`: `ZodOptional`\<`ZodUnion`\<...\>\>; `url`: `ZodString`; \}, `$strict`\>,
> `ZodString`\]\>\]\>\>; `homepage`: `ZodOptional`\<`ZodString`\>; `keywords`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `license`: `ZodOptional`\<`ZodString`\>; `main`:
> `ZodOptional`\<`ZodString`\>; `maintainers`: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<readonly
> \[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `url`:
> `ZodOptional`\<`ZodString`\>; \}, `$strict`\>, `ZodString`\]\>\>\>; `man`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodArray`\<`ZodString`\>, `ZodString`\]\>\>; `module`:
> `ZodOptional`\<`ZodString`\>; `name`: `ZodOptional`\<`ZodString`\>; `optionalDependencies`:
> `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>; `os`:
> `ZodOptional`\<`ZodArray`\<`ZodUnion`\<readonly \[`ZodEnum`\<\{ `!aix`: `"!aix"`; `!darwin`:
> `"!darwin"`; `!freebsd`: `"!freebsd"`; `!linux`: `"!linux"`; `!openbsd`: `"!openbsd"`; `!sunos`:
> `"!sunos"`; `!win32`: `"!win32"`; `aix`: `"aix"`; `darwin`: `"darwin"`; `freebsd`: `"freebsd"`;
> `linux`: `"linux"`; `openbsd`: `"openbsd"`; `sunos`: `"sunos"`; `win32`: `"win32"`; \}\>,
> `ZodString`\]\>\>\>; `overrides`: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodUnion`\<readonly
> \[`ZodString`, `ZodRecord`\<`ZodString`, `ZodUnion`\<readonly \[`ZodString`,
> `ZodRecord`\<`ZodString`, `ZodUnknown`\>\]\>\>\]\>\>\>; `packageManager`:
> `ZodOptional`\<`ZodString`\>; `peerDependencies`: `ZodOptional`\<`ZodRecord`\<`ZodString`,
> `ZodString`\>\>; `peerDependenciesMeta`: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodObject`\<\{
> `optional`: `ZodBoolean`; \}, `$strip`\>\>\>; `preferGlobal`: `ZodOptional`\<`ZodBoolean`\>;
> `private`: `ZodOptional`\<`ZodBoolean`\>; `publishConfig`:
> `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<\{ `access`: `ZodOptional`\<`ZodEnum`\<\{ `public`:
> `"public"`; `restricted`: `"restricted"`; \}\>\>; `registry`: `ZodOptional`\<`ZodString`\>; `tag`:
> `ZodOptional`\<`ZodString`\>; \}, `$strip`\>, `ZodRecord`\<`ZodString`, `ZodUnknown`\>\>\>;
> `repository`: `ZodOptional`\<`ZodUnion`\<readonly \[`ZodObject`\<\{ `directory`:
> `ZodOptional`\<`ZodString`\>; `type`: `ZodString`; `url`: `ZodString`; \}, `$strict`\>,
> `ZodString`\]\>\>; `resolutions`: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>;
> `scripts`: `ZodOptional`\<`ZodIntersection`\<`ZodRecord`\<`ZodString`, `ZodString`\>,
> `ZodObject`\<\{ `install`: `ZodOptional`\<`ZodString`\>; `postinstall`:
> `ZodOptional`\<`ZodString`\>; `postpack`: `ZodOptional`\<`ZodString`\>; `postpublish`:
> `ZodOptional`\<`ZodString`\>; `postrestart`: `ZodOptional`\<`ZodString`\>; `poststart`:
> `ZodOptional`\<`ZodString`\>; `poststop`: `ZodOptional`\<`ZodString`\>; `posttest`:
> `ZodOptional`\<`ZodString`\>; `postuninstall`: `ZodOptional`\<`ZodString`\>; `postversion`:
> `ZodOptional`\<`ZodString`\>; `preinstall`: `ZodOptional`\<`ZodString`\>; `prepack`:
> `ZodOptional`\<`ZodString`\>; `prepare`: `ZodOptional`\<`ZodString`\>; `prepublish`:
> `ZodOptional`\<`ZodString`\>; `prepublishOnly`: `ZodOptional`\<`ZodString`\>; `prerestart`:
> `ZodOptional`\<`ZodString`\>; `prestart`: `ZodOptional`\<`ZodString`\>; `prestop`:
> `ZodOptional`\<`ZodString`\>; `pretest`: `ZodOptional`\<`ZodString`\>; `preuninstall`:
> `ZodOptional`\<`ZodString`\>; `preversion`: `ZodOptional`\<`ZodString`\>; `publish`:
> `ZodOptional`\<`ZodString`\>; `restart`: `ZodOptional`\<`ZodString`\>; `start`:
> `ZodOptional`\<`ZodString`\>; `stop`: `ZodOptional`\<`ZodString`\>; `test`:
> `ZodOptional`\<`ZodString`\>; `uninstall`: `ZodOptional`\<`ZodString`\>; `version`:
> `ZodOptional`\<`ZodString`\>; \}, `$strip`\>\>\>; `sideEffects`:
> `ZodOptional`\<`ZodUnion`\<readonly \[`ZodArray`\<`ZodString`\>, `ZodBoolean`\]\>\>; `source`:
> `ZodOptional`\<`ZodString`\>; `type`: `ZodOptional`\<`ZodUnion`\<readonly
> \[`ZodLiteral`\<`"commonjs"`\>, `ZodLiteral`\<`"module"`\>\]\>\>; `types`:
> `ZodOptional`\<`ZodString`\>; `typings`: `ZodOptional`\<`ZodString`\>; `version`:
> `ZodOptional`\<`ZodString`\>; `workspaces`: `ZodOptional`\<`ZodUnion`\<readonly
> \[`ZodArray`\<`ZodString`\>, `ZodObject`\<\{ `nohoist`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `packages`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; \}, `$strict`\>\]\>\>; \}, `$strip`\>

Defined in:
[packages/zod-utils/source/types/PackageJson.ts:151](https://github.com/jakubmazanec/tools/blob/db0bf84472e7335ce80a73176c6b844cbee1d751/packages/zod-utils/source/types/PackageJson.ts#L151)
