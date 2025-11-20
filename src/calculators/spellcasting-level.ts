import { type Monster, type Spellcasting, SpellcastingTypes } from "../types";

export const spellcastingLevel = (monsterStats: Monster) => {
  if (!monsterStats.spellcasting || !monsterStats.spellcasting.length) return 0;

  return monsterStats.spellcasting
    .filter(
      (spellcastingGroup: Spellcasting) =>
        spellcastingGroup.type === SpellcastingTypes.Spellcasting,
    )
    .reduce(
      (previous: number, spellcastingGroup: Spellcasting) =>
        previous + spellcastingGroup.casterLevel,
      0,
    );
};

export default spellcastingLevel;
