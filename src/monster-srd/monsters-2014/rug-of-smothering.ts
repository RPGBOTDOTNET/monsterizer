import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 3,
    [AbilityScores.Charisma]: 1,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one Medium or smaller creature. *Hit:* The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
      name: "Smother",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
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
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Rug of Smothering",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ANTIMAGIC_SUSCEPTIBILITY(),
    SPECIAL_TRAITS.DAMAGE_TRANSFER(33),
    SPECIAL_TRAITS.FALSE_APPEARANCE("a normal rug"),
  ],
  speed: {
    land: 10,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
