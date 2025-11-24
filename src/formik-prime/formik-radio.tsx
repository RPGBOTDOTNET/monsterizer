import { useField } from "formik";
import { noop } from "lodash";
import {
  RadioButton,
  type RadioButtonChangeEvent,
} from "primereact/radiobutton";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import type { RadioInputProps } from "./types";

export const FormikRadioInput = ({
  className = "",
  id,
  label,
  onChange = noop,
  style = {},
  value,
  ...remainingProps
}: RadioInputProps): ReactElement => {
  const [field, meta, helpers] = useField(id);

  const extendedStyles = {
    marginTop: "10px",
    ...style,
  };

  return (
    <span className={className} style={extendedStyles}>
      <RadioButton
        {...remainingProps}
        {...field}
        checked={field.value === value}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        inputId={`${id}-${label}`}
        name={id}
        onChange={(event: RadioButtonChangeEvent) => {
          helpers.setValue(event.value);
          onChange(event.value);
        }}
        tooltipOptions={TOOLTIP_SETTINGS}
        value={value}
      />
      <label htmlFor={`${id}-${label}`}>&nbsp;{label}</label>
    </span>
  );
};

export default FormikRadioInput;
