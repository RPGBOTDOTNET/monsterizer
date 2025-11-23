import { useFormikContext } from "formik";
import { get } from "lodash";
import { Fieldset } from "primereact/fieldset";
import { Tooltip } from "primereact/tooltip";
import { type ReactElement, useState } from "react";
import { damageResponseEffectOnHp } from "../../calculators";
import {
  FormikInput,
  FormikRadioInput,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import {
  type MonsterizerFormData,
  DamageAndConditionResponseTypes,
  DamageTypes,
} from "../../types";
import DamageResponsesRenderer from "../stat-block/damage-responses-renderer";
import { ResponsesTable } from "./styled-elements";

export const DamageResponseControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { values } = useFormikContext<MonsterizerFormData>();

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Damage Immunities, Resistances, and Vulnerabilities"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        Damage immunities, resistances, and vulnerabilities affect the
        creature's CR by multiplying and/or dividing the creature's "effective
        hit points."" Resistances and immunities multiply the creature's
        effective hit points based on the creature's target CR, and the size of
        this multiplier shrinks as the creature's CR increases and players are
        expected to be better-equipped to overcome damage resistances.
      </p>

      <p>
        Vulnerabilities typically do not affect the creature's CR, but if the
        creature is vulnerable to several common damage types (e.g.: Vulnerable
        to bludgeoning, piercing, and slashing damage), the creature's
        "effective hit points" are halved. In these cases it may be simpler to
        remove the vulnerability and simply reduce the creature's hit points.
        The effect will likely be the same, and the creature will be less
        difficult for the DM to control.
      </p>
      <ResponsesTable>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Damage Type</th>
            <th>{DamageAndConditionResponseTypes.Vulnerability}</th>
            <th>{DamageAndConditionResponseTypes.Normal}</th>
            <th>{DamageAndConditionResponseTypes.Resistance}</th>
            <th>{DamageAndConditionResponseTypes.Immunity}</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(DamageTypes).map((damageType: string) => {
            return (
              <tr key={damageType}>
                <th style={{ textAlign: "left" }}>{damageType}</th>
                {Object.keys(DamageAndConditionResponseTypes).map(
                  (responseKey: string) => {
                    return (
                      <td key={`${damageType}-${responseKey}`}>
                        <FormikRadioInput
                          id={`damageModel.${damageType}`}
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
        data-pr-tooltip="Custom vulnerabilities, resistances, immunities should be used sparingly, but work for things like vulnerability to silvered weapons."
        id="custom-damage-wrapper"
      >
        <Tooltip {...TOOLTIP_SETTINGS} target="#custom-damage-wrapper" />
        <FormikInput
          id="damageModel.vulnerabilityText"
          label="Custom Vulnerability"
        />
        <FormikInput
          id="damageModel.resistanceText"
          label="Custom Resistance"
        />
        <FormikInput id="damageModel.immunityText" label="Custom Immunity" />
      </div>
      <table>
        <tr>
          <td>
            <strong>Damage response effect:</strong>&nbsp; "Effective hit
            points" will by multiplied by x
            {damageResponseEffectOnHp(values.monster, values.damageModel)}
          </td>
        </tr>
        <DamageResponsesRenderer monster={values.monster} />
      </table>
    </Fieldset>
  );
};

export default DamageResponseControls;
