import {
  AbilityScores,
  AttackTypes,
  Conditions,
  CreatureSizes,
  DamageTypes,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 30,
    [AbilityScores.Dexterity]: 11,
    [AbilityScores.Constitution]: 30,
    [AbilityScores.Intelligence]: 3,
    [AbilityScores.Wisdom]: 11,
    [AbilityScores.Charisma]: 11,
  },
  ac: 25,
  actions: [
    {
      averageDamage: 204,
      description:
        "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite.",
      name: "Multiattack",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 36,
      description:
        "*Melee Weapon Attack:* +19 to hit, reach 10 ft., one target. *Hit:* 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
      name: "Bite",
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 19,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 28,
      damageExpression: "4d8 + 10",
      damageType: DamageTypes.Slashing,
      description:
        "*28 Attack:* +19 to hit, reach 15 ft., one target. *Hit:* 28 (4d8 + 10) slashing damage.",
      name: "Claw",
      reach: 15,
      reusable: 3,
      targets: 1,
    },
    {
      attackModifier: 19,
      attackType: AttackTypes.MeleeWeapon,
      averageDamage: 32,
      damageExpression: "4d10 + 10",
      damageType: DamageTypes.Piercing,
      description:
        "*32 Attack:* +19 to hit, reach 10 ft., one target. *Hit:* 32 (4d10 + 10) piercing damage.",
      name: "Horns",
      reach: 10,
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 24,
      description:
        "*Melee Weapon Attack:* +19 to hit, reach 20 ft., one target. *Hit:* 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
      name: "Tail",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description:
        "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours.",
      name: "Frightful Presence",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 56,
      description: `The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.
If the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.`,
      name: "Swallow",
      reusable: 0,
      targets: 1,
    },
  ],
  alignment: {
    goodEvil: "Unaligned",
    lawChaos: "Unaligned",
  },
  attack: 19,
  cantSpeak: false,
  challenge: "30",
  conditionImmunities: [
    Conditions.Charmed,
    Conditions.Frightened,
    Conditions.Paralyzed,
    Conditions.Poisoned,
  ],
  creatureSubtype: "titan",
  creatureType: "Monstrosity",
  damageImmunities: [
    DamageTypes.Fire,
    DamageTypes.Poison,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageResistances: [],
  damageVulnerabilities: [],
  description: `The legendary tarrasque is possibly the most dreaded monster of the Material Plane. It is widely believed that only one of these creatures exists, though no one can predict where and when it will strike.
A scaly biped, the tarrasque is fifty feet tall and seventy feet long, weighing hundreds of tons. It carries itself like a bird of prey, leaning forward and using its powerful lashing tail for balance. Its cavernous maw yawns wide enough to swallow all but the largest creatures, and so great is its hunger that it can devour the populations of whole towns.
***Legendary Destruction.*** The destructive potential of the tarrasque is so vast that some cultures incorporate the monster into religious doctrine, weaving its sporadic appearance into stories of divine judgment and wrath. Legends tell how the tarrasque slumbers in its secret lair beneath the earth, remaining in a dormant state for decades or centuries. When it awakens in answer to some inscrutable cosmic call, it rises from the depths to obliterate everything in its path.`,
  group: "",
  hitDice: {
    count: 33,
    size: "d20",
    modifier: 0,
  },
  languages: "",
  legendaryActions: [
    {
      averageDamage: 28,
      cost: 1,
      description: "The tarrasque makes one claw attack or tail attack.",
      name: "Attack",
      targets: 1,
    },
    {
      averageDamage: 0,
      cost: 1,
      description: "The tarrasque moves up to half its speed.",
      name: "Move",
      targets: 0,
    },
    {
      averageDamage: 56,
      cost: 2,
      description: "The tarrasque makes one bite attack or uses its Swallow.",
      name: "Chomp",
      targets: 1,
    },
  ],
  name: "Tarrasque",
  reactions: [],
  saveDc: 20,
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
  senses: "blindsight 120 ft.",
  skills: {},
  specialTraits: [
    SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 30),
    SPECIAL_TRAITS.MAGIC_RESISTANCE(),
    SPECIAL_TRAITS.REFLECTIVE_CARAPACE(),
    SPECIAL_TRAITS.SIEGE_MONSTER(),
    SPECIAL_TRAITS.SWALLOW(56),
  ],
  speed: {
    land: 40,
  },
  size: CreatureSizes.Gargantuan,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
