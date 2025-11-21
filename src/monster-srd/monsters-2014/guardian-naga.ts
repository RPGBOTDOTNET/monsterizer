import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 19,
    [AbilityScores.Charisma]: 18,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 53,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one creature. *Hit:* 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 45,
      description:
        "*Ranged Weapon Attack:* +8 to hit, range 15/30 ft., one creature. *Hit:* The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Spit Poison",
      range: "15/30",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "10",
  conditionImmunities: [Conditions.Charmed, Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Nagas",
  hitDice: {
    count: 15,
    size: "d10",
    modifier: 0,
  },
  languages: "Celestial, Common",
  name: "Guardian Naga",
  reactions: [],
  saveDc: 16,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.REJUVENATION(
      "Rejuvenation",
      "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
    ),
  ],
  spellcasting: [
    {
      casterLevel: 11,
      class: "cleric",
      extraText: "it needs only verbal components to cast its spells",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "mending" },
          {
            castingTime: ActionTypes.Action,
            damage: 13.5,
            name: "sacred flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "thaumaturgy" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "command" },
          { castingTime: ActionTypes.Action, name: "cure wounds" },
          { castingTime: ActionTypes.Action, name: "shield of faith" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "calm emotions" },
          { castingTime: ActionTypes.Action, name: "hold person" },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "bestow curse" },
          { castingTime: ActionTypes.Action, name: "clairvoyance" },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "banishment" },
          { castingTime: ActionTypes.Action, name: "freedom of movement" },
        ],
        5: [
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "flame strike",
            targets: 2,
          },
          { castingTime: "Other", name: "geas" },
        ],
        6: [{ castingTime: ActionTypes.Action, name: "true seeing" }],
      },
      spellAttack: 8,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 16,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: false,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
