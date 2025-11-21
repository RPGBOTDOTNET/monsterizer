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
    [AbilityScores.Strength]: 23,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 9,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 38,
      description: "The giant makes two greatclub attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 19,
      damageExpression: "3d8 + 6",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*19 Attack:* +9 to hit, reach 15 ft., one target. *Hit:* 19 (3d8 + 6) bludgeoning damage.",
      name: "Greatclub",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 28,
      description:
        "*Ranged Weapon Attack:* +9 to hit, range 60/240 ft., one target. *Hit:* 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
      name: "Rock",
      range: "60/240",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "7",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Giants",
  hitDice: {
    count: 11,
    size: "d12",
    modifier: 0,
  },
  languages: "Giant",
  name: "Stone Giant",
  reactions: [
    {
      averageDamage: 0,
      description:
        "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.",
      name: "Rock Catching",
      reusable: 3,
      targets: 0,
    },
  ],
  saveDc: 17,
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
  },
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Stone", "in rocky terrain"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
