import type { LegendaryAction } from "../../types";
import bestLegendaryActions from "./best-legendary-actions";

/**
 * The average damage dealt per round by a creature's most damaging legendary actions
 * @param actions
 * @returns {number}
 */
export const damageFromLegendaryActions = (
  actions: Array<LegendaryAction>,
  legendaryActionsCount?: number,
): number => {
  if (!actions || !actions.length) return 0;
  const selectedActions = bestLegendaryActions(actions, legendaryActionsCount);
  return selectedActions.reduce((prev: number, current: LegendaryAction) => {
    return prev + current.averageDamage * current.targets;
  }, 0);
};

export default damageFromLegendaryActions;
