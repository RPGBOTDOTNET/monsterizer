import type { Action, LairAction, LegendaryAction } from "../types";

export const EMPTY_ACTION: Action = {
  averageDamage: 0,
  description: "",
  name: "",
  reusable: 3,
  targets: 1,
};

export const EMPTY_LAIR_ACTION: LairAction = {
  averageDamage: 0,
  description: "",
  name: "",
  targets: 1,
};

export const EMPTY_LEGENDARY_ACTION: LegendaryAction = {
  averageDamage: 0,
  cost: 1,
  description: "",
  name: "",
  targets: 1,
};

export const EMPTY_REACTION: Action = {
  averageDamage: 0,
  description: "",
  name: "",
  reusable: 3,
  targets: 1,
};
