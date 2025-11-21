import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 8,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 13,
    [AbilityScores.Intelligence]: 15,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 20,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6 + 3) slashing damage.",
      name: "Claw (Fiend Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.
The fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.`,
      name: "Charm",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 32,
      description:
        "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
      name: "Draining Kiss",
      reusable: 2,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.",
      name: "Etherealness",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [],
  creatureSubtype: "shapechanger",
  creatureType: "Fiend",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.Poison,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d8",
    modifier: 0,
  },
  languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
  name: "Succubus/Incubus",
  reactions: [],
  saveDc: 15,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
    [Skills.Persuasion]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.TELEPATHIC_BOND(),
    SPECIAL_TRAITS.SHAPECHANGER(
      "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
    ),
  ],
  speed: {
    fly: 60,
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
