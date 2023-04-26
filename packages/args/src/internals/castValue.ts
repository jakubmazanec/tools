import {isFalseString} from './isFalseString.js';

/**
 * A function that casts string value to a specified type.
 *
 * @param value The value to be converted.
 * @param type The type to convert the value into.
 * */
export function castValue<T extends 'boolean' | 'number' | 'string'>(
  value: string,
  type?: T,
): T extends 'boolean' ? boolean : T extends 'number' ? number : string {
  switch (type) {
    case 'boolean': {
      let booleanString = String(value).toLowerCase();

      return !(isFalseString(booleanString) || booleanString === '') as T extends 'boolean'
        ? boolean
        : T extends 'number'
        ? number
        : string;
    }

    case 'number': {
      return Number.parseFloat(value) as T extends 'boolean'
        ? boolean
        : T extends 'number'
        ? number
        : string;
    }

    default: {
      return String(value) as T extends 'boolean' ? boolean : T extends 'number' ? number : string;
    }
  }
}
