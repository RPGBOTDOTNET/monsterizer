import { useField } from "formik";
import { noop } from "lodash";
import { PrimeIcons } from "primereact/api";
import {
  ToggleButton,
  type ToggleButtonChangeEvent,
} from "primereact/togglebutton";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import { type ToggleInputProps } from "./types";

export const FormikToggleInput = ({
  className = "",
  id,
  offIcon = PrimeIcons.CHECK,
  onChange = noop,
  onIcon = PrimeIcons.TIMES,
  label,
  style = {},
  ...remainingProps
}: ToggleInputProps): ReactElement => {
  const [field, meta, helpers] = useField(id);
  return (
    <div className={`p-field ${className}`} style={style}>
      <div>
        <label className="p-d-block" htmlFor={`${id}-${label}`}>
          {label}
        </label>
      </div>
      <ToggleButton
        {...remainingProps}
        {...field}
        checked={field.value}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        id={id}
        offIcon={`pi ${offIcon}`}
        onChange={(event: ToggleButtonChangeEvent) => {
          helpers.setValue(event.value);
          onChange(event);
        }}
        onIcon={`pi ${onIcon}`}
        style={{ height: "53px" }}
        tooltipOptions={TOOLTIP_SETTINGS}
      ></ToggleButton>
    </div>
  );
};

export default FormikToggleInput;
