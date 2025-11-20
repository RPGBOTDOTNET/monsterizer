import type { Monster } from "../types";

/**
 * Assembles the stat block line for a creature's speed and movement types
 * @param {Object} monsterStats
 * @returns {String}
 */
export const speedLine = (monsterStats: Monster): string => {
  return `${monsterStats.speed.land || 0} ft.${
    monsterStats.speed.burrow
      ? ", Burrow " + monsterStats.speed.burrow + " ft."
      : ""
  }${
    monsterStats.speed.climb
      ? ", Climb " + monsterStats.speed.climb + " ft."
      : ""
  }${monsterStats.speed.fly ? ", Fly " + monsterStats.speed.fly + " ft." : ""}${
    monsterStats.speed.hover ? " (Hover)" : ""
  }${
    monsterStats.speed.swim ? ", Swim " + monsterStats.speed.swim + " ft." : ""
  }`;
};

export default speedLine;
