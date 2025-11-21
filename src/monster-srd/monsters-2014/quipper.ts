import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 9,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 2,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 1 piercing damage.",
      name: "Bite",
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
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A quipper is a carnivorous fish with sharp teeth. Quippers can adapt to any aquatic environment, including cold subterranean lakes. They frequently gather in swarms; the statistics for a swarm of quippers appear later in this appendix.",
  group: "",
  hitDice: {
    count: 1,
    size: "d4",
    modifier: -1,
  },
  languages: "",
  name: "Quipper",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.BLOOD_FRENZY(),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 0,
    swim: 40,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
