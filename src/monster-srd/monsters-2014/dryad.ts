import {
  AbilityScores,
  ActionTypes,
  CreatureSizes,
  RestTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 12,
    [AbilityScores.Constitution]: 11,
    [AbilityScores.Intelligence]: 14,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 18,
  },
  ac: 11,
  acNotes: "16 with barkskin",
  actions: [
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. *Hit:* 2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.",
      name: "Club",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.
Each time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.
The dryad can have no more than one humanoid and up to three beasts charmed at a time.`,
      name: "Fey Charm",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Neutral",
    lawChaos: "Neutral",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Fey",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    spellDc: 14,
    spellcastingAbility: AbilityScores.Charisma,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "druidcraft",
      },
      // 3/day
      {
        castingTime: ActionTypes.Action,
        name: "entangle",
        recharge: RestTypes.Long,
        uses: 3,
      },
      {
        castingTime: ActionTypes.Action,
        name: "goodberry",
        recharge: RestTypes.Long,
        uses: 3,
      },
      // 1/day
      {
        castingTime: ActionTypes.Action,
        name: "barkskin",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.Action,
        name: "pass without trace",
        recharge: RestTypes.Long,
        uses: 1,
      },
      {
        castingTime: ActionTypes.BonusAction,
        name: "shillelagh",
        recharge: RestTypes.Long,
        uses: 1,
      },
    ],
  },
  languages: "Elvish, Sylvan",
  name: "Dryad",
  reactions: [],
  saveDc: 14,
  savingThrows: {},
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
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.SPEAK_WITH_BEASTS_AND_PLANTS(),
    SPECIAL_TRAITS.TREE_STRIDE(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
