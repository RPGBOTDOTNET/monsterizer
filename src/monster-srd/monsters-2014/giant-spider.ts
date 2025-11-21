import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 4,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:* 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 0,
      description:
        "*Ranged Weapon Attack:* +5 to hit, range 30/60 ft., one creature. *Hit:* The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
      name: "Web (Recharge 5-6)",
      range: "30/60",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description:
    "To snare its prey, a giant spider spins elaborate webs or shoots sticky strands of webbing from its abdomen. Giant spiders are most commonly found underground, making their lairs on ceilings or in dark, web-filled crevices. Such lairs are often festooned with web cocoons holding past victims.",
  group: "",
  hitDice: {
    count: 4,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Giant Spider",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "blindsight 10 ft., darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SPIDER_CLIMB(),
    SPECIAL_TRAITS.WEB_SENSE(),
    SPECIAL_TRAITS.WEB_WALKER(),
  ],
  speed: {
    climb: 30,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
