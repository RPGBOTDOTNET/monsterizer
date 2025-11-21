import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 3,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 1,
      damageExpression: "1",
      damageType: DamageTypes.Slashing,
      description:
        "*Melee Weapon Attack:* +0 to hit, reach 5 ft., one target. *Hit:* 1 slashing damage.",
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
  name: "Cat",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell")],
  speed: {
    climb: 40,
    land: 30,
  },
  usesAttackBonus: true,
  size: CreatureSizes.Tiny,
  _ruleset: "2014",
} as Monster;
