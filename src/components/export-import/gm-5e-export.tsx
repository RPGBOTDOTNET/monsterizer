import { useFormikContext } from "formik";
import { flatten } from "lodash";
import { toOrdinal } from "number-to-words";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import { InputTextarea } from "primereact/inputtextarea";
import { useState, type ReactElement } from "react";
import {
  passivePerception,
  savingThrowModifier,
  skillModifier,
  spellAttack,
  spellcastingLevel,
  spellDc,
} from "../../calculators";
import { SPELL_SLOTS_BY_LEVEL } from "../../constants";
import {
  addSymbolToNumber,
  hitPointsLine,
  sensesLine,
  speedLine,
} from "../../string-formatters";
import {
  RestTypes,
  type AbilityScore,
  type InnateSpell,
  type Monster,
  type MonsterizerFormData,
  type Skill,
} from "../../types";
import { downloadFile } from "../../utils";
import { CopyToClipboardButton } from "../copy-to-clipboard-button";
import { AlignRight } from "../styled-elements";

const mapActionsToXml = (monster: Monster): string => {
  const retVal: string[] = [];

  if (monster.actions) {
    monster.actions.forEach((action) => {
      retVal.push(`    <action>
      <name>${action.name}</name>
      <text>${action.description}</text>
    </action>`);
    });
  }

  if (monster.bonusActions) {
    monster.bonusActions.forEach((action) => {
      retVal.push(`    <action>
      <name>${action.name}</name>
      <text>${action.description}</text>
    </action>`);
    });
  }

  if (monster.lairActions) {
    monster.lairActions.forEach((action) => {
      retVal.push(`    <lair>
      <name>${action.name}</name>
      <text>${action.description}</text>
    </lair>`);
    });
  }

  if (monster.legendaryActions) {
    monster.legendaryActions.forEach((action) => {
      retVal.push(`    <legendary>
      <name>${action.name}</name>
      <text>${action.description}</text>
    </legendary>`);
    });
  }

  if (monster.reactions) {
    monster.reactions.forEach((action) => {
      retVal.push(`    <reaction>
      <name>${action.name}</name>
      <text>${action.description}</text>
    </reaction>`);
    });
  }

  return retVal.join("\n");
};

const mapConditionImmunitiesToXml = (monster: Monster): string => {
  if (monster.conditionImmunities && monster.conditionImmunities.length) {
    return `		<immune>${monster.conditionImmunities.join("; ")}</immune>`;
  } else {
    return "";
  }
};

const mapDamageImmunitiesToXml = (monster: Monster): string => {
  if (monster.damageImmunities && monster.damageImmunities.length) {
    return `		<immune>${monster.damageImmunities.join("; ")}</immune>`;
  } else {
    return "";
  }
};

const mapDamageResistancesToXml = (monster: Monster): string => {
  if (monster.damageResistances && monster.damageResistances.length) {
    return `		<resist>${monster.damageImmunities.join("; ")}</resist>`;
  } else {
    return "";
  }
};

const mapDamageVulnerabilitiesToXml = (monster: Monster): string => {
  if (monster.damageVulnerabilities && monster.damageVulnerabilities.length) {
    return `		<vulerable>${monster.damageVulnerabilities.join("; ")}</vulerable>`;
  } else {
    return "";
  }
};

const spellSpellToName = (spell: InnateSpell): string => spell.name.trim();

const mapInnateSpellcastingToXml = (monster: Monster): string => {
  if (monster.innateSpellcasting) {
    const atWillSpells: InnateSpell[] = [];
    const dailySpells: { [count: number | string]: InnateSpell[] } = {};
    const shortRestSpells: { [count: number | string]: InnateSpell[] } = {};

    (monster.innateSpellcasting?.spells || []).forEach((spell: InnateSpell) => {
      if (!spell.recharge) {
        atWillSpells.push(spell);
      } else {
        const spellUses = spell.uses || 1;
        if (spell.recharge === RestTypes.Short) {
          if (shortRestSpells[spellUses]) {
            shortRestSpells[spellUses].push(spell);
          } else {
            shortRestSpells[spellUses] = [spell];
          }
        } else {
          if (dailySpells[spellUses]) {
            dailySpells[spellUses].push(spell);
          } else {
            dailySpells[spellUses] = [spell];
          }
        }
      }
    });

    const dailySpellLines = Object.keys(dailySpells)
      .sort()
      .map((key: string): string => {
        if (!dailySpells[key]?.length) {
          return "";
        }
        return `${key}/day each:&nbsp;
              ${dailySpells[key]
                .map(spellSpellToName)
                .filter(Boolean)
                .sort()
                .join(", ")}`;
      })
      .filter(Boolean);

    return [
      `		<trait>
			<name>Innate Spellcasting</name>
			<text>The ${monster.nameShort || monster.name}&#39;s spellcasting ability is ${
        monster.innateSpellcasting.spellcastingAbility
      } (spell save DC ${
        monster.innateSpellcasting.spellDc
      }, spell attack ${addSymbolToNumber(
        monster.innateSpellcasting?.spellAttack ||
          spellAttack(monster, monster.innateSpellcasting.spellcastingAbility!),
      )}). The ${
        monster.nameShort || monster.name
      } can innately cast the following spells, ${
        monster.innateSpellcasting.extraDescription
          ? monster.innateSpellcasting.extraDescription
          : "requiring no material components"
      }:`,
      atWillSpells.length ? `			At will: detect magic, fireball` : "",
      ...dailySpellLines,
      `			</text>
		</trait>`,
    ].join("\n");
  } else {
    return "";
  }
};

const mapSkillsToXml = (monster: Monster): string => {
  return (
    Object.keys(monster.skills)
      .map((key) => {
        return `		<skill>${key} ${addSymbolToNumber(
          skillModifier(monster, key as Skill),
        )}</skill>`;
      })
      .join("\n") || ""
  );
};

const mapSpellcastingToXml = (monster: Monster): string => {
  let retVal = "";
  const spellLevels = spellcastingLevel(monster);
  const cappedSpellLevels = Math.min(20, spellLevels);
  if (monster.spellcasting && monster.spellcasting.length) {
    monster.spellcasting.forEach((spellcastingGroup) => {
      retVal += `    <trait>
      <name>Innate Spellcasting</name>
      <text>The ${monster.nameShort || monster.name} is a ${toOrdinal(
        spellcastingLevel(monster),
      )}-level spellcaster. Its spellcasting ability is ${
        spellcastingGroup.spellcastingAbility
      } (spell save DC ${spellDc(
        monster,
        spellcastingGroup.spellcastingAbility,
      )}, ${spellAttack(
        monster,
        spellcastingGroup.spellcastingAbility,
      )} to hit with spell attacks). The ${
        monster.nameShort || monster.name
      } has the following spells prepared.</text>
    </trait>
    <spells>${flatten(Object.values(spellcastingGroup.spells))
      .filter(Boolean)
      .sort()
      .join(",")}</spells>
    <slots>${SPELL_SLOTS_BY_LEVEL[cappedSpellLevels]}</slots>
  </trait>`;
    });
  }
  if (monster.innateSpellcasting) {
    retVal += `    <trait>
      <name>Innate Spellcasting</name>
      <text>The ${monster.nameShort || monster.name} is a ${toOrdinal(
        spellcastingLevel(monster),
      )}-level spellcaster. Its spellcasting ability is ${
        monster.innateSpellcasting.spellcastingAbility
      } (spell save DC ${spellDc(
        monster,
        monster.innateSpellcasting.spellcastingAbility,
      )}, ${spellAttack(
        monster,
        monster.innateSpellcasting.spellcastingAbility,
      )} to hit with spell attacks). The ${
        monster.nameShort || monster.name
      } can innately cast the following spells,
        ${
          monster.innateSpellcasting?.extraDescription
            ? monster.innateSpellcasting?.extraDescription
            : "requiring no material components"
        }</text>
    </trait>
    <spells>${monster.innateSpellcasting.spells.sort().join(",")}</spells>
  </trait>`;
  }
  return retVal;
};

const mapTraitsToXml = (monster: Monster): string => {
  if (monster.specialTraits && monster.specialTraits.length) {
    return monster.specialTraits
      .map((trait) => {
        return `		<trait>
			<name>${trait.name}</name>
			<text>${trait.description}</text>
		</trait>`;
      })
      .join("\n");
  } else {
    return "";
  }
};

const mapSavesToXML = (monster: Monster): string => {
  return (
    Object.entries(monster.savingThrows)
      .filter(([, val]) => val.additionalBonus || val.proficient)
      .map(([key]) => {
        return `		<save>${key} ${savingThrowModifier(
          monster,
          key as AbilityScore,
        )}</save>`;
      })
      .join("\n") || ""
  );
};

export const Gm5eExport = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  const output = [
    `
<?xml version="1.0" encoding="UTF-8"?>
<compendium version="5">
	<monster>
		<name>${values.monster.name}</name>
		<size>${values.monster.size.charAt(0).toUpperCase()}</size>
		<type>${values.monster.creatureType}${
      values.monster.creatureSubtype
        ? " (" + values.monster.creatureSubtype + ")"
        : ""
    }</type>
		<alignment>${values.monster.alignment.lawChaos} ${
      values.monster.alignment.goodEvil
    }</alignment>
		<ac>${values.monster.ac}${
      values.monster.acNotes ? " (" + values.monster.acNotes + ")" : ""
    }</ac>
		<hp>${hitPointsLine(values.monster)}</hp>
		<speed>${speedLine(values.monster)}</speed>
		<str>${values.monster.abilityScores.Strength}</str>
		<dex>${values.monster.abilityScores.Dexterity}</dex>
		<con>${values.monster.abilityScores.Constitution}</con>
		<int>${values.monster.abilityScores.Intelligence}</int>
		<wis>${values.monster.abilityScores.Wisdom}</wis>
		<cha>${values.monster.abilityScores.Charisma}</cha>`,
    mapSkillsToXml(values.monster),
    mapSavesToXML(values.monster),
    mapDamageImmunitiesToXml(values.monster),
    mapDamageResistancesToXml(values.monster),
    mapDamageVulnerabilitiesToXml(values.monster),
    mapConditionImmunitiesToXml(values.monster),
    `		<senses>${sensesLine(values.monster)}</senses>
		<passive>${passivePerception(values.monster)}</passive>
		<languages>${values.monster.languages}</languages>
		<cr>${values.monster.challenge}</cr>`,
    mapTraitsToXml(values.monster),
    mapInnateSpellcastingToXml(values.monster),
    mapSpellcastingToXml(values.monster),
    mapActionsToXml(values.monster),
    `	</monster>
</compendium>
`,
  ]
    .filter((a) => a)
    .join("\n");

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Game Master 5e App"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        The Game Master 5e app, available for&nbsp;
        <a
          href="https://apps.apple.com/us/app/game-master-5th-edition/id908176026"
          target="_blank"
        >
          iOS
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://play.google.com/store/apps/details?id=com.lionsden.gamemaster5"
          target="_blank"
        >
          Android
        </a>
        .
      </p>
      <AlignRight>
        <Button
          label="Download XML File"
          onClick={() => {
            downloadFile(`${values.monster.name}.xml`, output);
          }}
          style={{ width: "auto" }}
        />
        <CopyToClipboardButton whatToCopy={output} />
      </AlignRight>
      <InputTextarea
        disabled={true}
        readOnly={true}
        style={{ resize: "vertical" }}
        value={output}
      />
    </Fieldset>
  );
};

export default Gm5eExport;
