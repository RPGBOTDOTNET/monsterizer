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
    [AbilityScores.Strength]: 16,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 11,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 12,
  },
  ac: 15,
  actions: [
    {
      averageDamage: 14,
      description:
        "The vampire makes two attacks, only one of which can be a bite attack.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 6,
      description:
        "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. *Hit:* 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 6,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Necrotic,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Vampires",
  hitDice: {
    count: 11,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  name: "Vampire Spawn",
  reactions: [],
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
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
    SPECIAL_TRAITS.REGENERATION(
      10,
      " and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn",
    ),
    SPECIAL_TRAITS.SPIDER_CLIMB(),
    SPECIAL_TRAITS.VAMPIRE_WEAKNESSES(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
