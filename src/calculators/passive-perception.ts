import { type Monster, Skills } from "../types";
import skillModifier from "./skill-modifier";

/**
 * Determines the creature's Passive Perception
 * @param {Object} monsterStats
 * @returns {Number}
 */
export const passivePerception = (monsterStats: Monster) =>
  10 + skillModifier(monsterStats, Skills.Perception);

export default passivePerception;
