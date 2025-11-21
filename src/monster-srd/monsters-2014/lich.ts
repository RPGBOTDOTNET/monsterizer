import {
  AbilityScores,
  ActionTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  Skills,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 16,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 20,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 16,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 10,
      description:
        "*Melee Spell Attack:* +12 to hit, reach 5 ft., one creature. *Hit:* 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Paralyzing Touch",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "any",
    goodEvil: "Evil",
  },
  attack: 12,
  cantSpeak: false,
  challenge: "21",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [
    DamageTypes.Poison,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Lightning,
    DamageTypes.Necrotic,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 18,
    size: "d8",
    modifier: 0,
  },
  languages: "Common plus up to five other languages",
  legendaryActions: [
    {
      averageDamage: 18,
      cost: 1,
      description: "The lich casts a cantrip.",
      name: "Cantrip",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 2,
      description: "The lich uses its Paralyzing Touch.",
      name: "Paralyzing Touch",
      targets: 0,
    },
    {
      averageDamage: 0,
      cost: 2,
      description:
        "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
      name: "Frightening Gaze",
      targets: 0,
    },
    {
      averageDamage: 21,
      cost: 3,
      description:
        "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
      name: "Disrupt Life",
      targets: 2,
    },
  ],
  name: "Lich",
  reactions: [],
  saveDc: 20,
  savingThrows: {
    [AbilityScores.Constitution]: {
      proficient: 1,
    },
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "truesight 120 ft.",
  skills: {
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
      proficient: 1,
    },
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 21),
    SPECIAL_TRAITS.REJUVENATION(
      "Rejuvenation",
      "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.",
    ),
    SPECIAL_TRAITS.TURN_RESISTANCE(),
  ],
  spellcasting: [
    {
      casterLevel: 18,
      class: "wizard",
      knowsSpells: false,
      spells: {
        cantrips: [
          { castingTime: ActionTypes.Action, name: "mage hand" },
          { castingTime: ActionTypes.Action, name: "prestidigitation" },
          {
            castingTime: ActionTypes.Action,
            damage: 18,
            name: "ray of frost",
            targets: 1,
          },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "detect magic" },
          {
            castingTime: ActionTypes.Action,
            damage: 10.5,
            name: "magic missile",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "shield" },
          { castingTime: ActionTypes.Action, name: "thunderwave" },
        ],
        2: [
          {
            castingTime: ActionTypes.Action,
            damage: 15,
            name: "acid arrow",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "detect thoughts" },
          { castingTime: ActionTypes.Action, name: "invisibility" },
          { castingTime: ActionTypes.Action, name: "mirror image" },
        ],
        3: [
          { castingTime: "Other", name: "animate dead" },
          { castingTime: ActionTypes.Action, name: "counterspell" },
          { castingTime: ActionTypes.Action, name: "dispel magic" },
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "fireball",
            targets: 2,
          },
        ],
        4: [
          {
            castingTime: ActionTypes.Action,
            damage: 36,
            name: "blight",
            targets: 2,
          },
          { castingTime: ActionTypes.Action, name: "dimension door" },
        ],
        5: [
          {
            castingTime: ActionTypes.Action,
            damage: 22.5,
            name: "cloudkill",
            targets: 2,
          },
          { castingTime: "Other", name: "scrying" },
        ],
        6: [
          {
            castingTime: ActionTypes.Action,
            damage: 75,
            name: "disintegrate",
            targets: 1,
          },
          {
            castingTime: ActionTypes.Action,
            name: "globe of invulnerability",
          },
        ],
        7: [
          {
            castingTime: ActionTypes.Action,
            damage: 61.5,
            name: "finger of death",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "plane shift" },
        ],
        8: [
          { castingTime: ActionTypes.Action, name: "dominate monster" },
          { castingTime: ActionTypes.Action, name: "power word stun" },
        ],
        9: [{ castingTime: ActionTypes.Action, name: "power word kill" }],
      },
      spellAttack: 12,
      spellcastingAbility: AbilityScores.Intelligence,
      spellDc: 20,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
