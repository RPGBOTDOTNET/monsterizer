import { get } from "lodash";
import { SKILLS_TO_ABILITIES } from "../constants";
import { type Monster, type Skill, type ThingProficiency } from "../types";
import abilityModifier from "./ability-modifier";
import proficiencyBonus from "./proficiency-bonus";

/**
 * Calculates a creature's skill modifier for the specified skill
 * @param {Object} monsterStats
 * @param {Skills} skillKey
 * @returns {Number}
 */
export const skillModifier = (monsterStats: Monster, skillKey: Skill) => {
  const abilityScoreKey = SKILLS_TO_ABILITIES[skillKey];
  const abilityScore = get(monsterStats, `abilityScores.${abilityScoreKey}`);
  const skill: ThingProficiency | undefined = monsterStats.skills[skillKey];
  let retVal = abilityModifier(abilityScore);
  if (monsterStats.skills && skill) {
    retVal += skill.additionalBonus || 0;
    if (skill.proficient) {
      retVal += proficiencyBonus(monsterStats);
    }
  }
  return retVal;
};

export default skillModifier;
