import {
  AbilityScores,
  ActionTypes,
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
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 16,
    [AbilityScores.Intelligence]: 16,
    [AbilityScores.Wisdom]: 14,
    [AbilityScores.Charisma]: 16,
  },
  ac: 17,
  actions: [
    {
      averageDamage: 13,
      description:
        "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage.",
      name: "Claws (Hag Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.",
      name: "Change Shape",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession.",
      name: "Etherealness",
      reusable: 4,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic.",
      name: "Nightmare Haunting (1/Day)",
      reusable: 4,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Neutral",
    goodEvil: "Evil",
  },
  attack: 10,
  cantSpeak: false,
  challenge: "5",
  conditionImmunities: [Conditions.Charmed],
  creatureSubtype: "",
  creatureType: "Fiend",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Hags",
  hitDice: {
    count: 15,
    size: "d8",
    modifier: 0,
  },
  innateSpellcasting: {
    spellAttack: 6,
    spellcastingAbility: AbilityScores.Charisma,
    spellDc: 14,
    spells: [
      // at will
      {
        castingTime: ActionTypes.Action,
        name: "detect magic",
      },
      {
        castingTime: ActionTypes.Action,
        damage: 10.5,
        name: "magic missile",
        targets: 1,
      },
      // 2/day
      {
        castingTime: ActionTypes.Action,
        name: "plane shift (self only)",
        recharge: RestTypes.Long,
        uses: 2,
      },
      {
        castingTime: ActionTypes.Action,
        name: "ray of enfeeblement",
        recharge: RestTypes.Long,
        uses: 2,
      },
      {
        castingTime: ActionTypes.Action,
        name: "sleep",
        recharge: RestTypes.Long,
        uses: 2,
      },
    ],
  },
  languages: "Abyssal, Common, Infernal, Primordial",
  name: "Night Hag",
  reactions: [],
  saveDc: 15,
  savingThrows: {},
  senses: "darkvision 120 ft.",
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
  },
  specialTraits: [SPECIAL_TRAITS.MAGIC_RESISTANCE()],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
