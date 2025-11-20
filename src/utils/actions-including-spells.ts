import { toOrdinal } from "number-to-words";
import pactMagicLevel from "../calculators/pact-magic-level";
import spellcastingLevel from "../calculators/spellcasting-level";
import {
  PACT_MAGIC_SLOTS_BY_LEVEL,
  PACT_MAGIC_SLOT_LEVEL_BY_LEVEL,
  SPELL_SLOTS_BY_LEVEL,
} from "../constants";
import {
  type Action,
  type ActionType,
  ActionTypes,
  type InnateSpell,
  type Monster,
  type Spellcasting,
  type SpellcastingSpell,
  SpellcastingTypes,
} from "../types";

const getRegularActionsOfType = (
  monster: Monster,
  type: ActionType,
): Action[] => {
  if (type === ActionTypes.Action) {
    return monster.actions;
  } else if (type === ActionTypes.BonusAction) {
    return monster.bonusActions || [];
  } else if (type === ActionTypes.Reaction) {
    return monster.reactions || [];
  } else {
    return [];
  }
};

const getSpellActionsOfType = (
  monster: Monster,
  type: ActionType,
): Action[] => {
  const spellActionsArray: Action[] = [];

  // Innate Spellcasting
  if (monster.innateSpellcasting) {
    (monster.innateSpellcasting.spells || []).forEach(
      (spell: InnateSpell): void => {
        if (spell.castingTime === type) {
          spellActionsArray.push({
            averageDamage: spell.damage || 0,
            description: "",
            name: `${spell.name} (innate spell)`,
            reusable: spell.uses || 0,
            targets: spell.targets || 0,
          });
        }
      },
    );
  }

  if (monster.spellcasting && monster.spellcasting.length) {
    const pactLevels = pactMagicLevel(monster);
    const cappedPactLevels = Math.min(20, pactLevels);
    const pactSlotLevel = toOrdinal(
      PACT_MAGIC_SLOT_LEVEL_BY_LEVEL[cappedPactLevels],
    );
    const pactSlots = PACT_MAGIC_SLOTS_BY_LEVEL[cappedPactLevels];

    const spellLevels = spellcastingLevel(monster);
    const cappedSpellLevels = Math.min(20, spellLevels);
    const spellSlots = SPELL_SLOTS_BY_LEVEL[cappedSpellLevels];

    monster.spellcasting.forEach((spellcastingGroup: Spellcasting) => {
      if (spellcastingGroup.type === SpellcastingTypes.PactMagic) {
        // Pact Magic
        Object.keys(spellcastingGroup.spells).forEach((spellLevelKey) => {
          const theseAreCantrips = spellLevelKey === "cantrips";
          const spellLevelString = theseAreCantrips
            ? "(cantrip)"
            : `(pact magic spell cast at ${pactSlotLevel} level)`;
          const spellsAtThisLevel: SpellcastingSpell[] =
            spellcastingGroup.spells[
              spellLevelKey as keyof Spellcasting["spells"]
            ] || [];
          spellsAtThisLevel.forEach((spell: SpellcastingSpell): void => {
            if (spell.castingTime === type) {
              spellActionsArray.push({
                averageDamage: spell.damage || 0,
                description: "",
                name: `${spell.name} ${spellLevelString}`,
                reusable: theseAreCantrips ? 3 : pactSlots,
                targets: spell.targets || 0,
              });
            }
          });
        });
      } else {
        // Regular Spellcasting
        Object.keys(spellcastingGroup.spells).forEach((spellLevelKey) => {
          const theseAreCantrips = spellLevelKey === "cantrips";
          const spellLevelString = theseAreCantrips
            ? "(cantrip)"
            : `(spell cast at ${toOrdinal(spellLevelKey)} level)`;
          const spellsAtThisLevel: SpellcastingSpell[] =
            spellcastingGroup.spells[
              spellLevelKey as keyof Spellcasting["spells"]
            ] || [];
          spellsAtThisLevel.forEach((spell: SpellcastingSpell): void => {
            if (spell.castingTime === type) {
              spellActionsArray.push({
                averageDamage: spell.damage || 0,
                description: "",
                name: `${spell.name} ${spellLevelString}`,
                reusable: theseAreCantrips
                  ? 3
                  : spellSlots[parseInt(spellLevelKey)],
                targets: spell.targets || 0,
              });
            }
          });
        });
      }
    });
  }

  return spellActionsArray;
};

export const actionsIncludingSpells = (
  monster: Monster,
  type: ActionType,
): Action[] => {
  return [
    ...getRegularActionsOfType(monster, type),
    ...getSpellActionsOfType(monster, type),
  ];
};

export default actionsIncludingSpells;
