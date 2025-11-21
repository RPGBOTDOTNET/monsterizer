import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 9,
    [AbilityScores.Charisma]: 3,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
      name: "Claw",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Giant Crab",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "blindsight 30 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Medium,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
