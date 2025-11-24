import { useFormikContext } from "formik";
import { map } from "lodash";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { UUID } from "../constants";
import {
  FormikInput,
  FormikNumberSpinner,
  FormikTextarea,
  FormikToggleInput,
  TOOLTIP_SETTINGS,
} from "../formik-prime";
import { SPECIAL_TRAITS } from "../monster-srd/monster-traits";
import type { MonsterizerFormData, SpecialTrait } from "../types";
import MarkdownTooltip from "./markdown-tooltip";

const SpecialTraitsOptions = map(
  SPECIAL_TRAITS,
  (specialTraitFunction, key: string) => {
    const trait: SpecialTrait = specialTraitFunction();
    return {
      label: trait.name,
      tooltip: trait.tooltip,
      value: key,
    };
  },
);

export const SpecialTraitsControls = (): ReactElement => {
  const { setValues, values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(false);
  const [specialTraitKey, setSpecialTraitKey] = useState<string>();

  const setSpecialTraits = (specialTraitsArray: Array<SpecialTrait>) => {
    // TODO: Use setFieldValue
    setValues({
      ...values,
      monster: {
        ...values.monster,
        specialTraits: specialTraitsArray,
      },
    });
  };

  const addNewTrait = () => {
    const newTrait: SpecialTrait = {
      effect: {},
      name: "",
      text: () => "",
    };
    setSpecialTraits([...(values.monster.specialTraits || []), newTrait]);
  };

  const addPublishedTrait = () => {
    const newTrait: SpecialTrait = SPECIAL_TRAITS[specialTraitKey!]();
    newTrait.description = newTrait.text(values.monster);
    setSpecialTraits([...(values.monster.specialTraits || []), newTrait]);
    setSpecialTraitKey("");
  };

  const removeTrait = (indexToRemove: number) => {
    const oldArray = [...(values.monster.specialTraits || [])];
    oldArray.splice(indexToRemove, 1);
    setSpecialTraits(oldArray);
  };

  // Apply uuid to any items that don't already have it, then re-assign formik values
  if (values.monster.specialTraits && values.monster.specialTraits.length) {
    let needsReset = false;
    values.monster.specialTraits.forEach((trait) => {
      if (!trait[UUID]) {
        trait[UUID] = uuidv4();
        needsReset = true;
      }
    });
    if (needsReset) {
      setValues(values);
    }
  }

  return (
    <Fieldset
      legend="Special Traits"
      toggleable
      collapsed={fieldsetCollapsed}
      onToggle={(e) => setFieldsetCollapsed(e.value)}
    >
      <div>
        <span className="p-float-label" style={{ marginTop: "10px" }}>
          <Dropdown
            // appendTo={dropdownAppendTarget}
            id="published-special-traits"
            onChange={(event: DropdownChangeEvent) => {
              setSpecialTraitKey(event.value);
            }}
            filter={true}
            filterBy="label"
            options={SpecialTraitsOptions}
            showFilterClear={true}
            tooltipOptions={TOOLTIP_SETTINGS}
            value={specialTraitKey}
          />
          <label htmlFor="published-special-traits">
            Published Special Traits
          </label>
        </span>
        <Button
          icon="pi pi-plus"
          disabled={!specialTraitKey}
          label="Add to Creature"
          onClick={addPublishedTrait}
          type="button"
        />
      </div>
      {(values.monster.specialTraits || []).map(
        (specialTrait: SpecialTrait, index: number) => {
          const idStub = `monster.specialTraits.${index}`;
          return (
            <Fieldset key={(specialTrait.uuid as string) || index}>
              {!!specialTrait.tooltip && <p>NOTE: {specialTrait.tooltip}</p>}
              <FormikInput id={`${idStub}.name`} label="Name" />
              <MarkdownTooltip />
              <FormikTextarea
                id={`${idStub}.description`}
                label="Description"
              />
              <div
                className="grid flex-row justify-content-between align-items-end"
                style={{ margin: "0", width: "100%" }}
              >
                <FormikNumberSpinner
                  id={`${idStub}.effect.ac`}
                  label="AC"
                  tooltip="Effects which improve the creature's effective AC, such as those created by spells like Displacement."
                />
                <FormikNumberSpinner
                  id={`${idStub}.effect.attack`}
                  label="Attack Bonus"
                  tooltip="Effects which improve the accuracy of the creature's attacks, such as Pack Tactics."
                />
                <FormikNumberSpinner
                  id={`${idStub}.effect.damageOnce`}
                  label="Damage (Once)"
                  tooltip="Damage bonuses which will typically apply once per ecounter, such as effects which only work the first round of combat or which occur when the creature dies."
                />
                <FormikNumberSpinner
                  id={`${idStub}.effect.damagePerRound`}
                  label="Damage Per Round"
                  tooltip="Damage bonuses which will typically apply every turn, such as an aura of fire damage. Boosts to damage (like Angelic Weapons, etc.) from actions should usually be included in actions, and this number should be left at 0."
                />
                <FormikNumberSpinner
                  id={`${idStub}.effect.hp`}
                  label="HP"
                  tooltip="Effects which will improve the creature's ability to endure damage or otherwise mitigate hit point damage, such as Damage Transfer or Frightening Presence."
                />
              </div>
              <div
                className="grid flex-row justify-content-between align-items-end"
                style={{ margin: "10px 0 0 0", width: "100%" }}
              >
                <FormikToggleInput
                  id={`${idStub}.hideFromStatBlock`}
                  label="Hide on Stat Block?"
                  offIcon="pi-eye"
                  offLabel="Show"
                  onIcon="pi-eye-slash"
                  onLabel="Hide"
                  tooltip='Certain special traits, such as "Swallow", should be added as traits but hidden from the stat block in order to calculate CR properly.'
                />
                <Button
                  icon="pi pi-trash"
                  onClick={() => removeTrait(index)}
                  style={{ width: "auto" }}
                  tooltip="Remove this trait"
                  tooltipOptions={TOOLTIP_SETTINGS}
                  type="button"
                />
              </div>
            </Fieldset>
          );
        },
      )}
      <div style={{ marginTop: "10px" }}>
        <Button
          icon="pi pi-plus"
          label="Add New Trait"
          onClick={addNewTrait}
          tooltipOptions={TOOLTIP_SETTINGS}
          type="button"
        />
      </div>
    </Fieldset>
  );
};

export default SpecialTraitsControls;
