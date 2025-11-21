import { lowerFirst } from "lodash";
import type { DamageType, Monster, SpecialTrait } from "../types";

const NO_EFFECT_WARNING =
  "WARNING: Does not have an automatically-calculated effect on CR. Use with caution.";

const bonusWeaponDamageTraitBuilder = (
  name: string,
  damageType: string,
): (() => SpecialTrait) => {
  return (): SpecialTrait => {
    return {
      effect: {}, // Damage will be factored into attacks
      name: name,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        }'s weapon attacks are magical. When the ${
          monster.nameShort || monster.name
        } hits with any weapon, the weapon deals extra ${damageType} damage (included in the attacks listed above).`,
    };
  };
};

const legendaryResistanceEffectOnHp = (crString: string): number => {
  const cr = eval(crString); // TODO: Stop using eval
  if (cr <= 4) {
    return 10;
  } else if (cr <= 10) {
    return 20;
  } else {
    return 30;
  }
};

const relentlessEffectOnHp = (crString: string): number => {
  const cr = eval(crString); // TODO: Stop using eval
  if (cr <= 4) {
    return 7;
  } else if (cr <= 10) {
    return 14;
  } else if (cr <= 16) {
    return 21;
  } else {
    return 28;
  }
};

const undeadFortitudeEffectOnHp = relentlessEffectOnHp;

/* eslint-disable @typescript-eslint/no-explicit-any */
export const SPECIAL_TRAITS: {
  [name: string]: (...args: any[]) => SpecialTrait;
} = {
  /* eslint-enable @typescript-eslint/no-explicit-any */
  ABERRANT_GROUND: (dc: number = 0, radius: number = 10): SpecialTrait => {
    return {
      effect: {},
      name: "Aberrant Ground",
      text: (monster: Monster): string =>
        `The ground in a ${radius}-foot radius around the ${
          monster.nameShort || monster.name
        } is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC ${dc} Strength saving throw or have its speed reduced to 0 until the start of its next turn.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  ADHESIVE: (nameOverride: string = "Adhesive"): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } adheres to anything that touches it. A Huge or smaller creature adhered to the ${
          monster.nameShort || monster.name
        } is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage.`,
    };
  },
  AGGRESSIVE: (): SpecialTrait => {
    return {
      effect: { damagePerRound: 2 },
      name: "Aggressive",
      text: (monster: Monster): string =>
        `As a bonus action, the ${
          monster.nameShort || monster.name
        } can move  up to its speed toward a hostile creature that it can see.`,
    };
  },
  AMBUSHER: (): SpecialTrait => {
    return {
      effect: { attack: 1 },
      name: "Ambusher",
      text: (monster: Monster): string =>
        `In the first round of a combat, the ${
          monster.nameShort || monster.name
        } has advantage on attack rolls against any creature it has surprised.`,
    };
  },
  AMORPHOUS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Amorphous",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can move through space as narrow as 1 inch wide without squeezing.`,
    };
  },
  AMPHIBIOUS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Amphibious",
      text: (monster: Monster): string =>
        `The ${monster.nameShort || monster.name} can breathe air and water.`,
    };
  },
  ANGELIC_WEAPONS: bonusWeaponDamageTraitBuilder("Angelic Weapons", "radiant"),
  ANTIMAGIC_SUSCEPTIBILITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Antimagic Susceptibility",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is incapacitated while in the area of an antimagic field. If  targeted by dispel magic, the ${
          monster.nameShort || monster.name
        } must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.`,
    };
  },
  ASSASSINATE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Assassinate",
      text: (monster: Monster): string =>
        `During its first turn, the ${
          monster.nameShort || monster.name
        } has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the ${
          monster.nameShort || monster.name
        } scores against a surprised creature is a critical hit.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  AVOIDANCE: (): SpecialTrait => {
    return {
      effect: { ac: 1 },
      name: "Avoidance",
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.`,
    };
  },
  BARBED_HIDE: (
    damage: number = 0,
    damageDice: string = "0d0",
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Barbed Hide",
      text: (monster: Monster): string =>
        `At the start of each of its turns, the ${
          monster.nameShort || monster.name
        } deals ${damage} (${damageDice}) piercing damage to any creature grappling it.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  BEAST_OF_BURDEN: (): SpecialTrait => {
    return {
      effect: {},
      name: "Beast of Burden",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is considered to be a Large animal for the purpose of determining its carrying capacity.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  BERSERK: (
    hpThreshold: number = 60,
    masterCanCalm: boolean = false,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Berserk",
      text: (monster: Monster): string => {
        const calmText = masterCanCalm
          ? `The ${
              monster.nameShort || monster.name
            }'s creator, if within 60 feet of the berserk ${
              monster.nameShort || monster.name
            }, can try to calm it by speaking firmly and persuasively. The ${
              monster.nameShort || monster.name
            } must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the ${
              monster.nameShort || monster.name
            } ceases being berserk. If it takes damage while still at ${hpThreshold} hit points or fewer, the ${
              monster.nameShort || monster.name
            } might go berserk again.`
          : "";

        return `Whenever the ${
          monster.nameShort || monster.name
        } starts its turn with ${hpThreshold} hit points or fewer, roll a d6. On a 6, the ${
          monster.nameShort || monster.name
        } goes berserk. On each of its turns while berserk, the ${
          monster.nameShort || monster.name
        } attacks the nearest creature it can see. If no creature is near enough to move to and attack, the ${
          monster.nameShort || monster.name
        } attacks an object, with preference for an object smaller than itself. Once the ${
          monster.nameShort || monster.name
        } goes berserk, it continues to do so until it is destroyed or regains all its hit points.${calmText}`;
      },
      tooltip: NO_EFFECT_WARNING,
    };
  },
  BLIND_SENSES: (): SpecialTrait => {
    return {
      effect: {},
      name: "Blind Senses",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can't use its blindsight while deafened and unable to smell.`,
    };
  },
  BLOOD_FRENZY: (): SpecialTrait => {
    return {
      effect: { attack: 4 },
      name: "Blood Frenzy",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on melee attack rolls against any creature that doesn't have all its hit points.`,
    };
  },
  BOUND: (boundToWhat: string = "amulet", radius: number = 5): SpecialTrait => {
    return {
      effect: {},
      name: "Bound",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is magically bound to an ${lowerFirst(boundToWhat)}. As long as the ${
          monster.nameShort || monster.name
        } and its ${lowerFirst(
          boundToWhat,
        )} are on the same plane of existence, the ${lowerFirst(
          boundToWhat,
        )}'s wearer can telepathically call the ${
          monster.nameShort || monster.name
        } to travel to it, and the ${
          monster.nameShort || monster.name
        } knows the distance and direction to the ${lowerFirst(
          boundToWhat,
        )}. If the ${
          monster.nameShort || monster.name
        } is within ${radius} feet of the ${lowerFirst(
          boundToWhat,
        )}'s wearer, half of any damage the wearer takes (rounded up) is transferred to the ${
          monster.nameShort || monster.name
        }.`,
    };
  },
  // Better described under the creature's Actions
  //   BREATH_WEAPON: {
  // 	   effect: {},
  //     name: "Breath Weapon",
  //     text: (monster: Monster): string => "",
  //   },
  BRAVE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Brave",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on saving throws against being frightened.`,
      tooltip:
        "Be sure to indicate that the creature has resistance to Frightened in the Conditions table.",
    };
  },
  BRUTE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Brute",
      text: (monster: Monster): string =>
        `A melee weapon deals one extra die of its damage when the ${
          monster.nameShort || monster.name
        } hits with it (included in the attack).`,
      tooltip:
        "Marking this trait won't affect CR. Be sure to include the damage bonus in the creature's actions.",
    };
  },
  CHAMELEON_SKIN: (): SpecialTrait => {
    return {
      effect: {},
      name: "Chameleon Skin",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Dexterity (Stealth) checks made to hide.`,
    };
  },
  // Better handled as an Action
  // CHANGE_SHAPE: {
  //   name: "Change Shape",
  //   text: (monster: Monster): string => "",
  // },
  CHARGE: (
    damage: number = 0,
    damageDice: string = "0d0",
    damageType: string = "ANY",
    distance: number = 20,
    nameOverride: string = "Charge",
    triggeringAttack: string,
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage },
      name: nameOverride,
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } moves at least ${distance} feet straight toward a target and then hits it with a ${triggeringAttack} attack on the same turn, the target takes an extra ${damage} (${damageDice}) ${
          damageType ? damageType + " " : ""
        } damage.`,
    };
  },
  CHARGE_TOPPLING: (
    damage: number = 0,
    damageDice: string = "0d0",
    damageType: string = "",
    dc: number = 0,
    distance: number = 20,
    nameOverride: string = "Charge",
    triggeringAttack: string = "melee",
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage },
      name: nameOverride,
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } moves at least ${distance} feet straight toward a target and then hits it with a ${triggeringAttack} attack on the same turn, the target takes an extra ${damage} (${damageDice}) ${
          damageType ? damageType + " " : ""
        } damage. If the target is a creature, it must succeed on a DC ${dc} Strength saving throw or be knocked prone.`,
    };
  },
  // Better handled as an Action
  // CHARM: {
  //   name: "Charm",
  //   text: (monster: Monster): string => "",
  // },
  CONFER_DAMAGE_RESISTANCE: (
    damageTypeName: string = "DAMAGE TYPE",
    damageTypeDescription: string = "DAMAGE TYPE",
  ): SpecialTrait => {
    return {
      effect: {},
      name: `Confer ${damageTypeName} Resistance`,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can grant resistance to ${damageTypeDescription} damage to anyone riding it.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  CONSTRICT: (): SpecialTrait => {
    return {
      effect: { ac: 1 },
      hideFromStatBlock: true,
      name: "Constrict",
      text: (monster: Monster): string => {
        void monster;
        return "";
      },
      tooltip: `List Constrict as an action in addition to selecting it as a trait.`,
    };
  },
  CORRODE_METAL: (): SpecialTrait => {
    return {
      effect: {},
      name: "Corrode Metal",
      text: (monster: Monster): string =>
        `Any nonmagical weapon made of metal that hits the ${
          monster.nameShort || monster.name
        } corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ${
          monster.nameShort || monster.name
        } is destroyed after dealing damage. The ${
          monster.nameShort || monster.name
        } can eat through 2-inch-thick, nonmagical metal in 1 round.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  CORROSIVE_FORM: (
    damage: number = 4,
    damageDice: string = "1d8",
    damageType: string = "acid",
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: damage },
      name: "Elemental Body",
      text: (monster: Monster): string =>
        `A creature that touches the ${
          monster.nameShort || monster.name
        } or hits it with a melee attack while within 5 feet of it takes ${damage} (${damageDice}) ${damageType} damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage.
        The ${
          monster.nameShort || monster.name
        } can eat through 2-inch-thick, nonmagical wood or metal in 1 round.`,
      tooltip:
        "CR calculation is based on the Elemental Body trait, which has similar effects in combat but doesn't damage objects.",
    };
  },
  CUNNING: (nameOverride: string = "Cunning"): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  CUNNING_ACTION: (): SpecialTrait => {
    return {
      effect: { ac: 4, attack: 4 },
      name: "Cunning Action",
      text: (monster: Monster): string =>
        `On each of its turns, the  ${
          monster.nameShort || monster.name
        } can use a bonus action to take the Dash, Disengage, or Hide action.`,
      tooltip: "CR effect is based on Nimble Escape.",
    };
  },
  DAMAGE_ABSORPTION: (
    damageType: string,
    nameOverride = "Damage Absorbtion",
  ): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string =>
        `Whenever the ${
          monster.nameShort || monster.name
        } is subjected to ${damageType} damage, it takes no damage and instead regains a number of hit points equal to the ${damageType} damage dealt.`,
    };
  },
  DAMAGE_AVERSION: (
    damageTypeDescription: string = "fire",
    damageTypeName: string = "Fire",
  ): SpecialTrait => {
    return {
      effect: {},
      name: `Aversion of ${damageTypeName}`,
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } takes ${damageTypeDescription} damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  DAMAGE_TRANSFER: (monsterHp: number): SpecialTrait => {
    return {
      effect: { damageOnce: Math.floor(monsterHp / 3), hp: monsterHp },
      name: "Damage Transfer",
      text: (monster: Monster): string =>
        `While attached to a creature, the ${
          monster.nameShort || monster.name
        } takes only half the damage dealt to it (rounded down), and that creature takes the other half.`,
    };
  },
  DARK_DEVOTION: (): SpecialTrait => {
    return {
      effect: {},
      name: "Dark Devotion",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on saving throws against being charmed or frightened.`,
      tooltip:
        "Be sure to also mark these condition resistances in the Conditions table.",
    };
  },
  DEATH_BURST: (
    damage: number = 4,
    damageDice: string = "1d8",
    damageType: string = "fire",
    dc: number = 0,
    descriptor: string = "fire",
    flammable: boolean = true,
    range: number = 10,
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage * 2 },
      name: "Death Burst",
      text: (monster: Monster): string =>
        `When the ${
          monster.nameShort || monster.name
        } dies, it explodes in a burst of ${descriptor}. Each creature within ${range} feet of it must make a DC ${dc} Dexterity saving throw, taking ${damage} (${damageDice}) ${damageType} damage on a failed save, or half as much damage on a successful one. ${
          flammable
            ? "Flammable objects that aren't being worn or carried in that area are ignited."
            : ""
        }`,
    };
  },
  DEATH_BURST_BLINDING: (
    dc: number = 0,
    descriptor: string = "dust",
    range: number = 5,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Death Burst",
      text: (monster: Monster): string =>
        `When the ${
          monster.nameShort || monster.name
        } dies, it explodes in a burst of ${descriptor}. Each creature within ${range} feet of it must then succeed on a DC ${dc} Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.`,
    };
  },
  DEATH_THROES: (
    damage: number = 70,
    damageDice: string = "20d6",
    dc: number = 20,
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage * 2 },
      name: "Death Burst",
      text: (monster: Monster): string =>
        `When the ${
          monster.nameShort || monster.name
        } dies, it explodes, and each creature within 30 feet of it must make a DC ${dc} Dexterity saving throw, taking ${damage} (${damageDice}) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the ${
          monster.nameShort || monster.name
        }'s weapons.`,
    };
  },
  DEMONIC_WEAPONS: bonusWeaponDamageTraitBuilder("Angelic Weapons", "radiant"),
  DEVILS_SIGHT: (): SpecialTrait => {
    return {
      effect: {},
      name: "Devil's Sight",
      text: (monster: Monster): string =>
        `Magical darkness doesn't impede the ${
          monster.nameShort || monster.name
        } darkvision.`,
    };
  },
  DIVE: (
    damage: number = 0,
    damageDice: string = "0d0",
    distance: number = 30,
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage },
      name: "Dive",
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } is flying and dives at least ${distance} feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra ${damage} (${damageDice}) damage to the target.`,
    };
  },
  DIVINE_AWARENESS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Divine Awareness",
      text: (monster: Monster): string =>
        `The ${monster.nameShort || monster.name} knows if it hears a lie`,
    };
  },
  DIVINE_EMINENCE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Divine Eminence",
      text: (monster: Monster): string =>
        `As a bonus action, the ${
          monster.nameShort || monster.name
        } can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the ${
          monster.nameShort || monster.name
        } expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  DUERGAR_RESILIENCE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Duergar Resilience",
      text: (monster: Monster) =>
        `The  ${
          monster.nameShort || monster.name
        } has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  EARTH_GLIDE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Earth Glide",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can burrow through nonmagical, unworked earth and stone. While doing so, the ${
          monster.nameShort || monster.name
        } doesn't disturb the material it moves through.`,
    };
  },
  ECHOLOCATION: (): SpecialTrait => {
    return {
      effect: {},
      name: "Echolocation",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can't use its blindsight while deafened.`,
    };
  },
  ELEMENTAL_BODY: (
    damage: number = 0,
    damageDice: string = "0d0",
    damageType: DamageType,
    nameOverride: string = "Elemental Body",
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: damage },
      name: nameOverride,
      text: (monster: Monster): string =>
        `A creature that touches the ${
          monster.nameShort || monster.name
        } or hits it with a melee attack while within 5 feet of it takes ${damage} (${damageDice}) ${damageType} damage.`,
    };
  },
  ELEMENTAL_DEMISE: (
    description: string = "dust",
    nameOverride: string = "Elemental Demise",
  ): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } dies, its body disintegrates into ${description}, leaving behind only equipment the djinni was wearing or carrying.`,
    };
  },
  ELEMENTAL_WEAPONS: (damageType: string) =>
    bonusWeaponDamageTraitBuilder("Elemental Weapons", damageType)(),
  ENLARGE: (
    largestAdditionaldamage: number = 0,
    newSize: string,
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: largestAdditionaldamage },
      name: "Enlarge",
      text: (monster: Monster): string =>
        `For 1 minute, the ${
          monster.nameShort || monster.name
        } magically increases in size, along with anything it is wearing or carrying. While enlarged, the ${
          monster.nameShort || monster.name
        } is ${newSize}, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become ${newSize}, it attains the maximum size possible in the space available.`,
    };
  },
  EPHEMERAL: (): SpecialTrait => {
    return {
      effect: {},
      name: "Ephemeral",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can't wear or carry anything.`,
    };
  },
  ETHEREAL_JAUNT: (): SpecialTrait => {
    return {
      effect: {},
      name: "Ethereal Jaunt",
      text: (monster: Monster): string =>
        `As a Bonus Action, the ${
          monster.nameShort || monster.name
        } can magically shift from the Material Plane to the Ethereal Plane, or vice versa.`,
    };
  },
  ETHEREAL_SIGHT: (range: number = 60): SpecialTrait => {
    return {
      effect: {},
      name: "Etheral Sight",
      text: (monster: Monster) =>
        `The ${
          monster.nameShort || monster.name
        } can see ${range} feet into the Ethereal Plane when it is on the Material Plane, and vice versa.`,
    };
  },
  ETHEREALNESS: (extraText: string): SpecialTrait => {
    return {
      effect: {},
      name: "Etherealness",
      text: (monster: Monster): string =>
        `The ${
          monster.name
        } magically enters the Ethereal Plane from the Material Plane, or vice versa.${
          extraText ? ` ${extraText}` : ""
        })`,
    };
  },
  EVASION: (): SpecialTrait => {
    return {
      effect: {},
      name: "Evasion",
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the ${
          monster.nameShort || monster.name
        } instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  FALSE_APPEARANCE: (
    looksLikeA: string = "a complete mundane object",
    extraRequirement: string = "",
  ): SpecialTrait => {
    return {
      effect: {},
      name: "False Appearance",
      text: (monster: Monster): string =>
        `While the ${monster.nameShort || monster.name} remains motionless${
          extraRequirement ? " and " + extraRequirement : ""
        }, it is indistinguishable from ${looksLikeA}.`,
    };
  },
  FAULTLESS_TRACKER: (): SpecialTrait => {
    return {
      effect: {},
      name: "Faultless Tracker",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is given a quarry by its summoner. The ${
          monster.nameShort || monster.name
        } knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The ${
          monster.nameShort || monster.name
        } also knows the location of its summoner.`,
    };
  },
  FEY_ANCESTRY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Fey Ancestry",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on saving throws against being charmed, and magic can't put the ${
          monster.nameShort || monster.name
        } to sleep.`,
      tooltip:
        "Be sure to also mark these condition resistances in the Conditions table.",
    };
  },
  FIENDISH_BLESSING: (): SpecialTrait => {
    return {
      effect: {},
      name: "Fiendish Blessing",
      text: (monster: Monster): string =>
        `The AC of the ${
          monster.nameShort || monster.name
        } includes its Charisma bonus (already included).`,
      tooltip:
        "Be sure to include this AC bonus in the creature's AC. It will not happen automatically.",
    };
  },
  FIRE_AURA: (
    damage: number = 10,
    damageDice: string = "3d6",
    range: number = 5,
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: damage * 2 },
      name: "Fiendish Blessing",
      text: (monster: Monster): string =>
        `At the start of each of the ${
          monster.nameShort || monster.name
        }'s turns, each creature within ${range} feet of it takes ${damage} (${damageDice}) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the ${
          monster.nameShort || monster.name
        } or hits it with a melee attack while within 5 feet of it takes ${damage} (${damageDice}) fire damage.`,
      tooltip:
        "CR calculation is based on the Elemental Body trait, which has similar effects when the creature is hit, but Fire Aura's bonus to damage is great due to the ongoing damage effect.",
    };
  },
  FLYBY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Flyby",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } doesn't provoke opportunity attacks when it flies out of an enemy's reach.`,
    };
  },
  FREEDOM_OF_MOVEMENT: (): SpecialTrait => {
    return {
      effect: {},
      name: "Freedom of Movement",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  FREEZE: (amount: number = 20): SpecialTrait => {
    return {
      effect: {},
      name: "Freeze",
      text: (monster: Monster) =>
        `If the ${
          monster.nameShort || monster.name
        } takes cold damage, it partially freezes; its speed is reduced by ${amount} feet until the end of its next turn.`,
    };
  },
  FEAR_AURA: (
    dc: number = 0,
    monsterCr10OrLower: boolean,
    monsterHp: number,
    radius: number,
  ): SpecialTrait => {
    void monsterCr10OrLower;
    void monsterHp;
    return {
      // effect: { hp: monsterCr10OrLower ? 0 : Math.floor(monsterHp * 0.25) },
      effect: {},
      name: "Fear Aura",
      text: (monster: Monster): string =>
        `Any creature hostile to the ${
          monster.nameShort || monster.name
        } that starts its turn within ${radius} feet of the ${
          monster.nameShort || monster.name
        } must make a DC ${dc} Wisdom saving throw, unless the ${
          monster.nameShort || monster.name
        } is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the ${
          monster.nameShort || monster.name
        }'s Fear Aura for the next 24 hours.`,
      tooltip: NO_EFFECT_WARNING,
      // tooltip: "Fear Aura uses the same CR effect as Frightful Presence. While Fear Aura's effect is less powerful, it doesn't require an Action to activate."
    };
  },
  FRIGHTFUL_PRESENCE: (
    dc: number = 0,
    monsterCr10OrLower: boolean,
    monsterHp: number,
    radius: number = 5,
  ): SpecialTrait => {
    return {
      effect: { hp: monsterCr10OrLower ? Math.floor(monsterHp * 0.25) : 0 },
      name: "Frightful Presence",
      text: (monster: Monster): string =>
        `Each creature of the ${
          monster.nameShort || monster.name
        }'s choice that is within ${radius} feet of the ${
          monster.nameShort || monster.name
        } and aware of it must succeed on a DC ${dc} Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the ${
          monster.nameShort || monster.name
        }'s Frightful Presence for the next 24 hours.`,
    };
  },
  GIBBERING: (dc: number = 0, radius: number = 20): SpecialTrait => {
    return {
      effect: {},
      name: "Giberring",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within ${radius} feet of the ${
          monster.nameShort || monster.name
        } and can hear the gibbering must succeed on a DC ${dc} Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  GRAPPLER: (): SpecialTrait => {
    return {
      effect: {},
      name: "Grappler",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on attack rolls against any creature grappled by it.`,
    };
  },
  GRASPING_TENDRILS: (
    ac: number = 20,
    breakdc: number = 0,
    count: number = 6,
    hp: number = 0,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Grasping Tendrils",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can have up to ${count} tendrils at a time. Each tendril can be attacked (AC ${ac}; ${hp} hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the ${
          monster.nameShort || monster.name
        }, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC ${breakdc} Strength check against it.`,
    };
  },
  HEATED_WEAPONS: (): SpecialTrait => {
    return {
      effect: {}, // Damage will be factored into attacks
      name: "Heated Weapons",
      text: (monster: Monster): string =>
        `When the ${
          monster.nameShort || monster.name
        } hits with a metal melee weapon, it deals an extra fire damage (included in the attack).`,
    };
  },
  HELLISH_WEAPONS: bonusWeaponDamageTraitBuilder("Hellish Weapons", "poison"),
  HOLD_BREATH: (duration: string = "1 hour"): SpecialTrait => {
    return {
      effect: {},
      name: "Hold Breath",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can hold its breath for ${duration}.`,
    };
  },
  HORRIFIC_APPEARANCE: (
    dc: number = 0,
    monsterCr10OrLower: boolean,
    monsterHp: number,
    range: number = 5,
  ): SpecialTrait => {
    return {
      effect: { hp: monsterCr10OrLower ? 0 : Math.floor(monsterHp * 0.25) },
      name: "Horrific Appearance",
      text: (monster: Monster): string =>
        `Any humanoid that starts its turn within ${range} feet of the ${
          monster.nameShort || monster.name
        } and can see the  ${
          monster.nameShort || monster.name
        }'s true form must make a DC ${dc} Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the  ${
          monster.nameShort || monster.name
        } is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the  ${
          monster.nameShort || monster.name
        }'s Horrific Appearance for the next 24 hours.`,
      tooltip: "The CR effect is based on Horrifying Visage.",
    };
  },
  HORRIFYING_VISAGE: (
    dc: number = 0,
    monsterCr10OrLower: boolean,
    monsterHp: number,
    range: number = 5,
  ): SpecialTrait => {
    return {
      effect: { hp: monsterCr10OrLower ? 0 : Math.floor(monsterHp * 0.25) },
      name: "Horrifying Visage",
      text: (monster: Monster): string =>
        `Each non-­undead creature within ${range} feet of the ${
          monster.nameShort || monster.name
        } that can see it must
      succeed on a DC ${dc} Wisdom saving throw or be frightened for 1 minute.
      If the save fails by 5 or more, the target also ages 1d4 x 10 years.\n
      A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success.

If a target's
      saving throw is successful or the effect ends for it, the target is immune
      to this ${
        monster.nameShort || monster.name
      }'s Horrifying Visage for the next 24 hours. The aging effect
      can be reversed with a greater restoration spell, but only within 24 hours
      of it occurring.`,
    };
  },
  ICE_WALK: (): SpecialTrait => {
    return {
      effect: {},
      name: "Ice Walk",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.`,
    };
  },
  IGNITED_ILLUMINATION: (range: number = 10): SpecialTrait => {
    return {
      effect: {},
      name: "Ignited Illumination",
      text: (monster: Monster): string =>
        `As a bonus action, the ${
          monster.nameShort || monster.name
        } can set itself ablaze or extinguish its flames. While ablaze, the ${
          monster.nameShort || monster.name
        } sheds bright light in a ${range}-foot radius and dim light for an additional ${range} feet.`,
    };
  },
  ILLUMINATION: (range: number = 10): SpecialTrait => {
    return {
      effect: {},
      name: "Illumination",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } sheds bright light in a ${range}-­foot radius and dim light for an additional ${range} feet.`,
    };
  },
  ILLUSORY_APPEARANCE: (dc: number = 0): SpecialTrait => {
    return {
      effect: {},
      name: "Illusory Appearance",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } covers herself and anything she is wearing or carrying with a
      magical illusion that makes her look like an ugly creature of her general
      size and humanoid shape. The effect ends if the ${
        monster.nameShort || monster.name
      } takes a bonus action
      to end it or if she dies. The changes wrought by this effect fail to hold
      up to physical inspection. For example, the ${
        monster.nameShort || monster.name
      } could appear to have no
      claws, but someone touching her hand might feel the claws. Otherwise, a
      creature must take an action to visually inspect the illusion and succeed
      on a DC ${dc} Intelligence (Investigation) check to discern that the ${
        monster.nameShort || monster.name
      } is
      disguised.`,
    };
  },
  IMMUTABLE_FORM: (): SpecialTrait => {
    return {
      effect: {},
      name: "Immutable Form",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is immune to any spell or effect that would alter its form.`,
    };
  },
  INCORPOREAL_MOVEMENT: (
    damage: number = 5,
    damageDice: string = "1d10",
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Incorporeal Movement",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can move through other creatures and objects as if they were
      difficult terrain. It takes ${damage} (${damageDice}) force damage if it ends its turn inside
      an object.`,
    };
  },
  INSCRUTABLE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Inscrutable",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is immune to any effect that would sense its emotions or read its
      thoughts, as well as any divination spell that it refuses. Wisdom (Insight)
      checks made to ascertain the ${
        monster.nameShort || monster.name
      }'s intentions or sincerity have disadvantage.`,
    };
  },
  INVISIBILITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Invisibility",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } magically turns invisible until it attacks or until its concentration
      ends (as if concentrating on a spell). Any equipment the ${
        monster.nameShort || monster.name
      } wears or carries
      is invisible with it.`,
    };
  },
  INVISIBILITY_CONSTANT: (): SpecialTrait => {
    return {
      effect: {},
      name: "Invisibility",
      text: (monster: Monster): string =>
        `The ${monster.nameShort || monster.name} is invisibile.`,
    };
  },
  IRON_SCENT: (): SpecialTrait => {
    return {
      effect: {},
      name: "Iron Scent",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can pinpoint, by scent, the location of ferrous metal within 30 feet of it.`,
    };
  },
  KEEN_SENSES: (
    sensesName: string = "Senses",
    sensesDescription: string,
  ): SpecialTrait => {
    return {
      effect: {},
      name: `Keen ${sensesName}`,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Wisdom (Perception) checks${
          sensesDescription ? "that rely on " + sensesDescription : ""
        }.`,
    };
  },
  LABYRINTHINE_RECALL: (): SpecialTrait => {
    return {
      effect: {},
      name: "Labyrinthine Recall",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can perfectly recall any path it has traveled.`,
    };
  },
  LEADERSHIP: (): SpecialTrait => {
    return {
      effect: {},
      name: "Leadership",
      text: (monster: Monster): string =>
        `(Recharges after a Short or Long Rest). For 1 minute, the ${
          monster.nameShort || monster.name
        } can utter
      a special command or warning whenever a nonhostile creature that it can see
      within 30 feet of it makes an attack roll or a saving throw. The creature
      add a d4 to its roll provided it can hear and understand the ${
        monster.nameShort || monster.name
      }. A
      creature can benefit from only one Leadership die at a time. This effect
      ends if the ${monster.nameShort || monster.name} is incapacitated.`,
    };
  },
  LEGENDARY_RESISTANCE: (
    count: number = 3,
    monsterCr: string,
  ): SpecialTrait => {
    return {
      effect: { hp: count * legendaryResistanceEffectOnHp(monsterCr) },
      name: "Legendary Resistance",
      text: (monster: Monster): string =>
        `(${count}/day) If the ${
          monster.nameShort || monster.name
        } fails a saving throw, it can choose to succeed instead.`,
      tooltip: "Effect on hp is dependent on number of legendary resistances.",
    };
  },
  // Better handled as an Action
  // LIFE_DRAIN: {
  //   name: "Life Drain",
  //   text: (monster: Monster): string => "",
  // },
  LIMITED_AMPHIBIOUSNESS: (duration: string = "4 Hours"): SpecialTrait => {
    return {
      effect: {},
      name: "Limited Amphibiousness",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can breathe air and water, but it needs to be submerged at least once every ${duration} to avoid suffocating.`,
    };
  },
  LIMITED_MAGIC_IMMUNITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Limited Magic Immunity",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  LIMITED_TELEPATHY_A: (range: number = 30) => {
    return {
      effect: {},
      name: "Limited Telepathy",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can magically transmit simple messages and images to any creature within ${range} feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.`,
    };
  },
  LIMITED_TELEPATHY_B: (range: number = 30) => {
    return {
      effect: {},
      name: "Limited Telepathy",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can magically communicate simple ideas, emotions, and images telepathically with any creature within ${range} feet of it that can understand a language.`,
    };
  },
  LIGHT_SENSITIVITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Light Sensitivity",
      text: (monster: Monster): string =>
        `While in bright light, the ${
          monster.nameShort || monster.name
        } has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.`,
    };
  },
  MAGIC_RESISTANCE: (): SpecialTrait => {
    return {
      effect: { ac: 2 },
      name: "Magic Resistance",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on saving throws against spells and other magical effects.`,
    };
  },
  MAGIC_WEAPONS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Magic Weapons",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        }'s weapon attacks are magical.`,
    };
  },
  MARTIAL_ADVANTAGE: (damage: number = 0, damageDice: string): SpecialTrait => {
    return {
      effect: { damagePerRound: damage },
      name: "Martial Advantage",
      text: (monster: Monster): string =>
        `Once per turn, the ${
          monster.nameShort || monster.name
        } can deal an extra ${damage} (${damageDice}) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the ${
          monster.nameShort || monster.name
        } that isn't incapacitated.`,
    };
  },
  MIMICRY: (dc: number = 0): SpecialTrait => {
    return {
      effect: {},
      name: "Mimicry",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC ${dc} Wisdom (Insight) check.`,
    };
  },
  MISTY_ESCAPE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Misty Escape",
      text: (
        monster: Monster,
      ): string => `When it drops to 0 hit points outside its resting place, the ${
        monster.nameShort || monster.name
      } transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.

While it has 0 hit points in mist form, it can't revert to its ${
        monster.nameShort || monster.name
      } form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its ${
        monster.nameShort || monster.name
      } form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.`,
    };
  },
  MUCOUS_CLOUD: (dc = 0): SpecialTrait => {
    return {
      effect: {},
      name: "Mucuous Cloud",
      text: (monster: Monster): string =>
        `While underwater, the ${
          monster.nameShort || monster.name
        } is surrounded by transformative mucus. A creature that touches the ${
          monster.nameShort || monster.name
        } or that hits it with a melee attack while within 5 feet of it must make a DC ${dc} Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  MULTIPLE_HEADS: (
    damageToRemoveHead: number = 25,
    hpOnRegrowth = 10,
    initialHeads: string = "five",
  ) => {
    return {
      effect: {},
      name: "Multiple Heads",
      text: (monster: Monster) => `The ${
        monster.nameShort || monster.name
      } has ${initialHeads} heads. While it has more than one head, the ${
        monster.nameShort || monster.name
      } has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.

Whenever the ${
        monster.nameShort || monster.name
      } takes ${damageToRemoveHead} or more damage in a single turn, one of its heads dies. If all its heads die, the ${
        monster.nameShort || monster.name
      } dies.

At the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The ${
        monster.nameShort || monster.name
      } regains ${hpOnRegrowth} hit points for each head regrown in this way.`,
    };
  },
  NIMBLE_ESCAPE: (): SpecialTrait => {
    return {
      effect: { ac: 4, attack: 4 },
      name: "Nimble Escape",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can take the Disengage or Hide action as a bonus action on each of its turns.`,
    };
  },
  OTHERWORLDLY_PERCEPTION: (): SpecialTrait => {
    return {
      effect: {},
      name: "Otherworldly Perception",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can sense the presence of any creature within 30 feet of it that is invisible or on the Ethereal Plane. It can pinpoint such a creature that is moving.`,
    };
  },
  OOZE_CUBE: (
    damage: number = 10,
    damageDice: string = "3d6",
    dc: number = 0,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Ooze Cube",
      text: (monster: Monster) => `The ${
        monster.nameShort || monster.name
      } takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the ${
        monster.nameShort || monster.name
      }'s Engulf and has disadvantage on the saving throw.

Creatures inside the ${
        monster.nameShort || monster.name
      } can be seen but have total cover.

A creature within 5 feet of the ${
        monster.nameShort || monster.name
      } can take an action to pull a creature or object out of the ${
        monster.nameShort || monster.name
      }. Doing so requires a successful DC ${dc} Strength check, and the creature making the attempt takes ${damage} (${damageDice}) acid damage.

The ${
        monster.nameShort || monster.name
      } can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  PACK_TACTICS: (): SpecialTrait => {
    return {
      effect: { attack: 1 },
      name: "Pack Tactics",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on an attack roll against a creature if at one of the ${
          monster.nameShort || monster.name
        }'s allies is within 5 feet of the creature and the ally isn't incapacitated.`,
    };
  },
  PARRY: (): SpecialTrait => {
    return {
      effect: { ac: 1 },
      name: "Parry",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } adds 2 to its AC against one melee attack that would hit it. To do so, the ${
          monster.nameShort || monster.name
        } must see the attacker and be wielding a melee weapon.`,
    };
  },
  PETRIFYING_GAZE: (dc: number = 0): SpecialTrait => {
    return {
      effect: {},
      name: "Petrifying Gaze",
      text: (monster: Monster): string =>
        `When a creature that can see the ${
          monster.nameShort || monster.name
        }'s eyes starts its turn within 30 feet of the ${
          monster.nameShort || monster.name
        }, the ${
          monster.nameShort || monster.name
        } can force it to make a DC ${dc} Constitution saving throw if the ${
          monster.nameShort || monster.name
        } isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.

Unless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the ${
          monster.nameShort || monster.name
        } until the start of its next turn, when it can avert its eyes again. If the creature looks at the ${
          monster.nameShort || monster.name
        } in the meantime, it must immediately make the save.

If the ${
          monster.nameShort || monster.name
        } sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the ${
          monster.nameShort || monster.name
        } is, due to its curse, affected by its own gaze.`,
      tooltip: `There are minor differences in the wording of source text from the Basilisk and the MEdusa, but they are functionally identical. ${NO_EFFECT_WARNING}`,
    };
  },
  POSSESSION: (dc: number = 0, monsterHp: number): SpecialTrait => {
    return {
      effect: { hp: monsterHp },
      name: "Possession (Recharge 6)",
      text: (monster: Monster): string => `One humanoid that the ${
        monster.nameShort || monster.name
      } can see within 5 feet of it must succeed on a DC ${dc} Charisma saving throw or be possessed by the ${
        monster.nameShort || monster.name
      }; the ${
        monster.nameShort || monster.name
      } then disappears, and the target is incapacitated and loses control of its body. The ${
        monster.nameShort || monster.name
      } now controls the body but doesn't deprive the target of awareness. The ${
        monster.nameShort || monster.name
      } can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.

The possession lasts until the body drops to 0 hit points, the ${
        monster.nameShort || monster.name
      } ends it as a bonus action, or the ${
        monster.nameShort || monster.name
      } is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ${
        monster.nameShort || monster.name
      } reappears in an unoccupied space within 5 feet of the body. The target is immune to this ${
        monster.nameShort || monster.name
      }'s Possession for 24 hours after succeeding on the saving throw or after the possession ends.`,
    };
  },
  POUNCE: (
    attackThatTriggers: string = "melee weapon",
    followupAttackDamage: number = 0,
    dc: number = 0,
    distance: number = 20,
    followupAttack: string = attackThatTriggers,
    name: string = "Pounce",
  ): SpecialTrait => {
    return {
      effect: { damageOnce: followupAttackDamage },
      name: name,
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } moves at least ${distance} feet straight toward a creature and then
      hits it with a ${attackThatTriggers} attack on the same turn, that target must succeed on a
      DC ${dc} Strength saving throw or be knocked prone. If the target is prone, the
      ${
        monster.nameShort || monster.name
      } can make one ${followupAttack} attack against it as a bonus action.`,
    };
  },
  PROBING_TELEPATHY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Probing Telepathy",
      text: (monster: Monster): string =>
        `If a creature communicates telepathically with the ${
          monster.nameShort || monster.name
        }, the ${
          monster.nameShort || monster.name
        } learns the creature's greatest desires if the ${
          monster.nameShort || monster.name
        } can see the creature.`,
    };
  },
  PSYCHIC_DEFENSE: (): SpecialTrait => {
    return {
      effect: {}, // Factored into AC
      name: "Psychic Defense",
      text: (monster: Monster): string =>
        `While the ${
          monster.nameShort || monster.name
        } is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.`,
    };
  },
  RAMPAGE: (
    followupAttack: string = "melee weapon",
    followupAttackDamage: number,
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: followupAttackDamage / 2 },
      name: "Rampage",
      text: (monster: Monster): string =>
        `When the ${
          monster.nameShort || monster.name
        } reduces a creature to 0 hit points with a melee attack on
      its turn, the ${
        monster.nameShort || monster.name
      } can take a bonus action to move up to half its speed and
      make a ${followupAttack} attack.`,
    };
  },
  REACTIVE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Reactive",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can take one reaction on every turn in a combat.`,
    };
  },
  REACTIVE_HEADS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Reactive Heads",
      text: (monster: Monster): string =>
        `For each head the ${
          monster.nameShort || monster.name
        }, it gets an extra reaction that can be used only for opportunity attacks.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  READ_THOUGHTS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Read Thoughts",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the ${
          monster.nameShort || monster.name
        } can continue reading its thoughts, as long as the ${
          monster.nameShort || monster.name
        }'s concentration isn't broken (as if concentrating on a spell).

While reading the target's mind, the ${
          monster.nameShort || monster.name
        } has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.`,
    };
  },
  RECKLESS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Reckless",
      text: (monster: Monster): string =>
        `At the start of its turn, the ${
          monster.nameShort || monster.name
        } can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.`,
    };
  },
  REDIRECT_ATTACK: (): SpecialTrait => {
    return {
      effect: {},
      name: "Redirect Attack",
      text: (monster: Monster): string =>
        `When a creature the ${
          monster.nameShort || monster.name
        } can see targets it with an attack, the ${
          monster.nameShort || monster.name
        } chooses another ${
          monster.nameShort || monster.name
        } within 5 feet of it. The two ${
          monster.nameShort || monster.name
        }s swap places, and the chosen ${
          monster.nameShort || monster.name
        } becomes the target instead.`,
    };
  },
  REEL: (distance: number = 25): SpecialTrait => {
    return {
      effect: {},
      name: "Reel",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } pulls each creature grappled by it up to ${distance} feet straight toward it.`,
    };
  },
  REFLECTIVE_CARAPACE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Reflective Carapace",
      text: (monster: Monster): string =>
        `Any time the ${
          monster.nameShort || monster.name
        } is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the ${
          monster.nameShort || monster.name
        } is unaffected. On a 6, the ${
          monster.nameShort || monster.name
        } is unaffected, and the effect is reflected back at the caster as though it originated from the ${
          monster.nameShort || monster.name
        }, turning the caster into the target.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  REGENERATION: (amount: number = 0, extraText: string = ""): SpecialTrait => {
    return {
      effect: { hp: amount * 3 },
      name: "Regeneration",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } regains ${amount} hit points at the start of its turn if it
      has at least 1 hit point${extraText}.`,
      tooltip: 'Set the "HP" field to three times the amount of regeneration.',
    };
  },
  REGENERATION_TROLL: (amount: number = 0): SpecialTrait => {
    return {
      effect: { hp: amount * 3 },
      name: "Regeneration",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } regains ${amount} hit points at the start of its turn. If the ${
          monster.nameShort || monster.name
        } takes acid or fire damage, this trait doesn't function at the start of the ${
          monster.nameShort || monster.name
        }'s next turn. The ${
          monster.nameShort || monster.name
        } dies only if it starts its turn with 0 hit points and doesn't regenerate.`,
      tooltip: 'Set the "HP" field to three times the amount of regeneration.',
    };
  },
  REJUVENATION: (
    nameOverride: string = "Rejuvenation",
    text: string,
  ): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string => {
        void monster;
        return text;
      },
    };
  },
  RELENTLESS: (cr: string, damageThreshold: number = 0): SpecialTrait => {
    return {
      effect: { hp: relentlessEffectOnHp(cr) },
      name: "Relentless",
      text: (monster: Monster): string =>
        `(Recharges after a Short or Long Rest). If the ${
          monster.nameShort || monster.name
        } takes ${damageThreshold} damage or
      less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.`,
    };
  },
  RUNNING_LEAP: (
    jumpDistance: number = 0,
    runDistance: number = 10,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Running Leap",
      text: (monster: Monster): string =>
        `With a ${runDistance}-foot running start, the ${
          monster.nameShort || monster.name
        } can long jump up to ${jumpDistance} feet.`,
    };
  },
  RUST_METAL: (): SpecialTrait => {
    return {
      effect: {},
      name: "Rust Metal",
      text: (monster: Monster): string =>
        `Any nonmagical weapon made of metal that hits the ${
          monster.nameShort || monster.name
        } corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ${
          monster.nameShort || monster.name
        } is destroyed after dealing damage.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  SENSE_MAGIC: (range: number = 120): SpecialTrait => {
    return {
      effect: {},
      name: "Sense Magic",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } senses magic within ${range} feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.`,
    };
  },
  SHADOW_STEALTH: (): SpecialTrait => {
    return {
      effect: { ac: 4 },
      name: "Shadow Stealth",
      text: (monster: Monster): string =>
        `While in dim light or darkness, the ${
          monster.nameShort || monster.name
        } can take the Hide action as a bonus action.`,
    };
  },
  SHAPECHANGER: (text: string): SpecialTrait => {
    return {
      effect: {},
      name: "Shapechanger",
      text: (monster: Monster): string => {
        void monster;
        return text;
      },
    };
  },
  SHARK_TELEPATHY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Shark Telepathy",
      text: (monster: Monster) =>
        `The ${
          monster.nameShort || monster.name
        } can magically command any shark within 120 feet of it, using a limited telepathy.`,
    };
  },
  SHIELDED_MIND: (): SpecialTrait => {
    return {
      effect: {},
      name: "Shielded Mind",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.`,
    };
  },
  SIEGE_MONSTER: (): SpecialTrait => {
    return {
      effect: {},
      name: "Siege Monster",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } deals double damage to objects and structures.`,
    };
  },
  SLIPPERY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Slippery",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on ability checks and saving throws made to escape a grapple.`,
    };
  },
  SNEAK_ATTACK: (
    damage: number = 0,
    damageDice: string = "0d0",
  ): SpecialTrait => {
    return {
      effect: { damagePerRound: damage },
      name: "Sneak Attack",
      text: (monster: Monster): string =>
        `Once per turn, the ${
          monster.nameShort || monster.name
        } deals an extra ${damage} (${damageDice}) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the ${
          monster.nameShort || monster.name
        } that isn't incapacitated and the ${
          monster.nameShort || monster.name
        } doesn't have disadvantage on the attack roll.`,
      tooltip: "CR effect is based on Martial Advantage.",
    };
  },
  SPEAK_WITH_BEASTS_AND_PLANTS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Speak With Beasts and Plants",
      text: (monster: Monster): string =>
        `${monster.nameShort || monster.name}`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  SPELL_STORING: (boundToWhat: string = "amulet"): SpecialTrait => {
    return {
      effect: {},
      name: "Spell Storing",
      text: (monster: Monster): string =>
        `A spellcaster who wears the ${
          monster.nameShort || monster.name
        }'s ${lowerFirst(boundToWhat)} can cause the ${
          monster.nameShort || monster.name
        } to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the ${
          monster.nameShort || monster.name
        }. The spell has no effect but is stored within the ${
          monster.nameShort || monster.name
        }. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the ${
          monster.nameShort || monster.name
        } casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  SPIDER_CLIMB: (): SpecialTrait => {
    return {
      effect: {},
      name: "Spider Climb",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.`,
    };
  },
  SQUEEZE: (nameOverride: string = "Squeeze"): SpecialTrait => {
    return {
      effect: {},
      name: nameOverride,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.`,
    };
  },
  STANDING_LEAP: (height: number = 10, length: number = 20): SpecialTrait => {
    return {
      effect: {},
      name: "Standing Leap",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        }'s long jump is up to ${length} feet and its high jump is up to ${height} feet, with or without a running start.`,
    };
  },
  STEADFAST: (): SpecialTrait => {
    return {
      effect: {},
      name: "Steadfast",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can't be frightened while it can see an allied creature within 30 feet of it.`,
    };
  },
  STENCH: (dc: number = 0, range: number = 5): SpecialTrait => {
    return {
      effect: { ac: 1 },
      name: "Stench",
      text: (monster: Monster): string =>
        `Any creature that starts its turn within ${range} feet of the ${
          monster.nameShort || monster.name
        } must succeed on a DC ${dc} Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ${
          monster.nameShort || monster.name
        }'s Stench for 24 hours.`,
    };
  },
  SUNLIGHT_SENSITIVITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Sunlight Sensitivity",
      text: (monster: Monster): string =>
        `While in sunlight, the ${
          monster.nameShort || monster.name
        } has disadvantage on attack rolls, as well
      as on Wisdom (Perception) checks that rely on sight.`,
    };
  },
  SUNLIGHT_WEAKNESS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Sunlight Weakness",
      text: (monster: Monster): string =>
        `While in sunlight, the ${
          monster.nameShort || monster.name
        } has disadvantage on attack rolls, ability checks, and saving throws.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  SUPERIOR_INVISIBILITY: (): SpecialTrait => {
    return {
      effect: { ac: 2 },
      name: "Superior Invisibility",
      text: (monster: Monster): string =>
        `As a bonus action, the ${
          monster.nameShort || monster.name
        } can magically turn invisible until its concentration ends (as if concentrating on a spell). Any equipment the ${
          monster.nameShort || monster.name
        } wears or carries is invisible with it.`,
    };
  },
  SURE_FOOTED: (): SpecialTrait => {
    return {
      effect: {},
      name: "Sure-Footed",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.`,
    };
  },
  SURPRISE_ATTACK: (damage: number = 0, damageDice: string): SpecialTrait => {
    return {
      effect: { damageOnce: damage },
      name: "Surprise Attack",
      text: (monster: Monster): string =>
        `If the ${
          monster.nameShort || monster.name
        } surprises a creature and hits it with an attack during the first round of combat, the target takes an extra ${damage} (${damageDice}) damage from the attack.`,
    };
  },
  SWARM: (): SpecialTrait => {
    return {
      effect: {},
      name: "Swarm",
      text: (monster: Monster): string =>
        `The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny ${
          monster.nameShort || "creature"
        }. The swarm can't regain hit points or gain temporary hit points.`,
    };
  },
  /**
   * Remember to list the Swallow action as "reusable: 0" in the Actions section
   * @param swallowDamage
   * @returns SpecialTrait
   */
  // TODO: Check rules on crawling out and distance where you escape
  SWALLOW: (damage: number): SpecialTrait => {
    return {
      effect: { damageOnce: damage * 2 },
      hideFromStatBlock: true,
      name: "Swallow",
      text: (monster: Monster): string => {
        void monster;
        return "";
      },
      tooltip: `List Swallow as an action, and mark the "reusable" value for the creature's Swallow action as 0 so that this damage is not calculated multiple times. The "Damage Once" effect for this trait should be double the creature's average Swallow damage.`,
    };
  },
  TAIL_SPIKE_REGROWTH: (count: number = 24) => {
    return {
      effect: {},
      name: "Tail Spike Regrowth",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has ${count} tail spikes. Used spikes regrow when the ${
          monster.nameShort || monster.name
        } finishes a long rest.`,
      tooltip:
        "Intended to be used with a Tail Spike action similar to the Manticore's.",
    };
  },
  TELEPATHIC_BOND: (): SpecialTrait => {
    return {
      effect: {},
      name: "Telepathic Bond",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.`,
    };
  },
  TELEPATHIC_BOND_HOMUNCULUS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Telepathic Bond",
      text: (monster: Monster): string =>
        `While the ${
          monster.nameShort || monster.name
        } is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.`,
    };
  },
  TELEPORT: (range: number = 120): SpecialTrait => {
    return {
      effect: {},
      name: "Teleport",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } magically teleports, along with any equipment it is wearing or carrying, up to ${range} feet to an unoccupied space it can see.`,
    };
  },
  TERRAIN_CAMOUFLAGE: (
    terrainName: string,
    terrainDescription: string,
  ): SpecialTrait => {
    return {
      effect: {},
      name: `${terrainName} Camouflage`,
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Dexterity (Stealth) checks made to hide ${terrainDescription}.`,
    };
  },
  TRANSPARENT: (dc: number = 0): SpecialTrait => {
    return {
      effect: {},
      name: "Transparent",
      text: (monster: Monster) =>
        `Even when the ${
          monster.nameShort || monster.name
        } is in plain sight, it takes a successful DC ${dc} Wisdom (Perception) check to spot a ${
          monster.nameShort || monster.name
        } that has neither moved nor attacked. A creature that tries to enter the ${
          monster.nameShort || monster.name
        }'s space while unaware of the ${
          monster.nameShort || monster.name
        } is surprised by the ${monster.nameShort || monster.name}.`,
    };
  },
  TREASURE_SENSE: (range: number = 60): SpecialTrait => {
    return {
      effect: {},
      name: "Treasure Sense",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within ${range} feet of it.`,
    };
  },
  TREE_STRIDE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Tree Stride",
      text: (monster: Monster): string =>
        `Once on her turn, the  ${
          monster.nameShort || monster.name
        } can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger.`,
    };
  },
  TUNNELER: (size: number = 5): SpecialTrait => {
    return {
      effect: {},
      name: "Tunneler",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } can burrow through solid rock at half its burrow speed and leaves
      a ${size}-­foot­‐diameter tunnel in its wake.`,
    };
  },
  TURN_IMMUNITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Turn Immunity",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } is immune to effects that turn undead.`,
    };
  },
  TURNING_DEFIANCE: (range: number = 30): SpecialTrait => {
    return {
      effect: {},
      name: "Turning Defiance",
      text: (monster: Monster) =>
        `The ${
          monster.nameShort || monster.name
        } and any ghouls within ${range} feet of it have advantage on saving throws against effects that turn undead.`,
    };
  },
  TURN_RESISTANCE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Turn Resistance",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on saving throws against any effect that turns undead.`,
    };
  },
  TWO_HEADS: (): SpecialTrait => {
    return {
      effect: {},
      name: "Two Heads",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.`,
      tooltip:
        "Be sure to also mark the creature's condition responses on the Conditions table to match these effects.",
    };
  },
  UNDEAD_FORTITUDE: (cr: string): SpecialTrait => {
    return {
      effect: { hp: undeadFortitudeEffectOnHp(cr) },
      name: "Undead Fortitude",
      text: (monster: Monster): string =>
        `If damage reduces the ${
          monster.nameShort || monster.name
        } to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit.

On a success, the ${
          monster.nameShort || monster.name
        } drops to 1 hit point instead.`,
    };
  },
  WATER_BREATHING: (): SpecialTrait => {
    return {
      effect: {},
      name: "Water Breathing",
      text: (monster: Monster): string =>
        `The ${monster.nameShort || monster.name} can breathe only underwater.`,
    };
  },
  VAMPIRE_WEAKNESSES: (): SpecialTrait => {
    return {
      effect: {},
      name: "Vampire Weaknesses",
      text: (monster: Monster) => {
        void monster;
        return `The vampire has the following flaws:
  - Forbiddance. The vampire can't enter a residence without an invitation from one of the occupants.
  - Harmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.
  - Stake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.
  - Sunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.`;
      },
      tooltip: NO_EFFECT_WARNING,
    };
  },
  VARIABLE_ILLUMINATION: (
    rangeInner: number = 5,
    rangeOuter: number = 20,
  ): SpecialTrait => {
    return {
      effect: {},
      name: "Variable Illumination",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } sheds bright light in a ${rangeInner}- to ${rangeOuter}-foot radius and dim light for an additional number of feet equal to the chosen radius. The ${
          monster.nameShort || monster.name
        } can alter the radius as a bonus action.`,
    };
  },
  WAKEFUL: (): SpecialTrait => {
    return {
      effect: {},
      name: "Wakeful",
      text: (monster: Monster) =>
        `When one of the ${
          monster.nameShort || monster.name
        }'s heads is asleep, its other head is awake.`,
      tooltip:
        'Intended to be used with "Two Heads" or "Multiple Heads" traits.',
    };
  },
  WATER_SUSCEPTIBILITY: (): SpecialTrait => {
    return {
      effect: {},
      name: "Water Susceptibility",
      text: (monster: Monster) =>
        `For every 5 feet the ${
          monster.nameShort || monster.name
        } moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.`,
      tooltip: NO_EFFECT_WARNING,
    };
  },
  WEB: (): SpecialTrait => {
    return {
      effect: { ac: 1 },
      hideFromStatBlock: true,
      name: "Web",
      text: (monster: Monster): string => {
        void monster;
        return "";
      },
      tooltip: "List Web as an Action.",
    };
  },
  WEB_SENSE: (): SpecialTrait => {
    return {
      effect: {},
      name: "Web Sense",
      text: (monster: Monster): string =>
        `While in contact with a web, the ${
          monster.nameShort || monster.name
        } knows the exact location of any other creature in contact with the same web.`,
    };
  },
  WEB_WALKER: (): SpecialTrait => {
    return {
      effect: {},
      name: "Web Walker",
      text: (monster: Monster): string =>
        `The ${
          monster.nameShort || monster.name
        } ignores movement restrictions caused by webbing.`,
    };
  },
  WOUNDED_FURY: (
    damage: number = 0,
    damageDice: string = "0d0",
    damageThreshold: number = 10,
  ): SpecialTrait => {
    return {
      effect: { damageOnce: damage },
      name: "Wounded Fury",
      text: (monster: Monster): string => {
        void monster;
        return `While it has ${damageThreshold} hit points or fewer, the quaggoth has advantage on attack rolls. In addition, it deals an extra ${damage} (${damageDice}) damage to any target it hits with a melee attack.`;
      },
    };
  },
};
