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
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 5,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d4 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*4 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Beak",
      reach: 5,
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
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Taking its name from its crimson feathers and aggressive nature, the blood hawk fearlessly attacks almost any animal, stabbing it with its daggerlike beak. Blood hawks flock together in large numbers, attacking as a pack to take down prey.",
  group: "",
  hitDice: {
    count: 2,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Blood Hawk",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Sight", "sight"),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    fly: 60,
    land: 10,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
