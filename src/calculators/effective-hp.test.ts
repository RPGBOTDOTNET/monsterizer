import { EMPTY_DAMAGE_MODEL, EMPTY_MONSTER } from "../constants";
import { AbilityScores, type DamageModel, type Monster } from "../types";
import { getMonsterByName, monsterStatsToDamageModel } from "../utils";
import effectiveHP from "./effective-hp";

test("0 hit dice => 0 hp", () => {
  expect(effectiveHP(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual(0);
});

test("1d4 hp with 10 Con => 2.5", () => {
  const monster: Monster = {
    ...EMPTY_MONSTER,
    abilityScores: {
      ...EMPTY_MONSTER.abilityScores,
      [AbilityScores.Constitution]: 10,
    },
    hitDice: {
      count: 1,
      modifier: 0, // This will offset 0 Constitution
      size: "d4",
    },
  };
  const damageModel: DamageModel = {
    ...EMPTY_DAMAGE_MODEL,
  };
  expect(effectiveHP(monster, damageModel)).toEqual(2.5);
});

describe("Real Monsters", () => {
  test("Giant Crocodile", () => {
    const monster = getMonsterByName("giant crocodile")!;
    expect(monster).not.toBeUndefined();
    const damageModel = monsterStatsToDamageModel(monster);
    expect(effectiveHP(monster, damageModel)).toEqual(85.5);
  });

  test("Gnoll", () => {
    const monster = getMonsterByName("gnoll")!;
    expect(monster).not.toBeUndefined();
    const damageModel = monsterStatsToDamageModel(monster);
    expect(effectiveHP(monster, damageModel)).toEqual(22.5);
  });

  test("Adult Black Dragon", () => {
    const monster = getMonsterByName("adult black dragon")!;
    expect(monster).not.toBeUndefined();
    const damageModel = monsterStatsToDamageModel(monster);
    expect(effectiveHP(monster, damageModel)).toEqual(285.5);
  });
});

// TODO: Test with mocked damageResponseEffectOnHp() to verify multiplication
// TODO: Needs considerably more tests
