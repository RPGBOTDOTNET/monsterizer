import { useField } from "formik";
import { noop } from "lodash";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import { type TextareaProps } from "./types";

export const FormikTextarea = ({
  className = "",
  floatLabel = true,
  id,
  label,
  onChange = noop,
  placeholder,
  style = {},
  ...remainingProps
}: TextareaProps): ReactElement => {
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
      <InputTextarea
        {...remainingProps}
        {...field}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        id={id}
        onChange={(event) => {
          helpers.setValue(event.target.value);
          onChange(event);
        }}
        placeholder={placeholder}
        style={{ resize: "vertical" }}
        tooltipOptions={TOOLTIP_SETTINGS}
      />
      {shouldFloat && <label htmlFor={id}>{label}</label>}
    </span>
  );
};

export default FormikTextarea;
