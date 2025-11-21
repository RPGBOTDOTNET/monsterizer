import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 11,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 20,
      description:
        "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "1d10 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*9 Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 9 (1d10 + 4) piercing damage.",
      name: "Pike",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 6,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Good",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "Elvish, Sylvan",
  name: "Centaur",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Survival]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.CHARGE(10, "3d6", "piercing", 30, "Charge", "pike"),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
