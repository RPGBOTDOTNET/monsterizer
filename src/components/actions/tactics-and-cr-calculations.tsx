import { Fieldset } from "primereact/fieldset";
import { useState, type ReactElement } from "react";
import {
  DEFAULT_LEGENDARY_ACTION_CHARGES,
  bestActions,
  bestLairAction,
  bestLegendaryActions,
} from "../../calculators";
import damageFromAllActions from "../../calculators/dpr/damage-from-all-actions";
import { TURNS_TO_AVERAGE } from "../../constants";
import {
  ActionTypes,
  type Action,
  type ActionBase,
  type LairAction,
  type LegendaryAction,
  type Monster,
} from "../../types";
import actionsIncludingSpells from "../../utils/actions-including-spells";

type TacticsAndCrCalculationsProps = {
  monster: Monster;
};

type TurnRendererProps = {
  action: Action;
  bonusAction: Action | undefined;
  index: number;
  lairAction: LairAction | undefined;
  legendaryActions: Array<LegendaryAction>;
  reaction: Action | undefined;
};

const noActionName = "(No action name specified)";

const actionStringRenderer = (action: ActionBase) =>
  `${action.name || noActionName} - Deals ${action.averageDamage} damage${
    action.targets > 1 ? ` to each of ${action.targets} creatures` : ""
  }.`;

const TurnRenderer = ({
  action,
  bonusAction,
  index,
  lairAction,
  legendaryActions,
  reaction,
}: TurnRendererProps): ReactElement => {
  return (
    <>
      <h3 style={{ color: "inherit" }}>Turn #{index + 1}</h3>
      <ul>
        {action && <li>Action: {actionStringRenderer(action)}</li>}
        {bonusAction && (
          <li>Bonus Action: {actionStringRenderer(bonusAction)}</li>
        )}
        {reaction && <li>Reaction: {actionStringRenderer(reaction)}</li>}
        {lairAction && (
          <li>Bonus Action: {actionStringRenderer(lairAction)}</li>
        )}
        {(legendaryActions && legendaryActions.length && (
          <li>
            Legendary Action{legendaryActions.length > 1 ? "s" : ""} (
            {DEFAULT_LEGENDARY_ACTION_CHARGES} actions per round):
            <ul>
              {legendaryActions.map((legendaryAction: LegendaryAction) => {
                return (
                  <li key={legendaryAction.uuid as string}>
                    {legendaryAction.name || noActionName} (
                    {legendaryAction.cost} action) - Deals&nbsp;
                    {legendaryAction.averageDamage} damage
                    {legendaryAction.targets > 1
                      ? ` to each of ${
                          legendaryAction.targets
                        } creatures (total ${
                          legendaryAction.averageDamage *
                          legendaryAction.targets
                        })`
                      : ""}
                    .
                  </li>
                );
              })}
            </ul>
          </li>
        )) || <></>}
      </ul>
    </>
  );
};

export const TacticsAndCrCalculations = ({
  monster,
}: TacticsAndCrCalculationsProps): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);

  const allActions = actionsIncludingSpells(monster, ActionTypes.Action);
  const actions = bestActions(allActions);

  const allBonusActions = actionsIncludingSpells(
    monster,
    ActionTypes.BonusAction,
  );
  const bonusActions = bestActions(allBonusActions);

  const lairAction = bestLairAction(monster.lairActions || []);
  const legendaryActions = bestLegendaryActions(
    monster.legendaryActions || [],
    monster.legendaryActionsCount,
  );

  const allReactions = actionsIncludingSpells(monster, ActionTypes.Reaction);
  const reactions = bestActions(allReactions);

  const turnElements: ReactElement[] = [];
  for (let i = 0; i < TURNS_TO_AVERAGE; i++) {
    turnElements.push(
      <TurnRenderer
        action={actions[i]}
        bonusAction={bonusActions[i]}
        index={i}
        key={i}
        lairAction={lairAction}
        legendaryActions={legendaryActions}
        reaction={reactions[i]}
      />,
    );
  }

  return (
    <Fieldset
      legend="Tactics and CR Calculations"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <p>
        This section details the tactics used to calculate your creature's DPR
        (Damage Per Round), all of which are automatically determined based on
        what actions will deal the most damage per round. While your creature
        might not actually follow these tactics, this is the way that CR is
        calculated because it's difficult to mathematically quantify the value
        of things like casting buff spells or using non-damaging special
        abilities.
      </p>
      <p>
        DPR is calculated based on the creature's damage output over the first
        three rounds of combat, and assumes that all of the creature's attacks
        hit, that the targets of any special abilities fail their saves, and
        that the creature uses all of its bonus actions, reactions, lair
        actions, and legendary actions successfully (assuming it has some or any
        actions of those types).
      </p>
      <p>
        <strong>NOTE</strong>: The Monsterizer currently does not account for
        spellcasting of any kind unless you manually enter some spells as
        actions on this page.
      </p>
      {turnElements}
      <p>
        <strong>Average Damage Per Round:</strong>&nbsp;
        {damageFromAllActions(monster).toFixed(2)}
      </p>
    </Fieldset>
  );
};

export default TacticsAndCrCalculations;
