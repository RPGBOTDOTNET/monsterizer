import { get } from "lodash";
import type { AbilityScore, Monster, ThingProficiency } from "../types";
import abilityModifier from "./ability-modifier";
import proficiencyBonus from "./proficiency-bonus";

/**
 * Calculates a creature's saving throw modifier for the specified saving throw
 * @param {Object} monsterStats
 * @param {String} abilityScore - UPPERCASE string key for the Skills.
 * @returns {Number}
 */
export const savingThrowModifier = (
  monsterStats: Monster,
  abilityScore: AbilityScore,
): number => {
  const score: number = get(monsterStats, `abilityScores.${abilityScore}`, 0);
  const saveObj: ThingProficiency = get(
    monsterStats,
    `savingThrows.${abilityScore}`,
    { proficient: 0 },
  );

  let retVal = abilityModifier(score);
  if (monsterStats.savingThrows && saveObj) {
    retVal += saveObj.additionalBonus || 0;
    if (saveObj.proficient) {
      retVal += proficiencyBonus(monsterStats);
    }
  }
  return retVal;
};

export default savingThrowModifier;
