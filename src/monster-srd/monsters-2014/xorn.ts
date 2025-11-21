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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 11,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 31,
      description: "The xorn makes three claw attacks and one bite attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d6 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*6 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "3d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*13 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (3d6 + 3) piercing damage.",
      name: "Bite",
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
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [],
  damageResistances: [
    "piercing and slashing from nonmagical attacks that aren't adamantine",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Terran",
  name: "Xorn",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft., tremorsense 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.EARTH_GLIDE(),
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Stone", "in rocky terrain"),
    SPECIAL_TRAITS.TREASURE_SENSE(60),
  ],
  speed: {
    burrow: 20,
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
