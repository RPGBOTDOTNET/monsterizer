import { get } from "lodash";
import {
  type Condition,
  type ConditionModel,
  Conditions,
  DamageAndConditionResponseTypes,
  type Monster,
} from "../types";

/**
 * Applies a monsterizer conditionModel object to a standard Monster object
 * @param {Object} conditionModel
 * @param {Object} monsterStats
 * @returns {Object} New Monster with modified stats
 */
export const conditionModelToMonsterStats = (
  conditionModel: ConditionModel,
  monsterStats: Monster,
): Monster => {
  const modifiedStats = { ...monsterStats };
  modifiedStats.conditionImmunities = [];
  modifiedStats.conditionResistances = [];
  modifiedStats.conditionVulnerabilities = [];

  Object.keys(conditionModel).forEach((conditionType) => {
    const isCustomResponseText = !Object.values(Conditions).includes(
      conditionType as Condition,
    );

    if (isCustomResponseText) {
      const val = get(conditionModel, conditionType);
      if (conditionType === "immunityText") {
        modifiedStats.conditionImmunities!.push(val);
      } else if (conditionType === "resistanceText") {
        modifiedStats.conditionResistances!.push(val);
      } else if (conditionType === "vulnerabilityText") {
        modifiedStats.conditionVulnerabilities!.push(val);
      }
    } else {
      const val = conditionModel[conditionType as Condition];
      if (val === DamageAndConditionResponseTypes.Immunity) {
        modifiedStats.conditionImmunities!.push(conditionType as Condition);
      } else if (val === DamageAndConditionResponseTypes.Resistance) {
        modifiedStats.conditionResistances!.push(conditionType as Condition);
      } else if (val === DamageAndConditionResponseTypes.Normal) {
        // Do nothing. Normal is the assumption and we don't need to track it.
      } else if (val === DamageAndConditionResponseTypes.Vulnerability) {
        modifiedStats.conditionVulnerabilities!.push(
          conditionType as Condition,
        );
      } else {
        throw new Error(
          `Failed to convert condition model to monster stats: key:${conditionType} val:${val}`,
        );
      }
    }
  });

  return modifiedStats;
};

export default conditionModelToMonsterStats;
