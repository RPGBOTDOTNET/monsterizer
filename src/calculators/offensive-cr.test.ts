import { EMPTY_MONSTER } from "../constants";
import type { Monster } from "../types";
import { getMonsterByName } from "../utils";
import offensiveCR from "./offensive-cr";

it("Empty monster", () => {
  expect(offensiveCR(EMPTY_MONSTER)).toEqual("0");
});

const TEST_MODELS = [
  ["Gnoll", "1/2", getMonsterByName("Gnoll")],
  ["Troll", "5", getMonsterByName("Troll")],
  ["adult black dragon", "15", getMonsterByName("adult black dragon")],
];

test.each(TEST_MODELS)(
  "%s has Defensive CR of %i",
  (_title, expectation, monster) => {
    expect(monster).toBeDefined();
    expect(offensiveCR(monster as Monster)).toEqual(expectation);
  },
);
