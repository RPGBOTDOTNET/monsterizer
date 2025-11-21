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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 6,
  },
  ac: 15,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageType: DamageTypes.Fire,
      description:
        "*14 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 14 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 21,
      description:
        "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Fire Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: true,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal",
  name: "Hell Hound",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
