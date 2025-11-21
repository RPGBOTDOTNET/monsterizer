import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 4,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 6,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:* 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss." +
        "The stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
      name: "Blood Drain",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1/8",
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
  name: "Stirge",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    fly: 40,
    land: 10,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
