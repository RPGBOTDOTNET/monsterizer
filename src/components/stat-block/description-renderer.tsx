import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Monster } from "../../types";
import { StatBlockSubHeader } from "./styled-elements";

export const DescriptionRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      {monster.description && (
        <>
          <StatBlockSubHeader>Description</StatBlockSubHeader>
          <Markdown>{monster.description.trim()}</Markdown>
        </>
      )}
    </>
  );
};

export default DescriptionRenderer;
