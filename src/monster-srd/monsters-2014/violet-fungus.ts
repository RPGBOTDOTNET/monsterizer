import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 3,
    [AbilityScores.Dexterity]: 1,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 3,
    [AbilityScores.Charisma]: 1,
  },
  ac: 5,
  actions: [
    {
      averageDamage: 10,
      description: "The fungus makes 1d4 Rotting Touch attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 10 ft., one creature. *Hit:* 4 (1d8) necrotic damage.",
      name: "Rotting Touch",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Deafened,
    Conditions.Frightened,
  ],
  creatureSubtype: "",
  creatureType: "Plant",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Fungi",
  hitDice: {
    count: 4,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Violet Fungus",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FALSE_APPEARANCE("an ordinary fungus")],
  speed: {
    land: 5,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
