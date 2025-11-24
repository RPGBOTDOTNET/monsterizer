import { mapExpressionToObject } from "./map-expression-to-object";
import { type DiceExpression } from "./types";

const EmptyReturnVal: DiceExpression = {
  count: 0,
  positivity: 1,
  size: 0,
};

test("failure cases", () => {
  expect(() => {
    mapExpressionToObject("");
  }).toThrow();
  expect(() => {
    mapExpressionToObject("foo");
  }).toThrow();
});

test("flat numbers", () => {
  expect(mapExpressionToObject("1")).toEqual({
    ...EmptyReturnVal,
    flatValue: 1,
  });
  expect(mapExpressionToObject("1.5")).toEqual({
    ...EmptyReturnVal,
    flatValue: 1.5,
  });
  expect(mapExpressionToObject("0.1")).toEqual({
    ...EmptyReturnVal,
    flatValue: 0.1,
  });
  expect(mapExpressionToObject("100.0")).toEqual({
    ...EmptyReturnVal,
    flatValue: 100,
  });
  expect(mapExpressionToObject("-2")).toEqual({
    ...EmptyReturnVal,
    flatValue: -2,
  });
});

test("dice rolls", () => {
  expect(mapExpressionToObject("1d1")).toEqual({
    ...EmptyReturnVal,
    count: 1,
    size: 1,
  });
  expect(mapExpressionToObject("5d7")).toEqual({
    ...EmptyReturnVal,
    count: 5,
    size: 7,
  });
  expect(mapExpressionToObject("-3d4")).toEqual({
    ...EmptyReturnVal,
    count: 3,
    positivity: -1,
    size: 4,
  });
  expect(mapExpressionToObject("2d10 slashing")).toEqual({
    ...EmptyReturnVal,
    count: 2,
    positivity: 1,
    size: 10,
  });
});
