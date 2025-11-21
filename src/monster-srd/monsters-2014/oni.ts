import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 15,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 48,
      description:
        "The oni makes two attacks, either with its claws or its glaive.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 8 (1d8 + 4) slashing damage.",
      name: "Claw (Oni Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 24,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:* 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form.",
      name: "Glaive",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.",
      name: "Change Shape",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "7",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Giant",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 13,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 13,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "darkness",
      },
      {
        castingTime: ActionTypes.Action,
        name: "invisibility",
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "charm person",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        damage: 36,
        name: "cone of cold",
        recharge: RestTypes.Long,
        targets: 2,
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
        name: "sleep",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Common, Giant",
  name: "Oni",
  reactions: [],
  saveDc: 13,
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
  senses: "darkvision 60 ft.",
  skills: {
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
  specialTraits: [
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
    SPECIAL_TRAITS.REGENERATION(10),
  ],
  speed: {
    fly: 30,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "chain",
  _ruleset: "2014",
} as Monster;
