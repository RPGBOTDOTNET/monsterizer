import type { Monster } from "../types";

/**
 * Calculates the effect which a creature's saving throws have on its effective AC
 * when calculating CR.
 * @param {Object} monsterStats
 * @returns {Number} 0, 2, or 4.
 */
export const savingThrowsEffectOnAC = (monsterStats: Monster) => {
  // Effective AC +2 for 3-4 saving throw proficiencies
  // Effective AC +4 for 5-6 saving throw proficiencies
  const numberOfSavingThrowProficiencies = Object.values(
    monsterStats.savingThrows,
  ).filter((savingThrowType) => savingThrowType.proficient).length;
  if (numberOfSavingThrowProficiencies >= 5) {
    return 4;
  } else if (numberOfSavingThrowProficiencies >= 3) {
    return 2;
  } else {
    // TODO: What happens with 0 saving throw proficiencies? Rules don't specify, and that might be fine.
    return 0;
  }
};

export default savingThrowsEffectOnAC;
