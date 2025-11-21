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
    [AbilityScores.Strength]: 29,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 18,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 60,
      description: "The giant makes two greatsword attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 14,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 30,
      damageExpression: "6d6 + 9",
      damageType: DamageTypes.Slashing,
      description:
        "*30 Attack:* +14 to hit, reach 10 ft., one target. *Hit:* 30 (6d6 + 9) slashing damage.",
      name: "Greatsword",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 14,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 35,
      description:
        "*Ranged Weapon Attack:* +14 to hit, range 60/240 ft., one target. *Hit:* 35 (4d12 + 9) bludgeoning damage.",
      name: "Rock",
      range: "60/240",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 54,
      description:
        "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Strike (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 14,
  cantSpeak: false,
  challenge: "13",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [DamageTypes.Lightning, DamageTypes.Thunder],
  damageResistances: [DamageTypes.Cold],
  damageVulnerabilities: [],
  description: "",
  group: "Giants",
  hitDice: {
    count: 20,
    size: "d12",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 17,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      {
        castingTime: ActionTypes.Reaction,
        name: "feather fall",
      },
      {
        castingTime: ActionTypes.Action,
        name: "levitate",
      },
      {
        castingTime: ActionTypes.Action,
        name: "light",
      },
      // 3/day
      {
        castingTime: "Other",
        name: "control weather",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "water breathing",
        recharge: RestTypes.Long,
        uses: 3,
      },
    ],
  },
  languages: "Common, Giant",
  name: "Storm Giant",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
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
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 50,
    swim: 50,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "scale",
  _ruleset: "2014",
} as Monster;
