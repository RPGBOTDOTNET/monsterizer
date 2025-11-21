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
    [AbilityScores.Strength]: 5,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 10,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Claws (Bite in Beast Form)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.",
      name: "Invisibility",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.",
      name: "Scare (1/Day)",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "shapechanger)",
    goodEvil: "",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 3,
    size: "d4",
    modifier: 0,
  },
  languages: "Abyssal, Common",
  name: "Quasit",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
