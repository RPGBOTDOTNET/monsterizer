import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1 piercing damage.",
      name: "Beak",
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
  name: "Raven",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.MIMICRY()],
  speed: {
    fly: 50,
    land: 10,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
