import { type Monster } from "../../types";
import damageFromAllActions from "./damage-from-all-actions";
import damageFromSpecialTraits from "./damage-from-special-traits";

export const averageDPR = (monsterStats: Monster): number => {
  // TODO: Damage from spells
  // TODO: Damage from innate spells
  const damage =
    damageFromAllActions(monsterStats) +
    damageFromSpecialTraits(monsterStats.specialTraits || []);
  return damage;
};

export default averageDPR;
