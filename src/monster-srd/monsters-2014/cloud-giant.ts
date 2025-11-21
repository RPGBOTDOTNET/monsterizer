import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 27,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 16,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 42,
      description: "The giant makes two morningstar attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 21,
      damageExpression: "3d8 + 8",
      damageType: DamageTypes.Piercing,
      description:
        "*21 Attack:* +12 to hit, reach 10 ft., one target. *Hit:* 21 (3d8 + 8) piercing damage.",
      name: "Morningstar",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 30,
      description:
        "*Ranged Weapon Attack:* +12 to hit, range 60/240 ft., one target. *Hit:* 30 (4d10 + 8) bludgeoning damage.",
      name: "Rock",
      range: "60/240",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Good",
  },
  attack: 12,
  cantSpeak: false,
  challenge: "9",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Giants",
  hitDice: {
    count: 16,
    size: "d12",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 15, // Filled this in based on stats
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // At will
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      {
        castingTime: ActionTypes.Action,
        name: "fog cloud",
      },
      {
        castingTime: ActionTypes.Action,
        name: "light",
      },
      // 3/day
      {
        castingTime: ActionTypes.Reaction,
        name: "feather fall",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "fly",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.BonusAction,
        name: "misty step",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "telekinesis",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "control weather",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "gaseous form",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Common, Giant",
  name: "Cloud Giant",
  reactions: [],
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell")],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
