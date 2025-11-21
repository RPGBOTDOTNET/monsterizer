import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 5,
    [AbilityScores.Charisma]: 1,
  },
  ac: 17,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 5,
      damageExpression: "1d8 + 1",
      damageType: DamageTypes.Slashing,
      description:
        "*5 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8 + 1) slashing damage.",
      name: "Longsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Charmed,
    Conditions.Deafened,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "construct",
  damageImmunities: [DamageTypes.Poison, DamageTypes.Psychic],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Animated Objects",
  hitDice: {
    count: 5,
    size: "d6",
    modifier: 0,
  },
  languages: "",
  name: "Flying Sword",
  nameShort: "sword",
  reactions: [],
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
  },
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ANTIMAGIC_SUSCEPTIBILITY(),
    SPECIAL_TRAITS.FALSE_APPEARANCE("a normal sword", "isn't flying"),
  ],
  speed: {
    fly: 50,
    hover: true,
    land: 0,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
