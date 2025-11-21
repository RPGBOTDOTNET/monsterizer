import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 14,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 14,
      description: "The doppelganger makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 6,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 7,
      damageExpression: "1d6 + 4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*7 Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7 (1d6 + 4) bludgeoning damage.",
      name: "Slam",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.",
      name: "Read Thoughts",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [Conditions.Charmed],
  creatureSubtype: "shapechanger",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dinosaurs",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "Common",
  name: "Doppelganger",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.AMBUSHER(),
    SPECIAL_TRAITS.SURPRISE_ATTACK(10, "3d6"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
