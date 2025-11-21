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
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 14,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 8,
      description: "The fanatic makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 4,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Dagger",
      range: "20/60",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "non-good",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else.",
  group: "NPCs",
  hitDice: {
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Cult Fanatic",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Religion]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.DARK_DEVOTION()],
  spellcasting: [
    {
      casterLevel: 4,
      class: "cleric",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "light" },
          {
            castingTime: ActionTypes.Action,
            damage: 4.5,
            name: "sacred flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "thaumaturgy" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "command" },
          {
            castingTime: ActionTypes.Action,
            damage: 16.5,
            name: "inflict wounds",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "shield of faith" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "hold person" },
          {
            castingTime: ActionTypes.BonusAction,
            damage: 5.5 * 3,
            name: "spiritual weapon",
            targets: 1,
          },
        ],
      },
      spellAttack: 3,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 11,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  acNotes: "leather",
  _ruleset: "2014",
} as Monster;
