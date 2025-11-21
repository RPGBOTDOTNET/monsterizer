import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 7,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 20,
      description: "The elemental makes two touch attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
      name: "Touch",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [
    Conditions.Exhaustion,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
    Conditions.Prone,
    Conditions.Restrained,
    Conditions.Unconscious,
  ],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Elementals",
  hitDice: {
    count: 12,
    size: "d10",
    modifier: 0,
  },
  languages: "Ignan",
  name: "Fire Elemental",
  nameShort: "elemental",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.SQUEEZE("Fire Form"),
    SPECIAL_TRAITS.ILLUMINATION(30),
    SPECIAL_TRAITS.WATER_SUSCEPTIBILITY(),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
