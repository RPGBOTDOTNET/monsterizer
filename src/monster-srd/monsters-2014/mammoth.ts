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
    [AbilityScores.Strength]: 24,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 6,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 25,
      damageExpression: "4d8 + 7",
      damageType: DamageTypes.Piercing,
      description:
        "*25 Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 25 (4d8 + 7) piercing damage.",
      name: "Gore",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 29,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one prone creature. *Hit:* 29 (4d10 + 7) bludgeoning damage.",
      name: "Stomp",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.",
  group: "",
  hitDice: {
    count: 11,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Mammoth",
  reactions: [],
  saveDc: 18,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.POUNCE("gore", 29, 18, 20, "stomp", "Trampling Charge"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
