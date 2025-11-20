import { get } from "lodash";
import skillModifier from "../calculators/skill-modifier";
import { type Monster, type Skill, type ThingProficiency } from "../types";
import addSymbolToNumber from "./add-symbol-to-number";

/**
 * Assembles the stat block line for a creature's skills
 * @param {Object} monsterStats
 * @returns {String}
 */
export const skillLine = (monsterStats: Monster): string => {
  return Object.keys(monsterStats.skills)
    .filter((skillKey: string) => {
      const skillProficiency: ThingProficiency | undefined = get(
        monsterStats,
        `skills.${skillKey}`,
      );
      return (
        skillProficiency &&
        ((skillProficiency as ThingProficiency).proficient ||
          (skillProficiency as ThingProficiency).additionalBonus)
      );
    })
    .sort()
    .map((skillKey: string) => {
      const modifier: number = skillModifier(
        monsterStats,
        skillKey as unknown as Skill,
      );
      return `${skillKey} ${addSymbolToNumber(modifier)}`;
    })
    .join(", ");
};

export default skillLine;
