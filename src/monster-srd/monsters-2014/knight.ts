import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 15,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 20,
      description: "The knight makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "2d6 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*10 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage.",
      name: "Greatsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 2,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +2 to hit, range 100/400 ft., one target. *Hit:* 5 (1d10) piercing damage.",
      name: "Heavy Crossbow",
      range: "100/400",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
      name: "Leadership (Recharges after a Short or Long Rest)",
      reusable: 1,
      targets: 0,
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
    "Knights are warriors who pledge service to rulers, religious orders, and noble causes. A knight's alignment determines the extent to which a pledge is honored. Whether undertaking a quest or patrolling a realm, a knight often travels with an entourage that includes squires and hirelings who are commoners.",
  group: "NPCs",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "any one language (usually Common)",
  name: "Knight",
  reactions: [
    {
      averageDamage: 0,
      description:
        "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.",
      name: "Parry",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.BRAVE()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "plate",
  _ruleset: "2014",
} as Monster;
