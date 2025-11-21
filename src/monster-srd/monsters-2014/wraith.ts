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
    [AbilityScores.Strength]: 6,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 15,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 21,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
      name: "Life Drain",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.",
      name: "Create Specter",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
    Conditions.Prone,
    Conditions.Restrained,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Necrotic, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Acid,
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.Thunder,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Wraith",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.INCORPOREAL_MOVEMENT(),
    SPECIAL_TRAITS.SUNLIGHT_SENSITIVITY(),
  ],
  speed: {
    fly: 60,
    hover: true,
    land: 0,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
