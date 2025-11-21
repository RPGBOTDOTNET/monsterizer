import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 17,
    [AbilityScores.Charisma]: 16,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 19,
      description:
        "The unicorn makes two attacks: one with its hooves and one with its horn.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "1d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*8 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8 (1d8 + 4) piercing damage.",
      name: "Horn",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.",
      name: "Healing Touch (3/Day)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.",
      name: "Teleport (1/Day)",
      reusable: 1,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    extraDescription: "requiring no components",
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 14,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect evil and good",
      },
      {
        castingTime: ActionTypes.Action,
        name: "druidcraft",
      },
      {
        castingTime: ActionTypes.Action,
        name: "pass without trace",
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "calm emotions",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "dispel evil and good",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "entangle",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
  legendaryActions: [
    {
      averageDamage: 11,
      cost: 1,
      description: "The unicorn makes one attack with its hooves.",
      name: "Hooves",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 2,
      description:
        "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.",
      name: "Shimmering Shield",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 3,
      description: "The unicorn magically regains 11 (2d8 + 2) hit points.",
      name: "Heal Self",
      targets: 0,
    },
  ],
  name: "Unicorn",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.CHARGE(9, "2d8", "piercing", 20, "Charge", "horn"),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
