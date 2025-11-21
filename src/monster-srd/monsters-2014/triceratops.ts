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
    [AbilityScores.Strength]: 22,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 5,
  },
  ac: 13,
  actions: [
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 24,
      damageExpression: "4d8 + 6",
      damageType: DamageTypes.Piercing,
      description:
        "*24 Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 24 (4d8 + 6) piercing damage.",
      name: "Gore",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one prone creature. *Hit:* 22 (3d10 + 6) bludgeoning damage.",
      name: "Stomp",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dinosaurs",
  hitDice: {
    count: 10,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Triceratops",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.POUNCE("gore", 22, 13, 20, "stomp", "Trampling Charge"),
  ],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
