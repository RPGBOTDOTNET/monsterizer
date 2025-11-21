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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 18,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 63,
      description: "The erinyes makes three attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 21,
      damageExpression:
        "1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8",
      damageType: DamageTypes.Poison,
      description:
        "*21 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 21 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.",
      name: "Longsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 20,
      description:
        "*Ranged Weapon Attack:* +7 to hit, range 150/600 ft., one target. *Hit:* 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "12",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 18,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Erinyes",
  reactions: [
    {
      averageDamage: 0,
      description:
        "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.",
      name: "Parry",
      reusable: 3,
      targets: 0,
    },
  ],
  saveDc: 14,
  savingThrows: {
    [AbilityScores.Dexterity]: {
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
    SPECIAL_TRAITS.HELLISH_WEAPONS(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 60,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "plate",
  _ruleset: "2014",
} as Monster;
