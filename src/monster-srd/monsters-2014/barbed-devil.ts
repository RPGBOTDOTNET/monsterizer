import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 14,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 22,
      description:
        "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*6 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "2d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*10 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) piercing damage.",
      name: "Tail",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Ranged Spell Attack:* +5 to hit, range 150 ft., one target. *Hit:* 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
      name: "Hurl Flame",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "5",
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
    count: 13,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Barbed Devil",
  reactions: [],
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
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Insight]: {
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
    SPECIAL_TRAITS.BARBED_HIDE(5, "1d10"),
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
