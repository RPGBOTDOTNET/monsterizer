import { splitOnPlusMinusLookbehind } from "./constants";
import { mapExpressionToObject } from "./map-expression-to-object";
import { type DiceExpression } from "./types";

export const parseDiceNotation = (inputText: string): DiceExpression[] => {
  const diceExpressionStrings: string[] = inputText
    .split(splitOnPlusMinusLookbehind)
    .map((expression) => expression && expression.replace(/\s/g, "")) // Remove whitespace. parseInt() hates whitespace
    .filter((a) => a);
  splitOnPlusMinusLookbehind.lastIndex = 0; // TODO: Is this necessary?

  return diceExpressionStrings.map(mapExpressionToObject);
};

export default parseDiceNotation;
