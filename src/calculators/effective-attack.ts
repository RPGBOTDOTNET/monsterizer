import { isNull, isUndefined } from "lodash";
import { STATS_BY_CR_2014 } from "../constants";
import type { Monster, SpecialTrait } from "../types";

/**
 * Calculates the "Effective Attack Bonus" used for calculating CR
 * @param {Monster} monster
 * @returns {number}
 */
export const effectiveAttack = (monster: Monster): number => {
  const baseAttack =
    isUndefined(monster.attack) ||
    isNull(monster.attack) ||
    monster.attack.toString() === ""
      ? STATS_BY_CR_2014[monster.challenge].attack
      : monster.attack;
  return (monster.specialTraits || []).reduce(
    (previous, specialTrait: SpecialTrait) => {
      return previous + (specialTrait.effect.attack || 0);
    },
    baseAttack,
  );
};

export default effectiveAttack;
