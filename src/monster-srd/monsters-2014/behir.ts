import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 23,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 12,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 39,
      description:
        "The behir makes two attacks: one with its bite and one to constrict.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageExpression: "3d10 + 6",
      damageType: DamageTypes.Piercing,
      description:
        "*22 Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 22 (3d10 + 6) piercing damage.",
      name: "Bite",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 34,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one Large or smaller creature. *Hit:* 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
      name: "Constrict",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 66,
      description:
        "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Breath (Recharge 5-6)",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 21,
      description:
        "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time. If the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone.",
      name: "Swallow",
      reusable: 0,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Lightning],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 16,
    size: "d12",
    modifier: 0,
  },
  languages: "Draconic",
  name: "Behir",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "darkvision 90 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.SWALLOW(21)],
  speed: {
    climb: 40,
    land: 50,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
