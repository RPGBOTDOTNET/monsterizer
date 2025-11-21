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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 13,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 6,
  cantSpeak: true,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d10",
    modifier: 0,
  },
  languages: "Celestial, Common, Elvish, and Sylvan",
  name: "Pegasus",
  reactions: [],
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    fly: 90,
    land: 60,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
