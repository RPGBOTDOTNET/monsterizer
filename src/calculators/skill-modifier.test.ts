import { EMPTY_MONSTER } from "../constants";
import { AbilityScores, type Monster, Skills } from "../types";
import skillModifier from "./skill-modifier";

test("Empty monster with 0 ability scores", () => {
  expect(skillModifier(EMPTY_MONSTER, Skills.Acrobatics)).toEqual(-5);
});

test("Empty monster with 10 in relevant score", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Dexterity]: 10,
    },
  };
  expect(skillModifier(monsterStats, Skills.Acrobatics)).toEqual(0);
});

test("Empty monster with 10 in relevant score and proficiency", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Dexterity]: 10,
    },
    skills: {
      ...EMPTY_MONSTER.skills,
      [Skills.Acrobatics]: {
        proficient: 1,
      },
    },
  };
  expect(skillModifier(monsterStats, Skills.Acrobatics)).toEqual(2);
});

test("Empty monster with 10 in relevant score and proficiency in a different skill", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Dexterity]: 10,
    },
    skills: {
      ...EMPTY_MONSTER.skills,
      [Skills.Perception]: {
        proficient: 1,
      },
    },
  };
  expect(skillModifier(monsterStats, Skills.Acrobatics)).toEqual(0);
});

test("Empty monster with 10 in relevant score and no entry for skill", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Dexterity]: 10,
    },
    skills: {},
  };
  expect(skillModifier(monsterStats, Skills.Acrobatics)).toEqual(0);
});
