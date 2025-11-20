import { map } from "lodash";
import savingThrowModifier from "../calculators/saving-throw-modifier";
import type { AbilityScore, Monster, ThingProficiency } from "../types";
import addSymbolToNumber from "./add-symbol-to-number";

/**
 * Assembles the stat block line for a creature's saving throws
 * @param {Object} monsterStats
 * @returns {String}
 */
export const savingThrowLine = (monsterStats: Monster): string => {
  return map(
    monsterStats.savingThrows,
    (stats: ThingProficiency | undefined, saveType: AbilityScore) => {
      if (stats && stats.proficient) {
        return `${saveType.substr(0, 3)} ${addSymbolToNumber(
          savingThrowModifier(monsterStats, saveType),
        )}`;
      } else {
        return "";
      }
    },
  )
    .filter(Boolean)
    .join(", ");
};

export default savingThrowLine;
