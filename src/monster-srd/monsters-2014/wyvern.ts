import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 6,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 48,
      description:
        "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one creature. *Hit:* 11 (2d6 + 4) piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*13 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 35,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one creature. *Hit:* 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Stinger",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 13,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Wyvern",
  reactions: [],
  saveDc: 15,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    fly: 80,
    land: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
