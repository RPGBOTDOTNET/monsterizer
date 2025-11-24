import { diceAverage } from "../dice";
import { type DiceExpression } from "./types";

/**
 *
 * @param expressionObj Dice expression output from parseDiceNotation()
 * @param omitFlatValues Default false. If true, will only consider the dice
 * @returns average dice outcome
 */
export const averageDiceOutcome = (
  expressionObj: DiceExpression,
  omitFlatValues: boolean = false,
): number => {
  const flatValToAdd = omitFlatValues ? 0 : expressionObj.flatValue || 0;
  return (
    diceAverage(expressionObj.size) *
      expressionObj.count *
      expressionObj.positivity +
    flatValToAdd
  );
};

export default averageDiceOutcome;
