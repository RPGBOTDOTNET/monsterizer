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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 6,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 5,
  },
  ac: 8,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*13 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) bludgeoning damage.",
      name: "Morningstar",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: true,
  challenge: "2",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Zombies",
  hitDice: {
    count: 9,
    size: "d10",
    modifier: 0,
  },
  languages: "Common and Giant",
  name: "Ogre Zombie",
  reactions: [],
  savingThrows: {
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.UNDEAD_FORTITUDE()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
