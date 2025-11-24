import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Action, Monster } from "../../types";
import SpellcastingRendererUpdated from "./spellcasting-renderer-updated";
import { StatBlockSubHeader } from "./styled-elements";

type ActionToRender = {
  isSpellcasting?: boolean;
} & Partial<Action>;

type ActionsRendererProps = {
  monster: Monster;
  showBonusActions: boolean;
  showSpellcasting: boolean;
};

export const ActionsRendererContent = ({
  monster,
  showBonusActions,
  showSpellcasting,
}: ActionsRendererProps): ReactElement => {
  const actions: ActionToRender[] = [
    ...monster.actions,
    ...(showBonusActions && monster.bonusActions ? monster.bonusActions : []),
  ];

  if (showSpellcasting) {
    if (
      (monster.innateSpellcasting &&
        monster.innateSpellcasting.spells &&
        monster.innateSpellcasting.spells.length) ||
      (monster.spellcasting && monster.spellcasting.length)
    ) {
      actions.push({
        name: "Spellcasting",
        isSpellcasting: true,
      });
    }
  }

  return (
    <>
      {actions
        .sort((actionA: ActionToRender, actionB: ActionToRender) => {
          if (actionA.name === "Multiattack") {
            return -1;
          } else if (actionB.name === "Multiattack") {
            return 1;
          }
          return (actionA.name || "").localeCompare(actionB.name || "");
        })
        .map((action: ActionToRender, index: number) => {
          if (action.hideFromStatBlock) return null;
          if (action.isSpellcasting)
            return (
              <SpellcastingRendererUpdated
                key={(action.uuid as string) || index}
                monster={monster}
              />
            );

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

export const ActionsRenderer = (props: ActionsRendererProps): ReactElement => {
  return (
    <>
      <StatBlockSubHeader>Actions</StatBlockSubHeader>
      <ActionsRendererContent {...props} />
    </>
  );
};

export default ActionsRenderer;
