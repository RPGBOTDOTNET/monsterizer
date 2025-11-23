import { v4 as uuidv4 } from "uuid";
import { ActionTypes, type SpellcastingSpell } from "../../types";

export const spellcastionActionOptions = [
  { label: ActionTypes.Action, value: ActionTypes.Action },
  { label: ActionTypes.BonusAction, value: ActionTypes.BonusAction },
  { label: ActionTypes.Reaction, value: ActionTypes.Reaction },
  { label: "Other", value: undefined },
];

export const newEmptySpell = (): SpellcastingSpell => ({
  castBeforeCombat: false,
  castingTime: ActionTypes.Action,
  damage: 0,
  name: "",
  targets: 0,
  uuid: uuidv4(),
});
