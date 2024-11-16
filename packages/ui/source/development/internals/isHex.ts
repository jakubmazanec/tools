export function isHex(value: string) {
  let valueHex = value.length === 6 && !value.startsWith(`#`) ? `#${value}` : value;
  let regExp = new RegExp(/^#[\da-f]{6}$/i);

  return regExp.test(valueHex.toUpperCase());
}
