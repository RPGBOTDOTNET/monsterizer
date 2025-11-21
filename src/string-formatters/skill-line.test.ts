import { EMPTY_MONSTER } from "../constants";
import { type Monster, Skills } from "../types";
import skillLine from "./skill-line";

test("No skills", () => {
  expect(skillLine(EMPTY_MONSTER)).toEqual("");
});

test("One skill", () => {
  const monster: Monster = {
    ...EMPTY_MONSTER,
    skills: {
      ...EMPTY_MONSTER.skills,
      [Skills.Deception]: { proficient: 1 },
    },
  };
  expect(skillLine(monster)).toEqual("Deception -3");
});

test("Three skills", () => {
  const monster: Monster = {
    ...EMPTY_MONSTER,
    skills: {
      ...EMPTY_MONSTER.skills,
      [Skills.Deception]: { proficient: 1 },
      [Skills.Insight]: { proficient: 1 },
      [Skills.Perception]: { proficient: 1 },
    },
  };
  expect(skillLine(monster)).toEqual("Deception -3, Insight -3, Perception -3");
});
