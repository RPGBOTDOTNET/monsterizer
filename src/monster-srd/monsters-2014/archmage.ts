import {
  AbilityScores,
  ActionTypes,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  Skills,
  SpellcastingTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 10,
    [AbilityScores.Dexterity]: 14,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 20,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 16,
  },
  ac: 12,
  acNotes: "15 with mage armor",
  actions: [
    {
      attackModifier: 6,
      attackType: AttackTypes.EitherWeapon,
      averageDamage: 4,
      damageType: DamageTypes.Piercing,
      description:
        "*Melee or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 4 (1d4 + 2)  piercing damage.",
      name: "Dagger",
      range: "20/60",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 56,
      description: "Upcast Cone of Cold at 9th level.",
      hideFromStatBlock: true,
      name: "Cone of Cold (9th level)",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 42,
      description: "Upcast Cone of Cold at 7h level.",
      hideFromStatBlock: true,
      name: "Cone of Cold (7th level)",
      reusable: 1,
      targets: 2,
    },
    {
      averageDamage: 35,
      description: "Upcast Cone of Cold at 6th level.",
      hideFromStatBlock: true,
      name: "Cone of Cold (6th level)",
      reusable: 1,
      targets: 2,
    },
  ],
  alignment: {
    lawChaos: "",
    goodEvil: "",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "12",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Humanoid",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
    DamageTypes.Spells,
  ],
  damageVulnerabilities: [],
  description: `Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.
An archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.`,
  group: "NPCs",
  hitDice: {
    count: 18,
    size: "d8",
    modifier: 0,
  },
  languages: "any six languages",
  name: "Archmage",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Intelligence]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
  },
  senses: "",
  skills: {
    [Skills.Arcana]: {
      proficient: 1,
    },
    [Skills.History]: {
      proficient: 1,
    },
  },
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  spellcasting: [
    {
      casterLevel: 18,
      class: "wizard",
      extraText:
        "The archmage can cast disguise self and invisibility at will.",
      knowsSpells: false,
      spells: {
        cantrips: [
          {
            castingTime: ActionTypes.Action,
            damage: 22,
            name: "fire bolt",
            targets: 1,
          },
          { castingTime: ActionTypes.Action, name: "light" },
          { castingTime: ActionTypes.Action, name: "mage hand" },
          { castingTime: ActionTypes.Action, name: "prestidigitation" },
          {
            castingTime: ActionTypes.Action,
            damage: 22,
            name: "shocking grasp",
            targets: 1,
          },
        ],
        1: [
          { castingTime: ActionTypes.Action, name: "detect magic" },
          { castingTime: ActionTypes.Action, name: "identify" },
          {
            castBeforeCombat: true,
            castingTime: ActionTypes.Action,
            name: "mage armor",
          },
          { castingTime: ActionTypes.Action, name: "magic missile" },
        ],
        2: [
          { castingTime: ActionTypes.Action, name: "detect thoughts" },
          { castingTime: ActionTypes.Action, name: "mirror image" },
          { castingTime: ActionTypes.Action, name: "misty step" },
        ],
        3: [
          { castingTime: ActionTypes.Action, name: "counterspell" },
          { castingTime: ActionTypes.Action, name: "fly" },
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "lightning bolt",
            targets: 2,
          },
        ],
        4: [
          { castingTime: ActionTypes.Action, name: "banishment" },
          { castingTime: ActionTypes.Action, name: "fire shield" },
          {
            castBeforeCombat: true,
            castingTime: ActionTypes.Action,
            name: "stoneskin",
          },
        ],
        5: [
          {
            castingTime: ActionTypes.Action,
            damage: 28,
            name: "cone of cold",
            targets: 2,
          },
          { castingTime: "Other", name: "scrying" },
          {
            castingTime: ActionTypes.Action,
            damage: 9,
            name: "wall of force",
            targets: 0,
          },
        ],
        6: [
          {
            castingTime: ActionTypes.Action,
            name: "globe of invulnerability",
          },
        ],
        7: [{ castingTime: ActionTypes.Action, name: "teleport" }],
        8: [
          {
            castBeforeCombat: true,
            castingTime: ActionTypes.Action,
            name: "mind blank",
          },
        ],
        9: [{ castingTime: ActionTypes.Action, name: "time stop" }],
      },
      spellcastingAbility: AbilityScores.Intelligence,
      type: SpellcastingTypes.Spellcasting,
    },
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: false,
  _ruleset: "2014",
} as Monster;
