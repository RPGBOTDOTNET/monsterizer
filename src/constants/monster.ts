import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  type Monster,
  Skills,
  SpellcastingTypes,
} from "../types";
import { MONSTERIZER_VERSION } from "./other";

export const EMPTY_MONSTER: Monster = {
  _monsterizerVersion: MONSTERIZER_VERSION,
  _ruleset: "2014",
  abilityScores: {
    [AbilityScores.Strength]: 0,
    [AbilityScores.Dexterity]: 0,
    [AbilityScores.Constitution]: 0,
    [AbilityScores.Intelligence]: 0,
    [AbilityScores.Wisdom]: 0,
    [AbilityScores.Charisma]: 0,
  },
  ac: 0,
  acNotes: undefined,
  actions: [],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: undefined,
  bonusActions: [],
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  conditionResistances: [],
  conditionVulnerabilities: [],
  creatureType: "",
  creatureSubtype: "",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  hitDice: {
    count: 0,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: undefined,
  inventory: "",
  lairActions: [],
  languages: "",
  legendaryActions: [],
  legendaryActionsCount: undefined,
  name: "",
  nameShort: "",
  reactions: [],
  saveDc: undefined,
  savingThrows: {
    [AbilityScores.Strength]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [AbilityScores.Dexterity]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [AbilityScores.Constitution]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [AbilityScores.Intelligence]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [AbilityScores.Wisdom]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [AbilityScores.Charisma]: {
      additionalBonus: 0,
      proficient: 0,
    },
  },
  senses: "",
  skills: {
    //Str
    [Skills.Athletics]: {
      additionalBonus: 0,
      proficient: 0,
    },
    //Dex
    [Skills.Acrobatics]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.SleightOfHand]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Stealth]: {
      additionalBonus: 0,
      proficient: 0,
    },
    //Int
    [Skills.Arcana]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.History]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Investigation]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Nature]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Religion]: {
      additionalBonus: 0,
      proficient: 0,
    },
    //Wis
    [Skills.AnimalHandling]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Insight]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Medicine]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Perception]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Survival]: {
      additionalBonus: 0,
      proficient: 0,
    },
    //Cha
    [Skills.Deception]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Intimidation]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Performance]: {
      additionalBonus: 0,
      proficient: 0,
    },
    [Skills.Persuasion]: {
      additionalBonus: 0,
      proficient: 0,
    },
  },
  specialTraits: undefined,
  spellcasting: [],
  speed: {
    burrow: 0,
    climb: 0,
    hover: false,
    fly: 0,
    land: 0,
    swim: 0,
  },
  size: CreatureSizes.Medium,
  tactics: undefined,
  usesAttackBonus: true,
};

export const testWarlock: Monster = {
  ...EMPTY_MONSTER,
  spellcasting: [
    {
      casterLevel: 3,
      knowsSpells: true,
      spellcastingAbility: AbilityScores.Charisma,
      spells: {
        cantrips: [
          {
            castingTime: ActionTypes.Action,
            damage: 5.5,
            name: "eldritch blast",
            targets: 1,
          },
        ],
        1: [
          {
            castingTime: ActionTypes.Reaction,
            damage: 16.5,
            name: "hellish rebuke (2nd level)",
            targets: 1,
          },
          {
            castingTime: ActionTypes.BonusAction,
            name: "hex",
          },
          {
            castingTime: ActionTypes.Action,
            damage: 13.5,
            name: "shatter",
            targets: 2,
          },
        ],
      },
      type: SpellcastingTypes.PactMagic,
    },
  ],
};
