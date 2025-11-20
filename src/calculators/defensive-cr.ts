import type { ConditionModel, DamageModel, Monster } from "../types";
import { crScale } from "../utils";
import acEffectOnCr from "./ac-effect-on-cr";
import defensiveCRBase from "./defensive-cr-base";

/**
 * Calculates the defensive CR for the monster
 * @param {Object} monsterStats
 * @returns {Number} The creature's Defensive CR scale index (CR scale number, NOT actual CR)
 */
export const defensiveCR = (
  monsterStats: Monster,
  _conditionModel: ConditionModel, // TODO: is this needed?
  damageModel: DamageModel,
): string => {
  const baseDefensiveCR = defensiveCRBase(monsterStats, damageModel) as string;
  return crScale(baseDefensiveCR, acEffectOnCr(monsterStats, damageModel));
};

export default defensiveCR;
