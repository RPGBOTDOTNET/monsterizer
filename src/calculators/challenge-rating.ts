import { CHALLENGE_RATINGS } from "../constants";
import type { ConditionModel, DamageModel, Monster } from "../types";
import defensiveCR from "./defensive-cr";
import offensiveCR from "./offensive-cr";

/**
 * Calculates a creatures challenge rating.
 * @param {Object} monsterStats
 * @param {Object} conditionModel
 * @param {Object} damageModel
 * @returns {String} The creature's calculated CR
 */
export const challengeRating = (
  monsterStats: Monster,
  conditionModel: ConditionModel,
  damageModel: DamageModel,
) => {
  /*
	"The monster's final challenge rating is the average of its defensive and offensive+
	challenge ratings. Round the average up or down to the nearest challenge rating to
	determine your monster's final challenge rating." -- DMG
	That's super helpful with fractional CRs, WotC.

	In all seriousness: that creates obvious edge cases any time that a fractional CR is
	involved. A creature with offensive CR of 2 could range anywhere from 0 to 1/2 on
	defensive CR without going above CR 1. The same creature could have as few as 1 and
	as many as 70 hit points without changing CR. I don't think that's intentional.

	Instead, we'll average the CR index so that each CR is evenly spaced along the scale,
	rather than having fractional CRs inexplicably squished at the bottom of the scale.

	// TODO: Make sure that this works with published monsters. It might not be, but that might be fine.
	*/

  const dcr = defensiveCR(monsterStats, conditionModel, damageModel);
  const dcrIndex: number = CHALLENGE_RATINGS.indexOf(dcr);

  const ocr = offensiveCR(monsterStats);
  const ocrIndex: number = CHALLENGE_RATINGS.indexOf(ocr);

  if (dcrIndex < 0 || ocrIndex < 0)
    throw new Error(
      `Invalid deffensive or offensive CR: ${dcrIndex} and ${ocrIndex}`,
    );

  const crIndex = Math.round((dcrIndex + ocrIndex) / 2); // Round the average to the nearest CR
  return CHALLENGE_RATINGS[crIndex];
};

export default challengeRating;
