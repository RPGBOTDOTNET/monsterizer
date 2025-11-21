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
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 3,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 1,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 2,
      damageExpression: "1d6 − 1",
      damageType: DamageTypes.Slashing,
      description:
        "*2 Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 2 (1d6 − 1) slashing damage.",
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
  attack: 1,
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A giant fire beetle is a nocturnal creature that takes its name from a pair of glowing glands that give off light. Miners and adventurers prize these creatures, for a giant fire beetle's glands continue to shed light for 1d6 days after the beetle dies. Giant fire beetles are most commonly found underground and in dark forests.",
  group: "",
  hitDice: {
    count: 1,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Giant Fire Beetle",
  nameShort: "beetle",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.ILLUMINATION(10)],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
