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
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 13,
    [AbilityScores.Charisma]: 8,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.",
      name: "Pseudopod",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 5,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 11,
      damageType: DamageTypes.Acid,
      description:
        "*11 Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 11 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [Conditions.Prone],
  creatureSubtype: "shapechanger",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Acid],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d8",
    modifier: 0,
  },
  languages: "",
  name: "Mimic",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.ADHESIVE("Adhesive (Object Form Only)"),
    SPECIAL_TRAITS.FALSE_APPEARANCE("an ordinary object", "is in object form"),
    SPECIAL_TRAITS.GRAPPLER(),
  ],
  speed: {
    land: 15,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
