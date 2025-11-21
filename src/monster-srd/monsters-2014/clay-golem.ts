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
    [AbilityScores.Strength]: 20,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 1,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 32,
      description: "The golem makes two slam attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 16,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
      name: "Slam",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.",
      name: "Haste (Recharge 5-6)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 8,
  cantSpeak: true,
  challenge: "9",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "construct",
  damageImmunities: [
    DamageTypes.Acid,
    DamageTypes.Poison,
    DamageTypes.Psychic,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine",
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Golems",
  hitDice: {
    count: 14,
    size: "d10",
    modifier: 0,
  },
  languages: "understands the languages of its creator",
  name: "Clay Golem",
  nameShort: "golem",
  reactions: [],
  saveDc: 15,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DAMAGE_ABSORPTION(
      DamageTypes.Acid.toLocaleLowerCase(),
      "Acid Absorption",
    ),
    SPECIAL_TRAITS.BERSERK(60, false),
    SPECIAL_TRAITS.IMMUTABLE_FORM(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
  ],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
