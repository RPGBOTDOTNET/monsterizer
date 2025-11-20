import { EMPTY_DAMAGE_MODEL, EMPTY_MONSTER } from "../constants";
import { getMonsterByName, monsterStatsToDamageModel } from "../utils";
import defensiveCRBase from "./defensive-cr-base";
import { effectiveHP } from "./effective-hp";

vi.mock("./effective-hp", () => {
  const mockEffectiveHP = vi.fn();
  return {
    __esModule: true,
    default: mockEffectiveHP,
    effectiveHP: mockEffectiveHP,
  };
});

beforeEach(() => {
  vi.resetAllMocks();
});

test("0 hp throws an error", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 0);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("0");
});

test("1 hp has a base defensive CR of 0", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 1);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("0");
});

test("6.5 hp has a base defensive CR of 0", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 1);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("0");
});

test("10 hp has a base defensive CR of 1/8", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 10);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("1/8");
});

test("85.5 hp has a base defensive CR of 2", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 85.5);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("2");
});

test("100 hp has a base defensive CR of 2", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 100);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("2");
});

test("500 hp has a base defensive CR of 23", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 500);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("23");
});

test("850 hp has a base defensive CR of 30", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 850);
  expect(defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL)).toEqual("30");
});

// TODO: Rework with expanded values
test.skip("851 hp throws an error", () => {
  vi.mocked(effectiveHP).mockImplementationOnce(() => 851);
  expect(() => {
    defensiveCRBase(EMPTY_MONSTER, EMPTY_DAMAGE_MODEL);
  }).toThrow();
});

describe("real monsters", () => {
  test("Giant Crocodile", () => {
    vi.mocked(effectiveHP).mockImplementationOnce(() => 85.5);
    const monster = getMonsterByName("giant crocodile")!;
    expect(monster).not.toBeUndefined();
    const damageModel = monsterStatsToDamageModel(monster);
    expect(defensiveCRBase(monster, damageModel)).toEqual("2");
  });
});
