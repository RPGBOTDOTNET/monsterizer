import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 26,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 20,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 22,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 59,
      description:
        "The balor makes two attacks: one with its longsword and one with its whip.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 34,
      description:
        "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:* 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 25,
      description:
        "*Melee Weapon Attack:* +14 to hit, reach 30 ft., one target. *Hit:* 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
      name: "Whip",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      name: "Teleport",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 14,
  cantSpeak: false,
  challenge: "19",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 21,
    size: "d12",
    modifier: 0,
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Balor",
  reactions: [],
  saveDc: 20,
  savingThrows: {
    [AbilityScores.Strength]: {
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
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEATH_THROES(70, "20d6", 20),
    SPECIAL_TRAITS.FIRE_AURA(10, "3d6", 5),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
  ],
  speed: {
    fly: 80,
    land: 40,
  },
  size: CreatureSizes.Huge,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
