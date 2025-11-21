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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 5,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 30,
      damageExpression: "4d12 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*30 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 30 (4d12 + 4) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 28,
      description:
        "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
      name: "Deadly Leap",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Bulette",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "darkvision 60 ft., tremorsense 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.STANDING_LEAP(15, 30)],
  speed: {
    burrow: 40,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
