import {
  AbilityScores,
  ActionTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 16,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 38,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one creature. *Hit:* 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 17,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [Conditions.Charmed, Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Nagas",
  hitDice: {
    count: 10,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, Common",
  name: "Spirit Naga",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.REJUVENATION(
      "Rejuvenation",
      "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
    ),
  ],
  spellcasting: [
    {
      casterLevel: 10,
      class: "wizard",
      extraText: "It needs only verbal components to cast its spells.",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "mage hand" },
          { castingTime: ActionTypes.Action, name: "minor illusion" },
          {
            castingTime: ActionTypes.Action,
            damage: 9,
            name: "ray of frost",
            targets: 1,
          },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "charm person" },
          { castingTime: ActionTypes.Action, name: "detect magic" },
          { castingTime: ActionTypes.Action, name: "sleep" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "detect thoughts" },
          { castingTime: ActionTypes.Action, name: "hold person" },
        ],
        3: [
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "lightning bolt",
            targets: 2,
          },
          { castingTime: ActionTypes.Action, name: "water breathing" },
        ],
        4: [
          {
            castingTime: ActionTypes.Action,
            damage: 36,
            name: "blight",
            targets: 2,
          },
          { castingTime: ActionTypes.Action, name: "dimension door" },
        ],
        5: [{ castingTime: ActionTypes.Action, name: "dominate person" }],
      },
      spellAttack: 6,
      spellcastingAbility: AbilityScores.Intelligence,
      spellDc: 14,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
