import { EMPTY_CONDITION_MODEL, EMPTY_MONSTER } from "../constants";
import {
  type ConditionModel,
  Conditions,
  DamageAndConditionResponseTypes,
} from "../types";
import conditionModelToMonsterStats from "./condition-model-to-monster-stats";

test("Empty model", () => {
  expect(
    conditionModelToMonsterStats(EMPTY_CONDITION_MODEL, EMPTY_MONSTER),
  ).toEqual(EMPTY_MONSTER);
});

test("One immunity", () => {
  const conditionModel: ConditionModel = {
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Blinded]: DamageAndConditionResponseTypes.Immunity,
  };
  expect(conditionModelToMonsterStats(conditionModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    conditionImmunities: [Conditions.Blinded],
  });
});

test("One resistance", () => {
  const conditionModel: ConditionModel = {
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Charmed]: DamageAndConditionResponseTypes.Resistance,
  };
  expect(conditionModelToMonsterStats(conditionModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    conditionResistances: [Conditions.Charmed],
  });
});

test("One vulnerability", () => {
  const conditionModel: ConditionModel = {
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Paralyzed]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(conditionModelToMonsterStats(conditionModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    conditionVulnerabilities: [Conditions.Paralyzed],
  });
});

test("One of each", () => {
  const conditionModel: ConditionModel = {
    ...EMPTY_CONDITION_MODEL,
    [Conditions.Blinded]: DamageAndConditionResponseTypes.Immunity,
    [Conditions.Charmed]: DamageAndConditionResponseTypes.Resistance,
    [Conditions.Paralyzed]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(conditionModelToMonsterStats(conditionModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    conditionImmunities: [Conditions.Blinded],
    conditionResistances: [Conditions.Charmed],
    conditionVulnerabilities: [Conditions.Paralyzed],
  });
});

test("Custom text entries for each", () => {
  const conditionModel: ConditionModel = {
    ...EMPTY_CONDITION_MODEL,
    immunityText: "1",
    resistanceText: "2",
    vulnerabilityText: "3",
  };
  expect(conditionModelToMonsterStats(conditionModel, EMPTY_MONSTER)).toEqual({
    ...EMPTY_MONSTER,
    conditionImmunities: ["1"],
    conditionResistances: ["2"],
    conditionVulnerabilities: ["3"],
  });
});
