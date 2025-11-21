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
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 3,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 0 ft., one creature in the swarm's space. *Hit:* 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "beasts",
    goodEvil: "",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "2",
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
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Swarm of Poisonous Snakes",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "blindsight 10 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.SWARM()],
  speed: {
    land: 30,
    swim: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
