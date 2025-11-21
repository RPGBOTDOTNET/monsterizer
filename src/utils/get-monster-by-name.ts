import MONSTER_SRD from "../monster-srd/monsterSRD";
import type { Monster } from "../types";

/**
 * Searches the Monster SRD to find a monster with the specified name.
 * @param {String} name - The name of the monster
 * @returns {Object} Monster stats object
 */
export const getMonsterByName = (name: string): Monster | undefined =>
  MONSTER_SRD.find(
    (monster: Monster) => monster.name.toLowerCase() === name.toLowerCase(),
  );

export default getMonsterByName;
