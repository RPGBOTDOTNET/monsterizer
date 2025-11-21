import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 11,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 5,
    [AbilityScores.Wisdom]: 8,
    [AbilityScores.Charisma]: 3,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 8,
      description:
        "The dretch makes two attacks: one with its bite and one with its claws.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 2,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d6",
      damageType: DamageTypes.Piercing,
      description:
        "*3 Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 3 (1d6) piercing damage.",
      name: "Bite",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 5,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one target. *Hit:* 5 (2d4) slashing damage.",
      name: "Fetid Cloud (1/Day)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 2,
  cantSpeak: false,
  challenge: "1/4",
  conditionImmunities: [Conditions.Poisoned],
  creatureSubtype: "demon",
  creatureType: "Fiend",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [
    DamageTypes.Cold,
    DamageTypes.Fire,
    DamageTypes.Lightning,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Demons",
  hitDice: {
    count: 4,
    size: "d6",
    modifier: 0,
  },
  languages:
    "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
  name: "Dretch",
  reactions: [],
  saveDc: 11,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    land: 20,
  },
  size: CreatureSizes.Small,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
