import { EMPTY_MONSTER } from "../constants";
import type { Monster } from "../types";
import effectiveAttack from "./effective-attack";

test("Empty monster", () => {
  expect(effectiveAttack(EMPTY_MONSTER)).toEqual(3);
});

test("Attack undefined uses default for CR", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    attack: undefined,
  };
  expect(effectiveAttack(monsterStats)).toEqual(3);
});

test("Attack null uses default for CR", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    attack: null,
  };
  // Do some typecasting nonsense to trick Typescript. Users entering an empty value4
  // into an input field can result in an empty string as the value. We need to treat
  // that value like `undefined` to avoid it being treated like `0`.
  expect(effectiveAttack(monsterStats as unknown as Monster)).toEqual(3);
});

test("Attack an empty string uses default for CR", () => {
  const monsterStats = {
    ...EMPTY_MONSTER,
    attack: "",
  };
  // Do some typecasting nonsense to trick Typescript. Users entering an empty value4
  // into an input field can result in an empty string as the value. We need to treat
  // that value like `undefined` to avoid it being treated like `0`.
  expect(effectiveAttack(monsterStats as unknown as Monster)).toEqual(3);
});

test("Attack 0", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    attack: 0,
  };
  expect(effectiveAttack(monsterStats)).toEqual(0);
});

test("CR 1", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    challenge: "1",
  };
  expect(effectiveAttack(monsterStats)).toEqual(3);
});

test("CR 10 but hard-coded attack bonus", () => {
  const monsterStats: Monster = {
    ...EMPTY_MONSTER,
    attack: 1,
    challenge: "10",
  };
  expect(effectiveAttack(monsterStats)).toEqual(1);
});
