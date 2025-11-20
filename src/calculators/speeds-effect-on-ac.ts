import type { Monster } from "../types";

/**
 * Calculates the effect which a creature's speed has on its effective AC
 * @param {Object} monsterStats
 * @returns {Number} Added to Effective AC. 2 or 0.
 */
const speedsEffectonAC = (monsterStats: Monster) => {
  if (
    eval(monsterStats.challenge) < 11 &&
    monsterStats.speed.fly &&
    monsterStats.speed.fly > 0 &&
    monsterStats.speed.flyingRangedAttack
  ) {
    // Eval() to handle fractional CR
    return 2;
  } else {
    return 0;
  }
};

export default speedsEffectonAC;
