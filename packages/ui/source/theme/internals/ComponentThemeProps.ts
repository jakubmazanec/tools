import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';

export type ComponentThemeProps<D extends ComponentThemeDefinition | undefined> =
  D extends ComponentThemeDefinition ?
    D['variants'] extends ComponentThemeDefinitionVariants ?
      {
        [J in keyof D['variants']]: D['variants'][J][number];
      }
    : // eslint-disable-next-line @typescript-eslint/no-generated-empty-object-type -- needed, a theme without variants takes no theme props
      NonNullable<unknown>
  : // eslint-disable-next-line @typescript-eslint/no-generated-empty-object-type -- needed, a theme without variants takes no theme props
    NonNullable<unknown>;
