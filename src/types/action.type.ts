import type { AttackType } from "./attack.type";
import type { DamageType } from "./damage.type";

export const ActionTypes = {
  Action: "Action",
  BonusAction: "Bonus Action",
  Lair: "Lair",
  Legendary: "Legendary",
  Reaction: "Reaction",
} as const;
export type ActionType = (typeof ActionTypes)[keyof typeof ActionTypes];

export type ActionBase = {
  attackModifier?: number;
  attackType?: AttackType;
  averageDamage: number; // Average damage per target per use. 0 or more.
  damageExpression?: string;
  damageType?: DamageType;
  description: string;
  name: string;
  range?: string;
  reach?: number;
  targets: number; // Likely number of targets that will take damage for AOE stuff (multiattack is still typically just 1, most AOEs are 2)
  uuid?: string;
};

export type Action = {
  hideFromStatBlock?: boolean;
  reusable: number; // How many times can this be used in the first three rounds of combat? 1-3 for Actions/Reactions, 1-9 for Legendary Actions.
} & ActionBase;

export type LairAction = {} & ActionBase;

export type LegendaryAction = {
  cost: number; // How many Legendary Action usages does this cost? 1 to 3.
} & ActionBase;
