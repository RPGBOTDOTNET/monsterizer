import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 8,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 6,
  },
  ac: 9,
  actions: [
    {
      averageDamage: 17,
      description:
        "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 17,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature. *Hit:* 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.",
      name: "Bites",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn.",
      name: "Blinding Spittle (Recharge 5-6)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "2",
  conditionImmunities: [Conditions.Prone],
  creatureSubtype: "",
  creatureType: "Aberration",
  damageImmunities: [],
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
  name: "Gibbering Mouther",
  reactions: [],
  saveDc: 13, // Might also be 10
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ABERRANT_GROUND(10, 10),
    SPECIAL_TRAITS.GIBBERING(10, 20),
  ],
  speed: {
    land: 10,
    swim: 10,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
