import { type Monster, type Spellcasting, SpellcastingTypes } from "../types";

export const pactMagicLevel = (monsterStats: Monster) => {
  if (!monsterStats.spellcasting || !monsterStats.spellcasting.length) return 0;

  return monsterStats.spellcasting
    .filter(
      (spellcastingGroup: Spellcasting) =>
        spellcastingGroup.type === SpellcastingTypes.PactMagic,
    )
    .reduce(
      (previous: number, spellcastingGroup: Spellcasting) =>
        previous + spellcastingGroup.casterLevel,
      0,
    );
};

export default pactMagicLevel;
