import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 12,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 33,
      description:
        "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      attackType: AttackTypes.MeleeWeapon,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      attackType: AttackTypes.MeleeWeapon,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 11,
      description:
        "*Ranged Weapon Attack:* +6 to hit, range 150/600 ft., one target. *Hit:* 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 13,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Wisdom,
    spellDc: 13,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "dancing lights",
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "darkness",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "faerie fire",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Elvish, Undercommon",
  name: "Drider",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.FEY_ANCESTRY(),
    SPECIAL_TRAITS.SPIDER_CLIMB(),
    SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY(),
    SPECIAL_TRAITS.WEB_WALKER(),
  ],
  speed: {
    climb: 30,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
