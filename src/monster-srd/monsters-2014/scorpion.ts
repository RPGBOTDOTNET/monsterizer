import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 2,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature. *Hit:* 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Sting",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 2,
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
    modifier: -1,
  },
  languages: "",
  name: "Scorpion",
  reactions: [],
  saveDc: 9,
  savingThrows: {},
  senses: "blindsight 10 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    land: 10,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
