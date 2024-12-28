import {type FieldName} from '@conform-to/react';
import {createContext} from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- needed
export const FieldNameContext = createContext<FieldName<any> | undefined>(undefined);
