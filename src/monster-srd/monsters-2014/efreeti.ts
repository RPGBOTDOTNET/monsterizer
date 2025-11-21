import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 22,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 24,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 16,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 34,
      description:
        "The efreeti makes two scimitar attacks or uses its Hurl Flame twice.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageType: DamageTypes.Fire,
      description:
        "*13 Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.",
      name: "Scimitar",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 17,
      description:
        "*Ranged Spell Attack:* +7 to hit, range 120 ft., one target. *Hit:* 17 (5d6) fire damage.",
      name: "Hurl Flame",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Genies",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellAttack: 7,
    spellDc: 15,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "enlarge/reduce",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "tongues",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "conjure elemental (fire elemental only)",
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
      {
        castingTime: ActionTypes.Action,
        damage: 22.5,
        name: "wall of fire",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 1,
      },
    ],
  },
  languages: "Ignan",
  name: "Efreeti",
  reactions: [],
  saveDc: 15,
  savingThrows: {
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
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ELEMENTAL_DEMISE(
      "a flash of fire and puff of smoke",
      "Elemental Demise",
    ),
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
