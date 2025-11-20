import type { LegendaryAction } from "../../types";

type LegendaryActionWithDPA = {
  damagePerAction: number;
} & LegendaryAction;
export const DEFAULT_LEGENDARY_ACTION_CHARGES = 3; // TODO: This needs to vary by monster

export const bestLegendaryActions = (
  actions: Array<LegendaryAction>,
  legendaryActionsCount: number = DEFAULT_LEGENDARY_ACTION_CHARGES,
): Array<LegendaryAction> => {
  const mappedActions: Array<LegendaryActionWithDPA> = actions
    .map((action: LegendaryAction) => {
      return {
        ...action,
        damagePerAction: (action.averageDamage / action.cost) * action.targets,
      };
    })
    // Sort by damagePerAction in descending order
    .sort(
      (a: LegendaryActionWithDPA, b: LegendaryActionWithDPA) =>
        b.damagePerAction - a.damagePerAction,
    );

  const selectedActions: Array<LegendaryActionWithDPA> = [];
  let index = 0;
  let remainingLegendaryActions = legendaryActionsCount;
  // This loop allows us to select the same action repeatedly if the action cost fits
  while (remainingLegendaryActions && index < mappedActions.length) {
    const action = mappedActions[index];
    if (action.cost <= remainingLegendaryActions) {
      selectedActions.push(action);
      remainingLegendaryActions -= action.cost;
    } else {
      index++;
    }
  }
  return selectedActions;
};

export default bestLegendaryActions;
