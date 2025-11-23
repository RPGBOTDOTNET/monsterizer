import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";

export const FoundyExport = (): ReactElement => {
  // const { values } = useFormikContext<MonsterizerFormData>();
  // const cleanedUpObject = removeKeyFromTree(values.monster, UUID);
  // const markdownOuput = monsterToMarkdown(cleanedUpObject);
  const [fieldsetCollapsed, setFieldsetCollapsed] = useState<boolean>(true);

  return (
    <Fieldset
      collapsed={fieldsetCollapsed}
      legend="Foundry VTT"
      onToggle={(e) => setFieldsetCollapsed(e.value)}
      toggleable
    >
      <p>
        Install the&nbsp;
        <a
          href="https://www.foundryvtt-hub.com/package/5e-statblock-importer/"
          target="_blank"
        >
          5e stat block importer
        </a>
        &nbsp;plugin (written by J Haywood), and copy+paste the stat block
        directly into the plugin. It should work as-is, but for additional
        instructions, see the&nbsp;
        <a
          href="https://github.com/jbhaywood/5e-statblock-importer"
          target="_blank"
        >
          GitHub
        </a>
        &nbsp;page for the plugin.
      </p>
    </Fieldset>
  );
};

export default FoundyExport;
