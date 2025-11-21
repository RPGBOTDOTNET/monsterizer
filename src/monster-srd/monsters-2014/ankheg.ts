import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 6,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
      name: "Acid Spray (Recharge 6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Ankheg",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft., tremorsense 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    burrow: 10,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
