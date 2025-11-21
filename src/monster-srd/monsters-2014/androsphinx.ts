import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
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
    [AbilityScores.Strength]: 22,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 23,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 34,
      description: "The sphinx makes two claw attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 12,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d10 + 6",
      damageType: DamageTypes.Slashing,
      description:
        "*17 Attack:* +12 to hit, reach 5 ft., one target. *Hit:* 17 (2d10 + 6) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.",
      name: "Roar (3/Day)",
      reusable: 0,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "First Roar",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Second Roar",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 44,
      description:
        "Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
      name: "Third Roar",
      reusable: 3,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Neutral",
  },
  attack: 12,
  cantSpeak: false,
  challenge: "17",
  conditionImmunities: [Conditions.Charmed, Conditions.Frightened],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [
    DamageTypes.Psychic,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Sphinxes",
  hitDice: {
    count: 19,
    size: "d10",
    modifier: 0,
  },
  languages: "Common, Sphinx",
  legendaryActions: [
    {
      averageDamage: 17,
      cost: 1,
      description: "The sphinx makes one claw attack.",
      name: "Claw Attack",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 1,
      description:
        "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      name: "Teleport",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 3,
      description:
        "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
      name: "Cast a Spell",
      targets: 1,
    },
  ],
  name: "Androsphinx",
  reactions: [],
  saveDc: 18,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "truesight 120 ft.",
  skills: {
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.Religion]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.INSCRUTABLE(), SPECIAL_TRAITS.MAGIC_WEAPONS()],
  spellcasting: [
    {
      casterLevel: 12,
      class: "cleric",
      extraText: "It requires no material components to cast its spells.",
      knowsSpells: false,
      spells: {
        cantrips: [
          {
            castingTime: ActionTypes.Action,
            damage: 13.5,
            name: "sacred flame",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "spare the dying" },
          { castingTime: ActionTypes.Action, name: "thaumaturgy" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "command" },
          { castingTime: ActionTypes.Action, name: "detect evil and good" },
          { castingTime: ActionTypes.Action, name: "detect magic" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "lesser restoration" },
          { castingTime: ActionTypes.Action, name: "zone of truth" },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "dispel magic" },
          { castingTime: ActionTypes.Action, name: "tongues" },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "banishment" },
          { castingTime: ActionTypes.Action, name: "freedom of movement" },
        ],
        5: [
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "flame strike",
            targets: 2,
          },
          { castingTime: ActionTypes.Action, name: "greater restoration" },
        ],
        6: [{ castingTime: "Other", name: "heroes' feast" }],
      },
      spellAttack: 10,
      spellcastingAbility: AbilityScores.Wisdom,
      spellDc: 18,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    fly: 60,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: false,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
