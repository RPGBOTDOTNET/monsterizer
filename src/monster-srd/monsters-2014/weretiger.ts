import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 11,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 14,
      description:
        "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.",
      name: "Multiattack (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8 (1d10 + 3)  piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.",
      name: "Bite (Tiger or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) slashing damage.",
      name: "Claw (Tiger or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) slashing damage.",
      name: "Scimitar (Humanoid or Hybrid Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 4,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 6,
      description:
        "*Ranged Weapon Attack:* +4 to hit, range 150/600 ft., one target. *Hit:* 6 (1d8 + 2) piercing damage.",
      name: "Longbow (Humanoid or Hybrid Form Only)",
      range: "150/600",
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
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Lycanthropes",
  hitDice: {
    count: 16,
    size: "d8",
    modifier: 0,
  },
  languages: "Common (can't speak in tiger form)",
  name: "Weretiger",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
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
      "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.KEEN_SENSES("Hearing and Smell", "hearing or smell"),
    SPECIAL_TRAITS.POUNCE(
      "claw",
      7,
      14,
      15,
      "Pounce (Tiger or Hybrid Form Only)",
    ),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
