import type { LairAction } from "../../types";
import { damageFromLairActions } from "./damage-from-lair-actions";

test("returns 0 when no lair actions", () => {
  expect(damageFromLairActions([])).toEqual(0);
});

test("picks most damaging lair action", () => {
  const actions = [
    { name: "weak", averageDamage: 3, targets: 1 },
    { name: "big", averageDamage: 10, targets: 2 },
  ] as LairAction[];
  // big: 10*2 = 20 should be chosen
  expect(damageFromLairActions(actions)).toEqual(20);
});
