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
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 9,
  },
  ac: 16,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d8 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*11 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 11 (2d8 + 2) piercing damage.",
      name: "Morningstar",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 9,
      attackModifier: 5,
      attackType: AttackTypes.EitherWeapon,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 30/120 ft., one target. *Hit:* 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.",
      name: "Javelin",
      range: "30/120",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "goblinoid",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "Common, Goblin",
  name: "Bugbear",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Survival]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.BRUTE(),
    SPECIAL_TRAITS.SURPRISE_ATTACK(7, "2d6"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "hide",
  _ruleset: "2014",
} as Monster;
