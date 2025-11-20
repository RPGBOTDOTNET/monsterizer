import { EMPTY_LAIR_ACTION } from "../../constants";
import type { LairAction } from "../../types";
import bestLairAction from "./best-lair-action";

test("Empty actions", () => {
  expect(bestLairAction([])).toBeUndefined();
});

test("One simple action", () => {
  const actions: Array<LairAction> = [
    {
      ...EMPTY_LAIR_ACTION,
      averageDamage: 1,
    },
  ];
  expect(bestLairAction(actions)).toEqual(actions[0]);
});

test("Two simple actions with different damage", () => {
  const action1: LairAction = {
    ...EMPTY_LAIR_ACTION,
    averageDamage: 1,
  };
  const action2: LairAction = {
    ...EMPTY_LAIR_ACTION,
    averageDamage: 2,
  };
  const actions: Array<LairAction> = [action1, action2];
  expect(bestLairAction(actions)).toEqual(action2);
});

test("Two actions, but one hits two targets for more total damage", () => {
  const action1: LairAction = {
    ...EMPTY_LAIR_ACTION,
    averageDamage: 15,
  };
  const action2: LairAction = {
    ...EMPTY_LAIR_ACTION,
    averageDamage: 10,
    targets: 2,
  };
  const actions: Array<LairAction> = [action1, action2];
  expect(bestLairAction(actions)).toEqual(action2);
});
