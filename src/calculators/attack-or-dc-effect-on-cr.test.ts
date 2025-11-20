import { EMPTY_MONSTER } from "../constants";
import type { Monster } from "../types";
import attackOrDcEffectOnCR from "./attack-or-dc-effect-on-cr";
import offensiveCRBase from "./offensive-cr-base";

vi.mock("./offensive-cr-base", () => {
  const offensiveCRBase = vi.fn();
  return {
    __esModule: true,
    default: offensiveCRBase,
    offensiveCRBase: offensiveCRBase,
  };
});

describe("uses attack bonus", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  test("Attack undefined CR 0 should use recommended attack bonus by default", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "0");
    const monsterStats: Monster = {
      ...EMPTY_MONSTER,
      attack: undefined,
      usesAttackBonus: true,
    };
    expect(attackOrDcEffectOnCR(monsterStats)).toEqual(0);
  });

  test("Attack '' (an empty string) CR 0 should use recommended attack bonus by default", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "0");
    const monsterStats = {
      ...EMPTY_MONSTER,
      attack: "",
      usesAttackBonus: true,
    };
    // Do some typecasting nonsense to trick Typescript. Users entering an empty value
    // into an input field can result in an empty string as the value. We need to treat
    // that value like `undefined` to avoid it being treated like `0`.
    expect(attackOrDcEffectOnCR(monsterStats as unknown as Monster)).toEqual(0);
  });

  test("Attack 0 CR 0", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "0");
    const monsterStats: Monster = {
      ...EMPTY_MONSTER,
      attack: 0,
      usesAttackBonus: true,
    };
    expect(attackOrDcEffectOnCR(monsterStats)).toEqual(-2);
  });

  test("Attack 1 CR 10", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "10");
    const monsterStats: Monster = {
      ...EMPTY_MONSTER,
      attack: 1,
      challenge: "10",
      usesAttackBonus: true,
    };
    expect(attackOrDcEffectOnCR(monsterStats)).toEqual(-3);
  });

  test("Attack 11 CR 14", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "14");
    const monsterStats: Monster = {
      ...EMPTY_MONSTER,
      attack: 11,
      challenge: "14",
      usesAttackBonus: true,
    };
    expect(attackOrDcEffectOnCR(monsterStats)).toEqual(1);
  });
});

describe("uses DC", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("DC undefined CR 0 should use recommended DC by default", () => {
    vi.mocked(offensiveCRBase).mockImplementationOnce(() => "0");
    const monsterStats: Monster = {
      ...EMPTY_MONSTER,
      saveDc: undefined,
      usesAttackBonus: false,
    };
    expect(attackOrDcEffectOnCR(monsterStats)).toEqual(0);
  });

  // TODO: More testing here
});
