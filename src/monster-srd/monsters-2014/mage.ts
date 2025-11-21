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

export default {
  abilityScores: {
    [AbilityScores.Strength]: 9,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 17,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 11,
  },
  ac: 12,
  acNotes: "15 with mage armor",
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 4,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 4 (1d4 + 1) piercing damage.",
      name: "Dagger",
      range: "20/60",
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
  challenge: "6",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Mages spend their lives in the study and practice of magic. Good-aligned mages offer counsel to nobles and others in power, while evil mages dwell in isolated sites to perform unspeakable experiments without interference.",
  group: "",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "any four languages",
  name: "Mage",
  reactions: [],
  saveDc: 14,
  savingThrows: {
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  spellcasting: [
    {
      casterLevel: 9,
      class: "",
      knowsSpells: false,
      spells: {
        cantrips: [
          {
            castingTime: ActionTypes.Action,
            damage: 11,
            name: "fire bolt",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "light" },
          { castingTime: ActionTypes.Action, name: "mage hand" },
          { castingTime: ActionTypes.Action, name: "prestidigitation" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "detect magic" },
          { castingTime: ActionTypes.Action, name: "mage armor" },
          {
            castingTime: ActionTypes.Action,
            damage: 10.5,
            name: "magic missile",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "shield" },
        ],
        2: [
          { castingTime: ActionTypes.BonusAction, name: "misty step" },
          { castingTime: ActionTypes.Action, name: "suggestion" },
        ],
        3: [
          { castingTime: ActionTypes.Reaction, name: "counterspell" },
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "fireball",
            targets: 2,
          },
          { castingTime: ActionTypes.Action, name: "fly" },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "greater invisibility" },
          {
            castingTime: ActionTypes.Action,
            damage: 23,
            name: "ice storm",
            targets: 2,
          },
        ],
        5: [
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "cone of cold",
            targets: 2,
          },
        ],
      },
      spellAttack: 6,
      spellcastingAbility: AbilityScores.Intelligence,
      spellDc: 14,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  _ruleset: "2014",
} as Monster;
