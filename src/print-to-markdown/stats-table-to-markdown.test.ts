import { EMPTY_MONSTER } from "../constants";
import statsTableToMarkdown from "./stats-table-to-markdown";

describe("statsTableToMarkdown", () => {
  it("handles an empty monster", () => {
    expect(statsTableToMarkdown(EMPTY_MONSTER))
      .toEqual(`*Medium  , Any Alignment*
___

- **Armor Class** 0
- **Hit Points** 0 0d8+0
- **Speed** 0 ft.
- **Initiative** -5
___
|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|0 (-5)|0 (-5)|0 (-5)|0 (-5)|0 (-5)|0 (-5)|
___
- **Senses**  Passive Perception 5
- **Languages** --
- **Challenge** 0 **Proficiency Bonus** 2
___`);
  });
});
