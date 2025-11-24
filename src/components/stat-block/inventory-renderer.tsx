import Markdown from "markdown-to-jsx";
import type { ReactElement } from "react";
import type { Monster } from "../../types";
import { StatBlockSubHeader } from "./styled-elements";

export const InventoryRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  return (
    <>
      {monster.inventory && (
        <>
          <StatBlockSubHeader>Inventory</StatBlockSubHeader>
          <Markdown>{monster.inventory.trim()}</Markdown>
        </>
      )}
    </>
  );
};

export default InventoryRenderer;
