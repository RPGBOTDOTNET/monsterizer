import {
  AbilityScores,
  CreatureSizes,
  DamageTypes,
  Skills,
  type Monster,
} from "../../types";
import { SPECIAL_TRAITS } from "../monster-traits";

export default {
  abilityScores: {
    [AbilityScores.Strength]: 18,
    [AbilityScores.Dexterity]: 18,
    [AbilityScores.Constitution]: 18,
    [AbilityScores.Intelligence]: 17,
    [AbilityScores.Wisdom]: 15,
    [AbilityScores.Charisma]: 18,
  },
  ac: 16,
  actions: [
    {
      averageDamage: 25,
      description:
        "The vampire makes two attacks, only one of which can be a bite attack.",
      name: "Multiattack (Vampire Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 8,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one creature. *Hit:* 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
      name: "Unarmed Strike (Vampire Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 17,
      description:
        "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. *Hit:* 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
      name: "Bite (Bat or Vampire Form Only)",
      reusable: 3,
      targets: 1,
    },
    {
      averageDamage: 0,
      description: `The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.
Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.`,
      name: "Charm",
      reusable: 3,
      targets: 0,
    },
    {
      averageDamage: 0,
      description:
        "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
      name: "Children of the Night (1/Day)",
      reusable: 3,
      targets: 0,
    },
  ],
  alignment: {
    lawChaos: "Lawful",
    goodEvil: "Evil",
  },
  attack: 9,
  cantSpeak: false,
  challenge: "13",
  conditionImmunities: [],
  creatureSubtype: "shapechanger",
  creatureType: "Undead",
  damageImmunities: [],
  damageResistances: [
    DamageTypes.Necrotic,
    DamageTypes.NMBludgeoning,
    DamageTypes.NMPiercing,
    DamageTypes.NMSlashing,
  ],
  damageVulnerabilities: [],
  description: "",
  group: "Vampires",
  hitDice: {
    count: 17,
    size: "d8",
    modifier: 0,
  },
  languages: "the languages it knew in life",
  legendaryActions: [
    {
      averageDamage: 0,
      cost: 1,
      description:
        "The vampire moves up to its speed without provoking opportunity attacks.",
      name: "Move",
      targets: 0,
    },
    {
      averageDamage: 8,
      cost: 1,
      description: "The vampire makes one unarmed strike.",
      name: "Unarmed Strike",
      targets: 1,
    },
    {
      averageDamage: 17,
      cost: 2,
      description: "The vampire makes one bite attack.",
      name: "Bite",
      targets: 1,
    },
  ],
  name: "Vampire",
  reactions: [],
  saveDc: 17,
  savingThrows: {
    [AbilityScores.Dexterity]: {
      proficient: 1,
    },
    [AbilityScores.Wisdom]: {
      proficient: 1,
    },
    [AbilityScores.Charisma]: {
      proficient: 1,
    },
  },
  senses: "darkvision 120 ft.",
  skills: {
    [Skills.Stealth]: {
      proficient: 1,
    },
    [Skills.Perception]: {
      proficient: 1,
    },
  },
  specialTraits: [
    SPECIAL_TRAITS.SHAPECHANGER(
      `If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.
While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed,
are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.
While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter
a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water.
It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.`,
    ),
    SPECIAL_TRAITS.LEGENDARY_RESISTANCE(3, 13),
    SPECIAL_TRAITS.MISTY_ESCAPE(),
    SPECIAL_TRAITS.REGENERATION(
      20,
      " and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn",
    ),
    SPECIAL_TRAITS.SPIDER_CLIMB(),
    SPECIAL_TRAITS.VAMPIRE_WEAKNESSES(),
  ],
  speed: {
    land: 30,
  },
  size: CreatureSizes.Medium,
  usesAttackBonus: true,
  acNotes: "natural",
  _ruleset: "2014",
} as Monster;
