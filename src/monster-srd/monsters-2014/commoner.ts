import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 10,
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
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.",
  group: "NPCs",
  hitDice: {
    count: 1,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Commoner",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
