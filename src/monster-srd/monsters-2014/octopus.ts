import {
  AbilityScores,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 4,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 1,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
      name: "Tentacles",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
      name: "Ink Cloud (Recharges after a Short or Long Rest)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "0",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 1,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Octopus",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.HOLD_BREATH("30 minutes"),
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Underwater", "while underwater"),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 5,
    swim: 30,
  },
  usesAttackBonus: true,
  size: CreatureSizes.Small,
  _ruleset: "2014",
} as Monster;
