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
    [AbilityScores.Strength]: 28,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 9,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 73,
      description:
        "The roc makes two attacks: one with its beak and one with its talons.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 27,
      damageExpression: "4d8 + 9",
      damageType: DamageTypes.Piercing,
      description:
        "*27 Attack:* +13 to hit, reach 10 ft., one target. *Hit:* 27 (4d8 + 9) piercing damage.",
      name: "Beak",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 23,
      description:
        "*Melee Weapon Attack:* +13 to hit, reach 5 ft., one target. *Hit:* 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.",
      name: "Talons",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 13,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 16,
    size: "d20",
    modifier: 0,
  },
  languages: "",
  name: "Roc",
  reactions: [],
  saveDc: 19,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.KEEN_SENSES("Sight", "sight")],
  speed: {
    fly: 120,
    land: 20,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
