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
    [AbilityScores.Strength]: 26,
    [AbilityScores.Dexterity]: 22,
    [AbilityScores.Constitution]: 26,
    [AbilityScores.Intelligence]: 25,
    [AbilityScores.Wisdom]: 25,
    [AbilityScores.Charisma]: 30,
  },
  ac: 21,
  actions: [
    {
      averageDamage: 44,
      description: "The solar makes two greatsword attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 15,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 22,
      damageType: DamageTypes.Radiant,
      description:
        "*22 Attack:* +15 to hit, reach 5 ft., one target. *Hit:* 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
      name: "Greatsword",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 13,
      attackType: AttackTypes.RangedWeapon,
      averageDamage: 15,
      description:
        "*Ranged Weapon Attack:* +13 to hit, range 150/600 ft., one target. *Hit:* 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
      name: "Slaying Longbow",
      range: "150/600",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
      name: "Flying Sword",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
      name: "Healing Touch (4/Day)",
      reusable: 0,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Good",
  },
  attack: 15,
  cantSpeak: false,
  challenge: "21",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Frightened,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Celestial",
  damageImmunities: [DamageTypes.Necrotic, DamageTypes.Poison],
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
    count: 18,
    size: "d10",
    modifier: 0,
  },
  innateSpellcasting: {
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 25,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect evil and good",
      },
      {
        castingTime: ActionTypes.Action,
        name: "invisibility",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        damage: 33,
        name: "blade barrier",
        recharge: RestTypes.Long,
        targets: 2,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "dispel evil and good",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: "Other",
        name: "resurrection",
        recharge: RestTypes.Long,
        uses: 3,
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
        name: "control weather",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "all, telepathy 120 ft.",
  legendaryActions: [
    {
      averageDamage: 0,
      cost: 1,
      description:
        "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
      name: "Teleport",
      targets: 0,
    },
    {
      averageDamage: 28,
      cost: 2,
      description:
        "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
      name: "Searing Burst",
      targets: 2,
    },
    {
      averageDamage: 0,
      cost: 3,
      description:
        "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
      name: "Blinding Gaze",
      targets: 0,
    },
  ],
  name: "Solar",
  reactions: [],
  saveDc: 25,
  savingThrows: {
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "truesight 120 ft.",
  skills: {
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.ANGELIC_WEAPONS(),
    SPECIAL_TRAITS.DIVINE_AWARENESS(),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
  ],
  speed: {
    fly: 150,
    land: 50,
  },
  size: CreatureSizes.Large,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
