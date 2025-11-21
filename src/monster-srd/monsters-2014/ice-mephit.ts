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
    [AbilityScores.Strength]: 7,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 9,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 12,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one creature. *Hit:* 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.",
      name: "Frost Breath (Recharge 6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 3,
  cantSpeak: false,
  challenge: "1/2",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Cold, DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [DamageTypes.Bludgeoning, DamageTypes.Fire],
  description: "",
  group: "Mephits",
  hitDice: {
    count: 6,
    size: "d6",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      {
        castingTime: ActionTypes.Action,
        name: "fog cloud",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Aquan, Auran",
  name: "Ice Mephit",
  nameShort: "mephit",
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
  specialTraits: [
    SPECIAL_TRAITS.DEATH_BURST(
      4,
      "1d8",
      DamageTypes.Cold.toLocaleLowerCase(),
      10,
      "jagged ice",
      false,
      10,
    ),
    SPECIAL_TRAITS.FALSE_APPEARANCE("an ordinary shard of ice."),
  ],
  speed: {
    fly: 30,
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
