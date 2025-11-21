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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 20,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 20,
    [AbilityScores.Charisma]: 18,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one creature. *Hit:* 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one Medium or smaller creature. *Hit:* 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
      name: "Constrict",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).
In a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.`,
      name: "Change Shape",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [
    DamageTypes.Psychic,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [DamageTypes.Radiant],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 13,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    extraDescription: "requiring only verbal components",
    spellDc: 14,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // At will
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
        name: "detect thoughts",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "bless",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "create food and water",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "cure wounds",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "lesser restoration",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "protection from poison",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "sanctuary",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "shield",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: "Other",
        name: "dream",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "greater restoration",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "scrying",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "all, telepathy 120 ft.",
  name: "Couatl",
  reactions: [],
  saveDc: 13,
  savingThrows: {
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
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
    SPECIAL_TRAITS.SHIELDED_MIND(),
  ],
  speed: {
    fly: 90,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
