import { CHALLENGE_RATINGS } from "../constants";
import { type DamageModel, type Monster } from "../types";
import { damageModelToMonsterStats } from "../utils";

/*
The official rules say "If a monster has resistance or immunity to several damage types",
but there is no number specified for "several". The examples are three damage types
(bludgeoning, piercing, slashing) so we'll use 3 for lack of a better idea.
*/
const SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES = 3;

/**
 * Calculates the modifier for the monster's effective HP
 * used to determine Defensive CR.
 * @param {Object} monsterStats
 * @returns {Number} TODO: What's the range?
 */
export const damageResponseEffectOnHp = (
  monsterStats: Monster,
  damageModel: DamageModel,
) => {
  // Damage resistances/immunities
  const monsterWithUpdatedDamageModel = damageModelToMonsterStats(
    damageModel,
    monsterStats,
  );
  const numberOfDamageResistances =
    monsterWithUpdatedDamageModel.damageResistances.length;
  const numberOfDamageImmunities =
    monsterWithUpdatedDamageModel.damageImmunities.length;
  const numberOfDamageVulnerabilities =
    monsterWithUpdatedDamageModel.damageVulnerabilities.length;

  let damageResponseHpMultiplier = 1;
  const crIndex = CHALLENGE_RATINGS.indexOf(
    monsterWithUpdatedDamageModel.challenge,
  );

  // TODO: Should these stack additively?
  // TODO: What if there are more than 3? 6? Maybe multiply the multiplier?
  // Multipliers for damage resistances/immunities
  if (crIndex <= 7) {
    // Indexes to CR 4
    if (
      numberOfDamageResistances >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 1;
    }
    if (
      numberOfDamageImmunities >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 1;
    }
  } else if (crIndex < 14) {
    // CR 11
    if (
      numberOfDamageResistances >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 0.5;
    }
    if (
      numberOfDamageImmunities >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 1;
    }
  } else if (crIndex < 20) {
    // CR 17
    if (
      numberOfDamageResistances >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 0.25;
    }
    if (
      numberOfDamageImmunities >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 0.5;
    }
  } else {
    // CR 17+
    if (
      numberOfDamageResistances >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      // This is intentional. By this level players should be able to circumvent resistances
      // on a well-designed monster.
      damageResponseHpMultiplier += 0;
    }
    if (
      numberOfDamageImmunities >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
    ) {
      damageResponseHpMultiplier += 0.25;
    }
  }

  // Divider for damage vulnerabilities
  const vulnerabilitiesMultiplied =
    numberOfDamageVulnerabilities >= SIGNIFICANT_NUMBER_OF_DAMAGE_RESPONSE_TYPES
      ? 0.5
      : 1;

  return damageResponseHpMultiplier * vulnerabilitiesMultiplied;
};

export default damageResponseEffectOnHp;
