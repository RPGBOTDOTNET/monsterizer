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
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 11,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d6 + 1",
      damageType: DamageTypes.Piercing,
      description:
        "*4 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.",
      name: "Teleport (Recharge 4-6)",
      reusable: 2,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fey",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm. Blink dogs harbor a long- standing hatred for displacer beasts and attack them on sight.",
  group: "",
  hitDice: {
    count: 4,
    size: "d8",
    modifier: 0,
  },
  languages: "Blink Dog, understands Sylvan but can't speak it",
  name: "Blink Dog",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
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
