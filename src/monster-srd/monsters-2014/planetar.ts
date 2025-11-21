import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 24,
    [AbilityScores.Dexterity]: 20,
    [AbilityScores.Constitution]: 24,
    [AbilityScores.Intelligence]: 19,
    [AbilityScores.Wisdom]: 22,
    [AbilityScores.Charisma]: 25,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 86,
      description: "The planetar makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 43,
      damageType: DamageTypes.Radiant,
      description:
        "*43 Attack:* +12 to hit, reach 5 ft., one target. *Hit:* 43 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.",
      name: "Greatsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      name: "Healing Touch (4/Day)",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 12,
  cantSpeak: false,
  challenge: "16",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
  ],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Radiant,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Angels",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 20,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect evil and good",
      },
      {
        castingTime: ActionTypes.Action,
        name: "invisibility",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        damage: 33,
        name: "blade barrier",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "dispel evil and good",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        damage: 28,
        name: "flame strike",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "raise dead",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "commune",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "control weather",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        damage: 22,
        name: "insect plague",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 1,
      },
    ],
  },
  languages: "all, telepathy 120 ft.",
  name: "Planetar",
  reactions: [],
  saveDc: 20,
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
  senses: "truesight 120 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.ANGELIC_WEAPONS(),
    SPECIAL_TRAITS.DIVINE_AWARENESS(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 120,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
