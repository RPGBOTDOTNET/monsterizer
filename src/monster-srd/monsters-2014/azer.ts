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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 10,
  },
  ac: 17,
  acNotes: "natural armor, shield",
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 7,
      damageExpression:
        "1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6",
      damageType: DamageTypes.Fire,
      description:
        "*7 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
      name: "Warhammer",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Neutral",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "Ignan",
  name: "Azer",
  reactions: [],
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ELEMENTAL_BODY(
      3,
      "1d6",
      DamageTypes.Fire.toLocaleLowerCase(),
    ),
    SPECIAL_TRAITS.HEATED_WEAPONS(),
    SPECIAL_TRAITS.ILLUMINATION(10),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
