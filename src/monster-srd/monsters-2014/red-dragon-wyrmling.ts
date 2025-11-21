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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 15,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 12,
      damageType: DamageTypes.Fire,
      description:
        "*12 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12 (1d10 + 4) piercing damage plus 3 (1d6) fire damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 24,
      description:
        "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Fire Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 10,
    size: "d8",
    modifier: 0,
  },
  languages: "Draconic",
  name: "Red Dragon Wyrmling",
  reactions: [],
  saveDc: 13,
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
    fly: 60,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
