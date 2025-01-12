import {useContext} from 'react';

import {FieldNameContext} from './internals.js';

export function useFieldName() {
  return useContext(FieldNameContext);
}
