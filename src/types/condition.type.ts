import type { DamageAndConditionResponseType } from "./damage.type";

export const Conditions = {
  Blinded: "Blinded",
  Charmed: "Charmed",
  Deafened: "Deafened",
  Exhaustion: "Exhaustion",
  Fatigued: "Fatigued",
  Frightened: "Frightened",
  Grappled: "Grappled",
  Incapacitated: "Incapacitated",
  Invisible: "Invisible",
  Paralyzed: "Paralyzed",
  Petrified: "Petrified",
  Poisoned: "Poisoned",
  Prone: "Prone",
  Restrained: "Restrained",
  Stunned: "Stunned",
  Unconscious: "Unconscious",
} as const;

export type Condition = (typeof Conditions)[keyof typeof Conditions];

type ConditionOrDamageModelManual = {
  immunityText?: string;
  resistanceText?: string;
  vulnerabilityText?: string;
};

export type ConditionModel = {
  [key in Condition]?: DamageAndConditionResponseType;
} & ConditionOrDamageModelManual;
