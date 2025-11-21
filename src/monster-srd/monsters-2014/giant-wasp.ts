import { AbilityScores, CreatureSizes, type Monster } from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 15,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
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
  challenge: "1/2",
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
  name: "Giant Wasp",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [],
  speed: {
    fly: 50,
    land: 10,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
