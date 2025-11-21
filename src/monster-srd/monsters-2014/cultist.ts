import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one creature. *Hit:* 4 (1d6 + 1) slashing damage.",
      name: "Scimitar",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "non-good",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Cultists swear allegiance to dark powers such as elemental princes, demon lords, or archdevils. Most conceal their loyalties to avoid being ostracized, imprisoned, or executed for their beliefs. Unlike evil acolytes, cultists often show signs of insanity in their beliefs and practices.",
  group: "NPCs",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Cultist",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Religion]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.DARK_DEVOTION()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "leather",
  _ruleset: "2014",
} as Monster;
