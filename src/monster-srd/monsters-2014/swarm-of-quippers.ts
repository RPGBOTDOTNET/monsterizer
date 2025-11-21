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
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 9,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 2,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 21,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 0 ft., one creature in the swarm's space. *Hit:* 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "beasts",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
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
    count: 8,
    size: "d8",
    modifier: -8,
  },
  languages: "",
  name: "Swarm of Quippers",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.BLOOD_FRENZY(),
    SPECIAL_TRAITS.SWARM(),
    SPECIAL_TRAITS.WATER_BREATHING(),
  ],
  speed: {
    land: 0,
    swim: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
