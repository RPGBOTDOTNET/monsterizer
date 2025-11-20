import { EMPTY_DAMAGE_MODEL, EMPTY_MONSTER } from "../constants";
import {
  DamageAndConditionResponseTypes,
  DamageTypes,
  type DamageModel,
} from "../types";
import { getMonsterByName, monsterStatsToDamageModel } from "../utils";
import damageResponseEffectOnHp from "./damage-response-effect-on-hp";

test("Basic case", () => {
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual(
    1,
  );
});

test("CR 0 Three vulnerabilities", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Vulnerability,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Vulnerability,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(0.5);
});

test("CR 0 Three resistances", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Resistance,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(2);
});

test("CR 0 Three immunities", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Immunity,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(2);
});

test("CR 0 One of each", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(1);
});

test("CR 0 Three of each", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Acid]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Lightning]: DamageAndConditionResponseTypes.Vulnerability,
    [DamageTypes.Necrotic]: DamageAndConditionResponseTypes.Vulnerability,
    [DamageTypes.Poison]: DamageAndConditionResponseTypes.Vulnerability,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(1.5);
});

test("CR 0 Three mixed resistances and immunities", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Resistance,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Resistance,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(1);
});

test("CR 0 Ten immunities", () => {
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
    [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Acid]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Cold]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Fire]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Lightning]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Necrotic]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Poison]: DamageAndConditionResponseTypes.Immunity,
    [DamageTypes.Radiant]: DamageAndConditionResponseTypes.Immunity,
  };
  expect(damageResponseEffectOnHp(EMPTY_MONSTER, damageModel)).toEqual(2);
});

test("Gnoll", () => {
  const monster = getMonsterByName("gnoll")!;
  expect(monster).not.toBeUndefined();
  const damageModel = monsterStatsToDamageModel(monster);
  expect(damageResponseEffectOnHp(monster, damageModel)).toEqual(1);
});

test("Adult Black Dragon", () => {
  const monster = getMonsterByName("adult black dragon")!;
  expect(monster).not.toBeUndefined();
  const damageModel = monsterStatsToDamageModel(monster);
  expect(damageResponseEffectOnHp(monster, damageModel)).toEqual(1);
});

// TODO: Transform these to work across different CRs
