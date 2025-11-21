import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 13,
  },
  ac: 13,
  acNotes: "chain",
  actions: [
    {
      attackModifier: 2,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d6",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*3 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 3 (1d6) bludgeoning damage.",
      name: "Mace",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: `Priests bring the teachings of their gods to the common folk. They are the spiritual leaders of temples and shrines and often hold positions of influence in their communities. Evil priests might work openly under a tyrant, or they might be the leaders of religious sects hidden in the shadows of good society, overseeing depraved rites.
A priest typically has one or more acolytes to help with religious ceremonies and other sacred duties.`,
  group: "",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "any two languages",
  name: "Priest",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Religion]: {
      proficient: 1,
    },
    [Skills.Medicine]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.DIVINE_EMINENCE()],
  spellcasting: [
    {
      casterLevel: 5,
      class: "cleric",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "light" },
          {
            castingTime: ActionTypes.Action,
            damage: 9,
            name: "sacred flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "thaumaturgy" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "cure wounds" },
          {
            castingTime: ActionTypes.Action,
            damage: 14,
            name: "guiding bolt",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "sanctuary" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "lesser restoration" },
          {
            castingTime: ActionTypes.Action,
            damage: 7.5 * 3,
            name: "spiritual weapon",
            targets: 1,
          },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "dispel magic" },
          {
            castingTime: ActionTypes.Action,
            damage: 13.5 * 3,
            name: "spirit guardians",
            targets: 2,
          },
        ],
      },
      spellAttack: 5,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 13,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 25,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  _ruleset: "2014",
} as Monster;
