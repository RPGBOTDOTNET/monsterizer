import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 14,
  },
  ac: 14,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "2d4 + 1",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*6 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 6 (2d4 + 1) bludgeoning damage.",
      name: "Ram",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*6 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage.",
      name: "Shortsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 6,
      description:
        "*Ranged Weapon Attack:* +5 to hit, range 80/320 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage.",
      name: "Shortbow",
      range: "80/320",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Neutral",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fey",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Common, Elvish, Sylvan",
  name: "Satyr",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Performance]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "leather",
  _ruleset: "2014",
} as Monster;
