import abilityModifier from "./ability-modifier";

const EXAMPLE_PASS_CASES = [
  [0, -5],
  [10, 0],
  [11, 0],
  [15, +2],
  [20, +5],
];

test.each(EXAMPLE_PASS_CASES)(
  "Score if %i yields modifer of %i",
  (score, expected) => {
    expect(abilityModifier(score)).toEqual(expected);
  },
);
