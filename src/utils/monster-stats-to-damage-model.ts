import { EMPTY_DAMAGE_MODEL } from "../constants";
import {
  DamageAndConditionResponseTypes,
  DamageTypes,
  type DamageModel,
  type DamageType,
  type Monster,
} from "../types";

/**
 * Produces a monsterizer damage model base on the creature's stats
 * @param {Object} monsterStats
 * @returns {Object} The monsterizer damageModel object
 */
export const monsterStatsToDamageModel = (monsterStats: Monster) => {
  const damageModel: DamageModel = { ...EMPTY_DAMAGE_MODEL };

  (monsterStats.damageImmunities || []).forEach((damageType): void => {
    if (Object.values(DamageTypes).includes(damageType as DamageType)) {
      damageModel[damageType as DamageType] =
        DamageAndConditionResponseTypes.Immunity;
    } else {
      damageModel.immunityText = damageType;
    }
  });
  (monsterStats.damageResistances || []).forEach((damageType) => {
    if (Object.values(DamageTypes).includes(damageType as DamageType)) {
      damageModel[damageType as DamageType] =
        DamageAndConditionResponseTypes.Resistance;
    } else {
      damageModel.resistanceText = damageType;
    }
  });
  (monsterStats.damageVulnerabilities || []).forEach((damageType) => {
    if (Object.values(DamageTypes).includes(damageType as DamageType)) {
      damageModel[damageType as DamageType] =
        DamageAndConditionResponseTypes.Vulnerability;
    } else {
      damageModel.vulnerabilityText = damageType;
    }
  });

  return damageModel;
};

export default monsterStatsToDamageModel;
