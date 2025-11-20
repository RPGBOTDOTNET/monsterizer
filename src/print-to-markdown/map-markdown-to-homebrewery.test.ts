import { mapMarkdownTextToHomebrewery } from "./map-markdown-to-homebrewery";

describe("mapMarkdownTextToHomebrewery", () => {
  test("Empty string", () => {
    expect(mapMarkdownTextToHomebrewery("")).toEqual(`___
___
> `);
  });

  test("A bunch of lines", () => {
    const testText = `Hello
	there.
	General
	Kenobi.`;
    expect(mapMarkdownTextToHomebrewery(testText)).toEqual(`___
___
> Hello
> 	there.
> 	General
> 	Kenobi.`);
  });
});
