import addSymbolToNumber from "./add-symbol-to-number";

test("0", () => {
  expect(addSymbolToNumber(0)).toEqual("+0");
});

test("negative", () => {
  expect(addSymbolToNumber(-5)).toEqual("-5");
});

test("positive", () => {
  expect(addSymbolToNumber(5)).toEqual("+5");
});
