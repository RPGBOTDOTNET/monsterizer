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
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 15,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 14,
      description:
        "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0." +
        "A humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
      name: "Life Drain",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 6,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage.",
      name: "Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [Conditions.Exhaustion, Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Necrotic,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Wight",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "studded",
  _ruleset: "2014",
} as Monster;
