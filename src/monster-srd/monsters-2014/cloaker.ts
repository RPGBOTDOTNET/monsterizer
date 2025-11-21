import {
  AbilityScores,
  CreatureSizes,
  type Monster,
  Skills,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 17,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 14,
  },
  ac: 14,
  actions: [
    {
      averageDamage: 17,
      description:
        "The cloaker makes two attacks: one with its bite and one with its tail.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 10,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 10 ft., one creature. *Hit:* 7 (1d8 + 3) slashing damage.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours",
      name: "Moan",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description: `The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.
Whenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.
A duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.`,
      name: "Phantasms (Recharges after a Short or Long Rest)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Neutral",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "8",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Aberration",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 12,
    size: "d10",
    modifier: 0,
  },
  languages: "Deep Speech, Undercommon",
  name: "Cloaker",
  reactions: [],
  saveDc: 16,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.DAMAGE_TRANSFER(78),
    SPECIAL_TRAITS.FALSE_APPEARANCE(
      "a darkj leather cloak",
      "without its underside exposed",
    ),
    SPECIAL_TRAITS.LIGHT_SENSITIVITY(),
  ],
  speed: {
    fly: 40,
    land: 10,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
