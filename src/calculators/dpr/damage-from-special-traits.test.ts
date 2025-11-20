import type { SpecialTrait } from "../../types";
import { damageFromSpecialTraits } from "./damage-from-special-traits";

test("returns 0 for empty traits", () => {
  expect(damageFromSpecialTraits([])).toEqual(0);
});

test("calculates damage per round plus averaged one-off damage", () => {
  const traits = [
    { name: "A", effect: { damagePerRound: 4 } },
    { name: "B", effect: { damageOnce: 9 } },
  ] as SpecialTrait[];
  // TURNS_TO_AVERAGE is 3, so result = 4 + 9/3 = 7
  expect(damageFromSpecialTraits(traits)).toEqual(7);
});
