import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  Skills,
  SpellcastingTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 11,
  },
  ac: 11,
  acNotes: "16 with barkskin",
  actions: [
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. *Hit:* 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh.",
      name: "Quarterstaff",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
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
    "Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.",
  group: "NPCs",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Druid",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Nature]: {
      proficient: 1,
    },
    [Skills.Medicine]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  spellcasting: [
    {
      casterLevel: 4,
      class: "druid",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "druidcraft" },
          {
            castingTime: ActionTypes.Action,
            damage: 4.5,
            name: "produce flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "shillelagh" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "entangle" },
          { castingTime: ActionTypes.Action, name: "longstrider" },
          { castingTime: ActionTypes.Action, name: "speak with animals" },
          {
            castingTime: ActionTypes.Action,
            damage: 9,
            name: "thunderwave",
            targets: 2,
          },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "animal messenger" },
          { castingTime: ActionTypes.Action, name: "barkskin" },
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
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
