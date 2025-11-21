import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 18,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 64,
      description:
        "The devil makes three attacks: one with its bite, one with its claws, and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      description:
        "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 20,
      description:
        "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      description:
        "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.

When the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.

The wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-­foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.`,
      name: "Wall of Ice (Recharge 6)",
      reusable: 1,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "14",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Cold, DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 19,
    size: "d10",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Ice Devil",
  nameShort: "devil",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "blindsight 60 ft., darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
