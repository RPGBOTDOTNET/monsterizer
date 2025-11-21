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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 16,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 46,
      description:
        "The devil makes three attacks: two with its claws and one with its sting.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "1d8 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*8 Attack:* +8 to hit, reach 10 ft., one target. *Hit:* 8 (1d8 + 4) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 30,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:* 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Sting",
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
  challenge: "9",
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
    count: 15,
    size: "d10",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Bone Devil",
  reactions: [],
  saveDc: 14,
  savingThrows: {
    [AbilityScores.Intelligence]: {
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
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 40,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
