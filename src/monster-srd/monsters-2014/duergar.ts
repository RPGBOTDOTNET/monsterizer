import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 9,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 0,
      description:
        "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.",
      name: "Enlarge (Recharges after a Short or Long Rest)",
      reusable: 1,
      targets: 0,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.",
      name: "War Pick",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 30/120 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.",
      name: "Javelin",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it.",
      name: "Invisibility (Recharges after a Short or Long Rest)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "dwarf",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [DamageTypes.Poison],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 4,
    size: "d8",
    modifier: 0,
  },
  languages: "Dwarvish, Undercommon",
  name: "Duergar",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DUERGAR_RESILIENCE(),
    SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY(),
  ],
  speed: {
    land: 25,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "scale",
  _ruleset: "2014",
} as Monster;
