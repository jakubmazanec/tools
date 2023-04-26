/* eslint-disable @typescript-eslint/sort-type-constituents -- sorting hurts readability in this case */

import {type ShortOptionName} from './ShortOptionName.js';

export type BooleanOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      validate?: ((value: boolean) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue: boolean;
      required?: false | undefined;
      validate?: ((value: boolean) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue?: undefined;
      required: true;
      validate?: ((value: boolean) => void) | undefined;
    };

export type BooleansOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple: true;
      count?: false | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: boolean[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple: true;
      count?: false | undefined;
      defaultValue: readonly boolean[];
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: boolean[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'boolean';
      multiple: true;
      count?: false | undefined;
      defaultValue?: undefined;
      required: true;
      arity?: number | undefined;
      validate?: ((value: boolean[]) => void) | undefined;
    };

export type NumberOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue: number;
      required?: false | undefined;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count?: false | undefined;
      defaultValue?: undefined;
      required: true;
      choices?: readonly number[] | undefined;
      validate?: ((value: number) => void) | undefined;
    };

export type NumbersOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple: true;
      count?: false | undefined;
      choices?: readonly number[] | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: number[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple: true;
      count?: false | undefined;
      choices?: readonly number[] | undefined;
      defaultValue: readonly number[];
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: number[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple: true;
      count?: false | undefined;
      choices?: readonly number[] | undefined;
      defaultValue?: undefined;
      required: true;
      arity?: number | undefined;
      validate?: ((value: number[]) => void) | undefined;
    };

export type CountOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count: true;
      defaultValue?: undefined;
      required?: false | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count: true;
      defaultValue: number;
      required?: false | undefined;
      validate?: ((value: number) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'number';
      multiple?: false | undefined;
      count: true;
      defaultValue?: undefined;
      required: true;
      validate?: ((value: number) => void) | undefined;
    };

export type StringOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple?: false | undefined;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      validate?: ((value: string) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple?: false | undefined;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue: string;
      required?: false | undefined;
      validate?: ((value: string) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple?: false | undefined;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue?: undefined;
      required: true;
      validate?: ((value: string) => void) | undefined;
    };

export type StringsOptionConfig =
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple: true;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue?: undefined;
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: string[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple: true;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue: readonly string[];
      required?: false | undefined;
      arity?: number | undefined;
      validate?: ((value: string[]) => void) | undefined;
    }
  | {
      shortName?: ShortOptionName | undefined;
      description?: string | undefined;

      type: 'string';
      multiple: true;
      count?: false | undefined;
      choices?: readonly string[] | undefined;
      defaultValue?: undefined;
      required: true;
      arity?: number | undefined;
      validate?: ((value: string[]) => void) | undefined;
    };

/** A type representing parser's option configuration. */
export type OptionConfig =
  | BooleanOptionConfig
  | BooleansOptionConfig
  | CountOptionConfig
  | NumberOptionConfig
  | NumbersOptionConfig
  | StringOptionConfig
  | StringsOptionConfig;
