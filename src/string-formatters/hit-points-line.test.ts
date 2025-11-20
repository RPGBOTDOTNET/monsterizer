import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import { hitPointsLine } from "./hit-points-line";

test("formats hit points line with modifier", () => {
  const m = {
    ...EMPTY_MONSTER,
    hitDice: { count: 3, size: "d6", modifier: 2 },
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Constitution]: 14,
    },
  } as Monster;
  // con 14 => con mod +2; hpModifier = conMod + modifier = 2 + 2 = 4; addSymbolToNumber(4*3=12) => +12
  expect(hitPointsLine(m)).toContain("3d6+12");
});
