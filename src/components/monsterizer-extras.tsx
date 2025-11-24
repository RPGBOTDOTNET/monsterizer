import { Fieldset } from "primereact/fieldset";
import { type ReactElement, useState } from "react";
import { FormikTextarea } from "../formik-prime";
import CrCalculations from "./cr-calculations";
import MarkdownTooltip from "./markdown-tooltip";
import SpecialTraitsControls from "./special-traits-controls";
import { StyledH2 } from "./styled-elements";

export const MonsterizerExtras = (): ReactElement => {
  const [descriptionFieldsetCollapsed, setDescriptionFielsetCollapsed] =
    useState<boolean>(false);
  const [inventoryFieldsetCollapsed, setInventoryFielsetCollapsed] =
    useState<boolean>(false);

  // TODO: re-apply special traits if base stats change

  try {
    return (
      <>
        <CrCalculations />
        <StyledH2>Extras</StyledH2>
        <SpecialTraitsControls />
        <Fieldset
          legend="Description and Tactics"
          toggleable
          collapsed={descriptionFieldsetCollapsed}
          onToggle={(e) => setDescriptionFielsetCollapsed(e.value)}
        >
          <MarkdownTooltip />
          <FormikTextarea id="monster.description" label="Description" />
          <FormikTextarea id="monster.tactics" label="Tactics" />
        </Fieldset>
        <Fieldset
          legend="Inventory"
          toggleable
          collapsed={inventoryFieldsetCollapsed}
          onToggle={(e) => setInventoryFielsetCollapsed(e.value)}
        >
          <p>
            Your creature's inventory should reflect any items that are
            considered in their statistics (armor, weapons, magic items, etc.)
            and any items which your creature typically carries like food or
            pocket change.
          </p>
          <MarkdownTooltip />
          <FormikTextarea id="monster.inventory" label="Inventory" />
        </Fieldset>
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default MonsterizerExtras;
