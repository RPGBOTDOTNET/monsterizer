import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 11,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 10,
      description: "The thug makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 5 (1d6 + 2) bludgeoning damage.",
      name: "Mace",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 2,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +2 to hit, range 100/400 ft., one target. *Hit:* 5 (1d10) piercing damage.",
      name: "Heavy Crossbow",
      range: "100/400",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "non-good",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.",
  group: "NPCs",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Thug",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Intimidation]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.PACK_TACTICS()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "leather",
  _ruleset: "2014",
} as Monster;
