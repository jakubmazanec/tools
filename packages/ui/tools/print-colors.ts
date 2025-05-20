import {formatHex, parse} from 'culori';

import {defaultCreateTailwindConfigOptions} from '../source/development/createTailwindConfig.js';
import {createTailwindThemeColors} from '../source/development/internals.js';
import {DEFAULT_STOPS} from '../source/development/internals/constants.js';

console.log('\nhuetone.ardov.me colors:');
console.log(
  JSON.stringify(
    (() => {
      let tailwindConfigColors = createTailwindThemeColors(
        defaultCreateTailwindConfigOptions.colors,
      );

      let result = {
        name: 'Custom palette',
        hues: [] as unknown[],
        tones: DEFAULT_STOPS.filter((stop) => stop !== 0 && stop !== 1000),
      };

      for (let key of Object.keys(tailwindConfigColors).filter(
        (key) => typeof (tailwindConfigColors as Record<string, object | string>)[key] === 'object',
      )) {
        result.hues.push({
          name: key,
          colors: Object.values((tailwindConfigColors as Record<string, object>)[key]!)
            .map((value) => (value as string).replace('<alpha-value>', '100'))
            .map(parse)
            .map(formatHex),
        });
      }

      return result;
    })(),
    null,
    2,
  ),
);

console.log('\n\nTailwind theme colors:');
console.log(
  (() => {
    let tailwindConfigColors = createTailwindThemeColors(defaultCreateTailwindConfigOptions.colors);

    let result = '';

    for (let key of Object.keys(tailwindConfigColors)) {
      let color = tailwindConfigColors[key];

      if (typeof color === 'object') {
        for (let innerKey of Object.keys(color)) {
          result += `--color-${key}-${innerKey}: ${color[innerKey]};\n`;
        }
      } else {
        result += `--color-${key}: ${color};\n`;
      }
    }

    return result;
  })(),
);
