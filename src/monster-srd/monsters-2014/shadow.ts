import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 6,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 6,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 9,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest." +
        "If a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.",
      name: "Strength Drain",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [
    Conditions.Exhaustion,
    Conditions.Frightened,
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
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [DamageTypes.Radiant],
  description: "",
  group: "",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Shadow",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.AMORPHOUS(),
    SPECIAL_TRAITS.SHADOW_STEALTH(),
    SPECIAL_TRAITS.SUNLIGHT_WEAKNESS(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
