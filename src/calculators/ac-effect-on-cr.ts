import { STATS_BY_CR_2014 } from "../constants";
import { type DamageModel, type Monster } from "../types";
import defensiveCRBase from "./defensive-cr-base";
import effectiveAC from "./effective-ac";

export const acEffectOnCr = (
  monsterStats: Monster,
  damageModel: DamageModel,
) => {
  const baseDefensiveCR = defensiveCRBase(monsterStats, damageModel) as string;
  const recommendedStats = STATS_BY_CR_2014[baseDefensiveCR];
  const monsterEffectiveAC = effectiveAC(monsterStats);

  // CR +1/-1 for every 2 above/below target baseCR
  return Math.floor((monsterEffectiveAC - recommendedStats.ac) / 2);
};

export default acEffectOnCr;
