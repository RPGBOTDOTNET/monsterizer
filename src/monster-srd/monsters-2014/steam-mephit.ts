import {
  AbilityScores,
  ActionTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 5,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 12,
  },
  ac: 10,
  actions: [
    {
      averageDamage: 4,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature. *Hit:* 2 (1d4) slashing damage plus 2 (1d4) fire damage.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 4,
      description:
        "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Steam Breath (Recharge 6)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "",
  creatureType: "Elemental",
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
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
        name: "blur",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Aquan, Ignan",
  name: "Steam Mephit",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.DEATH_BURST(
      4,
      "1d8",
      DamageTypes.Fire.toLocaleLowerCase(),
      10,
      "steam",
      false,
      10,
    ),
  ],
  speed: {
    fly: 30,
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
