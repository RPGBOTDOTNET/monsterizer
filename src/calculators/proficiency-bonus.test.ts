import { EMPTY_MONSTER } from "../constants";
import proficiencyBonus from "./proficiency-bonus";

// Test models can be few in number because we're mostly just referencing a constant
const TEST_MODELS = [
  {
    title: "CR 1/2",
    expectation: 2,
    model: {
      ...EMPTY_MONSTER,
      challenge: "1/2",
    },
  },
  {
    title: "CR 0",
    expectation: 2,
    model: {
      ...EMPTY_MONSTER,
      challenge: "0",
    },
  },
  {
    title: "CR 10",
    expectation: 4,
    model: {
      ...EMPTY_MONSTER,
      challenge: "10",
    },
  },
  {
    title: "CR 20",
    expectation: 6,
    model: {
      ...EMPTY_MONSTER,
      challenge: "20",
    },
  },
];

test.each(TEST_MODELS)("%j", ({ model, expectation }) => {
  expect(proficiencyBonus(model)).toEqual(expectation);
});
