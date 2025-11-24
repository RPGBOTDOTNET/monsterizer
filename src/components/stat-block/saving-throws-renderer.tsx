import type { ReactElement } from "react";
import { savingThrowLine } from "../../string-formatters";
import type { Monster } from "../../types";

export const SavingThrowsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  const saves = savingThrowLine(monster);

  return (
    <>
      {saves && (
        <tr>
          <td>
            <strong>Saving Throws</strong>&nbsp;
            <span>{savingThrowLine(monster)}</span>
          </td>
        </tr>
      )}
    </>
  );
};

export default SavingThrowsRenderer;
