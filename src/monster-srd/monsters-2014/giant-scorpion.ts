import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 9,
    [AbilityScores.Charisma]: 3,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 19,
      description:
        "The scorpion makes three attacks: two with its claws and one with its sting.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
      name: "Claw",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Sting",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Giant Scorpion",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "blindsight 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
