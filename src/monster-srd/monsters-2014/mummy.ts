import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 12,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 20,
      description:
        "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 20,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
      name: "Rotting Fist",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.",
      name: "Dreadful Glare",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Necrotic, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [DamageTypes.Fire],
  description: "",
  group: "Mummies",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Mummy",
  reactions: [],
  saveDc: 12,
  savingThrows: {
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
