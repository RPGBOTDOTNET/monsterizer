import type { ReactElement } from "react";
import type { Monster } from "../../types";

type AcRendererProps = {
  monster: Monster;
};

export const AcRenderer = ({ monster }: AcRendererProps): ReactElement => {
  return (
    <>
      <strong>Armor Class</strong>&nbsp;
      <span>
        {monster.ac}&nbsp;
        {monster.acNotes ? `(${monster.acNotes})` : ""}
      </span>
    </>
  );
};

export default AcRenderer;
