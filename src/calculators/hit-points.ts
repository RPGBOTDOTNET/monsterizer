import { AVERAGE_DIE_ROLLS } from "../constants";
import type { Monster } from "../types";
import hpModifier from "./hp-modifier";

export const hitPoints = (monsterStats: Monster): number => {
  if (!monsterStats.hitDice.size) return 0;
  const modifier: number = hpModifier(monsterStats);
  const hpPerDie: number = AVERAGE_DIE_ROLLS[monsterStats.hitDice.size];
  return Math.max(monsterStats.hitDice.count * (hpPerDie + modifier), 0);
};

export default hitPoints;
