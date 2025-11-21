import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 6,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 1,
    [AbilityScores.Wisdom]: 6,
    [AbilityScores.Charisma]: 2,
  },
  ac: 8,
  actions: [
    {
      averageDamage: 11,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
      name: "Pseudopod",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [
    Conditions.Blinded,
    Conditions.Charmed,
    Conditions.Deafened,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Prone,
  ],
  creatureSubtype: "",
  creatureType: "Ooze",
  damageImmunities: [],
  damageResistances: [DamageTypes.Acid, DamageTypes.Cold, DamageTypes.Fire],
  damageVulnerabilities: [],
  description: "",
  group: "Oozes",
  hitDice: {
    count: 3,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Gray Ooze",
  reactions: [],
  savingThrows: {},
  senses: "blindsight 60 ft. (blind beyond this radius)",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.AMORPHOUS(),
    SPECIAL_TRAITS.CORRODE_METAL(),
    SPECIAL_TRAITS.FALSE_APPEARANCE("an oily pool or wet rock."),
  ],
  speed: {
    climb: 10,
    land: 10,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
