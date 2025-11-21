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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 18,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 26,
      description: "The sphinx makes two claw attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*13 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Claw",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Neutral",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [Conditions.Charmed, Conditions.Frightened],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Psychic],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Sphinxes",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  languages: "Common, Sphinx",
  legendaryActions: [
    {
      averageDamage: 26,
      cost: 1,
      description: "The sphinx makes one claw attack.",
      name: "Claw Attack",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 2,
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
      targets: 0,
    },
  ],
  name: "Gynosphinx",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "truesight 120 ft.",
  skills: {
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
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
      casterLevel: 9,
      class: "wizard",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "mage hand" },
          { castingTime: ActionTypes.Action, name: "minor illusion" },
          { castingTime: ActionTypes.Action, name: "prestidigitation" },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "detect magic" },
          { castingTime: "Other", name: "identify" },
          { castingTime: ActionTypes.Action, name: "shield" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "darkness" },
          { castingTime: ActionTypes.Action, name: "locate object" },
          { castingTime: ActionTypes.Action, name: "suggestion" },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "dispel magic" },
          { castingTime: ActionTypes.Action, name: "remove curse" },
          { castingTime: ActionTypes.Action, name: "tongues" },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "banishment" },
          { castingTime: ActionTypes.Action, name: "greater invisibility" },
        ],
        5: [{ castingTime: "Other", name: "legend lore" }],
      },
      spellAttack: 8,
      spellcastingAbility: AbilityScores.Intelligence,
      spellDc: 16,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    fly: 60,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
