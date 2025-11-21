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
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 1,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 1,
      damageExpression: "1d4 - 1",
      damageType: DamageTypes.Piercing,
      description:
        "*1 Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 1 (1d4 - 1) piercing damage.",
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
  attack: 1,
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
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Jackal",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
