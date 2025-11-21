import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +0 to hit, reach 5 ft., one creature. *Hit:* 1 piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 0,
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
    size: "d4",
    modifier: -1,
  },
  languages: "",
  name: "Bat",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ECHOLOCATION(),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing", "hearing"),
  ],
  speed: {
    fly: 30,
    land: 5,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
