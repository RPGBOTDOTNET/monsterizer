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
    [AbilityScores.Strength]: 27,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 25,
    [AbilityScores.Intelligence]: 20,
    [AbilityScores.Wisdom]: 17,
    [AbilityScores.Charisma]: 19,
  },
  ac: 21,
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
      attackModifier: 15,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 19,
      damageType: DamageTypes.Poison,
      description:
        "*19 Attack:* +15 to hit, reach 15 ft., one target. *Hit:* 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
      name: "Bite",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 15,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageExpression: "4d6 + 8",
      damageType: DamageTypes.Slashing,
      description:
        "*22 Attack:* +15 to hit, reach 10 ft., one target. *Hit:* 22 (4d6 + 8) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 15,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d8 + 8",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*17 Attack:* +15 to hit, reach 20 ft., one target. *Hit:* 17 (2d8 + 8) bludgeoning damage.",
      name: "Tail",
      reach: 20,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 77,
      description:
        "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Poison Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 15,
  cantSpeak: false,
  challenge: "22",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 22,
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
      averageDamage: 17,
      cost: 1,
      description: "The dragon makes a tail attack.",
      name: "Tail Attack",
      targets: 1,
    },
    {
      averageDamage: 15,
      cost: 2,
      description:
        "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Ancient Green Dragon",
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
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.AMPHIBIOUS(),
    SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 22),
  ],
  speed: {
    fly: 80,
    land: 40,
    swim: 40,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
