import {type CreateTailwindConfigOptions} from '../createTailwindConfig.js';
import {DEFAULT_STOP} from './constants.js';
import {createPalette} from './createPalette.js';

export function createTailwindThemeColors(colors: CreateTailwindConfigOptions['colors']) {
  let themeColors: Record<string, Record<string, string> | string> = {
    transparent: 'transparent',
    current: 'currentColor',
    white: '#fff',
    black: '#000',
  };

  for (let [name, color] of Object.entries(colors ?? {})) {
    if (typeof color === 'string') {
      themeColors = {
        ...themeColors,
        ...createPalette({
          name,
          swatches: [
            {
              hex: color,
              stop: DEFAULT_STOP,
            },
          ],
          hueShift: 0,
          saturationShift: 0,
        }),
      };
    } else if ('swatches' in color) {
      themeColors = {
        ...themeColors,
        ...createPalette({
          name,
          swatches: color.swatches,
          hueShift: color.hueShift ?? 0,
          saturationShift: color.saturationShift ?? 0,
        }),
      };
    } else if ('hex' in color) {
      themeColors = {
        ...themeColors,
        ...createPalette({
          name,
          swatches: [{hex: color.hex, stop: DEFAULT_STOP}],
          hueShift: color.hueShift ?? 0,
          saturationShift: color.saturationShift ?? 0,
        }),
      };
    }
  }

  return themeColors;
}
