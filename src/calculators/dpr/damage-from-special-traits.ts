import { TURNS_TO_AVERAGE } from "../../constants";
import type { SpecialTrait } from "../../types";

export const damageFromSpecialTraits = (
  specialTraits: Array<SpecialTrait>,
): number => {
  if (!specialTraits || !specialTraits.length) return 0;
  const effect = specialTraits.reduce(
    (current, newTrait: SpecialTrait) => {
      return {
        damageOnce: current.damageOnce + (newTrait.effect.damageOnce || 0),
        damagePerRound:
          current.damagePerRound + (newTrait.effect.damagePerRound || 0),
      };
    },
    {
      damageOnce: 0,
      damagePerRound: 0,
    },
  );
  return effect.damagePerRound + effect.damageOnce / TURNS_TO_AVERAGE;
};

export default damageFromSpecialTraits;
