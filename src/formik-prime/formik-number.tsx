import { useField } from "formik";
import { noop } from "lodash";
import {
  InputNumber,
  type InputNumberChangeEvent,
} from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import { type NumberInputProps } from "./types";

export const FormikNumberInput = ({
  buttonLayout,
  className = "",
  floatLabel = true,
  id,
  label,
  onChange = noop,
  placeholder,
  style = {},
  ...remainingProps
}: NumberInputProps): ReactElement => {
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
      <InputNumber
        {...remainingProps}
        {...field}
        buttonLayout={buttonLayout}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        id={id}
        inputMode="numeric"
        // Need to manually call onChange and helpers.setValue() since we're overriding onChange
        onChange={(event: InputNumberChangeEvent) => {
          helpers.setValue(event.value);
          onChange(event);
        }}
        placeholder={placeholder}
        showButtons={!!buttonLayout}
        tooltipOptions={TOOLTIP_SETTINGS}
      />
      {shouldFloat && <label htmlFor={id}>{label}</label>}
    </span>
  );
};

export default FormikNumberInput;
