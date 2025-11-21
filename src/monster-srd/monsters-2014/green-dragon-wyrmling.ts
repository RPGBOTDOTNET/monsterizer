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
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 13,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageType: DamageTypes.Poison,
      description:
        "*10 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 10 (1d10 + 2) piercing damage plus 3 (1d6) poison damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 21,
      description:
        "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Poison Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Draconic",
  name: "Green Dragon Wyrmling",
  reactions: [],
  saveDc: 11,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "blindsight 10 ft., darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    fly: 60,
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
