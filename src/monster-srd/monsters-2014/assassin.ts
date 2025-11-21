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
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 60,
      description: "The assassin makes two shortsword attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 30,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Shortsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 31,
      description:
        "*Ranged Weapon Attack:* +6 to hit, range 80/320 ft., one target. *Hit:* 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Light Crossbow",
      range: "80/320",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "non-good",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [DamageTypes.Poison],
  damageVulnerabilities: [],
  description:
    "Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.",
  group: "NPCs",
  hitDice: {
    count: 12,
    size: "d8",
    modifier: 0,
  },
  languages: "Thieves' cant plus any two languages",
  name: "Assassin",
  reactions: [],
  saveDc: 15,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Acrobatics]: {
      proficient: 1,
    },
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.ASSASSINATE(),
    SPECIAL_TRAITS.EVASION(),
    SPECIAL_TRAITS.SNEAK_ATTACK(14, "4d6"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "studded",
  _ruleset: "2014",
} as Monster;
