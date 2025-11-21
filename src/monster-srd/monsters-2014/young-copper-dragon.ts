import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 15,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 37,
      description:
        "The dragon makes three attacks: one with its bite and two with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "2d10 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:* 15 (2d10 + 4) piercing damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*11 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: "The dragon uses one of the following breath weapons.",
      name: "Breath Weapons (Recharge 5-6)",
      reusable: 0,
      targets: 0,
    },
    {
      averageDamage: 40,
      description:
        "The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.",
      name: "Acid Breath",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 0,
      description:
        "The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
      name: "Slowing Breath",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "7",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Acid],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Metallic",
  hitDice: {
    count: 14,
    size: "d10",
    modifier: 0,
  },
  languages: "Common, Draconic",
  name: "Young Copper Dragon",
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
  senses: "blindsight 30 ft., darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    fly: 80,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
