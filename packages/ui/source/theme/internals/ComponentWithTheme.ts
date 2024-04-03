import {type ComponentThemeDefinition} from './ComponentThemeDefinition.js';

export type ComponentWithTheme = {
  themeDefinition: ComponentThemeDefinition | undefined;
  componentThemeName: string;
};
