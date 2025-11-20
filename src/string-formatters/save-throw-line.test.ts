import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import savingThrowLine from "./saving-throw-line";

test("no proficiencies", () => {
  expect(savingThrowLine(EMPTY_MONSTER)).toEqual("");
});

test("one proficiency", () => {
  const monster: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: { proficient: 1 },
    },
  };
  expect(savingThrowLine(monster)).toEqual("Str -3");
});

test("three proficiencies", () => {
  const monster: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: { proficient: 1 },
      [AbilityScores.Constitution]: { proficient: 1 },
      [AbilityScores.Wisdom]: { proficient: 1 },
    },
  };
  expect(savingThrowLine(monster)).toEqual("Str -3, Con -3, Wis -3");
});
