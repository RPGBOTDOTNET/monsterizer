import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 9,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +3 to hit, range 150/600 ft., one target. *Hit:* 5 (1d8 + 1) piercing damage.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "goblinoid",
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
  languages: "Common, Goblin",
  name: "Hobgoblin",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.MARTIAL_ADVANTAGE(7, "2d6")],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "chain",
  _ruleset: "2014",
} as Monster;
