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
    [AbilityScores.Strength]: 23,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 12,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 32,
      description: "The treant makes two slam attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 16,
      damageExpression: "3d6 + 6",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*16 Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 16 (3d6 + 6) bludgeoning damage.",
      name: "Slam",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 28,
      description:
        "*Ranged Weapon Attack:* +10 to hit, range 60/180 ft., one target. *Hit:* 28 (4d10 + 6) bludgeoning damage.",
      name: "Rock",
      range: "60/180",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.",
      name: "Animate Trees (1/Day)",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Good",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "9",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Plant",
  damageImmunities: [],
  damageResistances: [DamageTypes.Bludgeoning, DamageTypes.Piercing],
  damageVulnerabilities: [DamageTypes.Fire],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d12",
    modifier: 0,
  },
  languages: "Common, Druidic, Elvish, Sylvan",
  name: "Treant",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.FALSE_APPEARANCE("a normal tree"),
    SPECIAL_TRAITS.SIEGE_MONSTER(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
