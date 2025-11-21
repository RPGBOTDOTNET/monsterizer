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
    [AbilityScores.Strength]: 25,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 23,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 13,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 56,
      description: "The giant makes two greatsword attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 11,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 28,
      damageExpression: "6d6 + 7",
      damageType: DamageTypes.Slashing,
      description:
        "*28 Attack:* +11 to hit, reach 10 ft., one target. *Hit:* 28 (6d6 + 7) slashing damage.",
      name: "Greatsword",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 11,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 29,
      description:
        "*Ranged Weapon Attack:* +11 to hit, range 60/240 ft., one target. *Hit:* 29 (4d10 + 7) bludgeoning damage.",
      name: "Rock",
      range: "60/240",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 11,
  cantSpeak: false,
  challenge: "9",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Giants",
  hitDice: {
    count: 13,
    size: "d12",
    modifier: 0,
  },
  languages: "Giant",
  name: "Fire Giant",
  reactions: [],
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "plate",
  _ruleset: "2014",
} as Monster;
