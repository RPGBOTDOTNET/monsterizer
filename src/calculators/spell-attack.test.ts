import { EMPTY_MONSTER } from "../constants";
import { AbilityScores } from "../types";
import spellAttack from "./spell-attack";

test("empty monster", () => {
  expect(spellAttack(EMPTY_MONSTER, AbilityScores.Intelligence)).toEqual(-3);
  expect(spellAttack(EMPTY_MONSTER, AbilityScores.Wisdom)).toEqual(-3);
  expect(spellAttack(EMPTY_MONSTER, AbilityScores.Charisma)).toEqual(-3);
});
