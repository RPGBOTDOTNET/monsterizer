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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "1d12 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*9 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 9 (1d12 + 3) slashing damage.",
      name: "Greataxe",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 6,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 30/120 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage.",
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
  attack: 5,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "orc",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "Common, Orc",
  name: "Orc",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Intimidation]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AGGRESSIVE()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "hide",
  _ruleset: "2014",
} as Monster;
