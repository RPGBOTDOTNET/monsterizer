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
    [AbilityScores.Strength]: 6,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d4 + 2",
      damageType: DamageTypes.Slashing,
      description:
        "*4 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) slashing damage.",
      name: "Talons",
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
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 1,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Eagle",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Sight", "sight")],
  speed: {
    fly: 60,
    land: 10,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
