import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, Skills, type Monster } from "../types";
import passivePerception from "./passive-perception";

type TestCase = {
  expectation: number;
  model: Monster;
  title: string;
};

// Test models can be few in number because we're mostly just re-testing skillModifier()
const TEST_CASES: TestCase[] = [
  {
    title: "Basic case",
    expectation: 10,
    model: {
      ...EMPTY_MONSTER,
      challenge: "0",
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Wisdom]: 10,
      },
    },
  },
  {
    title: "Proficient with 10 Wis",
    expectation: 12,
    model: {
      ...EMPTY_MONSTER,
      challenge: "0",
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Wisdom]: 10,
      },
      skills: {
        ...EMPTY_MONSTER.skills,
        [Skills.Perception]: {
          proficient: 1,
        },
      },
    },
  },
  {
    title: "Not proficient with 10 Wis",
    expectation: 12,
    model: {
      ...EMPTY_MONSTER,
      challenge: "0",
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,

        [AbilityScores.Wisdom]: 10,
      },
      skills: {
        ...EMPTY_MONSTER.skills,
        [Skills.Perception]: {
          proficient: 1,
        },
      },
    },
  },
];

test.each(TEST_CASES)("%j", ({ model, expectation }) => {
  expect(passivePerception(model)).toEqual(expectation);
});
