import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 3,
  },
  ac: 10,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +0 to hit, reach 5 ft., one target. *Hit:* 1 piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 0,
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
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
  languages: "",
  name: "Lizard",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {},
  specialTraits: [],
  speed: { climb: 20, land: 20 },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
