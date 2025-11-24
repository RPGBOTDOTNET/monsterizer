import { useField } from "formik";
import { noop } from "lodash";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { type ReactElement } from "react";
import { TOOLTIP_SETTINGS } from "./constants";
import { type DropdownProps } from "./types";

export const FormikDropdown = ({
  className = "",
  floatLabel = true,
  id,
  label,
  placeholder,
  onChange = noop,
  style = {},
  ...remainingProps
}: DropdownProps): ReactElement => {
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
      <Dropdown
        {...remainingProps}
        {...field}
        // appendTo={dropdownAppendTarget}
        className={classNames({ "p-invalid": meta.touched && meta.error })}
        filterBy="label"
        id={id}
        // Need to manually call onChange and helpers.setValue() since we're overriding onChange
        onChange={(event: DropdownChangeEvent) => {
          helpers.setValue(event.value);
          onChange(event.value);
        }}
        placeholder={placeholder}
        showFilterClear={true}
        tooltipOptions={TOOLTIP_SETTINGS}
      />
      {shouldFloat && <label htmlFor={id}>{label}</label>}
    </span>
  );
};

export default FormikDropdown;
