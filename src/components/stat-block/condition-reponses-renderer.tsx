import type { ReactElement } from "react";
import type { Monster } from "../../types";

type DamageResponsesRendererProps = {
  monster: Monster;
};

export const ConditionResponsesRenderer = ({
  monster,
}: DamageResponsesRendererProps): ReactElement => {
  return (
    <>
      {monster.conditionVulnerabilities &&
        monster.conditionVulnerabilities.length > 0 && (
          <tr>
            <td>
              <strong>Condition Vulnerabilities</strong>&nbsp;
              <span>
                {(monster.conditionVulnerabilities || [])
                  .map((a) => a.toLocaleLowerCase())
                  .sort()
                  .join(", ")}
              </span>
            </td>
          </tr>
        )}
      {monster.conditionResistances &&
        monster.conditionResistances.length > 0 && (
          <tr>
            <td>
              <strong>Condition Resistances</strong>&nbsp;
              <span>
                {(monster.conditionResistances || [])
                  .map((a) => a.toLocaleLowerCase())
                  .sort()
                  .join(", ")}
              </span>
            </td>
          </tr>
        )}
      {monster.conditionImmunities &&
        monster.conditionImmunities.length > 0 && (
          <tr>
            <td>
              <strong>Condition Immunities</strong>&nbsp;
              <span>
                {(monster.conditionImmunities || [])
                  .map((a) => a.toLocaleLowerCase())
                  .sort()
                  .join(", ")}
              </span>
            </td>
          </tr>
        )}
    </>
  );
};

export default ConditionResponsesRenderer;
