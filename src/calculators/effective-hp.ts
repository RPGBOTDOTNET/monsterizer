import type { DamageModel, Monster, SpecialTrait } from "../types";
import damageResponseEffectOnHp from "./damage-response-effect-on-hp";
import hitPoints from "./hit-points";

export const specialTraitsEffectOnHP = (
  specialTraits: Array<SpecialTrait>,
): number => {
  if (!specialTraits || !specialTraits.length) return 0;
  return specialTraits.reduce(
    (current, newTrait: SpecialTrait) => current + (newTrait.effect.hp || 0),
    0,
  );
};

/**
 * Calculates the effective hp used to calculate a monster's Defensive CR
 * @param {Object} monsterStats
 * @param {Object} damageModel
 * @returns {Number} The creature's effective hp
 */
export const effectiveHP = (
  monsterStats: Monster,
  damageModel: DamageModel,
): number => {
  if (!monsterStats.hitDice.count) return 0;
  const hp = hitPoints(monsterStats);
  const hpFromTraits = specialTraitsEffectOnHP(
    monsterStats.specialTraits || [],
  );
  const multiplier = damageResponseEffectOnHp(monsterStats, damageModel);
  return (hp + hpFromTraits) * multiplier;
};

export default effectiveHP;
