[**@jakubmazanec/zod-utils**](../README.md)

---

# Variable: packageJsonSchema

> `const` **packageJsonSchema**: `ZodObject`\<\{ `author`:
> `ZodOptional`\<`ZodUnion`\<\[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>; `name`:
> `ZodString`; `url`: `ZodOptional`\<`ZodString`\>; \}, `"strict"`, \{ `email`: `string`; `name`:
> `string`; `url`: `string`; \}, \{ `email`: `string`; `name`: `string`; `url`: `string`; \}\>,
> `ZodString`\]\>\>; `bin`: `ZodOptional`\<`ZodUnion`\<\[`ZodRecord`, `ZodString`\]\>\>; `browser`:
> `ZodOptional`\<`ZodUnion`\<\[`ZodString`, `ZodRecord`\<`ZodUnion`\<\[`ZodString`,
> `ZodLiteral`\<`false`\>\]\>\>\]\>\>; `bugs`: `ZodOptional`\<`ZodUnion`\<\[`ZodObject`\<\{ `email`:
> `ZodOptional`\<`ZodString`\>; `url`: `ZodOptional`\<`ZodString`\>; \}, `"strict"`, \{ `email`:
> `string`; `url`: `string`; \}, \{ `email`: `string`; `url`: `string`; \}\>, `ZodString`\]\>\>;
> `bundledDependencies`: `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodString`\>, `ZodBoolean`\]\>\>;
> `bundleDependencies`: `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodString`\>, `ZodBoolean`\]\>\>;
> `config`: `ZodOptional`\<`ZodRecord`\<`ZodUnknown`\>\>; `contributors`:
> `ZodOptional`\<`ZodArray`\<`ZodUnion`\<\[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>;
> `name`: `ZodString`; `url`: `ZodOptional`\<`ZodString`\>; \}, `"strict"`, \{ `email`: `string`;
> `name`: `string`; `url`: `string`; \}, \{ `email`: `string`; `name`: `string`; `url`: `string`;
> \}\>, `ZodString`\]\>\>\>; `cpu`: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<\[`ZodEnum`\<\[`"!arm"`,
> `"!arm64"`, `"!ia32"`, `"!mips"`, `"!mipsel"`, `"!ppc"`, `"!ppc64"`, `"!s390"`, `"!s390x"`,
> `"!x32"`, `"!x64"`, `"arm"`, `"arm64"`, `"ia32"`, `"mips"`, `"mipsel"`, `"ppc"`, `"ppc64"`,
> `"s390"`, `"s390x"`, `"x32"`, `"x64"`\]\>, `ZodString`\]\>\>\>; `dependencies`:
> `ZodOptional`\<`ZodRecord`\>; `description`: `ZodOptional`\<`ZodString`\>; `devDependencies`:
> `ZodOptional`\<`ZodRecord`\>; `directories`: `ZodOptional`\<`ZodObject`\<\{ `bin`:
> `ZodOptional`\<`ZodString`\>; `doc`: `ZodOptional`\<`ZodString`\>; `example`:
> `ZodOptional`\<`ZodString`\>; `lib`: `ZodOptional`\<`ZodString`\>; `man`:
> `ZodOptional`\<`ZodString`\>; `v`: `ZodOptional`\<`ZodString`\>; \}, `"strict"`, \{ `bin`:
> `string`; `doc`: `string`; `example`: `string`; `lib`: `string`; `man`: `string`; `v`: `string`;
> \}, \{ `bin`: `string`; `doc`: `string`; `example`: `string`; `lib`: `string`; `man`: `string`;
> `v`: `string`; \}\>\>; `engines`: `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<\{ `node`:
> `ZodOptional`\<`ZodString`\>; `npm`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, \{ `node`:
> `string`; `npm`: `string`; \}, \{ `node`: `string`; `npm`: `string`; \}\>, `ZodRecord`\>\>;
> `esnext`: `ZodOptional`\<`ZodUnion`\<\[`ZodString`, `ZodRecord`\]\>\>; `exports`:
> `ZodOptional`\<`ZodType`\<`PackageJsonExports`, `PackageJsonExports`\>\>; `files`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `flat`: `ZodOptional`\<`ZodBoolean`\>; `funding`:
> `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodUnion`\<\[`ZodObject`\<\{ `type`:
> `ZodOptional`\<...\>; `url`: `ZodString`; \}, `"strict"`, \{ `type`: ... \| ...; `url`: `string`;
> \}, \{ `type`: ... \| ...; `url`: `string`; \}\>, `ZodString`\]\>\>, `ZodUnion`\<\[`ZodObject`\<\{
> `type`: `ZodOptional`\<`ZodUnion`\<...\>\>; `url`: `ZodString`; \}, `"strict"`, \{ `type`:
> `string`; `url`: `string`; \}, \{ `type`: `string`; `url`: `string`; \}\>, `ZodString`\]\>\]\>\>;
> `homepage`: `ZodOptional`\<`ZodString`\>; `keywords`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>;
> `license`: `ZodOptional`\<`ZodString`\>; `main`: `ZodOptional`\<`ZodString`\>; `maintainers`:
> `ZodOptional`\<`ZodArray`\<`ZodUnion`\<\[`ZodObject`\<\{ `email`: `ZodOptional`\<`ZodString`\>;
> `name`: `ZodString`; `url`: `ZodOptional`\<`ZodString`\>; \}, `"strict"`, \{ `email`: `string`;
> `name`: `string`; `url`: `string`; \}, \{ `email`: `string`; `name`: `string`; `url`: `string`;
> \}\>, `ZodString`\]\>\>\>; `man`: `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodString`\>,
> `ZodString`\]\>\>; `module`: `ZodOptional`\<`ZodString`\>; `name`: `ZodOptional`\<`ZodString`\>;
> `optionalDependencies`: `ZodOptional`\<`ZodRecord`\>; `os`:
> `ZodOptional`\<`ZodArray`\<`ZodUnion`\<\[`ZodEnum`\<\[`"!aix"`, `"!darwin"`, `"!freebsd"`,
> `"!linux"`, `"!openbsd"`, `"!sunos"`, `"!win32"`, `"aix"`, `"darwin"`, `"freebsd"`, `"linux"`,
> `"openbsd"`, `"sunos"`, `"win32"`\]\>, `ZodString`\]\>\>\>; `overrides`:
> `ZodOptional`\<`ZodRecord`\<`ZodUnion`\<\[`ZodString`, `ZodRecord`\<`ZodUnion`\<\[`ZodString`,
> `ZodRecord`\<`ZodUnknown`\>\]\>\>\]\>\>\>; `packageManager`: `ZodOptional`\<`ZodString`\>;
> `peerDependencies`: `ZodOptional`\<`ZodRecord`\>; `peerDependenciesMeta`:
> `ZodOptional`\<`ZodRecord`\<`ZodObject`\<\{ `optional`: `ZodBoolean`; \}, `"strip"`, \{
> `optional`: `boolean`; \}, \{ `optional`: `boolean`; \}\>\>\>; `preferGlobal`:
> `ZodOptional`\<`ZodBoolean`\>; `private`: `ZodOptional`\<`ZodBoolean`\>; `publishConfig`:
> `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<\{ `access`:
> `ZodOptional`\<`ZodEnum`\<\[`"public"`, `"restricted"`\]\>\>; `registry`:
> `ZodOptional`\<`ZodString`\>; `tag`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, \{ `access`:
> `"public"` \| `"restricted"`; `registry`: `string`; `tag`: `string`; \}, \{ `access`: `"public"`
> \| `"restricted"`; `registry`: `string`; `tag`: `string`; \}\>, `ZodRecord`\<`ZodUnknown`\>\>\>;
> `repository`: `ZodOptional`\<`ZodUnion`\<\[`ZodObject`\<\{ `directory`:
> `ZodOptional`\<`ZodString`\>; `type`: `ZodString`; `url`: `ZodString`; \}, `"strict"`, \{
> `directory`: `string`; `type`: `string`; `url`: `string`; \}, \{ `directory`: `string`; `type`:
> `string`; `url`: `string`; \}\>, `ZodString`\]\>\>; `resolutions`: `ZodOptional`\<`ZodRecord`\>;
> `scripts`: `ZodOptional`\<`ZodIntersection`\<`ZodRecord`, `ZodObject`\<\{ `install`:
> `ZodOptional`\<`ZodString`\>; `postinstall`: `ZodOptional`\<`ZodString`\>; `postpack`:
> `ZodOptional`\<`ZodString`\>; `postpublish`: `ZodOptional`\<`ZodString`\>; `postrestart`:
> `ZodOptional`\<`ZodString`\>; `poststart`: `ZodOptional`\<`ZodString`\>; `poststop`:
> `ZodOptional`\<`ZodString`\>; `posttest`: `ZodOptional`\<`ZodString`\>; `postuninstall`:
> `ZodOptional`\<`ZodString`\>; `postversion`: `ZodOptional`\<`ZodString`\>; `preinstall`:
> `ZodOptional`\<`ZodString`\>; `prepack`: `ZodOptional`\<`ZodString`\>; `prepare`:
> `ZodOptional`\<`ZodString`\>; `prepublish`: `ZodOptional`\<`ZodString`\>; `prepublishOnly`:
> `ZodOptional`\<`ZodString`\>; `prerestart`: `ZodOptional`\<`ZodString`\>; `prestart`:
> `ZodOptional`\<`ZodString`\>; `prestop`: `ZodOptional`\<`ZodString`\>; `pretest`:
> `ZodOptional`\<`ZodString`\>; `preuninstall`: `ZodOptional`\<`ZodString`\>; `preversion`:
> `ZodOptional`\<`ZodString`\>; `publish`: `ZodOptional`\<`ZodString`\>; `restart`:
> `ZodOptional`\<`ZodString`\>; `start`: `ZodOptional`\<`ZodString`\>; `stop`:
> `ZodOptional`\<`ZodString`\>; `test`: `ZodOptional`\<`ZodString`\>; `uninstall`:
> `ZodOptional`\<`ZodString`\>; `version`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, \{
> `install`: `string`; `postinstall`: `string`; `postpack`: `string`; `postpublish`: `string`;
> `postrestart`: `string`; `poststart`: `string`; `poststop`: `string`; `posttest`: `string`;
> `postuninstall`: `string`; `postversion`: `string`; `preinstall`: `string`; `prepack`: `string`;
> `prepare`: `string`; `prepublish`: `string`; `prepublishOnly`: `string`; `prerestart`: `string`;
> `prestart`: `string`; `prestop`: `string`; `pretest`: `string`; `preuninstall`: `string`;
> `preversion`: `string`; `publish`: `string`; `restart`: `string`; `start`: `string`; `stop`:
> `string`; `test`: `string`; `uninstall`: `string`; `version`: `string`; \}, \{ `install`:
> `string`; `postinstall`: `string`; `postpack`: `string`; `postpublish`: `string`; `postrestart`:
> `string`; `poststart`: `string`; `poststop`: `string`; `posttest`: `string`; `postuninstall`:
> `string`; `postversion`: `string`; `preinstall`: `string`; `prepack`: `string`; `prepare`:
> `string`; `prepublish`: `string`; `prepublishOnly`: `string`; `prerestart`: `string`; `prestart`:
> `string`; `prestop`: `string`; `pretest`: `string`; `preuninstall`: `string`; `preversion`:
> `string`; `publish`: `string`; `restart`: `string`; `start`: `string`; `stop`: `string`; `test`:
> `string`; `uninstall`: `string`; `version`: `string`; \}\>\>\>; `sideEffects`:
> `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodString`\>, `ZodBoolean`\]\>\>; `source`:
> `ZodOptional`\<`ZodString`\>; `type`: `ZodOptional`\<`ZodUnion`\<\[`ZodLiteral`\<`"commonjs"`\>,
> `ZodLiteral`\<`"module"`\>\]\>\>; `types`: `ZodOptional`\<`ZodString`\>; `typings`:
> `ZodOptional`\<`ZodString`\>; `version`: `ZodOptional`\<`ZodString`\>; `workspaces`:
> `ZodOptional`\<`ZodUnion`\<\[`ZodArray`\<`ZodString`\>, `ZodObject`\<\{ `nohoist`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `packages`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; \}, `"strict"`, \{ `nohoist`: `string`[]; `packages`:
> `string`[]; \}, \{ `nohoist`: `string`[]; `packages`: `string`[]; \}\>\]\>\>; \}, `"strip"`, \{
> `author`: `string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \}; `bin`: `string`
> \| `Record`\<`string`, `string`\>; `browser`: `string` \| `Record`\<`string`, `string` \|
> `false`\>; `bugs`: `string` \| \{ `email`: `string`; `url`: `string`; \}; `bundledDependencies`:
> `boolean` \| `string`[]; `bundleDependencies`: `boolean` \| `string`[]; `config`:
> `Record`\<`string`, `unknown`\>; `contributors`: (`string` \| \{ `email`: `string`; `name`:
> `string`; `url`: `string`; \})[]; `cpu`: `string`[]; `dependencies`: `Record`\<`string`,
> `string`\>; `description`: `string`; `devDependencies`: `Record`\<`string`, `string`\>;
> `directories`: \{ `bin`: `string`; `doc`: `string`; `example`: `string`; `lib`: `string`; `man`:
> `string`; `v`: `string`; \}; `engines`: `object` & `Record`\<`string`, `string`\>; `esnext`:
> `string` \| `Record`\<`string`, `string`\>; `exports`: `PackageJsonExports`; `files`: `string`[];
> `flat`: `boolean`; `funding`: `string` \| \{ `type`: `string`; `url`: `string`; \} \| (`string` \|
> \{ `type`: `string`; `url`: `string`; \})[]; `homepage`: `string`; `keywords`: `string`[];
> `license`: `string`; `main`: `string`; `maintainers`: (`string` \| \{ `email`: `string`; `name`:
> `string`; `url`: `string`; \})[]; `man`: `string` \| `string`[]; `module`: `string`; `name`:
> `string`; `optionalDependencies`: `Record`\<`string`, `string`\>; `os`: `string`[]; `overrides`:
> `Record`\<`string`, `string` \| `Record`\<`string`, `string` \| `Record`\<`string`,
> `unknown`\>\>\>; `packageManager`: `string`; `peerDependencies`: `Record`\<`string`, `string`\>;
> `peerDependenciesMeta`: `Record`\<`string`, \{ `optional`: `boolean`; \}\>; `preferGlobal`:
> `boolean`; `private`: `boolean`; `publishConfig`: `object` & `Record`\<`string`, `unknown`\>;
> `repository`: `string` \| \{ `directory`: `string`; `type`: `string`; `url`: `string`; \};
> `resolutions`: `Record`\<`string`, `string`\>; `scripts`: `Record`\<`string`, `string`\> &
> `object`; `sideEffects`: `boolean` \| `string`[]; `source`: `string`; `type`: `"commonjs"` \|
> `"module"`; `types`: `string`; `typings`: `string`; `version`: `string`; `workspaces`: `string`[]
> \| \{ `nohoist`: `string`[]; `packages`: `string`[]; \}; \}, \{ `author`: `string` \| \{ `email`:
> `string`; `name`: `string`; `url`: `string`; \}; `bin`: `string` \| `Record`\<`string`,
> `string`\>; `browser`: `string` \| `Record`\<`string`, `string` \| `false`\>; `bugs`: `string` \|
> \{ `email`: `string`; `url`: `string`; \}; `bundledDependencies`: `boolean` \| `string`[];
> `bundleDependencies`: `boolean` \| `string`[]; `config`: `Record`\<`string`, `unknown`\>;
> `contributors`: (`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \})[];
> `cpu`: `string`[]; `dependencies`: `Record`\<`string`, `string`\>; `description`: `string`;
> `devDependencies`: `Record`\<`string`, `string`\>; `directories`: \{ `bin`: `string`; `doc`:
> `string`; `example`: `string`; `lib`: `string`; `man`: `string`; `v`: `string`; \}; `engines`:
> `object` & `Record`\<`string`, `string`\>; `esnext`: `string` \| `Record`\<`string`, `string`\>;
> `exports`: `PackageJsonExports`; `files`: `string`[]; `flat`: `boolean`; `funding`: `string` \| \{
> `type`: `string`; `url`: `string`; \} \| (`string` \| \{ `type`: `string`; `url`: `string`; \})[];
> `homepage`: `string`; `keywords`: `string`[]; `license`: `string`; `main`: `string`;
> `maintainers`: (`string` \| \{ `email`: `string`; `name`: `string`; `url`: `string`; \})[]; `man`:
> `string` \| `string`[]; `module`: `string`; `name`: `string`; `optionalDependencies`:
> `Record`\<`string`, `string`\>; `os`: `string`[]; `overrides`: `Record`\<`string`, `string` \|
> `Record`\<`string`, `string` \| `Record`\<`string`, `unknown`\>\>\>; `packageManager`: `string`;
> `peerDependencies`: `Record`\<`string`, `string`\>; `peerDependenciesMeta`: `Record`\<`string`, \{
> `optional`: `boolean`; \}\>; `preferGlobal`: `boolean`; `private`: `boolean`; `publishConfig`:
> `object` & `Record`\<`string`, `unknown`\>; `repository`: `string` \| \{ `directory`: `string`;
> `type`: `string`; `url`: `string`; \}; `resolutions`: `Record`\<`string`, `string`\>; `scripts`:
> `Record`\<`string`, `string`\> & `object`; `sideEffects`: `boolean` \| `string`[]; `source`:
> `string`; `type`: `"commonjs"` \| `"module"`; `types`: `string`; `typings`: `string`; `version`:
> `string`; `workspaces`: `string`[] \| \{ `nohoist`: `string`[]; `packages`: `string`[]; \}; \}\>

Defined in:
[packages/zod-utils/source/types/PackageJson.ts:151](https://github.com/jakubmazanec/tools/blob/66e975ab265618dba82f8e4c56654145b7ba4db7/packages/zod-utils/source/types/PackageJson.ts#L151)
