import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  DamageTypes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 14,
    [AbilityScores.Dexterity]: 17,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 13,
    [AbilityScores.Wisdom]: 16,
    [AbilityScores.Charisma]: 20,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 18,
      description: "The rakshasa makes two claw attacks.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 9,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.",
      name: "Claw",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "13",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fiend",
  damageImmunities: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [
    "piercing from magic weapons wielded by good creatures",
  ],
  description: "",
  group: "",
  hitDice: {
    count: 13,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    spellAttack: 10,
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 18,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect thoughts",
      },
      {
        castingTime: ActionTypes.Action,
        name: "disguise self",
      },
      {
        castingTime: ActionTypes.Action,
        name: "mage hand",
      },
      {
        castingTime: ActionTypes.Action,
        name: "minor illusion",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "charm person",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "invisibility",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "major image",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "suggestion",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "dominate person",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "fly",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "plane shift",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "true seeing",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Common, Infernal",
  name: "Rakshasa",
  reactions: [],
  saveDc: 18,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {
    [Skills.Insight]: {
      proficient: 1,
    },
    [Skills.Deception]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.LIMITED_MAGIC_IMMUNITY()],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
