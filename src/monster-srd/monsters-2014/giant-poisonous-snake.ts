import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 16,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Giant Poisonous Snake",
  nameShort: "snake",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "blindsight 10 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
