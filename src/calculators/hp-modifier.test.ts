import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import { getMonsterByName } from "../utils";
import hpModifier from "./hp-modifier";

test("Empty monster model", () => {
  expect(hpModifier(EMPTY_MONSTER)).toEqual(-5);
});

const TEST_MODELS = [
  {
    title: "0 Hit Dice, 20 Con",
    expectation: 5,
    model: {
      ...EMPTY_MONSTER,
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Constitution]: 20,
      },
      hitDice: {
        count: 0,
        modifier: 0,
        size: "d4",
      },
    },
  },
  {
    title: "1 Hit Die, 12 Con",
    expectation: 1,
    model: {
      ...EMPTY_MONSTER,
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Constitution]: 12,
      },
      hitDice: {
        count: 1,
        modifier: 0,
        size: "d4",
      },
    },
  },
  {
    title: "5 Hit Dice, 12 Con",
    expectation: 1,
    model: {
      ...EMPTY_MONSTER,
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Constitution]: 12,
      },
      hitDice: {
        count: 5,
        modifier: 0,
        size: "d4",
      },
    },
  },
  {
    title: "5 Hit Dice, 12 Con, +1 additional modifier",
    expectation: 2,
    model: {
      ...EMPTY_MONSTER,
      abilityScores: {
        ...EMPTY_MONSTER.abilityScores,
        [AbilityScores.Constitution]: 12,
      },
      hitDice: {
        count: 5,
        modifier: 1,
        size: "d4",
      },
    },
  },
];

test.each(TEST_MODELS)("%j", ({ model, expectation }) => {
  expect(hpModifier(model as Monster)).toEqual(expectation);
});

test("Gnoll", () => {
  const monster = getMonsterByName("gnoll")!;
  expect(monster).not.toBeUndefined();
  expect(hpModifier(monster)).toEqual(0);
});

test("Adult Black Dragon", () => {
  const monster = getMonsterByName("adult black dragon")!;
  expect(monster).not.toBeUndefined();
  expect(hpModifier(monster)).toEqual(5);
});
