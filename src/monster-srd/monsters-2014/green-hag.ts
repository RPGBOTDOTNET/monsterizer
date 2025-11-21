import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 14,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*13 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.
The changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.`,
      name: "Illusory Appearance",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.",
      name: "Invisible Passage",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fey",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Hags",
  hitDice: {
    count: 11,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 12,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "dancing lights",
      },
      {
        castingTime: ActionTypes.Action,
        name: "minor illusion",
      },
      {
        castingTime: ActionTypes.Action,
        damage: 2.5,
        name: "vicious mockery",
        targets: 1,
      },
    ],
  },
  languages: "Common, Draconic, Sylvan",
  name: "Green Hag",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS(), SPECIAL_TRAITS.MIMICRY()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
