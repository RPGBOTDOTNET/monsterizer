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
    [AbilityScores.Strength]: 7,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 9,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 4,
      damageExpression: "1d4 + 2",
      damageType: DamageTypes.Piercing,
      description:
        "*4 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage.",
      name: "Dagger",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 4,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:* 4 (1d4 + 2) bludgeoning damage.",
      name: "Sling",
      range: "30/120",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/8",
  conditionImmunities: [],
  creatureSubtype: "kobold",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 2,
    size: "d6",
    modifier: -2,
  },
  languages: "Common, Draconic",
  name: "Kobold",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY(),
    SPECIAL_TRAITS.PACK_TACTICS(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
