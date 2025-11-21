import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 8,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 18,
      description:
        "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
      name: "Cold Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Cold],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "The arctic-dwelling winter wolf is as large as a dire wolf but has snow-white fur and pale blue eyes. Frost giants use these evil creatures as guards and hunting companions, putting the wolves' deadly breath weapon to use against their foes. Winter wolves communicate with one another using growls and barks, but they speak Common and Giant well enough to follow simple conversations.",
  group: "",
  hitDice: {
    count: 10,
    size: "d10",
    modifier: 0,
  },
  languages: "Giant, Winter Wolf",
  name: "Winter Wolf",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
    SPECIAL_TRAITS.PACK_TACTICS(),
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Snow", "in snowy terrain"),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Large,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
