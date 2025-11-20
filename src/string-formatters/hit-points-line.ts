import { hpModifier } from "../calculators";
import { type Monster } from "../types";
import addSymbolToNumber from "./add-symbol-to-number";

export const hitPointsLine = (monster: Monster): string => {
  return (
    Math.floor(monster.hitDice.count || 0) +
    (monster.hitDice.size || "d?") +
    addSymbolToNumber(hpModifier(monster) * monster.hitDice.count)
  );
};
