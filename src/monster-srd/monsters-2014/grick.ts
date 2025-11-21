import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 5,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 14,
      description:
        "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "2d6 + 2",
      damageType: DamageTypes.Slashing,
      description:
        "*9 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9 (2d6 + 2) slashing damage.",
      name: "Tentacles",
      reach: 5,
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
      name: "Beak",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Grick",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Stone", "in rocky terrain"),
  ],
  speed: {
    climb: 30,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
