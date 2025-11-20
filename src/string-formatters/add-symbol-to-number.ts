/**
 * Prepends a + to a non-negative number and stringifies number so that it starts with a + or -
 * @param {Number} number
 * @returns {String} String representation of a number with leading positive/negative character (+ for 0)
 */
export const addSymbolToNumber = (num: number): string =>
  num >= 0 ? `+${num}` : `${num}`;

export default addSymbolToNumber;
