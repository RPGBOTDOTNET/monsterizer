import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import { acEffectOnCr, effectiveAC } from "../../calculators";
import { STATS_BY_CR_2014 } from "../../constants";
import { FormikInput, FormikNumberInput } from "../../formik-prime";
import type { MonsterizerFormData } from "../../types";
import AcRenderer from "../stat-block/ac-renderer";

export const AcControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { values } = useFormikContext<MonsterizerFormData>();

  return (
    <Fieldset
      legend="AC"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <FormikNumberInput
        id="monster.ac"
        label="AC"
        required={true}
        tooltip="The creature's total AC, including any items and any spells which it is expected to have in place when combat starts, such as Mage Armor."
      />
      <FormikInput
        id="monster.acNotes"
        label="AC Notes"
        tooltip="Describe the source of the creature's AC if its AC is more than just 10+Dex. Example: Chain Mail, Natural Armor, Shield, etc."
      />
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <AcRenderer monster={values.monster} />
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Recommended AC
            </th>
            <td>{STATS_BY_CR_2014[values.monster.challenge].ac}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Effective AC
            </th>
            <td>{effectiveAC(values.monster)}</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Defensive CR Adjustment
            </th>
            <td>{acEffectOnCr(values.monster, values.damageModel)}</td>
          </tr>
        </tbody>
      </table>
    </Fieldset>
  );
};

export default AcControls;
