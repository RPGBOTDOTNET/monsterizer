import type { Monster } from "../types";
import { crScale } from "../utils";
import attackOrDcEffectOnCR from "./attack-or-dc-effect-on-cr";
import offensiveCRBase from "./offensive-cr-base";

/**
 *
 * @param {Object} monsterStats
 * @returns {String} The creature's Offensive CR scale index (CR scale number, NOT actual CR)
 */
export const offensiveCR = (monsterStats: Monster): string => {
  const baseOffensiveCR = offensiveCRBase(monsterStats);
  const attackEffectOnCr = attackOrDcEffectOnCR(monsterStats);

  return crScale(baseOffensiveCR, attackEffectOnCr);
};

export default offensiveCR;
