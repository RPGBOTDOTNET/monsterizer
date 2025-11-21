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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 15,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 37,
      description:
        "The dragon makes three attacks: one with its bite and two with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageType: DamageTypes.Poison,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:* 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*11 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 42,
      description:
        "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Poison Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  languages: "Common, Draconic",
  name: "Young Green Dragon",
  reactions: [],
  saveDc: 14,
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
  senses: "blindsight 30 ft., darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    fly: 80,
    land: 40,
    swim: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
