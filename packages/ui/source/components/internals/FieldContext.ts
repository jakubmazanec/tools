import {type FieldMetadata} from '@conform-to/react';
import {createContext} from 'react';

export const FieldContext = createContext<FieldMetadata | undefined>(undefined);
