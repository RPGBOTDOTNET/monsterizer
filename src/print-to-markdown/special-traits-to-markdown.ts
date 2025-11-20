import type { SpecialTrait } from "../types";
import formatStatblockParagraph from "./format-statblock-paragraph";

export const specialTraitsToMarkdown = (
  traits: SpecialTrait[] | undefined,
): string => {
  if (!traits) return "";
  return traits
    .filter((trait: SpecialTrait) => !trait.hideFromStatBlock)
    .map((trait: SpecialTrait) =>
      formatStatblockParagraph(trait.name, trait.description),
    )
    .filter(Boolean)
    .join("\n\n");
};

export default specialTraitsToMarkdown;
