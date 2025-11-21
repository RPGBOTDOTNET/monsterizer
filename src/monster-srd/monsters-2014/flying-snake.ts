import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 4,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 5,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 1 piercing damage plus 7 (3d4) poison damage.",
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
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A flying snake is a brightly colored, winged serpent found in remote jungles. Tribespeople and cultists sometimes domesticate flying snakes to serve as messengers that deliver scrolls wrapped in their coils.",
  group: "",
  hitDice: {
    count: 2,
    size: "d4",
    modifier: 0,
  },
  languages: "",
  name: "Flying Snake",
  nameShort: "snake",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 10 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FLYBY()],
  speed: {
    fly: 60,
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
