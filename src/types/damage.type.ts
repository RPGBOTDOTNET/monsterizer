export const HumanFriendlyDamageTypes = {
  Bludgeoning: "Bludgeoning",
  Piercing: "Piercing",
  Slashing: "Slashing",
  Acid: "Acid",
  Cold: "Cold",
  Fire: "Fire",
  Force: "Force",
  Lightning: "Lightning",
  Necrotic: "Necrotic",
  Poison: "Poison",
  Radiant: "Radiant",
  Psychic: "Psychic",
  Thunder: "Thunder",
} as const;

export type HumanFriendlyDamageType =
  (typeof HumanFriendlyDamageTypes)[keyof typeof HumanFriendlyDamageTypes];

export const DamageAndConditionResponseTypes = {
  Vulnerability: "Vulnerability",
  Normal: "Normal",
  Resistance: "Resistance",
  Immunity: "Immunity",
} as const;

export type DamageAndConditionResponseType =
  (typeof DamageAndConditionResponseTypes)[keyof typeof DamageAndConditionResponseTypes];

export const DamageTypes = {
  NMBludgeoning: "Nonmagical Bludgeoning",
  NMPiercing: "Nonmagical Piercing",
  NMSlashing: "Nonmagical Slashing",
  Spells: "Damage from Spells",
  Bludgeoning: "Bludgeoning",
  Piercing: "Piercing",
  Slashing: "Slashing",
  Acid: "Acid",
  Cold: "Cold",
  Fire: "Fire",
  Force: "Force",
  Lightning: "Lightning",
  Necrotic: "Necrotic",
  Poison: "Poison",
  Radiant: "Radiant",
  Psychic: "Psychic",
  Thunder: "Thunder",
} as const;

export type DamageType = (typeof DamageTypes)[keyof typeof DamageTypes];

type ConditionOrDamageModelManual = {
  immunityText?: string;
  resistanceText?: string;
  vulnerabilityText?: string;
};

export type DamageModel = {
  [key in DamageType]?: DamageAndConditionResponseType;
} & ConditionOrDamageModelManual;
