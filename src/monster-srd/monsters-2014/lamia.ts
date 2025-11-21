import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 16,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 19,
      description:
        "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "2d10 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*14 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 14 (2d10 + 3) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d4 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4 + 3) piercing damage.",
      name: "Dagger",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "*Melee Spell Attack:* +5 to hit, reach 5 ft., one creature. *Hit:* The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.",
      name: "Intoxicating Touch",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
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
  innateSpellcasting: {
    spellDc: 13,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "disguise self (any humanoid form)",
      },
      {
        castingTime: ActionTypes.Action,
        name: "major image",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "charm person",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "mirror image",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "scrying",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "suggestion",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "geas",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Abyssal, Common",
  name: "Lamia",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
