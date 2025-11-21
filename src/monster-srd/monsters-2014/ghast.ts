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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 8,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 12,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one creature. *Hit:* 12 (2d8 + 3) piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [DamageTypes.Necrotic],
  damageVulnerabilities: [],
  description: "",
  group: "Ghouls",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "Common",
  name: "Ghast",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.STENCH(10, 5),
    SPECIAL_TRAITS.TURNING_DEFIANCE(30),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
