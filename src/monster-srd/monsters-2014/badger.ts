import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 4,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 5,
  },
  ac: 10,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 1 piercing damage.",
      name: "Bite",
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
    size: "d4",
    modifier: 0,
  },
  languages: "",
  name: "Badger",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell")],
  speed: {
    burrow: 5,
    land: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
