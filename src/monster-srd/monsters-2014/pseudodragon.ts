import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 6,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 10,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d4 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*4 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.",
      name: "Sting",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Good",
  },
  attack: 4,
  cantSpeak: true,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d4",
    modifier: 0,
  },
  languages: "Common and Draconic",
  name: "Pseudodragon",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "blindsight 10 ft., darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Senses", "sight, hearing, or smell"),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.LIMITED_TELEPATHY_B(100),
  ],
  speed: {
    fly: 60,
    land: 15,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
