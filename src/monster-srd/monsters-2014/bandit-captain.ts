import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 14,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 17,
      description:
        "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "1d6 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*6 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) slashing damage.",
      name: "Scimitar",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      attackModifier: 5,
      attackType: AttackTypes.EitherWeapon,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 5 (1d4 + 2)  piercing damage.",
      name: "Dagger",
      range: "20/60",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "non-lawful",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: `It takes a strong personality, ruthless cunning, and a silver tongue to keep a gang of bandits in line. The bandit captain has these qualities in spades.
In addition to managing a crew of selfish malcontents, the pirate captain is a variation of the bandit captain, with a ship to protect and command. To keep the crew in line, the captain must mete out rewards and punishment on a regular basis.
More than treasure, a bandit captain or pirate captain craves infamy. A prisoner who appeals to the captain's vanity or ego is more likely to be treated fairly than a prisoner who does not or claims not to know anything of the captain's colorful reputation.`,
  group: "NPCs",
  hitDice: {
    count: 10,
    size: "d8",
    modifier: 0,
  },
  languages: "any two languages Challenge 2 (450 XP)",
  name: "Bandit Captain",
  reactions: [
    {
      averageDamage: 0,
      description:
        "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.",
      name: "Parry",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Athletics]: {
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
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "studded",
  _ruleset: "2014",
} as Monster;
