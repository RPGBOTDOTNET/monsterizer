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
    [AbilityScores.Strength]: 20,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 7,
  },
  ac: 19,
  actions: [
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 18,
      damageExpression: "2d12 + 5",
      damageType: DamageTypes.Piercing,
      description:
        "*18 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 18 (2d12 + 5) piercing damage.",
      name: "Gore",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 16,
      damageExpression: "2d10 + 5",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*16 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 16 (2d10 + 5) bludgeoning damage.",
      name: "Hooves",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.",
      name: "Petrifying Breath (Recharge 5-6)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [Conditions.Petrified],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d10",
    modifier: 0,
  },
  languages: "",
  name: "Gorgon",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.POUNCE("gore", 16, 16, 20, "hooves", "Trampling Charge"),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
