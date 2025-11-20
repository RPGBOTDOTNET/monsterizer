import { TURNS_TO_AVERAGE } from "../../constants";
import { type Action } from "../../types";

export const bestActions = (actions: Array<Action>): Array<Action> => {
  const sortedActions: Array<Action> = actions
    // Sort by damagePerAction in descending order
    .sort(
      (a: Action, b: Action) =>
        b.averageDamage * b.targets - a.averageDamage * a.targets,
    );

  const selectedActions: Array<Action> = [];
  let index = 0;
  // This loop allows us to select the same action repeatedly if the action is reusable
  while (
    index < sortedActions.length &&
    selectedActions.length < TURNS_TO_AVERAGE
  ) {
    const action = sortedActions[index];
    for (let uses = 0; uses < action.reusable; uses++) {
      // Intentionally redundant with boolean for the while()
      if (selectedActions.length < TURNS_TO_AVERAGE) {
        selectedActions.push(action);
      }
    }
    index++;
  }
  return selectedActions;
};

export default bestActions;
