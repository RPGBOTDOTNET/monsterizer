import { useField } from "formik";
import { noop } from "lodash";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import { type InputProps } from "./types";

export const FormikInput = ({
  className = "",
  floatLabel = true,
  id,
  label,
  onChange = noop,
  placeholder,
  style = {},
  ...remainingProps
}: InputProps): ReactElement => {
  const [field, meta, helpers] = useField(id);
  const shouldFloat = floatLabel && !placeholder;

  const extendedStyles = {
    marginTop: shouldFloat ? "10px" : "",
    ...style,
  };

  return (
    <span
      className={`${shouldFloat ? "p-float-label" : ""} ${className}`}
      style={extendedStyles}
    >
      {!shouldFloat && <label htmlFor={id}>{label}</label>}
      <InputText
        {...remainingProps}
        {...field}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        id={id}
        // Need to manually call onChange and helpers.setValue() since we're overriding onChange
        onChange={(event) => {
          helpers.setValue(event.target.value);
          onChange(event);
        }}
        placeholder={placeholder}
        tooltipOptions={TOOLTIP_SETTINGS}
      />
      {shouldFloat && <label htmlFor={id}>{label}</label>}
    </span>
  );
};

export default FormikInput;
