import { formatStatblockParagraph } from "./format-statblock-paragraph";

describe("formatStatblockParagraph", () => {
  it("returns an empty string for empty inputs", () => {
    expect(formatStatblockParagraph(undefined, undefined)).toEqual("");
    expect(formatStatblockParagraph(undefined, "")).toEqual("");
    expect(formatStatblockParagraph("", "")).toEqual("");
    expect(formatStatblockParagraph("1", "")).toEqual("");
    expect(formatStatblockParagraph("", "1")).toEqual("");
  });

  it("returns basic results", () => {
    expect(formatStatblockParagraph("foo", "bar")).toEqual("***foo***. bar");
  });
});
