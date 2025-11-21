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
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 19,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 15,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 62,
      description:
        "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 32,
      damageExpression: "5d10 + 5",
      damageType: DamageTypes.Piercing,
      description:
        "*32 Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 32 (5d10 + 5) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "3d6 + 5",
      damageType: DamageTypes.Slashing,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 15 (3d6 + 5) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.",
      name: "Horror Nimbus (Recharge 5-6)",
      reusable: 1,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      name: "Teleport",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "13",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Nalfeshnee",
  reactions: [],
  saveDc: 15,
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
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
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  speed: {
    fly: 30,
    land: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
