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
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 28,
      description:
        "The ettin makes two attacks: one with its battleaxe and one with its morningstar.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "2d8 + 5",
      damageType: DamageTypes.Slashing,
      description:
        "*14 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14 (2d8 + 5) slashing damage.",
      name: "Battleaxe",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "2d8 + 5",
      damageType: DamageTypes.Piercing,
      description:
        "*14 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 14 (2d8 + 5) piercing damage.",
      name: "Morningstar",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 10,
    size: "d10",
    modifier: 0,
  },
  languages: "Giant, Orc",
  name: "Ettin",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.TWO_HEADS(), SPECIAL_TRAITS.WAKEFUL()],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
