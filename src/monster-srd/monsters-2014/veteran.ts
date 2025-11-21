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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 19,
      description:
        "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
      name: "Longsword",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*6 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) piercing damage.",
      name: "Shortsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 6,
      description:
        "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:* 6 (1d10 + 1) piercing damage.",
      name: "Heavy Crossbow",
      range: "100/400",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.",
  group: "NPCs",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Veteran",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Athletics]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "splint",
  _ruleset: "2014",
} as Monster;
