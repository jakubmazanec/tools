# @jakubmazanec/cli

## Table of contents

### Namespaces

- [colors](modules/colors.md)
- [icons](modules/icons.md)

### Classes

- [Command](classes/Command.md)
- [Program](classes/Program.md)

### Type Aliases

- [CommandAction](README.md#commandaction)
- [CommandArguments](README.md#commandarguments)
- [CommandOptions](README.md#commandoptions)
- [ErrorDetail](README.md#errordetail)
- [FailureProps](README.md#failureprops)
- [Form](README.md#form)
- [FormConfig](README.md#formconfig)
- [FormProps](README.md#formprops)
- [FormResult](README.md#formresult)
- [FormRowConfig](README.md#formrowconfig)
- [FormRowsConfig](README.md#formrowsconfig)
- [FormValue](README.md#formvalue)
- [FormValues](README.md#formvalues)
- [HeaderProps](README.md#headerprops)
- [HelpProps](README.md#helpprops)
- [ProgramCreateOptions](README.md#programcreateoptions)
- [ProgramDetail](README.md#programdetail)
- [ProgramOptions](README.md#programoptions)
- [ProgramStreams](README.md#programstreams)
- [SelectInputItem](README.md#selectinputitem)
- [StringFormValue](README.md#stringformvalue)
- [TextInputProps](README.md#textinputprops)

### Variables

- [ProgramError](README.md#programerror)

### Functions

- [Failure](README.md#failure)
- [FormRow](README.md#formrow)
- [Header](README.md#header)
- [Help](README.md#help)
- [SelectInput](README.md#selectinput)
- [Spinner](README.md#spinner)
- [TextInput](README.md#textinput)
- [createForm](README.md#createform)
- [getErrorDetail](README.md#geterrordetail)
- [getProgramDetail](README.md#getprogramdetail)
- [useProgram](README.md#useprogram)

## Type Aliases

### CommandAction

Ƭ **CommandAction**<`A`, `B`, `C`, `D`, `E`\>: (`parsedArgs`: `Arguments`<{ `allowUnknownOptions`:
`D` ; `allowUnknownParameters`: `E` ; `commands`: readonly [`A`] ; `options`: `C` ; `parameters`:
`B` }\>, `program`: [`Program`](classes/Program.md)) => `Promise`<`void`\>

#### Type parameters

| Name | Type                                                    |
| :--- | :------------------------------------------------------ |
| `A`  | extends `string`                                        |
| `B`  | extends `ParametersConfig` \| `undefined` = `undefined` |
| `C`  | extends `OptionsConfig` \| `undefined` = `undefined`    |
| `D`  | extends `boolean` = `false`                             |
| `E`  | extends `boolean` = `false`                             |

#### Type declaration

▸ (`parsedArgs`, `program`): `Promise`<`void`\>

Command action.

##### Parameters

| Name         | Type                                                                                                                                           |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `parsedArgs` | `Arguments`<{ `allowUnknownOptions`: `D` ; `allowUnknownParameters`: `E` ; `commands`: readonly [`A`] ; `options`: `C` ; `parameters`: `B` }\> |
| `program`    | [`Program`](classes/Program.md)                                                                                                                |

##### Returns

`Promise`<`void`\>

#### Defined in

[cli/src/program/CommandAction.ts:8](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/CommandAction.ts#L8)

---

### CommandArguments

Ƭ **CommandArguments**<`C`\>: `ReturnType`<`C`[``"parseArguments"``]\>

Parsed command arguments type.

#### Type parameters

| Name | Type                                                                        |
| :--- | :-------------------------------------------------------------------------- |
| `C`  | extends [`Command`](classes/Command.md)<`any`, `any`, `any`, `any`, `any`\> |

#### Defined in

[cli/src/program/CommandArguments.ts:7](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/CommandArguments.ts#L7)

---

### CommandOptions

Ƭ **CommandOptions**<`B`, `C`, `D`, `E`\>: `Object`

[Command constructor](classes/Command.md#constructor) options parameter.

#### Type parameters

| Name | Type                       |
| :--- | :------------------------- |
| `B`  | extends `ParametersConfig` |
| `C`  | extends `OptionsConfig`    |
| `D`  | extends `boolean`          |
| `E`  | extends `boolean`          |

#### Type declaration

| Name                      | Type     |
| :------------------------ | :------- |
| `allowUnknownOptions?`    | `D`      |
| `allowUnknownParameters?` | `E`      |
| `description?`            | `string` |
| `options?`                | `C`      |
| `parameters?`             | `B`      |

#### Defined in

[cli/src/program/CommandOptions.ts:6](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/CommandOptions.ts#L6)

---

### ErrorDetail

Ƭ **ErrorDetail**: `Object`

Detailed error information.

#### Type declaration

| Name                 | Type                                              |
| :------------------- | :------------------------------------------------ |
| `cause?`             | { `description?`: `string` ; `stack?`: `string` } |
| `cause.description?` | `string`                                          |
| `cause.stack?`       | `string`                                          |
| `description?`       | `string`                                          |
| `label`              | `string`                                          |
| `stack?`             | `string`                                          |

#### Defined in

[cli/src/ui/ErrorDetail.ts:4](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/ErrorDetail.ts#L4)

---

### FailureProps

Ƭ **FailureProps**: `BoxProps` & { `error`: `Error` ; `errorDetail?`:
[`ErrorDetail`](README.md#errordetail) }

[Failure](README.md#failure) component props.

#### Defined in

[cli/src/ui/Failure.tsx:12](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Failure.tsx#L12)

---

### Form

Ƭ **Form**<`C`\>: `FC`<[`FormProps`](README.md#formprops)<`C`\>\> & { `config`: `C` }

Form component.

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `C`  | extends [`FormConfig`](README.md#formconfig) |

#### Defined in

[cli/src/ui/form/Form.ts:9](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/Form.ts#L9)

---

### FormConfig

Ƭ **FormConfig**: `Object`

Form configuration.

#### Type declaration

| Name   | Type                                         | Description              |
| :----- | :------------------------------------------- | :----------------------- |
| `rows` | [`FormRowsConfig`](README.md#formrowsconfig) | Form rows configuration. |

#### Defined in

[cli/src/ui/form/FormConfig.ts:6](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormConfig.ts#L6)

---

### FormProps

Ƭ **FormProps**<`C`\>: `FormPropsRows`<`C`\> extends `Record`<`number` \| `string` \| `symbol`,
`never`\> ? `BoxProps` & { `onChange?`: (`formResult`: [`FormValues`](README.md#formvalues)<`C`\>)
=> `void` ; `onComplete`: (`formResult`: [`FormValues`](README.md#formvalues)<`C`\>) => `void` ;
`rows?`: `null` ; `values`: [`FormValues`](README.md#formvalues)<`C`\> } : `BoxProps` & {
`onChange?`: (`formResult`: [`FormValues`](README.md#formvalues)<`C`\>) => `void` ; `onComplete`:
(`formResult`: [`FormValues`](README.md#formvalues)<`C`\>) => `void` ; `rows`: `FormPropsRows`<`C`\>
; `values`: [`FormValues`](README.md#formvalues)<`C`\> }

Form component props.

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `C`  | extends [`FormConfig`](README.md#formconfig) |

#### Defined in

[cli/src/ui/form/FormProps.ts:38](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormProps.ts#L38)

---

### FormResult

Ƭ **FormResult**<`F`\>: [`FormValues`](README.md#formvalues)<`F`[``"config"``]\>

Form result. It is the value of all form rows after the last one is accepted.

#### Type parameters

| Name | Type                                                          |
| :--- | :------------------------------------------------------------ |
| `F`  | extends `Pick`<[`Form`](README.md#form)<`any`\>, `"config"`\> |

#### Defined in

[cli/src/ui/form/FormResult.ts:8](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormResult.ts#L8)

---

### FormRowConfig

Ƭ **FormRowConfig**: { `label?`: `string` ; `type`: `"confirm"` } \| { `label?`: `string` ; `type`:
`"select"` } \| { `label?`: `string` ; `type`: `"text"` ; `validate?`: (`value`: `string`) => `void`
}

Form row configuration.

#### Defined in

[cli/src/ui/form/FormRowConfig.ts:4](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormRowConfig.ts#L4)

---

### FormRowsConfig

Ƭ **FormRowsConfig**: `Record`<`string`, [`FormRowConfig`](README.md#formrowconfig)\>

Form rows configuration.

#### Defined in

[cli/src/ui/form/FormRowsConfig.ts:6](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormRowsConfig.ts#L6)

---

### FormValue

Ƭ **FormValue**<`C`\>: `C`[``"type"``] extends `"text"` ?
[`StringFormValue`](README.md#stringformvalue) : `C`[``"type"``] extends `"select"` ?
[`StringFormValue`](README.md#stringformvalue) : `never`

Form value.

#### Type parameters

| Name | Type                                               |
| :--- | :------------------------------------------------- |
| `C`  | extends [`FormRowConfig`](README.md#formrowconfig) |

#### Defined in

[cli/src/ui/form/FormValue.ts:8](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormValue.ts#L8)

---

### FormValues

Ƭ **FormValues**<`C`\>: { [P in keyof C["rows"]]: FormValue<C["rows"][P]\> }

Form values.

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `C`  | extends [`FormConfig`](README.md#formconfig) |

#### Defined in

[cli/src/ui/form/FormValues.ts:7](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormValues.ts#L7)

---

### HeaderProps

Ƭ **HeaderProps**: `BoxProps` & { `icon?`: `string` ; `showSpinner?`: `boolean` }

[Header](README.md#header) component props.

#### Defined in

[cli/src/ui/Header.tsx:9](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Header.tsx#L9)

---

### HelpProps

Ƭ **HelpProps**: `BoxProps` & { `program`: [`Program`](classes/Program.md) }

[Help](README.md#help) component props.

#### Defined in

[cli/src/ui/Help.tsx:12](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Help.tsx#L12)

---

### ProgramCreateOptions

Ƭ **ProgramCreateOptions**: `Object`

[create](classes/Program.md#create) options parameter.

#### Type declaration

| Name                              | Type                              | Description                                                        |
| :-------------------------------- | :-------------------------------- | :----------------------------------------------------------------- |
| `ErrorBoundaryFallbackComponent?` | `ComponentType`<`FallbackProps`\> | Custom error boundary fallback component                           |
| `bin?`                            | `string`                          | Program executable name.                                           |
| `checkForUpdate?`                 | `boolean`                         | Perform check whether a newer version of the program is available. |
| `description?`                    | `string`                          | Program description.                                               |
| `displayName?`                    | `string`                          | More readable program name.                                        |
| `name?`                           | `string`                          | Program name.                                                      |
| `version?`                        | `string`                          | Program version.                                                   |

#### Defined in

[cli/src/program/ProgramCreateOptions.ts:7](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/ProgramCreateOptions.ts#L7)

---

### ProgramDetail

Ƭ **ProgramDetail**: `Object`

Detailed program information.

#### Type declaration

| Name           | Type     |
| :------------- | :------- |
| `bin?`         | `string` |
| `description?` | `string` |
| `name?`        | `string` |
| `version?`     | `string` |

#### Defined in

[cli/src/program/ProgramDetail.ts:4](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/ProgramDetail.ts#L4)

---

### ProgramOptions

Ƭ **ProgramOptions**: `Object`

[Program constructor](classes/Program.md#constructor) options parameter.

#### Type declaration

| Name                              | Type                              | Description                                                        |
| :-------------------------------- | :-------------------------------- | :----------------------------------------------------------------- |
| `ErrorBoundaryFallbackComponent?` | `ComponentType`<`FallbackProps`\> | Custom error boundary fallback component                           |
| `bin?`                            | `string`                          | Program executable name.                                           |
| `checkForUpdate?`                 | `boolean`                         | Perform check whether a newer version of the program is available. |
| `description?`                    | `string`                          | Program description.                                               |
| `displayName?`                    | `string`                          | More readable program name.                                        |
| `latestVersion?`                  | `string`                          | Program latest version.                                            |
| `name?`                           | `string`                          | Program name.                                                      |
| `version?`                        | `string`                          | Program version.                                                   |

#### Defined in

[cli/src/program/ProgramOptions.ts:7](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/ProgramOptions.ts#L7)

---

### ProgramStreams

Ƭ **ProgramStreams**: `Object`

[Program](classes/Program.md) streams;

#### Type declaration

| Name     | Type                 |
| :------- | :------------------- |
| `stderr` | `NodeJS.WriteStream` |
| `stdin`  | `NodeJS.ReadStream`  |
| `stdout` | `NodeJS.WriteStream` |

#### Defined in

[cli/src/program/ProgramStreams.ts:4](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/ProgramStreams.ts#L4)

---

### SelectInputItem

Ƭ **SelectInputItem**: `Object`

Select input item.

#### Type declaration

| Name    | Type     | Description                 |
| :------ | :------- | :-------------------------- |
| `label` | `string` | Text to display as a label. |
| `value` | `string` | Value.                      |

#### Defined in

[cli/src/ui/form/SelectInputItem.ts:4](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/SelectInputItem.ts#L4)

---

### StringFormValue

Ƭ **StringFormValue**: `Object`

#### Type declaration

| Name         | Type      |
| :----------- | :-------- |
| `isComplete` | `boolean` |
| `value`      | `string`  |

#### Defined in

[cli/src/ui/form/FormValue.ts:3](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormValue.ts#L3)

---

### TextInputProps

Ƭ **TextInputProps**: `BoxProps` & { `focus?`: `boolean` ; `isComplete?`: `boolean` ; `label`:
`string` ; `mask?`: `string` ; `onChange`: (`value`: `string`) => `void` ; `onSubmit?`: (`value`:
`string`) => `void` ; `placeholder?`: `string` ; `showCursor?`: `boolean` ; `validate?`: (`value`:
`string`) => `void` ; `value`: `string` }

Text input component props.

#### Defined in

[cli/src/ui/form/TextInput.tsx:13](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/TextInput.tsx#L13)

## Variables

### ProgramError

• `Const` **ProgramError**: (`code`: `"NO_NESTED_RENDER"`, `options?`: `CustomErrorOptions`) =>
`CustomError`<`"NO_NESTED_RENDER"` \| `"UNKNOWN_ERROR"`\>

#### Type declaration

• **new ProgramError**(`code`, `options?`)

A subclass of `Error` that indicates a program failure.

##### Parameters

| Name       | Type                 |
| :--------- | :------------------- |
| `code`     | `"NO_NESTED_RENDER"` |
| `options?` | `CustomErrorOptions` |

#### Defined in

[cli/src/program/ProgramError.ts:6](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/ProgramError.ts#L6)

## Functions

### Failure

▸ **Failure**(`«destructured»`): `Element`

A component that renders a failure state.

#### Parameters

| Name             | Type                                     |
| :--------------- | :--------------------------------------- |
| `«destructured»` | [`FailureProps`](README.md#failureprops) |

#### Returns

`Element`

#### Defined in

[cli/src/ui/Failure.tsx:23](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Failure.tsx#L23)

---

### FormRow

▸ **FormRow**<`C`\>(`«destructured»`): `null` \| `Element`

Form row component.

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `C`  | extends [`FormConfig`](README.md#formconfig) |

#### Parameters

| Name             | Type                 |
| :--------------- | :------------------- |
| `«destructured»` | `FormRowProps`<`C`\> |

#### Returns

`null` \| `Element`

#### Defined in

[cli/src/ui/form/FormRow.tsx:43](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/FormRow.tsx#L43)

---

### Header

▸ **Header**(`«destructured»`): `Element`

Header component.

#### Parameters

| Name             | Type                                                         |
| :--------------- | :----------------------------------------------------------- |
| `«destructured»` | `PropsWithChildren`<[`HeaderProps`](README.md#headerprops)\> |

#### Returns

`Element`

#### Defined in

[cli/src/ui/Header.tsx:20](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Header.tsx#L20)

---

### Help

▸ **Help**(`«destructured»`): `Element`

A component that renders help information.

#### Parameters

| Name             | Type                               |
| :--------------- | :--------------------------------- |
| `«destructured»` | [`HelpProps`](README.md#helpprops) |

#### Returns

`Element`

#### Defined in

[cli/src/ui/Help.tsx:20](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Help.tsx#L20)

---

### SelectInput

▸ **SelectInput**(`«destructured»`): `JSX.Element`

Select input component.

#### Parameters

| Name             | Type               |
| :--------------- | :----------------- |
| `«destructured»` | `SelectInputProps` |

#### Returns

`JSX.Element`

#### Defined in

[cli/src/ui/form/SelectInput.tsx:42](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/SelectInput.tsx#L42)

---

### Spinner

▸ **Spinner**(): `Element`

Spinner component.

#### Returns

`Element`

#### Defined in

[cli/src/ui/Spinner.tsx:12](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/Spinner.tsx#L12)

---

### TextInput

▸ **TextInput**(`«destructured»`): `Element`

Text input component.

#### Parameters

| Name             | Type                                         |
| :--------------- | :------------------------------------------- |
| `«destructured»` | [`TextInputProps`](README.md#textinputprops) |

#### Returns

`Element`

#### Defined in

[cli/src/ui/form/TextInput.tsx:48](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/TextInput.tsx#L48)

---

### createForm

▸ **createForm**<`C`\>(`formConfig`): [`Form`](README.md#form)<`C`\>

Creates form component that contains individual rows with inputs based on the provided config.

#### Type parameters

| Name | Type                                         |
| :--- | :------------------------------------------- |
| `C`  | extends [`FormConfig`](README.md#formconfig) |

#### Parameters

| Name         | Type | Description         |
| :----------- | :--- | :------------------ |
| `formConfig` | `C`  | Form configuration. |

#### Returns

[`Form`](README.md#form)<`C`\>

Form component.

#### Defined in

[cli/src/ui/form/createForm.tsx:15](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/form/createForm.tsx#L15)

---

### getErrorDetail

▸ **getErrorDetail**(`error`): [`ErrorDetail`](README.md#errordetail)

Creates detailed information about an error.

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `error` | `unknown` |

#### Returns

[`ErrorDetail`](README.md#errordetail)

#### Defined in

[cli/src/ui/getErrorDetail.ts:10](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/getErrorDetail.ts#L10)

---

### getProgramDetail

▸ **getProgramDetail**(`packageJson`): [`ProgramDetail`](README.md#programdetail)

Creates detailed information about a {@lincode Program}.

#### Parameters

| Name                                | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :---------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packageJson`                       | `Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.author?`               | `string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.bin?`                  | `string` \| `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `packageJson.browser?`              | `string` \| `Record`<`string`, `string` \| `false`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `packageJson.bugs?`                 | `string` \| { `email?`: `string` ; `url?`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `packageJson.bundleDependencies?`   | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `packageJson.bundledDependencies?`  | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `packageJson.config?`               | `Record`<`string`, `unknown`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `packageJson.contributors?`         | (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `packageJson.cpu?`                  | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `packageJson.dependencies?`         | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `packageJson.description?`          | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.devDependencies?`      | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `packageJson.directories?`          | `Object`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.bin?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.doc?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.example?`  | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.lib?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.man?`      | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.directories.v?`        | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.engines?`              | { `node?`: `string` ; `npm?`: `string` } & `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.esnext?`               | `string` \| `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `packageJson.exports?`              | `PackageJsonExports`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `packageJson.files?`                | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `packageJson.flat?`                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `packageJson.funding?`              | `string` \| { `type?`: `string` ; `url`: `string` } \| (`string` \| { `type?`: `string` ; `url`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `packageJson.homepage?`             | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.keywords?`             | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `packageJson.license?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.main?`                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.maintainers?`          | (`string` \| { `email?`: `string` ; `name`: `string` ; `url?`: `string` })[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `packageJson.man?`                  | `string` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `packageJson.module?`               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.name?`                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.optionalDependencies?` | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `packageJson.os?`                   | `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `packageJson.overrides?`            | `Record`<`string`, `string` \| `Record`<`string`, `string` \| `Record`<`string`, `unknown`\>\>\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `packageJson.packageManager?`       | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.peerDependencies?`     | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `packageJson.peerDependenciesMeta?` | `Record`<`string`, { `optional`: `boolean` }\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `packageJson.preferGlobal?`         | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `packageJson.private?`              | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `packageJson.publishConfig?`        | { `access?`: `"public"` \| `"restricted"` ; `registry?`: `string` ; `tag?`: `string` } & `Record`<`string`, `unknown`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `packageJson.repository?`           | `string` \| { `directory?`: `string` ; `type`: `string` ; `url`: `string` }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `packageJson.resolutions?`          | `Record`<`string`, `string`\>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `packageJson.scripts?`              | `Record`<`string`, `string`\> & { `install?`: `string` ; `postinstall?`: `string` ; `postpack?`: `string` ; `postpublish?`: `string` ; `postrestart?`: `string` ; `poststart?`: `string` ; `poststop?`: `string` ; `posttest?`: `string` ; `postuninstall?`: `string` ; `postversion?`: `string` ; `preinstall?`: `string` ; `prepack?`: `string` ; `prepare?`: `string` ; `prepublish?`: `string` ; `prepublishOnly?`: `string` ; `prerestart?`: `string` ; `prestart?`: `string` ; `prestop?`: `string` ; `pretest?`: `string` ; `preuninstall?`: `string` ; `preversion?`: `string` ; `publish?`: `string` ; `restart?`: `string` ; `start?`: `string` ; `stop?`: `string` ; `test?`: `string` ; `uninstall?`: `string` ; `version?`: `string` } |
| `packageJson.sideEffects?`          | `boolean` \| `string`[]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `packageJson.source?`               | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.type?`                 | `"commonjs"` \| `"module"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `packageJson.types?`                | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.typings?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.version?`              | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `packageJson.workspaces?`           | `string`[] \| { `nohoist?`: `string`[] ; `packages?`: `string`[] }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Returns

[`ProgramDetail`](README.md#programdetail)

#### Defined in

[cli/src/program/getProgramDetail.ts:8](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/program/getProgramDetail.ts#L8)

---

### useProgram

▸ **useProgram**(): `Object`

A React hook for accessing [Program](classes/Program.md) instance and `exit` function that is used
for showing an error (via an error boundary) and exiting.

#### Returns

`Object`

| Name      | Type                            |
| :-------- | :------------------------------ |
| `exit`    | (`error`: `unknown`) => `void`  |
| `program` | [`Program`](classes/Program.md) |

#### Defined in

[cli/src/ui/useProgram.ts:10](https://github.com/jakubmazanec/js-tools/blob/389bfa9/packages/cli/src/ui/useProgram.ts#L10)
