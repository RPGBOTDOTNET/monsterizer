import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 1,
    [AbilityScores.Dexterity]: 1,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 3,
    [AbilityScores.Charisma]: 1,
  },
  ac: 5,
  actions: [
    {
      averageDamage: 0,
      description:
        "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward.",
      name: "Shriek",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  cantSpeak: false,
  challenge: "0",
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
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Shrieker",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 30 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.FALSE_APPEARANCE("an ordinary fungus")],
  speed: {
    land: 0,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
