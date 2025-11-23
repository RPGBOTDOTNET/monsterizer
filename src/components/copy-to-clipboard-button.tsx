import copy from "copy-to-clipboard";
import { Button } from "primereact/button";
import { type ReactElement, useState } from "react";
import { TOOLTIP_SETTINGS } from "../formik-prime";

type CopyToClipboardButtonProps = {
  label?: string;
  tooltip?: string;
  whatToCopy: string;
};

export const CopyToClipboardButton = ({
  label = "Copy to Clipboard",
  tooltip,
  whatToCopy,
}: CopyToClipboardButtonProps): ReactElement => {
  const [copySuccessful, setCopySuccessful] = useState<boolean>(false);

  return (
    <Button
      icon={copySuccessful ? "pi pi-check" : "pi pi-copy"}
      label={label}
      onClick={() => {
        copy(whatToCopy);
        setCopySuccessful(true);
        const timeout = setTimeout(() => {
          setCopySuccessful(false);
          clearTimeout(timeout);
        }, 3000);
      }}
      style={{ width: "auto" }}
      tooltip={tooltip}
      tooltipOptions={TOOLTIP_SETTINGS}
    />
  );
};
