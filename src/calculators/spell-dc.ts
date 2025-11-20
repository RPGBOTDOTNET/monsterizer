import type { AbilityScore, Monster } from "../types";
import spellAttack from "./spell-attack";

export const spellDc = (monsterStats: Monster, ability: AbilityScore) =>
  8 + spellAttack(monsterStats, ability);

export default spellDc;
