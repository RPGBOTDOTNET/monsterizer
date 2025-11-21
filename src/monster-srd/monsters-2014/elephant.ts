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
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 6,
  },
  ac: 12,
  actions: [
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 19,
      damageExpression: "3d8 + 6",
      damageType: DamageTypes.Piercing,
      description:
        "*19 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 19 (3d8 + 6) piercing damage.",
      name: "Gore",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one prone creature. *Hit:* 22 (3d10 + 6) bludgeoning damage.",
      name: "Stomp",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 8,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Elephant",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.POUNCE("gore", 22, 12, 20, "stomp", "Trampling Charge"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
