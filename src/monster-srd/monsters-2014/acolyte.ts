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
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 11,
  },
  ac: 10,
  actions: [
    {
      attackModifier: 2,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 2,
      damageExpression: "1d4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*2 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 2 (1d4) bludgeoning damage.",
      name: "Club",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.",
  group: "",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Acolyte",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Religion]: {
      proficient: 1,
    },
    [Skills.Medicine]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  spellcasting: [
    {
      casterLevel: 1,
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
          { castingTime: ActionTypes.Action, name: "bless" },
          { castingTime: ActionTypes.Action, name: "cure wounds" },
          { castingTime: ActionTypes.Action, name: "sanctuary" },
        ],
      },
      spellAttack: 4,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 12,
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
