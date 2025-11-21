import {
  AbilityScores,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 19,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 12,
  },
  ac: 10,
  acNotes: "11 in bear and hybrid form",
  actions: [
    {
      averageDamage: 26,
      description:
        "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 15,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy.",
      name: "Bite (Bear or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 13,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Claw (Bear or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 10 (1d12 + 4) slashing damage.",
      name: "Greataxe (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "shapechanger)",
    goodEvil: "",
  },
  attack: 7,
  cantSpeak: false,
  challenge: "5",
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
    count: 18,
    size: "d8",
    modifier: 0,
  },
  languages: "Common (can't speak in bear form)",
  name: "Werebear",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.KEEN_SENSES("Smell", "smell"),
  ],
  speed: {
    climb: 30,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
