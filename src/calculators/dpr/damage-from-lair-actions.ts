import type { LairAction } from "../../types";
import bestLairAction from "./best-lair-action";

/**
 * The average damage dealt per round by a creature's most damaging lair actions
 * @param actions
 * @returns {number}
 */
export const damageFromLairActions = (actions: Array<LairAction>): number => {
  if (!actions.length) return 0;
  const mostDamagingAction = bestLairAction(actions);
  return mostDamagingAction
    ? mostDamagingAction.averageDamage * mostDamagingAction.targets
    : 0;
};

export default damageFromLairActions;
