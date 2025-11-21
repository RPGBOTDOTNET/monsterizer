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
    [AbilityScores.Strength]: 5,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 4,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 0 ft., one creature in the swarm's space. *Hit:* 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "beasts",
    goodEvil: "",
  },
  attack: 4,
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
  creatureType: "beast",
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
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Swarm of Bats",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ECHOLOCATION(),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing", "hearing"),
    SPECIAL_TRAITS.SWARM(),
  ],
  speed: {
    fly: 30,
    land: 0,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
