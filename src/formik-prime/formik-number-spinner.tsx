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

export const FormikNumberSpinner = ({
  buttonLayout = "vertical",
  className = "",
  id,
  label,
  onChange = noop,
  style = {},
  ...remainingProps
}: NumberInputProps): ReactElement => {
  const [field, meta, helpers] = useField(id);
  return (
    <div className={`p-field ${className}`} style={style}>
      <div>
        <label htmlFor={id} className="p-d-block">
          {label}
        </label>
      </div>
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
        showButtons={true}
        style={{ width: buttonLayout === "horizontal" ? "10em" : "6em" }}
        tooltipOptions={TOOLTIP_SETTINGS}
      />
    </div>
  );
};

export default FormikNumberSpinner;
