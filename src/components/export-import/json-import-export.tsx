import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { InputTextarea } from "primereact/inputtextarea";
import { type ReactElement, useState } from "react";
import { UUID } from "../../constants";
import type { MonsterizerFormData } from "../../types";
import { removeKeyFromTree } from "../../utils";
import { CopyToClipboardButton } from "../copy-to-clipboard-button";
import { AlignRight, StyledH3 } from "../styled-elements";
import ImportMonster from "./import-monster";

export const JSONImportExport = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  const cleanedUpObject = removeKeyFromTree(values.monster, UUID);
  const jsonOutput = JSON.stringify(cleanedUpObject, null, 2);

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Import/Export Monsterizer JSON Data"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <ImportMonster />

      <StyledH3>Monsterizer JSON Data Output</StyledH3>
      <p>
        Save the contents of the field below to a text file. When we add the
        ability to import JSON data, this will serve as a "save file" for your
        monster.
      </p>
      <AlignRight>
        <CopyToClipboardButton whatToCopy={jsonOutput} />
      </AlignRight>
      <InputTextarea
        readOnly={true}
        style={{ resize: "vertical" }}
        value={jsonOutput}
      />
    </Fieldset>
  );
};

export default JSONImportExport;
