import { useFormikContext } from "formik";
import type { ReactElement } from "react";
import {
  acEffectOnCr,
  attackOrDcEffectOnCR,
  averageDPR,
  challengeRating,
  damageFromSpecialTraits,
  damageResponseEffectOnHp,
  defensiveCR,
  defensiveCRBase,
  effectiveAC,
  effectiveHP,
  hitPoints,
  offensiveCR,
  specialTraitsEffectOnHP,
} from "../calculators";
import damageFromAllActions from "../calculators/dpr/damage-from-all-actions";
import offensiveCRBase from "../calculators/offensive-cr-base";
import { addSymbolToNumber } from "../string-formatters";
import type { MonsterizerFormData } from "../types";
import { CrCalcTable } from "./styled-elements";

export const CrCalculations = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();

  try {
    return (
      <figure className="wp-block-table">
        <CrCalcTable style={{}}>
          <caption>Challenge Rating</caption>
          <tbody>
            <tr>
              <th>Target CR</th>
              <td>{values.monster.challenge}</td>
              <th>Calculated CR</th>
              <td>
                {challengeRating(
                  values.monster,
                  values.conditionModel,
                  values.damageModel,
                )}
              </td>
            </tr>
          </tbody>
        </CrCalcTable>
        <CrCalcTable
          style={{
            border: "1px solid currentColor",
            borderCollapse: "collapse",
            margin: "0 auto",
            width: "400px",
          }}
        >
          <caption>CR Calculations</caption>
          <thead>
            <tr
              style={{
                borderBottom: "1px solid currentColor",
                textAlign: "center",
              }}
            >
              <th>Defensive CR</th>
              <td>
                {defensiveCR(
                  values.monster,
                  values.conditionModel,
                  values.damageModel,
                )}
              </td>
              <th>Offensive CR</th>
              <td>{offensiveCR(values.monster)}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ textAlign: "right" }}>Base HP</th>
              <td>{hitPoints(values.monster)}</td>
              <th style={{ textAlign: "right" }}>Action DPR</th>
              <td>{damageFromAllActions(values.monster).toFixed(2)}</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>Traits</th>
              <td>
                {addSymbolToNumber(
                  +specialTraitsEffectOnHP(
                    values.monster.specialTraits || [],
                  ).toFixed(2),
                )}
              </td>
              <th style={{ textAlign: "right" }}>Traits</th>
              <td>
                {addSymbolToNumber(
                  +damageFromSpecialTraits(
                    values.monster.specialTraits || [],
                  ).toFixed(2),
                )}
              </td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>Damage Response</th>
              <td>
                x{damageResponseEffectOnHp(values.monster, values.damageModel)}
              </td>
              <th style={{ textAlign: "right" }}></th>
              <td></td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>Effective HP</th>
              <td>
                {effectiveHP(values.monster, values.damageModel).toFixed(2)}
              </td>
              <th style={{ textAlign: "right" }}>Effective DPR</th>
              <td>{averageDPR(values.monster).toFixed(2)}</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>Base Defensive CR</th>
              <td>{defensiveCRBase(values.monster, values.damageModel)}</td>
              <th style={{ textAlign: "right" }}>Base Offensive CR</th>
              <td>{offensiveCRBase(values.monster)}</td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>Effective AC</th>
              <td>{effectiveAC(values.monster)}</td>
              <th style={{ textAlign: "right" }}></th>
              <td></td>
            </tr>
            <tr>
              <th style={{ textAlign: "right" }}>AC Adjustment</th>
              <td>
                {addSymbolToNumber(
                  acEffectOnCr(values.monster, values.damageModel),
                )}
                &nbsp;to DCR
              </td>
              <th style={{ textAlign: "right" }}>Attack/DC</th>
              <td>
                {addSymbolToNumber(attackOrDcEffectOnCR(values.monster))}
                &nbsp;to OCR
              </td>
            </tr>
          </tbody>
        </CrCalcTable>
      </figure>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};
export default CrCalculations;
