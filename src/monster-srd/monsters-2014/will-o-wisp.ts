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
    [AbilityScores.Strength]: 1,
    [AbilityScores.Dexterity]: 28,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 11,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 9,
      description:
        "*Melee Spell Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 9 (2d8) lightning damage.",
      name: "Shock",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).",
      name: "Invisibility",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 4,
  bonusActions: [
    {
      averageDamage: 0,
      description:
        "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points.",
      name: "Consume Life",
      reusable: 0,
      targets: 0,
    },
  ],
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [
    Conditions.Exhaustion,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Poisoned,
    Conditions.Prone,
    Conditions.Restrained,
    Conditions.Unconscious,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Lightning, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Acid,
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Necrotic,
    DamageTypes.Thunder,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d4",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Will-o'-Wisp",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.EPHEMERAL(),
    SPECIAL_TRAITS.INCORPOREAL_MOVEMENT(),
    SPECIAL_TRAITS.VARIABLE_ILLUMINATION(),
  ],
  speed: {
    fly: 50,
    hover: true,
    land: 0,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
