import {
  EMPTY_CONDITION_MODEL,
  EMPTY_DAMAGE_MODEL,
  EMPTY_MONSTER,
} from "../constants";
import { AbilityScores, type Monster } from "../types";
import { getMonsterByName, monsterStatsToDamageModel } from "../utils";
import monsterStatsToConditionModel from "../utils/monster-stats-to-condition-model";
import defensiveCR from "./defensive-cr";

test("Mostly empty monster", () => {
  const monster: Monster = {
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
  expect(
    defensiveCR(monster, EMPTY_CONDITION_MODEL, EMPTY_DAMAGE_MODEL),
  ).toEqual("0");
});

const TEST_MODELS = [
  ["Gnoll", "1/4", getMonsterByName("Gnoll")],
  ["Troll", "4", getMonsterByName("Troll")],
  ["adult black dragon", "16", getMonsterByName("adult black dragon")],
];

test.each(TEST_MODELS)(
  "%s has Defensive CR of %i",
  (_title, expectation, monster) => {
    expect(monster).toBeDefined();
    const conditionModel = monsterStatsToConditionModel(monster as Monster);
    const damageModel = monsterStatsToDamageModel(monster as Monster);
    expect(
      defensiveCR(monster as Monster, conditionModel, damageModel),
    ).toEqual(expectation);
  },
);
