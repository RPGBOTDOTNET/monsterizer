import {
  AbilityScores,
  ActionTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 5,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 10,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 4 (1d4 + 2) slashing damage.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Blinding Breath (Recharge 6)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [DamageTypes.Fire],
  description: "",
  group: "Mephits",
  hitDice: {
    count: 5,
    size: "d6",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      {
        castingTime: ActionTypes.Action,
        name: "sleep",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Auran, Terran",
  name: "Dust Mephit",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.DEATH_BURST_BLINDING(10, "dust", 5)],
  speed: {
    fly: 30,
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
