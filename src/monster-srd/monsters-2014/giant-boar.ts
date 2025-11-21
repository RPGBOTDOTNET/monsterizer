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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 5,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "2d6 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*10 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage.",
      name: "Tusk",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 5,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Giant Boar",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.CHARGE_TOPPLING(7, "2d6", "", 13, 20, "Charge", "tusk"),
    SPECIAL_TRAITS.RELENTLESS(2, 10),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
