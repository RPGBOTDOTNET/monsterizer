import type { ReactElement } from "react";
import { StyledH2, StyledH3 } from "../styled-elements";
import { DndbeyondExport } from "./dndbeyond-export";
import FoundyExport from "./foundry-export";
import Gm5eExport from "./gm-5e-export";
import JSONImportExport from "./json-import-export";
import MarkdownExport from "./markdown-export";
import Roll20Export from "./roll20-export";

export const MonsterizerExport = (): ReactElement => {
  try {
    return (
      <>
        <StyledH2>Export / Import</StyledH2>
        <JSONImportExport />

        <DndbeyondExport />
        <Gm5eExport />
        <MarkdownExport />

        <StyledH3>Virtual Tabletops</StyledH3>

        <FoundyExport />
        <Roll20Export />

        <StyledH3>Other Places</StyledH3>

        <ul>
          <li>
            <strong>
              <a href="http://DMBinder.com/" target="_blank">
                DMBinder
              </a>
              :
            </strong>
            &nbsp; Copy and paste the text of the stat block from the Stat Block
            page. The formatting will be retained when you paste it into
            DMBinder's editor.
          </li>
        </ul>
      </>
    );
  } catch (e) {
    return <div>Error: {(e as Error).message}</div>;
  }
};

export default MonsterizerExport;
