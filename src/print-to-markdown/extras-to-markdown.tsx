import { type Monster } from "../types";

const genericTextToMarkdown = (
  title: string,
  text: string | undefined,
): string => {
  if (!text) return "";
  return `
### ${title}
${text}`;
};

export const extrasToMarkdown = (monster: Monster): string => {
  return [
    genericTextToMarkdown("Description", monster.description),
    genericTextToMarkdown("Inventory", monster.inventory),
    genericTextToMarkdown("Tactics", monster.tactics),
    "\n*[Created in the Monsterizer](https://RPGBOT.net/dnd5/tools/monsterizer).*",
  ]
    .filter((a) => a)
    .join("\n");
};

export default extrasToMarkdown;
