import { get } from "lodash";
import type { DamageModel, DamageType, Monster } from "../types";
import { DamageAndConditionResponseTypes, DamageTypes } from "../types";

/**
 * Applies a monsterizer damageModel object to a standard Monster object
 * @param {Object} damageModel
 * @param {Object} monsterStats
 * @returns {Object} New Monster with modified stats
 */
export const damageModelToMonsterStats = (
  damageModel: DamageModel,
  monsterStats: Monster,
): Monster => {
  const modifiedStats = { ...monsterStats };
  modifiedStats.damageImmunities = [];
  modifiedStats.damageResistances = [];
  modifiedStats.damageVulnerabilities = [];

  Object.keys(damageModel).forEach((damageType) => {
    const isCustomResponseText = !Object.values(DamageTypes).includes(
      damageType as DamageType,
    );

    if (isCustomResponseText) {
      const val = get(damageModel, damageType);
      if (damageType === "immunityText") {
        modifiedStats.damageImmunities!.push(val);
      } else if (damageType === "resistanceText") {
        modifiedStats.damageResistances!.push(val);
      } else if (damageType === "vulnerabilityText") {
        modifiedStats.damageVulnerabilities!.push(val);
      }
    } else {
      const val = damageModel[damageType as DamageType];
      if (val === DamageAndConditionResponseTypes.Immunity) {
        modifiedStats.damageImmunities!.push(damageType as DamageType);
      } else if (val === DamageAndConditionResponseTypes.Resistance) {
        modifiedStats.damageResistances!.push(damageType as DamageType);
      } else if (val === DamageAndConditionResponseTypes.Normal) {
        // Do nothing. Normal is the assumption and we don't need to track it.
      } else if (val === DamageAndConditionResponseTypes.Vulnerability) {
        modifiedStats.damageVulnerabilities!.push(damageType as DamageType);
      } else {
        throw new Error(
          `Failed to convert condition model to monster stats: key:${damageType} val:${val}`,
        );
      }
    }
  });

  return modifiedStats;
};

export default damageModelToMonsterStats;
