import mapStringArrayForDropdown from "./map-string-array-for-dropdown";

test("Empty string", () => {
  expect(() => {
    mapStringArrayForDropdown("");
  }).toThrow("Can't map an empty string");
});

test("Non-empty string", () => {
  const testText = "Test Text";
  expect(mapStringArrayForDropdown(testText)).toEqual({
    label: testText,
    value: testText,
  });
});
