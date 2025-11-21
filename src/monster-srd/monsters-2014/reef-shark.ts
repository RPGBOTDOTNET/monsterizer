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
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d8 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*6 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Smaller than giant sharks and hunter sharks, reef sharks inhabit shallow waters and coral reefs, gathering in small packs to hunt. A full-grown specimen measures 6 to 10 feet long.",
  group: "",
  hitDice: {
    count: 4,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Reef Shark",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.PACK_TACTICS(),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 0,
    swim: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
