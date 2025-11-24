import { useFormikContext } from "formik";
import { Fieldset } from "primereact/fieldset";
import { InputTextarea } from "primereact/inputtextarea";
import { type ReactElement, useState } from "react";
import { UUID } from "../../constants";
import {
  mapMarkdownTextToHomebrewery,
  monsterToMarkdown,
} from "../../print-to-markdown";
import type { MonsterizerFormData } from "../../types";
import { removeKeyFromTree } from "../../utils";
import { CopyToClipboardButton } from "../copy-to-clipboard-button";
import { AlignRight } from "../styled-elements";

export const MarkdownExport = (): ReactElement => {
  const { values } = useFormikContext<MonsterizerFormData>();
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  const cleanedUpObject = removeKeyFromTree(values.monster, UUID);
  const markdownOuput = monsterToMarkdown(cleanedUpObject);

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Updated Stat Block Markdown"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        This is generic markdown for use anywhere that Markdown is supported,
        such as Reddit. The Homebrewery version of markdown is built to work
        with Natural Crit's&nbsp;
        <a href="https://homebrewery.naturalcrit.com/" target="_blank">
          Homebrewery
        </a>
        .
      </p>
      <AlignRight>
        <CopyToClipboardButton whatToCopy={markdownOuput} />
        <CopyToClipboardButton
          label="Copy Homebrewery Markdown"
          tooltip="Visit Natural Crit's Homebrewery and paste this output for a beautifully-formatted stat block."
          whatToCopy={mapMarkdownTextToHomebrewery(markdownOuput)}
        />
      </AlignRight>
      <InputTextarea
        readOnly={true}
        style={{ resize: "vertical" }}
        value={markdownOuput}
      />
    </Fieldset>
  );
};

export default MarkdownExport;
