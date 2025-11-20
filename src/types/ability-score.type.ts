export const AbilityScores = {
  Strength: "Strength",
  Dexterity: "Dexterity",
  Constitution: "Constitution",
  Intelligence: "Intelligence",
  Wisdom: "Wisdom",
  Charisma: "Charisma",
} as const;
export type AbilityScore = (typeof AbilityScores)[keyof typeof AbilityScores];
