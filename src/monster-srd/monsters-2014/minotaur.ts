import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 9,
  },
  ac: 14,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d12 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*17 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 17 (2d12 + 4) slashing damage.",
      name: "Greataxe",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*13 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) piercing damage.",
      name: "Gore",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "3",
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
  languages: "Abyssal",
  name: "Minotaur",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.CHARGE_TOPPLING(9, "2d8", "", 14, 10, "Charge", "gore"),
    SPECIAL_TRAITS.LABYRINTHINE_RECALL(),
    SPECIAL_TRAITS.RECKLESS(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
