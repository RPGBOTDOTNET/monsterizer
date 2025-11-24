import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { LegendaryAction, Monster } from "../../types";
import { sortActionsByName } from "./sort-actions-by-name";
import { StatBlockSubHeader } from "./styled-elements";

export const LegendaryActionsRendererContent = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      <p>
        The {monster.name} can take {monster.legendaryActionsCount || 3}&nbsp;
        legendary&nbsp;
        {!monster.legendaryActionsCount || monster.legendaryActionsCount === 1
          ? "actions"
          : "action"}
        , choosing from the options below. Only one legendary action option can
        be used at a time and only at the end of another creature's turn.
        The&nbsp;
        {monster.name}&nbsp;regains spent legendary actions at the start of its
        turn.
      </p>
      {monster
        .legendaryActions!.sort(sortActionsByName)
        .map((legendaryAction: LegendaryAction, index: number) => {
          const legendaryActionCost =
            legendaryAction.cost > 1
              ? ` (Costs ${legendaryAction.cost} actions)`
              : "";
          return (
            <p key={(legendaryAction.uuid as string) || index}>
              <Markdown>
                {`***${legendaryAction.name.trim()}${legendaryActionCost}.*** ${legendaryAction.description.trim()}`}
              </Markdown>
            </p>
          );
        })}
    </>
  );
};

export const LegendaryActionsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  const showLegendaryActions =
    monster.legendaryActions &&
    monster.legendaryActions.length &&
    monster.legendaryActions.filter((action: LegendaryAction) => action.name);

  return (
    <>
      {(showLegendaryActions && (
        <>
          <StatBlockSubHeader>Legendary Actions</StatBlockSubHeader>
          <LegendaryActionsRendererContent monster={monster} />
        </>
      )) || <></>}
    </>
  );
};

export default LegendaryActionsRenderer;
