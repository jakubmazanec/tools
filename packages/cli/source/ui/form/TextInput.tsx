import chalk from 'chalk';
import {Box, type BoxProps, Text, useInput} from 'ink';
import {useEffect, useState} from 'react';

import * as colors from '../colors.js';
import * as icons from '../icons.js';

/**
 * Text input component props.
 */
export type TextInputProps = BoxProps & {
  /** Text to display as a label. */
  label: string;

  /** Text to display when `value` is empty. */
  placeholder?: string | undefined;

  /** Value. */
  value: string;

  /** Should component listen to Listen to user's input? Useful in case there are multiple input components at the same time and input must be handled only by a specific component. */
  focus?: boolean | undefined;

  /** Replace all chars and mask the value. Useful for password inputs. */
  mask?: string | undefined;

  /** Show cursor and allow navigation using arrow keys. */
  showCursor?: boolean | undefined;

  /** Validation function that is called when value changes. If this function throws an error*/
  validate?: ((value: string) => void) | undefined;

  /** Handler function that is called when value changes. */
  onChange: (value: string) => void;

  /** Handler function that is called when enter is pressed. */
  onSubmit?: ((value: string) => void) | undefined;

  /** Indicates whether value has been accepted. Component then doesn't accept more input. */
  isComplete?: boolean | undefined;
};

/**
 * Text input component.
 */
export function TextInput({
  label,
  validate,
  isComplete,
  value: originalValue,
  placeholder = '',
  focus = true,
  mask,
  showCursor = true,
  onChange,
  onSubmit,
  ...boxProps
}: TextInputProps) {
  let [validationError, setValidationError] = useState('');
  let [state, setState] = useState({
    cursorOffset: (originalValue || '').length,
    cursorWidth: 0,
  });

  useEffect(() => {
    setState((previousState) => {
      if (!focus || !showCursor) {
        return previousState;
      }

      let newValue = originalValue || '';

      if (previousState.cursorOffset > newValue.length - 1) {
        return {
          cursorOffset: newValue.length,
          cursorWidth: 0,
        };
      }

      return previousState;
    });
  }, [originalValue, focus, showCursor]);

  let value = mask ? mask.repeat(originalValue.length) : originalValue;
  let renderedValue = value;
  let renderedPlaceholder = placeholder ? chalk[colors.muted](placeholder) : undefined;

  if (showCursor && focus) {
    renderedPlaceholder =
      placeholder.length > 0 ?
        chalk.inverse(placeholder[0]) + chalk[colors.muted](placeholder.slice(1))
      : chalk.inverse(' ');

    renderedValue = value.length > 0 ? '' : chalk.inverse(' ');

    for (let [i, character] of Object.entries(value)) {
      if (Number(i) >= state.cursorOffset && Number(i) <= state.cursorOffset) {
        renderedValue += chalk.inverse(character);
      } else {
        renderedValue += character;
      }
    }

    if (value.length > 0 && state.cursorOffset === value.length) {
      renderedValue += chalk.inverse(' ');
    }
  }

  useInput(
    (input, key) => {
      if (
        key.upArrow ||
        key.downArrow ||
        (key.ctrl && input === 'c') ||
        (key.shift && key.tab) ||
        key.tab
      ) {
        return;
      }

      if (key.return) {
        if (onSubmit) {
          if (validate) {
            try {
              validate(originalValue);
            } catch (error: unknown) {
              setValidationError((error as Error).message);

              return;
            }
          }

          if (validationError) {
            setValidationError('');
          } else {
            onSubmit(originalValue);
          }
        }

        return;
      }

      let nextCursorOffset = state.cursorOffset;
      let nextValue = originalValue;
      let nextCursorWidth = 0;

      if (key.leftArrow) {
        if (showCursor) {
          nextCursorOffset -= 1;
        }
      } else if (key.rightArrow) {
        if (showCursor) {
          nextCursorOffset += 1;
        }
      } else if (key.backspace || key.delete) {
        if (state.cursorOffset > 0) {
          nextValue =
            originalValue.slice(0, state.cursorOffset - 1) +
            originalValue.slice(state.cursorOffset);

          nextCursorOffset -= 1;
        }
      } else {
        nextValue =
          originalValue.slice(0, state.cursorOffset) +
          input +
          originalValue.slice(state.cursorOffset);

        nextCursorOffset += input.length;

        if (input.length > 1) {
          nextCursorWidth = input.length;
        }
      }

      if (state.cursorOffset < 0) {
        nextCursorOffset = 0;
      }

      if (state.cursorOffset > originalValue.length) {
        nextCursorOffset = originalValue.length;
      }

      setState({
        cursorOffset: nextCursorOffset,
        cursorWidth: nextCursorWidth,
      });

      if (nextValue !== originalValue) {
        onChange(nextValue);
      }
    },
    {isActive: focus},
  );

  return (
    <Box {...boxProps}>
      <Box marginRight={1}>
        <Text>{isComplete ? icons.success : icons.question}</Text>
      </Box>

      <Box flexDirection="column">
        <Box marginRight={1}>
          <Text color={colors.highlighted}>{label}</Text>
        </Box>
        {isComplete ?
          <Text color={colors.body}>{value}</Text>
        : <Text color={colors.highlighted}>
            {placeholder ?
              value.length > 0 ?
                renderedValue
              : renderedPlaceholder
            : renderedValue}
          </Text>
        }
        {validationError ?
          <Box marginTop={0}>
            <Text color={colors.warning}>{validationError}</Text>
          </Box>
        : null}
      </Box>
    </Box>
  );
}

// partially based on https://github.com/vadimdemedes/ink-text-input/tree/0787c505415f0d059801d80600e4ccb0651385f3 (see https://github.com/vadimdemedes/ink-text-input/blob/0787c505415f0d059801d80600e4ccb0651385f3/license for license)
