import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, Skills, type Monster } from "../types";
import sensesLine from "./senses-line";

test("includes senses and passive perception", () => {
  const m = {
    ...EMPTY_MONSTER,
    senses: "blindsight 30 ft.",
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Wisdom]: 10,
    },
    skills: { ...EMPTY_MONSTER.skills, [Skills.Perception]: { proficient: 0 } },
  } as Monster;
  expect(sensesLine(m)).toContain("blindsight 30 ft.");
  expect(sensesLine(m)).toContain("Passive Perception");
});
