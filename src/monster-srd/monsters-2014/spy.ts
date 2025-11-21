import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 16,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 10,
      description: "The spy makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d6 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*5 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Shortsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Hand Crossbow",
      range: "30/120",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "Rulers, nobles, merchants, guildmasters, and other wealthy individuals use spies to gain the upper hand in a world of cutthroat politics. A spy is trained to secretly gather information. Loyal spies would rather die than divulge information that could compromise them or their employers.",
  group: "NPCs",
  hitDice: {
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "any two languages",
  name: "Spy",
  reactions: [],
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.SleightOfHand]: {
      proficient: 1,
    },
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Investigation]: {
      proficient: 1,
    },
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.CUNNING_ACTION(),
    SPECIAL_TRAITS.SNEAK_ATTACK(7, "2d6"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
