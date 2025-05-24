[**@jakubmazanec/zod-utils**](../README.md)

---

# Function: isTsconfigJson()

> **isTsconfigJson**(`value`): value is \{ compileOnSave?: boolean; compilerOptions?: \{ allowJs?:
> boolean; allowSyntheticDefaultImports?: boolean; allowUmdGlobalAccess?: boolean;
> allowUnreachableCode?: boolean; allowUnusedLabels?: boolean; alwaysStrict?: boolean;
> assumeChangesOnlyAffectDirectDependencies?: boolean; baseUrl?: string; charset?: string; checkJs?:
> boolean; composite?: boolean; declaration?: boolean; declarationDir?: string; declarationMap?:
> boolean; diagnostics?: boolean; disableReferencedProjectLoad?: boolean; disableSizeLimit?:
> boolean; disableSolutionSearching?: boolean; disableSourceOfProjectReferenceRedirect?: boolean;
> downlevelIteration?: boolean; emitBOM?: boolean; emitDeclarationOnly?: boolean;
> emitDecoratorMetadata?: boolean; esModuleInterop?: boolean; exactOptionalPropertyTypes?: boolean;
> experimentalDecorators?: boolean; explainFiles?: boolean; extendedDiagnostics?: boolean;
> fallbackPolling?: "fixedPollingInterval" \| "priorityPollingInterval" \| "dynamicPriorityPolling"
> \| "fixedInterval" \| "priorityInterval" \| "dynamicPriority" \| "fixedChunkSize";
> forceConsistentCasingInFileNames?: boolean; generateCpuProfile?: string; importHelpers?: boolean;
> importsNotUsedAsValues?: "preserve" \| "remove" \| "error"; incremental?: boolean;
> inlineSourceMap?: boolean; inlineSources?: boolean; isolatedModules?: boolean; jsx?:
> "react-native" \| "preserve" \| "react" \| "react-jsx" \| "react-jsxdev"; jsxFactory?: string;
> jsxFragmentFactory?: string; jsxImportSource?: string; keyofStringsOnly?: boolean; lib?: ("esnext"
> \| "ES6" \| "ES2015" \| "ES2020" \| "ESNext" \| "es6" \| "es2015" \| "es2020" \| "ES5" \| "ES2016"
> \| "ES2017" \| "ES2018" \| "ES2019" \| "ES2021" \| "es5" \| "es2016" \| "es2017" \| "es2018" \|
> "es2019" \| "es2021" \| "ES7" \| "ES2015.Collection" \| "ES2015.Core" \| "ES2015.Generator" \|
> "ES2015.Iterable" \| "ES2015.Promise" \| "ES2015.Proxy" \| "ES2015.Reflect" \|
> "ES2015.Symbol.WellKnown" \| "ES2015.Symbol" \| "ES2016.Array.Include" \| "ES2017.Intl" \|
> "ES2017.Object" \| "ES2017.SharedMemory" \| "ES2017.String" \| "ES2017.TypedArrays" \|
> "ES2018.AsyncGenerator" \| "ES2018.AsyncIterable" \| "ES2018.Intl" \| "ES2018.Promise" \|
> "ES2018.Regexp" \| "ES2019.Array" \| "ES2019.Object" \| "ES2019.String" \| "ES2019.Symbol" \|
> "ES2020.BigInt" \| "ES2020.Promise" \| "ES2020.String" \| "ES2020.Symbol.WellKnown" \|
> "ES2020.SharedMemory" \| "ES2020.Intl" \| "ES2021.Promise" \| "ES2021.String" \| "ES2021.WeakRef"
> \| "ESNext.Array" \| "ESNext.AsyncIterable" \| "ESNext.BigInt" \| "ESNext.Intl" \|
> "ESNext.Promise" \| "ESNext.String" \| "ESNext.Symbol" \| "ESNext.WeakRef" \| "DOM" \|
> "DOM.Iterable" \| "ScriptHost" \| "WebWorker" \| "WebWorker.ImportScripts" \| "WebWorker.Iterable"
> \| "es7" \| "es2015.collection" \| "es2015.core" \| "es2015.generator" \| "es2015.iterable" \|
> "es2015.promise" \| "es2015.proxy" \| "es2015.reflect" \| "es2015.symbol.wellknown" \|
> "es2015.symbol" \| "es2016.array.include" \| "es2017.intl" \| "es2017.object" \|
> "es2017.sharedmemory" \| "es2017.string" \| "es2017.typedarrays" \| "es2018.asyncgenerator" \|
> "es2018.asynciterable" \| "es2018.intl" \| "es2018.promise" \| "es2018.regexp" \| "es2019.array"
> \| "es2019.object" \| "es2019.string" \| "es2019.symbol" \| "es2020.bigint" \| "es2020.promise" \|
> "es2020.string" \| "es2020.symbol.wellknown" \| "es2020.sharedmemory" \| "es2020.intl" \|
> "es2021.promise" \| "es2021.string" \| "es2021.weakref" \| "esnext.array" \|
> "esnext.asynciterable" \| "esnext.bigint" \| "esnext.intl" \| "esnext.promise" \| "esnext.string"
> \| "esnext.symbol" \| "esnext.weakref" \| "dom" \| "dom.iterable" \| "scripthost" \| "webworker"
> \| "webworker.importscripts" \| "webworker.iterable")\[\]; listEmittedFiles?: boolean; listFiles?:
> boolean; listFilesOnly?: boolean; mapRoot?: string; maxNodeModuleJsDepth?: number; module?:
> "commonjs" \| "esnext" \| "CommonJS" \| "AMD" \| "System" \| "UMD" \| "ES6" \| "ES2015" \|
> "ES2020" \| "ESNext" \| "None" \| "amd" \| "system" \| "umd" \| "es6" \| "es2015" \| "es2020" \|
> "none"; moduleResolution?: "node" \| "classic"; newLine?: "CRLF" \| "LF" \| "crlf" \| "lf";
> noEmit?: boolean; noEmitHelpers?: boolean; noEmitOnError?: boolean; noErrorTruncation?: boolean;
> noFallthroughCasesInSwitch?: boolean; noImplicitAny?: boolean; noImplicitOverride?: boolean;
> noImplicitReturns?: boolean; noImplicitThis?: boolean; noImplicitUseStrict?: boolean; noLib?:
> boolean; noPropertyAccessFromIndexSignature?: boolean; noResolve?: boolean;
> noStrictGenericChecks?: boolean; noUncheckedIndexedAccess?: boolean; noUnusedLocals?: boolean;
> noUnusedParameters?: boolean; outDir?: string; outFile?: string; paths?: Record\<string,
> string\[\]\>; plugins?: (\{ name?: string \} & Record\<string, unknown\>)\[\];
> preserveConstEnums?: boolean; preserveSymlinks?: boolean; preserveWatchOutput?: boolean; pretty?:
> boolean; reactNamespace?: string; removeComments?: boolean; resolveJsonModule?: boolean; rootDir?:
> string; rootDirs?: string\[\]; skipDefaultLibCheck?: boolean; skipLibCheck?: boolean; sourceMap?:
> boolean; sourceRoot?: string; strict?: boolean; strictBindCallApply?: boolean;
> strictFunctionTypes?: boolean; strictNullChecks?: boolean; strictPropertyInitialization?: boolean;
> stripInternal?: boolean; suppressExcessPropertyErrors?: boolean; suppressImplicitAnyIndexErrors?:
> boolean; target?: "esnext" \| "ES6" \| "ES2015" \| "ES2020" \| "ESNext" \| "es6" \| "es2015" \|
> "es2020" \| "ES3" \| "ES5" \| "ES2016" \| "ES2017" \| "ES2018" \| "ES2019" \| "ES2021" \| "es3" \|
> "es5" \| "es2016" \| "es2017" \| "es2018" \| "es2019" \| "es2021"; traceResolution?: boolean;
> tsBuildInfoFile?: string; typeRoots?: string\[\]; types?: string\[\]; useDefineForClassFields?:
> boolean; useUnknownInCatchVariables?: boolean; watch?: boolean; watchDirectory?:
> "fixedPollingInterval" \| "dynamicPriorityPolling" \| "useFsEvents" \| "fixedChunkSizePolling";
> watchFile?: "fixedPollingInterval" \| "priorityPollingInterval" \| "dynamicPriorityPolling" \|
> "useFsEvents" \| "fixedChunkSizePolling" \| "useFsEventsOnParentDirectory" \}; exclude?:
> string\[\]; extends?: string; files?: string\[\]; include?: string\[\]; references?: \{ circular?:
> boolean; originalPath?: string; path: string; prepend?: boolean \}\[\]; typeAcquisition?: \{
> enable?: boolean; exclude?: string\[\]; include?: string\[\] \} \}

Defined in:
[packages/zod-utils/source/utils/isTsconfigJson.ts:3](https://github.com/jakubmazanec/tools/blob/74fa88a6249b3d486436ae7655f4962bc4a86e11/packages/zod-utils/source/utils/isTsconfigJson.ts#L3)

## Parameters

### value

`unknown`

## Returns

value is \{ compileOnSave?: boolean; compilerOptions?: \{ allowJs?: boolean;
allowSyntheticDefaultImports?: boolean; allowUmdGlobalAccess?: boolean; allowUnreachableCode?:
boolean; allowUnusedLabels?: boolean; alwaysStrict?: boolean;
assumeChangesOnlyAffectDirectDependencies?: boolean; baseUrl?: string; charset?: string; checkJs?:
boolean; composite?: boolean; declaration?: boolean; declarationDir?: string; declarationMap?:
boolean; diagnostics?: boolean; disableReferencedProjectLoad?: boolean; disableSizeLimit?: boolean;
disableSolutionSearching?: boolean; disableSourceOfProjectReferenceRedirect?: boolean;
downlevelIteration?: boolean; emitBOM?: boolean; emitDeclarationOnly?: boolean;
emitDecoratorMetadata?: boolean; esModuleInterop?: boolean; exactOptionalPropertyTypes?: boolean;
experimentalDecorators?: boolean; explainFiles?: boolean; extendedDiagnostics?: boolean;
fallbackPolling?: "fixedPollingInterval" \| "priorityPollingInterval" \| "dynamicPriorityPolling" \|
"fixedInterval" \| "priorityInterval" \| "dynamicPriority" \| "fixedChunkSize";
forceConsistentCasingInFileNames?: boolean; generateCpuProfile?: string; importHelpers?: boolean;
importsNotUsedAsValues?: "preserve" \| "remove" \| "error"; incremental?: boolean; inlineSourceMap?:
boolean; inlineSources?: boolean; isolatedModules?: boolean; jsx?: "react-native" \| "preserve" \|
"react" \| "react-jsx" \| "react-jsxdev"; jsxFactory?: string; jsxFragmentFactory?: string;
jsxImportSource?: string; keyofStringsOnly?: boolean; lib?: ("esnext" \| "ES6" \| "ES2015" \|
"ES2020" \| "ESNext" \| "es6" \| "es2015" \| "es2020" \| "ES5" \| "ES2016" \| "ES2017" \| "ES2018"
\| "ES2019" \| "ES2021" \| "es5" \| "es2016" \| "es2017" \| "es2018" \| "es2019" \| "es2021" \|
"ES7" \| "ES2015.Collection" \| "ES2015.Core" \| "ES2015.Generator" \| "ES2015.Iterable" \|
"ES2015.Promise" \| "ES2015.Proxy" \| "ES2015.Reflect" \| "ES2015.Symbol.WellKnown" \|
"ES2015.Symbol" \| "ES2016.Array.Include" \| "ES2017.Intl" \| "ES2017.Object" \|
"ES2017.SharedMemory" \| "ES2017.String" \| "ES2017.TypedArrays" \| "ES2018.AsyncGenerator" \|
"ES2018.AsyncIterable" \| "ES2018.Intl" \| "ES2018.Promise" \| "ES2018.Regexp" \| "ES2019.Array" \|
"ES2019.Object" \| "ES2019.String" \| "ES2019.Symbol" \| "ES2020.BigInt" \| "ES2020.Promise" \|
"ES2020.String" \| "ES2020.Symbol.WellKnown" \| "ES2020.SharedMemory" \| "ES2020.Intl" \|
"ES2021.Promise" \| "ES2021.String" \| "ES2021.WeakRef" \| "ESNext.Array" \| "ESNext.AsyncIterable"
\| "ESNext.BigInt" \| "ESNext.Intl" \| "ESNext.Promise" \| "ESNext.String" \| "ESNext.Symbol" \|
"ESNext.WeakRef" \| "DOM" \| "DOM.Iterable" \| "ScriptHost" \| "WebWorker" \|
"WebWorker.ImportScripts" \| "WebWorker.Iterable" \| "es7" \| "es2015.collection" \| "es2015.core"
\| "es2015.generator" \| "es2015.iterable" \| "es2015.promise" \| "es2015.proxy" \| "es2015.reflect"
\| "es2015.symbol.wellknown" \| "es2015.symbol" \| "es2016.array.include" \| "es2017.intl" \|
"es2017.object" \| "es2017.sharedmemory" \| "es2017.string" \| "es2017.typedarrays" \|
"es2018.asyncgenerator" \| "es2018.asynciterable" \| "es2018.intl" \| "es2018.promise" \|
"es2018.regexp" \| "es2019.array" \| "es2019.object" \| "es2019.string" \| "es2019.symbol" \|
"es2020.bigint" \| "es2020.promise" \| "es2020.string" \| "es2020.symbol.wellknown" \|
"es2020.sharedmemory" \| "es2020.intl" \| "es2021.promise" \| "es2021.string" \| "es2021.weakref" \|
"esnext.array" \| "esnext.asynciterable" \| "esnext.bigint" \| "esnext.intl" \| "esnext.promise" \|
"esnext.string" \| "esnext.symbol" \| "esnext.weakref" \| "dom" \| "dom.iterable" \| "scripthost" \|
"webworker" \| "webworker.importscripts" \| "webworker.iterable")\[\]; listEmittedFiles?: boolean;
listFiles?: boolean; listFilesOnly?: boolean; mapRoot?: string; maxNodeModuleJsDepth?: number;
module?: "commonjs" \| "esnext" \| "CommonJS" \| "AMD" \| "System" \| "UMD" \| "ES6" \| "ES2015" \|
"ES2020" \| "ESNext" \| "None" \| "amd" \| "system" \| "umd" \| "es6" \| "es2015" \| "es2020" \|
"none"; moduleResolution?: "node" \| "classic"; newLine?: "CRLF" \| "LF" \| "crlf" \| "lf"; noEmit?:
boolean; noEmitHelpers?: boolean; noEmitOnError?: boolean; noErrorTruncation?: boolean;
noFallthroughCasesInSwitch?: boolean; noImplicitAny?: boolean; noImplicitOverride?: boolean;
noImplicitReturns?: boolean; noImplicitThis?: boolean; noImplicitUseStrict?: boolean; noLib?:
boolean; noPropertyAccessFromIndexSignature?: boolean; noResolve?: boolean; noStrictGenericChecks?:
boolean; noUncheckedIndexedAccess?: boolean; noUnusedLocals?: boolean; noUnusedParameters?: boolean;
outDir?: string; outFile?: string; paths?: Record\<string, string\[\]\>; plugins?: (\{ name?: string
\} & Record\<string, unknown\>)\[\]; preserveConstEnums?: boolean; preserveSymlinks?: boolean;
preserveWatchOutput?: boolean; pretty?: boolean; reactNamespace?: string; removeComments?: boolean;
resolveJsonModule?: boolean; rootDir?: string; rootDirs?: string\[\]; skipDefaultLibCheck?: boolean;
skipLibCheck?: boolean; sourceMap?: boolean; sourceRoot?: string; strict?: boolean;
strictBindCallApply?: boolean; strictFunctionTypes?: boolean; strictNullChecks?: boolean;
strictPropertyInitialization?: boolean; stripInternal?: boolean; suppressExcessPropertyErrors?:
boolean; suppressImplicitAnyIndexErrors?: boolean; target?: "esnext" \| "ES6" \| "ES2015" \|
"ES2020" \| "ESNext" \| "es6" \| "es2015" \| "es2020" \| "ES3" \| "ES5" \| "ES2016" \| "ES2017" \|
"ES2018" \| "ES2019" \| "ES2021" \| "es3" \| "es5" \| "es2016" \| "es2017" \| "es2018" \| "es2019"
\| "es2021"; traceResolution?: boolean; tsBuildInfoFile?: string; typeRoots?: string\[\]; types?:
string\[\]; useDefineForClassFields?: boolean; useUnknownInCatchVariables?: boolean; watch?:
boolean; watchDirectory?: "fixedPollingInterval" \| "dynamicPriorityPolling" \| "useFsEvents" \|
"fixedChunkSizePolling"; watchFile?: "fixedPollingInterval" \| "priorityPollingInterval" \|
"dynamicPriorityPolling" \| "useFsEvents" \| "fixedChunkSizePolling" \|
"useFsEventsOnParentDirectory" \}; exclude?: string\[\]; extends?: string; files?: string\[\];
include?: string\[\]; references?: \{ circular?: boolean; originalPath?: string; path: string;
prepend?: boolean \}\[\]; typeAcquisition?: \{ enable?: boolean; exclude?: string\[\]; include?:
string\[\] \} \}
