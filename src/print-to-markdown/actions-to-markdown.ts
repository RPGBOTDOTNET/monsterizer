import { flatten } from "lodash";
import spellAttack from "../calculators/spell-attack";
import spellDc from "../calculators/spell-dc";
import formatStatblockParagraph from "../print-to-markdown/format-statblock-paragraph";
import { addSymbolToNumber } from "../string-formatters";
import {
  type Action,
  type ActionType,
  ActionTypes,
  type InnateSpell,
  type LegendaryAction,
  type Monster,
  type Spellcasting,
  type SpellcastingSpell,
} from "../types";
import { castsSpellsBeforeCombat } from "../utils";

export const actionsGroupToMarkdown = (
  title: ActionType,
  actions: Action[] | undefined,
): string => {
  if (!actions || !actions.length) return "";
  const base = `### ${title}s`;
  const mappedActions = actions
    .map((action: Action) =>
      formatStatblockParagraph(action.name, action.description),
    )
    .filter((actionText) => !!actionText.trim())
    .join("\n\n");
  if (!mappedActions) {
    return "";
  }
  return [base, mappedActions].join("\n");
};

export const legendaryActionsToMarkdown = (monster: Monster): string => {
  if (!monster.legendaryActions || !monster.legendaryActions.length) return "";
  const base = `### Legendary Actions
The ${monster.name} can take 3 legendary actions, choosing from the
options below. Only one legendary action option can be used at a
time and only at the end of another creature's turn. The
${monster.name} regains spent legendary actions at the start of
its turn.`;

  const mappedActions = monster.legendaryActions
    .map((action: LegendaryAction) => {
      const costText = action.cost > 1 ? ` (Costs ${action.cost} actions)` : "";
      return `***${action.name}${costText}***. ${action.description}`;
    })
    .join("\n\n");
  return [base, mappedActions].join("\n\n");
};

const mapSpellName = (spell: SpellcastingSpell) => {
  const trimmedName = spell.name.trim();
  return spell.castBeforeCombat ? `${trimmedName}*` : trimmedName;
};

export const spellcastingToDescriptionMarkdown = (monster: Monster): string => {
  if (
    !monster.innateSpellcasting &&
    (!monster.spellcasting || !monster.spellcasting.length)
  )
    return "";

  let retVal = ``;

  const allAtWillSpells: string[] = [];
  const allLimitedUseSpells: string[] = [];

  if (monster.innateSpellcasting) {
    const atWillInnateSpells = (monster.innateSpellcasting.spells || [])
      .filter((spell: InnateSpell) => !spell.uses)
      .map(mapSpellName);
    allAtWillSpells.push(...atWillInnateSpells.filter((a) => !!a));

    const remainingInnateSpells = (monster.innateSpellcasting.spells || [])
      .filter((spell: InnateSpell) => spell.uses)
      .map(mapSpellName);
    allLimitedUseSpells.push(...remainingInnateSpells.filter((a) => !!a));
  }

  if (monster.spellcasting) {
    monster.spellcasting.forEach((spellcastingGroup: Spellcasting) => {
      if (spellcastingGroup.spells.cantrips) {
        const cantripNames =
          spellcastingGroup.spells.cantrips.map(mapSpellName);
        allAtWillSpells.push(...cantripNames);
      }
      if (spellcastingGroup.spells.cantrips) {
        const mappedSpells = flatten([
          ...(spellcastingGroup.spells[1] || []),
          ...(spellcastingGroup.spells[2] || []),
          ...(spellcastingGroup.spells[3] || []),
          ...(spellcastingGroup.spells[4] || []),
          ...(spellcastingGroup.spells[5] || []),
          ...(spellcastingGroup.spells[6] || []),
          ...(spellcastingGroup.spells[7] || []),
          ...(spellcastingGroup.spells[8] || []),
          ...(spellcastingGroup.spells[9] || []),
        ]).map(mapSpellName);
        allLimitedUseSpells.push(...mappedSpells);
      }
    });
  }

  allAtWillSpells.sort();
  allLimitedUseSpells.sort();

  const spellAttackMod =
    monster.innateSpellcasting && monster.innateSpellcasting.spellcastingAbility
      ? spellAttack(monster, monster.innateSpellcasting?.spellcastingAbility)
      : 0;
  const spellsaveDc =
    monster.innateSpellcasting && monster.innateSpellcasting.spellcastingAbility
      ? spellDc(monster, monster.innateSpellcasting?.spellcastingAbility)
      : 0;

  retVal += `
The ${
    monster.nameShort || monster.name
  } casts one of the following spells, using
${
  monster.innateSpellcasting?.spellcastingAbility ||
  "(you need to set the innate spellcasting ability)"
}
as its spellcasting ability (spell attack modifier
${addSymbolToNumber(spellAttackMod)}, spell save DC ${spellsaveDc})):`;

  if (allAtWillSpells.length) {
    retVal += `

At Will: ${allAtWillSpells.join(", ")}.`;
  }

  if (allLimitedUseSpells.length) {
    retVal += `

1/day each:  ${allLimitedUseSpells.join(", ")}`;
  }

  if (castsSpellsBeforeCombat(monster)) {
    retVal += `

* The ${
      monster.nameShort || monster.name
    } casts these spells on itself before combat.`;
  }

  return retVal + "\n";
};

export const actionsToMarkdown = (monster: Monster): string => {
  const actions: Action[] = [...monster.actions];

  if (
    (monster.innateSpellcasting &&
      monster.innateSpellcasting.spells &&
      monster.innateSpellcasting.spells.length) ||
    (monster.spellcasting && monster.spellcasting.length)
  ) {
    actions.push({
      averageDamage: 0,
      name: "Spellcasting",
      description: spellcastingToDescriptionMarkdown(monster),
      reusable: 0,
      targets: 0,
    });
  }

  return [
    actionsGroupToMarkdown(ActionTypes.Action, actions),
    actionsGroupToMarkdown(ActionTypes.BonusAction, monster.bonusActions),
    actionsGroupToMarkdown(ActionTypes.Reaction, monster.reactions),
    legendaryActionsToMarkdown(monster),
  ]
    .filter((a) => a)
    .join("\n");
};

export default actionsToMarkdown;
