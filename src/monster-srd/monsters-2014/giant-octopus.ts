import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 4,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 4,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 15 ft., one target. *Hit:* 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
      name: "Tentacles",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
      name: "Ink Cloud (Recharges after a Short or Long Rest)",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 8,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Giant Octopus",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.HOLD_BREATH("1 hour"),
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Underwater", "while underwater"),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 10,
    swim: 60,
  },
  usesAttackBonus: true,
  size: CreatureSizes.Large,
  _ruleset: "2014",
} as Monster;
