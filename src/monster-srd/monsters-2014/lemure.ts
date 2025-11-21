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
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 5,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 3,
  },
  ac: 7,
  actions: [
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 2,
      damageExpression: "1d4",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*2 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 2 (1d4) bludgeoning damage.",
      name: "Fist",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 3,
  cantSpeak: true,
  challenge: "0",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Frightened,
    Conditions.Poisoned,
  ],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [DamageTypes.Cold],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "Infernal",
  name: "Lemure",
  reactions: [],
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.REJUVENATION(
      "Hellish Rejuvenation",
      "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.",
    ),
  ],
  speed: {
    land: 15,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
