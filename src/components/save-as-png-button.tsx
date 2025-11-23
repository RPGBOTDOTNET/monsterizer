import domtoimage from "dom-to-image";
import FileSaver from "file-saver";
import { Button } from "primereact/button";
import { type ReactElement } from "react";

const captureAsImage = async (whatToCaptureId: string, fileName: string) => {
  const statBlockNode: HTMLElement | null =
    document.getElementById(whatToCaptureId);
  try {
    if (!statBlockNode)
      throw new Error(
        "Error: Unable to save output to file. Email RPGBOT about it. Send him a screenshot so he knows that I sent you.",
      );
    const imageBlob = await domtoimage.toBlob(statBlockNode);
    FileSaver.saveAs(imageBlob, `${fileName}.png`);
  } catch (error) {
    alert(error);
  }
};

type SaveAsPNGButtonProps = {
  fileName: string;
  whatToCaptureId: string;
};

export const SaveAsPNGButton = ({
  fileName,
  whatToCaptureId,
}: SaveAsPNGButtonProps): ReactElement => {
  return (
    <Button
      icon="pi pi-camera"
      label="Save As PNG"
      onClick={() => captureAsImage(whatToCaptureId, fileName)}
      style={{ width: "initial" }}
      type="button"
    />
  );
};

export default SaveAsPNGButton;
