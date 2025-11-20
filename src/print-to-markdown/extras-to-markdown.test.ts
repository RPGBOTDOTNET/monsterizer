import { EMPTY_MONSTER } from "../constants";
import { type Monster } from "../types";
import { getMonsterByName } from "../utils";
import extrasToMarkdown from "./extras-to-markdown";

describe("extrasToMarkdown", () => {
  it("handles an empty monster", () => {
    expect(extrasToMarkdown(EMPTY_MONSTER)).toEqual(`
*[Created in the Monsterizer](https://RPGBOT.net/dnd5/tools/monsterizer).*`);
  });

  it("handles gnoll", () => {
    const monster = getMonsterByName("gnoll") as Monster;
    expect(extrasToMarkdown(monster)).toEqual(`
*[Created in the Monsterizer](https://RPGBOT.net/dnd5/tools/monsterizer).*`);
  });

  it("handles knight", () => {
    const monster = getMonsterByName("knight") as Monster;
    expect(extrasToMarkdown(monster)).toEqual(`
### Description
Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight's alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and hirelings who are commoners.

*[Created in the Monsterizer](https://RPGBOT.net/dnd5/tools/monsterizer).*`);
  });
});
