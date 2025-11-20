import { EMPTY_MONSTER } from "../constants";
import spellcastingLevel from "./spellcasting-level";

test("Empty monster", () => {
  expect(spellcastingLevel(EMPTY_MONSTER)).toEqual(0);
});

// TODO: More tests
