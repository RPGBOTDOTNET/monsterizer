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
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 10,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one creature. *Hit:* 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
      name: "Fire Breath (Recharge 6)",
      reusable: 1,
      targets: 1,
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
  damageImmunities: [DamageTypes.Fire, DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [DamageTypes.Cold],
  description: "",
  group: "Mephits",
  hitDice: {
    count: 5,
    size: "d6",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 10,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      {
        castingTime: ActionTypes.Action,
        damage: 27, // TODO: This is 9*3. Check is this lines up with CR.
        name: "heat metal",
        recharge: RestTypes.Long,
        targets: 1,
        uses: 1,
      },
    ],
  },
  languages: "Ignan, Terran",
  name: "Magma Mephit",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.DEATH_BURST(
      7,
      "2d6",
      DamageTypes.Fire.toLocaleLowerCase(),
      11,
      "lava",
      false,
      10,
    ),
    SPECIAL_TRAITS.FALSE_APPEARANCE("an orginary mound of magma"),
  ],
  speed: {
    fly: 30,
    land: 30,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
