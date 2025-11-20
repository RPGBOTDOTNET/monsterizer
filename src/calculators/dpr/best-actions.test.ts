import { EMPTY_ACTION } from "../../constants";
import { type Action } from "../../types";
import bestActions from "./best-actions";

test("Empty actions", () => {
  const actions: Array<Action> = [];
  expect(bestActions(actions)).toEqual([]);
});

test("One simple action", () => {
  const actions: Array<Action> = [
    {
      ...EMPTY_ACTION,
      averageDamage: 1,
    },
  ];
  expect(bestActions(actions)).toEqual([actions[0], actions[0], actions[0]]);
});

test("One action usable once", () => {
  const actions: Array<Action> = [
    {
      ...EMPTY_ACTION,
      averageDamage: 1,
      reusable: 1,
    },
  ];
  expect(bestActions(actions)).toEqual([actions[0]]);
});

test("Two simple actions with different damage", () => {
  const action1: Action = {
    ...EMPTY_ACTION,
    averageDamage: 1,
  };
  const action2: Action = {
    ...EMPTY_ACTION,
    averageDamage: 2,
  };
  const actions: Array<Action> = [action1, action2];
  expect(bestActions(actions)).toEqual([action2, action2, action2]);
});

test("Two simple actions with different damage but the better one is unly resuable once", () => {
  const action1: Action = {
    ...EMPTY_ACTION,
    averageDamage: 1,
  };
  const action2: Action = {
    ...EMPTY_ACTION,
    averageDamage: 2,
    reusable: 1,
  };
  const actions: Array<Action> = [action1, action2];
  expect(bestActions(actions)).toEqual([action2, action1, action1]);
});

test("Two actions, but one hits two targets for more total damage", () => {
  const action1: Action = {
    ...EMPTY_ACTION,
    averageDamage: 15,
  };
  const action2: Action = {
    ...EMPTY_ACTION,
    averageDamage: 10,
    targets: 2,
  };
  const actions: Array<Action> = [action1, action2];
  expect(bestActions(actions)).toEqual([action2, action2, action2]);
});
