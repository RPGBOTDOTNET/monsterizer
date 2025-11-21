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
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 6,
  },
  ac: 20,
  actions: [
    {
      averageDamage: 22,
      description:
        "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageExpression: "4d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*22 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 22 (4d8 + 4) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 50 ft., one creature. *Hit:* The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target.",
      name: "Tendril",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The roper pulls each creature grappled by it up to 25 feet straight toward it.",
      name: "Reel",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 11,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Roper",
  reactions: [],
  saveDc: 15,
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
    SPECIAL_TRAITS.FALSE_APPEARANCE(
      "a normal cave formation, such as a stalagmite",
    ),
    SPECIAL_TRAITS.GRASPING_TENDRILS(20, 15, 6, 10),
    SPECIAL_TRAITS.SPIDER_CLIMB(),
  ],
  speed: {
    climb: 10,
    land: 10,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
