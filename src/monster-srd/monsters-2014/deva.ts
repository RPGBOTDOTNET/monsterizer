import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
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
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 17,
    [AbilityScores.Wisdom]: 20,
    [AbilityScores.Charisma]: 20,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 50,
      description: "The deva makes two melee attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 8,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 25,
      damageType: DamageTypes.Radiant,
      description:
        "*25 Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 25 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
      name: "Mace",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      name: "Healing Touch (3/Day)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).
In a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.`,
      name: "Change Shape",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 8,
  cantSpeak: false,
  challenge: "10",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
  ],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Radiant,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Angels",
  hitDice: {
    count: 16,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    extraDescription: "requiring only verbal components",
    spellDc: 17,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect evil and good",
      },
      // 1/day
      {
        castingTime: "Other",
        name: "commune",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: "Other",
        name: "raise dead",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "all, telepathy 120 ft.",
  name: "Deva",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.ANGELIC_WEAPONS(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 90,
    land: 30,
  },
  size: CreatureSizes.Medium,
  acNotes: "natural",
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
