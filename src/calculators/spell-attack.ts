import type { AbilityScore, Monster } from "../types";
import abilityModifier from "./ability-modifier";
import proficiencyBonus from "./proficiency-bonus";

export const spellAttack = (
  monsterStats: Monster,
  ability: AbilityScore,
): number => {
  return (
    proficiencyBonus(monsterStats) +
    abilityModifier(monsterStats.abilityScores[ability])
  );
};

export default spellAttack;
