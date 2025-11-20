import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import savingThrowModifier from "./saving-throw-modifier";

test("0 in ability score and no proficiency", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 0,
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(-5);
});

test("10 in ability score and no proficiency", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 10,
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(0);
});

test("10 in ability score and proficient", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 10,
    },
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(2);
});

test("12 in ability score and proficient", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 12,
    },
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(3);
});

test("12 in ability score and proficient with additional bonus", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 12,
    },
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        additionalBonus: 2,
        proficient: 1,
      },
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(5);
});

test("12 in ability score and not proficient but with additional bonus", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 12,
    },
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        additionalBonus: 2,
        proficient: 0,
      },
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(3);
});

test("12 in ability score and proficient in different save", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Strength]: 12,
    },
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowModifier(monsterStats, AbilityScores.Strength)).toEqual(1);
});
