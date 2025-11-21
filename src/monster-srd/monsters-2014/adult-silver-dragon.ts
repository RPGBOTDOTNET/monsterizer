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
    [AbilityScores.Strength]: 27,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 25,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 21,
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
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 19,
      damageExpression: "2d10 + 8",
      damageType: DamageTypes.Piercing,
      description:
        "*19 Attack:* +13 to hit, reach 10 ft., one target. *Hit:* 19 (2d10 + 8) piercing damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "2d6 + 8",
      damageType: DamageTypes.Slashing,
      description:
        "*Melee Weapon Attack:* +13 to hit, reach 5 ft., one target. *Hit:* 15 (2d6 + 8) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d8 + 8",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*17 Attack:* +13 to hit, reach 15 ft., one target. *Hit:* 17 (2d8 + 8) bludgeoning damage.",
      name: "Tail",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description: "The dragon uses one of the following breath weapons.",
      name: "Breath Weapons (Recharge 5-6)",
      reusable: 0,
      targets: 0,
    },
    {
      averageDamage: 58,
      description:
        "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.",
      name: "Cold Breath",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 0,
      description:
        "The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Paralyzing Breath",
      reusable: 0,
      targets: 0,
    },
    {
      averageDamage: 0,
      description: `The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).
In a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.`,
      name: "Change Shape",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 13,
  cantSpeak: false,
  challenge: "16",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [DamageTypes.Cold],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Metallic",
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
        "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
      name: "Wing Attack",
      targets: 2,
    },
  ],
  name: "Adult Silver Dragon",
  nameShort: "dragon",
  reactions: [],
  saveDc: 20,
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
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 16)],
  speed: {
    fly: 80,
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
