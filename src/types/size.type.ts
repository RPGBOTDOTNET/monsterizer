export const CreatureSizes = {
  Tiny: "Tiny",
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
  Huge: "Huge",
  Gargantuan: "Gargantuan",
} as const;

export type CreatureSize = (typeof CreatureSizes)[keyof typeof CreatureSizes];
