import {
  DamageAndConditionResponseTypes,
  type DamageModel,
  DamageTypes,
} from "../types";

export const EMPTY_DAMAGE_MODEL: DamageModel = {
  [DamageTypes.NMBludgeoning]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.NMPiercing]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.NMSlashing]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Bludgeoning]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Piercing]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Slashing]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Spells]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Acid]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Cold]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Fire]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Force]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Lightning]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Necrotic]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Poison]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Psychic]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Radiant]: DamageAndConditionResponseTypes.Normal,
  [DamageTypes.Thunder]: DamageAndConditionResponseTypes.Normal,
};
