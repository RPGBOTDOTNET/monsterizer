import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 21,
    [AbilityScores.Dexterity]: 9,
    [AbilityScores.Constitution]: 15,
    [AbilityScores.Intelligence]: 18,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 18,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 36,
      description: "The aboleth makes three tentacle attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 12,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
      name: "Tentacle.",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 9,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 15,
      damageExpression: "3d6 + 5",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 10 ft., one target. *Hit:* 15 (3d6 + 5) bludgeoning damage.",
      name: "Tail",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "(3/Day). The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance. Whenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
      name: "Enslave",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "10",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Aberration",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 18,
    size: "d10",
    modifier: 0,
  },
  languages: "Deep Speech, telepathy 120 ft.",
  legendaryActions: [
    {
      averageDamage: 0,
      cost: 1,
      description: "The aboleth makes a Wisdom (Perception) check.",
      name: "Detect",
      targets: 0,
    },
    {
      averageDamage: 15,
      cost: 1,
      description: "Swipe. The aboleth makes one tail attack.",
      name: "Tail",
      targets: 1,
    },
    {
      averageDamage: 10,
      cost: 2,
      description:
        "Drain. One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
      name: "Psychic",
      targets: 1,
    },
  ],
  name: "Aboleth",
  reactions: [],
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.History]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.AMPHIBIOUS(),
    SPECIAL_TRAITS.MUCOUS_CLOUD(14),
    SPECIAL_TRAITS.PROBING_TELEPATHY(),
  ],
  speed: {
    land: 10,
    swim: 40,
  },
  saveDc: 14,
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
