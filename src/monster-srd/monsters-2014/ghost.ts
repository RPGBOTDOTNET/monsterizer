import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 7,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 10,
    [AbilityScores.Wisdom]: 12,
    [AbilityScores.Charisma]: 17,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 17,
      description:
        "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17 (4d6 + 3) necrotic damage.",
      name: "Withering Touch",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
      name: "Etherealness",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.",
      name: "Horrifying Visage",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies. The possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.",
      name: "Possession (Recharge 6)",
      reusable: 1,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "4",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Grappled,
    Conditions.Paralyzed,
    Conditions.Petrified,
    Conditions.Poisoned,
    Conditions.Prone,
    Conditions.Restrained,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [
    DamageTypes.Cold,
    DamageTypes.Necrotic,
    DamageTypes.Poison,
  ],
  damageResistances: [
    DamageTypes.Acid,
    DamageTypes.Fire,
    DamageTypes.Lightning,
    DamageTypes.Thunder,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 10,
    size: "d8",
    modifier: 0,
  },
  languages: "any languages it knew in life",
  name: "Ghost",
  reactions: [],
  saveDc: 13,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.ETHEREAL_SIGHT(60),
    SPECIAL_TRAITS.INCORPOREAL_MOVEMENT(),
  ],
  speed: {
    fly: 40,
    hover: true,
    land: 0,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
