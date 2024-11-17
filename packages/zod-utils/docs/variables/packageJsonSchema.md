[**@jakubmazanec/zod-utils**](../README.md) • **Docs**

---

# Variable: packageJsonSchema

> `const` **packageJsonSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`,
> `object`\>

## Type declaration

### author

> **author**: `ZodOptional`\<`ZodUnion`\<[`ZodObject`\<`object`, `"strict"`, `ZodTypeAny`,
> `object`, `object`\>, `ZodString`]\>\>

### bin

> **bin**: `ZodOptional`\<`ZodUnion`\<[`ZodRecord`\<`ZodString`, `ZodString`\>, `ZodString`]\>\>

### browser

> **browser**: `ZodOptional`\<`ZodUnion`\<[`ZodString`, `ZodRecord`\<`ZodString`,
> `ZodUnion`\<[`ZodString`, `ZodLiteral`\<`false`\>]\>\>]\>\>

### bugs

> **bugs**: `ZodOptional`\<`ZodUnion`\<[`ZodObject`\<`object`, `"strict"`, `ZodTypeAny`,
> `object`, `object`\>, `ZodString`]\>\>

### bundledDependencies

> **bundledDependencies**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`,
> `"many"`\>, `ZodBoolean`]\>\> = `packageJsonBundledDependenciesSchema`

### bundleDependencies

> **bundleDependencies**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`,
> `"many"`\>, `ZodBoolean`]\>\> = `packageJsonBundledDependenciesSchema`

### config

> **config**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodUnknown`\>\>

### contributors

> **contributors**: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<[`ZodObject`\<`object`,
> `"strict"`, `ZodTypeAny`, `object`, `object`\>, `ZodString`]\>, `"many"`\>\>

### cpu

> **cpu**: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<[`ZodEnum`\<[`"!arm"`, `"!arm64"`, `"!ia32"`,
> `"!mips"`, `"!mipsel"`, `"!ppc"`, `"!ppc64"`, `"!s390"`, `"!s390x"`, `"!x32"`, `"!x64"`,
> `"arm"`, `"arm64"`, `"ia32"`, `"mips"`, `"mipsel"`, `"ppc"`, `"ppc64"`, `"s390"`,
> `"s390x"`, `"x32"`, `"x64"`]\>, `ZodString`]\>, `"many"`\>\>

### dependencies

> **dependencies**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### description

> **description**: `ZodOptional`\<`ZodString`\>

### devDependencies

> **devDependencies**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### directories

> **directories**: `ZodOptional`\<`ZodObject`\<`object`, `"strict"`, `ZodTypeAny`, `object`,
> `object`\>\>

### engines

> **engines**: `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`,
> `object`, `object`\>, `ZodRecord`\<`ZodString`, `ZodString`\>\>\>

### esnext

> **esnext**: `ZodOptional`\<`ZodUnion`\<[`ZodString`, `ZodRecord`\<`ZodString`, `ZodString`\>]\>\>

### exports

> **exports**: `ZodOptional`\<`ZodType`\<`PackageJsonExports`, `ZodTypeDef`,
> `PackageJsonExports`\>\>

### files

> **files**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

### flat

> **flat**: `ZodOptional`\<`ZodBoolean`\>

### funding

> **funding**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodUnion`\<[`ZodObject`\<`object`,
> `"strict"`, `ZodTypeAny`, `object`, `object`\>, `ZodString`]\>, `"many"`\>, `ZodUnion`\<[`ZodObject`\<`object`,
> `"strict"`,
> `ZodTypeAny`, `object`, `object`\>, `ZodString`]\>]\>\>

### homepage

> **homepage**: `ZodOptional`\<`ZodString`\>

### keywords

> **keywords**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

### license

> **license**: `ZodOptional`\<`ZodString`\>

### main

> **main**: `ZodOptional`\<`ZodString`\>

### maintainers

> **maintainers**: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<[`ZodObject`\<`object`,
> `"strict"`, `ZodTypeAny`, `object`, `object`\>, `ZodString`]\>, `"many"`\>\>

### man

> **man**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>

### module

> **module**: `ZodOptional`\<`ZodString`\>

### name

> **name**: `ZodOptional`\<`ZodString`\>

### optionalDependencies

> **optionalDependencies**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### os

> **os**: `ZodOptional`\<`ZodArray`\<`ZodUnion`\<[`ZodEnum`\<[`"!aix"`, `"!darwin"`, `"!freebsd"`,
> `"!linux"`, `"!openbsd"`, `"!sunos"`, `"!win32"`, `"aix"`, `"darwin"`, `"freebsd"`, `"linux"`,
> `"openbsd"`, `"sunos"`, `"win32"`]\>, `ZodString`]\>, `"many"`\>\>

### overrides

> **overrides**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodUnion`\<[`ZodString`,
> `ZodRecord`\<`ZodString`, `ZodUnion`\<[`ZodString`,
> `ZodRecord`\<`ZodString`, `ZodUnknown`\>]\>\>]\>\>\>

### packageManager

> **packageManager**: `ZodOptional`\<`ZodString`\>

### peerDependencies

> **peerDependencies**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### peerDependenciesMeta

> **peerDependenciesMeta**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodObject`\<`object`,
> `"strip"`, `ZodTypeAny`, `object`, `object`\>\>\>

### preferGlobal

> **preferGlobal**: `ZodOptional`\<`ZodBoolean`\>

### private

> **private**: `ZodOptional`\<`ZodBoolean`\>

### publishConfig

> **publishConfig**: `ZodOptional`\<`ZodIntersection`\<`ZodObject`\<`object`, `"strip"`,
> `ZodTypeAny`, `object`, `object`\>, `ZodRecord`\<`ZodString`, `ZodUnknown`\>\>\>

### repository

> **repository**: `ZodOptional`\<`ZodUnion`\<[`ZodObject`\<`object`, `"strict"`, `ZodTypeAny`,
> `object`, `object`\>, `ZodString`]\>\>

### resolutions

> **resolutions**: `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodString`\>\>

### scripts

> **scripts**: `ZodOptional`\<`ZodIntersection`\<`ZodRecord`\<`ZodString`, `ZodString`\>,
> `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>\>

### sideEffects

> **sideEffects**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`,
> `"many"`\>, `ZodBoolean`]\>\>

### source

> **source**: `ZodOptional`\<`ZodString`\>

### type

> **type**: `ZodOptional`\<`ZodUnion`\<[`ZodLiteral`\<`"commonjs"`\>, `ZodLiteral`\<`"module"`\>]\>\>

### types

> **types**: `ZodOptional`\<`ZodString`\>

### typings

> **typings**: `ZodOptional`\<`ZodString`\>

### version

> **version**: `ZodOptional`\<`ZodString`\>

### workspaces

> **workspaces**: `ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`,
> `"many"`\>, `ZodObject`\<`object`, `"strict"`, `ZodTypeAny`, `object`, `object`\>]\>\>

## Defined in

[packages/zod-utils/source/types/PackageJson.ts:151](https://github.com/jakubmazanec/tools/blob/2afd81e4680434017b6f838733fd5ccd928cec42/packages/zod-utils/source/types/PackageJson.ts#L151)
