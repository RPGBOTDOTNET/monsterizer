import type { Monster } from "../types";
import actionsToMarkdown from "./actions-to-markdown";
import extrasToMarkdown from "./extras-to-markdown";
import specialTraitsToMarkdown from "./special-traits-to-markdown";
import statsTableToMarkdown from "./stats-table-to-markdown";

export const monsterToMarkdown = (monster: Monster) => {
  return [
    `## ${monster.name}`,
    statsTableToMarkdown(monster),
    specialTraitsToMarkdown(monster.specialTraits),
    actionsToMarkdown(monster),
    extrasToMarkdown(monster),
  ]
    .filter((a) => a)
    .join("\n");
};

export default monsterToMarkdown;
