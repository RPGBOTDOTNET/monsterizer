import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 26,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 24,
    [AbilityScores.Intelligence]: 22,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 24,
  },
  ac: 19,
  actions: [
    {
      averageDamage: 78,
      description:
        "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "*Melee Weapon Attack:* +14 to hit, reach 5 ft., one target. *Hit:* 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 14,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 17,
      damageExpression: "2d8 + 8",
      damageType: DamageTypes.Slashing,
      description:
        "*17 Attack:* +14 to hit, reach 10 ft., one target. *Hit:* 17 (2d8 + 8) slashing damage.",
      name: "Claw",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 14,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageType: DamageTypes.Fire,
      description:
        "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:* 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage.",
      name: "Mace",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 14,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 24,
      damageExpression: "3d10 + 8",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*24 Attack:* +14 to hit, reach 10 ft., one target. *Hit:* 24 (3d10 + 8) bludgeoning damage.",
      name: "Tail",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 14,
  cantSpeak: false,
  challenge: "20",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [
    // TODO: Put this in a unit test
    DamageTypes.Cold,
    "bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 24,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 21,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      {
        castingTime: ActionTypes.Action,
        damage: 28,
        name: "fireball",
        targets: 2,
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "hold monster",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        damage: 22.5,
        name: "wall of fire",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 3,
      },
    ],
  },
  languages: "Infernal, telepathy 120 ft.",
  name: "Pit Fiend",
  reactions: [],
  saveDc: 21,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.FEAR_AURA(21, false, 300, 20),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.MAGIC_WEAPONS(),
  ],
  speed: {
    fly: 60,
    land: 30,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
