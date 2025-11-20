import { ActionTypes, type Monster } from "../../types";
import actionsIncludingSpells from "../../utils/actions-including-spells";
import damageFromActions from "./damage-from-actions";
import damageFromLairActions from "./damage-from-lair-actions";
import damageFromLegendaryActions from "./damage-from-legendary-actions";

export const damageFromAllActions = (monster: Monster): number => {
  const allActions = actionsIncludingSpells(monster, ActionTypes.Action);
  const allBonusActions = actionsIncludingSpells(
    monster,
    ActionTypes.BonusAction,
  );
  const allReactions = actionsIncludingSpells(monster, ActionTypes.Reaction);

  return (
    damageFromActions(allActions) +
    damageFromActions(allBonusActions) +
    damageFromLairActions(monster.lairActions || []) +
    damageFromLegendaryActions(
      monster.legendaryActions || [],
      monster.legendaryActionsCount,
    ) +
    damageFromActions(allReactions)
  );
};

export default damageFromAllActions;
