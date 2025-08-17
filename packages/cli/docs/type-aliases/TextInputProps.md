[**@jakubmazanec/cli**](../README.md)

---

# Type Alias: TextInputProps

> **TextInputProps** = `BoxProps` & `object`

Defined in:
[packages/cli/source/ui/form/TextInput.tsx:11](https://github.com/jakubmazanec/tools/blob/c36a857a499e2c0c4f38fc4405cb987b357adf10/packages/cli/source/ui/form/TextInput.tsx#L11)

Text input component props.

## Type declaration

### focus?

> `optional` **focus**: `boolean`

Should component listen to Listen to user's input? Useful in case there are multiple input
components at the same time and input must be handled only by a specific component.

### isComplete?

> `optional` **isComplete**: `boolean`

Indicates whether value has been accepted. Component then doesn't accept more input.

### label

> **label**: `string`

Text to display as a label.

### mask?

> `optional` **mask**: `string`

Replace all chars and mask the value. Useful for password inputs.

### onChange()

> **onChange**: (`value`) => `void`

Handler function that is called when value changes.

#### Parameters

##### value

`string`

#### Returns

`void`

### onSubmit()?

> `optional` **onSubmit**: (`value`) => `void`

Handler function that is called when enter is pressed.

#### Parameters

##### value

`string`

#### Returns

`void`

### placeholder?

> `optional` **placeholder**: `string`

Text to display when `value` is empty.

### showCursor?

> `optional` **showCursor**: `boolean`

Show cursor and allow navigation using arrow keys.

### validate()?

> `optional` **validate**: (`value`) => `void`

Validation function that is called when value changes. If this function throws an error

#### Parameters

##### value

`string`

#### Returns

`void`

### value

> **value**: `string`

Value.
