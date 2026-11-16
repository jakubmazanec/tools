import {type Writable} from '@jakubmazanec/ts-utils';

import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';
import {type ComponentThemeProps} from './ComponentThemeProps.js';

// extracts props for component that uses created useTheme hook
export type ComponentProps<U extends {themeDefinition: ComponentThemeDefinition | undefined}> =
  U['themeDefinition'] extends ComponentThemeDefinition ?
    U['themeDefinition']['variants'] extends ComponentThemeDefinitionVariants ?
      Partial<Writable<ComponentThemeProps<U['themeDefinition']>>>
    : // eslint-disable-next-line @typescript-eslint/no-generated-empty-object-type -- needed, `{}` vanishes from the component props intersections
      NonNullable<unknown>
  : // eslint-disable-next-line @typescript-eslint/no-generated-empty-object-type -- needed, `{}` vanishes from the component props intersections
    NonNullable<unknown>;
