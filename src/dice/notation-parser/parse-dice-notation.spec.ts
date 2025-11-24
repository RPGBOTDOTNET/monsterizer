import parseDiceNotation from "./parce-dice-notation";
import { type DiceExpression } from "./types";

const emptyDiceExpression: DiceExpression = {
  count: 1,
  positivity: 1,
  size: 1,
};

test("failure cases", () => {
  expect(parseDiceNotation("")).toEqual([]);
});

test("flat values", () => {
  expect(parseDiceNotation("1")).toEqual([
    { ...emptyDiceExpression, count: 0, flatValue: 1, size: 0 },
  ]);
  expect(parseDiceNotation("+3")).toEqual([
    { ...emptyDiceExpression, count: 0, flatValue: 3, size: 0 },
  ]);
  expect(parseDiceNotation("-7")).toEqual([
    { ...emptyDiceExpression, count: 0, flatValue: -7, size: 0 },
  ]);
  expect(parseDiceNotation("-7+1")).toEqual([
    { ...emptyDiceExpression, count: 0, flatValue: -7, size: 0 },
    { ...emptyDiceExpression, count: 0, flatValue: 1, size: 0 },
  ]);
});

test("one die", () => {
  expect(parseDiceNotation("1d2")).toEqual([
    { ...emptyDiceExpression, count: 1, size: 2 },
  ]);
  expect(parseDiceNotation("2d6")).toEqual([
    { ...emptyDiceExpression, count: 2, size: 6 },
  ]);
  expect(parseDiceNotation("-1d12")).toEqual([
    { ...emptyDiceExpression, count: 1, positivity: -1, size: 12 },
  ]);
});

test("one die with whitespace", () => {
  expect(parseDiceNotation(" 1d2")).toEqual([
    { ...emptyDiceExpression, count: 1, size: 2 },
  ]);
  expect(parseDiceNotation("2d6 ")).toEqual([
    { ...emptyDiceExpression, count: 2, size: 6 },
  ]);
  expect(parseDiceNotation(" - 1 d 12 ")).toEqual([
    { ...emptyDiceExpression, count: 1, positivity: -1, size: 12 },
  ]);
});

test("multiple dice", () => {
  expect(parseDiceNotation("1d2+2d6")).toEqual([
    { ...emptyDiceExpression, count: 1, size: 2 },
    { ...emptyDiceExpression, count: 2, size: 6 },
  ]);
  expect(parseDiceNotation("2d6-1d12")).toEqual([
    { ...emptyDiceExpression, count: 2, size: 6 },
    { ...emptyDiceExpression, count: 1, positivity: -1, size: 12 },
  ]);
  expect(parseDiceNotation("1d2+2d6-1d12")).toEqual([
    { ...emptyDiceExpression, count: 1, size: 2 },
    { ...emptyDiceExpression, count: 2, size: 6 },
    { ...emptyDiceExpression, count: 1, positivity: -1, size: 12 },
  ]);
});

test("complex cases", () => {
  expect(parseDiceNotation(" 1 d 2 + 5")).toEqual([
    { ...emptyDiceExpression, count: 1, size: 2 },
    { ...emptyDiceExpression, count: 0, flatValue: 5, size: 0 },
  ]);
});
