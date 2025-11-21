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
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 6,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 1,
  },
  ac: 8,
  actions: [
    {
      attackModifier: 4,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 9,
      damageType: DamageTypes.Acid,
      description:
        "*9 Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.",
      name: "Pseudopod",
      reach: 5,
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
  damageImmunities: [DamageTypes.Lightning, DamageTypes.Slashing],
  damageResistances: [DamageTypes.Acid],
  damageVulnerabilities: [],
  description: "",
  group: "Oozes",
  hitDice: {
    count: 6,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Ochre Jelly",
  reactions: [
    {
      averageDamage: 0,
      description:
        "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.",
      name: "Split",
      reusable: 3,
      targets: 0,
    },
  ],
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.AMORPHOUS(), SPECIAL_TRAITS.SPIDER_CLIMB()],
  speed: {
    climb: 10,
    land: 10,
  },
  usesAttackBonus: true,
  size: CreatureSizes.Large,
  _ruleset: "2014",
} as Monster;
