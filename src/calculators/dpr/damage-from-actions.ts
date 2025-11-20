import { TURNS_TO_AVERAGE } from "../../constants";
import type { Action } from "../../types";
import { bestActions } from "./best-actions";

/**
 * The average damage dealt per round by a creature's most damaging actions, bonus actions, or reactions,
 * determined by average their three most-damaging actions over the course of
 * three turns.
 * @param actions
 * @returns {number}
 */
export const damageFromActions = (actions: Array<Action>): number => {
  const selectedActions = bestActions(actions);
  return (
    selectedActions.reduce((prev: number, current: Action) => {
      return prev + current.averageDamage * current.targets;
    }, 0) / TURNS_TO_AVERAGE
  );
};

export default damageFromActions;
