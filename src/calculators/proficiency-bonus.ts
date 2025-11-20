import { STATS_BY_CR_2014 } from "../constants";
import type { Monster } from "../types";

/**
 * Determines the creature's Proficiency Bonus
 * @param {Object} monsterStats
 * @returns {Number}
 */
export const proficiencyBonus = (monsterStats: Monster) =>
  STATS_BY_CR_2014[monsterStats.challenge].proficiencyBonus;

export default proficiencyBonus;
