import {
  AbilityScores,
  CreatureSizes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 8,
  },
  ac: 10,
  acNotes: "11 in boar or hybrid form",
  actions: [
    {
      averageDamage: 20,
      description:
        "The wereboar makes two attacks, only one of which can be with its tusks.",
      name: "Multiattack (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) bludgeoning damage.",
      name: "Maul (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.",
      name: "Tusks (Boar or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "shapechanger)",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "4",
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
    count: 12,
    size: "d8",
    modifier: 0,
  },
  languages: "Common (can't speak in boar form)",
  name: "Wereboar",
  reactions: [],
  saveDc: 12,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.CHARGE(
      7,
      "2d6",
      "slashing",
      15,
      "Charge (Boar or Hybrid Form Only)",
      "tusks",
    ),
    SPECIAL_TRAITS.RELENTLESS(4, 14),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
