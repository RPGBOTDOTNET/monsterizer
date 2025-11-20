import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster } from "../types";
import savingThrowsEffectOnAC from "./saving-throws-effect-on-ac";

test("No saving throw proficiencies", () => {
  expect(savingThrowsEffectOnAC(EMPTY_MONSTER)).toEqual(0);
});

test("One saving throw proficiency", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(0);
});

test("Two saving throw proficiencies", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(0);
});

test("Three saving throw proficiencies", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
      [AbilityScores.Constitution]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(2);
});

test("Four saving throw proficiencies", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
      [AbilityScores.Constitution]: {
        proficient: 1,
      },
      [AbilityScores.Intelligence]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(2);
});

test("Five saving throw proficiencies", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
      [AbilityScores.Constitution]: {
        proficient: 1,
      },
      [AbilityScores.Intelligence]: {
        proficient: 1,
      },
      [AbilityScores.Wisdom]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(4);
});

test("Six saving throw proficiencies", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    savingThrows: {
      ...EMPTY_MONSTER.savingThrows,
      [AbilityScores.Strength]: {
        proficient: 1,
      },
      [AbilityScores.Dexterity]: {
        proficient: 1,
      },
      [AbilityScores.Constitution]: {
        proficient: 1,
      },
      [AbilityScores.Intelligence]: {
        proficient: 1,
      },
      [AbilityScores.Wisdom]: {
        proficient: 1,
      },
      [AbilityScores.Charisma]: {
        proficient: 1,
      },
    },
  };
  expect(savingThrowsEffectOnAC(monsterStats)).toEqual(4);
});
