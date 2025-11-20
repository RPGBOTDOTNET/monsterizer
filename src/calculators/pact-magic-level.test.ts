import { EMPTY_MONSTER } from "../constants";
import pactMagicLevel from "./pact-magic-level";

test("Empty monster", () => {
  expect(pactMagicLevel(EMPTY_MONSTER)).toEqual(0);
});

// TODO: More tests
