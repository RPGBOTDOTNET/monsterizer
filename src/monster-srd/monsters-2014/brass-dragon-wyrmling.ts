import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 13,
  },
  ac: 16,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 7,
      damageExpression: "1d10 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*7 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7 (1d10 + 2) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: "The dragon uses one of the following breath weapons.",
      name: "Breath Weapons (Recharge 5-6)",
      reusable: 0,
      targets: 0,
    },
    {
      averageDamage: 14,
      description:
        "The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Fire Breath",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 0,
      description:
        "The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
      name: "Sleep Breath",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Metallic",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "Draconic",
  name: "Brass Dragon Wyrmling",
  reactions: [],
  saveDc: 11,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
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
  senses: "blindsight 10 ft., darkvision 60 ft.",
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
    burrow: 15,
    fly: 60,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
