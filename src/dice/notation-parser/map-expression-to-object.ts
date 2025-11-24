import { diceNotationRegex } from "./constants";
import { type DiceExpression } from "./types";

export const mapExpressionToObject = (
  diceExpression: string,
): DiceExpression => {
  const match = diceExpression.match(diceNotationRegex);
  if (match) {
    const [, possiblePlusOrMinus, count, size] = match;
    return {
      count: parseInt(count),
      positivity: possiblePlusOrMinus === "-" ? -1 : 1,
      size: parseInt(size),
    };
  } else {
    const parsedVal = parseFloat(diceExpression);
    if (isNaN(parsedVal))
      throw new Error(`Unable to parse "${diceExpression.trim()}" to a value.`);
    return {
      count: 0,
      flatValue: parsedVal,
      positivity: 1,
      size: 0,
    };
  }
};
