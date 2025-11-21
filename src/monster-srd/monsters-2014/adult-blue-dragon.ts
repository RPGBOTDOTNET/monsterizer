import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 25,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 23,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 19,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 0,
      description:
        "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 18,
      damageType: DamageTypes.Lightning,
      description:
        "*18 Attack:* +12 to hit, reach 10 ft., one target. *Hit:* 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "2d6 + 7",
      damageType: DamageTypes.Slashing,
      description:
        "*14 Attack:* +12 to hit, reach 5 ft., one target. *Hit:* 14 (2d6 + 7) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 16,
      damageExpression: "2d8 + 7",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*16 Attack:* +12 to hit, reach 15 ft., one target. *Hit:* 16 (2d8 + 7) bludgeoning damage.",
      name: "Tail",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 66,
      description:
        "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 12,
  cantSpeak: false,
  challenge: "16",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Lightning],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 18,
    size: "d12",
    modifier: 0,
  },
  languages: "Common, Draconic",
  legendaryActions: [
    {
      averageDamage: 0,
      cost: 1,
      description: "The dragon makes a Wisdom (Perception) check.",
      name: "Detect",
      targets: 0,
    },
    {
      averageDamage: 16,
      cost: 1,
      description: "The dragon makes a tail attack.",
      name: "Tail Attack.",
      targets: 1,
    },
    {
      averageDamage: 14,
      cost: 2,
      description:
        "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Adult Blue Dragon",
  nameShort: "dragon",
  reactions: [],
  saveDc: 19,
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
  senses: "blindsight 60 ft., darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 16)],
  speed: {
    burrow: 30,
    fly: 80,
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
