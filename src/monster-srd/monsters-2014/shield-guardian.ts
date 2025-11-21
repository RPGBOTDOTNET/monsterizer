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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 22,
      description: "The guardian makes two fist attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Fist",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 7,
  cantSpeak: true,
  challenge: "7",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "construct",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 15,
    size: "d10",
    modifier: 0,
  },
  languages: "commands given in any language",
  name: "Shield Guardian",
  reactions: [
    {
      averageDamage: 0,
      description:
        "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer.",
      name: "Shield",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {},
  senses: "blindsight 10 ft., darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.BOUND("amulet", 60),
    SPECIAL_TRAITS.REGENERATION(10),
    SPECIAL_TRAITS.SPELL_STORING(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
