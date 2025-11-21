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
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 10,
      description:
        "The wererat makes two attacks, only one of which can be a bite.",
      name: "Multiattack (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.",
      name: "Bite (Rat or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Shortsword (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 5,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:* 5 (1d6 + 2) piercing damage.",
      name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
      range: "30/120",
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
  challenge: "2",
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
    count: 6,
    size: "d8",
    modifier: 0,
  },
  languages: "Common (can't speak in rat form)",
  name: "Wererat",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "darkvision 60 ft. (rat form only)",
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
      " The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell"),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
