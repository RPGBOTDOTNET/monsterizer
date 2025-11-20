import { CHALLENGE_RATINGS } from "../constants";

/**
 * DnD's CR scale has fractional CRs, so you can't just add 1 to CR 1/8. Instead, this
 * function moves up and down the progression of CRs.
 * @param {String} start - The CR starting point (as a string due to fractional CR)
 * @param {Number} move - Number of steps to move along the CR scale
 * @returns {String} The new CR
 */
export const crScale = (start: string, move: number) => {
  const startCRIndex = CHALLENGE_RATINGS.indexOf(start);
  const targetCRIndex = startCRIndex + move;
  const safeBottomIndex = Math.max(targetCRIndex, 0);
  const safeIndex = Math.min(safeBottomIndex, CHALLENGE_RATINGS.length - 1);
  return CHALLENGE_RATINGS[safeIndex];
};

export default crScale;
