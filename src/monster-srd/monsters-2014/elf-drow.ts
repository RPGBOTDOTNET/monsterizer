import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 12,
  },
  ac: 15,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d6 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Shortsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
      name: "Hand Crossbow",
      range: "30/120",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [],
  creatureSubtype: "elf",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 11,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "dancing lights",
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "darkness",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "faerie fire",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Elvish, Undercommon",
  name: "Elf, Drow",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.FEY_ANCESTRY(),
    SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "chain",
  _ruleset: "2014",
} as Monster;
