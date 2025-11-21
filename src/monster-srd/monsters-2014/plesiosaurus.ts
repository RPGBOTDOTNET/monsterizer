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
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 5,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "3d6 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*14 Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 14 (3d6 + 4) piercing damage.",
      name: "Bite",
      reach: 10,
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
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dinosaurs",
  hitDice: {
    count: 8,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Plesiosaurus",
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
  specialTraits: [SPECIAL_TRAITS.HOLD_BREATH("1 hour")],
  speed: {
    land: 20,
    swim: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
