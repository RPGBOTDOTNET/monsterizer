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
    [AbilityScores.Strength]: 23,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 44,
      description: "The ape makes two fist attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageExpression: "3d10 + 6",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*22 Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 22 (3d10 + 6) bludgeoning damage.",
      name: "Fist",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 30,
      description:
        "*Ranged Weapon Attack:* +9 to hit, range 50/100 ft., one target. *Hit:* 30 (7d6 + 6) bludgeoning damage.",
      name: "Rock",
      range: "50/100",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "7",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 15,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Giant Ape",
  reactions: [],
  savingThrows: {},
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
    climb: 40,
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
