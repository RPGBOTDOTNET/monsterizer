import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import { getMonsterByName } from "../utils";
import hitPoints from "./hit-points";

const baseTestMonster: Monster = {
  ...EMPTY_MONSTER,
  abilityScores: {
    ...EMPTY_MONSTER.abilityScores,
    [AbilityScores.Constitution]: 10,
  },
  hitDice: {
    count: 1,
    modifier: 0,
    size: "d4",
  },
};

test("Empty monster has 0 hp", () => {
  expect(hitPoints(EMPTY_MONSTER)).toEqual(0);
});

test("1d4+0 => 2.5", () => {
  const monster: Monster = {
    ...baseTestMonster,
    hitDice: {
      count: 1,
      modifier: 0,
      size: "d4",
    },
  };
  expect(hitPoints(monster)).toEqual(2.5);
});

test("2d4+0 => 5", () => {
  const monster: Monster = {
    ...baseTestMonster,
    hitDice: {
      count: 2,
      modifier: 0,
      size: "d4",
    },
  };
  expect(hitPoints(monster)).toEqual(5);
});

test("2d4 with 20 Con => 15", () => {
  const monster: Monster = {
    ...baseTestMonster,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Constitution]: 20,
    },
    hitDice: {
      count: 2,
      modifier: 0,
      size: "d4",
    },
  };
  expect(hitPoints(monster)).toEqual(15);
});

test("2d4 with +5 special modifier => 15", () => {
  const monster: Monster = {
    ...baseTestMonster,
    hitDice: {
      count: 2,
      modifier: 5,
      size: "d4",
    },
  };
  expect(hitPoints(monster)).toEqual(15);
});

test("Gnoll", () => {
  const monster = getMonsterByName("gnoll")!;
  expect(monster).not.toBeUndefined();
  expect(hitPoints(monster)).toEqual(22.5);
});

test("Adult Black Dragon", () => {
  const monster = getMonsterByName("adult black dragon")!;
  expect(monster).not.toBeUndefined();
  expect(hitPoints(monster)).toEqual(195.5);
});
