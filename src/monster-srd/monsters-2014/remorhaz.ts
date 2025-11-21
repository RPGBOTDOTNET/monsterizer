import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 24,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 21,
    [AbilityScores.Intelligence]: 4,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 5,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 50,
      description:
        "*Melee Weapon Attack:* +11 to hit, reach 10 ft., one target. *Hit:* 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 21,
      description: `The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.
If the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.`,
      name: "Swallow",
      reusable: 0,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 11,
  cantSpeak: false,
  challenge: "11",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [DamageTypes.Cold, DamageTypes.Fire],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 17,
    size: "d12",
    modifier: 0,
  },
  languages: "",
  name: "Remorhaz",
  reactions: [],
  saveDc: 17,
  savingThrows: {},
  senses: "darkvision 60 ft., tremorsense 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ELEMENTAL_BODY(
      10,
      "3d6",
      DamageTypes.Fire.toLocaleLowerCase(),
      "Heated Body",
    ),
    SPECIAL_TRAITS.SWALLOW(21),
  ],
  speed: {
    burrow: 20,
    land: 30,
  },
  size: CreatureSizes.Huge,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
