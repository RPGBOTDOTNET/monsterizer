import type { Action } from "../../types";
import damageFromActions from "./damage-from-actions";

test("calculates average from best actions with single-use actions", () => {
  const actions = [
    { averageDamage: 6, targets: 1, reusable: 1 },
    { averageDamage: 3, targets: 1, reusable: 1 },
    { averageDamage: 1, targets: 1, reusable: 1 },
  ] as Action[];
  // bestActions will select the 3 uses (6,3,1) => sum = 10, divided by TURNS_TO_AVERAGE(3) => 10/3
  expect(damageFromActions(actions)).toBeCloseTo(10 / 3);
});

test("calculates average from best actions with reusable actions", () => {
  const actions = [
    { averageDamage: 6, targets: 1, reusable: 1 },
    { averageDamage: 3, targets: 1, reusable: 3 },
    { averageDamage: 1, targets: 1, reusable: 1 },
  ] as Action[];
  // bestActions will select the 3 uses (6,3,3) => sum = 12, divided by TURNS_TO_AVERAGE(3) => 12/3
  expect(damageFromActions(actions)).toEqual(4);
});

test("calculates average from best actions with multitarget actions", () => {
  const actions = [
    { averageDamage: 6, targets: 1, reusable: 1 },
    { averageDamage: 3, targets: 2, reusable: 1 },
    { averageDamage: 1, targets: 1, reusable: 1 },
  ] as Action[];
  // bestActions will select the 3 uses (6,3*2,1) => sum = 13, divided by TURNS_TO_AVERAGE(3) => 13/3
  expect(damageFromActions(actions)).toBeCloseTo(13 / 3);
});
