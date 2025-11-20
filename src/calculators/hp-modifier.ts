import { AbilityScores, type Monster } from "../types";
import abilityModifier from "./ability-modifier";

/**
 * Calculates the flat modifier added to a creature's hit point maximum (no per hit die).
 * @param {Object} monsterStats
 * @returns {Number} The number added to each of the creature's hit dice
 */
export const hpModifier = (monsterStats: Monster) => {
  const constitution: number =
    monsterStats.abilityScores[AbilityScores.Constitution];
  const conMod: number = abilityModifier(constitution);
  return conMod + (monsterStats.hitDice.modifier || 0);
};

export default hpModifier;
