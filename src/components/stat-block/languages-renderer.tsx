import type { ReactElement } from "react";
import { languagesText } from "../../string-formatters";
import type { Monster } from "../../types";

type LanguagesRendererProps = {
  monster: Monster;
};

export const LanguagesRenderer = ({
  monster,
}: LanguagesRendererProps): ReactElement => {
  return (
    <tr>
      <td>
        <strong>Languages</strong>&nbsp;
        {languagesText(monster)}
      </td>
    </tr>
  );
};

export default LanguagesRenderer;
