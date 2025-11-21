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
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  ac: 11,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "2d4 + 3",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*8 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8 (2d4 + 3) bludgeoning damage.",
      name: "Ram",
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
  name: "Giant Goat",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.CHARGE_TOPPLING(5, "2d4", "", 13, 20, "Charge", "ram"),
    SPECIAL_TRAITS.SURE_FOOTED(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
