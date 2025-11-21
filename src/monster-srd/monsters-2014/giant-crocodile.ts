import { AbilityScores, CreatureSizes, type Monster } from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 17,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 7,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 35,
      description:
        "The crocodile makes two attacks: one with its bite and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 21,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 14,
      description:
        "*Melee Weapon Attack:* +8 to hit, reach 10 ft., one target not grappled by the crocodile. *Hit:* 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 9,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Giant Crocodile",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [SPECIAL_TRAITS.HOLD_BREATH("30 minutes")],
  speed: {
    land: 30,
    swim: 50,
  },
  size: CreatureSizes.Huge,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
