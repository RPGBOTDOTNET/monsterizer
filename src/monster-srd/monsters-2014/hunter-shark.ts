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
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*13 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) piercing damage.",
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
  attack: 6,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Smaller than a giant shark but larger and fiercer than a reef shark, a hunter shark haunts deep waters. It usually hunts alone, but multiple hunter sharks might feed in the same area. A fully grown hunter shark is 15 to 20 feet long.",
  group: "",
  hitDice: {
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Hunter Shark",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.BLOOD_FRENZY(),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 0,
    swim: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
