import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 6,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.",
      name: "Spiked Bone Club",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [Conditions.Blinded],
  creatureSubtype: "grimlock",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "Undercommon",
  name: "Grimlock",
  reactions: [],
  savingThrows: {},
  senses:
    "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius)",
  skills: {
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.BLIND_SENSES(),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Stone", "in rocky terrain"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
