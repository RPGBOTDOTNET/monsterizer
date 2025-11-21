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
    [AbilityScores.Strength]: 3,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 6,
  },
  ac: 9,
  acNotes: "",
  actions: [
    {
      attackModifier: 1,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 1,
      damageExpression: "1d4 − 1",
      damageType: DamageTypes.Slashing,
      description:
        "*1 Attack:* +1 to hit, reach 5 ft., one target. *Hit:* 1 (1d4 − 1) slashing damage.",
      name: "Rake",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 1,
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Plant",
  damageImmunities: [],
  damageResistances: [DamageTypes.Piercing],
  damageVulnerabilities: [DamageTypes.Fire],
  description:
    "An awakened shrub is an ordinary shrub given sentience and mobility by the awaken spell or similar magic.",
  group: "Awakened Plants",
  hitDice: {
    count: 3,
    size: "d6",
    modifier: 0,
  },
  languages: "one language known by its creator",
  name: "Awakened Shrub",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FALSE_APPEARANCE("a normal shrub")],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
