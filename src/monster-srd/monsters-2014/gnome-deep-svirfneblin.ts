import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 9,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage.",
      name: "War Pick",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 4,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one creature. *Hit:* 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Poisoned Dart",
      range: "30/120",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Good",
  },
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [],
  creatureSubtype: "gnome",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 3,
    size: "d6",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 11,
    spellcastingAbility: AbilityScores.Intelligence,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "nondetection (self only)",
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "blindness/deafness",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "blur",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "disguise self",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Gnomish, Terran, Undercommon",
  name: "Gnome, Deep (Svirfneblin)",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Investigation]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.TERRAIN_CAMOUFLAGE("Stone", "in rocky terrain"),
    SPECIAL_TRAITS.CUNNING("Gnome Cunning"),
  ],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  acNotes: "chain",
  _ruleset: "2014",
} as Monster;
