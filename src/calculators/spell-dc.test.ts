import { EMPTY_MONSTER } from "../constants";
import { AbilityScores } from "../types";
import spellDc from "./spell-dc";

test("empty monster", () => {
  expect(spellDc(EMPTY_MONSTER, AbilityScores.Intelligence)).toEqual(5);
  expect(spellDc(EMPTY_MONSTER, AbilityScores.Wisdom)).toEqual(5);
  expect(spellDc(EMPTY_MONSTER, AbilityScores.Charisma)).toEqual(5);
});
