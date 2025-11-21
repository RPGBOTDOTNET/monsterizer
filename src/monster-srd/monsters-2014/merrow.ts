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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 9,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 19,
      description:
        "The merrow makes two attacks: one with its bite and one with its claws or harpoon.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 8,
      damageExpression: "1d8 + 4",
      damageType: DamageTypes.Piercing,
      description:
        "*8 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8 (1d8 + 4) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageExpression: "2d4 + 4",
      damageType: DamageTypes.Slashing,
      description:
        "*9 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 9 (2d4 + 4) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 11 (2d6 + 3)  piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.",
      name: "Harpoon",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, Aquan",
  name: "Merrow",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.AMPHIBIOUS()],
  speed: {
    land: 10,
    swim: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
