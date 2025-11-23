import type { ReactElement } from "react";
import CrCalculations from "./cr-calculations";
import { InnateSpellcastingControls, SpellcastingControls } from "./spells";
import { StyledH2 } from "./styled-elements";

export const MonsterizerSpellcasting = (): ReactElement => {
  return (
    <>
      <CrCalculations />
      <p>
        If you plan to use the updated stat blocks, use whichever set of
        controls below that you prefer (or both!). Your monster will use the
        save DC set in the innate spellcasting controls. Spells will not be
        grouped by level or spell slots, but "at will" spells (all at-will
        innate spells and cantrips from the Spellcasting section) will be group
        together. Use whichever controls make sense to you.
      </p>
      <StyledH2>Spellcasting</StyledH2>
      <InnateSpellcastingControls />
      <SpellcastingControls />
    </>
  );
};

export default MonsterizerSpellcasting;
