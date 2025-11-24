import { useFormikContext } from "formik";
import { get } from "lodash";
import { Fieldset } from "primereact/fieldset";
import { Tooltip } from "primereact/tooltip";
import { type ReactElement, useState } from "react";
import {
  FormikInput,
  FormikRadioInput,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import {
  type MonsterizerFormData,
  Conditions,
  DamageAndConditionResponseTypes,
} from "../../types";
import ConditionResponsesRenderer from "../stat-block/condition-reponses-renderer";
import { ResponsesTable } from "./styled-elements";

export const ConditionResponseControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { values } = useFormikContext<MonsterizerFormData>();

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Status Conditions"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        Condition immunities do not affect the creature's CR. Condition
        immunities should be logical for the monster: Golems should be immune to
        poison, blind enemies should be immune to blindness, etc.
      </p>
      <p>
        The game rules don't actually use the terms "vulnerability" and
        "resistance" for conditions. Here, they mean Disadvantage or Advantage
        on saves against that condition. For example: a dwarf would have
        resistance to the Poisoned condition.
      </p>
      <ResponsesTable>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Condition</th>
            <th>{DamageAndConditionResponseTypes.Vulnerability}</th>
            <th>{DamageAndConditionResponseTypes.Normal}</th>
            <th>{DamageAndConditionResponseTypes.Resistance}</th>
            <th>{DamageAndConditionResponseTypes.Immunity}</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(Conditions).map((condition: string) => {
            return (
              <tr key={condition}>
                <th style={{ textAlign: "left" }}>{condition}</th>
                {Object.keys(DamageAndConditionResponseTypes).map(
                  (responseKey: string) => {
                    return (
                      <td key={`${condition}-${responseKey}`}>
                        <FormikRadioInput
                          id={`conditionModel.${condition}`}
                          label={responseKey}
                          value={get(
                            DamageAndConditionResponseTypes,
                            responseKey,
                          )}
                        />
                      </td>
                    );
                  },
                )}
              </tr>
            );
          })}
        </tbody>
      </ResponsesTable>
      <div
        data-pr-tooltip="Custom vulnerabilities, resistances, immunities should be used sparingly, but work for unusual cases."
        id="custom-condition-wrapper"
      >
        <Tooltip {...TOOLTIP_SETTINGS} target="#custom-condition-wrapper" />
        <FormikInput
          id="conditionModel.vulnerabilityText"
          label="Custom Vulnerability"
        />
        <FormikInput
          id="conditionModel.resistanceText"
          label="Custom Resistance"
        />
        <FormikInput id="conditionModel.immunityText" label="Custom Immunity" />
      </div>
      <table>
        <ConditionResponsesRenderer monster={values.monster} />
      </table>
    </Fieldset>
  );
};

export default ConditionResponseControls;
