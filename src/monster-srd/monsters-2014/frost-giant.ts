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
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 12,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 50,
      description: "The giant makes two greataxe attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 25,
      damageExpression: "3d12 + 6",
      damageType: DamageTypes.Slashing,
      description:
        "*25 Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 25 (3d12 + 6) slashing damage.",
      name: "Greataxe",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 28,
      description:
        "*Ranged Weapon Attack:* +9 to hit, range 60/240 ft., one target. *Hit:* 28 (4d10 + 6) bludgeoning damage.",
      name: "Rock",
      range: "60/240",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [DamageTypes.Cold],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Giants",
  hitDice: {
    count: 12,
    size: "d12",
    modifier: 0,
  },
  languages: "Giant",
  name: "Frost Giant",
  reactions: [],
  savingThrows: {
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
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "patchwork",
  _ruleset: "2014",
} as Monster;
