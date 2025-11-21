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
    [AbilityScores.Strength]: 22,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 12,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 17,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 40,
      description:
        "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "2d8 + 6",
      damageType: DamageTypes.Piercing,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 15 (2d8 + 6) piercing damage.",
      name: "Fork",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 14,
      description:
        "*Ranged Spell Attack:* +7 to hit, range 150 ft., one target. *Hit:* 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
      name: "Hurl Flame",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 17,
    size: "d10",
    modifier: 0,
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Horned Devil",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 60,
    land: 20,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
