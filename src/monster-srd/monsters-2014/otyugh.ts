import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 19,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 6,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 34,
      description:
        "The otyugh makes three attacks: one with its bite and two with its tentacles.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 12,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one target. *Hit:* 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.",
      name: "Tentacle",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.",
      name: "Tentacle Slam",
      reusable: 2,
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
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Aberration",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d10",
    modifier: 0,
  },
  languages: "Otyugh",
  name: "Otyugh",
  reactions: [],
  saveDc: 15,
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.LIMITED_TELEPATHY_A(120)],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
