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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 14,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 22,
      description: "The devil makes two attacks with its chains.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target. *Hit:* 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
      name: "Chain",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried." +
        "Each animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.",
      name: "Animate Chains (Recharges after a Short or Long Rest)",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "8",
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
    count: 10,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Chain Devil",
  reactions: [
    {
      averageDamage: 0,
      description:
        "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn.",
      name: "Unnerving Mask",
      reusable: 3,
      targets: 0,
    },
  ],
  saveDc: 14,
  savingThrows: {
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
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
