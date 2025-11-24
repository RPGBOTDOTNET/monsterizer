import { useFormikContext } from "formik";
import { get } from "lodash";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import {
  abilityModifier,
  savingThrowModifier,
  savingThrowsEffectOnAC,
} from "../../calculators";
import {
  FormikNumberInput,
  FormikToggleInput,
  ReadOnlyInput,
} from "../../formik-prime";
import { addSymbolToNumber, savingThrowLine } from "../../string-formatters";
import {
  type AbilityScore,
  type MonsterizerFormData,
  AbilityScores,
} from "../../types";

export const SavingThrowControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { values } = useFormikContext<MonsterizerFormData>();

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Saving Throws"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        Most creatures are proficient in no more than two types of saving
        throws. Creatures with proficiency in 3 or 4 saving throws add 2 to
        their effective AC when calculating their defensive CR. Creatures with
        proficiency in 5 or 6 saving throws instead add 4 to their effective AC.
      </p>
      <table style={{ width: "100%" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Ability Score</th>
            <th>Proficient</th>
            <th>Ability Mod</th>
            <th>Extra Mod</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(AbilityScores).map((ability: AbilityScore) => {
            return (
              <tr key={`monster.savingThrows.${ability}.proficient`}>
                <th style={{ textAlign: "left" }}>{ability}</th>
                <td style={{ width: "85px" }}>
                  <FormikToggleInput
                    id={`monster.savingThrows.${ability}.proficient`}
                    label="Proficient"
                    offIcon="pi-times"
                    offLabel="no"
                    onIcon="pi-check"
                    onLabel="yes"
                  />
                </td>
                <td>
                  <ReadOnlyInput
                    label={ability}
                    value={abilityModifier(
                      get(values, `monster.abilityScores.${ability}`, 0),
                    )}
                  />
                </td>
                <td>
                  <FormikNumberInput
                    floatLabel={false}
                    id={`monster.savingThrows.${ability}.additionalBonus`}
                    label="Extra Modifier"
                    tooltip="Any additional modifier beyond proficiency bonus and ability modifier."
                  />
                </td>
                <td>
                  <ReadOnlyInput
                    label="Total"
                    value={savingThrowModifier(values.monster, ability)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table>
        <tr>
          <td>
            <strong>Effect on Effective AC</strong>&nbsp;
            <span>
              {addSymbolToNumber(savingThrowsEffectOnAC(values.monster))}
            </span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Saving Throws</strong>&nbsp;
            <span>{savingThrowLine(values.monster)}</span>
          </td>
        </tr>
      </table>
    </Fieldset>
  );
};

export default SavingThrowControls;
