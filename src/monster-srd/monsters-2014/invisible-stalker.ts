import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 19,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 11,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 20,
      description: "The stalker makes two slam attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "2d6 + 3",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*10 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) bludgeoning damage.",
      name: "Slam",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [
    Conditions.Exhaustion,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
    Conditions.Prone,
    Conditions.Restrained,
    Conditions.Unconscious,
  ],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 16,
    size: "d8",
    modifier: 0,
  },
  languages: "Auran, understands Common but doesn't speak it",
  name: "Invisible Stalker",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.INVISIBILITY_CONSTANT(),
    SPECIAL_TRAITS.FAULTLESS_TRACKER(),
  ],
  speed: {
    fly: 50,
    hover: true,
    land: 50,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
