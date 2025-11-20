import { skillModifier } from "../calculators";
import { type Monster, Skills } from "../types";

export const sensesLine = (monster: Monster): string => {
  return (
    (monster.senses ? `${monster.senses.trim()}, ` : "") +
    `Passive Perception ${10 + skillModifier(monster, Skills.Perception)}`
  );
};

export default sensesLine;
