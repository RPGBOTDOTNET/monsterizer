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
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "1d10 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*8 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8 (1d10 + 3) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 7,
      damageExpression: "1d8 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*7 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
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
  name: "Tiger",
  reactions: [],
  saveDc: 13,
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
    SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell"),
    SPECIAL_TRAITS.POUNCE("claw", 8, 13, 20, "bite"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
