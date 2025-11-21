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
    [AbilityScores.Dexterity]: 20,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 20,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 90,
      description:
        "The marilith makes seven attacks: six with its longswords and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*13 Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Longsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 15,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one creature. *Hit:* 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      name: "Teleport",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "16",
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
    count: 18,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Marilith",
  reactions: [
    {
      averageDamage: 0,
      description:
        "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.",
      name: "Parry",
      reusable: 3,
      targets: 0,
    },
  ],
  saveDc: 19,
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
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
    SPECIAL_TRAITS.REACTIVE(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
