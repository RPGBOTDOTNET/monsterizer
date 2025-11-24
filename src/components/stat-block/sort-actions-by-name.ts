import type { Action, LairAction, LegendaryAction } from "../../types";

export const sortActionsByName = (
  actionA: Action | LairAction | LegendaryAction,
  actionB: Action | LairAction | LegendaryAction,
) => {
  if (actionA.name === "Multiattack") {
    return -1;
  } else if (actionB.name === "Multiattack") {
    return 1;
  }
  return actionA.name.localeCompare(actionB.name);
};
