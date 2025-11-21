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
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 16,
  },
  ac: 15,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d8 + 1",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8 + 1) piercing damage.",
      name: "Rapier",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Nobles wield great authority and influence as members of the upper class, possessing wealth and connections that can make them as powerful as monarchs and generals. A noble often travels in the company of guards, as well as servants who are commoners." +
    "The noble's statistics can also be used to represent courtiers who aren't of noble birth.",
  group: "",
  hitDice: {
    count: 2,
    size: "d8",
    modifier: 0,
  },
  languages: "any two languages",
  name: "Noble",
  reactions: [
    {
      averageDamage: 0,
      description:
        "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.",
      name: "Parry",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "breastplate",
  _ruleset: "2014",
} as Monster;
