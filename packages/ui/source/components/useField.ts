import {useContext} from 'react';

import {FieldContext} from './internals.js';

export function useField() {
  return useContext(FieldContext);
}
