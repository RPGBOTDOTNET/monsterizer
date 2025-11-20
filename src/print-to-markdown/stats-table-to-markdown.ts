import {
  abilityModifier,
  hitPoints,
  hpModifier,
  skillModifier,
} from "../calculators";
import { STATS_BY_CR_2014 } from "../constants";
import {
  addSymbolToNumber,
  alignment,
  languagesText,
  savingThrowLine,
  skillLine,
  speedLine,
} from "../string-formatters";
import { AbilityScores, Skills, type Monster } from "../types";

const abilityScoresMarkdown = (monster: Monster): string => {
  const str = monster.abilityScores.Strength;
  const strMod = addSymbolToNumber(abilityModifier(str));
  const dex = monster.abilityScores.Dexterity;
  const dexMod = addSymbolToNumber(abilityModifier(dex));
  const con = monster.abilityScores.Constitution;
  const conMod = addSymbolToNumber(abilityModifier(con));
  const int = monster.abilityScores.Intelligence;
  const intMod = addSymbolToNumber(abilityModifier(int));
  const wis = monster.abilityScores.Wisdom;
  const wisMod = addSymbolToNumber(abilityModifier(wis));
  const cha = monster.abilityScores.Charisma;
  const chaMod = addSymbolToNumber(abilityModifier(cha));

  return `|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|${str} (${strMod})|${dex} (${dexMod})|${con} (${conMod})|${int} (${intMod})|${wis} (${wisMod})|${cha} (${chaMod})|`;
};

const statsTableLowerMarkdown = (monster: Monster): string => {
  const savesText = savingThrowLine(monster);
  const savesMarkdown = savesText ? `- **Saving Throws** ${savesText}` : "";

  const skillsText = skillLine(monster);
  const skillsMarkdown = skillsText ? `- **Skills** ${skillsText}` : "";

  const conditionResistance = (monster.conditionResistances || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const conditionResistanceMarkdown = conditionResistance
    ? `- **Condition Resistances** `
    : "";

  const conditionImmunities = (monster.conditionImmunities || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const conditionImmunityMarkdown = conditionImmunities
    ? `- **Condition Immunities** ${conditionImmunities}`
    : "";

  const conditionVulnerabilities = (monster.conditionVulnerabilities || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const conditionVulnerabilityMarkdown = conditionVulnerabilities
    ? `- **Condition Vulnerabilities** `
    : "";

  const damageResistances = (monster.damageResistances || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const damageResistanceMarkdown = damageResistances
    ? `- **Damage Resistances** `
    : "";

  const damageImmunities = (monster.damageImmunities || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const damageImmunityMarkdown = damageImmunities
    ? `- **Damage Immunities** ${damageImmunities}`
    : "";

  const damageVulnerabilities = (monster.damageVulnerabilities || [])
    .map((a: string) => a.toLocaleLowerCase())
    .sort()
    .join(", ");
  const damageVulnerabilityMarkdown = damageVulnerabilities
    ? `- **Damage Vulnerabilities** ${damageVulnerabilities}`
    : "";

  const sensesMarkdown = `- **Senses** ${
    monster.senses ? `${monster.senses.trim()}, ` : ""
  } Passive Perception ${10 + skillModifier(monster, Skills.Perception)}`;

  const languagesMarkdown = `- **Languages** ${languagesText(monster)}`;

  const challengeMarkdown = `- **Challenge** ${
    monster.challenge
  } **Proficiency Bonus** ${STATS_BY_CR_2014[monster.challenge].proficiencyBonus}`;

  return [
    savesMarkdown,
    skillsMarkdown,
    conditionResistanceMarkdown,
    conditionImmunityMarkdown,
    conditionVulnerabilityMarkdown,
    damageResistanceMarkdown,
    damageImmunityMarkdown,
    damageVulnerabilityMarkdown,
    sensesMarkdown,
    languagesMarkdown,
    challengeMarkdown,
  ]
    .filter((a) => a)
    .join("\n");
};

const statsTableUpperMarkdown = (monster: Monster): string => {
  return `
- **Armor Class** ${monster.ac}${monster.acNotes ? ` (${monster.acNotes})` : ""}
- **Hit Points** ${Math.floor(hitPoints(monster))} ${
    Math.floor(monster.hitDice.count || 0) +
    (monster.hitDice.size || "d?") +
    addSymbolToNumber(hpModifier(monster) * monster.hitDice.count)
  }
- **Speed** ${speedLine(monster)}
- **Initiative** ${addSymbolToNumber(
    abilityModifier(monster.abilityScores[AbilityScores.Dexterity]),
  )}`;
};

const typeAndAlignmentMarkdown = (monster: Monster): string => {
  return `*${monster.size} ${monster.creatureType} ${
    monster.creatureSubtype ? " (" + monster.creatureSubtype + ")" : ""
  }, ${alignment(monster)}*`;
};

export const statsTableToMarkdown = (monster: Monster): string => {
  const hr = "___";
  return [
    typeAndAlignmentMarkdown(monster),
    hr,
    statsTableUpperMarkdown(monster),
    hr,
    abilityScoresMarkdown(monster),
    hr,
    statsTableLowerMarkdown(monster),
    hr,
  ]
    .filter((a) => a)
    .join("\n");
};

export default statsTableToMarkdown;
