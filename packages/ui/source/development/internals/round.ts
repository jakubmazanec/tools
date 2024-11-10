export function round(value: number, precision = 0) {
  let multiplier = 10 ** precision;

  return Math.round(value * multiplier) / multiplier;
}
