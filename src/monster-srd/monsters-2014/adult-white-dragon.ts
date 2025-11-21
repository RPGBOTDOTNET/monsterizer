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
    [AbilityScores.Strength]: 22,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 12,
  },
  ac: 18,
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
      attackModifier: 11,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageType: DamageTypes.Cold,
      description:
        "*17 Attack:* +11 to hit, reach 10 ft., one target. *Hit:* 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 11,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d6 + 6",
      damageType: DamageTypes.Slashing,
      description:
        "*13 Attack:* +11 to hit, reach 5 ft., one target. *Hit:* 13 (2d6 + 6) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 11,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "2d8 + 6",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*Melee Weapon Attack:* +11 to hit, reach 15 ft., one target. *Hit:* 15 (2d8 + 6) bludgeoning damage.",
      name: "Tail",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 15,
      description:
        "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
      name: "Cold Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 11,
  cantSpeak: false,
  challenge: "13",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Cold],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Chromatic",
  hitDice: {
    count: 16,
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
      averageDamage: 15,
      cost: 1,
      description: "The dragon makes a tail attack.",
      name: "Tail Attack",
      targets: 1,
    },
    {
      averageDamage: 13,
      cost: 2,
      description:
        "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Adult White Dragon",
  nameShort: "dragon",
  reactions: [],
  saveDc: 14,
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
  specialTraits: [
    SPECIAL_TRAITS.ICE_WALK(),
    SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 13),
  ],
  speed: {
    burrow: 30,
    fly: 80,
    land: 40,
    swim: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
