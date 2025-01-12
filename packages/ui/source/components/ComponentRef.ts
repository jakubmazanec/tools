import {type ComponentPropsWithRef, type ElementType} from 'react';

export type ComponentRef<C extends ElementType> = Partial<Pick<ComponentPropsWithRef<C>, 'ref'>>;
