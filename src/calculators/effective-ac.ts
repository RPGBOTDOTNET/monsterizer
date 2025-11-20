import type { Monster, SpecialTrait } from "../types";
import savingThrowsEffectOnAC from "./saving-throws-effect-on-ac";
import speedsEffectonAC from "./speeds-effect-on-ac";

export const specialTraitsEffectOnAC = (
  specialTraits: Array<SpecialTrait>,
): number => {
  if (!specialTraits || !specialTraits.length) return 0;
  return specialTraits.reduce(
    (current, newTrait: SpecialTrait) => current + (newTrait.effect.ac || 0),
    0,
  );
};

/**
 * Calculates the effective AC used to calculate a monster's Defensive CR
 * @param {Object} monsterStats
 * @returns {Number} The creature's effective AC
 */
export const effectiveAC = (monsterStats: Monster) => {
  return (
    monsterStats.ac +
    savingThrowsEffectOnAC(monsterStats) +
    specialTraitsEffectOnAC(monsterStats.specialTraits || []) +
    speedsEffectonAC(monsterStats)
  );
};

export default effectiveAC;
