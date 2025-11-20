import { EMPTY_CONDITION_MODEL, EMPTY_MONSTER } from "../constants";
import { Conditions, DamageAndConditionResponseTypes } from "../types";
import monsterStatsToConditionModel from "./monster-stats-to-condition-model";

test("Empty damage model", () => {
  expect(monsterStatsToConditionModel(EMPTY_MONSTER)).toEqual({
    ...EMPTY_CONDITION_MODEL,
  });
});

test("One immunity", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    conditionImmunities: [Conditions.Blinded],
  };
  expect(monsterStatsToConditionModel(monsterStats)).toEqual({
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Blinded]: DamageAndConditionResponseTypes.Immunity,
  });
});

test("One resistance", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    conditionResistances: [Conditions.Deafened],
  };
  expect(monsterStatsToConditionModel(monsterStats)).toEqual({
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Deafened]: DamageAndConditionResponseTypes.Resistance,
  });
});

test("One vulnerability", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    conditionVulnerabilities: [Conditions.Stunned],
  };
  expect(monsterStatsToConditionModel(monsterStats)).toEqual({
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Stunned]: DamageAndConditionResponseTypes.Vulnerability,
  });
});

test("One each", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    conditionImmunities: [Conditions.Blinded],
    conditionResistances: [Conditions.Deafened],
    conditionVulnerabilities: [Conditions.Stunned],
  };
  expect(monsterStatsToConditionModel(monsterStats)).toEqual({
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Blinded]: DamageAndConditionResponseTypes.Immunity,
    [Conditions.Deafened]: DamageAndConditionResponseTypes.Resistance,
    [Conditions.Stunned]: DamageAndConditionResponseTypes.Vulnerability,
  });
});
