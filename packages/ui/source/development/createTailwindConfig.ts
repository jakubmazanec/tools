import {type Config as TailwindConfig} from 'tailwindcss';

import {DEFAULT_STOP, type DEFAULT_STOPS} from './internals/constants.js';
import {createPalette} from './internals/createPalette.js';
import {resolveModule} from './internals/resolveModule.js';

let defaultCreateTailwindConfigOptions = {
  content: ['./{.storybook,app,source,stories,tests}/**/*.{js,jsx,ts,tsx,mdx}', '@jakubmazanec/ui'],
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
    | string
    | {
        swatches: Array<{hex: string; stop: (typeof DEFAULT_STOPS)[number]}>;
        hueShift?: number;
        saturationShift?: number;
      }
    | {hex: string; hueShift?: number; saturationShift?: number}
  >;
};

export function createTailwindConfig({
  content,
  colors,
}: CreateTailwindConfigOptions = defaultCreateTailwindConfigOptions): TailwindConfig {
  let themeColors = {
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

  let resolvedContent = [];

  for (let contentPath of content ?? []) {
    try {
      if (contentPath.startsWith('.') || contentPath.startsWith('/')) {
        resolvedContent.push(contentPath);
      } else {
        resolvedContent.push(`${resolveModule(contentPath)}/**`);
      }
    } catch {
      // no-op, because we're catching error caused by `createRequire` not being a function in a browser environment
    }
  }

  return {
    content: resolvedContent,
    theme: {
      colors: themeColors,
      borderRadius: {
        none: '0',
        DEFAULT: '0.25rem',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '4': '1rem',
        full: '9999px',
      },
      extend: {
        spacing: {
          13: '3.25rem',
          15: '3.75rem',
          17: '4.25rem',
          18: '4.5rem',
          19: '4.75rem',
          21: '5.25rem',
          22: '5.5rem',
          23: '5.75rem',
          25: '6.25rem',
          26: '6.5rem',
          27: '6.75rem',
          29: '6.25rem',
          30: '7.5rem',
          34: '8.5rem',
          38: '9.5rem',
          40: '10rem',
        },
        fontFamily: {
          sans: [
            'InterVariable',
            'ui-sans-serif',
            'system-ui',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
        },
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  };
}
