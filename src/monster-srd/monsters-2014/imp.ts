import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 6,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 14,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 15,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
      name: "Sting (Bite in Beast Form)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.",
      name: "Invisibility",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
      name: "Shapechanger",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "devil",
  creatureType: "Fiend",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Devils",
  hitDice: {
    count: 3,
    size: "d4",
    modifier: 0,
  },
  languages: "Infernal, Common",
  name: "Imp",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "darkvision 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEVILS_SIGHT(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 40,
    land: 20,
  },
  size: CreatureSizes.Tiny,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
