import removeKeyFromTree from "./remove-key-from-tree";

const testKey = "testKey";

describe("removeKeyFromTree()", () => {
  it("handles a string", () => {
    const newVal = removeKeyFromTree("hello", testKey);
    expect(newVal).toEqual("hello");
  });

  it("handles an empty object", () => {
    const testObj = {};
    const newVal = removeKeyFromTree(testObj, testKey);
    expect(newVal).toEqual(testObj);
  });

  it("handles an object with one unrelated key", () => {
    const testObj = { foo: 1 };
    const newVal = removeKeyFromTree(testObj, testKey);
    expect(newVal).toEqual(testObj);
  });

  it("handles an object with one only the test key", () => {
    const newVal = removeKeyFromTree({ [testKey]: 1 }, testKey);
    expect(newVal).toEqual({});
  });

  it("handles an object with multiple keys", () => {
    const newVal = removeKeyFromTree({ [testKey]: 1, foo: 2 }, testKey);
    expect(newVal).toEqual({ foo: 2 });
  });

  it("handles key with undefined value", () => {
    const newVal = removeKeyFromTree({ [testKey]: undefined }, testKey);
    expect(newVal).toEqual({ [testKey]: undefined });
  });

  it("handles nested object", () => {
    const newVal = removeKeyFromTree(
      { [testKey]: 1, foo: 2, bar: { [testKey]: 3 } },
      testKey,
    );
    expect(newVal).toEqual({ foo: 2, bar: {} });
  });
});
