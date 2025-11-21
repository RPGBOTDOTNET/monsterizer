import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 10,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "2d6 + 1",
      damageType: DamageTypes.Slashing,
      description:
        "*8 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 8 (2d6 + 1) slashing damage.",
      name: "Talons",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Giant owls often befriend fey and other sylvan creatures and are guardians of their woodland realms.",
  group: "",
  hitDice: {
    count: 3,
    size: "d10",
    modifier: 0,
  },
  languages:
    "Giant Owl, understands Common, Elvish, and Sylvan but can't speak them",
  name: "Giant Owl",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.FLYBY(),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Sight", "hearing or sight"),
  ],
  speed: {
    fly: 60,
    land: 5,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
