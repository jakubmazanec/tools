import {type BoxProps} from 'ink';
import {useCallback} from 'react';

import {type FormConfig} from './FormConfig.js';
import {type FormProps} from './FormProps.js';
import {type FormRowConfig} from './FormRowConfig.js';
import {SelectInput} from './SelectInput.js';
import {TextInput} from './TextInput.js';

/**
 * Form row component props.
 */
type FormRowProps<C extends FormConfig> = BoxProps & {
  /** Form row configuration. */
  config: FormRowConfig;

  // TODO: Should all rows props be passed to each row?
  /** Props of all form rows. */
  rows: FormProps<C>['rows'] | null;

  /** Row name. */
  rowName: keyof C['rows'];

  /** Value. */
  value: unknown;

  /** Should component listen to Listen to user's input? Useful in case there are multiple input components at the same time and input must be "routed" to a specific component. */
  focus: boolean;

  /** Handler function that is called when value changes. */
  onChange: (value: unknown, inputName: keyof C['rows']) => void;

  /** Handler function that is called when the value is accepted. */
  onComplete: (value: unknown, inputName: keyof C['rows']) => void;

  /** Indicates whether value has been accepted. Component in the row then doesn't accept more input. */
  isComplete: boolean;
};

/**
 * Form row component.
 */
export function FormRow<C extends FormConfig>({
  rowName,
  config,
  rows,
  value,
  focus,
  isComplete,
  onChange,
  onComplete,
  ...boxProps
}: FormRowProps<C>) {
  // TODO: Each input component handles values and events differently; the APIs should be adjusted.
  let handleChange = useCallback(
    (newValue: unknown) => {
      onChange(newValue, rowName);
    },
    [rowName, onChange],
  );

  let handleFinish = useCallback(
    (newValue: unknown) => {
      onComplete(newValue, rowName);
    },
    [rowName, onComplete],
  );

  let handleSelectFinish = useCallback(
    (item: {value: unknown}) => {
      onComplete(item.value, rowName);
    },
    [rowName, onComplete],
  );

  switch (config.type) {
    case 'text': {
      return (
        <TextInput
          key={String(rowName)}
          label={config.label ?? ''}
          validate={config.validate}
          value={value as string}
          focus={focus}
          isComplete={isComplete}
          onChange={handleChange}
          onSubmit={handleFinish}
          {...boxProps}
        />
      );
    }
    case 'select': {
      return (
        <SelectInput
          key={String(rowName)}
          label={config.label ?? ''}
          items={
            rows
              ? (
                  (
                    rows as {
                      [key: string]: unknown;
                    }
                  )[rowName as string] as {choices: Array<{value: string; label: string}>}
                ).choices
              : []
          }
          focus={focus}
          isComplete={isComplete}
          onSelect={handleSelectFinish}
          {...boxProps}
        />
      );
    }
    default: {
      return null;
    }
  }
}
