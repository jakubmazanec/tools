import {type ClassName} from './ClassName.js';
import {type ComponentThemeDefinitionElements} from './ComponentThemeDefinitionElements.js';
import {type ComponentThemeDefinitionVariants} from './ComponentThemeDefinitionVariants.js';

export type ComponentThemeCompoundVariants<
  V extends ComponentThemeDefinitionVariants,
  E extends ComponentThemeDefinitionElements | undefined,
> = Array<
  {
    [K in keyof V]?: Array<V[K][number]> | V[K][number];
  } & (E extends ComponentThemeDefinitionElements ?
    {
      classNames: {
        [K in E[number]]: ClassName;
      };
    }
  : {
      className: ClassName;
    })
>;
