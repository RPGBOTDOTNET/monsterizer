import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 5,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 26,
      description:
        "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 7,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 13,
      damageExpression: "2d8 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*13 Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) bludgeoning damage.",
      name: "Slam",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 13,
      description:
        "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.",
      name: "Engulf",
      reusable: 2,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Deafened,
    Conditions.Exhaustion,
  ],
  creatureSubtype: "",
  creatureType: "Plant",
  damageImmunities: [DamageTypes.Lightning],
  damageResistances: [DamageTypes.Cold, DamageTypes.Fire],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 16,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Shambling Mound",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.DAMAGE_ABSORPTION("lightning", "Lightning Absorption"),
  ],
  speed: {
    land: 20,
    swim: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
