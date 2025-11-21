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
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 6,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 7,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "3d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*14 Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 14 (3d6 + 4) bludgeoning damage.",
      name: "Slam",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Plant",
  damageImmunities: [],
  damageResistances: [DamageTypes.Bludgeoning, DamageTypes.Piercing],
  damageVulnerabilities: [DamageTypes.Fire],
  description:
    "An awakened tree is an ordinary tree given sentience and mobility by the awaken spell or similar magic.",
  group: "Awakened Plants",
  hitDice: {
    count: 7,
    size: "d12",
    modifier: 0,
  },
  languages: "one language known by its creator",
  name: "Awakened Tree",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FALSE_APPEARANCE("a normal tree")],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
