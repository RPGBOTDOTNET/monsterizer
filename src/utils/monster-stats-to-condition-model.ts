import { EMPTY_CONDITION_MODEL } from "../constants";
import {
  Conditions,
  DamageAndConditionResponseTypes,
  type Condition,
  type ConditionModel,
  type Monster,
} from "../types";

/**
 * Produces a monsterizer condition model based on the creature's stats
 * @param {Object} monsterStats
 * @returns {Object} The monsterizer conditionModel object
 */
const monsterStatsToConditionModel = (monsterStats: Monster) => {
  const conditionModel: ConditionModel = { ...EMPTY_CONDITION_MODEL };

  (monsterStats.conditionImmunities || []).forEach((conditionType) => {
    if (Object.values(Conditions).includes(conditionType as Condition)) {
      conditionModel[conditionType as Condition] =
        DamageAndConditionResponseTypes.Immunity;
    } else {
      conditionModel.immunityText = conditionType;
    }
  });
  (monsterStats.conditionResistances || []).forEach((conditionType) => {
    if (Object.values(Conditions).includes(conditionType as Condition)) {
      conditionModel[conditionType as Condition] =
        DamageAndConditionResponseTypes.Resistance;
    } else {
      conditionModel.resistanceText = conditionType;
    }
  });
  (monsterStats.conditionVulnerabilities || []).forEach((conditionType) => {
    if (Object.values(Conditions).includes(conditionType as Condition)) {
      conditionModel[conditionType as Condition] =
        DamageAndConditionResponseTypes.Vulnerability;
    } else {
      conditionModel.vulnerabilityText = conditionType;
    }
  });

  return conditionModel;
};

export default monsterStatsToConditionModel;
