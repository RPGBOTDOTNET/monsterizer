import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 3,
    [AbilityScores.Constitution]: 20,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 1,
  },
  ac: 6,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 10 (3d6) acid damage.",
      name: "Pseudopod",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 31,
      description: `The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.
On a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.
On a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.
An engulfed creature can try to escape by taking an action to make a DC 12 Strength check.
On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.`,
      name: "Engulf",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Charmed,
    Conditions.Deafened,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Prone,
  ],
  creatureSubtype: "",
  creatureType: "Ooze",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Oozes",
  hitDice: {
    count: 8,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Gelatinous Cube",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.OOZE_CUBE(10, "3D6", 12),
    SPECIAL_TRAITS.TRANSPARENT(15),
  ],
  speed: {
    land: 15,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
