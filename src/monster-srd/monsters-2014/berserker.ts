import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 9,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "1d12 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*9 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 9 (1d12 + 3) slashing damage.",
      name: "Greataxe",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "Chaotic",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Hailing from uncivilized lands, unpredictable berserkers come together in war parties and seek conflict wherever they can find it.",
  group: "NPCs",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Berserker",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.RECKLESS()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "hide",
  _ruleset: "2014",
} as Monster;
