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
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 2,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +0 to hit, reach 5 ft., one target. *Hit:* 1 bludgeoning damage.",
      name: "Claw",
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
    modifier: 0,
  },
  languages: "",
  name: "Crab",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 20,
    swim: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
