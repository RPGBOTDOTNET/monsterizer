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
    [AbilityScores.Strength]: 20,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 19,
    [AbilityScores.Wisdom]: 17,
    [AbilityScores.Charisma]: 16,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 46,
      description:
        "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 16,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
      name: "Pincer",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 7,
      damageExpression: "2d4 + 2",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*7 Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 7 (2d4 + 2) bludgeoning damage.",
      name: "Fist",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "9",
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
    count: 15,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 16,
    spellcastingAbility: AbilityScores.Intelligence,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "darkness",
      },
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      {
        castingTime: ActionTypes.Action,
        name: "dispel magic",
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "confusion",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "fly",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "power word stun",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Glabrezu",
  reactions: [],
  saveDc: 16,
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
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
