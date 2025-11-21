import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 22,
    [AbilityScores.Intelligence]: 15,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 20,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 36,
      description: "The djinni makes three scimitar attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 12,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice).",
      name: "Scimitar",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.
A creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.`,
      name: "Create Whirlwind",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [
    DamageTypes.Lightning,
    DamageTypes.Thunder,
    DamageTypes.Lightning,
    DamageTypes.Thunder,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Genies",
  hitDice: {
    count: 14,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellAttack: 9,
    spellDc: 17,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect evil and good",
      },
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },

      {
        castingTime: ActionTypes.Action,
        name: "thunderwave",
      },

      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "create food and water (can create wine instead of water)",
        recharge: RestTypes.Long,

        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "tongues",

        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "wind walk",

        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "conjure elemental (air elemental only)",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "creation",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "gaseous form",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "invisibility",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "major image",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "plane shift",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Auran",
  name: "Djinni",
  reactions: [],
  saveDc: 18,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ELEMENTAL_DEMISE("a warm breeze", "Elemental Demise"),
  ],
  speed: {
    fly: 90,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
