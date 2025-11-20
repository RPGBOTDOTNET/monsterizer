import type { Monster } from "../types";
import castsSpellsBeforeCombat from "./casts-spells-before-combat";

test("returns false when no spellcasting", () => {
  expect(castsSpellsBeforeCombat({} as unknown as Monster)).toEqual(false);
});

test("returns true when a spell has castBeforeCombat flag", () => {
  const monster = {
    spellcasting: [
      {
        spells: {
          1: [
            { name: "shield", castBeforeCombat: true },
            { name: "magic missile" },
          ],
        },
      },
    ],
  } as unknown as Monster;
  expect(castsSpellsBeforeCombat(monster)).toEqual(true);
});
