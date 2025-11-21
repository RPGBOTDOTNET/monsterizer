import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 25,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 12,
  },
  ac: 20,
  actions: [
    {
      averageDamage: 58,
      description:
        "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 26,
      damageExpression: "3d12 + 7",
      damageType: DamageTypes.Piercing,
      description:
        "*26 Attack:* +13 to hit, reach 15 ft., one target. *Hit:* 26 (3d12 + 7) piercing damage.",
      name: "Bite",
      reach: 15,
      reusable: 1,
      targets: 6,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 16,
      damageExpression: "2d8 + 7",
      damageType: DamageTypes.Slashing,
      description:
        "*16 Attack:* +13 to hit, reach 10 ft., one target. *Hit:* 16 (2d8 + 7) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 26,
      description:
        "*Melee Weapon Attack:* +13 to hit, reach 15 ft., one target. *Hit:* 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 52,
      description:
        "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
      name: "Steam Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 13,
  cantSpeak: false,
  challenge: "17",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Dragon",
  damageImmunities: [],
  damageResistances: [DamageTypes.Fire],
  damageVulnerabilities: [],
  description: "",
  group: "Dragons, Metallic",
  hitDice: {
    count: 22,
    size: "d20",
    modifier: 0,
  },
  languages: "Aquan, Draconic",
  name: "Dragon Turtle",
  reactions: [],
  saveDc: 18,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 20,
    swim: 40,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
