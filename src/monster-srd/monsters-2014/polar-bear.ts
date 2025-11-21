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
    [AbilityScores.Strength]: 20,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 21,
      description:
        "The bear makes two attacks: one with its bite and one with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "1d8 + 5",
      damageType: DamageTypes.Piercing,
      description:
        "*9 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 9 (1d8 + 5) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 12,
      damageExpression: "2d6 + 5",
      damageType: DamageTypes.Slashing,
      description:
        "*12 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 12 (2d6 + 5) slashing damage.",
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
  attack: 7,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 5,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Polar Bear",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell")],
  speed: {
    land: 40,
    swim: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
