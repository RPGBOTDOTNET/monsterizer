import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { useState, type ReactElement } from "react";
import { abilityModifier, skillModifier } from "../calculators";
import { SKILLS_TO_ABILITIES } from "../constants";
import {
  FormikNumberSpinner,
  FormikToggleInput,
  ReadOnlyInput,
} from "../formik-prime";
import { addSymbolToNumber } from "../string-formatters";
import { Skills, type MonsterizerFormData, type Skill } from "../types";

export const SkillsControls = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);

  return (
    <Fieldset
      legend="Skills"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Skill</th>
            <th>Proficient</th>
            <th>Extra Bonus</th>
            <th>Ability Mod</th>
            <th>Total Mod</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(Skills)
            .sort()
            .map((skill: Skill): ReactElement => {
              const relevantAbilityScore = SKILLS_TO_ABILITIES[skill];
              const abilityMod = abilityModifier(
                values.monster.abilityScores[relevantAbilityScore],
              );
              const skillMod = skillModifier(values.monster, skill);
              return (
                <tr key={`monster.skills.${skill}.proficient`}>
                  <th style={{ textAlign: "left" }}>{skill}</th>
                  <td style={{ width: "85px" }}>
                    <FormikToggleInput
                      id={`monster.skills.${skill}.proficient`}
                      label="Proficienct"
                      offIcon="pi-times"
                      offLabel="No"
                      onIcon="pi-check"
                      onLabel="Yes"
                    />
                  </td>
                  <td>
                    <FormikNumberSpinner
                      buttonLayout="horizontal"
                      id={`monster.skills.${skill}.additionalBonus`}
                      label="Extra Bonus"
                      step={1}
                    />
                  </td>
                  <td>
                    <ReadOnlyInput
                      label="Ability"
                      value={addSymbolToNumber(abilityMod)}
                    />
                  </td>
                  <td>
                    <ReadOnlyInput
                      label="Skill Modifier"
                      value={addSymbolToNumber(skillMod)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fieldset>
  );
};

export default SkillsControls;
