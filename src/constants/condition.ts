import {
  Conditions,
  DamageAndConditionResponseTypes,
  type ConditionModel,
} from "../types";

export const EMPTY_CONDITION_MODEL: ConditionModel = {
  [Conditions.Blinded]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Charmed]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Deafened]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Exhaustion]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Fatigued]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Frightened]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Grappled]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Incapacitated]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Invisible]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Paralyzed]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Petrified]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Poisoned]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Prone]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Restrained]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Stunned]: DamageAndConditionResponseTypes.Normal,
  [Conditions.Unconscious]: DamageAndConditionResponseTypes.Normal,
};
