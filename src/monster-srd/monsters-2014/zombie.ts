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
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 6,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 5,
  },
  ac: 8,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d6 + 1",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*4 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) bludgeoning damage.",
      name: "Slam",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 3,
  cantSpeak: true,
  challenge: "1/4",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Zombies",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Zombie",
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
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
