import {
  AbilityScores,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Mastiffs are impressive hounds prized by humanoids for their loyalty and keen senses. Mastiffs can be trained as guard dogs, hunting dogs, and war dogs. Halflings and other Small humanoids ride them as mounts.",
  group: "",
  hitDice: {
    count: 1,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Mastiff",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
