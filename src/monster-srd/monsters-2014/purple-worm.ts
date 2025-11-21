import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 28,
    [AbilityScores.Dexterity]: 7,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 4,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 104,
      description:
        "The worm makes two attacks: one with its bite and one with its stinger.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns." +
        "If the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 61,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one creature. *Hit:* 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Tail Stinger",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 14,
  cantSpeak: false,
  challenge: "15",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 15,
    size: "d20",
    modifier: 0,
  },
  languages: "",
  name: "Purple Worm",
  reactions: [],
  saveDc: 19,
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "blindsight 30 ft., tremorsense 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.TUNNELER(10), SPECIAL_TRAITS.SWALLOW(21)],
  speed: {
    burrow: 30,
    land: 50,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
