import {
  AbilityScores,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 12,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 3,
      description:
        "*Melee or Ranged Weapon Attack:* +2 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.",
      name: "Spear",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "merfolk",
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
  languages: "Aquan, Common",
  name: "Merfolk",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 10,
    swim: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
