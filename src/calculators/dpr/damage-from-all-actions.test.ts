import type { Monster } from "../../types";
import damageFromAllActions from "./damage-from-all-actions";

test("returns 0 for monster with no actions/lair/legendary", () => {
  const monster = {
    actions: [],
    bonusActions: [],
    reactions: [],
    lairActions: [],
    legendaryActions: [],
  } as unknown as Monster;
  expect(damageFromAllActions(monster)).toEqual(0);
});
