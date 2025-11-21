import {
  AbilityScores,
  AttackTypes,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 12,
    [AbilityScores.Dexterity]: 13,
    [AbilityScores.Constitution]: 12,
    [AbilityScores.Intelligence]: 7,
    [AbilityScores.Wisdom]: 10,
    [AbilityScores.Charisma]: 13,
  },
  ac: 11,
  actions: [
    {
      averageDamage: 9,
      description:
        "The harpy makes two attacks: one with its claws and one with its club.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 6,
      damageExpression: "2d4 + 1",
      damageType: DamageTypes.Slashing,
      description:
        "*6 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 6 (2d4 + 1) slashing damage.",
      name: "Claws",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 3,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 3,
      damageExpression: "1d4 + 1",
      damageType: DamageTypes.Bludgeoning,
      description:
        "*3 Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4 + 1) bludgeoning damage.",
      name: "Club",
      reach: 5,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.
While charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.
A target that successfully saves is immune to this harpy's song for the next 24 hours.`,
      name: "Luring Song",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Chaotic",
    goodEvil: "Evil",
  },
  attack: 5,
  cantSpeak: false,
  challenge: "1",
  conditionImmunities: [],
  creatureSubtype: "",
  creatureType: "Monstrosity",
  damageImmunities: [],
  damageResistances: [],
  damageVulnerabilities: [],
  description: "",
  group: "",
  hitDice: {
    count: 7,
    size: "d8",
    modifier: 0,
  },
  languages: "Common",
  name: "Harpy",
  reactions: [],
  saveDc: 15,
  savingThrows: {},
  senses: "",
  skills: {},
  specialTraits: [],
  speed: {
    fly: 40,
    land: 20,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  _ruleset: "2014",
} as Monster;
