[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: isPackageJson()

> **isPackageJson**(`value`): value is \{ author?: string \| \{ email?: string; name: string; url?:
> string \}; bin?: string \| Record\<string, string\>; browser?: string \| Record\<string, string \|
> false\>; bugs?: string \| \{ email?: string; url?: string \}; bundledDependencies?: boolean \|
> string\[\]; bundleDependencies?: boolean \| string\[\]; config?: Record\<string, unknown\>;
> contributors?: (string \| \{ email?: string; name: string; url?: string \})\[\]; cpu?: string\[\];
> dependencies?: Record\<string, string\>; description?: string; devDependencies?: Record\<string,
> string\>; directories?: \{ bin?: string; doc?: string; example?: string; lib?: string; man?:
> string; v?: string \}; engines?: \{ node?: string; npm?: string \} & Record\<string, string\>;
> esnext?: string \| Record\<string, string\>; exports?: PackageJsonExports; files?: string\[\];
> flat?: boolean; funding?: string \| \{ type?: string; url: string \} \| (string \| \{ type?:
> string; url: string \})\[\]; homepage?: string; keywords?: string\[\]; license?: string; main?:
> string; maintainers?: (string \| \{ email?: string; name: string; url?: string \})\[\]; man?:
> string \| string\[\]; module?: string; name?: string; optionalDependencies?: Record\<string,
> string\>; os?: string\[\]; overrides?: Record\<string, string \| Record\<string, string \|
> Record\<string, unknown\>\>\>; packageManager?: string; peerDependencies?: Record\<string,
> string\>; peerDependenciesMeta?: Record\<string, \{ optional: boolean \}\>; preferGlobal?:
> boolean; private?: boolean; publishConfig?: \{ access?: "public" \| "restricted"; registry?:
> string; tag?: string \} & Record\<string, unknown\>; repository?: string \| \{ directory?: string;
> type: string; url: string \}; resolutions?: Record\<string, string\>; scripts?: Record\<string,
> string\> & \{ install?: string; postinstall?: string; postpack?: string; postpublish?: string;
> postrestart?: string; poststart?: string; poststop?: string; posttest?: string; postuninstall?:
> string; postversion?: string; preinstall?: string; prepack?: string; prepare?: string;
> prepublish?: string; prepublishOnly?: string; prerestart?: string; prestart?: string; prestop?:
> string; pretest?: string; preuninstall?: string; preversion?: string; publish?: string; restart?:
> string; start?: string; stop?: string; test?: string; uninstall?: string; version?: string \};
> sideEffects?: boolean \| string\[\]; source?: string; type?: "commonjs" \| "module"; types?:
> string; typings?: string; version?: string; workspaces?: string\[\] \| \{ nohoist?: string\[\];
> packages?: string\[\] \} \}

Defined in:
[packages/zod-utils/source/utils/isPackageJson.ts:3](https://github.com/jakubmazanec/tools/blob/0facf018610de1abfab16bb462f482af92e0cf97/packages/zod-utils/source/utils/isPackageJson.ts#L3)

## Parameters

### value

`unknown`

## Returns

value is \{ author?: string \| \{ email?: string; name: string; url?: string \}; bin?: string \|
Record\<string, string\>; browser?: string \| Record\<string, string \| false\>; bugs?: string \| \{
email?: string; url?: string \}; bundledDependencies?: boolean \| string\[\]; bundleDependencies?:
boolean \| string\[\]; config?: Record\<string, unknown\>; contributors?: (string \| \{ email?:
string; name: string; url?: string \})\[\]; cpu?: string\[\]; dependencies?: Record\<string,
string\>; description?: string; devDependencies?: Record\<string, string\>; directories?: \{ bin?:
string; doc?: string; example?: string; lib?: string; man?: string; v?: string \}; engines?: \{
node?: string; npm?: string \} & Record\<string, string\>; esnext?: string \| Record\<string,
string\>; exports?: PackageJsonExports; files?: string\[\]; flat?: boolean; funding?: string \| \{
type?: string; url: string \} \| (string \| \{ type?: string; url: string \})\[\]; homepage?:
string; keywords?: string\[\]; license?: string; main?: string; maintainers?: (string \| \{ email?:
string; name: string; url?: string \})\[\]; man?: string \| string\[\]; module?: string; name?:
string; optionalDependencies?: Record\<string, string\>; os?: string\[\]; overrides?:
Record\<string, string \| Record\<string, string \| Record\<string, unknown\>\>\>; packageManager?:
string; peerDependencies?: Record\<string, string\>; peerDependenciesMeta?: Record\<string, \{
optional: boolean \}\>; preferGlobal?: boolean; private?: boolean; publishConfig?: \{ access?:
"public" \| "restricted"; registry?: string; tag?: string \} & Record\<string, unknown\>;
repository?: string \| \{ directory?: string; type: string; url: string \}; resolutions?:
Record\<string, string\>; scripts?: Record\<string, string\> & \{ install?: string; postinstall?:
string; postpack?: string; postpublish?: string; postrestart?: string; poststart?: string;
poststop?: string; posttest?: string; postuninstall?: string; postversion?: string; preinstall?:
string; prepack?: string; prepare?: string; prepublish?: string; prepublishOnly?: string;
prerestart?: string; prestart?: string; prestop?: string; pretest?: string; preuninstall?: string;
preversion?: string; publish?: string; restart?: string; start?: string; stop?: string; test?:
string; uninstall?: string; version?: string \}; sideEffects?: boolean \| string\[\]; source?:
string; type?: "commonjs" \| "module"; types?: string; typings?: string; version?: string;
workspaces?: string\[\] \| \{ nohoist?: string\[\]; packages?: string\[\] \} \}
