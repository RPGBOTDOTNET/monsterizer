import { EMPTY_DAMAGE_MODEL, EMPTY_MONSTER } from "../constants";
import { DamageAndConditionResponseTypes, DamageTypes } from "../types";
import monsterStatsToDamageModel from "./monster-stats-to-damage-model";

test("Empty model", () => {
  expect(monsterStatsToDamageModel(EMPTY_MONSTER)).toEqual({
    ...EMPTY_DAMAGE_MODEL,
  });
});

test("One immunity", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    damageImmunities: [DamageTypes.Acid],
  };
  expect(monsterStatsToDamageModel(monsterStats)).toEqual({
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Acid]: DamageAndConditionResponseTypes.Immunity,
  });
});

test("One resistance", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    damageResistances: [DamageTypes.Cold],
  };
  expect(monsterStatsToDamageModel(monsterStats)).toEqual({
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Resistance,
  });
});

test("One vulnerability", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    damageVulnerabilities: [DamageTypes.Fire],
  };
  expect(monsterStatsToDamageModel(monsterStats)).toEqual({
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Vulnerability,
  });
});

test("One of each", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    damageImmunities: [DamageTypes.Acid],
    damageResistances: [DamageTypes.Cold],
    damageVulnerabilities: [DamageTypes.Fire],
  };
  expect(monsterStatsToDamageModel(monsterStats)).toEqual({
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Acid]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Vulnerability,
  });
});
