import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 3,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 11,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 1 slashing damage.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 1,
      description:
        "*Ranged Weapon Attack:* +6 to hit, range 40/160 ft., one target. *Hit:* 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.",
      name: "Shortbow",
      range: "40/160",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw.",
      name: "Heart Sight",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.",
      name: "Invisibility",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Good",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fey",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 1,
    size: "d4",
    modifier: 0,
  },
  languages: "Common, Elvish, Sylvan",
  name: "Sprite",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    fly: 40,
    land: 10,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  acNotes: "leather",
  _ruleset: "2014",
} as Monster;
