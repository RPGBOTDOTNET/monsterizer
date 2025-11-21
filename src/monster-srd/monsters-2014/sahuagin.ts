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
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 9,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 8,
      description:
        "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d4 + 1",
      damageType: DamageTypes.Piercing,
      description:
        "*3 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4 + 1) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d4 + 1",
      damageType: DamageTypes.Slashing,
      description:
        "*3 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4 + 1) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 4,
      description:
        "*Melee or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
      name: "Spear",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "sahuagin",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 4,
    size: "d8",
    modifier: 0,
  },
  languages: "Sahuagin",
  name: "Sahuagin",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.BLOOD_FRENZY(),
    SPECIAL_TRAITS.LIMITED_AMPHIBIOUSNESS("4 hours"),
    SPECIAL_TRAITS.SHARK_TELEPATHY(),
  ],
  speed: {
    land: 30,
    swim: 40,
  },
  size: CreatureSizes.Medium,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
