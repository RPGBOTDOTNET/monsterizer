import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Monster } from "../../types";
import { StatBlockSubHeader } from "./styled-elements";

export const TacticsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      {monster.tactics && (
        <>
          <StatBlockSubHeader>Tactics</StatBlockSubHeader>
          <Markdown>{monster.tactics.trim()}</Markdown>
        </>
      )}
    </>
  );
};

export default TacticsRenderer;
