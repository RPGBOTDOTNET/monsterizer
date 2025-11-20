import { findKey } from "lodash";
import { STATS_BY_CR_2014 } from "../constants";
import type { Monster } from "../types";
import { averageDPR } from "./dpr";

// These would be considered "breaking changes"
// TODO: Spells.
// TODO: Innate spells
// TODO: Make sure that we stop advising people to put spells into the Actions section once the above are done

/**
 * Search the STATS_BY_CR_2014 to find the right CR for the monster's damage output. First step in determining offensive CR.
 * @param {Monster} monsterStats
 * @returns {String} The recommended CR for a creature with the same damage output
 */
const offensiveCRBase = (monsterStats: Monster): string => {
  const monsterDPR = Math.round(averageDPR(monsterStats));
  const fallbackCRBase = monsterDPR ? "30" : "0"; // Used if effective hp is out of bounds
  const retVal =
    findKey(STATS_BY_CR_2014, (stats) => {
      const highEnough = stats.damageMin <= monsterDPR;
      const lowEnough = stats.damageMax >= monsterDPR;
      return highEnough && lowEnough;
    }) || fallbackCRBase;
  if (!retVal)
    throw new Error(
      `Failed to calculate base offensive CR. monsterDPR: ${monsterDPR}.`,
    );
  return retVal;
};

export default offensiveCRBase;
