import { AbilityScores, Skills, type AbilityScore } from "../types";

export const SKILLS_TO_ABILITIES: { [name: string]: AbilityScore } = {
  [Skills.Acrobatics]: AbilityScores.Dexterity,
  [Skills.AnimalHandling]: AbilityScores.Wisdom,
  [Skills.Athletics]: AbilityScores.Strength,
  [Skills.Arcana]: AbilityScores.Intelligence,
  [Skills.Deception]: AbilityScores.Charisma,
  [Skills.History]: AbilityScores.Intelligence,
  [Skills.Insight]: AbilityScores.Wisdom,
  [Skills.Intimidation]: AbilityScores.Charisma,
  [Skills.Investigation]: AbilityScores.Intelligence,
  [Skills.Medicine]: AbilityScores.Wisdom,
  [Skills.Nature]: AbilityScores.Intelligence,
  [Skills.Perception]: AbilityScores.Wisdom,
  [Skills.Performance]: AbilityScores.Charisma,
  [Skills.Persuasion]: AbilityScores.Charisma,
  [Skills.Religion]: AbilityScores.Intelligence,
  [Skills.SleightOfHand]: AbilityScores.Dexterity,
  [Skills.Stealth]: AbilityScores.Dexterity,
  [Skills.Survival]: AbilityScores.Wisdom,
};
