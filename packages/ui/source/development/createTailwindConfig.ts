import {type Config as BaseTailwindConfig} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import {DEFAULT_STOP, type DEFAULT_STOPS} from './internals/constants.js';
import {createPalette} from './internals/createPalette.js';

let defaultCreateTailwindConfigOptions = {
  colors: {
    gray: '#6c6e79',
    neutral: '#6c6e79', // copy of "gray"
    red: '#d1002f',
    danger: '#d1002f', // copy of "red"
    orange: {
      hex: '#c33909',
      hueShift: 1,
    },
    warning: {
      hex: '#c33909',
      hueShift: 1,
    }, // copy of "orange"
    yellow: {
      swatches: [
        {hex: '#fffffa', stop: 10},
        {hex: '#fffef0', stop: 25},
        {hex: '#fffbdb', stop: 50},
        {hex: '#fff3b8', stop: 100},
        {hex: '#ffe06f', stop: 200},
        {hex: '#ffc72d', stop: 300},
        {hex: '#e69d00', stop: 400},
        {hex: '#9e6300', stop: 500},
        {hex: '#805701', stop: 600},
        {hex: '#614700', stop: 700},
        {hex: '#3d3000', stop: 800},
        {hex: '#1f1a00', stop: 900},
        {hex: '#0f0e00', stop: 950},
        {hex: '#0a0a00', stop: 975},
        {hex: '#050500', stop: 990},
      ],
      hex: '#9e6300',
      hueShift: 3,
    },
    green: '#0a7e22',
    teal: {
      hex: '#007c65',
      hueShift: 5,
    },
    blue: '#006dca',
    primary: '#006dca', // copy of "blue"
    violet: '#8649e1',
    pink: {
      hex: '#b229b9',
      hueShift: 10,
    },
  },
} satisfies CreateTailwindConfigOptions;

export type CreateTailwindConfigOptions = {
  content?: string[] | undefined;
  colors?: Record<
    string,
    | {hex: string; hueShift?: number; saturationShift?: number}
    | {
        swatches: Array<{hex: string; stop: (typeof DEFAULT_STOPS)[number]}>;
        hueShift?: number;
        saturationShift?: number;
      }
    | string
  >;
};

export type TailwindConfig = {
  theme: BaseTailwindConfig['theme'];
  // TODO: find another solution; following is needed because of this: https://github.com/tailwindlabs/tailwindcss/issues/18237
  plugins: BaseTailwindConfig['plugins'];
};

export function createTailwindConfig({
  content,
  colors,
}: CreateTailwindConfigOptions = defaultCreateTailwindConfigOptions): TailwindConfig {
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

  // TODO: find another solution; following is needed because of this: https://github.com/tailwindlabs/tailwindcss/issues/18237
  let root: Record<string, Record<string, string> | string> = {
    '--radius-none': '0',
    '--radius-0_5': '0.125rem',
    '--radius-1': '0.25rem',
    '--radius-1_5': '0.375rem',
    '--radius-2': '0.5rem',
    '--radius-2_5': '0.625rem',
    '--radius-3': '0.75rem',
    '--radius-4': '1rem',
    '--radius-full': '9999px',
    '--font-sans':
      'InterVariable, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  };

  for (let [colorName, colorValue] of Object.entries(themeColors)) {
    if (typeof colorValue === 'string') {
      let variableName = `--color-${colorName}`;
      let variableValue = colorValue;

      root[variableName] = variableValue;
      themeColors[colorName] = `var(${variableName})`;
    } else if (typeof colorValue === 'object') {
      for (let [shadeName, shadeValue] of Object.entries(colorValue)) {
        let variableName = `--color-${colorName}-${shadeName}`;
        let variableValue = shadeValue;

        root[variableName] = variableValue;
        (themeColors[colorName] as Record<string, string>)[shadeName] = `var(${variableName})`; // type assertion is ok, we know the shape of `themeColors`
      }
    }
  }

  return {
    theme: {
      colors: themeColors,
      radius: {
        none: 'var(--radius-none)',
        '0.5': 'var(--radius-0_5)',
        '1': 'var(--radius-1)',
        '1.5': 'var(--radius-1_5)',
        '2': 'var(--radius-2)',
        '2.5': 'var(--radius-2_5)',
        '3': 'var(--radius-3)',
        '4': 'var(--radius-4)',
        full: 'var(--radius-full)',
      },
      font: {
        sans: 'var(--font-sans)',
      },
    },
    // TODO: find another solution; following is needed because of this: https://github.com/tailwindlabs/tailwindcss/issues/18237
    plugins: [
      plugin(({addBase}) => {
        addBase({
          ':root': root,
        });
      }),
    ],
  };
}
