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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 15,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageType: DamageTypes.Lightning,
      description:
        "*8 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Breath (Recharge 5-6)",
      reusable: 1,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Lightning],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "Draconic",
  name: "Blue Dragon Wyrmling",
  reactions: [],
  saveDc: 12,
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
