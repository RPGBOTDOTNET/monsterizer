import type { ReactElement } from "react";
import { skillLine } from "../../string-formatters";
import type { Monster } from "../../types";

export const SkillsRenderer = ({
  monster,
}: {
  monster: Monster;
}): ReactElement => {
  const skills = skillLine(monster);

  return (
    <>
      {skills && (
        <tr>
          <td>
            <strong>Skills</strong>&nbsp;
            <span>{skillLine(monster)}</span>
          </td>
        </tr>
      )}
    </>
  );
};

export default SkillsRenderer;
