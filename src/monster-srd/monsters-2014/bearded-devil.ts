import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 11,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 14,
      description:
        "The devil makes two attacks: one with its beard and one with its glaive.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:* 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Beard",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 10 ft., one target. *Hit:* 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
      name: "Glaive",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "3",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 8,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Bearded Devil",
  reactions: [],
  saveDc: 12,
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.STEADFAST(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
