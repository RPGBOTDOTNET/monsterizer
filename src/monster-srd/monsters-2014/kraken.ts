import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 30,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 25,
    [AbilityScores.Intelligence]: 22,
    [AbilityScores.Wisdom]: 18,
    [AbilityScores.Charisma]: 20,
  },
  ac: 18,
  actions: [
    {
      averageDamage: 60,
      description:
        "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 23,
      description:
        "*Melee Weapon Attack:* +17 to hit, reach 5 ft., one target. *Hit:* 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns." +
        "If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 20,
      description:
        "*Melee Weapon Attack:* +17 to hit, reach 30 ft., one target. *Hit:* 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
      name: "Tentacle",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 3,
      description:
        "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone.",
      name: "Fling",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 22,
      description:
        "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
      name: "Lightning Storm",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 17,
  cantSpeak: true,
  challenge: "23",
  conditionImmunities: [Conditions.Frightened, Conditions.Paralyzed],
  creatureSubtype: "titan",
  creatureType: "Monstrosity",
  damageImmunities: [
    DamageTypes.Lightning,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 27,
    size: "d20",
    modifier: 0,
  },
  languages: "Abyssal, Celestial, Infernal, and Primordial, telepathy 120 ft.,",
  legendaryActions: [
    {
      averageDamage: 20,
      cost: 1,
      description: "The kraken makes one tentacle attack or uses its Fling.",
      name: "Tentacle Attack or Fling",
      targets: 1,
    },
    {
      averageDamage: 22,
      cost: 2,
      description: "The kraken uses Lightning Storm.",
      name: "Lightning Storm",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 3,
      description:
        "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.",
      name: "Ink Cloud",
      targets: 0,
    },
  ],
  name: "Kraken",
  reactions: [],
  saveDc: 18,
  savingThrows: {
    [AbilityScores.Strength]: {
      proficient: 1,
    },
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
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
  senses: "truesight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.AMPHIBIOUS(),
    SPECIAL_TRAITS.FREEDOM_OF_MOVEMENT(),
    SPECIAL_TRAITS.SIEGE_MONSTER(),
    SPECIAL_TRAITS.SWALLOW(42),
  ],
  speed: {
    land: 20,
    swim: 60,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
