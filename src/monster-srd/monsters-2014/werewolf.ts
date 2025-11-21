import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 15,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 14,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 11,
  acNotes: "12 in hybrid or wolf form",
  actions: [
    {
      averageDamage: 13,
      description:
        "The werewolf makes two attacks: one with its bite and one with its claws or spear.",
      name: "Multiattack (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
      name: "Bite (Wolf or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 7 (2d4 + 2) slashing damage.",
      name: "Claws (Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 5,
      description:
        "*Melee or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60 ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
      name: "Spear (Humanoid Form Only)",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "shapechanger)",
    goodEvil: "",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [],
  creatureSubtype: "human",
  creatureType: "Humanoid",
  damageImmunities: [
    "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Lycanthropes",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "Common (can't speak in wolf form)",
  name: "Werewolf",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
