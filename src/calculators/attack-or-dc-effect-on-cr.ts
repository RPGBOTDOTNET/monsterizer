import { STATS_BY_CR_2014 } from "../constants";
import type { Monster } from "../types";
import effectiveAttack from "./effective-attack";
import offensiveCRBase from "./offensive-cr-base";

const attackEffectOnCR = (monsterStats: Monster): number => {
  const recommendedStats = STATS_BY_CR_2014[offensiveCRBase(monsterStats)];
  const monsterEffectiveAttack = effectiveAttack(monsterStats);

  // CR +1/-1 for every 2 above/below target baseCR
  return Math.floor((monsterEffectiveAttack - recommendedStats.attack) / 2);
};

const dcEffectOnCR = (monsterStats: Monster): number => {
  const recommendedStats = STATS_BY_CR_2014[offensiveCRBase(monsterStats)];
  // TODO: is there an effective DC? Traits only add to effective attack bonus.
  // const monsterEffectiveDC = effectiveDC(monsterStats);
  const monsterEffectiveDC = monsterStats.saveDc || recommendedStats.saveDc;

  // CR +1/-1 for every 2 above/below target baseCR
  return Math.floor((monsterEffectiveDC - recommendedStats.saveDc) / 2);
};

export const attackOrDcEffectOnCR = (monsterStats: Monster): number => {
  return monsterStats.usesAttackBonus
    ? attackEffectOnCR(monsterStats)
    : dcEffectOnCR(monsterStats);
};

export default attackOrDcEffectOnCR;
