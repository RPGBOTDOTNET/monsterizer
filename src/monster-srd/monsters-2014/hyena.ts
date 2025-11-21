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
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 5,
  },
  ac: 11,
  actions: [
    {
      attackModifier: 2,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d6",
      damageType: DamageTypes.Piercing,
      description:
        "*3 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 3 (1d6) piercing damage.",
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
  attack: 2,
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 1,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Hyena",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.PACK_TACTICS()],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
