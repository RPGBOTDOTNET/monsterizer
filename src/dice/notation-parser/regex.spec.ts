import { diceNotationRegex, splitOnPlusMinusLookbehind } from "./constants";

describe("diceNotationRegex", () => {
  test("empty string", () => {
    expect("".match(diceNotationRegex)).toBeNull();
  });

  test("plus sign", () => {
    expect("+".match(diceNotationRegex)).toBeNull();
  });

  test("minus sign", () => {
    expect("-".match(diceNotationRegex)).toBeNull();
  });

  test("-5", () => {
    expect("-5".match(diceNotationRegex)).toBeNull();
  });

  test("1d1", () => {
    expect("1d1".match(diceNotationRegex)?.toString()).toEqual(
      ["1d1", "", "1", "1", ""].toString(),
    );
  });

  test("+1d1", () => {
    expect("+1d1".match(diceNotationRegex)?.toString()).toEqual(
      ["+1d1", "+", "1", "1", ""].toString(),
    );
  });

  test("-3d2", () => {
    expect("-3d2".match(diceNotationRegex)?.toString()).toEqual(
      ["-3d2", "-", "3", "2", ""].toString(),
    );
  });

  test("1da", () => {
    expect("1da".match(diceNotationRegex)).toBeNull();
  });

  test("*1d1", () => {
    expect("*1d1".match(diceNotationRegex)).toBeNull();
  });

  test("++1d1", () => {
    expect("++1d1".match(diceNotationRegex)).toBeNull();
  });

  test("5", () => {
    expect("5".match(diceNotationRegex)).toBeNull();
  });
});

test("splitOnPlusMinusLookbehind", () => {
  expect("".split(splitOnPlusMinusLookbehind)).toEqual([""]);
  expect("+".split(splitOnPlusMinusLookbehind)).toEqual(["+"]);
  expect("-".split(splitOnPlusMinusLookbehind)).toEqual(["-"]);
  expect("-+".split(splitOnPlusMinusLookbehind)).toEqual(["-", "+"]);
  expect("+foo".split(splitOnPlusMinusLookbehind)).toEqual(["+foo"]);
  expect("-foo".split(splitOnPlusMinusLookbehind)).toEqual(["-foo"]);
  expect("+foo+bar".split(splitOnPlusMinusLookbehind)).toEqual([
    "+foo",
    "+bar",
  ]);
  expect("-foo+bar".split(splitOnPlusMinusLookbehind)).toEqual([
    "-foo",
    "+bar",
  ]);
  expect("  -foo+bar".split(splitOnPlusMinusLookbehind)).toEqual([
    "  ",
    "-foo",
    "+bar",
  ]);
  expect("  -foo  +bar".split(splitOnPlusMinusLookbehind)).toEqual([
    "  ",
    "-foo  ",
    "+bar",
  ]);
});
