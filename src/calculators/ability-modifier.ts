/**
 * Calculate an ability score modifier based on a numeric ability score
 * @param {Number} abilityScore - The value of a creature's ability score. 0 or higher.
 * @returns {Number} -5 or higher.
 */
export const abilityModifier = (abilityScore: number): number =>
  Math.floor((abilityScore - 10) / 2);

export default abilityModifier;
