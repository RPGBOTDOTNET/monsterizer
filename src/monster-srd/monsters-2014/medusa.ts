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
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 15,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 28,
      description:
        "The medusa makes either three melee attacks-one with its snake hair and two with its shortsword—or two ranged attacks with its longbow.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 18,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage.",
      name: "Snake Hair",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d6 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Shortsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 13,
      description:
        "*Ranged Weapon Attack:* +5 to hit, range 150/600 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 17,
    size: "d8",
    modifier: 0,
  },
  languages: "Common",
  name: "Medusa",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.PETRIFYING_GAZE(14)],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
