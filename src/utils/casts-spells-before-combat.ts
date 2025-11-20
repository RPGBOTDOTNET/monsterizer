import { flatten } from "lodash";
import type { Monster, Spellcasting, SpellcastingSpell } from "..//types";

export const castsSpellsBeforeCombat = (monster: Monster): boolean => {
  if (!monster.spellcasting || !monster.spellcasting.length) return false;
  return !!monster.spellcasting?.find((spellcastingGroup: Spellcasting) => {
    const allSpells = flatten(Object.values(spellcastingGroup.spells));
    return Boolean(
      allSpells.find((spell: SpellcastingSpell) => spell.castBeforeCombat),
    );
  });
};

export default castsSpellsBeforeCombat;
