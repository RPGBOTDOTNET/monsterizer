import { EMPTY_DAMAGE_MODEL, EMPTY_MONSTER } from "../constants";
import {
  DamageAndConditionResponseTypes,
  DamageTypes,
  type DamageModel,
} from "../types";
import damageModelToMonsterStats from "./damage-model-to-monster-stats";

test("Empty model", () => {
  expect(damageModelToMonsterStats(EMPTY_DAMAGE_MODEL, EMPTY_MONSTER)).toEqual(
    EMPTY_MONSTER,
  );
});

test("One immunity", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Immunity,
  };
  expect(damageModelToMonsterStats(damageModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    damageImmunities: [DamageTypes.Fire],
  });
});

test("One resistance", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Resistance,
  };
  expect(damageModelToMonsterStats(damageModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    damageResistances: [DamageTypes.Cold],
  });
});

test("One vulnerability", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Psychic]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(damageModelToMonsterStats(damageModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    damageVulnerabilities: [DamageTypes.Psychic],
  });
});

test("One of each", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Psychic]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(damageModelToMonsterStats(damageModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    damageImmunities: [DamageTypes.Cold],
    damageResistances: [DamageTypes.Fire],
    damageVulnerabilities: [DamageTypes.Psychic],
  });
});

test("Custom text entries for each", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    immunityText: "1",
    resistanceText: "2",
    vulnerabilityText: "3",
  };
  expect(damageModelToMonsterStats(damageModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    damageImmunities: ["1"],
    damageResistances: ["2"],
    damageVulnerabilities: ["3"],
  });
});
