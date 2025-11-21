import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 5,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 22,
      description:
        "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
      name: "Pincer",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Tentacles",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 11,
  cantSpeak: true,
  challenge: "4",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Aberration",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 11,
    size: "d10",
    modifier: 0,
  },
  languages: "understands Deep Speech",
  name: "Chuul",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS(), SPECIAL_TRAITS.SENSE_MAGIC(120)],
  speed: {
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
