import {
  AbilityScores,
  ActionTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 16,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 35,
      description:
        "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 35,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
      name: "Rotting Fist",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.",
      name: "Dreadful Glare",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "15",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [
    DamageTypes.Necrotic,
    DamageTypes.Poison,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [DamageTypes.Fire],
  description: "",
  group: "Mummies",
  hitDice: {
    count: 13,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  legendaryActions: [
    {
      averageDamage: 35,
      cost: 1,
      description:
        "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.",
      name: "Attack",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 1,
      description:
        "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn.",
      name: "Blinding Dust",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 2,
      description:
        "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn.",
      name: "Blasphemous Word",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 2,
      description:
        "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.",
      name: "Channel Negative Energy",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 2,
      description:
        "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.",
      name: "Whirlwind of Sand",
      targets: 0,
    },
  ],
  name: "Mummy Lord",
  reactions: [],
  saveDc: 16,
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.History]: {
      proficient: 1,
    },
    [Skills.Religion]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.REJUVENATION(
      "Rejuvenation",
      "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart.",
    ),
  ],
  spellcasting: [
    {
      casterLevel: 10,
      class: "cleric",
      knowsSpells: false,
      spells: {
        cantrips: [
          {
            castingTime: ActionTypes.Action,
            damage: 9,
            name: "sacred flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "thaumaturgy" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "command" },
          {
            castingTime: ActionTypes.Action,
            damage: 14,
            name: "guiding bolt",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "shield of faith" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "hold person" },
          { castingTime: ActionTypes.Action, name: "silence" },
          {
            castingTime: ActionTypes.BonusAction,
            damage: 8.5 * 3,
            name: "spiritual weapon",
            targets: 1,
          },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "animate dead" },
          { castingTime: ActionTypes.Action, name: "dispel magic" },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "divination" },
          {
            castingTime: ActionTypes.Action,
            damage: 20,
            name: "guardian of faith",
            targets: 1,
          },
        ],
        5: [
          { castingTime: ActionTypes.Action, name: "contagion" },
          {
            castingTime: ActionTypes.Action,
            damage: 22,
            name: "insect plague",
            targets: 2,
          },
        ],
        6: [
          {
            castingTime: ActionTypes.Action,
            damage: 96,
            name: "harm",
            targets: 1,
          },
        ],
      },
      spellAttack: 9,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 17,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
