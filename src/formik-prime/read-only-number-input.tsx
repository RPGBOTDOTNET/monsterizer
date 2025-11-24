import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { type CSSProperties, type ReactElement } from "react";
import styled from "styled-components";
import { TOOLTIP_SETTINGS } from "./constants";

type ReadOnlyNumberInputProps = {
  className?: string;
  label: string;
  tooltip?: string;
  style?: CSSProperties;
  value: number | string;
};

const ReadOnlyInputWrapper = styled.div`
  input.p-component:disabled {
    opacity: 1;
  }
`;

export const ReadOnlyInput = ({
  className,
  label,
  style = {},
  tooltip,
  value,
  ...remainingProps
}: ReadOnlyNumberInputProps): ReactElement => {
  return (
    <ReadOnlyInputWrapper className={`p-field ${className || ""}`}>
      <div>
        <label className="p-d-block">{label}</label>
      </div>
      {typeof value === "number" && (
        <InputNumber
          disabled={true}
          readOnly={true}
          step={0}
          style={{ opacity: "1", width: "6em", ...style }}
          tooltip={tooltip}
          tooltipOptions={TOOLTIP_SETTINGS}
          value={value}
          {...remainingProps}
        />
      )}
      {typeof value === "string" && (
        <InputText
          disabled={true}
          readOnly={true}
          style={{ opacity: "1", width: "6em", ...style }}
          tooltip={tooltip}
          tooltipOptions={TOOLTIP_SETTINGS}
          value={value}
          {...remainingProps}
        />
      )}
    </ReadOnlyInputWrapper>
  );
};

export default ReadOnlyInput;
