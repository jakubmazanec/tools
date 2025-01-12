import {useContext} from 'react';

import {FormIdContext} from './FormIdContext.js';

export function useFormId() {
  return useContext(FormIdContext);
}
