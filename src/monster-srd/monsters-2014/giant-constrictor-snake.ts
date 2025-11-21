import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one creature. *Hit:* 11 (2d6 + 4) piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 13,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
      name: "Constrict",
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
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 8,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Giant Constrictor Snake",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "blindsight 10 ft.",
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
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
