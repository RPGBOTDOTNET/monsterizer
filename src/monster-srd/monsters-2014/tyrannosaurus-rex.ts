import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 25,
    [AbilityScores.Dexterity]: 10,
    [AbilityScores.Constitution]: 19,
    [AbilityScores.Intelligence]: 2,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 9,
  },
  ac: 13,
  actions: [
    {
      averageDamage: 53,
      description:
        "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 33,
      description:
        "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 10,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 20,
      damageExpression: "3d8 + 7",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*20 Attack:* +10 to hit, reach 10 ft., one target. *Hit:* 20 (3d8 + 7) bludgeoning damage.",
      name: "Tail",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Beast",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Dinosaurs",
  hitDice: {
    count: 13,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Tyrannosaurus Rex",
  reactions: [],
  saveDc: 17,
  savingThrows: {},
  senses: "",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [],
  speed: {
    land: 50,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
