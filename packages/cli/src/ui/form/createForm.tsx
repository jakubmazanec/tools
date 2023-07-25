import {Box, type BoxProps} from 'ink';
import {useCallback} from 'react';

import {type Form} from './Form.js';
import {type FormConfig} from './FormConfig.js';
import {type FormProps} from './FormProps.js';
import {FormRow} from './FormRow.js';

/**
 * Creates form component that contains individual rows with inputs based on the provided config.
 *
 * @param formConfig Form configuration.
 * @returns Form component.
 */
export function createForm<C extends FormConfig>(formConfig: C): Form<C> {
  let Form = ({
    rows,
    values: results,
    onChange,
    onComplete: onFinish,
    ...boxProps
  }: FormProps<C>) => {
    let handleChange = useCallback(
      (value: unknown, rowName: keyof C['rows']) => {
        if (onChange) {
          onChange({
            ...results,
            [rowName]: {
              ...results[rowName],
              value,
            },
          });
        }
      },
      [onChange, results],
    );

    let handleFinish = useCallback(
      (value: unknown, rowName: keyof C['rows']) => {
        onFinish({
          ...results,
          [rowName]: {
            value,
            isComplete: true,
          },
        });
      },
      [onFinish, results],
    );

    let inputElements = [];
    let activeInputName: string | null = null;

    for (let [rowName] of Object.entries(formConfig.rows)) {
      if (!results[rowName as keyof C['rows']].isComplete) {
        activeInputName = String(rowName);

        break;
      }
    }

    for (let [rowName, input] of Object.entries(formConfig.rows)) {
      if (results[rowName as keyof C['rows']].isComplete || rowName === activeInputName) {
        inputElements.push(
          <FormRow
            key={rowName}
            marginTop={inputElements.length === 0 ? 0 : 1}
            focus={rowName === activeInputName}
            isComplete={results[rowName as keyof C['rows']].isComplete}
            config={input}
            rows={rows}
            rowName={rowName}
            value={results[rowName as keyof C['rows']].value}
            onChange={handleChange}
            onComplete={handleFinish}
          />,
        );
      }
    }

    return (
      <Box {...(boxProps as BoxProps)} flexDirection="column">
        {inputElements}
      </Box>
    );
  };

  return Object.assign(Form, {config: formConfig});
}
