import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 2,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 8,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 2,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 3,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
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
  name: "Spider",
  reactions: [],
  saveDc: 9,
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SPIDER_CLIMB(),
    SPECIAL_TRAITS.WEB_SENSE(),
    SPECIAL_TRAITS.WEB_WALKER(),
  ],
  speed: {
    climb: 20,
    land: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
