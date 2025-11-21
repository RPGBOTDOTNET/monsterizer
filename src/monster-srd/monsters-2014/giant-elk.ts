import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 10,
  },
  ac: 14,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageExpression: "2d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*11 Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage.",
      name: "Ram",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one prone creature. *Hit:* 22 (4d8 + 4) bludgeoning damage.",
      name: "Hooves",
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
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.",
  group: "",
  hitDice: {
    count: 5,
    size: "d12",
    modifier: 0,
  },
  languages:
    "Giant Elk, understands Common, Elvish, and Sylvan but can't speak them",
  name: "Giant Elk",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.CHARGE_TOPPLING(7, "2d6", "", 14, 20, "Charge", "ram"),
  ],
  speed: {
    land: 60,
  },
  size: CreatureSizes.Huge,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
