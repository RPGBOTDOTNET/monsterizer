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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 15,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 20,
      damageType: DamageTypes.Fire,
      description:
        "*20 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 20 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.",
      name: "Ethereal Stride",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: true,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 8,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, Common, and Infernal",
  name: "Nightmare",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.CONFER_DAMAGE_RESISTANCE(
      DamageTypes.Fire,
      DamageTypes.Fire.toLocaleLowerCase(),
    ),
    SPECIAL_TRAITS.ILLUMINATION(10),
  ],
  speed: {
    fly: 90,
    land: 60,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
