import {
  AbilityScores,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 13,
    [AbilityScores.Dexterity]: 15,
    [AbilityScores.Constitution]: 10,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 6,
  },
  ac: 12,
  actions: [
    {
      averageDamage: 9,
      description:
        "*Melee Weapon Attack:* +2 to hit, reach 5 ft., one creature. *Hit:* 9 (2d6 + 2) piercing damage.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 7,
      description:
        "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
      name: "Claws",
      reusable: 3,
      targets: 1,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 4,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Exhaustion,
    Conditions.Poisoned,
  ],
  creatureSubtype: "",
  creatureType: "Undead",
  damageImmunities: [DamageTypes.Poison],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "Ghouls",
  hitDice: {
    count: 5,
    size: "d8",
    modifier: 0,
  },
  languages: "Common",
  name: "Ghoul",
  reactions: [],
  saveDc: 10,
  savingThrows: {},
  senses: "darkvision 60 ft.",
  skills: {},
  specialTraits: [],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
