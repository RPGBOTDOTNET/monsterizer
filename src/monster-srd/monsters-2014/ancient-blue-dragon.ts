import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 29,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 27,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 17,
    [AbilityScores.Charisma]: 21,
  },
  ac: 22,
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
      attackModifier: 16,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 20,
      damageType: DamageTypes.Lightning,
      description:
        "*20 Attack:* +16 to hit, reach 15 ft., one target. *Hit:* 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
      name: "Bite",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 16,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 16,
      damageExpression: "2d6 + 9",
      damageType: DamageTypes.Slashing,
      description:
        "*16 Attack:* +16 to hit, reach 10 ft., one target. *Hit:* 16 (2d6 + 9) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 16,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 18,
      damageExpression: "2d8 + 9",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*18 Attack:* +16 to hit, reach 20 ft., one target. *Hit:* 18 (2d8 + 9) bludgeoning damage.",
      name: "Tail",
      reach: 20,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 88,
      description:
        "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 16,
  cantSpeak: false,
  challenge: "23",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Lightning],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 26,
    size: "d20",
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
      averageDamage: 18,
      cost: 1,
      description: "The dragon makes a tail attack.",
      name: "Tail Attack",
      targets: 1,
    },
    {
      averageDamage: 16,
      cost: 2,
      description:
        "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Ancient Blue Dragon",
  reactions: [],
  saveDc: 23,
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
  specialTraits: [SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 23)],
  speed: {
    burrow: 40,
    fly: 80,
    land: 40,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
