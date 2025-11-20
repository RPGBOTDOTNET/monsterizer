import type { LairAction } from "../../types";

export const bestLairAction = (
  actions: Array<LairAction>,
): LairAction | undefined => {
  return actions.sort(
    (a, b) => b.averageDamage * b.targets - a.averageDamage * a.targets,
  )[0];
};

export default bestLairAction;
