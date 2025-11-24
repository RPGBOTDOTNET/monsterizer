import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Action, Monster } from "../../types";
import { sortActionsByName } from "./sort-actions-by-name";
import { StatBlockSubHeader } from "./styled-elements";

export const ReactionsRendererContent = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      {monster.reactions
        .sort(sortActionsByName)
        .map((action: Action, index: number) => (
          <p key={(action.uuid as string) || index}>
            <Markdown>
              {`***${action.name.trim()}.*** ${action.description.trim()}`}
            </Markdown>
          </p>
        ))}
    </>
  );
};

export const ReactionsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  const showReactions =
    monster.reactions &&
    monster.reactions.length &&
    monster.reactions.filter((action: Action) => action.name);

  return (
    <>
      {(showReactions && (
        <>
          <StatBlockSubHeader>Reactions</StatBlockSubHeader>
          <ReactionsRendererContent monster={monster} />
        </>
      )) || <></>}
    </>
  );
};

export default ReactionsRenderer;
