import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 12,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 29,
      description:
        "The salamander makes two attacks: one with its spear and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 11,
      description:
        "*Melee or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
      name: "Spear",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 18,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 10 ft., one target. *Hit:* 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Fire],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [DamageTypes.Cold],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d10",
    modifier: 0,
  },
  languages: "Ignan",
  name: "Salamander",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ELEMENTAL_BODY(
      7,
      "2d6",
      DamageTypes.Fire.toLocaleLowerCase(),
      "Heated Body",
    ),
    SPECIAL_TRAITS.HEATED_WEAPONS(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
