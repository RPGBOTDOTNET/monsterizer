import type { ReactElement } from "react";
import type { LairAction, Monster } from "../../types";
import GenericActionParagraph from "./generic-action-paragraph";
import { sortActionsByName } from "./sort-actions-by-name";
import { StatBlockSubHeader } from "./styled-elements";

export const LairActionsRendererContent = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      {monster
        .lairActions!.sort(sortActionsByName)
        .map((action: LairAction, index: number) => (
          <GenericActionParagraph
            key={(action.uuid as string) || index}
            action={action}
          />
        ))}
    </>
  );
};

export const LairActionsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  const showLairActions =
    monster.lairActions &&
    !!monster.lairActions.length &&
    monster.lairActions.filter((action: LairAction) => action.name);

  return (
    <>
      {(showLairActions && (
        <>
          <StatBlockSubHeader>Lair Actions</StatBlockSubHeader>
          <LairActionsRendererContent monster={monster} />
        </>
      )) || <></>}
    </>
  );
};

export default LairActionsRenderer;
