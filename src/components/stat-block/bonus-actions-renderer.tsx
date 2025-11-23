import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Action, Monster } from "../../types";
import { sortActionsByName } from "./sort-actions-by-name";
import { StatBlockSubHeader } from "./styled-elements";

export const BonusActionsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  if (!monster.bonusActions) return <></>;

  const actionsToRender = monster.bonusActions.filter(
    (action: Action) => !action.hideFromStatBlock,
  );
  if (!actionsToRender.length) return <></>;

  return (
    <>
      <StatBlockSubHeader>Bonus Actions</StatBlockSubHeader>
      {actionsToRender
        .sort(sortActionsByName)
        .map((action: Action, index: number) => {
          return (
            <p key={(action.uuid as string) || index}>
              <Markdown>
                {`***${(action.name || "").trim()}.*** ${(
                  action.description || ""
                ).trim()}`}
              </Markdown>
            </p>
          );
        }) || <></>}
    </>
  );
};

export default BonusActionsRenderer;
