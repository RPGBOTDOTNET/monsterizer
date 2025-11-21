import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 8,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 8,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 38,
      description:
        "The vrock makes two attacks: one with its beak and one with its talons.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 10,
      damageExpression: "2d6 + 3",
      damageType: DamageTypes.Piercing,
      description:
        "*10 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) piercing damage.",
      name: "Beak",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 14,
      damageExpression: "2d10 + 3",
      damageType: DamageTypes.Slashing,
      description:
        "*14 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 14 (2d10 + 3) slashing damage.",
      name: "Talons",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 15,
      description:
        "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
      name: "Spores (Recharge 6)",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 0,
      description:
        "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn.",
      name: "Stunning Screech (1/Day)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "6",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 11,
    size: "d10",
    modifier: 0,
  },
  languages: "Abyssal, telepathy 120 ft.",
  name: "Vrock",
  reactions: [],
  saveDc: 14,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  speed: {
    fly: 60,
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
