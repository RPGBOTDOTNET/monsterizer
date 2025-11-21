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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 5,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 1,
  },
  ac: 7,
  actions: [
    {
      averageDamage: 24,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
      name: "Pseudopod",
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
  challenge: "4",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Charmed,
    Conditions.Deafened,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Prone,
  ],
  creatureSubtype: "",
  creatureType: "Ooze",
  damageImmunities: [
    DamageTypes.Acid,
    DamageTypes.Cold,
    DamageTypes.Lightning,
    DamageTypes.Slashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Oozes",
  hitDice: {
    count: 10,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Black Pudding",
  reactions: [
    {
      averageDamage: 0,
      description:
        "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding.",
      name: "Split",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.AMORPHOUS(),
    SPECIAL_TRAITS.CORROSIVE_FORM(
      4,
      "1d8",
      DamageTypes.Acid.toLocaleLowerCase(),
    ),
    SPECIAL_TRAITS.SPIDER_CLIMB(),
  ],
  speed: {
    climb: 20,
    land: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
