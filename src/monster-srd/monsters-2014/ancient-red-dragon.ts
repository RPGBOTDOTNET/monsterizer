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
    [AbilityScores.Strength]: 30,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 29,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 23,
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
      attackModifier: 17,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 21,
      damageType: DamageTypes.Fire,
      description:
        "*21 Attack:* +17 to hit, reach 15 ft., one target. *Hit:* 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
      name: "Bite",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 17,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d6 + 10",
      damageType: DamageTypes.Slashing,
      description:
        "*17 Attack:* +17 to hit, reach 10 ft., one target. *Hit:* 17 (2d6 + 10) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 17,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 19,
      damageExpression: "2d8 + 10",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*19 Attack:* +17 to hit, reach 20 ft., one target. *Hit:* 19 (2d8 + 10) bludgeoning damage.",
      name: "Tail",
      reach: 20,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 91,
      description:
        "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Fire Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 17,
  cantSpeak: false,
  challenge: "24",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 28,
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
      averageDamage: 19,
      cost: 1,
      description: "The dragon makes a tail attack.",
      name: "Tail Attack",
      targets: 1,
    },
    {
      averageDamage: 17,
      cost: 2,
      description:
        "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Ancient Red Dragon",
  reactions: [],
  saveDc: 24,
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
  specialTraits: [SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 24)],
  speed: {
    fly: 80,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
