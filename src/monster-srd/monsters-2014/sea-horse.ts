import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 1,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 2,
  },
  ac: 11,
  actions: [],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
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
  name: "Sea Horse",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.WATER_BREATHING()],
  speed: {
    land: 0,
    swim: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
