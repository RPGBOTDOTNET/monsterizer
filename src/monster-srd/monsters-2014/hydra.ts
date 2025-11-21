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
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 7,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 20,
      description: "The hydra makes as many bite attacks as it has heads.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "1d10 + 5",
      damageType: DamageTypes.Piercing,
      description:
        "*10 Attack:* +8 to hit, reach 10 ft., one target. *Hit:* 10 (1d10 + 5) piercing damage.",
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
  attack: 8,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 15,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Hydra",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.HOLD_BREATH("1 hour"),
    SPECIAL_TRAITS.MULTIPLE_HEADS(25, 10, "five"),
    SPECIAL_TRAITS.REACTIVE_HEADS(),
    SPECIAL_TRAITS.WAKEFUL(),
  ],
  speed: {
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
