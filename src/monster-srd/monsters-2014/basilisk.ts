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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 7,
  },
  ac: 15,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageType: DamageTypes.Poison,
      description:
        "*17 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
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
  attack: 5,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Basilisk",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.PETRIFYING_GAZE(14)],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Medium,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
