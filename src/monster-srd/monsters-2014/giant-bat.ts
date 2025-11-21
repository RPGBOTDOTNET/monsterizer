import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Bite",
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
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 4,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Giant Bat",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ECHOLOCATION(),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing", "hearing"),
  ],
  speed: {
    fly: 60,
    land: 10,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
