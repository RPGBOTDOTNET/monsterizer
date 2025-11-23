import { useFormikContext } from "formik";
import { Button } from "primereact/button";
import { Fieldset } from "primereact/fieldset";
import type { ReactElement } from "react";
import {
  FormikDropdown,
  FormikInput,
  FormikNumberSpinner,
  TOOLTIP_SETTINGS,
} from "../../formik-prime";
import { RestTypes, type MonsterizerFormData } from "../../types";
import { mapStringArrayForDropdown } from "../../utils";
import { spellcastionActionOptions } from "./constants";

const reusabiltyOptions = [
  { label: "At Will", value: undefined },
  ...Object.values(RestTypes).map(mapStringArrayForDropdown),
];

export const InnateSpellControl = ({
  index,
}: {
  index: number;
}): ReactElement => {
  const { setValues, values } = useFormikContext<MonsterizerFormData>();

  const removeSpell = () => {
    values.monster.innateSpellcasting!.spells.splice(index, 1);
    setValues({
      ...values,
    });
  };

  return (
    <Fieldset>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikInput
          id={`monster.innateSpellcasting.spells.${index}.name`}
          floatLabel={false}
          label="Name"
          required
          style={{ flexGrow: 1 }}
        />
        <FormikDropdown
          id={`monster.innateSpellcasting.spells.${index}.castingTime`}
          options={spellcastionActionOptions}
          label="Casting Time"
          style={{ width: "200px" }}
          tooltip="This is only used for CR calculations"
        />
      </div>
      <div
        className="grid flex-row justify-content-between align-items-end"
        style={{ margin: "0", width: "100%" }}
      >
        <FormikDropdown
          floatLabel={false}
          id={`monster.innateSpellcasting.spells.${index}.recharge`}
          label="At Will or Recharge"
          options={reusabiltyOptions}
          placeholder="At Will"
          tooltip="Leave empty for the spell to be usable at will."
        />
        <FormikNumberSpinner
          buttonLayout="horizontal"
          disabled={!values.monster.innateSpellcasting?.spells[index].recharge}
          id={`monster.innateSpellcasting.spells.${index}.uses`}
          label="Uses"
          min={0}
          step={1}
          tooltip="If you use the updated stat blocks, this will be overridden to once per day."
        />
        <Button
          icon="pi pi-trash"
          onClick={removeSpell}
          style={{ height: "53px" }}
          tooltip="Remove"
          tooltipOptions={TOOLTIP_SETTINGS}
          type="button"
        />
      </div>
    </Fieldset>
  );
};

export default InnateSpellControl;
