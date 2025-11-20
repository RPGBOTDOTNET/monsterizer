export const AttackTypes = {
  EitherSpell: "Melee or Ranged Spell Attack",
  EitherWeapon: "Melee or Ranged Weapon Attack",
  MeleeSpell: "Melee Spell",
  MeleeWeapon: "Melee Weapon",
  RangedSpell: "Ranged Spell",
  RangedWeapon: "Ranged Weapon",
} as const;
export type AttackType = (typeof AttackTypes)[keyof typeof AttackTypes];
