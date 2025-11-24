import type { ReactElement } from "react";
import type { Monster } from "../../types";

type DamageResponsesRendererProps = {
  monster: Monster;
};

export const DamageResponsesRenderer = ({
  monster,
}: DamageResponsesRendererProps): ReactElement => {
  return (
    <>
      {monster.damageVulnerabilities &&
        monster.damageVulnerabilities.length > 0 && (
          <tr>
            <td>
              <strong>Damage Vulnerabilities</strong>&nbsp;
              <span>
                {(monster.damageVulnerabilities || [])
                  .map((a: string) => a.toLocaleLowerCase())
                  .sort()
                  .join(", ")}
              </span>
            </td>
          </tr>
        )}
      {monster.damageResistances && monster.damageResistances.length > 0 && (
        <tr>
          <td>
            <strong>Damage Resistances</strong>&nbsp;
            <span>
              {(monster.damageResistances || [])
                .map((a: string) => a.toLocaleLowerCase())
                .sort()
                .join(", ")}
            </span>
          </td>
        </tr>
      )}
      {monster.damageImmunities && monster.damageImmunities.length > 0 && (
        <tr>
          <td>
            <strong>Damage Immunities</strong>&nbsp;
            <span>
              {(monster.damageImmunities || [])
                .map((a: string) => a.toLocaleLowerCase())
                .sort()
                .join(", ")}
            </span>
          </td>
        </tr>
      )}
    </>
  );
};

export default DamageResponsesRenderer;
