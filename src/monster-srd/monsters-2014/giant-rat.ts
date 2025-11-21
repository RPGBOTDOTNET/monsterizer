import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 7,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d4 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*4 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Giant Rat",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell"),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
