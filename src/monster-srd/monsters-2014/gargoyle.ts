import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 7,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 15,
      description:
        "The gargoyle makes two attacks: one with its bite and one with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d6 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d6 + 2",
      damageType: DamageTypes.Slashing,
      description:
        "*5 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [
    Conditions.Exhaustion,
    Conditions.Petrified,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Terran",
  name: "Gargoyle",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FALSE_APPEARANCE("an inanimate statue")],
  speed: {
    fly: 60,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
