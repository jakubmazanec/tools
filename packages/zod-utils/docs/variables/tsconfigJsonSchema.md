[**@jakubmazanec/zod-utils**](../README.md)

---

# Variable: tsconfigJsonSchema

> `const` **tsconfigJsonSchema**: `ZodObject`\<\{ `compileOnSave`: `ZodOptional`\<`ZodBoolean`\>;
> `compilerOptions`: `ZodOptional`\<`ZodObject`\<\{ `allowJs`: `ZodOptional`\<`ZodBoolean`\>;
> `allowSyntheticDefaultImports`: `ZodOptional`\<`ZodBoolean`\>; `allowUmdGlobalAccess`:
> `ZodOptional`\<`ZodBoolean`\>; `allowUnreachableCode`: `ZodOptional`\<`ZodBoolean`\>;
> `allowUnusedLabels`: `ZodOptional`\<`ZodBoolean`\>; `alwaysStrict`: `ZodOptional`\<`ZodBoolean`\>;
> `assumeChangesOnlyAffectDirectDependencies`: `ZodOptional`\<`ZodBoolean`\>; `baseUrl`:
> `ZodOptional`\<`ZodString`\>; `charset`: `ZodOptional`\<`ZodString`\>; `checkJs`:
> `ZodOptional`\<`ZodBoolean`\>; `composite`: `ZodOptional`\<`ZodBoolean`\>; `declaration`:
> `ZodOptional`\<`ZodBoolean`\>; `declarationDir`: `ZodOptional`\<`ZodString`\>; `declarationMap`:
> `ZodOptional`\<`ZodBoolean`\>; `diagnostics`: `ZodOptional`\<`ZodBoolean`\>;
> `disableReferencedProjectLoad`: `ZodOptional`\<`ZodBoolean`\>; `disableSizeLimit`:
> `ZodOptional`\<`ZodBoolean`\>; `disableSolutionSearching`: `ZodOptional`\<`ZodBoolean`\>;
> `disableSourceOfProjectReferenceRedirect`: `ZodOptional`\<`ZodBoolean`\>; `downlevelIteration`:
> `ZodOptional`\<`ZodBoolean`\>; `emitBOM`: `ZodOptional`\<`ZodBoolean`\>; `emitDeclarationOnly`:
> `ZodOptional`\<`ZodBoolean`\>; `emitDecoratorMetadata`: `ZodOptional`\<`ZodBoolean`\>;
> `esModuleInterop`: `ZodOptional`\<`ZodBoolean`\>; `exactOptionalPropertyTypes`:
> `ZodOptional`\<`ZodBoolean`\>; `experimentalDecorators`: `ZodOptional`\<`ZodBoolean`\>;
> `explainFiles`: `ZodOptional`\<`ZodBoolean`\>; `extendedDiagnostics`:
> `ZodOptional`\<`ZodBoolean`\>; `fallbackPolling`: `ZodOptional`\<`ZodEnum`\<\{ `dynamicPriority`:
> `"dynamicPriority"`; `dynamicPriorityPolling`: `"dynamicPriorityPolling"`; `fixedChunkSize`:
> `"fixedChunkSize"`; `fixedInterval`: `"fixedInterval"`; `fixedPollingInterval`:
> `"fixedPollingInterval"`; `priorityInterval`: `"priorityInterval"`; `priorityPollingInterval`:
> `"priorityPollingInterval"`; \}\>\>; `forceConsistentCasingInFileNames`:
> `ZodOptional`\<`ZodBoolean`\>; `generateCpuProfile`: `ZodOptional`\<`ZodString`\>;
> `importHelpers`: `ZodOptional`\<`ZodBoolean`\>; `importsNotUsedAsValues`:
> `ZodOptional`\<`ZodEnum`\<\{ `error`: `"error"`; `preserve`: `"preserve"`; `remove`: `"remove"`;
> \}\>\>; `incremental`: `ZodOptional`\<`ZodBoolean`\>; `inlineSourceMap`:
> `ZodOptional`\<`ZodBoolean`\>; `inlineSources`: `ZodOptional`\<`ZodBoolean`\>; `isolatedModules`:
> `ZodOptional`\<`ZodBoolean`\>; `jsx`: `ZodOptional`\<`ZodEnum`\<\{ `preserve`: `"preserve"`;
> `react`: `"react"`; `react-jsx`: `"react-jsx"`; `react-jsxdev`: `"react-jsxdev"`; `react-native`:
> `"react-native"`; \}\>\>; `jsxFactory`: `ZodOptional`\<`ZodString`\>; `jsxFragmentFactory`:
> `ZodOptional`\<`ZodString`\>; `jsxImportSource`: `ZodOptional`\<`ZodString`\>; `keyofStringsOnly`:
> `ZodOptional`\<`ZodBoolean`\>; `lib`: `ZodOptional`\<`ZodArray`\<`ZodEnum`\<\{ `dom`: `"dom"`;
> `DOM`: `"DOM"`; `dom.iterable`: `"dom.iterable"`; `DOM.Iterable`: `"DOM.Iterable"`; `es2015`:
> `"es2015"`; `ES2015`: `"ES2015"`; `es2015.collection`: `"es2015.collection"`; `ES2015.Collection`:
> `"ES2015.Collection"`; `es2015.core`: `"es2015.core"`; `ES2015.Core`: `"ES2015.Core"`;
> `es2015.generator`: `"es2015.generator"`; `ES2015.Generator`: `"ES2015.Generator"`;
> `es2015.iterable`: `"es2015.iterable"`; `ES2015.Iterable`: `"ES2015.Iterable"`; `es2015.promise`:
> `"es2015.promise"`; `ES2015.Promise`: `"ES2015.Promise"`; `es2015.proxy`: `"es2015.proxy"`;
> `ES2015.Proxy`: `"ES2015.Proxy"`; `es2015.reflect`: `"es2015.reflect"`; `ES2015.Reflect`:
> `"ES2015.Reflect"`; `es2015.symbol`: `"es2015.symbol"`; `ES2015.Symbol`: `"ES2015.Symbol"`;
> `es2015.symbol.wellknown`: `"es2015.symbol.wellknown"`; `ES2015.Symbol.WellKnown`:
> `"ES2015.Symbol.WellKnown"`; `es2016`: `"es2016"`; `ES2016`: `"ES2016"`; `es2016.array.include`:
> `"es2016.array.include"`; `ES2016.Array.Include`: `"ES2016.Array.Include"`; `es2017`: `"es2017"`;
> `ES2017`: `"ES2017"`; `es2017.intl`: `"es2017.intl"`; `ES2017.Intl`: `"ES2017.Intl"`;
> `es2017.object`: `"es2017.object"`; `ES2017.Object`: `"ES2017.Object"`; `es2017.sharedmemory`:
> `"es2017.sharedmemory"`; `ES2017.SharedMemory`: `"ES2017.SharedMemory"`; `es2017.string`:
> `"es2017.string"`; `ES2017.String`: `"ES2017.String"`; `es2017.typedarrays`:
> `"es2017.typedarrays"`; `ES2017.TypedArrays`: `"ES2017.TypedArrays"`; `es2018`: `"es2018"`;
> `ES2018`: `"ES2018"`; `es2018.asyncgenerator`: `"es2018.asyncgenerator"`; `ES2018.AsyncGenerator`:
> `"ES2018.AsyncGenerator"`; `es2018.asynciterable`: `"es2018.asynciterable"`;
> `ES2018.AsyncIterable`: `"ES2018.AsyncIterable"`; `es2018.intl`: `"es2018.intl"`; `ES2018.Intl`:
> `"ES2018.Intl"`; `es2018.promise`: `"es2018.promise"`; `ES2018.Promise`: `"ES2018.Promise"`;
> `es2018.regexp`: `"es2018.regexp"`; `ES2018.Regexp`: `"ES2018.Regexp"`; `es2019`: `"es2019"`;
> `ES2019`: `"ES2019"`; `es2019.array`: `"es2019.array"`; `ES2019.Array`: `"ES2019.Array"`;
> `es2019.object`: `"es2019.object"`; `ES2019.Object`: `"ES2019.Object"`; `es2019.string`:
> `"es2019.string"`; `ES2019.String`: `"ES2019.String"`; `es2019.symbol`: `"es2019.symbol"`;
> `ES2019.Symbol`: `"ES2019.Symbol"`; `es2020`: `"es2020"`; `ES2020`: `"ES2020"`; `es2020.bigint`:
> `"es2020.bigint"`; `ES2020.BigInt`: `"ES2020.BigInt"`; `es2020.intl`: `"es2020.intl"`;
> `ES2020.Intl`: `"ES2020.Intl"`; `es2020.promise`: `"es2020.promise"`; `ES2020.Promise`:
> `"ES2020.Promise"`; `es2020.sharedmemory`: `"es2020.sharedmemory"`; `ES2020.SharedMemory`:
> `"ES2020.SharedMemory"`; `es2020.string`: `"es2020.string"`; `ES2020.String`: `"ES2020.String"`;
> `es2020.symbol.wellknown`: `"es2020.symbol.wellknown"`; `ES2020.Symbol.WellKnown`:
> `"ES2020.Symbol.WellKnown"`; `es2021`: `"es2021"`; `ES2021`: `"ES2021"`; `es2021.promise`:
> `"es2021.promise"`; `ES2021.Promise`: `"ES2021.Promise"`; `es2021.string`: `"es2021.string"`;
> `ES2021.String`: `"ES2021.String"`; `es2021.weakref`: `"es2021.weakref"`; `ES2021.WeakRef`:
> `"ES2021.WeakRef"`; `es5`: `"es5"`; `ES5`: `"ES5"`; `es6`: `"es6"`; `ES6`: `"ES6"`; `es7`:
> `"es7"`; `ES7`: `"ES7"`; `esnext`: `"esnext"`; `ESNext`: `"ESNext"`; `esnext.array`:
> `"esnext.array"`; `ESNext.Array`: `"ESNext.Array"`; `esnext.asynciterable`:
> `"esnext.asynciterable"`; `ESNext.AsyncIterable`: `"ESNext.AsyncIterable"`; `esnext.bigint`:
> `"esnext.bigint"`; `ESNext.BigInt`: `"ESNext.BigInt"`; `esnext.intl`: `"esnext.intl"`;
> `ESNext.Intl`: `"ESNext.Intl"`; `esnext.promise`: `"esnext.promise"`; `ESNext.Promise`:
> `"ESNext.Promise"`; `esnext.string`: `"esnext.string"`; `ESNext.String`: `"ESNext.String"`;
> `esnext.symbol`: `"esnext.symbol"`; `ESNext.Symbol`: `"ESNext.Symbol"`; `esnext.weakref`:
> `"esnext.weakref"`; `ESNext.WeakRef`: `"ESNext.WeakRef"`; `scripthost`: `"scripthost"`;
> `ScriptHost`: `"ScriptHost"`; `webworker`: `"webworker"`; `WebWorker`: `"WebWorker"`;
> `webworker.importscripts`: `"webworker.importscripts"`; `WebWorker.ImportScripts`:
> `"WebWorker.ImportScripts"`; `webworker.iterable`: `"webworker.iterable"`; `WebWorker.Iterable`:
> `"WebWorker.Iterable"`; \}\>\>\>; `listEmittedFiles`: `ZodOptional`\<`ZodBoolean`\>; `listFiles`:
> `ZodOptional`\<`ZodBoolean`\>; `listFilesOnly`: `ZodOptional`\<`ZodBoolean`\>; `mapRoot`:
> `ZodOptional`\<`ZodString`\>; `maxNodeModuleJsDepth`: `ZodOptional`\<`ZodNumber`\>; `module`:
> `ZodOptional`\<`ZodEnum`\<\{ `amd`: `"amd"`; `AMD`: `"AMD"`; `commonjs`: `"commonjs"`; `CommonJS`:
> `"CommonJS"`; `es2015`: `"es2015"`; `ES2015`: `"ES2015"`; `es2020`: `"es2020"`; `ES2020`:
> `"ES2020"`; `es6`: `"es6"`; `ES6`: `"ES6"`; `esnext`: `"esnext"`; `ESNext`: `"ESNext"`; `none`:
> `"none"`; `None`: `"None"`; `system`: `"system"`; `System`: `"System"`; `umd`: `"umd"`; `UMD`:
> `"UMD"`; \}\>\>; `moduleResolution`: `ZodOptional`\<`ZodEnum`\<\{ `classic`: `"classic"`; `node`:
> `"node"`; \}\>\>; `newLine`: `ZodOptional`\<`ZodEnum`\<\{ `crlf`: `"crlf"`; `CRLF`: `"CRLF"`;
> `lf`: `"lf"`; `LF`: `"LF"`; \}\>\>; `noEmit`: `ZodOptional`\<`ZodBoolean`\>; `noEmitHelpers`:
> `ZodOptional`\<`ZodBoolean`\>; `noEmitOnError`: `ZodOptional`\<`ZodBoolean`\>;
> `noErrorTruncation`: `ZodOptional`\<`ZodBoolean`\>; `noFallthroughCasesInSwitch`:
> `ZodOptional`\<`ZodBoolean`\>; `noImplicitAny`: `ZodOptional`\<`ZodBoolean`\>;
> `noImplicitOverride`: `ZodOptional`\<`ZodBoolean`\>; `noImplicitReturns`:
> `ZodOptional`\<`ZodBoolean`\>; `noImplicitThis`: `ZodOptional`\<`ZodBoolean`\>;
> `noImplicitUseStrict`: `ZodOptional`\<`ZodBoolean`\>; `noLib`: `ZodOptional`\<`ZodBoolean`\>;
> `noPropertyAccessFromIndexSignature`: `ZodOptional`\<`ZodBoolean`\>; `noResolve`:
> `ZodOptional`\<`ZodBoolean`\>; `noStrictGenericChecks`: `ZodOptional`\<`ZodBoolean`\>;
> `noUncheckedIndexedAccess`: `ZodOptional`\<`ZodBoolean`\>; `noUnusedLocals`:
> `ZodOptional`\<`ZodBoolean`\>; `noUnusedParameters`: `ZodOptional`\<`ZodBoolean`\>; `outDir`:
> `ZodOptional`\<`ZodString`\>; `outFile`: `ZodOptional`\<`ZodString`\>; `paths`:
> `ZodOptional`\<`ZodRecord`\<`ZodString`, `ZodArray`\<`ZodString`\>\>\>; `plugins`:
> `ZodOptional`\<`ZodArray`\<`ZodIntersection`\<`ZodObject`\<\{ `name`: `ZodOptional`\<...\>; \},
> `$strict`\>, `ZodRecord`\<`ZodString`, `ZodUnknown`\>\>\>\>; `preserveConstEnums`:
> `ZodOptional`\<`ZodBoolean`\>; `preserveSymlinks`: `ZodOptional`\<`ZodBoolean`\>;
> `preserveWatchOutput`: `ZodOptional`\<`ZodBoolean`\>; `pretty`: `ZodOptional`\<`ZodBoolean`\>;
> `reactNamespace`: `ZodOptional`\<`ZodString`\>; `removeComments`: `ZodOptional`\<`ZodBoolean`\>;
> `resolveJsonModule`: `ZodOptional`\<`ZodBoolean`\>; `rootDir`: `ZodOptional`\<`ZodString`\>;
> `rootDirs`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `skipDefaultLibCheck`:
> `ZodOptional`\<`ZodBoolean`\>; `skipLibCheck`: `ZodOptional`\<`ZodBoolean`\>; `sourceMap`:
> `ZodOptional`\<`ZodBoolean`\>; `sourceRoot`: `ZodOptional`\<`ZodString`\>; `strict`:
> `ZodOptional`\<`ZodBoolean`\>; `strictBindCallApply`: `ZodOptional`\<`ZodBoolean`\>;
> `strictFunctionTypes`: `ZodOptional`\<`ZodBoolean`\>; `strictNullChecks`:
> `ZodOptional`\<`ZodBoolean`\>; `strictPropertyInitialization`: `ZodOptional`\<`ZodBoolean`\>;
> `stripInternal`: `ZodOptional`\<`ZodBoolean`\>; `suppressExcessPropertyErrors`:
> `ZodOptional`\<`ZodBoolean`\>; `suppressImplicitAnyIndexErrors`: `ZodOptional`\<`ZodBoolean`\>;
> `target`: `ZodOptional`\<`ZodEnum`\<\{ `es2015`: `"es2015"`; `ES2015`: `"ES2015"`; `es2016`:
> `"es2016"`; `ES2016`: `"ES2016"`; `es2017`: `"es2017"`; `ES2017`: `"ES2017"`; `es2018`:
> `"es2018"`; `ES2018`: `"ES2018"`; `es2019`: `"es2019"`; `ES2019`: `"ES2019"`; `es2020`:
> `"es2020"`; `ES2020`: `"ES2020"`; `es2021`: `"es2021"`; `ES2021`: `"ES2021"`; `es3`: `"es3"`;
> `ES3`: `"ES3"`; `es5`: `"es5"`; `ES5`: `"ES5"`; `es6`: `"es6"`; `ES6`: `"ES6"`; `esnext`:
> `"esnext"`; `ESNext`: `"ESNext"`; \}\>\>; `traceResolution`: `ZodOptional`\<`ZodBoolean`\>;
> `tsBuildInfoFile`: `ZodOptional`\<`ZodString`\>; `typeRoots`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `types`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>;
> `useDefineForClassFields`: `ZodOptional`\<`ZodBoolean`\>; `useUnknownInCatchVariables`:
> `ZodOptional`\<`ZodBoolean`\>; `watch`: `ZodOptional`\<`ZodBoolean`\>; `watchDirectory`:
> `ZodOptional`\<`ZodEnum`\<\{ `dynamicPriorityPolling`: `"dynamicPriorityPolling"`;
> `fixedChunkSizePolling`: `"fixedChunkSizePolling"`; `fixedPollingInterval`:
> `"fixedPollingInterval"`; `useFsEvents`: `"useFsEvents"`; \}\>\>; `watchFile`:
> `ZodOptional`\<`ZodEnum`\<\{ `dynamicPriorityPolling`: `"dynamicPriorityPolling"`;
> `fixedChunkSizePolling`: `"fixedChunkSizePolling"`; `fixedPollingInterval`:
> `"fixedPollingInterval"`; `priorityPollingInterval`: `"priorityPollingInterval"`; `useFsEvents`:
> `"useFsEvents"`; `useFsEventsOnParentDirectory`: `"useFsEventsOnParentDirectory"`; \}\>\>; \},
> `$strict`\>\>; `exclude`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `extends`:
> `ZodOptional`\<`ZodString`\>; `files`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `include`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `references`:
> `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `circular`: `ZodOptional`\<`ZodBoolean`\>;
> `originalPath`: `ZodOptional`\<`ZodString`\>; `path`: `ZodString`; `prepend`:
> `ZodOptional`\<`ZodBoolean`\>; \}, `$strict`\>\>\>; `typeAcquisition`:
> `ZodOptional`\<`ZodObject`\<\{ `enable`: `ZodOptional`\<`ZodBoolean`\>; `exclude`:
> `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `include`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>;
> \}, `$strict`\>\>; \}, `$strict`\>

Defined in:
[packages/zod-utils/source/types/TsconfigJson.ts:333](https://github.com/jakubmazanec/tools/blob/d5dfa457a1ee09ed9e5ceb4c7d1c5e6b457dfa51/packages/zod-utils/source/types/TsconfigJson.ts#L333)
