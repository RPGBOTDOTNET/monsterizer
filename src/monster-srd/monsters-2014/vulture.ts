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
    [AbilityScores.Strength]: 7,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 4,
  },
  ac: 10,
  actions: [
    {
      attackModifier: 2,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 2,
      damageExpression: "1d4",
      damageType: DamageTypes.Piercing,
      description:
        "*2 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4) piercing damage.",
      name: "Beak",
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
  name: "Vulture",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Sight and Smell", "sight or smell"),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    fly: 50,
    land: 10,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
