import { useFormikContext } from "formik";
import { get } from "lodash";
import type { DropdownChangeEvent } from "primereact/dropdown";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import {
  abilityModifier,
  defensiveCRBase,
  effectiveHP,
} from "../../calculators";
import { HIT_DICE_BY_CREATURE_SIZE, STATS_BY_CR_2014 } from "../../constants";
import {
  FormikDropdown,
  FormikNumberSpinner,
  ReadOnlyInput,
} from "../../formik-prime";
import {
  type CreatureSize,
  type MonsterizerFormData,
  AbilityScores,
} from "../../types";
import { mapStringArrayForDropdown } from "../../utils";
import HitPointsRenderer from "../stat-block/hit-points-renderer";

const sizeOptions = Object.keys(HIT_DICE_BY_CREATURE_SIZE).map(
  mapStringArrayForDropdown,
);

export const HitPointsControls = (): ReactElement => {
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const { setFieldValue, values } = useFormikContext<MonsterizerFormData>();

  const changeSizeHandler = (e: DropdownChangeEvent): void => {
    const newHdSize = HIT_DICE_BY_CREATURE_SIZE[e.target.value as CreatureSize];
    setFieldValue("monster.hitDice.size", newHdSize);
  };

  return (
    <Fieldset
      legend="Hit Dice and Hit Points"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <FormikDropdown
        id="monster.size"
        label="size"
        onChange={changeSizeHandler}
        options={sizeOptions}
        tooltip="By default, size determines the size of the creature's hit dice."
      />
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikNumberSpinner
          buttonLayout="horizontal"
          id="monster.hitDice.count"
          label="Number of Hit Dice"
          min={0}
          required={true}
          step={1}
        />
        <ReadOnlyInput
          label="HD Size"
          tooltip="Hit die size is determined by the creature's size and can't be manually changed."
          value={values.monster.hitDice.size || ""}
        />
        <ReadOnlyInput
          label="Con Modifier"
          value={abilityModifier(
            get(values, `monster.abilityScores.${AbilityScores.Constitution}`),
          )}
        />
        <FormikNumberSpinner
          buttonLayout="horizontal"
          id="monster.hitDice.modifier"
          label="Additional HP Modifier"
          min={0}
          required={true}
          step={1}
          tooltip="Any additional hit points per hit die in addition to the creature's Constitution modifier."
        />
      </div>
      <table>
        <tbody>
          <tr>
            <td colSpan={3}>
              <HitPointsRenderer monster={values.monster} />
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Recommended HP
            </th>
            <td colSpan={2}>
              {STATS_BY_CR_2014[values.monster.challenge].hpMin}
              &nbsp;to&nbsp;
              {STATS_BY_CR_2014[values.monster.challenge].hpMax}
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Effective Hit Points
            </th>
            <td>{effectiveHP(values.monster, values.damageModel)}</td>
            <td>Determines base defensive CR</td>
          </tr>
          <tr>
            <th style={{ textAlign: "left", whiteSpace: "nowrap" }}>
              Base Defensive CR
            </th>
            <td>{defensiveCRBase(values.monster, values.damageModel)}</td>
            <td>Final defensive CR is adjusted by effective AC.</td>
          </tr>
        </tbody>
      </table>
    </Fieldset>
  );
};

export default HitPointsControls;
