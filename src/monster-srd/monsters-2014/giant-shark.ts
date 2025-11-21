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
    [AbilityScores.Strength]: 23,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 5,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageExpression: "3d10 + 6",
      damageType: DamageTypes.Piercing,
      description:
        "*22 Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 22 (3d10 + 6) piercing damage.",
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
  attack: 9,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.",
  group: "",
  hitDice: {
    count: 11,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Giant Shark",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.BLOOD_FRENZY(),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 0,
    swim: 50,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
