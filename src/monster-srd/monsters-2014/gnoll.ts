import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 7,
  },
  ac: 15,
  acNotes: "hide",
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
      name: "Spear",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +3 to hit, range 150/600 ft., one target. *Hit:* 5 (1d8 + 1) piercing damage.",
      name: "Longbow",
      range: "150/600",
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
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "gnoll",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "Gnoll",
  name: "Gnoll",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.RAMPAGE("bite", 4)],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
