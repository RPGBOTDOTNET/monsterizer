import type { SpecialTrait } from "../types";
import specialTraitsToMarkdown from "./special-traits-to-markdown";

vi.mock("./functions", () => {
  const formatStatblockParagraph = vi
    .fn()
    .mockImplementation((name: string | undefined): string => name as string);
  return {
    __esModule: true,
    formatStatblockParagraph: formatStatblockParagraph,
  };
});

describe("specialTraitsToMarkdown", () => {
  it("handles undefined input", () => {
    expect(specialTraitsToMarkdown(undefined)).toEqual("");
  });

  it("handles empty array", () => {
    expect(specialTraitsToMarkdown([])).toEqual("");
  });

  it("handles array of traits hidden from stat block", () => {
    const testData: SpecialTrait[] = [
      {
        effect: {},
        hideFromStatBlock: true,
        name: "foo",
        text: vi.fn(),
      },
      {
        effect: {},
        hideFromStatBlock: true,
        name: "bar",
        text: vi.fn(),
      },
    ];
    expect(specialTraitsToMarkdown(testData)).toEqual("");
  });

  it("handles array of traits with no descriptions", () => {
    const testData: SpecialTrait[] = [
      {
        effect: {},
        name: "foo",
        text: vi.fn(),
      },
      {
        effect: {},
        name: "bar",
        text: vi.fn(),
      },
    ];
    expect(specialTraitsToMarkdown(testData)).toEqual(``);
  });

  it("handles array of traits with descriptions", () => {
    const testData: SpecialTrait[] = [
      {
        description: "A foo description.",
        effect: {},
        name: "foo",
        text: vi.fn(),
      },
      {
        description: "A bar description.",
        effect: {},
        name: "bar",
        text: vi.fn(),
      },
    ];
    expect(specialTraitsToMarkdown(testData))
      .toEqual(`***foo***. A foo description.

***bar***. A bar description.`);
  });
});
