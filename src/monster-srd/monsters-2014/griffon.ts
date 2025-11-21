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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 30,
      description:
        "The griffon makes two attacks: one with its beak and one with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "1d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*8 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8 (1d8 + 4) piercing damage.",
      name: "Beak",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*11 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Griffon",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Sight", "sight")],
  speed: {
    fly: 80,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
