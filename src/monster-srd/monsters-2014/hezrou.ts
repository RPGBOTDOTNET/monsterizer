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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 13,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 37,
      description:
        "The hezrou makes three attacks: one with its bite and two with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "2d10 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15 (2d10 + 4) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*11 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 13,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Hezrou",
  reactions: [],
  saveDc: 14,
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.STENCH(14, 10),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
