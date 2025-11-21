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
    [AbilityScores.Strength]: 3,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 7,
    [AbilityScores.Charisma]: 1,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 15,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 0 ft., one target in the swarm's space. *Hit:* 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "beasts",
    goodEvil: "",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/2",
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
  name: "Swarm of Insects",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 10 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.SWARM()],
  speed: {
    climb: 20,
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
