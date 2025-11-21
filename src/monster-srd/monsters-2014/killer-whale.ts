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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 42,
      damageExpression: "5d6 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*42 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 42 (5d6 + 4) piercing damage.",
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
  attack: 6,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Killer Whale",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 120 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.ECHOLOCATION(),
    SPECIAL_TRAITS.HOLD_BREATH("30 minutes"),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing", "hearing"),
  ],
  speed: {
    land: 0,
    swim: 60,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
