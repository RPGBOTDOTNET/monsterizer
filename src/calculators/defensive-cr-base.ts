import { findKey } from "lodash";
import { STATS_BY_CR_2014 } from "../constants";
import type { DamageModel, Monster } from "../types";
import effectiveHP from "./effective-hp";

/**
 * Search the STATS_BY_CR_2014 to find the right CR for the monster's effective hp. First step in determining defensive CR.
 * @param {Object} monsterStats
 * @returns {String} The recommended CR for a creature with the same effective hp
 */
export const defensiveCRBase = (
  monsterStats: Monster,
  damageModel: DamageModel,
): string => {
  const monsterEffectiveHP = effectiveHP(monsterStats, damageModel);
  const fallbackCRBase = monsterEffectiveHP ? "30" : "0"; // Used if effective hp is out of bounds
  const retVal =
    findKey(STATS_BY_CR_2014, (stats) => {
      return (
        stats.hpMin <= monsterEffectiveHP && stats.hpMax >= monsterEffectiveHP
      );
    }) || fallbackCRBase;
  if (!retVal) throw new Error("Couldn't determine base defensive CR.");
  return retVal;
};

export default defensiveCRBase;
