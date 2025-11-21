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
    [AbilityScores.Strength]: 9,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 9,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 10,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 0 ft., one target in the swarm's space. *Hit:* 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
  ],
  attack: 2,
  alignment: {
    lawChaos: "beasts",
    goodEvil: "",
  },
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Frightened,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Prone,
    Conditions.Restrained,
    Conditions.Stunned,
  ],
  creatureSubtype: "swarm of tiny beasts",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Bludgeoning,
    DamageTypes.Piercing,
    DamageTypes.Slashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: -7,
  },
  languages: "",
  name: "Swarm of Rats",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 30 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell"),
    SPECIAL_TRAITS.SWARM(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
