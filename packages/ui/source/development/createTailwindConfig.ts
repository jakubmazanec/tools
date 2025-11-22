import {type Config as BaseTailwindConfig} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

import {createTailwindThemeColors} from './internals.js';
import {type DEFAULT_STOPS} from './internals/constants.js';

export const defaultCreateTailwindConfigOptions = {
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
  colors,
}: CreateTailwindConfigOptions = defaultCreateTailwindConfigOptions): TailwindConfig {
  let themeColors = createTailwindThemeColors(colors);

  // TODO: find another solution; following is needed because of this: https://github.com/tailwindlabs/tailwindcss/issues/18237
  let root: Record<string, Record<string, string> | string> = {
    '--radius-none': '0',
    '--radius-0_5': '2px',
    '--radius-1': '4px',
    '--radius-1_5': '6px',
    '--radius-2': '8px',
    '--radius-2_5': '10px',
    '--radius-3': '12px',
    '--radius-4': '16px',
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
