import crScale from "./cr-scale";

it("Returns the same value with move=0", () => {
  expect(crScale("0", 0)).toEqual("0");
  expect(crScale("1/8", 0)).toEqual("1/8");
  expect(crScale("1", 0)).toEqual("1");
  expect(crScale("10", 0)).toEqual("10");
});

it("Doesn't fall below 0", () => {
  expect(crScale("0", -1)).toEqual("0");
  expect(crScale("0", -2)).toEqual("0");
  expect(crScale("1/8", -2)).toEqual("0");
});

it("Doesn't go above 30", () => {
  expect(crScale("30", 1)).toEqual("30");
});

it("Handles fractional CR", () => {
  expect(crScale("0", 1)).toEqual("1/8");
  expect(crScale("0", 2)).toEqual("1/4");
  expect(crScale("0", 3)).toEqual("1/2");
  expect(crScale("0", 4)).toEqual("1");
});
