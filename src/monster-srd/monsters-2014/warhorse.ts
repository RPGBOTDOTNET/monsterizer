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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 11,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 3,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Warhorse",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.POUNCE("hooves", 11, 14, 20, "hooves", "Trampling Charge"),
  ],
  speed: {
    land: 60,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
