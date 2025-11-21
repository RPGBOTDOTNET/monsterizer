import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 1,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 3,
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
  description:
    "A frog has no effective attacks. It feeds on small insects and typically dwells near water, in trees, or underground. The frog's statistics can also be used to represent a toad.",
  group: "",
  hitDice: {
    count: 1,
    size: "d4",
    modifier: -1,
  },
  languages: "",
  name: "Frog",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.AMPHIBIOUS(),
    SPECIAL_TRAITS.STANDING_LEAP(5, 10),
  ],
  speed: {
    land: 20,
    swim: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
