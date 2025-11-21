import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 4 (1d6 + 1)  piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
      name: "Spear",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Guards include members of a city watch, sentries in a citadel or fortified town, and the bodyguards of merchants and nobles.",
  group: "NPCs",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Guard",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "chain",
  _ruleset: "2014",
} as Monster;
